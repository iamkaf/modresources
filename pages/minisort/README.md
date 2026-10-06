# Minisort

![Minisort banner](https://i.kaf.sh/i/1d82e078-7e8d-4211-a522-d6d7ae8282db.gif)

[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)
[![Konfig](https://img.shields.io/badge/Konfig-iamkaf?style=for-the-badge&label=Requires&color=%2375c46b)](https://modrinth.com/mod/konfig)
[![Issues](https://img.shields.io/github/issues/iamkaf/minisort?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/minisort/issues)
[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB)
[![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

Three small buttons beside your chests: **Sort**, **Deposit**, and **Retrieve**. Your inventory gets a Sort button too, and Minisort refills your hand when a stack runs out.

Available for Fabric, Forge, and NeoForge on Minecraft 1.21.11, 26.1.2, 26.2, and 26.3. Requires [Amber](https://modrinth.com/mod/amber) and [Konfig](https://modrinth.com/mod/konfig). Fabric files also require [Fabric API](https://modrinth.com/mod/fabric-api). Install it on both the client and the server.

## The buttons

Open a chest and the buttons sit to the right of it.

- **Sort** merges partial stacks and puts the container in order. It only touches the container; your inventory stays as it is.
- **Deposit** moves every stack from your inventory, hotbar included, whose item is already in the container. Your sword stays with you, your extra cobblestone goes into the cobblestone chest.
- **Retrieve** pulls every stack from the container whose item you already carry. Bring one torch, and the chest's torches come back with you.

Hold **Shift** and Deposit and Retrieve move everything instead. Shift-Deposit empties your main inventory into the chest and leaves your hotbar alone. Shift-Retrieve takes everything that fits, filling your main inventory before your hotbar. Hover any button to see what it does.

![A messy chest before sorting, and the same chest after one click on Sort](https://i.kaf.sh/i/03b0a1eb-da75-408b-aaea-78b661318dda.png)

The buttons show up on chests, barrels, ender chests, shulker boxes, dispensers, droppers, and hoppers. Crafting tables, furnaces, anvils, villagers, and other special screens are left alone.

## Sorting your inventory

Your own inventory has a Sort button too, beside the inventory screen. It sorts the 27 main slots and never touches your hotbar.

You can also middle-click any slot to sort the side it belongs to: a slot in the chest sorts the chest, a slot in your inventory sorts your inventory. In Creative mode, middle-click keeps its vanilla job of copying items.

## Sort order

By default, Sort orders items by their ID, which groups them by mod and then by name.

There's also an experimental **Categories** mode. It groups blocks, tools, combat gear, armor, food, potions, materials, and spawn eggs. Blocks of one material stay together, so oak logs, planks, stairs, and doors sit side by side. Tools and armor go in tier order, and colored items follow dye order.

## Hand refill

When a stack in your main hand or offhand runs out, Minisort refills it from your inventory:

- the last block you placed
- the last food or drink
- the last ender pearl, snowball, bone meal, or spawn egg you used
- a tool that just broke

The replacement has to match exactly, enchantments and names included. Tools are the one exception: a worn copy of the same tool counts. Refill looks through your hotbar first and then the rest of your inventory. It never takes from shulker boxes, bundles, or the chest you have open.

Dropping an item or putting on armor never triggers a refill, and Creative mode doesn't refill at all.

## Configuration

![The Minisort config screen, sliding from setting to setting: each setting shows a picture of what it changes](https://i.kaf.sh/i/5899d984-2145-4903-ad93-c90813d1c183.gif)

Open Minisort's settings from your loader's mod list. On Fabric, install [Mod Menu](https://modrinth.com/mod/modmenu) to add the configuration button.

- **Sort Mode** and the button positions are your own, so everyone on a server can pick differently.
- **Hand Refill** settings come from the server. Blocks, broken tools, food and drinks, and other right-click items can each be turned off. Turn off **Search Hotbar First** to keep your hotbar layout intact.

{{snippet:translate}}

{{snippet:qa}}

{{snippet:promo mods=mochila,liteminer,bonded,torch-toss}}

## Compatibility

Let me know if you find any issues.
