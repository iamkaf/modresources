# Unreleased Changes

The following changes have been made since version 0.15.0 and will be included in the next release:

## Added
- Standard logging across commands (`logger` integration) [Roadmap: Standard logging across commands]

## Changed
- Set default network timeout (10s) for HTTP requests via `fetch_url_bytes`/`fetch_url_text` [Roadmap: Graceful network‑timeout handling across commands]

## Fixed
- Fix `add_service` command: use proper constant naming (`CONST_NAME`) and import handling (commit f1ee9b4)
- Fix `meta` command docstring parsing to avoid index errors (commit f1ee9b4)
- Fix `set_minecraft_version` command: return correct tuple for Parchment versions and improve regex pattern (commit f1ee9b4)

## Documentation
- Update roadmap to mark completed tasks (commit a62a236)

## Features
- Add logging to various commands (`changelog`, `docs`, `open`, `open_libs`, `ping`, `set_minecraft_version`) (commit d12215c)