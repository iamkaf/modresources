# Moddy Roadmap (2025 Edition)

## Milestone 1  Core Stability & Safety 🛡️
*Goal: zero‑crash baseline and rock‑solid releases.*

### Fixes
- [ ] Improve `set_minecraft_version` API failure handling
- [ ] Safer `setup_template` on existing projects (automatic backup + diff preview)
- [ ] Robust `setup_template` icon character handling
- [ ] Graceful network‑timeout handling across commands
- [ ] Validate JSON / TOML before writing
- [ ] Clear errors for missing dependencies

### Fundamental Improvements
- [ ] Introduce unit + integration test harness (pytest)
- [ ] Set up CI (GitHub Actions) with lint, type‑check (ruff + mypy), coverage gate ≥ 80 %
- [x] Standard logging across commands
- [ ] Global `--dry-run`, `--verbose`, `--quiet` flags
- [ ] Caching for version lookups to cut API traffic
- [ ] Environment variables may supply defaults
- [x] Hash verification for all downloads, respect system proxy
- [ ] Define and document Semantic Versioning policy

### Success Criteria ✅
- All commands run without traceback on Windows, Linux, macOS
- Test coverage ≥ 80 %
- Release artifacts SHA‑256 verified
- CI green on `main` for two consecutive weeks

---

## Milestone 2  Usability & Quality of Life 🎯
*Goal: speed up common workflows and give clear feedback.*

### Fixes
- Backup‑path safety for `update` command
- Robust `add_service` handling in `Services.java`
- Remove temporary files after aborted operations
- Better Windows path handling

### Improvements
- Progress bars and colorized diff previews for long or mutating tasks
- Configurable update channels (stable / nightly)
- Optional timeout and user‑agent for all network helpers
- Command‑specific help via `argparse` subparsers
- Config file for persistent default values

### New Helpers
- `moddy build [--loader <loader>] [--clean]`
- `moddy new-version <ver> [--no-changelog]`
- `moddy list-dependencies [--check-updates]`
- `moddy doctor` for quick environment diagnostics
- `moddy init-git-repo [--gitignore-template <name>]`
- Automatic changelog generation from git history

### Success Criteria ✅
- Typical build‑and‑publish flow ≤ 1 min faster than before
- 90 % of commands emit progress or result indicators
- Nightly channel runs unattended for one month with no critical regression

---

## Milestone 3  Distribution & Extensibility 🚀
*Goal: publish anywhere and let others extend Moddy.*

### Fixes
- Remove unused `AUTO_YES` import in `open_libs`
- Natural version sorting for `_get_artifact_latest`

### Improvements
- Consistent structured output via `logging` JSON formatter
- Global `--no-color` option for CI environments

### New Features
- `moddy publish [--platforms list] [--version <ver>] [--changelog <text|file>]`
- Automatic update scheduling with opt‑in timer
- Environment bootstrap command (JDK + Gradle)
- Plugin architecture (entry‑points) for custom extensions
- Optional lightweight GUI wrapper for common tasks

### Success Criteria ✅
- Publish helper supports Modrinth, CurseForge, GitHub Releases out of the box
- At least one external plugin built by the community
- GUI wrapper launches on Windows, macOS, Linux with zero additional setup
