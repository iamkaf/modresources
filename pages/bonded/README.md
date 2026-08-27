# Bonded

![Bonded banner](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/bonded/banner.png)

[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)
[![Issues](https://img.shields.io/github/issues/iamkaf/bonded?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues)
[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB)
[![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

A gear leveling mod for Fabric, Forge, and NeoForge.

Requires [Amber](https://modrinth.com/mod/amber) and [Konfig](https://modrinth.com/mod/konfig). Fabric files
also require [Fabric API](https://modrinth.com/mod/fabric-api).

Bonded makes your tools, weapons, and armor grow with use. Mine, fight, and explore with the gear you like,
and it will earn Bond, level up, and gain bonuses suited to its job.

- Repair damaged gear or give it temporary extra durability at the Repair Bench
- Upgrade fully leveled gear at the Tool Bench
- Find Scrap in loot, recover it from broken gear, and use it as a general repair material
- Train augments that add abilities to individual pieces of gear

![Bonded Benches GIF](https://i.imgur.com/mHjZWtm.gif)

## How it works

Use gear to build Bond. Mining gear gains Bond from breaking blocks, weapons gain it in combat, and armor
gains it while protecting you. Item tooltips show the current level, progress, and bonuses.

Use an item on the **Repair Bench** to repair it. The bench consumes one matching repair material. Any repair
beyond the item's normal durability becomes temporary over-repair, shown with a separate item bar.

Use a fully leveled item on the **Tool Bench** to upgrade it along its configured path. Both benches can take
matching materials from your inventory or from adjacent chests and barrels.


![Bonded Demo](https://i.imgur.com/bwwnunt.gif)

## Gear rules

Bonded recognizes standard tools, weapons, and armor through Minecraft's item tags. Gear Rules handle exact
experience caps, nonstandard equipment, repair materials, and Tool Bench upgrade paths.

Built-in profiles cover:

- vanilla and Bonded gear
- Basic Weapons and Advanced Netherite
- Immersive Armors
- BetterEnd and BetterNether
- Arcane Armory

Open Bonded's configuration from your loader's mod list, then select **Gear Rules**. On Fabric, install
[Mod Menu](https://modrinth.com/mod/modmenu) to add the configuration button.

The built-in profiles are read-only, so updates cannot overwrite your changes. Copy a rule into **User
Overrides** to change it, or add a new item or item-tag rule. Valid changes save automatically and apply to the
running world. Multiplayer servers own their Gear Rules. Connected players can inspect the rules the server
is using, and operators can edit them when the server permits remote config changes.

Rules for items from a removed mod stay dormant. Reinstalling the mod activates them again.

## Integrations

- **Liteminer:** vein-mined blocks give diminishing Bonded experience, and its HUD previews the total gain.
- **Patchouli:** the optional Bonded Field Guide explains recipes, progression, workstations, and augments.
- **Other gear mods:** standard tagged gear can level and repair without a dedicated profile. Use Gear Rules
  to describe nonstandard gear and custom upgrade paths.

## Screenshots

![Tool Bench recipe](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/bonded/screenshot1.png)

![Tool Bench recipe](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/bonded/screenshot2.png)

![Repair Bench recipe](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/bonded/screenshot3.png)

![Tool Bench Overlay](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/bonded/screenshot5.png)

![Repair Bench Overlay](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/bonded/screenshot6.png)

{{snippet:translate}}

{{snippet:qa}}

{{snippet:promo mods=gentlehurtcam,liteminer,mochila,torch-toss}}

## Addon API

Bonded exposes an addon API under `com.iamkaf.bonded.api`.
Use it to add Tool Bench upgrade paths, Repair Bench materials, custom experience caps, and integrations with Bonded's item state and events.

```java
import com.iamkaf.bonded.api.BondedApi;
import net.minecraft.world.item.Items;

BondedApi.addUpgrade(
        MyItems.STEEL_PICKAXE.get(),
        MyItems.MYTHRIL_PICKAXE.get(),
        MyTags.Items.MYTHRIL_UPGRADE_MATERIALS
);
BondedApi.addRepairMaterial(MyItems.STEEL_PICKAXE.get(), Items.IRON_INGOT);
BondedApi.addExperienceCap(MyItems.STEEL_PICKAXE.get(), 250);
```

For item stack integrations, use `BondedItemStacks` to read or change max-damage modifiers and over-repair state.
For event integrations, use `BondEvent` for experience, level-up, repair, and upgrade hooks, or `GameEvents.AWARD_ITEM_EXPERIENCE` to award Bonded experience from custom gameplay.

Full API docs are available in the GitHub README.

## Credits

- My amazing community
- The Fabric, NeoForge, Forge teams and all the other awesome developers whose work I depend on
- And most importantly, **Aris**, for always being there for me.
