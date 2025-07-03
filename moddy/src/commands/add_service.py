from __future__ import annotations

import argparse
import re
from pathlib import Path

from ..utils import parse_group, logger
from .. import AUTO_YES


def cmd_add_service(args: argparse.Namespace) -> None:
    """Create a service interface and loader specific implementations."""
    name = args.name.strip()
    if not re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", name):
        raise SystemExit("Illegal characters in service name")

    interface_name = f"I{name}"
    group = parse_group(Path("gradle.properties"))
    pkg_path = group.replace(".", "/")
    service_fqn = f"{group}.platform.services.{interface_name}"

    interface_path = Path("common/src/main/java") / pkg_path / "platform" / "services" / f"{interface_name}.java"
    fabric_impl_path = Path("fabric/src/main/java") / pkg_path / "platform" / f"Fabric{name}.java"
    forge_impl_path = Path("forge/src/main/java") / pkg_path / "platform" / f"Forge{name}.java"
    neo_impl_path = Path("neoforge/src/main/java") / pkg_path / "platform" / f"NeoForge{name}.java"

    fabric_meta = Path("fabric/src/main/resources/META-INF/services") / service_fqn
    forge_meta = Path("forge/src/main/resources/META-INF/services") / service_fqn
    neo_meta = Path("neoforge/src/main/resources/META-INF/services") / service_fqn

    files = {
        interface_path: f"package {group}.platform.services;\n\npublic interface {interface_name} {{\n}}\n",
        fabric_impl_path: f"package {group}.platform;\n\nimport {service_fqn};\n\npublic class Fabric{name} implements {interface_name} {{\n}}\n",
        forge_impl_path: f"package {group}.platform;\n\nimport {service_fqn};\n\npublic class Forge{name} implements {interface_name} {{\n}}\n",
        neo_impl_path: f"package {group}.platform;\n\nimport {service_fqn};\n\npublic class NeoForge{name} implements {interface_name} {{\n}}\n",
        fabric_meta: f"{group}.platform.Fabric{name}\n",
        forge_meta: f"{group}.platform.Forge{name}\n",
        neo_meta: f"{group}.platform.NeoForge{name}\n",
    }

    logger.info(f"This will create a new service called '{interface_name}'.")
    logger.info("The following files will be created:\n")
    for path, content in files.items():
        logger.info(f"--- {path}")
        logger.info(content.rstrip())
        logger.info("")

    existing = [str(p) for p in files if p.exists()]
    if existing:
        logger.warning("The following files already exist and will not be overwritten:")
        for p in existing:
            logger.warning(f"  {p}")
        return

    if not AUTO_YES and input("Proceed? [y/N] ").lower() != "y":
        logger.info("Aborted")
        return

    for path, content in files.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        logger.info(f"Created {path}")

    services_path = Path("common/src/main/java") / pkg_path / "platform" / "Services.java"
    if services_path.exists():
        text = services_path.read_text(encoding="utf-8")
        import_line = f"import {service_fqn};"
        if import_line not in text:
            m = re.search(r"(package[^\n]+;\n)", text)
            if m:
                insert_pos = m.end()
                text = text[:insert_pos] + import_line + "\n" + text[insert_pos:]
            else:
                text = import_line + "\n" + text
        field_name = name[:1].lower() + name[1:]
        field_line = f"    public static {interface_name} {field_name} = load({interface_name}.class);"
        if field_line not in text:
            idx = text.rfind("}")
            if idx != -1:
                text = text[:idx].rstrip() + "\n" + field_line + "\n}" + text[idx+1:]
            else:
                text += "\n" + field_line + "\n"
        services_path.write_text(text, encoding="utf-8")
        logger.info(f"Updated {services_path}")
    else:
        logger.info(f"Services class not found at {services_path}; skipping update.")
