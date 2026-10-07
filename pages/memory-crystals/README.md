# Memory Crystals

![Memory Crystals: a crystal shatters and carries the player back to where a zombie fell](https://i.kaf.sh/i/69d4b342-957a-4bca-ad32-5e1503071562.webp)

![Minecraft 1.21.11, 26.1.2, 26.2, and 26.3](https://shieldcn.dev/badge/Minecraft-1.21.11%20%C2%B7%2026.1.2%20%C2%B7%2026.2%20%C2%B7%2026.3-4ade80.svg?logo=lu:Pickaxe&variant=secondary&mode=dark)
![Fabric, Forge, and NeoForge](https://shieldcn.dev/badge/Loaders-Fabric%20%C2%B7%20Forge%20%C2%B7%20NeoForge-5cd2ff.svg?logo=lu:Layers&variant=secondary&mode=dark)
[![Requires Amber](https://shieldcn.dev/badge/Requires-Amber-ebb134.svg?logo=lu:Gem&variant=secondary&mode=dark)](https://modrinth.com/mod/amber)
[![Requires Konfig](https://shieldcn.dev/badge/Requires-Konfig-a78bfa.svg?logo=lu:SlidersHorizontal&variant=secondary&mode=dark)](https://modrinth.com/mod/konfig)
[![PolyForm Shield license](https://shieldcn.dev/badge/License-PolyForm%20Shield-eeeeee.svg?logo=lu:Scale&variant=secondary&mode=dark)](https://polyformproject.org/licenses/shield/1.0.0)
[![Issues](https://shieldcn.dev/github/open-issues/iamkaf/mod-issues.svg?variant=secondary&mode=dark)](https://github.com/iamkaf/mod-issues/issues)
[![Discord](https://shieldcn.dev/discord/1207469438719492176.svg?variant=secondary&mode=dark)](https://discord.gg/HV5WgTksaB)
[![Support me on Ko-fi](https://shieldcn.dev/badge/Support%20Me-Ko--fi-30d1e3.svg?logo=kofi&variant=secondary&mode=dark)](https://ko-fi.com/iamkaffe)

Hostile mobs sometimes drop a Memory Crystal that remembers where they fell. Hold it for two seconds and it shatters, taking you back to that spot. Kill a creeper deep in a cave, go home to unload, and the crystal brings you back to where you left off.

Available for Fabric, Forge, and NeoForge on Minecraft 1.21.11, 26.1.2, 26.2, and 26.3. Requires [Amber](https://modrinth.com/mod/amber) and [Konfig](https://modrinth.com/mod/konfig). Fabric files also require [Fabric API](https://modrinth.com/mod/fabric-api). Install it on both the server and the client.

![A crystal glints across a cave, shatters in the player's hand, and lands them back on the island where its mob fell](https://i.kaf.sh/i/b2f9b77b-3266-4a16-90b3-67346a7007ae.webp)

## Finding crystals

Any hostile mob killed by a player can drop a crystal: 2.5% of the time, plus 1% for each level of Looting on your weapon. That is the same chance as a zombie's iron ingot. Baby mobs and the mob loot game rule work like normal loot.

The tooltip names the mob and the remembered spot, such as "Memory of a Zombie" in the Overworld at 120, 64, -340. A crystal from a flying mob remembers the ground below where it died, so a phantom's memory doesn't drop you out of the sky.

![A zombie dies in a cave and drops a Memory Crystal](https://i.kaf.sh/i/d1abb12c-3080-4e32-9164-9e524780ae6a.webp)

## Going back

Hold use for two seconds. Shards gather around you, the crystal shatters, and you land where the mob fell. Let go early and nothing happens. If something now fills the remembered spot, the crystal stays whole and tells you so.

A crystal only works in the dimension it remembers. Anywhere else it stays dormant.

![Shards gather around the player on a hill, then they land back in the cave where the crystal's mob fell](https://i.kaf.sh/i/7bb4606c-37ba-4399-a4b9-c46b1f77c189.webp)

## The glint

While you hold a crystal within 64 blocks of its memory, the spot glints through walls, so you can see where it will take you.

![Holding a crystal makes its remembered spot glint through a hill](https://i.kaf.sh/i/0c6c0f15-1099-405e-94c5-0c11fc8ef522.webp)

## Configuration

Server owners can change the drop chance, the Looting bonus, and whether crystals work across dimensions. Open the config screen from Mod Menu on Fabric or the mod list on Forge and NeoForge. Hover any setting to see a picture of what it changes. With JEI installed, crystals get an info page explaining where they come from.

![The Memory Crystals config screen, sliding through a picture for each setting](https://i.kaf.sh/i/1470a270-2945-4f59-a1c4-fad9d81c75f4.webp)

The clips on this page were recorded with Complementary Shaders.

{{snippet:qa}}

{{snippet:promo mods=liteminer,torch-toss,mochila,ender-sight}}

## Compatibility

Let me know if you find any issues.
