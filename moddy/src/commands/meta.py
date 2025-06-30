from __future__ import annotations

import argparse
import json

from ..utils import fetch_url_text
from .. import MODDY_VERSION, VERSION_REGISTRY_URL


def cmd_help(args: argparse.Namespace, parser, commands) -> None:
    """Show available commands."""
    parser.print_help()
    print("\nCommands:")
    for name, func in commands.items():
        if func is cmd_help:
            continue
        doc = (func.__doc__ or "").strip().splitlines()[0]
        print(f"  {name:<22} {doc}")


def cmd_version(args: argparse.Namespace) -> None:
    """Print Moddy's version."""
    print(MODDY_VERSION)


def check_for_update() -> None:
    try:
        registry = json.loads(fetch_url_text(VERSION_REGISTRY_URL))
        latest_version = registry[0].get("version")
    except Exception:
        return
    if latest_version and latest_version != MODDY_VERSION:
        YELLOW = "\033[33m"
        RESET = "\033[0m"
        print(f"{YELLOW}A new Moddy version ({latest_version}) is available.{RESET}")
        print("Run 'moddy update' to update.")
