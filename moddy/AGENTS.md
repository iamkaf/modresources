# Moddy Development Guide for Agents

This repository contains the source for **Moddy**, a single-file Python assistant used with the multiloader-template. When updating Moddy you must build the standalone script and verify the `setup` command against the template repository.

## Building Moddy

1. Validate any changed Python code:
   ```bash
   python3 -m py_compile moddy/src/commands/setup_template.py
   ```
   Run `py_compile` for other Python files that were modified.
2. Create a local Moddy artifact. Bump the patch version so the build ends up in `moddy/registry/<version>/moddy.py`:
   ```bash
   npm run generate:moddy -- patch
   ```
   This updates `moddy/versions.json` and writes the new script under `moddy/registry`. The version bump is temporary and should not be committed.

## Verifying the `setup` command

1. Clone the multiloader template in a temporary location:
   ```bash
   git clone https://github.com/iamkaf/multiloader-template template-test
   ```
2. Copy the generated `moddy.py` into the cloned repo:
   ```bash
   cp moddy/registry/*/moddy.py template-test/scripts/moddy.py
   ```
3. From within `template-test`, run the setup command and provide the desired identifiers (e.g. `com.iamkaf.snapshears` and `SnapShears`):
   ```bash
   cd template-test
   python scripts/moddy.py setup
   ```
4. Confirm that
   - all Java sources were moved from the `modtemplate` package to the new package,
   - `gradle.properties` contains the new `group` and `archives_base_name` values,
   - identifiers in JSON/TOML and service descriptor files were replaced.
5. Delete the temporary clone and the generated build once verified:
   ```bash
   cd ..
   rm -rf template-test
   git clean -fd moddy/registry
   git checkout -- moddy/versions.json
   ```

## Notes
- Do **not** commit the generated `moddy.py` or the edited `versions.json`.
- Additional JavaScript or TypeScript changes should be linted with `npm run lint` and tested with `npm run test`.
