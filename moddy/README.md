# Moddy 🤖

Moddy is a small Python helper script for the [multiloader-template](https://github.com/iamkaf/multiloader-template). It bundles the setup and maintenance tools used when starting a new mod project.

## Concept

Instead of a collection of individual scripts, Moddy distributes a single self updating file. This keeps the template lightweight while still allowing improvements to be delivered quickly.

## Problem it solves

Setting up a new mod normally requires renaming packages and updating identifiers in several modules. Moddy automates these tasks through the `setup` command and offers other helpers such as self-update.

## Changelog


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
