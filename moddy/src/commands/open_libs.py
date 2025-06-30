from __future__ import annotations

import argparse
from pathlib import Path

from ..utils import open_dir
from .. import AUTO_YES


def cmd_open_libs(args: argparse.Namespace) -> None:
    """Open the build/libs folder for the chosen loader."""
    libs = Path(args.loader) / "build" / "libs"
    if not libs.is_dir():
        print(f"No libs folder found at {libs}. Run a build first.")
        return
    open_dir(libs)
