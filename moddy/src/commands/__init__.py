from .add_service import cmd_add_service
from .open_libs import cmd_open_libs
from .open import cmd_open
from .docs import cmd_docs
from .set_minecraft_version import cmd_set_minecraft_version
from .setup_template import cmd_setup
from .update import cmd_update
from .ping import cmd_ping
from .changelog import cmd_changelog
from .meta import cmd_help, cmd_version, check_for_update

__all__ = [
    "cmd_add_service",
    "cmd_open_libs",
    "cmd_open",
    "cmd_docs",
    "cmd_set_minecraft_version",
    "cmd_setup",
    "cmd_update",
    "cmd_ping",
    "cmd_changelog",
    "cmd_help",
    "cmd_version",
    "check_for_update",
]
