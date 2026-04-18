# Konfig

Konfig is a multiloader config library for Minecraft mods.

It gives you a typed API, side-aware config scopes (`CLIENT`, `COMMON`, `SERVER`), and built-in server to client sync for shared values.

## What You Get

- Typed config values in common code
- Category-based builder API (`push` / `pop`)
- Runtime validation and fallback to defaults
- Built-in sync modes (`NONE`, `LOGIN`, `LOGIN_AND_RELOAD`)
- Commented TOML config files at `config/<modid>/<name>.toml`
- Built-in config screen generation for registered handles with auto-save status
- Rich generated editors for string lists and RGB/ARGB color values
- Registry-backed autocomplete for string and string-list entries
- Fabric ModMenu integration (`modmenu` entrypoint)
- Forge and NeoForge config button integration in the mod list
- Fabric + Forge support across old and new versions
- NeoForge support on modern versions

## Pics

![konfig1.png](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig1.png)

![konfig2.png](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig2.png)

![konfig3.png](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig3.png)

![konfig4.png](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig4.png)

## Supported Versions

| Minecraft | Fabric | Forge | NeoForge |
| --- | --- | --- | --- |
| 1.21.11 | yes | yes | yes |
| 1.21.10 | yes | yes | yes |
| 1.21.1 | yes | yes | yes |
| 1.20.1 | yes | yes | no |
| 1.19.2 | yes | yes | no |
| 1.18.2 | yes | yes | no |
| 1.16.5 | yes | yes | no |

## Quick Example

```java
import com.iamkaf.konfig.api.v1.*;

public final class ExampleConfig {
    public static final ConfigHandle HANDLE;
    public static final ConfigValue<Boolean> ENABLED;
    public static final ConfigValue<Integer> RANGE;

    static {
        ConfigBuilder builder = Konfig.builder("examplemod", "common")
                .scope(ConfigScope.COMMON)
                .syncMode(SyncMode.LOGIN)
                .comment("Example mod config");

        builder.push("general");
        builder.categoryComment("General gameplay tuning");
        ENABLED = builder.bool("enabled", true)
                .comment("Master toggle")
                .sync(true)
                .build();

        RANGE = builder.intRange("range", 8, 1, 64)
                .comment("Effect radius")
                .sync(true)
                .restart(RestartRequirement.WORLD)
                .build();
        builder.pop();

        HANDLE = builder.build();
    }
}
```

{{snippet:translate}}

{{snippet:qa}}

{{snippet:promo mods=bonded,kafs-valentine-special,liteminer,mochila,torch-toss}}