The development plan is to make the mod more customizable and update it to the latest versions of Minecraft. If you have any requests for features or mod compats let me know.

## Making Your Datapack

You can use the tags provided by Extended Golf to change or replace the loot.

The tags follow the format: `extendedgolf:entity_name_here`

So, for example, to make Pandas drop golden apples:

In your datapack, make a file at `data/extendedgolf/tags/item/panda.json` with:

```json
{
  "values": [
    "minecraft:golden_apple"
  ]
}
```
or if you want to replace the default loot from this mod (pandas drop bamboo and cake 🍰):

```json
{
  "replace": true,
  "values": [
    "minecraft:golden_apple"
  ]
}
```

Note: there are a few entities that I didn't add loot for because a skeleton can't kill them or it wouldn't make much sense, but if you want to you can (enderman, ender_dragon, player, armor_stand, creeper).
