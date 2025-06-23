# Liteminer

[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber) [![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues) [![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB) [![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

Mine an entire vein of ore, chop an entire tree or break any group of blocks by holding a hotkey. A veinmining mod for Fabric, NeoForge, Forge and Quilt.

Requires [Architectury API](https://modrinth.com/mod/architectury-api) and [Forge Config API Port](https://modrinth.com/mod/forge-config-api-port).



![A gif preview of Liteminer, the playing vein mining some diamonds and iron ore.](https://i.imgur.com/ftSpErY.gif)

## How To Use

Hold the Tilde/Grave key, look at a block, and mine it. The outlines should show what you're about to mine.

![Keybord Hotkey](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot5.png)

There are a few shapes you can mine with and to switch between them hold the Liteminer key and scroll your mouse wheel.

The available shapes are: Shapeless (mines connected blocks), 3x3, Small Tunnel, Staircase Up and Staircase Down.


## Tags



### Tags

#### Item Tags

* `liteminer:excluded_tools` - items in this tag can't be used for litemining (applies to main hand slot)
* `liteminer:included_tools` - if `require_tool` is true in server config, by default only "tool" items can be used (tiered items with durability); this can be used to allow extra items

#### Block Tags

* `liteminer:excluded_blocks` - blocks in this tag may never be litemined
* `liteminer:block_whitelist` - if this tag is non-empty, then _only_ blocks in this tag may be litemined

> Note: these tags are compatible with the FTB Ultimine tags, so you can use the same tags for both mods if you already have a setup you like.



## Images

![Mining Shapes](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot1.png)
![Mining Shapes](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot2.png)
![Mining Shapes](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot3.png)
![Mining Shapes](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/liteminer/screenshot4.png)
![Liteminer outlines on a tree.](https://cdn.modrinth.com/data/cached_images/2b8d30774e17ff51cf5f2b257f6cb1970f826c3d_0.webp)
![Liteminer outlines on the ground.](https://cdn.modrinth.com/data/cached_images/079e3e003e55954eed51ede44aa3b92e50c2b1ae.png)
![Liteminer outlines on diamond ore.](https://cdn.modrinth.com/data/cached_images/22ac03f14cca7375d06cba76b54141e411e6ed62.png)
![Configuration Screen](https://cdn.modrinth.com/data/cached_images/0255cf113d51e9ebec132a6d0ce0f5fa9c595da5_0.webp)

## Q&A

**Q: Where can I ask something that is not listed here?**

A: Make an issue [here](https://github.com/iamkaf/mod-issues) or join the [Discord](https://discord.gg/HV5WgTksaB) and shoot me a message.


**Q: Can you port it to [MC version/Mod loader]?**

A: If enough people request it I'll give it some time, but this really is a 1-man team so it might take a while.


**Q: Can I include it in my modpack?**

A: Yes, no need to give credit or ask.

[![Join our Discord](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/common/discord.png)](https://discord.gg/HV5WgTksaB)


## Credits

- [FTB Ultimine](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-fabric) for the inspiration for the mod.
- [Simply Tools](https://modrinth.com/mod/simply-tools) for some client side code.
- [Architectury API](https://modrinth.com/mod/architectury-api) for the multiloader setup in which the mod is built upon.
- [KaupenJoe](https://www.youtube.com/@ModdingByKaupenjoe) for teaching me how to mod.
- And most importantly, **Aris**, for always being there for me.

