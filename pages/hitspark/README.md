# Hitspark

![Hitspark: a sword hits a training dummy for a gold critical 9, a combo counter climbs to tier 1, and a red ! pops over a zombie that spots you](IKAF:banner-store.webp)

![Minecraft 1.21.11, 26.1.2, 26.2, and 26.3](https://shieldcn.dev/badge/Minecraft-1.21.11%20%C2%B7%2026.1.2%20%C2%B7%2026.2%20%C2%B7%2026.3-4ade80.svg?logo=lu:Pickaxe&variant=secondary&mode=dark)
![Fabric, Forge, and NeoForge](https://shieldcn.dev/badge/Loaders-Fabric%20%C2%B7%20Forge%20%C2%B7%20NeoForge-5cd2ff.svg?logo=lu:Layers&variant=secondary&mode=dark)
[![Requires Amber](https://shieldcn.dev/badge/Requires-Amber-ebb134.svg?logo=lu:Gem&variant=secondary&mode=dark)](https://modrinth.com/mod/amber)
[![Requires Konfig](https://shieldcn.dev/badge/Requires-Konfig-a78bfa.svg?logo=lu:SlidersHorizontal&variant=secondary&mode=dark)](https://modrinth.com/mod/konfig)
[![PolyForm Shield license](https://shieldcn.dev/badge/License-PolyForm%20Shield-eeeeee.svg?logo=lu:Scale&variant=secondary&mode=dark)](https://polyformproject.org/licenses/shield/1.0.0)
[![Issues](https://shieldcn.dev/github/open-issues/iamkaf/mod-issues.svg?variant=secondary&mode=dark)](https://github.com/iamkaf/mod-issues/issues)
[![Discord](https://shieldcn.dev/discord/1207469438719492176.svg?variant=secondary&mode=dark)](https://discord.gg/HV5WgTksaB)
[![Support me on Ko-fi](https://shieldcn.dev/badge/Support%20Me-Ko--fi-30d1e3.svg?logo=kofi&variant=secondary&mode=dark)](https://ko-fi.com/iamkaffe)

Hitspark makes every fight tell you what just happened. A red **!** pops over a mob the moment it starts hunting you. Every hit throws a damage number, colored by why it landed hard. Charged hits build a combo that adds damage, hits from behind and on mobs that haven't noticed you hit harder, and a training dummy shows your DPS while you practice.

Available for Fabric, Forge, and NeoForge on Minecraft 1.21.11, 26.1.2, 26.2, and 26.3. Requires [Amber](https://modrinth.com/mod/amber) and [Konfig](https://modrinth.com/mod/konfig). Fabric files also require [Fabric API](https://modrinth.com/mod/fabric-api). Install it on both your client and the server.

![Hit after hit on one zombie climbs the combo to tier 3, and a big red number finishes it](IKAF:clips/finale.webp)

## A red ! when a mob spots you

When any mob starts targeting you, a red **!** pops over its head with a short alert sting. Zombies, skeletons, piglins, wardens, and a wolf or bee you just angered all count. A mob that loses track of you for five seconds alerts again when it finds you.

![Three zombies turn toward the player and a red ! pops over each one](IKAF:clips/spotted.webp)

## Numbers that say why

Each hit throws its damage over the mob, and the color tells you what made it count:

- **White:** a plain hit.
- **Gold with ✦:** a critical hit, from a falling swing.
- **Violet:** a backstab, from behind the mob.
- **Cyan:** a sneak hit, the first hit on a mob that hasn't noticed you.
- **Red:** a hit at combo tier 3.

Damage you take floats up in red beside your health bar. Crits, backstabs, sneak hits, and tier 3 hits draw a little bigger.

![The player creeps up behind a zombie and hits it for a cyan 22.4](IKAF:clips/sneak.webp)

## Combos

Fully charged melee hits build a combo, shown beside your crosshair. Keep landing them within 3 seconds and it climbs through three tiers:

| Hits | Tier | Extra damage |
| --- | --- | --- |
| 3 | 1 | +5% |
| 6 | 2 | +10% |
| 10 | 3 | +15% |

Spamming uncharged swings doesn't count, and one sweep that hits a crowd counts once. Taking damage breaks your combo.

![Three zombies take a white hit each, reaching tier 1, then a jump lands a gold critical on the middle one](IKAF:clips/combo.webp)

## Where you hit from

A hit from behind a mob is a backstab for +25% damage. A hit from its side is a flank for +10%. The first hit on a mob that hasn't noticed you yet, one that isn't targeting you and that you haven't hurt in the last five seconds, is a sneak hit for +50%. Bosses like the Wither, the Ender Dragon, the Warden, and Elder Guardians always notice you.

Between players, sneak hits never apply, and backstabs and flanks only apply if the server turns them on.

![The player strafes from a husk's face round to its back and hits it for a violet 16](IKAF:clips/backstab.webp)

## The training dummy

Craft a training dummy from wool, a hay bale, two sticks, and a fence:

```
 W      W = any wool
SHS     S = stick, H = hay bale
 F      F = any wooden fence
```

Hit it and it wobbles, heals right back, and shows your DPS, your combo, and your best hit above its head. Every bonus works on it, so you can try a backstab or a sneak hit before trying it on a mob.

Use dye on it to change its color. Give it armor, a head, or something to hold by using the item on it, and take things back with an empty hand. Sneak and use an empty hand to change its pose. Sneak and punch it to pick it back up.

![A training dummy is dyed lime and given an iron helmet beside a lantern](IKAF:clips/dressing.webp)

![The player hits the dressed dummy while DPS, combo, and best hit update above it](IKAF:clips/dps.webp)

## Configuration

Open the config screen from Mod Menu on Fabric or the mod list on Forge and NeoForge. Hover any setting to see a picture of what it changes.

Your own settings change how Hitspark looks and sounds: damage numbers on or off, whose numbers you see, their size, lifetime, and format (decimals, whole numbers, or hearts), every color, the alert and its volume, and where the combo counter sits and how loud it is. The server's settings change the fight itself: the combo window, each tier's bonus, the backstab, flank, and sneak bonuses, and whether positional bonuses apply between players.

![The Hitspark config screen, sliding through a picture for each setting](IKAF:config.webp)

## Other combat mods

Hitspark adds to vanilla combat and stays out of the way of mods that change it. If you already run another damage-number mod, Hitspark's own numbers stay off until you turn them on. Another mod's training dummy keeps its own numbers.

## Modpacks and help

You can include Hitspark in modpacks without asking first.

Found a bug or a bad interaction with another mod? Use the shared [issue tracker](https://github.com/iamkaf/mod-issues/issues). There is also a [Discord](https://discord.gg/HV5WgTksaB) for questions and ideas.
