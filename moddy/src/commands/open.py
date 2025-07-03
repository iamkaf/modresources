from __future__ import annotations

import argparse
import re
from pathlib import Path

from ..utils import open_url, logger


def cmd_open(args: argparse.Namespace) -> None:
    """Open the mod page on the selected site."""
    props_path = Path("gradle.properties")
    mod_id = "examplemod"
    author = "yourname"
    if props_path.is_file():
        text = props_path.read_text(encoding="utf-8")
        m = re.search(r"^mod_id=(.+)$", text, re.MULTILINE)
        if m:
            mod_id = m.group(1).strip()
        m = re.search(r"^mod_author=(.+)$", text, re.MULTILINE)
        if m:
            author = m.group(1).strip()

    site = args.site
    if site == "curseforge":
        url = f"https://www.curseforge.com/minecraft/mc-mods/{mod_id}"
    elif site == "modrinth":
        url = f"https://modrinth.com/mod/{mod_id}"
    else:  # github
        url = f"https://github.com/{author}/{mod_id}"
    logger.info(f"Opening {url}")
    open_url(url)
