# Mod Resources

A Github repository for hosting web content needed by **@iamkaf** mods.

## `./gradle`

Contains Gradle build scripts applied to all mod projects that are using a multi-loader development setup.

## `./pages`

Content for **@iamkaf** mod pages found on [CurseForge](https://www.curseforge.com/members/iamkaf/projects) and [Modrinth](https://modrinth.com/user/iamkaf). The full pages are generated from individual files using a private tool.

## `./tools`

Tools for building the contents of this repository.

## Scripts

### npm run pages

Generates markdown files for the mods using a template and data from a JSON file.

```sh
npm run pages
```

### npm run images

Lists and prints URLs of PNG images for each mod in the `pages` directory.

The script takes an optional argument specifying a particular mod folder to list.

```sh
npm run images
npm run images liteminer
```

### npm run pad

Processes the content of `scratchpad.md`, converts Discord-style emojis to Unicode, escapes it for JSON, and copies it to the clipboard.

```sh
# write something in scratchpad.md then run:
npm run pad
# then paste the generated text that was copied to your clipboard
```

### npm run upload

Uploads the generated markdown files to the Modrinth API.

```sh
npm run upload
```
