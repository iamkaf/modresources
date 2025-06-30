# Moddy Brainstorming: Suggestions for Improvements and New Features

This document outlines potential fixes, changes to existing features, and new feature ideas for Moddy, the helper script for the multiloader-template.

## I. Suggested Fixes

1.  **Improve `set_minecraft_version` API Failure Handling:**
    *   **Current Issue:** If fetching a specific dependency version fails (e.g., Modrinth API timeout), it's silently set to "None", potentially leading to an incomplete `gradle.properties`.
    *   **Suggested Fix:** When an API call fails for a dependency, explicitly notify the user of the failure for that specific dependency. Offer options to:
        *   Retry fetching for that specific dependency.
        *   Manually input a version string for it.
        *   Skip updating that specific dependency and proceed with others.
        *   Abort the entire operation.
        This makes the process more robust and prevents accidental misconfiguration.

2.  **Safer `setup_template` Execution on Existing Projects:**
    *   **Current Issue:** The `setup_template` command, after initial confirmation, proceeds to modify numerous files. If run accidentally on an already configured project, it can overwrite critical configurations (like `gradle.properties`, `changelog.md`) and source code identifiers without further warning.
    *   **Suggested Fix:** Before modifying any file or directory, check if its content or path matches the *original template defaults* (e.g., `com.example.modtemplate`, `mod_id=examplemod`). If a file/directory seems to have been already modified from the template state, issue a specific warning for that item and require explicit confirmation (e.g., "gradle.properties seems modified. Overwrite? [y/N/abort]"). Alternatively, automatically back up critical files like `gradle.properties` and `changelog.md` before they are altered by `setup_template`.

3.  **Robust `setup_template` Icon Character Handling:**
    *   **Current Issue:** The `_create_icon` function in `setup_template` uses a limited, hardcoded font map. If the first character of the mod name (uppercased) isn't in this map (e.g., numbers, symbols, some letters), the icon generation might fail or produce an unexpected/empty PNG.
    *   **Suggested Fix:** In `_create_icon`, explicitly check if `char.upper()` exists in the `font` dictionary. If not, gracefully fall back to a default character (e.g., 'M' or a generic symbol known to be in the font) or skip icon generation entirely, informing the user with a message like "Unsupported character for icon generation; skipping or using default."

4.  **`add_service` - Robustness for `Services.java`:**
    *   **Current Issue:** If `Services.java` is missing or its structure is unexpected, the update logic might fail or corrupt the file.
    *   **Suggested Fix:** Implement more sophisticated parsing for `Services.java` (e.g., using an AST parser if feasible, or more careful regex). If automatic updates fail, provide clearer instructions/warnings. Consider offering to create a basic `Services.java` structure if it doesn't exist.

5.  **`update` Command - Backup Path Safety:**
    *   **Current Issue:** The backup path is `script_path.with_suffix(".bak")`. If `script_path` is unusual (e.g., doesn't have a suffix), this could result in unexpected backup names or locations.
    *   **Suggested Fix:** Ensure the backup path is always explicitly within a known-safe directory (like the script's parent directory) or use a more robust naming scheme like `script_path.name + ".bak"`, placed alongside the original script.

## II. Suggested Changes/Improvements to Existing Features

1.  **`setup_template` - Interactive Review or Config File Mode:**
    *   **Current:** Prompts for each setup value (package, mod ID, name, author, version) sequentially.
    *   **Suggestion:**
        *   **Interactive Review:** After gathering all inputs, display a summary table of all proposed values (Old Value -> New Value) and ask for a final confirmation before applying any changes. This gives the user a chance to review everything at once.
        *   **Config File Mode:** Allow `moddy setup --config path/to/setup.json`. The JSON file would contain all necessary values (e.g., `{"base_package": "com.my.mod", "mod_id": "mymod", ...}`). This facilitates faster re-runs or automated setups. If `--config` is not provided, it falls back to the current interactive prompt method.

2.  **`set_minecraft_version` - Enhanced Comparison and Granularity:**
    *   **Current:** Fetches latest versions and asks to apply them.
    *   **Suggestion:**
        *   **Show Current Versions:** When presenting fetched versions, also display the *currently configured* versions from `gradle.properties` alongside them for easier comparison (e.g., `fabric_version: 0.15.0 -> 0.15.3`).
        *   **Selective Updates:** After fetching, allow the user to select which specific dependencies they want to update from the fetched list, rather than an all-or-nothing application. For example, they might want the latest Fabric API but want to keep a specific ModMenu version.

3.  **`update` - Versioned Backups for Moddy:**
    *   **Current:** Creates a single `moddy.py.bak`, overwriting any previous backup.
    *   **Suggestion:** Implement versioned backups for Moddy itself when updating. For example, when updating from version `0.14.0` to `0.15.0`, the old script could be backed up as `moddy.py.bak.0.14.0` or `moddy.py.bak.YYYYMMDD-HHMMSS`. This preserves a short history, allowing users to revert to a specific previous version if an update introduces problems. Keep perhaps the last 3-5 backups.

4.  **Global `--verbose` / `--quiet` Flags:**
    *   **Current:** Output verbosity is somewhat fixed per command.
    *   **Suggestion:** Implement global flags like `--verbose` (for more detailed output, e.g., showing URLs fetched in `set_minecraft_version`) and `--quiet` (to suppress non-essential output, useful for scripting). This would require passing these flags down to command functions and respecting them.

5.  **`add_service` - Dry Run & Custom Templates:**
    *   **Current:** Uses hardcoded Java templates.
    *   **Suggestion:**
        *   Add a `--dry-run` option that shows all files that would be created/modified and their content, without actually writing anything to disk.
        *   Allow users to specify their own template files for the service interface and implementations for more flexibility.

## III. Suggested New Features

1.  **`moddy build [--loader <loader_name>] [--clean]` - Build Automation Helper:**
    *   **Description:** A command to simplify executing common Gradle build tasks.
    *   **Functionality:**
        *   Runs `./gradlew build` by default.
        *   `--loader <loader_name>`: If the project's Gradle structure supports it, allows building for a specific loader (e.g., `./gradlew fabric:build`).
        *   `--clean`: Runs `./gradlew clean` before the build command.
        *   Could provide feedback on success/failure and the location of the output JAR(s).

2.  **`moddy new-version <version_string> [--no-changelog]` - Project Version Bumping:**
    *   **Description:** Automates updating the project's version number in key files.
    *   **Functionality:**
        *   Updates the `version` property in `gradle.properties` to `<version_string>`.
        *   By default (unless `--no-changelog` is specified), creates a new heading for `<version_string>` in `changelog.md` (e.g., `## <version_string> - YYYY-MM-DD`) with a placeholder.
        *   Could potentially update other version-specific metadata if conventions are established.

3.  **`moddy list-dependencies [--check-updates]` - Dependency Overview & Update Check:**
    *   **Description:** Provides insight into project dependencies and helps identify available updates.
    *   **Functionality:**
        *   Parses `build.gradle` (and potentially `libs.versions.toml`) to list declared dependencies.
        *   `--check-updates`: For listed dependencies, queries their respective Maven repositories (or Modrinth/CurseForge) to find the latest available versions (informs user, does not apply).

4.  **`moddy publish [--platforms <platforms>] [--version <ver>] [--changelog <text|file>]` - Publishing Helper (Advanced):**
    *   **Description:** Assist with publishing mod versions to platforms like Modrinth and CurseForge.
    *   **Functionality (High-Level):**
        *   Requires secure API key management.
        *   Reads metadata from `gradle.properties`, `mods.json`, etc.
        *   Interacts with tools like `mc-publish` or platform APIs directly.
        *   Manages arguments for version, changelog, game versions, loaders, dependencies.

5.  **`moddy init-git-repo [--gitignore-template <name>]` - Git Initialization Helper:**
    *   **Description:** Simplifies initial Git setup for a new project.
    *   **Functionality:**
        *   Runs `git init`.
        *   Creates a `.gitignore` file. It could use a default Java/.Gradle gitignore, or allow specifying a template (e.g., from [github/gitignore](https://github.com/github/gitignore) or a local collection).
        *   Makes an initial commit (e.g., "Initial commit by Moddy").
