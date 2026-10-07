# Loot Lights

![Loot Lights: TNT blows up a row of chests and beams of light rise over the loot, taller for rarer items](https://i.kaf.sh/i/1690dcd0-6642-400f-b219-219bf77b87b9.webp)

![Minecraft 1.21.11, 26.1.2, 26.2, and 26.3](https://shieldcn.dev/badge/Minecraft-1.21.11%20%C2%B7%2026.1.2%20%C2%B7%2026.2%20%C2%B7%2026.3-4ade80.svg?logo=lu:Pickaxe&variant=secondary&mode=dark)
![Fabric, Forge, and NeoForge](https://shieldcn.dev/badge/Loaders-Fabric%20%C2%B7%20Forge%20%C2%B7%20NeoForge-5cd2ff.svg?logo=lu:Layers&variant=secondary&mode=dark)
[![Requires Amber](https://shieldcn.dev/badge/Requires-Amber-ebb134.svg?logo=lu:Gem&variant=secondary&mode=dark)](https://modrinth.com/mod/amber)
[![Requires Konfig](https://shieldcn.dev/badge/Requires-Konfig-a78bfa.svg?logo=lu:SlidersHorizontal&variant=secondary&mode=dark)](https://modrinth.com/mod/konfig)
[![PolyForm Shield license](https://shieldcn.dev/badge/License-PolyForm%20Shield-eeeeee.svg?logo=lu:Scale&variant=secondary&mode=dark)](https://polyformproject.org/licenses/shield/1.0.0)
[![Issues](https://shieldcn.dev/github/open-issues/iamkaf/mod-issues.svg?variant=secondary&mode=dark)](https://github.com/iamkaf/mod-issues/issues)
[![Discord](https://shieldcn.dev/discord/1207469438719492176.svg?variant=secondary&mode=dark)](https://discord.gg/HV5WgTksaB)
[![Support me on Ko-fi](https://shieldcn.dev/badge/Support%20Me-Ko--fi-30d1e3.svg?logo=kofi&variant=secondary&mode=dark)](https://ko-fi.com/iamkaffe)

Loot Lights puts a beam of light over dropped items so you can find them from far away. Rarer loot gets a taller beam in its own color, and items lying close together share one beam, so a creeper blast or a mob farm leaves a few beams instead of a forest of them.

Available for Fabric, Forge, and NeoForge on Minecraft 1.21.11, 26.1.2, 26.2, and 26.3. Requires [Amber](https://modrinth.com/mod/amber) and [Konfig](https://modrinth.com/mod/konfig). Fabric files also require [Fabric API](https://modrinth.com/mod/fabric-api). Install it on your client only; servers don't need it.

![TNT blows up a ring of chests and a beam rises over each pile of loot](https://i.kaf.sh/i/7dae7cde-1f1c-4728-92cb-9b141aeeaf49.webp)

## Rarer loot, taller beams

Every item has a tier, taken from the color of its name: common, uncommon, rare, or epic. Each tier has its own beam color, white, yellow, light blue, and magenta by default, and each beam stands taller than the one below it.

Some vanilla loot gets a better tier than its name color gives it:

- **Uncommon:** emeralds and shulker shells
- **Rare:** diamonds, echo shards, and hearts of the sea
- **Epic:** ancient debris, netherite scrap, netherite ingots, and nether stars

![Cobblestone, an emerald, a diamond, and a netherite ingot land in a row, each beam taller than the last](https://i.kaf.sh/i/3deb960c-8501-4ede-b357-682f53af9562.webp)

## One beam per pile

Loot that lands close together shares a beam:

- **Crowns:** the best item in the pile floats at the top of the beam, so you can tell a diamond sword from a stick before you walk over.
- **Labels:** get close and the pile names its best item and how many there are. "+3 more" means three other kinds of item lie with it.
- **Rise and sink:** beams rise out of the ground when loot lands and grow when better loot joins the pile. Pick the pile up and its beam sinks back down. Take only the best item and the beam carries on for whatever is left.

![Three zombies drop their loot into one pile, crowned by a diamond sword, and the beam sinks when the player picks it up](https://i.kaf.sh/i/d487d8cb-49a0-4215-a8a2-f12e26b0cb24.webp)

## Rare loot shows through walls in singleplayer

In your own world, rare and epic beams show through blocks, so a diamond that fell behind a wall or into a cave is still easy to find. Common loot stays hidden behind walls like normal.

On servers and in worlds opened to LAN, every beam hides behind walls, so nobody gets to see loot through them.

![A diamond's beam shows through a stone wall and keeps rising above it](https://i.kaf.sh/i/211a9c92-890b-45d4-baa1-ff1fdead459a.webp)

## Configuration

Open the config screen from Mod Menu on Fabric or the mod list on Forge and NeoForge. Hover any setting to see a picture of what it changes.

- **Common Color**, **Uncommon Color**, **Rare Color**, and **Epic Color:** pick each tier's beam color from 16 options.
- **Smallest Tier:** hide beams for anything below a tier, such as common junk.
- **Beam Height:** scale every beam from a quarter of its height up to three times as tall.
- **Pile Radius:** set how close items must be to share a beam, or set it to 0 to give every item its own beam.
- **Through Walls:** choose which tiers show through walls in singleplayer, or turn it off.
- **Crowns**, **Labels**, and **Rise and Sink** can each be turned off, and **Label Distance** sets how close you need to be to read a label.
- **Item Rules:** move any item or item tag to another tier, or hide it.
- **Range** and **Most Beams:** beams show within 48 blocks, at most 64 at a time with the nearest piles first. Lower them if you want more frames.

![The Loot Lights config screen, sliding through a picture for each setting](https://i.kaf.sh/i/17aa1b40-3ec5-45a5-a7ff-f5b8c2fc8992.webp)

The clips on this page were recorded with Complementary Shaders.

{{snippet:qa}}

{{snippet:promo mods=liteminer,torch-toss,mochila,ender-sight}}

## Compatibility

Let me know if you find any issues.
