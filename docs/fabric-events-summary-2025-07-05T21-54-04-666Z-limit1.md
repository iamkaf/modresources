# Fabric API – Event Handbook

Generated 2025-07-05T21:54:04.665Z using qwen3 (limited to 1 events).
Processed 1 out of 166 total events.

## Table of Contents
- [Command](#command)
  - [CommandRegistrationCallback.EVENT](#commandregistrationcallback.event)

## Command

### CommandRegistrationCallback.EVENT *(Common)*

**When**: The CommandRegistrationCallback.EVENT event fires when the server is registering all commands.

**Parameters**: CommandDispatcher<ServerCommandSource> dispatcher, CommandRegistryAccess registryAccess, CommandManager.RegistrationEnvironment environment

**Example**:
```java
CommandRegistrationCallback.EVENT.register((CommandDispatcher<ServerCommandSource> dispatcher, CommandRegistryAccess registryAccess, CommandManager.RegistrationEnvironment environment) -> {
    // Handle CommandRegistrationCallback.EVENT here... 
    // For example, this command is only registered on an integrated server like the vanilla publish command
    if (environment.integrated) dispatcher.register(CommandManager.literal("integrated_command").executes(context -> {...}));
});
```

*Source*: `fabric-command-api-v2/src/main/java/net/fabricmc/fabric/api/command/v2/CommandRegistrationCallback.java`
