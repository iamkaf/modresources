# Extended Golf

[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber) [![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues) [![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB) [![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

![Extended Golf](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/extendedgolf/banner.png)

Welcome to *Extended Golf*, where you’re the caddy and the Skeleton is your golf club, armed with arrows and aiming for mobs! 🏌️‍♂️💣 Position yourself just right and let the Skeleton do the rest. Get ready for more than just music discs, this mod adds a whole new range of loot from Skeleton-assisted kills! 💎🎁

It’s like Minecraft meets golf... but with mobs, arrows, and lots of loot. Whether you're chasing rare blocks or just vibing with Creepers, *Extended Golf* takes your mob-slaying to the next level! ⛳💥


### Features:
- 🎯 **Every Mob Gets Its Own Loot**: No more generic drops, each mob has its own unique loot pool! From the Warden to Slimes, each kill brings new rewards.  
- 🛠️ **Customizable Loot**: Want to change the loot? Create your own datapacks to swap out or add new drops. It's all in your hands!  
- 💥 **Skeleton Assisted Kills**: Get those mobs in perfect range and let your Skeleton friend take a shot, it's all about positioning! ⛳️  
- 🔄 **More Than Just Music Discs**: This isn’t your average skeleton kill, expect everything from rare materials to fun, quirky items!

## How To Use

Position yourself near a mob and wait for the Skeleton to hit and kill it. Once it does, you'll get loot specific to that mob. You can also customize the loot drops by making your own datapacks if you want to tweak things further.

## Datapack

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



## Images

![Golf!](https://media1.tenor.com/m/7ec6n3tTxg0AAAAd/aoi-amawashi-aoi.gif)

## Credits

- [Architectury API](https://modrinth.com/mod/architectury-api) for the multiloader setup in which the mod is built upon.
- And most importantly, **Aris**, for always being there for me.

## Q&A

**Q: Where can I ask something that is not listed here?**

A: Make an issue [here](https://github.com/iamkaf/mod-issues) or join the [Discord](https://discord.gg/HV5WgTksaB) and shoot me a message.


**Q: Can you port it to [MC version/Mod loader]?**

A: If enough people request it I'll give it some time, but this really is a 1-man team so it might take a while.


**Q: Can I include it in my modpack?**

A: Yes, no need to give credit or ask.

[![Join our Discord](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/common/discord.png)](https://discord.gg/HV5WgTksaB)


