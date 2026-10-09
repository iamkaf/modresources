# Konfig

Konfig is a configuration library for Minecraft mods on Fabric, Forge, and NeoForge. Mods use it to save their
settings as commented TOML files, sync settings from the server, and show an in-game config screen.

Fabric files require [Fabric API](https://modrinth.com/mod/fabric-api).

## For players

If a mod told you to install Konfig, install it next to that mod. Konfig adds no gameplay of its own.

- Open a mod's config screen from your loader's mod list. On Fabric, install [Mod Menu](https://modrinth.com/mod/modmenu) to get the button.
- Settings save to `config/<modid>/<name>.toml`, with the comments the mod provides for each value.
- On a server, synced settings come from the server. Operators with permission level 2 can edit them from the
  config screen when the server also has Konfig. Other players see them read-only.
- Forge and NeoForge players can join servers that don't have Konfig.

## For mod developers

Declare typed config values in common code. Konfig uses that one declaration for the TOML file, validation,
sync, and the generated screen. Loader-specific integration stays in the loader roots.

- Typed values: booleans, ranged integers, longs, and doubles, dropdowns, enums, strings, string lists, RGB/ARGB colors, and custom codecs
- Side-aware config scopes: `CLIENT`, `COMMON`, and `SERVER`
- Sync modes: `NONE`, `LOGIN`, and `LOGIN_AND_RELOAD`, opted in per value
- Remote editing of synced `COMMON` and `SERVER` configs by operators
- Schema versioning and step-by-step migrations
- Generated config screens with headers, images, descriptive text, clickable URLs, tooltips, and hover info panels
- Registry autocomplete for string and string list values
- Fieldsets for ordered collections of structured entries, with searchable catalog screens (experimental, the API may still change before 1.0.0)
- Fabric Mod Menu integration, plus Forge and NeoForge config button helpers

## Pics

![Konfig overview with inline documentation and info panel](https://i.kaf.sh/i/4e48f5ab-9a5d-425c-a7f6-c7f06a63a052.png)

![Konfig boolean, enum, and number controls](https://i.kaf.sh/i/584bd83f-bfa7-4907-a63e-148dc347d1a8.png)

![Konfig registry-backed string and color controls](https://i.kaf.sh/i/5a3960bf-4085-4470-81a5-6b0d1b5c0c58.png)

![Konfig string list controls with registry icons](https://i.kaf.sh/i/c7dbd687-e2e5-4bc5-a8d3-2f256754d05b.png)

![Konfig registry-backed string list editor](https://i.kaf.sh/i/9944e6a0-32ca-4ff6-b707-5567a93ec00a.png)

![Konfig ARGB color editor with channel sliders](https://i.kaf.sh/i/f79a15c2-38cd-46fe-a9a1-1f1d29b11041.png)

## Supported Versions

Konfig supports Minecraft 1.17 through 26.3.

- Fabric on every line
- Forge from 1.17.1, except 1.20.5 and 1.21.2
- NeoForge from 1.21.1

Older Konfig releases for Minecraft 1.14.4 through 1.16.5 are still available.

Konfig uses one release across supported Minecraft lines. The `+<mc>` suffix tells you which Minecraft version the artifact targets, for example `0.10.1+1.21.11` or `0.10.1+26.3`.

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
