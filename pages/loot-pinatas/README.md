# Loot Piñatas

![Loot Piñatas: a sword whacks a rainbow piñata until it bursts into confetti, and loot lands under the title](https://i.kaf.sh/i/328056cc-1edf-4104-8b0a-5035d6463589.webp)

![Minecraft 1.21.11, 26.1.2, 26.2, and 26.3](https://shieldcn.dev/badge/Minecraft-1.21.11%20%C2%B7%2026.1.2%20%C2%B7%2026.2%20%C2%B7%2026.3-4ade80.svg?logo=lu:Pickaxe&variant=secondary&mode=dark)
![Fabric, Forge, and NeoForge](https://shieldcn.dev/badge/Loaders-Fabric%20%C2%B7%20Forge%20%C2%B7%20NeoForge-5cd2ff.svg?logo=lu:Layers&variant=secondary&mode=dark)
[![Requires Amber](https://shieldcn.dev/badge/Requires-Amber-ebb134.svg?logo=lu:Gem&variant=secondary&mode=dark)](https://modrinth.com/mod/amber)
[![Requires Konfig](https://shieldcn.dev/badge/Requires-Konfig-a78bfa.svg?logo=lu:SlidersHorizontal&variant=secondary&mode=dark)](https://modrinth.com/mod/konfig)
[![PolyForm Shield license](https://shieldcn.dev/badge/License-PolyForm%20Shield-eeeeee.svg?logo=lu:Scale&variant=secondary&mode=dark)](https://polyformproject.org/licenses/shield/1.0.0)
[![Issues](https://shieldcn.dev/github/open-issues/iamkaf/mod-issues.svg?variant=secondary&mode=dark)](https://github.com/iamkaf/mod-issues/issues)
[![Discord](https://shieldcn.dev/discord/1207469438719492176.svg?variant=secondary&mode=dark)](https://discord.gg/HV5WgTksaB)
[![Support me on Ko-fi](https://shieldcn.dev/badge/Support%20Me-Ko--fi-30d1e3.svg?logo=kofi&variant=secondary&mode=dark)](https://ko-fi.com/iamkaffe)

Hostile mobs sometimes drop a piñata (pinata). Set it down, whack it, and it bursts into confetti and a spray of loot: cookies, nuggets, fireworks, party dyes, and now and then a prize like a diamond, a golden apple, or an enchanted book.

Available for Fabric, Forge, and NeoForge on Minecraft 1.21.11, 26.1.2, 26.2, and 26.3. Requires [Amber](https://modrinth.com/mod/amber) and [Konfig](https://modrinth.com/mod/konfig). Fabric files also require [Fabric API](https://modrinth.com/mod/fabric-api). Install it on both the client and the server.

## Getting one

Any hostile mob you kill has a 2% chance to drop a Piñata, plus 1% for each level of Looting on your weapon. It has to be your kill, like other rare drops: mobs that die in a farm without a player hitting them never drop one, and neither do baby mobs.

Bosses always drop a Golden Piñata: the Wither, the Ender Dragon, the Warden, and Elder Guardians. The Ender Dragon's lands at your feet instead of falling into the void.

## Breaking it open

Use a Piñata on the ground to stand it up. Then hit it. Every hit makes it wobble and throws a puff of confetti, and somewhere between the third and sixth hit it bursts. You never know which hit will do it. When the loot holds a prize, the prize pops up out of the burst.

The loot is decided when it bursts, so you can carry piñatas around and save them for a party. Changed your mind before the first hit? Sneak and use it to pick it back up. Once anyone has hit it, it stays until it bursts.

Only players can break a piñata, by hand, with a weapon, or with arrows. Explosions, fire, and mobs leave it alone. In creative mode one hit bursts it.

A Golden Piñata bursts into gold confetti and more loot, with two prizes that never miss.

## Configuration

Open the config screen from Mod Menu on Fabric or the mod list on Forge and NeoForge. Hover any setting to see a picture of what it changes. On a server, operators can change these settings from the same screen.

- **Drop Chance:** the percent chance a hostile mob drops a Piñata. Default 2.
- **Looting Bonus:** extra percent per level of Looting. Default 1.
- **Boss Golden Piñatas:** on by default.

![The Loot Piñatas config screen, sliding through a picture for each setting](https://i.kaf.sh/i/89780dde-b4b0-4e38-a32d-63329846ebec.webp)

The loot lives in two data-pack loot tables, `lootpinatas:pinatas/pinata` and `lootpinatas:pinatas/golden_pinata`, so modpacks and data packs can change what is inside. The bosses that drop Golden Piñatas come from the entity tag `lootpinatas:drops_golden_pinata`, and the item that pops up out of a burst is the rarest prize in the item tag `lootpinatas:prizes`, or the rarest item when the loot has no prize.

The pictures on this page were recorded with Complementary Shaders.

{{snippet:qa}}

{{snippet:promo mods=loot-lights,liteminer,torch-toss,mochila}}

## Compatibility

Let me know if you find any issues.
