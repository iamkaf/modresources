from __future__ import annotations

import argparse

from ..utils import open_url


DOC_URLS = {
    "fabric": "https://docs.fabricmc.net/develop/",
    "neoforge": "https://docs.neoforged.net/docs/gettingstarted/",
    "forge": "https://docs.minecraftforge.net/en/1.21.x/",
    "parchment": "https://parchmentmc.org/docs/getting-started",
    "linkie": "https://linkie.shedaniel.dev/mappings",
}


def cmd_docs(args: argparse.Namespace) -> None:
    """Open the selected documentation page."""
    url = DOC_URLS[args.target]
    open_url(url)
