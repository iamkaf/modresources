# SnapShears

![Amber Banner](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/snapshears/banner.png)

[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)
[![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues)
[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB)
[![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

Area-of-effect shearing that trims every adult sheep nearby, server side. For Fabric, Forge, and NeoForge.

Requires [Amber](https://modrinth.com/mod/amber). Versions for Minecraft 1.21.11 and newer also require
[Konfig](https://modrinth.com/mod/konfig). Fabric files also require [Fabric API](https://modrinth.com/mod/fabric-api).

SnapShears only needs to be installed on the server. Players joining don't need it.

### How To Use It

Jump on the sheep and use the shears. Like if you were criting with a sword.

Every sheep around the one you clicked that's ready for shearing gets sheared too, and each extra sheep costs
the shears one point of durability. Hold sneak while you do it to only shear sheep with the same wool color as
the first one.

![A gif of the mod in action, some gameplay of the player shearing sheep](https://i.imgur.com/dwBvLFm.gif)

### Config

On Minecraft 1.21.11 and newer, the settings are in `config/snapshears/common.toml`:

- **Snap Radius:** how far from the first sheep other sheep can be, in blocks. Default 3.
- **Only Same Color:** always shear only sheep that match the first sheep's color, without sneaking.
- **Bonus Wool:** extra wool dropped by each additional sheep. Default 0.
- **Shearing Items:** which items count as shears. Add item ids like `minecraft:shears` or prefix a tag with `#`
  (e.g. `#c:tools/shear`).

Run `/snapshears reload` after editing the file.

Older versions use `snapshears.json5`, which only has the shearing items list.

## Compatibility

SnapShears calls Minecraft’s built-in shear() method, so any sheep variant that responds to normal shears will work too. If you find any problems, let me know.

{{snippet:qa}}

{{snippet:promo mods=gentlehurtcam,liteminer,mochila,torch-toss}}

## Credits

- My awesome community.
- And most importantly, **Aris**, for always being there for me.
