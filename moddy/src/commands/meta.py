from __future__ import annotations

import argparse
import json

from ..utils import fetch_url_text, logger
from .. import MODDY_VERSION, VERSION_REGISTRY_URL


def cmd_help(args: argparse.Namespace, parser, commands) -> None:
    """Show available commands."""
    parser.print_help()
    logger.info("\nCommands:")
    for name, func in commands.items():
        if func is cmd_help:
            continue
        lines = (func.__doc__ or "").strip().splitlines()
        doc = lines[0] if lines else ""
        logger.info(f"  {name:<22} {doc}")


def cmd_version(args: argparse.Namespace) -> None:
    """Print Moddy's version."""
    logger.info(MODDY_VERSION)


def check_for_update() -> None:
    try:
        registry = json.loads(fetch_url_text(VERSION_REGISTRY_URL))
        latest_version = registry[0].get("version")
    except Exception:
        return
    if latest_version and latest_version != MODDY_VERSION:
        YELLOW = "\033[33m"
        RESET = "\033[0m"
        logger.warning(
            f"{YELLOW}A new Moddy version ({MODDY_VERSION} -> {latest_version}) is available.{RESET}"
        )
        logger.warning("Run 'moddy update' to update.")
