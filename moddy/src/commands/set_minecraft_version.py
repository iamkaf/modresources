from __future__ import annotations

import argparse
import json
import re
import urllib.parse
import xml.etree.ElementTree as ET
from pathlib import Path

from ..utils import fetch_url_text, logger
from .. import AUTO_YES


def _get_artifact_latest(meta_url: str, mc_version: str):
    try:
        xml_text = fetch_url_text(meta_url)
    except Exception:
        return None
    versions = re.findall(r"<version>([^<]+)</version>", xml_text)
    prefix = mc_version + "-"
    candidates = [v for v in versions if v.startswith(prefix)]
    if not candidates:
        return None
    stable = [v for v in candidates if "-rc" not in v and "-pre" not in v]
    versions = stable if stable else candidates
    versions.sort()
    return versions[-1]


def _get_neoform_version(mc: str):
    url = (
        "https://maven.neoforged.net/releases/net/neoforged/neoform/maven-metadata.xml"
    )
    return _get_artifact_latest(url, mc)


def _get_neoforge_version(mc: str):
    meta_url = (
        "https://maven.neoforged.net/releases/net/neoforged/neoforge/maven-metadata.xml"
    )
    try:
        xml_text = fetch_url_text(meta_url)
    except Exception:
        return None
    root = ET.fromstring(xml_text)
    mc_prefix = ".".join(mc.split(".")[1:3])
    versions = [
        v.text for v in root.findall("./versioning/versions/version") if v.text.startswith(mc_prefix)
    ]
    if not versions:
        return None
    stable = [v for v in versions if "-beta" not in v and "-rc" not in v]
    versions = stable if stable else versions
    return versions[-1]


def _fetch_parchment_version(mc: str):
    url = f"https://maven.parchmentmc.org/org/parchmentmc/data/parchment-{mc}/maven-metadata.xml"
    try:
        xml_text = fetch_url_text(url)
        root = ET.fromstring(xml_text)
        versions = [v.text for v in root.findall("./versioning/versions/version")]
        versions = [
            v for v in versions if not re.search(r"bleeding|nightly|snapshot", v, re.IGNORECASE)
        ]
        return versions[-1] if versions else None
    except Exception:
        return None


def _get_parchment_version(mc: str):
    current = mc
    while current:
        version = _fetch_parchment_version(current)
        if version:
            return current, version
        parts = current.split(".")
        if len(parts) < 3 or not parts[2].isdigit():
            break
        patch = int(parts[2]) - 1
        if patch < 0:
            break
        parts[2] = str(patch)
        current = ".".join(parts)
    return None, None


def _get_fabric_loader_version(mc: str):
    url = f"https://meta.fabricmc.net/v2/versions/loader/{mc}"
    try:
        data = json.loads(fetch_url_text(url))
        stable = [e["loader"]["version"] for e in data if e["loader"].get("stable")]
        if stable:
            def ver_key(v):
                return [int(x) if x.isdigit() else x for x in re.split(r"[.-]", v)]
            return sorted(stable, key=ver_key)[-1]
    except Exception:
        pass
    return None


def _get_fabric_api_version(mc: str):
    query = urllib.parse.quote(f'["{mc}"]', safe="")
    url = f"https://api.modrinth.com/v2/project/fabric-api/version?game_versions={query}"
    try:
        versions = json.loads(fetch_url_text(url))
        latest = max(versions, key=lambda v: v["date_published"])
        return latest["version_number"]
    except Exception:
        return None


def _get_mod_menu_version(mc: str):
    query = urllib.parse.quote(f'["{mc}"]', safe="")
    url = f"https://api.modrinth.com/v2/project/modmenu/version?game_versions={query}"
    try:
        versions = json.loads(fetch_url_text(url))
        latest = max(versions, key=lambda v: v["date_published"])
        return latest["version_number"]
    except Exception:
        return None


def _get_amber_version(mc: str):
    query = urllib.parse.quote(f'["{mc}"]', safe="")
    url = f"https://api.modrinth.com/v2/project/amber/version?game_versions={query}"
    try:
        versions = json.loads(fetch_url_text(url))
        latest = max(versions, key=lambda v: v["date_published"])
        return latest["version_number"]
    except Exception:
        return None


def _get_forge_version(mc: str):
    url = f"https://files.minecraftforge.net/net/minecraftforge/forge/index_{mc}.html"
    try:
        html = fetch_url_text(url, headers={"User-Agent": "Mozilla/5.0"})
    except Exception:
        return None
    for label in ("Recommended", "Latest"):
        m = re.search(label + r":\s*([0-9.]+)", html)
        if m:
            return m.group(1)
    return None


def _collect_versions(mc: str, include_amber: bool = False) -> dict:
    parchment_mc, parchment_version = _get_parchment_version(mc)
    if not parchment_mc:
        parchment_mc = mc

    versions = {
        "neoform_version": _get_neoform_version(mc),
        "neoforge_version": _get_neoforge_version(mc),
        "parchment_minecraft": parchment_mc,
        "parchment_version": parchment_version,
        "fabric_loader_version": _get_fabric_loader_version(mc),
        "fabric_version": _get_fabric_api_version(mc),
        "mod_menu_version": _get_mod_menu_version(mc),
        "forge_version": _get_forge_version(mc),
    }
    if include_amber:
        versions["amber_version"] = _get_amber_version(mc)
    return versions


def _apply_versions(props_path: Path, mc: str, versions: dict) -> None:
    text = props_path.read_text(encoding="utf-8")
    next_minor = mc.split(".")
    if len(next_minor) >= 2:
        try:
            minor = int(next_minor[1])
            next_minor[1] = str(minor + 1)
            next_minor = ".".join(next_minor[:2])
        except Exception:
            next_minor = mc
    else:
        next_minor = mc
    replacements = {
        "minecraft_version": mc,
        "minecraft_version_range": f"[{mc}, {next_minor})",
        "neo_form_version": versions.get("neoform_version"),
        "parchment_minecraft": versions.get("parchment_minecraft") or mc,
        "parchment_version": versions.get("parchment_version"),
        "fabric_loader_version": versions.get("fabric_loader_version"),
        "fabric_version": versions.get("fabric_version"),
        "mod_menu_version": versions.get("mod_menu_version"),
        "forge_version": versions.get("forge_version"),
        "neoforge_version": versions.get("neoforge_version"),
        "amber_version": versions.get("amber_version"),
        "game_versions": mc,
    }
    for key, value in replacements.items():
        if not value:
            continue
        pattern = rf"(?m)^{re.escape(key)}\s*=.*$"
        if re.search(pattern, text):
            text = re.sub(pattern, f"{key}={value}", text)
        else:
            if not text.endswith("\n"):
                text += "\n"
            text += f"{key}={value}\n"
    props_path.write_text(text, encoding="utf-8")


def cmd_set_minecraft_version(args: argparse.Namespace) -> None:
    mc = args.version
    logger.info(f"Fetching dependency versions for Minecraft {mc}.")
    if not AUTO_YES and input("Proceed? [y/N] ").lower() != "y":
        logger.info("Aborted")
        return

    props_text = Path("gradle.properties").read_text(encoding="utf-8")
    versions = _collect_versions(mc, include_amber="amber_version" in props_text)
    logger.info("Fetched versions:")
    for k, v in versions.items():
        logger.info(f"  {k}: {v}")
    missing = [k for k, v in versions.items() if v is None]
    if missing:
        logger.warning("Failed to determine: %s", ", ".join(missing))
        logger.info("You can look them up manually at:")
        logger.info("  https://projects.neoforged.net/neoforged/neoform")
        logger.info("  https://projects.neoforged.net/neoforged/neoforge")
        logger.info("  https://fabricmc.net/develop/")
        logger.info("  https://files.minecraftforge.net/net/minecraftforge/forge/")
        logger.info(
            "  https://parchmentmc.org/docs/getting-started#choose-a-version"
        )
    answer = "y" if AUTO_YES else input("\nApply these versions to gradle.properties? [y/N] ")
    if answer.lower().startswith("y"):
        _apply_versions(Path("gradle.properties"), mc, versions)
        logger.info("Updated gradle.properties")
    else:
        logger.info("No changes made")
