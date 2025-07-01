# Moddy 🤖

Moddy is a small Python helper script for the [multiloader-template](https://github.com/iamkaf/multiloader-template). It bundles the setup and maintenance tools used when starting a new mod project.

## Concept

Instead of a collection of individual scripts, Moddy distributes a single self updating file. This keeps the template lightweight while still allowing improvements to be delivered quickly.

## Problem it solves

Setting up a new mod normally requires renaming packages and updating identifiers in several modules. Moddy automates these tasks through the `setup` command and offers other helpers such as self-update.
The `changelog` command can be used to view notes for recent Moddy releases.

## Changelog

### Unreleased
- Roadmap and brainstorming docs for Moddy
- Setup command cleans example comments and removes datagen cache
- Update command verifies download hashes


### 0.14.0
- Fixed setup script missing package renames


### 0.13.0
- Fixed script path location


### 0.12.0
- Improve update command binary verification


### 0.11.0
- Add an option to the update command to pick a specific version


### 0.10.0
- Improved the update command warning message


### 0.9.0
- Fixed update command binary download


### 0.8.0
- Added open and docs commands
- Added ping command with update verification
- Added changelog command
- Support Amber in set-minecraft-version
- Setup ignores non-project directories
- Fixed Parchment Minecraft version
- Improved the update notice message


### 0.7.0
- Setup command replaces 'template' in comments
- Add-service prefixes interface names with I and updates Services
- set-minecraft-version adds missing keys and handles game_versions


### 0.6.0
- Added a Moddy update checker.


### 0.5.0
- Improve version fetching for Parchment
- Clean up empty package folders in setup
- Show changelog after update


### 0.4.0
- Fixed argument parsing in some commands.


### 0.3.0
- Improve update command message; improve help message.


### 0.2.0
- Implemented a new registry system.


### 0.1.0
- The first version of Moddy!
