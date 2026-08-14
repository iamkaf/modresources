# Loot Runes

![Loot Runes banner placeholder](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/lootrunes/banner.png)

[![Requires Amber](https://img.shields.io/badge/Requires-Amber-ebb134?style=for-the-badge)](https://modrinth.com/mod/amber)
[![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=eeeeee)](https://github.com/iamkaf/mod-issues)
[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=Discord&color=5865F2)](https://discord.gg/HV5WgTksaB)

Loot Runes is a work-in-progress mod about changing mob drops with a small loadout. You'll unlock runes as you play, then use a Rune Tablet to keep up to three active at once. Different combinations can reward you for hunting in unusual biomes, changing weapons, keeping a streak alive, or taking on a harder fight.

**The rune system isn't playable yet.** The project is being modernized before feature work begins.

## The plan

Runes will be permanent unlocks rather than items you have to collect again. The Rune Tablet will open a small Minecraft-style menu where you can choose three of them and swap your setup when you want to hunt something different.

The first planned set includes:

- **Plenty**, which gives mobs another natural loot roll but makes them tougher.
- **Sacrifice**, which trades some common drops for better odds at unusual ones.
- **Echoes**, which carries the last drop into a kill against another kind of mob.
- **Ascendance**, which builds up danger and rewards during a kill streak.
- **Migration**, which changes rewards outside a mob's usual biome.
- **Improvisation**, which rewards changing your finishing weapon.

The exact effects and numbers may change once they can be playtested.

## Current builds

Loot Runes is still carrying the old skeleton-assisted drop mechanic from Extended Golf. That is the only implemented gameplay right now. The Rune Tablet, rune unlocks, and three-rune loadouts are planned for the rewrite.

The current source targets Fabric and NeoForge and requires [Amber](https://modrinth.com/mod/amber).

Pack makers should note that the namespace is now `lootrunes`. Existing datapacks need to move from `data/extendedgolf/` to `data/lootrunes/`. There is no stable datapack format for runes yet.

You can include Loot Runes in modpacks without asking first.

{{snippet:qa}}

{{snippet:promo mods=bonded,kaf-hud,liteminer,mochila,snapshears}}

## Credits

- Everyone who's helped shape the new idea.
- **Aris**, for always being there for me.
