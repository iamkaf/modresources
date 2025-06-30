from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import io
import zipfile

from ..utils import fetch_url_text, fetch_url_bytes
from .. import AUTO_YES, MODDY_VERSION, VERSION_REGISTRY_URL, RAW_BASE_URL


def cmd_update(args: argparse.Namespace) -> None:
    """Download the latest version of Moddy and replace this file."""
    print(
        "\N{WARNING SIGN} DANGER: Executing this command will fetch Python "
        "code from the internet and run it on your computer."
    )
    print(
        "Only continue if you trust the source. The update is pulled from the "
        "official Moddy repository: https://github.com/iamkaf/modresources"
    )
    print(
        "You can inspect the downloaded file to learn how the update works "
        "before proceeding."
    )
    try:
        registry = json.loads(fetch_url_text(VERSION_REGISTRY_URL))
        latest = registry[0]
        update_url = RAW_BASE_URL + latest.get("source", "")
    except Exception as e:
        print(f"Failed to check for updates: {e}")
        return

    print(f"Registry: {VERSION_REGISTRY_URL}")
    print(f"Source: {update_url}")
    if not AUTO_YES and input("Are you sure you want to continue? [y/N] ").lower() != "y":
        print("Aborted")
        return

    try:
        new_data = fetch_url_bytes(update_url)
    except Exception as e:
        print(f"Failed to download update: {e}")
        return

    # Verify the downloaded code by running the ping command
    with tempfile.NamedTemporaryFile("wb", delete=False, suffix=".py") as tmp:
        tmp.write(new_data)
        tmp_path = Path(tmp.name)
    try:
        result = subprocess.run(
            [sys.executable, str(tmp_path), "ping"],
            capture_output=True,
            text=True,
            check=True,
        )
    except subprocess.CalledProcessError:
        print("Update verification failed. The downloaded file did not run correctly.")
        print("If this issue persists, please report it at https://github.com/iamkaf/modresources/issues")
        try:
            tmp_path.unlink()
        except OSError:
            pass
        return
    if result.stdout.strip() != "pong":
        print("Update verification failed. Unexpected ping output.")
        print("If this issue persists, please report it at https://github.com/iamkaf/modresources/issues")
        try:
            tmp_path.unlink()
        except OSError:
            pass
        return
    try:
        tmp_path.unlink()
    except OSError:
        pass

    if new_data.startswith(b"PK"):
        try:
            with zipfile.ZipFile(io.BytesIO(new_data)) as zf:
                init_text = zf.read("moddy/__init__.py").decode("utf-8")
        except Exception:
            init_text = ""
    else:
        init_text = new_data.decode("utf-8", errors="ignore")

    m = re.search(r"MODDY_VERSION\s*=\s*['\"]([^'\"]+)['\"]", init_text)
    new_version = m.group(1) if m else "unknown"
    if new_version == MODDY_VERSION:
        print("Moddy is already up to date.")
        return

    script_path = Path(__file__).resolve()
    backup = script_path.with_suffix(".bak")
    try:
        shutil.copy2(script_path, backup)
        script_path.write_bytes(new_data)
    except Exception as e:
        print(f"Update failed: {e}")
        return
    print(f"Updated Moddy from {MODDY_VERSION} to {new_version}")
    print(f"A backup of the previous version was saved to {backup}")
    notes = latest.get("notes", []) if isinstance(latest, dict) else []
    if notes:
        print(f"Changelog for {new_version}:")
        for n in notes:
            print(f" - {n}")
