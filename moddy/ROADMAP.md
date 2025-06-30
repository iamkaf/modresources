# Moddy Roadmap

This roadmap organizes proposed fixes, changes, and new features for Moddy into sequential milestones.

## Milestone 1 – Core Stability

### Fixes
1. **Improve `set_minecraft_version` API Failure Handling**
2. **Safer `setup_template` Execution on Existing Projects**
3. **Robust `setup_template` Icon Character Handling**
4. **Graceful Handling of Network Timeouts Across Commands**
5. **Validate JSON/TOML Before Writing**
6. **Clear Errors for Missing Dependencies**

### Improvements
1. **`setup_template` – Interactive Review or Config File Mode**
2. **`set_minecraft_version` – Enhanced Comparison and Granularity**
3. **`update` – Versioned Backups for Moddy**
4. **Cache Version Lookups to Reduce API Traffic**
5. **Allow Environment Variables to Provide Defaults**
6. **`--dry-run` Support for Most Commands**

### New Features
1. **`moddy build [--loader <loader_name>] [--clean]` – Build Automation Helper**
2. **`moddy new-version <version_string> [--no-changelog]` – Project Version Bumping**
3. **`moddy list-dependencies [--check-updates]` – Dependency Overview & Update Check**
4. **Environment Bootstrap Command (JDK & Gradle setup)**
5. **Automatic Update Scheduling**
6. **`moddy doctor` Environment Diagnostic Tool**

## Milestone 2 – Usability Enhancements

### Fixes
1. **`add_service` – Robustness for `Services.java`**
2. **`update` Command – Backup Path Safety**
3. **Verify Downloaded Updates with Registry Hash**
4. **Better Path Handling on Windows**
5. **Remove Temporary Files After Aborted Operations**
6. **Respect System Proxy Settings**

### Improvements
1. **Global `--verbose` / `--quiet` Flags**
2. **`add_service` – Dry Run & Custom Templates**
3. **Optional Timeout and User-Agent for Network Helpers**
4. **Configurable Update Channels (stable/nightly)**
5. **Progress Indicators for Long Operations**
6. **Colorized Diff Previews for Modified Files**

### New Features
1. **`moddy publish [--platforms <platforms>] [--version <ver>] [--changelog <text|file>]` – Publishing Helper (Advanced)**
2. **`moddy init-git-repo [--gitignore-template <name>]` – Git Initialization Helper**
3. **Config File for Default Setup Values**
4. **Automatic Changelog Generation from Git History**
5. **Optional GUI Wrapper for Common Tasks**

## Milestone 3 – Advanced Capabilities

### Fixes
1. **Remove Unused `AUTO_YES` Import in `open_libs`**
2. **Natural Version Sorting for `_get_artifact_latest`**

### Improvements
1. **Consistent Output via the `logging` Module**
2. **Command-Specific Help with `argparse` Subparsers**

### New Features
1. **`list-versions` Command**
2. **Global `--no-color` Option**
3. **Plugin Architecture for Custom Extensions**
