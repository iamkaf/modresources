from __future__ import annotations

import argparse
import json

from ..utils import fetch_url_text, logger
from .. import VERSION_REGISTRY_URL


def cmd_changelog(args: argparse.Namespace) -> None:
    """Print the changelog for the last 3 Moddy versions."""
    try:
        registry = json.loads(fetch_url_text(VERSION_REGISTRY_URL))
    except Exception as e:
        logger.error(f"Failed to fetch changelog: {e}")
        return

    for entry in registry[:3]:
        version = entry.get("version", "unknown")
        logger.info(f"Version {version}:")
        notes = entry.get("notes", [])
        for note in notes:
            logger.info(f" - {note}")
        logger.info("")
