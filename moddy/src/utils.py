from pathlib import Path
import platform
import subprocess
import os
import re
import urllib.request


def parse_group(props_path: Path) -> str:
    """Return the 'group' property from a gradle.properties file."""
    text = props_path.read_text(encoding="utf-8")
    m = re.search(r"^group=(.+)$", text, re.MULTILINE)
    if not m:
        raise RuntimeError("Could not determine group property")
    return m.group(1).strip()


def open_dir(path: Path) -> None:
    """Open *path* using the default file manager."""
    system = platform.system()
    if system == "Windows":
        os.startfile(path)  # type: ignore[attr-defined]
    elif system == "Darwin":
        subprocess.run(["open", str(path)], check=False)
    else:
        subprocess.run(["xdg-open", str(path)], check=False)


def open_url(url: str) -> None:
    """Open *url* in the default browser."""
    system = platform.system()
    if system == "Windows":
        os.startfile(url)  # type: ignore[attr-defined]
    elif system == "Darwin":
        subprocess.run(["open", url], check=False)
    else:
        subprocess.run(["xdg-open", url], check=False)


def fetch_url_text(url: str, headers=None) -> str:
    req = urllib.request.Request(url, headers=headers or {})
    with urllib.request.urlopen(req) as resp:
        return resp.read().decode("utf-8")
