# Minisort

![Minisort sorting a chest with its Sort button](https://i.kaf.sh/i/e2e081fc-1d38-4a69-866f-93d929dcc5d1.webp)

![Minecraft 1.21.11, 26.1.2, 26.2, and 26.3](https://shieldcn.dev/badge/Minecraft-1.21.11%20%C2%B7%2026.1.2%20%C2%B7%2026.2%20%C2%B7%2026.3-4ade80.svg?logo=lu:Pickaxe&variant=secondary&mode=dark)
![Fabric, Forge, and NeoForge](https://shieldcn.dev/badge/Loaders-Fabric%20%C2%B7%20Forge%20%C2%B7%20NeoForge-5cd2ff.svg?logo=lu:Layers&variant=secondary&mode=dark)
[![Requires Amber](https://shieldcn.dev/badge/Requires-Amber-ebb134.svg?logo=lu:Gem&variant=secondary&mode=dark)](https://modrinth.com/mod/amber)
[![Requires Konfig](https://shieldcn.dev/badge/Requires-Konfig-a78bfa.svg?logo=lu:Settings2&variant=secondary&mode=dark)](https://modrinth.com/mod/konfig)
[![PolyForm Shield license](https://shieldcn.dev/badge/License-PolyForm%20Shield-eeeeee.svg?logo=lu:Scale&variant=secondary&mode=dark)](https://github.com/iamkaf/minisort/blob/main/LICENSE)
[![Issues](https://shieldcn.dev/github/open-issues/iamkaf/minisort.svg?variant=secondary&mode=dark)](https://github.com/iamkaf/minisort/issues)
[![Discord](https://shieldcn.dev/discord/1207469438719492176.svg?variant=secondary&mode=dark)](https://discord.gg/HV5WgTksaB)
[![Support me on Ko-fi](https://shieldcn.dev/badge/Support%20Me-Ko--fi-30d1e3.svg?logo=kofi&variant=secondary&mode=dark)](https://ko-fi.com/iamkaffe)

Minisort lets you sort storage, put matching items away, and collect supplies with three buttons: **Sort**, **Deposit**, and **Retrieve**. You can sort your inventory as well. Automatic hand refill replaces used-up stacks and broken tools with matching items you're carrying. It fits into a modpack, too: storage from other mods gets the buttons, JEI and REI make room for them, and controller players can sort through Controlify.

Install Minisort on your client and server, together with [Amber](https://modrinth.com/mod/amber) and [Konfig](https://modrinth.com/mod/konfig). Add [Fabric API](https://modrinth.com/mod/fabric-api) if you use Fabric. Downloads cover Fabric, Forge, and NeoForge for Minecraft 1.21.11, 26.1.2, 26.2, and 26.3. You can still join servers without Minisort; the buttons stay hidden there.

## The buttons

You'll find the controls along the right edge of an open chest.

**Sort** combines stacks where there's room, then arranges the chest's contents. Your carried items aren't rearranged.

![Chest contents before and after using Sort](https://i.kaf.sh/i/1db01a74-5619-4d36-84aa-d20ac33a84cb.png)

**Deposit** checks what the chest contains and stores matching items from your main inventory. Your hotbar stays put. Put some cobblestone in a chest, and you can send the rest of your cobblestone there with one click.

![Deposit moving matching items from the inventory into a chest](https://i.kaf.sh/i/5307826c-75e7-4971-857c-f6ce83e2592f.webp)

**Retrieve** uses your carried items as the filter. If you have a torch, clicking it collects the chest's torches, up to the space available in your inventory.

![Retrieve taking matching items out of a chest](https://i.kaf.sh/i/19a4dded-e1c5-4a20-96b7-83819a160d68.webp)

Holding **Shift** removes the matching-item filter. **Shift-Deposit** stores as much of your main inventory as the chest can hold, without moving hotbar items. **Shift-Retrieve** collects whatever fits, using the main inventory slots before the hotbar. Each button has a tooltip explaining its action.

![Shift-Deposit storing the whole main inventory](https://i.kaf.sh/i/e6e1c755-5739-451e-b551-efe2dff9ad39.webp)

Supported storage includes regular and ender chests, barrels, shulker boxes, dispensers, droppers, and hoppers. Screens for crafting, smelting, repairing, trading, and similar tasks don't have these controls.

## Button styles

Pick the look of the buttons in the settings: Oak, Spruce, Birch, Dark Oak, Cherry, Bamboo, Crimson, Warped, or Stone. Each one plays a short animation when you point at it.

![Minisort's nine button styles](https://i.kaf.sh/i/d6b72a87-870f-4196-9e5b-ab9d8ad6b41b.webp)

## Works with your modpack

![AE2, Refined Storage, JEI, REI, Controlify, and Smooth Swapping](https://i.kaf.sh/i/9e4d92af-3c2a-486b-bfa9-0592fa6614fd.png)

- **Storage from other mods.** Minisort recognizes storage by its slots, so other mods' chests and storage blocks get Sort, Deposit, and Retrieve without a patch for each mod. Machines, crafting grids, and storage-network terminals such as AE2 and Refined Storage are left alone, and their own controls and middle-click keep working. If the buttons show up somewhere they don't belong, add that menu's ID to **Turned Off In** in the settings.
- **Modded items sort with their tabs.** The default order follows the creative inventory, so each mod's items land beside their own creative tab instead of piling up at the end.
- **JEI and REI.** Their item lists and bookmarks make room for Minisort's buttons instead of drawing over them. Both work on Fabric and NeoForge.
- **Controllers.** With Controlify, pressing the right stick sorts the container, or the side under the cursor. The cursor snaps to Minisort's buttons, and Controlify's Shift input turns them into their "everything" versions. Controlify runs on Fabric and NeoForge.
- **Smooth Swapping.** When it's installed, Minisort leaves item animations to it.
- **Servers without Minisort.** You can still join them; the buttons stay hidden there.
- **One file per version.** Each Minecraft version has a single download that runs on Fabric, Forge, and NeoForge.

![A chest with Minisort's buttons beside JEI's item list](https://i.kaf.sh/i/44b0d50c-2302-4f44-ac53-829fd0d609a8.png)

## Sorting your inventory

The inventory screen's **Sort** button arranges your 27 main inventory slots. Hotbar positions stay fixed.

![The inventory screen's Sort button arranging the main inventory](https://i.kaf.sh/i/2064f9f0-dab9-4921-9d57-b2d2e43247df.webp)

Middle-click works as a shortcut: click a storage slot to sort that container, or an inventory slot to sort your carried items. Creative mode retains Minecraft's usual middle-click item copying.

The **Sort** key, R by default, does the same without a middle mouse button: it sorts the side under the cursor, or the open container when the cursor isn't over a slot. Change it in the Controls settings.

## Sort order

Items sort in the creative inventory's order: building blocks first, then colored and natural blocks, tools, combat gear, food, and ingredients. Items from other mods follow their creative tabs too. An item that isn't on any tab sits next to related items.

Pick **Registry ID** in the settings to sort alphabetically by item ID instead, which keeps each mod's items together.

![A messy row sorted into creative inventory order](https://i.kaf.sh/i/1f6fb14a-2f30-4ff4-a67e-e36b151288a7.png)

## Item animation

When you sort, deposit, or retrieve, each item glides from its old slot to its new one in about a tenth of a second, and merged stacks fly into the same slot. Only Minisort's own actions animate; clicks and other mods' sorting don't. Turn it off with **Item Animation** in the settings.

![Sorted items gliding to their new slots](https://i.kaf.sh/i/9b7ed22e-0969-4dce-8491-629d0972021c.webp)

## Hand refill

Hand refill works for either hand. It searches your inventory for a replacement after you:

- place the final block in a stack
- finish a stack of food or drinks
- use your remaining ender pearl, snowball, bone meal, or spawn egg
- break a tool

![The hand refilling when a stack of blocks runs out](https://i.kaf.sh/i/92dbda25-dc51-485c-9623-ba663fd0f9d8.webp)

![A broken pickaxe replaced from the inventory](https://i.kaf.sh/i/6ddb9d68-0445-4f2d-9af0-357a44c4f18d.webp)

Names, enchantments, and other item data must match. Replacement tools may have different wear, but must otherwise match the broken tool. By default, the search starts in the hotbar and continues through your main inventory. Items inside bundles, shulker boxes, or open containers aren't available for refill.

Refill is disabled in Creative mode. Throwing items away and equipping armor don't activate it either.

## Configuration

![Minisort settings with illustrations of their effects](https://i.kaf.sh/i/53a1951b-351a-4b8e-a7f6-956df4cbde9b.webp)

Use the mod list to reach Minisort's configuration screen. Fabric users need [Mod Menu](https://modrinth.com/mod/modmenu) for this entry.

- Each player chooses their **Sort Mode**, **Item Animation**, **Button Style** (eight woods or Stone), and the menus Minisort is **Turned Off In**.
- The server controls **Hand Refill**, with separate switches for blocks, tool breakage, food and drinks, and other items used by right-clicking. Disable **Search Hotbar First** to look for replacements in your main inventory before checking other hotbar slots.

{{snippet:translate}}

{{snippet:qa}}

{{snippet:promo mods=mochila,liteminer,bonded,torch-toss}}

## Compatibility

Report any compatibility problems you run into.
