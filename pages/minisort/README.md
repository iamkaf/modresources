# Minisort

![Using Minisort to organize chest contents](https://i.kaf.sh/i/e2e081fc-1d38-4a69-866f-93d929dcc5d1.webp)

![Minecraft 1.21.11, 26.1.2, 26.2, and 26.3](https://shieldcn.dev/badge/Minecraft-1.21.11%20%C2%B7%2026.1.2%20%C2%B7%2026.2%20%C2%B7%2026.3-4ade80.svg?logo=lu:Pickaxe&variant=secondary&mode=dark)
![Fabric, Forge, and NeoForge](https://shieldcn.dev/badge/Loaders-Fabric%20%C2%B7%20Forge%20%C2%B7%20NeoForge-5cd2ff.svg?logo=lu:Layers&variant=secondary&mode=dark)
[![Requires Amber](https://shieldcn.dev/badge/Requires-Amber-ebb134.svg?logo=lu:Gem&variant=secondary&mode=dark)](https://modrinth.com/mod/amber)
[![Requires Konfig](https://shieldcn.dev/badge/Requires-Konfig-a78bfa.svg?logo=lu:Settings2&variant=secondary&mode=dark)](https://modrinth.com/mod/konfig)
[![PolyForm Shield license](https://shieldcn.dev/badge/License-PolyForm%20Shield-eeeeee.svg?logo=lu:Scale&variant=secondary&mode=dark)](https://github.com/iamkaf/minisort/blob/main/LICENSE)
[![Issues](https://shieldcn.dev/github/open-issues/iamkaf/minisort.svg?variant=secondary&mode=dark)](https://github.com/iamkaf/minisort/issues)
[![Discord](https://shieldcn.dev/discord/1207469438719492176.svg?variant=secondary&mode=dark)](https://discord.gg/HV5WgTksaB)
[![Support me on Ko-fi](https://shieldcn.dev/badge/Support%20Me-Ko--fi-30d1e3.svg?logo=kofi&variant=secondary&mode=dark)](https://ko-fi.com/iamkaffe)

Minisort adds **Sort**, **Deposit**, and **Retrieve** buttons to your storage screens, plus a **Sort** button for your inventory. Use them to tidy a chest, unload what you've been carrying, or grab more supplies. When a stack runs out or a tool breaks, hand refill finds a matching replacement in your inventory. Modded storage works too, with support for JEI, REI, and Controlify.

To use Minisort, add it to both the client and server along with [Amber](https://modrinth.com/mod/amber) and [Konfig](https://modrinth.com/mod/konfig). Fabric also needs [Fabric API](https://modrinth.com/mod/fabric-api). Pick the file for Minecraft 1.21.11, 26.1.2, 26.2, or 26.3; that file works on Fabric, Forge, and NeoForge. Servers without Minisort remain joinable, with the buttons hidden.

## Using the storage buttons

Open a chest to find three buttons on its right side.

Click **Sort** to merge partial stacks and put the chest in order. It only sorts the chest; everything in your inventory keeps its place.

![The same chest before sorting and after sorting](https://i.kaf.sh/i/1db01a74-5619-4d36-84aa-d20ac33a84cb.png)

Click **Deposit** to unload items that are already in the chest. For example, a chest containing cobblestone will take the cobblestone from your main inventory. Deposit skips your hotbar.

![Matching inventory items sent to storage with Deposit](https://i.kaf.sh/i/5307826c-75e7-4971-857c-f6ce83e2592f.webp)

Click **Retrieve** to take more of the items you're carrying. If you have a torch in your inventory, Retrieve pulls torches from the chest until there's no room for more.

![Restocking from a chest with Retrieve](https://i.kaf.sh/i/19a4dded-e1c5-4a20-96b7-83819a160d68.webp)

Hold **Shift** to transfer items without checking for matches. **Shift-Deposit** empties your main inventory into the chest as far as space allows, still skipping the hotbar. **Shift-Retrieve** takes anything the chest holds, filling your main inventory before your hotbar. Hover over a button to read what it does.

![Transferring the main inventory to a chest with Shift-Deposit](https://i.kaf.sh/i/e6e1c755-5739-451e-b551-efe2dff9ad39.webp)

These buttons work in chests, ender chests, barrels, shulker boxes, dispensers, droppers, and hoppers. You won't see them in crafting, furnace, repair, or trading screens, or other menus used for similar tasks.

## Choosing a button style

The settings offer nine styles: Oak, Spruce, Birch, Dark Oak, Cherry, Bamboo, Crimson, Warped, and Stone. Hovering over a button gives it a little animation.

![All nine styles available for the storage buttons](https://i.kaf.sh/i/d6b72a87-870f-4196-9e5b-ab9d8ad6b41b.webp)

## Modpack support

![AE2, Refined Storage, JEI, REI, Controlify, and Smooth Swapping](https://i.kaf.sh/i/9e4d92af-3c2a-486b-bfa9-0592fa6614fd.png)

- **Modded storage.** Chests and storage blocks from other mods can use all three buttons. Minisort checks the slots to recognize storage, so each mod doesn't need its own patch. Fuel, upgrade, and other special slots are excluded from transfers and sorting. Machine menus, crafting grids, and AE2 or Refined Storage terminals keep their existing buttons and middle-click behavior. To hide Minisort's buttons in a particular menu, put its ID in the **Turned Off In** setting.
- **Creative tabs set the order.** By default, modded items take their place according to their creative tabs rather than all ending up after the vanilla items.
- **JEI and REI** move their item lists and bookmarks out of the buttons' way. This support is available on Fabric and NeoForge.
- **Controlify** lets you sort by pressing the right stick. It sorts the side your cursor points to, or the container otherwise. You can also snap the cursor to the buttons and use Controlify's Shift input for Deposit and Retrieve without the matching filter. Controlify is available for Fabric and NeoForge.
- **Smooth Swapping** handles the item animations if you have it installed.
- **Joining a server without Minisort** works as usual. Minisort hides its buttons on that server.
- **Fabric, Forge, and NeoForge** use the same jar for a given Minecraft version.

![JEI leaving space for the buttons in a chest screen](https://i.kaf.sh/i/44b0d50c-2302-4f44-ac53-829fd0d609a8.png)

## Inventory sorting and shortcuts

Open your inventory and click **Sort** to organize its 27 main slots. Your hotbar keeps the arrangement you chose.

![Organizing the player's main inventory with Sort](https://i.kaf.sh/i/2064f9f0-dab9-4921-9d57-b2d2e43247df.webp)

You can also middle-click a slot: a storage slot sorts the container, while a player inventory slot sorts your main inventory. In Creative mode, middle-click still copies items as it does in vanilla.

Press **R**, the default **Sort** key, to sort the inventory or storage beneath your cursor. If you aren't pointing at a slot, it sorts the open container. You can assign another key in Controls.

## How items are ordered

The default sorting order comes from the creative inventory. Building blocks lead, followed by colored blocks, natural blocks, tools, combat gear, food, and ingredients. Modded items use their creative tabs for placement, and items missing from those tabs are placed with related items.

For alphabetical sorting by item ID, set the sort mode to **Registry ID**. This groups items by mod.

![Items arranged to follow the creative inventory](https://i.kaf.sh/i/1f6fb14a-2f30-4ff4-a67e-e36b151288a7.png)

## Watching items move

Items slide between slots when you use Sort, Deposit, or Retrieve. The movement takes about a tenth of a second; stacks that merge meet in their destination slot. These animations apply to Minisort actions, leaving ordinary clicks and sorting by other mods unchanged. Disable **Item Animation** if you prefer items to move instantly.

![Items sliding between slots during sorting](https://i.kaf.sh/i/9b7ed22e-0969-4dce-8491-629d0972021c.webp)

## Replacing empty stacks and broken tools

With hand refill, Minisort checks for a matching item in your inventory when something in either hand runs out. That happens when you:

- use the last block you're holding
- eat or drink the last item in a stack
- run out of ender pearls, snowballs, bone meal, or spawn eggs while using them
- wear out a tool

![A new stack of blocks replacing an empty stack in hand](https://i.kaf.sh/i/92dbda25-dc51-485c-9623-ba663fd0f9d8.webp)

![Another pickaxe taking the place of a broken one](https://i.kaf.sh/i/6ddb9d68-0445-4f2d-9af0-357a44c4f18d.webp)

A replacement needs the same name, enchantments, and other item data. For tools, the amount of durability left can differ. Minisort checks your hotbar first by default, then your main inventory. It can only use items in those slots, so supplies inside a bundle, shulker box, or open container won't refill your hand.

Hand refill is off in Creative mode. Dropping an item or putting on armor doesn't trigger a replacement.

## Changing the settings

![The settings screen showing what each option changes](https://i.kaf.sh/i/53a1951b-351a-4b8e-a7f6-956df4cbde9b.webp)

Open Minisort's settings from your mod list. On Fabric, install [Mod Menu](https://modrinth.com/mod/modmenu) to access that screen.

- Player settings include **Sort Mode**, **Item Animation**, **Button Style**, and **Turned Off In**. Choose from eight wood styles or Stone, and list any menus where you want the buttons hidden.
- Server settings control **Hand Refill**. Blocks, broken tools, food and drinks, and other right-click items each have their own switch. Turn off **Search Hotbar First** to check the main inventory for replacements before the other hotbar slots.

{{snippet:translate}}

{{snippet:qa}}

{{snippet:promo mods=mochila,liteminer,bonded,torch-toss}}

## Reporting compatibility problems

If Minisort has trouble working with another mod, please report it.
