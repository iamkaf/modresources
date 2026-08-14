# Konfig

Konfig is a multiloader configuration library for Minecraft mods.

It lets mods declare typed config values in common code, save them as commented TOML, sync selected values to clients, and generate config screens for Fabric, Forge, and NeoForge.

Konfig is built for shared common code. Loader-specific integration stays in the loader roots, while config declaration, validation, migration, sync metadata, and screen metadata can live beside the rest of your mod logic.

## What You Get

- Typed config values for booleans, numbers, enums, strings, string lists, RGB/ARGB colors, and custom codecs
- Side-aware config scopes: `CLIENT`, `COMMON`, and `SERVER`
- Commented TOML files at `config/<modid>/<name>.toml`
- Built-in sync modes: `NONE`, `LOGIN`, and `LOGIN_AND_RELOAD`
- Schema versioning and step-by-step migrations
- Generated config screens for registered handles
- Inline screen decorations: headers, images, descriptive text, and clickable URLs
- Explicit tooltips for generated screen rows
- Rich hover info panels for global, category, and value-specific help
- Fabric Mod Menu integration
- Forge and NeoForge config button helpers

## Pics

![Konfig overview with inline documentation and info panel](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig1.png)

![Konfig boolean, enum, and number controls](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig2.png)

![Konfig registry-backed string and color controls](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig3.png)

![Konfig string list controls with registry icons](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig4.png)

![Konfig registry-backed string list editor](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig5.png)

![Konfig ARGB color editor with channel sliders](https://raw.githubusercontent.com/iamkaf/modresources/refs/heads/main/pages/konfig/konfig6.png)

## Supported Versions

Konfig `0.4.0` supports every Minecraft line from `1.14.4` through `26.2`.

- Fabric starts at `1.14.4`
- Forge starts at `1.16.5`
- NeoForge starts at `1.21.1`

Konfig uses one semantic release across supported Minecraft lines. The `+<mc>` suffix tells you which Minecraft version the artifact targets, for example `0.4.0+1.21.11` or `0.4.0+26.2`.

## Quick Example

```java
import com.iamkaf.konfig.api.v1.ConfigBuilder;
import com.iamkaf.konfig.api.v1.ConfigHandle;
import com.iamkaf.konfig.api.v1.ConfigScope;
import com.iamkaf.konfig.api.v1.ConfigValue;
import com.iamkaf.konfig.api.v1.Konfig;
import com.iamkaf.konfig.api.v1.RestartRequirement;
import com.iamkaf.konfig.api.v1.SyncMode;

public final class ExampleConfig {
    public static final ConfigHandle HANDLE;
    public static final ConfigValue<Boolean> ENABLED;
    public static final ConfigValue<Integer> RANGE;

    static {
        ConfigBuilder builder = Konfig.builder("examplemod", "common")
                .scope(ConfigScope.COMMON)
                .syncMode(SyncMode.LOGIN)
                .comment("Example mod config")
                .info(info -> info
                        .header("Example Mod")
                        .inlineText("These settings control shared gameplay behavior.")
                        .url("Documentation", "https://example.invalid/docs"));

        builder.header("Example Mod Settings");
        builder.inlineText("These entries are saved automatically.");
        builder.url("Documentation", "https://example.invalid/docs");

        builder.push("general");
        builder.categoryComment("General gameplay tuning");
        builder.categoryTooltip("General gameplay tuning");
        builder.categoryInfo(info -> info
                .header("General")
                .inlineText("Values in this section affect the whole mod."));

        ENABLED = builder.bool("enabled", true)
                .comment("Master toggle")
                .tooltip("Enable example mod features")
                .sync(true)
                .info(info -> info
                        .header("Master Toggle")
                        .inlineText("Turns the main feature set on or off."))
                .build();

        RANGE = builder.intRange("range", 8, 1, 64)
                .comment("Effect radius")
                .tooltip("Controls the effect radius in blocks")
                .sync(true)
                .restart(RestartRequirement.WORLD)
                .build();

        builder.pop();
        HANDLE = builder.build();
    }
}
```

Use `ConfigValue#get()` when reading a value and `ConfigValue#set(value)` when changing it programmatically.

Comments are written to TOML. Generated-screen hover text is explicit through `tooltip(...)` and richer `info(...)` content, so your config files and UI help can say different things when needed.

## Dependencies

Add the Kaf Maven repository:

```groovy
repositories {
    maven { url = "https://maven.kaf.sh" }
}
```

Use the loader artifact for the Minecraft line you target:

```groovy
modImplementation "com.iamkaf.konfig:konfig-fabric:<version>"
modImplementation "com.iamkaf.konfig:konfig-forge:<version>"
modImplementation "com.iamkaf.konfig:konfig-neoforge:<version>"
```

Do not depend on Konfig `common` directly. Use the loader-specific artifact.

{{snippet:translate}}

{{snippet:qa}}

{{snippet:promo mods=bonded,kafs-valentine-special,liteminer,mochila,torch-toss}}
