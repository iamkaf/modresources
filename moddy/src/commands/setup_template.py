from __future__ import annotations

import argparse
import os
import re
import shutil
import struct
import zlib
from pathlib import Path

from .. import AUTO_YES

RESET = "\033[0m"
GREEN = "\033[32m"
CYAN = "\033[36m"
YELLOW = "\033[33m"

ROOT_IGNORE = {
    ".github",
    ".gradle",
    ".idea",
    "build",
    "buildSrc",
    "gradle",
}

SUBPROJECT_IGNORE = {
    ".gradle",
    "build",
    "runs",
}

OLD_PACKAGE = "com.example.modtemplate"
OLD_MOD_ID = "examplemod"
OLD_MOD_NAME = "Example Mod"
OLD_AUTHOR = "yourname"


def _default_version() -> str:
    try:
        text = Path("gradle.properties").read_text(encoding="utf-8")
        m = re.search(r"^version=(.*)$", text, re.MULTILINE)
        if m:
            return m.group(1).strip()
    except Exception:
        pass
    return "1.0.0"


def _to_camel(value: str) -> str:
    parts = re.split(r"[_\-\s]+", value)
    return "".join(p[:1].upper() + p[1:] if p else "" for p in parts)


def _create_icon(char: str, filename: str) -> None:
    font = {
        'A': [0b00111000, 0b01000100, 0b10000010, 0b10000010, 0b11111110, 0b10000010, 0b10000010, 0b00000000],
        'B': [0b11111100, 0b10000010, 0b10000010, 0b11111100, 0b10000010, 0b10000010, 0b11111100, 0b00000000],
        'C': [0b01111110, 0b10000000, 0b10000000, 0b10000000, 0b10000000, 0b10000000, 0b01111110, 0b00000000],
        'D': [0b11111100, 0b10000010, 0b10000010, 0b10000010, 0b10000010, 0b10000010, 0b11111100, 0b00000000],
        'E': [0b11111110, 0b10000000, 0b10000000, 0b11111100, 0b10000000, 0b10000000, 0b11111110, 0b00000000],
        'F': [0b11111110, 0b10000000, 0b10000000, 0b11111100, 0b10000000, 0b10000000, 0b10000000, 0b00000000],
        'G': [0b01111110, 0b10000000, 0b10000000, 0b10001110, 0b10000010, 0b10000010, 0b01111110, 0b00000000],
        'H': [0b10000010, 0b10000010, 0b10000010, 0b11111110, 0b10000010, 0b10000010, 0b10000010, 0b00000000],
        'I': [0b01111100, 0b00010000, 0b00010000, 0b00010000, 0b00010000, 0b00010000, 0b01111100, 0b00000000],
        'J': [0b00111110, 0b00000010, 0b00000010, 0b00000010, 0b10000010, 0b10000010, 0b01111100, 0b00000000],
        'K': [0b10000010, 0b10000100, 0b10001000, 0b10110000, 0b11001000, 0b10000100, 0b10000010, 0b00000000],
        'L': [0b10000000, 0b10000000, 0b10000000, 0b10000000, 0b10000000, 0b10000000, 0b11111110, 0b00000000],
        'M': [0b10000010, 0b11000110, 0b10101010, 0b10010010, 0b10000010, 0b10000010, 0b10000010, 0b00000000],
        'N': [0b10000010, 0b11000010, 0b10100010, 0b10010010, 0b10001010, 0b10000110, 0b10000010, 0b00000000],
        'O': [0b01111100, 0b10000010, 0b10000010, 0b10000010, 0b10000010, 0b10000010, 0b01111100, 0b00000000],
        'P': [0b11111100, 0b10000010, 0b10000010, 0b11111100, 0b10000000, 0b10000000, 0b10000000, 0b00000000],
        'Q': [0b01111100, 0b10000010, 0b10000010, 0b10000010, 0b10001010, 0b10000100, 0b01111010, 0b00000000],
        'R': [0b11111100, 0b10000010, 0b10000010, 0b11111100, 0b10001000, 0b10000100, 0b10000010, 0b00000000],
        'S': [0b01111100, 0b10000010, 0b10000000, 0b01111100, 0b00000010, 0b10000010, 0b01111100, 0b00000000],
        'T': [0b11111110, 0b00010000, 0b00010000, 0b00010000, 0b00010000, 0b00010000, 0b00010000, 0b00000000],
        'U': [0b10000010, 0b10000010, 0b10000010, 0b10000010, 0b10000010, 0b10000010, 0b01111100, 0b00000000],
        'V': [0b10000010, 0b10000010, 0b10000010, 0b01000100, 0b01000100, 0b00101000, 0b00010000, 0b00000000],
        'W': [0b10000010, 0b10000010, 0b10000010, 0b10010010, 0b10101010, 0b11000110, 0b10000010, 0b00000000],
        'X': [0b10000010, 0b01000100, 0b00101000, 0b00010000, 0b00101000, 0b01000100, 0b10000010, 0b00000000],
        'Y': [0b10000010, 0b01000100, 0b00101000, 0b00010000, 0b00010000, 0b00010000, 0b00010000, 0b00000000],
        'Z': [0b11111110, 0b00000010, 0b00000100, 0b00001000, 0b00010000, 0b00100000, 0b11111110, 0b00000000],
    }
    w = h = 512
    bg = (66, 135, 245)
    s = w // 16
    ox = (w - 8 * s) // 2
    oy = (h - 8 * s) // 2
    pix = bytearray()
    for y in range(h):
        for x in range(w):
            if char.upper() in font and ox <= x < ox + 8 * s and oy <= y < oy + 8 * s:
                row = font[char.upper()][(y - oy) // s]
                if row & (1 << (7 - (x - ox) // s)):
                    pix += b"\xff\xff\xff\xff"
                    continue
            pix += bytes([bg[0], bg[1], bg[2], 255])
    def chunk(t, d):
        return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    raw = b''.join(b'\x00' + pix[i*w*4:(i+1)*w*4] for i in range(h))
    data = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
    data += chunk(b'IDAT', zlib.compress(raw)) + chunk(b'IEND', b'')
    Path(filename).write_bytes(data)


def _replace_template_in_comments(text: str, mod_name: str) -> str:
    comment_regex = re.compile(r"(#.*?$|//.*?$|/\*.*?\*/)", re.MULTILINE | re.DOTALL)

    def repl(match: re.Match) -> str:
        comment = match.group(0)
        return re.sub(r"\b(template|example)\b", mod_name, comment, flags=re.IGNORECASE)

    return comment_regex.sub(repl, text)


def cmd_setup(args: argparse.Namespace) -> None:
    base_package = input(f"Base package [{OLD_PACKAGE}]: ") or OLD_PACKAGE
    mod_id = input(f"Mod id [{OLD_MOD_ID}]: ") or OLD_MOD_ID
    mod_name = input(f"Mod name [{OLD_MOD_NAME}]: ") or OLD_MOD_NAME
    author = input(f"Author [{OLD_AUTHOR}]: ") or OLD_AUTHOR
    version = input(f"Initial version [{_default_version()}]: ") or _default_version()

    class_prefix = _to_camel(mod_name)
    icon_path = Path("common/src/main/resources/icon.png")

    replacements = {
        OLD_PACKAGE: base_package,
        OLD_MOD_ID: mod_id,
        OLD_MOD_NAME: mod_name,
        OLD_AUTHOR: author,
        "TemplateMod": f"{class_prefix}Mod",
        "TemplateFabric": f"{class_prefix}Fabric",
        "TemplateForge": f"{class_prefix}Forge",
        "TemplateNeoForge": f"{class_prefix}NeoForge",
        "TemplateDatagen": f"{class_prefix}Datagen",
    }

    print(
        "This will update package names, identifiers and the changelog in this project."
    )
    if not AUTO_YES and input("Proceed? [y/N] ").lower() != "y":
        print("Aborted")
        return

    print(f"{CYAN}Updating files...{RESET}")
    pkg_roots = [
        Path("common/src/main/java"),
        Path("fabric/src/main/java"),
        Path("forge/src/main/java"),
        Path("neoforge/src/main/java"),
    ]

    old_pkg_path = OLD_PACKAGE.replace(".", "/")
    new_pkg_path = base_package.replace(".", "/")

    for src in pkg_roots:
        if not src.exists():
            continue

        for root, dirs, files in os.walk(src):
            for name in files:
                path = Path(root) / name
                if path.suffix != ".java":
                    continue
                text = path.read_text(encoding="utf-8")
                for old, new in replacements.items():
                    text = text.replace(old, new)
                text = _replace_template_in_comments(text, mod_name)
                path.write_text(text, encoding="utf-8")

        old_pkg_dir = src / old_pkg_path
        if old_pkg_dir.exists():
            new_pkg_dir = src / new_pkg_path
            new_pkg_dir.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(old_pkg_dir), str(new_pkg_dir))
            print(f"{GREEN}Moved{RESET} {old_pkg_dir} -> {new_pkg_dir}")
            parent = old_pkg_dir.parent
            while parent != src and parent.is_dir() and not any(parent.iterdir()):
                parent.rmdir()
                parent = parent.parent

    print(f"{CYAN}Renaming files...{RESET}")
    for path in Path('.').rglob('*'):
        parts = path.parts
        if '.git' in parts:
            continue
        if parts and parts[0] in ROOT_IGNORE:
            continue
        if len(parts) > 1 and parts[1] in SUBPROJECT_IGNORE:
            continue
        if path.is_file():
            new_name = path.name
            if OLD_MOD_ID in new_name:
                new_name = new_name.replace(OLD_MOD_ID, mod_id)
            if OLD_PACKAGE in new_name:
                new_name = new_name.replace(OLD_PACKAGE, base_package)
            if "Template" in new_name:
                new_name = new_name.replace("Template", class_prefix)
            if new_name != path.name:
                new_path = path.with_name(new_name)
                path.rename(new_path)
                print(f"{GREEN}Renamed{RESET} {path} -> {new_path}")
                path = new_path

            # update contents for json, toml and service descriptor files
            if (
                path.suffix in {".json", ".toml", ".mcmeta", ".properties"}
                or "META-INF/services" in path.as_posix()
            ):
                try:
                    text = path.read_text(encoding="utf-8")
                except Exception:
                    text = None
                if text is not None:
                    orig = text
                    for old, new in replacements.items():
                        text = text.replace(old, new)
                    text = _replace_template_in_comments(text, mod_name)
                    if text != orig:
                        path.write_text(text, encoding="utf-8")
                        print(f"{GREEN}Updated{RESET} {path}")

    generated_cache = Path("fabric/src/main/generated")
    if generated_cache.exists():
        shutil.rmtree(generated_cache)
        print(f"{GREEN}Removed{RESET} {generated_cache}")

    props_path = Path("gradle.properties")
    text = props_path.read_text(encoding="utf-8")
    text = re.sub(r"(?m)^version=.*$", f"version={version}", text)
    text = re.sub(r"(?m)^group=.*$", f"group={base_package}", text)
    text = re.sub(r"(?m)^archives_base_name=.*$", f"archives_base_name={mod_id}", text)
    props_path.write_text(text, encoding="utf-8")
    print(f"{GREEN}Updated gradle.properties{RESET}")

    chg_path = Path("changelog.md")
    chg_lines = chg_path.read_text(encoding="utf-8").splitlines()
    entry = [f"## {version}", "", "Initial Implementation", ""]
    try:
        def_idx = chg_lines.index("## 1.0.0")
        end_idx = def_idx + 1
        while end_idx < len(chg_lines) and not chg_lines[end_idx].startswith("## "):
            end_idx += 1
        del chg_lines[def_idx:end_idx]
    except ValueError:
        pass
    try:
        idx = chg_lines.index("## Types of changes")
    except ValueError:
        idx = len(chg_lines)
    chg_lines[idx:idx] = entry
    chg_path.write_text("\n".join(chg_lines) + "\n", encoding="utf-8")
    print(f"{GREEN}Updated changelog{RESET}")

    if not icon_path.exists():
        _create_icon(mod_name[0], icon_path)
        print(f"{GREEN}Created {icon_path}{RESET}")
    else:
        print(f"{CYAN}Skipped icon generation{RESET}")

    print(f"{GREEN}Template initialized.{RESET}")
