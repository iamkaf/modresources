# Liteminer



[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)
[![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues)
[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB)
[![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

Mine an entire vein of ore, chop an entire tree or break any group of blocks by holding a hotkey. A vein mining
mod for Fabric, NeoForge, and Forge.

Requires [Amber](https://modrinth.com/mod/amber). Fabric files also require [Fabric API](https://modrinth.com/mod/fabric-api).

- Minecraft 26.2 and newer also require [Konfig](https://modrinth.com/mod/konfig).
- Minecraft 1.21.9 through 26.1.2 also require [Forge Config API Port](https://modrinth.com/mod/forge-config-api-port).
- Minecraft 1.21.8 and older also require Forge Config API Port and [Architectury API](https://modrinth.com/mod/architectury-api).

Install Liteminer on both the client and the server.

![A gif preview of Liteminer, the player vein mining some diamonds and iron ore.](https://i.imgur.com/ftSpErY.gif)

## How to use it

Hold the Tilde/Grave key, look at a block, and mine it. The outlines show what you're about to mine, and the HUD
shows how many blocks are selected.

![Keyboard Hotkey](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot5.png)

To switch shapes, hold the Liteminer key and scroll your mouse wheel. The shapes are:

- **Shapeless:** mines connected blocks of the same kind, like an ore vein or a tree
- **3x3**
- **Small Tunnel**
- **Staircase Up** and **Staircase Down**

Hold the key and right-click with a tool to use it on the whole selection, like tilling a field with a hoe.

## Settings

- **Key Mode:** hold the key to stay active, or press it to toggle vein mining on and off.
- **Block Break Limit:** the most blocks one action can break. Defaults to 64.
- **How should blocks drop:** `Together` drops a vein's items and experience where you broke the first block.
  `At each block` drops them where each block was, like mining each block by hand.
- **Prevent Tool Breaking:** stops before your tool's last durability point. On by default.
- **Require Correct Tool:** only breaks blocks your tool can harvest. Off by default.
- **Food Exhaustion:** vein mining drains hunger for each block it breaks. **Allow Vein Mining at Zero Hunger**
  decides whether you can keep going on an empty hunger bar.
- **Increased Harvesting Time:** larger selections take longer to break. Off by default.
- **Distinguish Grown Crops** and **Match Deepslate Ore Variants** control what Shapeless counts as the same block.
- **Show HUD**, **HUD Scale**, **Show Block Highlights**, and the highlight colors change what you see while vein
  mining.

Vein mining also respects the `block_drops` game rule. Farmer's Delight's Nourishment effect stops vein mining from
draining hunger.

## Tags

### Item Tags

* `liteminer:excluded_tools` - items in this tag can't be used for vein mining (applies to the main hand slot)
* `liteminer:included_tools` - when **Require Correct Tool** is on, items in this tag count as the correct tool

### Block Tags

* `liteminer:excluded_blocks` - blocks in this tag can never be vein mined
* `liteminer:block_whitelist` - if this tag is not empty, _only_ blocks in this tag can be vein mined

> Note: these tags are compatible with the FTB Ultimine tags, so you can use the same tags for both mods if you already have a setup you like.

## Addon API

Liteminer has a public addon API for integrations.

* `LiteminerApi` exposes server-side helpers for checking veinmine state, reading or changing the selected shape, and reading the active block limit.
* `LiteminerEvents` exposes `BEFORE_VEINMINE`, `ALLOW_BLOCK`, and `AFTER_VEINMINE` for permission, protection, quest, and logging integrations.
* `LiteminerShapes` lets addons register custom mining shapes that participate in shape cycling, highlighting, and server-side veinmine logic.
* `LiteminerClientEvents.MODIFY_HUD` lets client addons edit or hide Liteminer's HUD lines.

Public API packages:

* `com.iamkaf.liteminer.api`
* `com.iamkaf.liteminer.api.event`
* `com.iamkaf.liteminer.api.shape`

## Pics

![Mining Shapes](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot1.png)

![Mining Shapes](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot2.png)

![Mining Shapes](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot3.png)

![Mining Shapes](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot4.png)

![Liteminer outlines on a tree.](https://cdn.modrinth.com/data/cached_images/2b8d30774e17ff51cf5f2b257f6cb1970f826c3d_0.webp)

![Liteminer outlines on the ground.](https://cdn.modrinth.com/data/cached_images/079e3e003e55954eed51ede44aa3b92e50c2b1ae.png)

![Liteminer outlines on diamond ore.](https://cdn.modrinth.com/data/cached_images/22ac03f14cca7375d06cba76b54141e411e6ed62.png)

![Configuration Screen](https://cdn.modrinth.com/data/cached_images/0255cf113d51e9ebec132a6d0ce0f5fa9c595da5_0.webp)

{{snippet:translate}}

{{snippet:qa}}

{{snippet:promo mods=bonded,gentlehurtcam,mochila,torch-toss}}

## Compatibility

Let me know if you find any issues.

## Credits

- [FTB Ultimine](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-fabric) for the inspiration for the mod.
- [Simply Tools](https://modrinth.com/mod/simply-tools) for some client side code.
- [Architectury API](https://modrinth.com/mod/architectury-api) for the multiloader setup older versions were built on.
- [KaupenJoe](https://www.youtube.com/@ModdingByKaupenjoe) for teaching me how to mod.
- And most importantly, **Aris**, for always being there for me.
