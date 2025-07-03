from __future__ import annotations

import argparse
from ..utils import logger


def cmd_ping(args: argparse.Namespace) -> None:
    """Print pong to verify Moddy works."""
    logger.info("pong")

