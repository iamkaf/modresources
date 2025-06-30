#!/usr/bin/env python3
"""Moddy - Multipurpose helper for the multiloader template.

This tool bundles various project setup and maintenance commands used with
multiloader-template projects. Each command is implemented in its own module
under ``moddy.commands`` for easier maintenance.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from .commands import (
    cmd_add_service,
    cmd_open_libs,
    cmd_open,
    cmd_docs,
    cmd_set_minecraft_version,
    cmd_setup,
    cmd_update,
    cmd_ping,
    cmd_changelog,
    cmd_help,
    cmd_version,
    check_for_update,
)


COMMANDS = {
    "add-service": cmd_add_service,
    "open-libs": cmd_open_libs,
    "open": cmd_open,
    "docs": cmd_docs,
    "set-minecraft-version": cmd_set_minecraft_version,
    "setup": cmd_setup,
    "update": cmd_update,
    "ping": cmd_ping,
    "changelog": cmd_changelog,
    "help": cmd_help,
    "version": cmd_version,
}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Moddy - helper for the multiloader template",
        formatter_class=argparse.RawTextHelpFormatter,
    )
    parser.add_argument(
        "-y",
        "--yes",
        action="store_true",
        help="Assume yes for all confirmation prompts",
    )
    parser.add_argument("command", nargs="?", help="Command to run")
    parser.add_argument("args", nargs=argparse.REMAINDER)
    return parser


def main(argv=None) -> None:
    parser = build_parser()
    ns, _ = parser.parse_known_args(argv or sys.argv[1:])

    import moddy

    moddy.AUTO_YES = ns.yes
    command = ns.command or "help"

    if command not in COMMANDS:
        parser.print_help()
        return

    func = COMMANDS[command]
    subparser = argparse.ArgumentParser(prog=f"{Path(sys.argv[0]).name} {command}")

    if func is cmd_add_service:
        subparser.add_argument("name", help="Service interface name")
    elif func is cmd_open_libs:
        subparser.add_argument(
            "loader", choices=["fabric", "forge", "neoforge"], help="Loader to open the output for"
        )
    elif func is cmd_open:
        subparser.add_argument(
            "site",
            choices=["curseforge", "modrinth", "github"],
            help="Site to open",
        )
    elif func is cmd_docs:
        subparser.add_argument(
            "target",
            choices=["fabric", "neoforge", "forge", "parchment", "linkie"],
            help="Documentation site to open",
        )
    elif func is cmd_set_minecraft_version:
        subparser.add_argument("version", help="Minecraft version, e.g. 1.21.5")
    elif func is cmd_update:
        subparser.add_argument(
            "version",
            nargs="?",
            help="Moddy version to install (defaults to latest)",
        )

    args = subparser.parse_args(ns.args)
    if func is cmd_help:
        func(args, parser, COMMANDS)
    else:
        func(args)
    if command not in ["update", "ping"]:
        check_for_update()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print()
        sys.exit(1)
