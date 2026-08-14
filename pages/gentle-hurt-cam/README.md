# Gentle Hurt Cam

![Gentle Hurt Cam banner](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/gentle-hurt-cam/banner.png)

[![Amber](https://img.shields.io/badge/Amber-iamkaf?style=for-the-badge&label=Requires&color=%23ebb134)](https://modrinth.com/mod/amber)
[![Issues](https://img.shields.io/github/issues/iamkaf/mod-issues?style=for-the-badge&color=%23eee)](https://github.com/iamkaf/mod-issues)
[![Discord](https://img.shields.io/discord/1207469438719492176?style=for-the-badge&logo=discord&label=DISCORD&color=%235865F2)](https://discord.gg/HV5WgTksaB)
[![KoFi](https://img.shields.io/badge/KoFi-iamkaf?style=for-the-badge&logo=kofi&logoColor=%2330d1e3&label=Support%20Me&color=%2330d1e3)](https://ko-fi.com/iamkaffe)

A Minecraft mod that cancels the hurt camera effect when you take zero damage.

### Features

**No More Shake for Zero Damage**
When you take damage that's fully absorbed (by armor, enchantments, or other protection), the hurt camera shake effect is cancelled. Your screen won't shake when you don't actually take any damage. 

This means when you have full netherite armor or other damage reduction that absorbs all incoming damage, your view stays steady.

### How it Works

The mod monitors the hurt camera effect and cancels it when:
- Your entity was recently hurt (`hurtTime` is active).
- But the actual damage taken was less than 0.5 hearts (`lastHurt < 0.5`).

## Q&A

**Q: Where can I ask something that is not listed here?**

A: Make an issue [here](https://github.com/iamkaf/mod-issues) or join the [Discord](https://discord.gg/HV5WgTksaB) and shoot me a message.

**Q: Can I include it in my modpack?**

A: Yes, no need to give credit or ask.

[![Join our Discord](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/common/discord.png)](https://discord.gg/HV5WgTksaB)

## Credits

- And most importantly, **Aris**, for always being there for me.
