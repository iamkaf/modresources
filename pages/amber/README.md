# Amber

![Amber Banner](https://i.kaf.sh/i/9707b0fc-82c0-4413-9877-c729296bdad6.png)

[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)
[![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues)
[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB)
[![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

Amber is the shared library behind my mods, for Fabric, Forge, and NeoForge.

Fabric files require [Fabric API](https://modrinth.com/mod/fabric-api). Amber 2.x and older also require
[Architectury API](https://modrinth.com/mod/architectury-api).

## For players

If one of my mods told you to install Amber, install the version for your Minecraft version and loader. Amber
adds no gameplay of its own.

Run `/amber doctor` when something isn't working. It reports your loader, Amber's networking status, and the Amber
mods you have installed, along with any diagnostics those mods add. The report ends with buttons that help when
you ask for support:

- `[Open game folder]`, `[Open logs folder]`, and `[Open crash reports]` when there are any.
- `[Upload log]` uploads `latest.log` to mclo.gs and copies the link. It asks first, since anyone with the link can
  read it.
- `[Join Discord]` links to the Discord.

`/amber doctor server` shows the server's side of the report.

## For mod developers

Amber gives Fabric, Forge, and NeoForge one common API for the code every mod ends up writing:

- Registry helpers
- Common and client events, including client connect and disconnect
- Permission checks that defer to each loader's permission system
- Networking helpers
- In-world billboards for text, textures, items, and block models
- Diagnostics hooks for `/amber doctor`
- Command, HUD, keybind, and other small helpers

Add the Kaf Maven repository:

```groovy
repositories {
    maven { url = "https://maven.kaf.sh" }
}
```

Use the loader artifact for the Minecraft line you target:

```groovy
modImplementation "com.iamkaf.amber:amber-fabric:<version>"
modImplementation "com.iamkaf.amber:amber-forge:<version>"
modImplementation "com.iamkaf.amber:amber-neoforge:<version>"
```

The `+<mc>` suffix on each version tells you which Minecraft version the artifact targets, for example
`11.7.0+26.3`.

{{snippet:qa}}

## Compatibility

Let me know if you find any issues.

## Credits

- You!
- And most importantly, **Aris**, for always being there for me.
