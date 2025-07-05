# Fabric API – Event Handbook

Generated 2025-07-05T21:50:31.142Z using qwen3 (limited to 2 events).
Processed 2 out of 166 total events.

## Table of Contents
- [Command](#command)
  - [CommandRegistrationCallback.EVENT](#commandregistrationcallback.event)
- [Datagen](#datagen)
  - [JsonKeySortOrderCallback.EVENT](#jsonkeysortordercallback.event)

## Command

### CommandRegistrationCallback.EVENT *(Common)*

**When**: The CommandRegistrationCallback.EVENT event fires when the server is registering all commands.

**Parameters**: CommandDispatcher<ServerCommandSource> dispatcher, CommandRegistryAccess registryAccess, CommandManager.RegistrationEnvironment environment

**Example**:
```java
CommandRegistrationCallback.EVENT.register((dispatcher, registryAccess, environment) -> {
    // Handle CommandRegistrationCallback.EVENT here...
    // For example, this command is only registered on an integrated server like the vanilla publish command
    if (environment.integrated) dispatcher.register(CommandManager.literal("integrated_command").executes(context -> {...}));
});
```

*Source*: `fabric-command-api-v2/src/main/java/net/fabricmc/fabric/api/command/v2/CommandRegistrationCallback.java`


## Datagen

### JsonKeySortOrderCallback.EVENT *(Common)*

**When**: The JsonKeySortOrderCallback.EVENT event fires when registering a callback to set the sort priority of object keys in generated JSON files.

**Parameters**: String key, int priority

**Example**:
```java
JsonKeySortOrderCallback.EVENT.register((String key, int priority) -> {
    // Handle JsonKeySortOrderCallback.EVENT here... 
    // Example usage: Set priority for "minecraft:blocks" key to 1
    if (key.equals("minecraft:blocks")) {
        priority = 1;
    }
    return priority;
});
```

*Source*: `fabric-data-generation-api-v1/src/main/java/net/fabricmc/fabric/api/datagen/v1/JsonKeySortOrderCallback.java`
