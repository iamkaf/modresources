# Fabric API – Event Handbook

Generated 2025-07-05T04:18:55.756Z using qwen3.

## Table of Contents
- [Client](#client)
  - [C2SConfigurationChannelEvents.REGISTER](#c2sconfigurationchannelevents.register)
  - [C2SConfigurationChannelEvents.UNREGISTER](#c2sconfigurationchannelevents.unregister)
  - [C2SPlayChannelEvents.REGISTER](#c2splaychannelevents.register)
  - [C2SPlayChannelEvents.UNREGISTER](#c2splaychannelevents.unregister)
  - [ClientBlockEntityEvents.BLOCK_ENTITY_LOAD](#clientblockentityevents.block_entity_load)
  - [ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD](#clientblockentityevents.block_entity_unload)
  - [ClientChunkEvents.CHUNK_LOAD](#clientchunkevents.chunk_load)
  - [ClientChunkEvents.CHUNK_UNLOAD](#clientchunkevents.chunk_unload)
  - [ClientCommandRegistrationCallback.EVENT](#clientcommandregistrationcallback.event)
  - [ClientConfigurationConnectionEvents.COMPLETE](#clientconfigurationconnectionevents.complete)
  - [ClientConfigurationConnectionEvents.DISCONNECT](#clientconfigurationconnectionevents.disconnect)
  - [ClientConfigurationConnectionEvents.INIT](#clientconfigurationconnectionevents.init)
  - [ClientConfigurationConnectionEvents.READY](#clientconfigurationconnectionevents.ready)
  - [ClientConfigurationConnectionEvents.START](#clientconfigurationconnectionevents.start)
  - [ClientEntityEvents.ENTITY_LOAD](#cliententityevents.entity_load)
  - [ClientEntityEvents.ENTITY_UNLOAD](#cliententityevents.entity_unload)
  - [ClientLifecycleEvents.CLIENT_STARTED](#clientlifecycleevents.client_started)
  - [ClientLifecycleEvents.CLIENT_STOPPING](#clientlifecycleevents.client_stopping)
  - [ClientLoginConnectionEvents.DISCONNECT](#clientloginconnectionevents.disconnect)
  - [ClientLoginConnectionEvents.INIT](#clientloginconnectionevents.init)
  - [ClientLoginConnectionEvents.QUERY_START](#clientloginconnectionevents.query_start)
  - [ClientPlayConnectionEvents.DISCONNECT](#clientplayconnectionevents.disconnect)
  - [ClientPlayConnectionEvents.INIT](#clientplayconnectionevents.init)
  - [ClientPlayConnectionEvents.JOIN](#clientplayconnectionevents.join)
  - [ClientReceiveMessageEvents.ALLOW_CHAT](#clientreceivemessageevents.allow_chat)
  - [ClientReceiveMessageEvents.ALLOW_GAME](#clientreceivemessageevents.allow_game)
  - [ClientReceiveMessageEvents.CHAT](#clientreceivemessageevents.chat)
  - [ClientReceiveMessageEvents.CHAT_CANCELED](#clientreceivemessageevents.chat_canceled)
  - [ClientReceiveMessageEvents.GAME](#clientreceivemessageevents.game)
  - [ClientReceiveMessageEvents.GAME_CANCELED](#clientreceivemessageevents.game_canceled)
  - [ClientReceiveMessageEvents.MODIFY_GAME](#clientreceivemessageevents.modify_game)
  - [ClientSendMessageEvents.ALLOW_CHAT](#clientsendmessageevents.allow_chat)
  - [ClientSendMessageEvents.ALLOW_COMMAND](#clientsendmessageevents.allow_command)
  - [ClientSendMessageEvents.CHAT](#clientsendmessageevents.chat)
  - [ClientSendMessageEvents.CHAT_CANCELED](#clientsendmessageevents.chat_canceled)
  - [ClientSendMessageEvents.COMMAND](#clientsendmessageevents.command)
  - [ClientSendMessageEvents.COMMAND_CANCELED](#clientsendmessageevents.command_canceled)
  - [ClientSendMessageEvents.MODIFY_CHAT](#clientsendmessageevents.modify_chat)
  - [ClientSendMessageEvents.MODIFY_COMMAND](#clientsendmessageevents.modify_command)
  - [ClientTickEvents.END_CLIENT_TICK](#clienttickevents.end_client_tick)
  - [ClientTickEvents.END_WORLD_TICK](#clienttickevents.end_world_tick)
  - [ClientTickEvents.START_CLIENT_TICK](#clienttickevents.start_client_tick)
  - [ClientTickEvents.START_WORLD_TICK](#clienttickevents.start_world_tick)
  - [ClientWorldEvents.AFTER_CLIENT_WORLD_CHANGE](#clientworldevents.after_client_world_change)
  - [DrawItemStackOverlayCallback.EVENT](#drawitemstackoverlaycallback.event)
  - [GatherDebugTextEvents.LEFT](#gatherdebugtextevents.left)
  - [GatherDebugTextEvents.RIGHT](#gatherdebugtextevents.right)
  - [HudRenderCallback.EVENT](#hudrendercallback.event)
  - [InvalidateRenderStateCallback.EVENT](#invalidaterenderstatecallback.event)
  - [ItemTooltipCallback.EVENT](#itemtooltipcallback.event)
  - [LivingEntityFeatureRendererRegistrationCallback.EVENT](#livingentityfeaturerendererregistrationcallback.event)
  - [LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER](#livingentityfeaturerenderevents.allow_cape_render)
  - [ParticleRenderEvents.ALLOW_BLOCK_DUST_TINT](#particlerenderevents.allow_block_dust_tint)
  - [ScreenEvents.AFTER_INIT](#screenevents.after_init)
  - [ScreenEvents.BEFORE_INIT](#screenevents.before_init)
  - [TooltipComponentCallback.EVENT](#tooltipcomponentcallback.event)
  - [WorldRenderEvents.AFTER_ENTITIES](#worldrenderevents.after_entities)
  - [WorldRenderEvents.AFTER_SETUP](#worldrenderevents.after_setup)
  - [WorldRenderEvents.AFTER_TRANSLUCENT](#worldrenderevents.after_translucent)
  - [WorldRenderEvents.BEFORE_BLOCK_OUTLINE](#worldrenderevents.before_block_outline)
  - [WorldRenderEvents.BEFORE_DEBUG_RENDER](#worldrenderevents.before_debug_render)
  - [WorldRenderEvents.BEFORE_ENTITIES](#worldrenderevents.before_entities)
  - [WorldRenderEvents.BLOCK_OUTLINE](#worldrenderevents.block_outline)
  - [WorldRenderEvents.END](#worldrenderevents.end)
  - [WorldRenderEvents.LAST](#worldrenderevents.last)
  - [WorldRenderEvents.START](#worldrenderevents.start)
- [Command](#command)
  - [CommandRegistrationCallback.EVENT](#commandregistrationcallback.event)
- [Datagen](#datagen)
  - [JsonKeySortOrderCallback.EVENT](#jsonkeysortordercallback.event)
- [Entity](#entity)
  - [EntityElytraEvents.ALLOW](#entityelytraevents.allow)
  - [EntityElytraEvents.CUSTOM](#entityelytraevents.custom)
  - [EntitySleepEvents.ALLOW_BED](#entitysleepevents.allow_bed)
  - [EntitySleepEvents.ALLOW_NEARBY_MONSTERS](#entitysleepevents.allow_nearby_monsters)
  - [EntitySleepEvents.ALLOW_RESETTING_TIME](#entitysleepevents.allow_resetting_time)
  - [EntitySleepEvents.ALLOW_SETTING_SPAWN](#entitysleepevents.allow_setting_spawn)
  - [EntitySleepEvents.ALLOW_SLEEP_TIME](#entitysleepevents.allow_sleep_time)
  - [EntitySleepEvents.ALLOW_SLEEPING](#entitysleepevents.allow_sleeping)
  - [EntitySleepEvents.MODIFY_SLEEPING_DIRECTION](#entitysleepevents.modify_sleeping_direction)
  - [EntitySleepEvents.MODIFY_WAKE_UP_POSITION](#entitysleepevents.modify_wake_up_position)
  - [EntitySleepEvents.SET_BED_OCCUPATION_STATE](#entitysleepevents.set_bed_occupation_state)
  - [EntitySleepEvents.START_SLEEPING](#entitysleepevents.start_sleeping)
  - [EntitySleepEvents.STOP_SLEEPING](#entitysleepevents.stop_sleeping)
  - [ServerEntityCombatEvents.AFTER_KILLED_OTHER_ENTITY](#serverentitycombatevents.after_killed_other_entity)
  - [ServerEntityWorldChangeEvents.AFTER_ENTITY_CHANGE_WORLD](#serverentityworldchangeevents.after_entity_change_world)
  - [ServerEntityWorldChangeEvents.AFTER_PLAYER_CHANGE_WORLD](#serverentityworldchangeevents.after_player_change_world)
  - [ServerLivingEntityEvents.AFTER_DAMAGE](#serverlivingentityevents.after_damage)
  - [ServerLivingEntityEvents.AFTER_DEATH](#serverlivingentityevents.after_death)
  - [ServerLivingEntityEvents.ALLOW_DAMAGE](#serverlivingentityevents.allow_damage)
  - [ServerLivingEntityEvents.ALLOW_DEATH](#serverlivingentityevents.allow_death)
  - [ServerLivingEntityEvents.MOB_CONVERSION](#serverlivingentityevents.mob_conversion)
  - [ServerPlayerEvents.AFTER_RESPAWN](#serverplayerevents.after_respawn)
  - [ServerPlayerEvents.ALLOW_DEATH](#serverplayerevents.allow_death)
  - [ServerPlayerEvents.COPY_FROM](#serverplayerevents.copy_from)
  - [ServerPlayerEvents.JOIN](#serverplayerevents.join)
  - [ServerPlayerEvents.LEAVE](#serverplayerevents.leave)
- [Event](#event)
  - [AttackBlockCallback.EVENT](#attackblockcallback.event)
  - [AttackEntityCallback.EVENT](#attackentitycallback.event)
  - [ClientPlayerBlockBreakEvents.AFTER](#clientplayerblockbreakevents.after)
  - [ClientPreAttackCallback.EVENT](#clientpreattackcallback.event)
  - [CommonLifecycleEvents.TAGS_LOADED](#commonlifecycleevents.tags_loaded)
  - [PlayerBlockBreakEvents.AFTER](#playerblockbreakevents.after)
  - [PlayerBlockBreakEvents.BEFORE](#playerblockbreakevents.before)
  - [PlayerBlockBreakEvents.CANCELED](#playerblockbreakevents.canceled)
  - [PlayerPickItemEvents.BLOCK](#playerpickitemevents.block)
  - [PlayerPickItemEvents.ENTITY](#playerpickitemevents.entity)
  - [ServerBlockEntityEvents.BLOCK_ENTITY_LOAD](#serverblockentityevents.block_entity_load)
  - [ServerBlockEntityEvents.BLOCK_ENTITY_UNLOAD](#serverblockentityevents.block_entity_unload)
  - [ServerChunkEvents.CHUNK_GENERATE](#serverchunkevents.chunk_generate)
  - [ServerChunkEvents.CHUNK_LEVEL_TYPE_CHANGE](#serverchunkevents.chunk_level_type_change)
  - [ServerChunkEvents.CHUNK_LOAD](#serverchunkevents.chunk_load)
  - [ServerChunkEvents.CHUNK_UNLOAD](#serverchunkevents.chunk_unload)
  - [ServerEntityEvents.ENTITY_LOAD](#serverentityevents.entity_load)
  - [ServerEntityEvents.ENTITY_UNLOAD](#serverentityevents.entity_unload)
  - [ServerEntityEvents.EQUIPMENT_CHANGE](#serverentityevents.equipment_change)
  - [ServerLifecycleEvents.AFTER_SAVE](#serverlifecycleevents.after_save)
  - [ServerLifecycleEvents.BEFORE_SAVE](#serverlifecycleevents.before_save)
  - [ServerLifecycleEvents.END_DATA_PACK_RELOAD](#serverlifecycleevents.end_data_pack_reload)
  - [ServerLifecycleEvents.SERVER_STARTED](#serverlifecycleevents.server_started)
  - [ServerLifecycleEvents.SERVER_STARTING](#serverlifecycleevents.server_starting)
  - [ServerLifecycleEvents.SERVER_STOPPED](#serverlifecycleevents.server_stopped)
  - [ServerLifecycleEvents.SERVER_STOPPING](#serverlifecycleevents.server_stopping)
  - [ServerLifecycleEvents.START_DATA_PACK_RELOAD](#serverlifecycleevents.start_data_pack_reload)
  - [ServerLifecycleEvents.SYNC_DATA_PACK_CONTENTS](#serverlifecycleevents.sync_data_pack_contents)
  - [ServerTickEvents.END_SERVER_TICK](#servertickevents.end_server_tick)
  - [ServerTickEvents.END_WORLD_TICK](#servertickevents.end_world_tick)
  - [ServerTickEvents.START_SERVER_TICK](#servertickevents.start_server_tick)
  - [ServerTickEvents.START_WORLD_TICK](#servertickevents.start_world_tick)
  - [ServerWorldEvents.LOAD](#serverworldevents.load)
  - [ServerWorldEvents.UNLOAD](#serverworldevents.unload)
  - [UseBlockCallback.EVENT](#useblockcallback.event)
  - [UseEntityCallback.EVENT](#useentitycallback.event)
  - [UseItemCallback.EVENT](#useitemcallback.event)
- [Item](#item)
  - [DefaultItemComponentEvents.MODIFY](#defaultitemcomponentevents.modify)
  - [EnchantmentEvents.ALLOW_ENCHANTING](#enchantmentevents.allow_enchanting)
  - [EnchantmentEvents.MODIFY](#enchantmentevents.modify)
  - [ModifyCallback.EVENT](#modifycallback.event)
- [Itemgroup](#itemgroup)
  - [ItemGroupEvents.MODIFY_ENTRIES_ALL](#itemgroupevents.modify_entries_all)
- [Loot](#loot)
  - [LootTableEvents.ALL_LOADED](#loottableevents.all_loaded)
  - [LootTableEvents.ALL_LOADED](#loottableevents.all_loaded)
  - [LootTableEvents.MODIFY](#loottableevents.modify)
  - [LootTableEvents.MODIFY](#loottableevents.modify)
  - [LootTableEvents.MODIFY_DROPS](#loottableevents.modify_drops)
  - [LootTableEvents.REPLACE](#loottableevents.replace)
  - [LootTableEvents.REPLACE](#loottableevents.replace)
- [Message](#message)
  - [ServerMessageDecoratorEvent.EVENT](#servermessagedecoratorevent.event)
  - [ServerMessageEvents.ALLOW_CHAT_MESSAGE](#servermessageevents.allow_chat_message)
  - [ServerMessageEvents.ALLOW_COMMAND_MESSAGE](#servermessageevents.allow_command_message)
  - [ServerMessageEvents.ALLOW_GAME_MESSAGE](#servermessageevents.allow_game_message)
  - [ServerMessageEvents.CHAT_MESSAGE](#servermessageevents.chat_message)
  - [ServerMessageEvents.COMMAND_MESSAGE](#servermessageevents.command_message)
  - [ServerMessageEvents.GAME_MESSAGE](#servermessageevents.game_message)
- [Networking](#networking)
  - [EntityTrackingEvents.START_TRACKING](#entitytrackingevents.start_tracking)
  - [EntityTrackingEvents.STOP_TRACKING](#entitytrackingevents.stop_tracking)
  - [S2CConfigurationChannelEvents.REGISTER](#s2cconfigurationchannelevents.register)
  - [S2CConfigurationChannelEvents.UNREGISTER](#s2cconfigurationchannelevents.unregister)
  - [S2CPlayChannelEvents.REGISTER](#s2cplaychannelevents.register)
  - [S2CPlayChannelEvents.UNREGISTER](#s2cplaychannelevents.unregister)
  - [ServerConfigurationConnectionEvents.BEFORE_CONFIGURE](#serverconfigurationconnectionevents.before_configure)
  - [ServerConfigurationConnectionEvents.CONFIGURE](#serverconfigurationconnectionevents.configure)
  - [ServerConfigurationConnectionEvents.DISCONNECT](#serverconfigurationconnectionevents.disconnect)
  - [ServerLoginConnectionEvents.DISCONNECT](#serverloginconnectionevents.disconnect)
  - [ServerLoginConnectionEvents.INIT](#serverloginconnectionevents.init)
  - [ServerLoginConnectionEvents.QUERY_START](#serverloginconnectionevents.query_start)
  - [ServerPlayConnectionEvents.DISCONNECT](#serverplayconnectionevents.disconnect)
  - [ServerPlayConnectionEvents.INIT](#serverplayconnectionevents.init)
  - [ServerPlayConnectionEvents.JOIN](#serverplayconnectionevents.join)
- [Transfer](#transfer)
  - [FluidStorage.GENERAL_COMBINED_PROVIDER](#fluidstorage.general_combined_provider)

## Client

### C2SConfigurationChannelEvents.REGISTER *(Client)*

**When**: The C2SConfigurationChannelEvents.REGISTER event fires when the client configuration network handler receives an update indicating the connected server's ability to receive packets in certain channels.

**Parameters**: ClientConfigurationNetworkHandler handler, PacketSender sender, MinecraftClient client, List<Identifier> channels

**Example**:
```java
C2SConfigurationChannelEvents.REGISTER.register((ClientConfigurationNetworkHandler handler, PacketSender sender, MinecraftClient client, List<Identifier> channels) -> {
    // Handle C2SConfigurationChannelEvents.REGISTER here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/C2SConfigurationChannelEvents.java`

### C2SConfigurationChannelEvents.UNREGISTER *(Client)*

**When**: The C2SConfigurationChannelEvents.UNREGISTER event fires when the client configuration network handler receives an update indicating the connected server's lack of ability to receive packets in certain channels.

**Parameters**: ClientConfigurationNetworkHandler handler, PacketSender sender, MinecraftClient client, List<Identifier> channels

**Example**:
```java
C2SConfigurationChannelEvents.UNREGISTER.register((ClientConfigurationNetworkHandler handler, PacketSender sender, MinecraftClient client, List<Identifier> channels) -> {
    // Handle C2SConfigurationChannelEvents.UNREGISTER here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/C2SConfigurationChannelEvents.java`

### C2SPlayChannelEvents.REGISTER *(Client)*

**When**: The C2SPlayChannelEvents.REGISTER event fires when the client play network handler receives an update indicating the connected server's ability to receive packets in certain channels.

**Parameters**: ClientPlayNetworkHandler handler, PacketSender sender, MinecraftClient client, List<Identifier> channels

**Example**:
```java
C2SPlayChannelEvents.REGISTER.register((ClientPlayNetworkHandler handler, PacketSender sender, MinecraftClient client, List<Identifier> channels) -> {
    // Handle C2SPlayChannelEvents.REGISTER here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/C2SPlayChannelEvents.java`

### C2SPlayChannelEvents.UNREGISTER *(Client)*

**When**: The C2SPlayChannelEvents.UNREGISTER event fires when the client play network handler receives an update indicating the connected server's lack of ability to receive packets in certain channels.

**Parameters**: ClientPlayNetworkHandler handler, PacketSender sender, MinecraftClient client, List<Identifier> channels

**Example**:
```java
C2SPlayChannelEvents.UNREGISTER.register((ClientPlayNetworkHandler handler, PacketSender sender, MinecraftClient client, List<Identifier> channels) -> {
    // Handle C2SPlayChannelEvents.UNREGISTER here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/C2SPlayChannelEvents.java`

### ClientBlockEntityEvents.BLOCK_ENTITY_LOAD *(Client)*

**When**: The ClientBlockEntityEvents.BLOCK_ENTITY_LOAD event fires when a BlockEntity is loaded into a ClientWorld.

**Parameters**: BlockEntity blockEntity, ClientWorld world

**Example**:
```java
ClientBlockEntityEvents.BLOCK_ENTITY_LOAD.register((BlockEntity blockEntity, ClientWorld world) -> {
        // Handle ClientBlockEntityEvents.BLOCK_ENTITY_LOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientBlockEntityEvents.java`

### ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD *(Client)*

**When**: The ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD event fires when a BlockEntity is about to be unloaded from a ClientWorld.

**Parameters**: BlockEntity blockEntity, ClientWorld world

**Example**:
```java
ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD.register((BlockEntity blockEntity, ClientWorld world) -> {
        // Handle ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientBlockEntityEvents.java`

### ClientChunkEvents.CHUNK_LOAD *(Client)*

**When**: The ClientChunkEvents.CHUNK_LOAD event fires when a chunk is loaded into a ClientWorld.

**Parameters**: ClientWorld world, WorldChunk chunk

**Example**:
```java
ClientChunkEvents.CHUNK_LOAD.register((ClientWorld world, WorldChunk chunk) -> {
        // Handle ClientChunkEvents.CHUNK_LOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientChunkEvents.java`

### ClientChunkEvents.CHUNK_UNLOAD *(Client)*

**When**: The ClientChunkEvents.CHUNK_UNLOAD event fires when a chunk is about to be unloaded from a ClientWorld.

**Parameters**: ClientWorld world, WorldChunk chunk

**Example**:
```java
ClientChunkEvents.CHUNK_UNLOAD.register((ClientWorld world, WorldChunk chunk) -> {
    // Handle ClientChunkEvents.CHUNK_UNLOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientChunkEvents.java`

### ClientCommandRegistrationCallback.EVENT *(Client)*

**When**: The event fires when client commands are registered to the dispatcher.

**Parameters**: void register(CommandDispatcher<FabricClientCommandSource> dispatcher, CommandRegistryAccess registryAccess)

**Example**:
```java
ClientCommandRegistrationCallback.EVENT.register((CommandDispatcher<FabricClientCommandSource> dispatcher, CommandRegistryAccess registryAccess) -> {
    // Handle ClientCommandRegistrationCallback.EVENT here...
    // Example from source: See ClientCommandManager for more details and an example.
});
```

*Source*: `fabric-command-api-v2/src/client/java/net/fabricmc/fabric/api/client/command/v2/ClientCommandRegistrationCallback.java`

### ClientConfigurationConnectionEvents.COMPLETE *(Client)*

**When**: The ClientConfigurationConnectionEvents.COMPLETE event fires after the connection has been initialized and is ready to start sending and receiving configuration packets.

**Parameters**: ClientConfigurationNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientConfigurationConnectionEvents.COMPLETE.register((ClientConfigurationNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientConfigurationConnectionEvents.COMPLETE here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents.java`

### ClientConfigurationConnectionEvents.DISCONNECT *(Client)*

**When**: The ClientConfigurationConnectionEvents.DISCONNECT event fires when the client configuration network handler is disconnected.

**Parameters**: ClientConfigurationNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientConfigurationConnectionEvents.DISCONNECT.register((ClientConfigurationNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientConfigurationConnectionEvents.DISCONNECT here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents.java`

### ClientConfigurationConnectionEvents.INIT *(Client)*

**When**: The ClientConfigurationConnectionEvents.INIT event fires when the connection enters the CONFIGURATION state and is ready for registering channel handlers.

**Parameters**: ClientConfigurationNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientConfigurationConnectionEvents.INIT.register((ClientConfigurationNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientConfigurationConnectionEvents.INIT here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents.java`

### ClientConfigurationConnectionEvents.READY *(Client)*

**When**: The ClientConfigurationConnectionEvents.READY event fires after the ReadyS2CPacket has been received and just before switching to the PLAY state.

**Parameters**: ClientConfigurationNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientConfigurationConnectionEvents.READY.register((ClientConfigurationNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientConfigurationConnectionEvents.READY here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents.java`

### ClientConfigurationConnectionEvents.START *(Client)*

**When**: The ClientConfigurationConnectionEvents.START event fires after the connection has been initialized and is ready to start sending and receiving configuration packets.

**Parameters**: ClientConfigurationNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientConfigurationConnectionEvents.START.register((ClientConfigurationNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientConfigurationConnectionEvents.START here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents.java`

### ClientEntityEvents.ENTITY_LOAD *(Client)*

**When**: The ClientEntityEvents.ENTITY_LOAD event fires when an Entity is loaded into a ClientWorld.

**Parameters**: Entity entity, ClientWorld world

**Example**:
```java
ClientEntityEvents.ENTITY_LOAD.register((Entity entity, ClientWorld world) -> {
    // Handle ClientEntityEvents.ENTITY_LOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientEntityEvents.java`

### ClientEntityEvents.ENTITY_UNLOAD *(Client)*

**When**: The ClientEntityEvents.ENTITY_UNLOAD event fires when an entity is about to be unloaded from a ClientWorld.

**Parameters**: Entity entity, ClientWorld world

**Example**:
```java
ClientEntityEvents.ENTITY_UNLOAD.register((Entity entity, ClientWorld world) -> {
    // Handle ClientEntityEvents.ENTITY_UNLOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientEntityEvents.java`

### ClientLifecycleEvents.CLIENT_STARTED *(Client)*

**When**: The event fires when Minecraft has started and the client is about to tick for the first time, while the splash screen is displayed.

**Parameters**: MinecraftClient client

**Example**:
```java
ClientLifecycleEvents.CLIENT_STARTED.register((MinecraftClient client) -> {
    // Handle ClientLifecycleEvents.CLIENT_STARTED here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientLifecycleEvents.java`

### ClientLifecycleEvents.CLIENT_STOPPING *(Client)*

**When**: The event fires when Minecraft's client begins to stop, which occurs when quitting while in game or closing the game window.

**Parameters**: MinecraftClient client

**Example**:
```java
ClientLifecycleEvents.CLIENT_STOPPING.register((MinecraftClient client) -> {
    // Handle ClientLifecycleEvents.CLIENT_STOPPING here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientLifecycleEvents.java`

### ClientLoginConnectionEvents.DISCONNECT *(Client)*

**When**: The ClientLoginConnectionEvents.DISCONNECT event fires when the client's login process ends due to disconnection.

**Parameters**: ClientLoginNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientLoginConnectionEvents.DISCONNECT.register((ClientLoginNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientLoginConnectionEvents.DISCONNECT here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientLoginConnectionEvents.java`

### ClientLoginConnectionEvents.INIT *(Client)*

**When**: The ClientLoginConnectionEvents.INIT event fires when the client connection enters the LOGIN state and is ready to register query request handlers.

**Parameters**: ClientLoginNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientLoginConnectionEvents.INIT.register((ClientLoginNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientLoginConnectionEvents.INIT here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientLoginConnectionEvents.java`

### ClientLoginConnectionEvents.QUERY_START *(Client)*

**When**: The ClientLoginConnectionEvents.QUERY_START event fires when the client has started receiving login queries from a server.

**Parameters**: ClientLoginNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientLoginConnectionEvents.QUERY_START.register((ClientLoginNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientLoginConnectionEvents.QUERY_START here...
    ClientLoginNetworking.registerReceiver(Identifier.of("fabric"), (query, sender) -> {
        // Example handler for login query
        sender.sendString("Hello from Fabric!");
    });
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientLoginConnectionEvents.java`

### ClientPlayConnectionEvents.DISCONNECT *(Client)*

**When**: The ClientPlayConnectionEvents.DISCONNECT event fires when the client play network handler is disconnected from the server.

**Parameters**: ClientPlayNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientPlayConnectionEvents.DISCONNECT.register((ClientPlayNetworkHandler handler, MinecraftClient client) -> {
    // Handle ClientPlayConnectionEvents.DISCONNECT here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents.java`

### ClientPlayConnectionEvents.INIT *(Client)*

**When**: The ClientPlayConnectionEvents.INIT event fires when the client connection enters the PLAY state and is ready for registering channel handlers.

**Parameters**: ClientPlayNetworkHandler handler, MinecraftClient client

**Example**:
```java
ClientPlayConnectionEvents.INIT.register((ClientPlayNetworkHandler handler, MinecraftClient client) -> {
        // Handle ClientPlayConnectionEvents.INIT here...
        // Example usage from source: Register a payload handler using ClientPlayNetworking.registerReceiver
        ClientPlayNetworking.registerReceiver(ExamplePayload.HELLO, (context, packet) -> {
            context.getHandler().sendPacket(ExamplePayload.HelloC2SPacket.INSTANCE);
        });
    });
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents.java`

### ClientPlayConnectionEvents.JOIN *(Client)*

**When**: The event fires when the client has successfully connected to a server and is ready to send packets to the server.

**Parameters**: ClientPlayNetworkHandler handler, PacketSender sender, MinecraftClient client

**Example**:
```java
ClientPlayConnectionEvents.JOIN.register((ClientPlayNetworkHandler handler, PacketSender sender, MinecraftClient client) -> {
    // Handle ClientPlayConnectionEvents.JOIN here...
});
```

*Source*: `fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents.java`

### ClientReceiveMessageEvents.ALLOW_CHAT *(Client)*

**When**: The ClientReceiveMessageEvents.ALLOW_CHAT event fires when the client receives a chat message from another player.

**Parameters**: Text message, @Nullable SignedMessage signedMessage, @Nullable GameProfile sender, MessageType.Parameters params, Instant receptionTimestamp

**Example**:
```java
ClientReceiveMessageEvents.ALLOW_CHAT.register((Text message, @Nullable SignedMessage signedMessage, @Nullable GameProfile sender, MessageType.Parameters params, Instant receptionTimestamp) -> {
    // Handle ClientReceiveMessageEvents.ALLOW_CHAT here...
    return true;
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents.java`

### ClientReceiveMessageEvents.ALLOW_GAME *(Client)*

**When**: The ClientReceiveMessageEvents.ALLOW_GAME event fires when the client receives a game message sent by the server.

**Parameters**: Text message, boolean overlay

**Example**:
```java
ClientReceiveMessageEvents.ALLOW_GAME.register((Text message, boolean overlay) -> {
    // Handle ClientReceiveMessageEvents.ALLOW_GAME here...
    return false; // Returning false will block the message from being displayed
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents.java`

### ClientReceiveMessageEvents.CHAT *(Client)*

**When**: The ClientReceiveMessageEvents.CHAT event fires when the client receives a chat message from another player.

**Parameters**: Text message, @Nullable SignedMessage signedMessage, @Nullable GameProfile sender, MessageType.Parameters params, Instant receptionTimestamp

**Example**:
```java
ClientReceiveMessageEvents.CHAT.register((Text message, @Nullable SignedMessage signedMessage, @Nullable GameProfile sender, MessageType.Parameters params, Instant receptionTimestamp) -> {
    // Handle ClientReceiveMessageEvents.CHAT here...
    System.out.println("Received chat message: " + message);
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents.java`

### ClientReceiveMessageEvents.CHAT_CANCELED *(Client)*

**When**: The event fires when a chat message is canceled after being blocked by the ALLOW_CHAT event.

**Parameters**: Text message, @Nullable SignedMessage signedMessage, @Nullable GameProfile sender, MessageType.Parameters params, Instant receptionTimestamp

**Example**:
```java
ClientReceiveMessageEvents.CHAT_CANCELED.register((Text message, @Nullable SignedMessage signedMessage, @Nullable GameProfile sender, MessageType.Parameters params, Instant receptionTimestamp) -> {
    // Handle ClientReceiveMessageEvents.CHAT_CANCELED here...
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents.java`

### ClientReceiveMessageEvents.GAME *(Client)*

**When**: The ClientReceiveMessageEvents.GAME event fires when the client receives a game message sent by the server and it is not blocked by the ALLOW_GAME event.

**Parameters**: Text message, boolean overlay

**Example**:
```java
ClientReceiveMessageEvents.GAME.register((Text message, boolean overlay) -> {
    // Handle ClientReceiveMessageEvents.GAME here...
    System.out.println("Received game message: " + message);
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents.java`

### ClientReceiveMessageEvents.GAME_CANCELED *(Client)*

**When**: The event fires when the client receives a game message and it is canceled by the ALLOW_GAME event.

**Parameters**: Text message, boolean overlay

**Example**:
```java
ClientReceiveMessageEvents.GAME_CANCELED.register((Text message, boolean overlay) -> {
    // Handle ClientReceiveMessageEvents.GAME_CANCELED here...
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents.java`

### ClientReceiveMessageEvents.MODIFY_GAME *(Client)*

**When**: The ClientReceiveMessageEvents.MODIFY_GAME event fires when the client receives a game message sent by the server and the message is not blocked by the ALLOW_GAME event.

**Parameters**: Text message, boolean overlay

**Example**:
```java
ClientReceiveMessageEvents.MODIFY_GAME.register((Text message, boolean overlay) -> {
    // Handle ClientReceiveMessageEvents.MODIFY_GAME here...
    return message;
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents.java`

### ClientSendMessageEvents.ALLOW_CHAT *(Client)*

**When**: The ClientSendMessageEvents.ALLOW_CHAT event fires when the client is about to send a chat message, typically from a client GUI.

**Parameters**: String message

**Example**:
```java
ClientSendMessageEvents.ALLOW_CHAT.register((String message) -> {
    // Handle ClientSendMessageEvents.ALLOW_CHAT here...
    return true;
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java`

### ClientSendMessageEvents.ALLOW_COMMAND *(Client)*

**When**: The ClientSendMessageEvents.ALLOW_COMMAND event fires when the client is about to send a command, which occurs whenever the player executes a command including client commands registered with fabric-command-api.

**Parameters**: String command

**Example**:
```java
ClientSendMessageEvents.ALLOW_COMMAND.register((String command) -> {
    // Handle ClientSendMessageEvents.ALLOW_COMMAND here...
    return true;
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java`

### ClientSendMessageEvents.CHAT *(Client)*

**When**: The ClientSendMessageEvents.CHAT event fires when the client sends a chat message, typically from a client GUI, and is not called when chat messages are blocked by the ALLOW_CHAT event.

**Parameters**: String message

**Example**:
```java
ClientSendMessageEvents.CHAT.register((String message) -> {
    // Handle ClientSendMessageEvents.CHAT here...
    System.out.println("Chat message sent: " + message);
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java`

### ClientSendMessageEvents.CHAT_CANCELED *(Client)*

**When**: The ClientSendMessageEvents.CHAT_CANCELED event fires when sending a chat message is canceled due to a listener returning false in the ALLOW_CHAT event.

**Parameters**: String message

**Example**:
```java
ClientSendMessageEvents.CHAT_CANCELED.register((String message) -> {
    // Handle ClientSendMessageEvents.CHAT_CANCELED here...
    System.out.println("Chat message canceled: " + message);
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java`

### ClientSendMessageEvents.COMMAND *(Client)*

**When**: The ClientSendMessageEvents.COMMAND event fires when the client is about to send a command, which occurs whenever the player executes a command, including client commands registered with fabric-command-api.

**Parameters**: String command

**Example**:
```java
ClientSendMessageEvents.COMMAND.register((String command) -> {
    // Handle ClientSendMessageEvents.COMMAND here...
    return true;
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java`

### ClientSendMessageEvents.COMMAND_CANCELED *(Client)*

**When**: The event fires when the client attempts to send a command and it is canceled by a listener returning false in the ALLOW_COMMAND event.

**Parameters**: String command

**Example**:
```java
ClientSendMessageEvents.COMMAND_CANCELED.register((String command) -> {
    // Handle ClientSendMessageEvents.COMMAND_CANCELED here...
    System.out.println("Command canceled: " + command);
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java`

### ClientSendMessageEvents.MODIFY_CHAT *(Client)*

**When**: The ClientSendMessageEvents.MODIFY_CHAT event fires when the client sends a chat message, typically from a client GUI, and is not called when chat messages are blocked by the ALLOW_CHAT event.

**Parameters**: String message

**Example**:
```java
ClientSendMessageEvents.MODIFY_CHAT.register((String message) -> {
    // Handle ClientSendMessageEvents.MODIFY_CHAT here...
    return message;
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java`

### ClientSendMessageEvents.MODIFY_COMMAND *(Client)*

**When**: The ClientSendMessageEvents.MODIFY_COMMAND event fires when the client sends a command, which is whenever the player executes a command including client commands registered with fabric-command-api.

**Parameters**: String command

**Example**:
```java
ClientSendMessageEvents.MODIFY_COMMAND.register((String command) -> {
    // Handle ClientSendMessageEvents.MODIFY_COMMAND here...
    return command;
});
```

*Source*: `fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java`

### ClientTickEvents.END_CLIENT_TICK *(Client)*

**When**: ClientTickEvents.END_CLIENT_TICK is called at the end of the client tick.

**Parameters**: MinecraftClient client

**Example**:
```java
ClientTickEvents.END_CLIENT_TICK.register((MinecraftClient client) -> {
    // Handle ClientTickEvents.END_CLIENT_TICK here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.java`

### ClientTickEvents.END_WORLD_TICK *(Client)*

**When**: The ClientTickEvents.END_WORLD_TICK event fires at the end of a ClientWorld's tick.

**Parameters**: ClientWorld world

**Example**:
```java
ClientTickEvents.END_WORLD_TICK.register((ClientWorld world) -> {
    // Handle ClientTickEvents.END_WORLD_TICK here... 
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.java`

### ClientTickEvents.START_CLIENT_TICK *(Client)*

**When**: The ClientTickEvents.START_CLIENT_TICK event fires at the start of the client tick.

**Parameters**: MinecraftClient client

**Example**:
```java
ClientTickEvents.START_CLIENT_TICK.register((MinecraftClient client) -> {
    // Handle ClientTickEvents.START_CLIENT_TICK here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.java`

### ClientTickEvents.START_WORLD_TICK *(Client)*

**When**: The ClientTickEvents.START_WORLD_TICK event fires at the start of a ClientWorld's tick.

**Parameters**: ClientWorld world

**Example**:
```java
ClientTickEvents.START_WORLD_TICK.register((ClientWorld world) -> {
    // Handle ClientTickEvents.START_WORLD_TICK here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.java`

### ClientWorldEvents.AFTER_CLIENT_WORLD_CHANGE *(Client)*

**When**: The event fires after the client world has been changed.

**Parameters**: MinecraftClient client, ClientWorld world

**Example**:
```java
ClientWorldEvents.AFTER_CLIENT_WORLD_CHANGE.register((MinecraftClient client, ClientWorld world) -> {
        // Handle ClientWorldEvents.AFTER_CLIENT_WORLD_CHANGE here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientWorldEvents.java`

### DrawItemStackOverlayCallback.EVENT *(Client)*

**When**: The DrawItemStackOverlayCallback.EVENT event fires at the end of the drawStackOverlay method in DrawContext, allowing for drawing custom item stack decorations.

**Parameters**: DrawContext context, TextRenderer textRenderer, ItemStack stack, int x, int y

**Example**:
```java
DrawItemStackOverlayCallback.EVENT.register((DrawContext context, TextRenderer textRenderer, ItemStack stack, int x, int y) -> {
        // Handle DrawItemStackOverlayCallback.EVENT here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/DrawItemStackOverlayCallback.java`

### GatherDebugTextEvents.LEFT *(Client)*

**When**: The GatherDebugTextEvents.LEFT event fires when gathering all game information text lines for the left side of the DebugHud.

**Parameters**: List<String> lines

**Example**:
```java
GatherDebugTextEvents.LEFT.register((List<String> lines) -> {
    // Handle GatherDebugTextEvents.LEFT here...
    lines.add("Custom left debug text");
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/GatherDebugTextEvents.java`

### GatherDebugTextEvents.RIGHT *(Client)*

**When**: The GatherDebugTextEvents.RIGHT event fires when gathering all system information text lines for the DebugHud.

**Parameters**: List<String> lines

**Example**:
```java
GatherDebugTextEvents.RIGHT.register((List<String> lines) -> {
    // Handle GatherDebugTextEvents.RIGHT here... 
    lines.add("System Info: " + System.getProperty("os.name") + " " + System.getProperty("os.version"));
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/GatherDebugTextEvents.java`

### HudRenderCallback.EVENT *(Client)*

**When**: The HudRenderCallback.EVENT event fires after the entire HUD is rendered in a world.

**Parameters**: DrawContext drawContext, RenderTickCounter tickCounter

**Example**:
```java
HudRenderCallback.EVENT.register((DrawContext drawContext, RenderTickCounter tickCounter) -> {
    // Handle HudRenderCallback.EVENT here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/HudRenderCallback.java`

### InvalidateRenderStateCallback.EVENT *(Client)*

**When**: The InvalidateRenderStateCallback.EVENT event fires when the world renderer reloads, typically due to changing resource packs, video configuration changes, or when the player presses F3+A in the debug screen.

**Parameters**: undetected

**Example**:
```java
InvalidateRenderStateCallback.EVENT.register((InvalidateRenderStateCallback) -> {
    // Handle InvalidateRenderStateCallback.EVENT here... 
    // Example usage from documentation: Invalidate render state and reinitialize lazily
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/InvalidateRenderStateCallback.java`

### ItemTooltipCallback.EVENT *(Client)*

**When**: The ItemTooltipCallback.EVENT fires after the game has appended all base tooltip lines to the list.

**Parameters**: ItemStack stack, Item.TooltipContext tooltipContext, TooltipType tooltipType, List<Text> lines

**Example**:
```java
ItemTooltipCallback.EVENT.register((ItemStack stack, Item.TooltipContext tooltipContext, TooltipType tooltipType, List<Text> lines) -> {
    // Handle ItemTooltipCallback.EVENT here...
    lines.add(Text.translatable("example.tooltip.line"));
});
```

*Source*: `fabric-item-api-v1/src/client/java/net/fabricmc/fabric/api/client/item/v1/ItemTooltipCallback.java`

### LivingEntityFeatureRendererRegistrationCallback.EVENT *(Client)*

**When**: The LivingEntityFeatureRendererRegistrationCallback.EVENT event fires when feature renderers for a living entity renderer are registered.

**Parameters**: EntityType<? extends LivingEntity> entityType, LivingEntityRenderer<?, ?, ?> entityRenderer, RegistrationHelper registrationHelper, EntityRendererFactory.Context context

**Example**:
```java
LivingEntityFeatureRendererRegistrationCallback.EVENT.register((entityType, entityRenderer, registrationHelper, context) -> {
        // Handle LivingEntityFeatureRendererRegistrationCallback.EVENT here...
        if (entityRenderer instanceof PlayerEntityModel) {
            registrationHelper.register(new MyFeatureRenderer((PlayerEntityModel) entityRenderer));
        }
    });
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/LivingEntityFeatureRendererRegistrationCallback.java`

### LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER *(Client)*

**When**: The event fires when checking if a cape should be rendered for a living entity.

**Parameters**: PlayerEntityRenderState state

**Example**:
```java
LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER.register((PlayerEntityRenderState state) -> {
        // Handle LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER here...
        return true;
    });
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/LivingEntityFeatureRenderEvents.java`

### ParticleRenderEvents.ALLOW_BLOCK_DUST_TINT *(Client)*

**When**: The ParticleRenderEvents.ALLOW_BLOCK_DUST_TINT event fires when checking if a block dust particle can be tinted using the corresponding block's color provider.

**Parameters**: BlockState state, ClientWorld world, BlockPos pos

**Example**:
```java
ParticleRenderEvents.ALLOW_BLOCK_DUST_TINT.register((BlockState state, ClientWorld world, BlockPos pos) -> {
    // Handle ParticleRenderEvents.ALLOW_BLOCK_DUST_TINT here...
    return true;
});
```

*Source*: `fabric-particles-v1/src/client/java/net/fabricmc/fabric/api/client/particle/v1/ParticleRenderEvents.java`

### ScreenEvents.AFTER_INIT *(Client)*

**When**: The ScreenEvents.AFTER_INIT event fires after a screen is initialized to its default state.

**Parameters**: MinecraftClient client, Screen screen, int scaledWidth, int scaledHeight

**Example**:
```java
ScreenEvents.AFTER_INIT.register((client, screen, scaledWidth, scaledHeight) -> {
    // Handle ScreenEvents.AFTER_INIT here...
    if (screen instanceof TitleScreen) {
        Screens.getButtons(screen).add(new ButtonWidget(...));
    }
});
```

*Source*: `fabric-screen-api-v1/src/client/java/net/fabricmc/fabric/api/client/screen/v1/ScreenEvents.java`

### ScreenEvents.BEFORE_INIT *(Client)*

**When**: The ScreenEvents.BEFORE_INIT event fires before a screen is initialized to its default state.

**Parameters**: MinecraftClient client, Screen screen, int scaledWidth, int scaledHeight

**Example**:
```java
ScreenEvents.BEFORE_INIT.register((client, screen, scaledWidth, scaledHeight) -> {
    // Handle ScreenEvents.BEFORE_INIT here...
    if (screen instanceof AbstractInventoryScreen) {
        ScreenEvents.afterRender(screen).register((screen1, matrices, mouseX, mouseY, tickDelta) -> {
            // ...
        });
    }
});
```

*Source*: `fabric-screen-api-v1/src/client/java/net/fabricmc/fabric/api/client/screen/v1/ScreenEvents.java`

### TooltipComponentCallback.EVENT *(Client)*

**When**: The TooltipComponentCallback.EVENT event fires when a custom tooltip component needs to be generated for a TooltipData instance.

**Parameters**: TooltipData data

**Example**:
```java
TooltipComponentCallback.EVENT.register((TooltipData data) -> {
        // Handle TooltipComponentCallback.EVENT here... 
        return null;
    });
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/TooltipComponentCallback.java`

### WorldRenderEvents.AFTER_ENTITIES *(Client)*

**When**: The WorldRenderEvents.AFTER_ENTITIES event fires after entities are rendered and solid entity layers have been drawn to the main framebuffer target, before block entity rendering begins.

**Parameters**: void afterEntities(WorldRenderContext context)

**Example**:
```java
WorldRenderEvents.AFTER_ENTITIES.register((WorldRenderContext context) -> {
    // Handle WorldRenderEvents.AFTER_ENTITIES here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.AFTER_SETUP *(Client)*

**When**: The WorldRenderEvents.AFTER_SETUP event fires after the view frustum is computed and all render chunks to be rendered are identified and rebuilt but before chunks are uploaded to GPU.

**Parameters**: WorldRenderContext context

**Example**:
```java
WorldRenderEvents.AFTER_SETUP.register((WorldRenderContext context) -> {
    // Handle WorldRenderEvents.AFTER_SETUP here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.AFTER_TRANSLUCENT *(Client)*

**When**: The WorldRenderEvents.AFTER_TRANSLUCENT event fires after entity, terrain, and particle translucent layers have been drawn to the framebuffer but before translucency combine has happened in fabulous mode.

**Parameters**: WorldRenderContext context

**Example**:
```java
WorldRenderEvents.AFTER_TRANSLUCENT.register((WorldRenderContext context) -> {
    // Handle WorldRenderEvents.AFTER_TRANSLUCENT here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.BEFORE_BLOCK_OUTLINE *(Client)*

**When**: The WorldRenderEvents.BEFORE_BLOCK_OUTLINE event fires before default block outline rendering and before checks are done to determine if it should happen.

**Parameters**: boolean beforeBlockOutline(WorldRenderContext context, @Nullable HitResult hitResult)

**Example**:
```java
WorldRenderEvents.BEFORE_BLOCK_OUTLINE.register((WorldRenderContext context, @Nullable HitResult hitResult) -> {
    // Handle WorldRenderEvents.BEFORE_BLOCK_OUTLINE here...
    return true;
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.BEFORE_DEBUG_RENDER *(Client)*

**When**: The WorldRenderEvents.BEFORE_DEBUG_RENDER event fires before vanilla debug renderers are output to the framebuffer, after entities, block breaking, and most other non-translucent renders but before translucency is drawn.

**Parameters**: WorldRenderContext context

**Example**:
```java
WorldRenderEvents.BEFORE_DEBUG_RENDER.register((WorldRenderContext context) -> {
    // Handle WorldRenderEvents.BEFORE_DEBUG_RENDER here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.BEFORE_ENTITIES *(Client)*

**When**: The WorldRenderEvents.BEFORE_ENTITIES event fires before entities are rendered and after the solid and cutout terrain layers have been output to the framebuffer.

**Parameters**: WorldRenderContext context

**Example**:
```java
WorldRenderEvents.BEFORE_ENTITIES.register((WorldRenderContext context) -> {
    // Handle WorldRenderEvents.BEFORE_ENTITIES here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.BLOCK_OUTLINE *(Client)*

**When**: The WorldRenderEvents.BLOCK_OUTLINE event fires after block outline render checks are made and before the default block outline render runs, if the default rendering was not cancelled in BEFORE_BLOCK_OUTLINE.

**Parameters**: boolean onBlockOutline(WorldRenderContext worldRenderContext, BlockOutlineContext blockOutlineContext)

**Example**:
```java
WorldRenderEvents.BLOCK_OUTLINE.register((WorldRenderContext worldRenderContext, BlockOutlineContext blockOutlineContext) -> {
    // Handle WorldRenderEvents.BLOCK_OUTLINE here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.END *(Client)*

**When**: The WorldRenderEvents.END event fires after all world rendering is complete and changes to GL state are unwound.

**Parameters**: WorldRenderContext context

**Example**:
```java
WorldRenderEvents.END.register((WorldRenderContext context) -> {
    // Handle WorldRenderEvents.END here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.LAST *(Client)*

**When**: The WorldRenderEvents.LAST event fires after all framebuffer writes are complete but before all world rendering is torn down.

**Parameters**: WorldRenderContext context

**Example**:
```java
WorldRenderEvents.LAST.register((WorldRenderContext context) -> {
    // Handle WorldRenderEvents.LAST here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`

### WorldRenderEvents.START *(Client)*

**When**: The WorldRenderEvents.START event fires before world rendering executes, providing access to rendering context parameters but not the frustum.

**Parameters**: WorldRenderContext context

**Example**:
```java
WorldRenderEvents.START.register((WorldRenderContext context) -> {
    // Handle WorldRenderEvents.START here...
});
```

*Source*: `fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java`


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


## Entity

### EntityElytraEvents.ALLOW *(Common)*

**When**: The EntityElytraEvents.ALLOW event fires when checking if an entity is allowed to fly with an elytra.

**Parameters**: LivingEntity entity

**Example**:
```java
EntityElytraEvents.ALLOW.register((LivingEntity entity) -> {
    // Handle EntityElytraEvents.ALLOW here...
    return true;
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntityElytraEvents.java`

### EntityElytraEvents.CUSTOM *(Common)*

**When**: The EntityElytraEvents.CUSTOM event fires when a living entity attempts to start elytra flight by pressing space in mid-air, and every tick for all flying living entities to check if elytra flight is still allowed.

**Parameters**: LivingEntity entity, boolean tickElytra

**Example**:
```java
EntityElytraEvents.CUSTOM.register((LivingEntity entity, boolean tickElytra) -> {
    if (check if condition for custom elytra is met) {
        if (tickElytra) {
            // Optionally consume some resources that are being used up in order to fly, for example damaging an item.
            // Optionally perform other side effects of elytra flight, for example playing a sound.
        }
        // Allow entering/continuing elytra flight with this custom elytra
        return true;
    }
    // Condition for the custom elytra is not met: don't let players enter or continue elytra flight (unless another elytra is available).
    return false;
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntityElytraEvents.java`

### EntitySleepEvents.ALLOW_BED *(Common)*

**When**: When a living entity attempts to sleep on a block

**Parameters**: LivingEntity entity, BlockPos sleepingPos, BlockState state, boolean vanillaResult

**Example**:
```java
entity.allowBed(sleepingPos, state, vanillaResult)
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.ALLOW_NEARBY_MONSTERS *(Common)*

**When**: When a player attempts to sleep in a bed-like block

**Parameters**: PlayerEntity player, BlockPos sleepingPos, boolean vanillaResult

**Example**:
```java
PlayerEntity player, BlockPos sleepingPos, boolean vanillaResult -> ActionResult.SUCCESS
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.ALLOW_RESETTING_TIME *(Common)*

**When**: When a player sleeps and the game checks if their sleep should cause the in-game time to skip to dawn

**Parameters**: PlayerEntity player

**Example**:
```java
If a player sleeps during the night, the game will check if their sleep should cause the time to skip to dawn.
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.ALLOW_SETTING_SPAWN *(Common)*

**When**: When a player attempts to sleep on a bed

**Parameters**: player: the sleeping player, sleepingPos: the position of the bed

**Example**:
```java
If a player sleeps on a bed, the event checks if their spawn can be set when sleeping.
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.ALLOW_SLEEP_TIME *(Common)*

**When**: When a player attempts to sleep in a bed-like block

**Parameters**: PlayerEntity player, BlockPos sleepingPos, boolean vanillaResult

**Example**:
```java
return vanillaResult ? ActionResult.SUCCESS : ActionResult.FAIL;
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.ALLOW_SLEEPING *(Common)*

**When**: When a player attempts to sleep in a bed-like block

**Parameters**: PlayerEntity player, BlockPos sleepingPos

**Example**:
```java
player.allowSleep(player, sleepingPos)
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.MODIFY_SLEEPING_DIRECTION *(Common)*

**When**: When an entity starts to sleep

**Parameters**: entity, sleepingPos, sleepingDirection

**Example**:
```java
modifySleepDirection(LivingEntity entity, BlockPos sleepingPos, Direction sleepingDirection)
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.MODIFY_WAKE_UP_POSITION *(Common)*

**When**: When an entity wakes up from sleeping

**Parameters**: entity, sleepingPos, bedState, wakeUpPos

**Example**:
```java
modifyWakeUpPosition(LivingEntity entity, BlockPos sleepingPos, BlockState bedState, Vec3d wakeUpPos)
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.SET_BED_OCCUPATION_STATE *(Common)*

**When**: When an entity (such as a player) sleeps on a bed block that is not a standard Minecraft bed block

**Parameters**: entity, sleepingPos, bedState, occupied

**Example**:
```java
When a player sleeps on a custom bed block, this event is triggered to update the bed's occupation state.
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.START_SLEEPING *(Common)*

**When**: When an entity starts to sleep

**Parameters**: LivingEntity entity, BlockPos sleepingPos

**Example**:
```java
entity.onStartSleeping(entity, sleepingPos);
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### EntitySleepEvents.STOP_SLEEPING *(Common)*

**When**: when an entity stops sleeping and wakes up

**Parameters**: LivingEntity entity, BlockPos sleepingPos

**Example**:
```java
entity.onStopSleeping(sleepingPos)
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java`

### ServerEntityCombatEvents.AFTER_KILLED_OTHER_ENTITY *(Common)*

**When**: The event fires after an entity directly kills another entity.

**Parameters**: ServerWorld world, Entity entity, LivingEntity killedEntity

**Example**:
```java
ServerEntityCombatEvents.AFTER_KILLED_OTHER_ENTITY.register((ServerWorld world, Entity entity, LivingEntity killedEntity) -> {
        // Handle ServerEntityCombatEvents.AFTER_KILLED_OTHER_ENTITY here...
        // Example usage from source: callback.afterKilledOtherEntity(world, entity, killedEntity);
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerEntityCombatEvents.java`

### ServerEntityWorldChangeEvents.AFTER_ENTITY_CHANGE_WORLD *(Common)*

**When**: The event fires after an entity has been moved to a different world.

**Parameters**: Entity originalEntity, Entity newEntity, ServerWorld origin, ServerWorld destination

**Example**:
```java
ServerEntityWorldChangeEvents.AFTER_ENTITY_CHANGE_WORLD.register((Entity originalEntity, Entity newEntity, ServerWorld origin, ServerWorld destination) -> {
    // Handle ServerEntityWorldChangeEvents.AFTER_ENTITY_CHANGE_WORLD here...
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerEntityWorldChangeEvents.java`

### ServerEntityWorldChangeEvents.AFTER_PLAYER_CHANGE_WORLD *(Common)*

**When**: The event fires after an entity has been moved to a different world.

**Parameters**: ServerPlayerEntity player, ServerWorld origin, ServerWorld destination

**Example**:
```java
ServerEntityWorldChangeEvents.AFTER_PLAYER_CHANGE_WORLD.register((ServerPlayerEntity player, ServerWorld origin, ServerWorld destination) -> {
    // Handle ServerEntityWorldChangeEvents.AFTER_PLAYER_CHANGE_WORLD here...
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerEntityWorldChangeEvents.java`

### ServerLivingEntityEvents.AFTER_DAMAGE *(Common)*

**When**: The ServerLivingEntityEvents.AFTER_DAMAGE event fires after an entity is damaged, unless the entity was killed by the damage.

**Parameters**: LivingEntity entity, DamageSource source, float baseDamageTaken, float damageTaken, boolean blocked

**Example**:
```java
ServerLivingEntityEvents.AFTER_DAMAGE.register((LivingEntity entity, DamageSource source, float baseDamageTaken, float damageTaken, boolean blocked) -> {
    // Handle ServerLivingEntityEvents.AFTER_DAMAGE here...
    if (blocked) {
        System.out.println("Damage was blocked!");
    } else {
        System.out.println("Damage taken: " + damageTaken);
    }
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents.java`

### ServerLivingEntityEvents.AFTER_DEATH *(Common)*

**When**: The ServerLivingEntityEvents.AFTER_DEATH event fires when a living entity dies.

**Parameters**: LivingEntity entity, DamageSource damageSource

**Example**:
```java
ServerLivingEntityEvents.AFTER_DEATH.register((LivingEntity entity, DamageSource damageSource) -> {
    // Handle ServerLivingEntityEvents.AFTER_DEATH here...
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents.java`

### ServerLivingEntityEvents.ALLOW_DAMAGE *(Common)*

**When**: The ServerLivingEntityEvents.ALLOW_DAMAGE event fires when a living entity is about to take damage, before armor or any other mitigations are applied.

**Parameters**: LivingEntity entity, DamageSource source, float amount

**Example**:
```java
ServerLivingEntityEvents.ALLOW_DAMAGE.register((LivingEntity entity, DamageSource source, float amount) -> {
    // Handle ServerLivingEntityEvents.ALLOW_DAMAGE here...
    return true;
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents.java`

### ServerLivingEntityEvents.ALLOW_DEATH *(Common)*

**When**: The ServerLivingEntityEvents.ALLOW_DEATH event fires when a living entity takes fatal damage, before totems of undying can take effect.

**Parameters**: LivingEntity entity, DamageSource damageSource, float damageAmount

**Example**:
```java
ServerLivingEntityEvents.ALLOW_DEATH.register((LivingEntity entity, DamageSource damageSource, float damageAmount) -> {
    // Handle ServerLivingEntityEvents.ALLOW_DEATH here...
    return true;
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents.java`

### ServerLivingEntityEvents.MOB_CONVERSION *(Common)*

**When**: The ServerLivingEntityEvents.MOB_CONVERSION event fires when a mob is converted to another type, before the old instance is discarded and the new one is spawned.

**Parameters**: MobEntity previous, MobEntity converted, EntityConversionContext conversionContext

**Example**:
```java
ServerLivingEntityEvents.MOB_CONVERSION.register((MobEntity previous, MobEntity converted, EntityConversionContext conversionContext) -> {
    // Handle ServerLivingEntityEvents.MOB_CONVERSION here...
    // Example: Copy some data from previous to converted
    converted.setCustomName(previous.getCustomName());
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents.java`

### ServerPlayerEvents.AFTER_RESPAWN *(Common)*

**When**: The ServerPlayerEvents.AFTER_RESPAWN event fires after a player has been respawned.

**Parameters**: ServerPlayerEntity oldPlayer, ServerPlayerEntity newPlayer, boolean alive

**Example**:
```java
ServerPlayerEvents.AFTER_RESPAWN.register((oldPlayer, newPlayer, alive) -> {
    // Handle ServerPlayerEvents.AFTER_RESPAWN here...
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents.java`

### ServerPlayerEvents.ALLOW_DEATH *(Common)*

**When**: The ServerPlayerEvents.ALLOW_DEATH event fires when a player takes fatal damage, before totems of undying can take effect.

**Parameters**: ServerPlayerEntity player, DamageSource damageSource, float damageAmount

**Example**:
```java
ServerPlayerEvents.ALLOW_DEATH.register((ServerPlayerEntity player, DamageSource damageSource, float damageAmount) -> {
    // Handle ServerPlayerEvents.ALLOW_DEATH here...
    return true;
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents.java`

### ServerPlayerEvents.COPY_FROM *(Common)*

**When**: The event fires when player data is copied from an old player to a new player, after the old player is removed and untracked, but before the new player is added and tracked.

**Parameters**: ServerPlayerEntity oldPlayer, ServerPlayerEntity newPlayer, boolean alive

**Example**:
```java
ServerPlayerEvents.COPY_FROM.register((ServerPlayerEntity oldPlayer, ServerPlayerEntity newPlayer, boolean alive) -> {
    // Handle ServerPlayerEvents.COPY_FROM here...
    // Example: Copy inventory or data from oldPlayer to newPlayer
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents.java`

### ServerPlayerEvents.JOIN *(Common)*

**When**: The ServerPlayerEvents.JOIN event fires on the server thread after a player has fully joined the game and been loaded into the world.

**Parameters**: ServerPlayerEntity player

**Example**:
```java
ServerPlayerEvents.JOIN.register((ServerPlayerEntity player) -> {
    // Handle ServerPlayerEvents.JOIN here...
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents.java`

### ServerPlayerEvents.LEAVE *(Common)*

**When**: The ServerPlayerEvents.LEAVE event fires when a player is leaving the game, including when closing a singleplayer world.

**Parameters**: ServerPlayerEntity player

**Example**:
```java
ServerPlayerEvents.LEAVE.register((ServerPlayerEntity player) -> {
    // Handle ServerPlayerEvents.LEAVE here...
});
```

*Source*: `fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents.java`


## Event

### AttackBlockCallback.EVENT *(Common)*

**When**: The AttackBlockCallback.EVENT event fires when a player left-clicks (attacks) a block.

**Parameters**: PlayerEntity player, World world, Hand hand, BlockPos pos, Direction direction

**Example**:
```java
AttackBlockCallback.EVENT.register((PlayerEntity player, World world, Hand hand, BlockPos pos, Direction direction) -> {
        // Handle AttackBlockCallback.EVENT here... 
        return ActionResult.PASS;
    });
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/AttackBlockCallback.java`

### AttackEntityCallback.EVENT *(Common)*

**When**: The AttackEntityCallback.EVENT fires when a player left-clicks (attacks) an entity.

**Parameters**: PlayerEntity player, World world, Hand hand, Entity entity, @Nullable EntityHitResult hitResult

**Example**:
```java
AttackEntityCallback.EVENT.register((PlayerEntity player, World world, Hand hand, Entity entity, EntityHitResult hitResult) -> {
        // Handle AttackEntityCallback.EVENT here...
        return ActionResult.PASS;
    });
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/AttackEntityCallback.java`

### ClientPlayerBlockBreakEvents.AFTER *(Client)*

**When**: The ClientPlayerBlockBreakEvents.AFTER event fires after a block is successfully broken on the client side.

**Parameters**: ClientWorld world, ClientPlayerEntity player, BlockPos pos, BlockState state

**Example**:
```java
ClientPlayerBlockBreakEvents.AFTER.register((ClientWorld world, ClientPlayerEntity player, BlockPos pos, BlockState state) -> {
    // Handle ClientPlayerBlockBreakEvents.AFTER here...
});
```

*Source*: `fabric-events-interaction-v0/src/client/java/net/fabricmc/fabric/api/event/client/player/ClientPlayerBlockBreakEvents.java`

### ClientPreAttackCallback.EVENT *(Client)*

**When**: The ClientPreAttackCallback.EVENT event fires every tick when the attack key (left mouse button by default) is pressed (including clicking and holding the attack key).

**Parameters**: MinecraftClient client, ClientPlayerEntity player, int clickCount

**Example**:
```java
ClientPreAttackCallback.EVENT.register((MinecraftClient client, ClientPlayerEntity player, int clickCount) -> {
    // Handle ClientPreAttackCallback.EVENT here...
});
```

*Source*: `fabric-events-interaction-v0/src/client/java/net/fabricmc/fabric/api/event/client/player/ClientPreAttackCallback.java`

### CommonLifecycleEvents.TAGS_LOADED *(Common)*

**When**: The CommonLifecycleEvents.TAGS_LOADED event fires when tags are loaded or updated in the game.

**Parameters**: DynamicRegistryManager registries, boolean client

**Example**:
```java
CommonLifecycleEvents.TAGS_LOADED.register((DynamicRegistryManager registries, boolean client) -> {
    // Handle CommonLifecycleEvents.TAGS_LOADED here...
    // Example usage: Retrieve tags from registries
    // For example, get a tag list: registries.getRegistry(RegistryKey.createRegistryKey("example_tag"));
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/CommonLifecycleEvents.java`

### PlayerBlockBreakEvents.AFTER *(Common)*

**When**: The PlayerBlockBreakEvents.AFTER event fires after a block is successfully broken on the server side.

**Parameters**: World world, PlayerEntity player, BlockPos pos, BlockState state, @Nullable BlockEntity blockEntity

**Example**:
```java
PlayerBlockBreakEvents.AFTER.register((World world, PlayerEntity player, BlockPos pos, BlockState state, @Nullable BlockEntity blockEntity) -> {
    // Handle PlayerBlockBreakEvents.AFTER here...
});
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/PlayerBlockBreakEvents.java`

### PlayerBlockBreakEvents.BEFORE *(Common)*

**When**: The PlayerBlockBreakEvents.BEFORE event fires when a block is about to be broken by a player on the server side.

**Parameters**: World world, PlayerEntity player, BlockPos pos, BlockState state, @Nullable BlockEntity blockEntity

**Example**:
```java
PlayerBlockBreakEvents.BEFORE.register((World world, PlayerEntity player, BlockPos pos, BlockState state, @Nullable BlockEntity blockEntity) -> {
    // Handle PlayerBlockBreakEvents.BEFORE here...
    return true;
});
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/PlayerBlockBreakEvents.java`

### PlayerBlockBreakEvents.CANCELED *(Common)*

**When**: The PlayerBlockBreakEvents.CANCELED event fires when a block breaking action is canceled, typically after a listener cancels the block breaking in the BEFORE event.

**Parameters**: World world, PlayerEntity player, BlockPos pos, BlockState state, @Nullable BlockEntity blockEntity

**Example**:
```java
PlayerBlockBreakEvents.CANCELED.register((World world, PlayerEntity player, BlockPos pos, BlockState state, @Nullable BlockEntity blockEntity) -> {
    // Handle PlayerBlockBreakEvents.CANCELED here... 
    // Example: Send a packet to revert client-side block changes
    // See source comment: "May be used to send packets to revert client-side block changes"
});
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/PlayerBlockBreakEvents.java`

### PlayerPickItemEvents.BLOCK *(Common)*

**When**: The PlayerPickItemEvents.BLOCK event fires when a player requests to pick an item from a block.

**Parameters**: ServerPlayerEntity player, BlockPos pos, BlockState state, boolean requestIncludeData

**Example**:
```java
PlayerPickItemEvents.BLOCK.register((ServerPlayerEntity player, BlockPos pos, BlockState state, boolean requestIncludeData) -> {
    // Handle PlayerPickItemEvents.BLOCK here...
    return null;
});
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/PlayerPickItemEvents.java`

### PlayerPickItemEvents.ENTITY *(Common)*

**When**: The PlayerPickItemEvents.ENTITY event fires when a player requests to pick an item from an entity.

**Parameters**: ServerPlayerEntity player, Entity entity, boolean requestIncludeData

**Example**:
```java
PlayerPickItemEvents.ENTITY.register((ServerPlayerEntity player, Entity entity, boolean requestIncludeData) -> {
    // Handle PlayerPickItemEvents.ENTITY here...
    return null;
});
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/PlayerPickItemEvents.java`

### ServerBlockEntityEvents.BLOCK_ENTITY_LOAD *(Common)*

**When**: The ServerBlockEntityEvents.BLOCK_ENTITY_LOAD event fires when a BlockEntity is loaded into a ServerWorld.

**Parameters**: BlockEntity blockEntity, ServerWorld world

**Example**:
```java
ServerBlockEntityEvents.BLOCK_ENTITY_LOAD.register((BlockEntity blockEntity, ServerWorld world) -> {
        // Handle ServerBlockEntityEvents.BLOCK_ENTITY_LOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerBlockEntityEvents.java`

### ServerBlockEntityEvents.BLOCK_ENTITY_UNLOAD *(Common)*

**When**: The ServerBlockEntityEvents.BLOCK_ENTITY_UNLOAD event fires when a BlockEntity is about to be unloaded from a ServerWorld.

**Parameters**: BlockEntity blockEntity, ServerWorld world

**Example**:
```java
ServerBlockEntityEvents.BLOCK_ENTITY_UNLOAD.register((BlockEntity blockEntity, ServerWorld world) -> {
        // Handle ServerBlockEntityEvents.BLOCK_ENTITY_UNLOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerBlockEntityEvents.java`

### ServerChunkEvents.CHUNK_GENERATE *(Common)*

**When**: The ServerChunkEvents.CHUNK_GENERATE event fires when a newly generated chunk is loaded into a ServerWorld.

**Parameters**: ServerWorld world, WorldChunk chunk

**Example**:
```java
ServerChunkEvents.CHUNK_GENERATE.register((ServerWorld world, WorldChunk chunk) -> {
    // Handle ServerChunkEvents.CHUNK_GENERATE here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents.java`

### ServerChunkEvents.CHUNK_LEVEL_TYPE_CHANGE *(Common)*

**When**: The event fires when a chunk's actual ticking behavior is about to align with its updated ChunkLevelType.

**Parameters**: ServerWorld world, WorldChunk chunk, ChunkLevelType oldLevelType, ChunkLevelType newLevelType

**Example**:
```java
ServerChunkEvents.CHUNK_LEVEL_TYPE_CHANGE.register((ServerWorld world, WorldChunk chunk, ChunkLevelType oldLevelType, ChunkLevelType newLevelType) -> {
    // Handle ServerChunkEvents.CHUNK_LEVEL_TYPE_CHANGE here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents.java`

### ServerChunkEvents.CHUNK_LOAD *(Common)*

**When**: The ServerChunkEvents.CHUNK_LOAD event fires when a chunk is loaded into a ServerWorld.

**Parameters**: ServerWorld world, WorldChunk chunk

**Example**:
```java
ServerChunkEvents.CHUNK_LOAD.register((ServerWorld world, WorldChunk chunk) -> {
    // Handle ServerChunkEvents.CHUNK_LOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents.java`

### ServerChunkEvents.CHUNK_UNLOAD *(Common)*

**When**: The ServerChunkEvents.CHUNK_UNLOAD event fires when a chunk is unloaded from a ServerWorld.

**Parameters**: ServerWorld world, WorldChunk chunk

**Example**:
```java
ServerChunkEvents.CHUNK_UNLOAD.register((ServerWorld world, WorldChunk chunk) -> {
    // Handle ServerChunkEvents.CHUNK_UNLOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents.java`

### ServerEntityEvents.ENTITY_LOAD *(Common)*

**When**: The ServerEntityEvents.ENTITY_LOAD event fires when an Entity is loaded into a ServerWorld.

**Parameters**: Entity entity, ServerWorld world

**Example**:
```java
ServerEntityEvents.ENTITY_LOAD.register((Entity entity, ServerWorld world) -> {
    // Handle ServerEntityEvents.ENTITY_LOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents.java`

### ServerEntityEvents.ENTITY_UNLOAD *(Common)*

**When**: The ServerEntityEvents.ENTITY_UNLOAD event fires when an Entity is unloaded from a ServerWorld, before the entity is removed from the world.

**Parameters**: Entity entity, ServerWorld world

**Example**:
```java
ServerEntityEvents.ENTITY_UNLOAD.register((Entity entity, ServerWorld world) -> {
    // Handle ServerEntityEvents.ENTITY_UNLOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents.java`

### ServerEntityEvents.EQUIPMENT_CHANGE *(Common)*

**When**: The event fires during LivingEntity#tick() if the Entity's equipment has been changed or mutated, and also when the entity joins the world.

**Parameters**: LivingEntity livingEntity, EquipmentSlot equipmentSlot, ItemStack previousStack, ItemStack currentStack

**Example**:
```java
ServerEntityEvents.EQUIPMENT_CHANGE.register((LivingEntity livingEntity, EquipmentSlot equipmentSlot, ItemStack previousStack, ItemStack currentStack) -> {
    // Handle ServerEntityEvents.EQUIPMENT_CHANGE here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents.java`

### ServerLifecycleEvents.AFTER_SAVE *(Common)*

**When**: The ServerLifecycleEvents.AFTER_SAVE event fires after a Minecraft server finishes saving data.

**Parameters**: MinecraftServer server, boolean flush, boolean force

**Example**:
```java
ServerLifecycleEvents.AFTER_SAVE.register((MinecraftServer server, boolean flush, boolean force) -> {
    // Handle ServerLifecycleEvents.AFTER_SAVE here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerLifecycleEvents.BEFORE_SAVE *(Common)*

**When**: The ServerLifecycleEvents.BEFORE_SAVE event fires before a Minecraft server begins saving data.

**Parameters**: MinecraftServer server, boolean flush, boolean force

**Example**:
```java
ServerLifecycleEvents.BEFORE_SAVE.register((MinecraftServer server, boolean flush, boolean force) -> {
    // Handle ServerLifecycleEvents.BEFORE_SAVE here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerLifecycleEvents.END_DATA_PACK_RELOAD *(Common)*

**When**: The ServerLifecycleEvents.END_DATA_PACK_RELOAD event fires after a Minecraft server has reloaded data packs.

**Parameters**: MinecraftServer server, LifecycledResourceManager resourceManager, boolean success

**Example**:
```java
ServerLifecycleEvents.END_DATA_PACK_RELOAD.register((server, resourceManager, success) -> {
    // Handle ServerLifecycleEvents.END_DATA_PACK_RELOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerLifecycleEvents.SERVER_STARTED *(Common)*

**When**: The ServerLifecycleEvents.SERVER_STARTED event fires when a Minecraft server has started and is about to tick for the first time.

**Parameters**: MinecraftServer server

**Example**:
```java
ServerLifecycleEvents.SERVER_STARTED.register((MinecraftServer server) -> {
    // Handle ServerLifecycleEvents.SERVER_STARTED here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerLifecycleEvents.SERVER_STARTING *(Common)*

**When**: The ServerLifecycleEvents.SERVER_STARTING event fires when a Minecraft server is starting, before the player manager and any worlds are loaded.

**Parameters**: MinecraftServer server

**Example**:
```java
ServerLifecycleEvents.SERVER_STARTING.register((MinecraftServer server) -> {
    // Handle ServerLifecycleEvents.SERVER_STARTING here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerLifecycleEvents.SERVER_STOPPED *(Common)*

**When**: The ServerLifecycleEvents.SERVER_STOPPED event fires when a Minecraft server has stopped, after all worlds have been closed and all entities and players have been unloaded.

**Parameters**: MinecraftServer server

**Example**:
```java
ServerLifecycleEvents.SERVER_STOPPED.register((MinecraftServer server) -> {
    // Handle ServerLifecycleEvents.SERVER_STOPPED here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerLifecycleEvents.SERVER_STOPPING *(Common)*

**When**: The ServerLifecycleEvents.SERVER_STOPPING event fires when a Minecraft server has started shutting down, before the server's network channel is closed and before any players are disconnected.

**Parameters**: MinecraftServer server

**Example**:
```java
ServerLifecycleEvents.SERVER_STOPPING.register((MinecraftServer server) -> {
    // Handle ServerLifecycleEvents.SERVER_STOPPING here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerLifecycleEvents.START_DATA_PACK_RELOAD *(Common)*

**When**: The ServerLifecycleEvents.START_DATA_PACK_RELOAD event fires when a Minecraft server is about to reload data packs.

**Parameters**: MinecraftServer server, LifecycledResourceManager resourceManager

**Example**:
```java
ServerLifecycleEvents.START_DATA_PACK_RELOAD.register((MinecraftServer server, LifecycledResourceManager resourceManager) -> {
    // Handle ServerLifecycleEvents.START_DATA_PACK_RELOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerLifecycleEvents.SYNC_DATA_PACK_CONTENTS *(Common)*

**When**: The ServerLifecycleEvents.SYNC_DATA_PACK_CONTENTS event fires right before tags and recipes are sent to a player, either when the player joins or after a successful resource reload.

**Parameters**: ServerPlayerEntity player, boolean joined

**Example**:
```java
ServerLifecycleEvents.SYNC_DATA_PACK_CONTENTS.register((ServerPlayerEntity player, boolean joined) -> {
    // Handle ServerLifecycleEvents.SYNC_DATA_PACK_CONTENTS here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java`

### ServerTickEvents.END_SERVER_TICK *(Common)*

**When**: The ServerTickEvents.END_SERVER_TICK event fires at the end of each server tick, after all world ticks have been processed.

**Parameters**: MinecraftServer server

**Example**:
```java
ServerTickEvents.END_SERVER_TICK.register((MinecraftServer server) -> {
    // Handle ServerTickEvents.END_SERVER_TICK here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents.java`

### ServerTickEvents.END_WORLD_TICK *(Common)*

**When**: The ServerTickEvents.END_WORLD_TICK event fires at the end of a ServerWorld's tick, after all entities and blocks have been updated.

**Parameters**: ServerWorld world

**Example**:
```java
ServerTickEvents.END_WORLD_TICK.register((ServerWorld world) -> {
    // Handle ServerTickEvents.END_WORLD_TICK here... 
    // Example usage: world.getPlayers().forEach(player -> player.sendMessage(new LiteralText("World tick ended!"))); 
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents.java`

### ServerTickEvents.START_SERVER_TICK *(Common)*

**When**: The ServerTickEvents.START_SERVER_TICK event fires at the start of each server tick.

**Parameters**: MinecraftServer server

**Example**:
```java
ServerTickEvents.START_SERVER_TICK.register((MinecraftServer server) -> {
    // Handle ServerTickEvents.START_SERVER_TICK here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents.java`

### ServerTickEvents.START_WORLD_TICK *(Common)*

**When**: The ServerTickEvents.START_WORLD_TICK event fires at the start of a ServerWorld's tick.

**Parameters**: ServerWorld world

**Example**:
```java
ServerTickEvents.START_WORLD_TICK.register((ServerWorld world) -> {
    // Handle ServerTickEvents.START_WORLD_TICK here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents.java`

### ServerWorldEvents.LOAD *(Common)*

**When**: The ServerWorldEvents.LOAD event fires just after a world is loaded by a Minecraft server.

**Parameters**: MinecraftServer server, ServerWorld world

**Example**:
```java
ServerWorldEvents.LOAD.register((MinecraftServer server, ServerWorld world) -> {
        // Handle ServerWorldEvents.LOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerWorldEvents.java`

### ServerWorldEvents.UNLOAD *(Common)*

**When**: The ServerWorldEvents.UNLOAD event fires before a world is unloaded by a Minecraft server.

**Parameters**: MinecraftServer server, ServerWorld world

**Example**:
```java
ServerWorldEvents.UNLOAD.register((MinecraftServer server, ServerWorld world) -> {
        // Handle ServerWorldEvents.UNLOAD here...
});
```

*Source*: `fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerWorldEvents.java`

### UseBlockCallback.EVENT *(Common)*

**When**: The UseBlockCallback.EVENT fires when a player right-clicks a block (uses it) in the game.

**Parameters**: PlayerEntity player, World world, Hand hand, BlockHitResult hitResult

**Example**:
```java
UseBlockCallback.EVENT.register((PlayerEntity player, World world, Hand hand, BlockHitResult hitResult) -> {
        // Handle UseBlockCallback.EVENT here... 
        return ActionResult.PASS;
    });
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseBlockCallback.java`

### UseEntityCallback.EVENT *(Common)*

**When**: The UseEntityCallback.EVENT fires when a player right-clicks an entity, such as using an item on it or interacting with it.

**Parameters**: PlayerEntity player, World world, Hand hand, Entity entity, @Nullable EntityHitResult hitResult

**Example**:
```java
UseEntityCallback.EVENT.register((PlayerEntity player, World world, Hand hand, Entity entity, EntityHitResult hitResult) -> {
    // Handle UseEntityCallback.EVENT here... 
    return ActionResult.PASS;
});
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseEntityCallback.java`

### UseItemCallback.EVENT *(Common)*

**When**: The UseItemCallback.EVENT fires when a player right-clicks (uses) an item, before the spectator check.

**Parameters**: PlayerEntity player, World world, Hand hand

**Example**:
```java
UseItemCallback.EVENT.register((PlayerEntity player, World world, Hand hand) -> {
        // Handle UseItemCallback.EVENT here... 
        return ActionResult.PASS;
    });
```

*Source*: `fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseItemCallback.java`


## Item

### DefaultItemComponentEvents.MODIFY *(Common)*

**When**: The DefaultItemComponentEvents.MODIFY event fires when modifying the default data components of items.

**Parameters**: Predicate<Item> itemPredicate, BiConsumer<ComponentMap.Builder, Item> builderConsumer

**Example**:
```java
DefaultItemComponentEvents.MODIFY.register((ModifyContext context) -> {
    // Handle DefaultItemComponentEvents.MODIFY here...
    context.modify(item -> item.getItem() == Items.DIAMOND, (builder, item) -> {
        builder.add(ExampleComponent.KEY, ExampleComponent.INSTANCE);
    });
});
```

*Source*: `fabric-item-api-v1/src/main/java/net/fabricmc/fabric/api/item/v1/DefaultItemComponentEvents.java`

### EnchantmentEvents.ALLOW_ENCHANTING *(Common)*

**When**: The EnchantmentEvents.ALLOW_ENCHANTING event fires when checking if an enchantment can be applied to an item during the enchanting process.

**Parameters**: RegistryEntry<Enchantment> enchantment, ItemStack target, EnchantingContext enchantingContext

**Example**:
```java
EnchantmentEvents.ALLOW_ENCHANTING.register((RegistryEntry<Enchantment> enchantment, ItemStack target, EnchantingContext enchantingContext) -> {
    // Handle EnchantmentEvents.ALLOW_ENCHANTING here...
    return TriState.DEFAULT;
});
```

*Source*: `fabric-item-api-v1/src/main/java/net/fabricmc/fabric/api/item/v1/EnchantmentEvents.java`

### EnchantmentEvents.MODIFY *(Common)*

**When**: The EnchantmentEvents.MODIFY event fires when an enchantment is being modified, allowing its effects to be altered without fully overriding the enchantment.

**Parameters**: RegistryKey<Enchantment> key, Enchantment.Builder builder, EnchantmentSource source

**Example**:
```java
EnchantmentEvents.MODIFY.register((RegistryKey<Enchantment> key, Enchantment.Builder builder, EnchantmentSource source) -> {
    // Handle EnchantmentEvents.MODIFY here...
});
```

*Source*: `fabric-item-api-v1/src/main/java/net/fabricmc/fabric/api/item/v1/EnchantmentEvents.java`

### ModifyCallback.EVENT *(Common)*

**When**: The ModifyCallback.EVENT is fired when modifying the default data components of items.

**Parameters**: Predicate<Item> itemPredicate, BiConsumer<ComponentMap.Builder, Item> builderConsumer

**Example**:
```java
ModifyCallback.EVENT.register((ModifyContext context) -> {
    // Handle ModifyCallback.EVENT here... 
    context.modify(item -> item.isIn(Items.DIAMOND), (builder, item) -> {
        builder.add(ExampleComponent.KEY, 42);
    });
});
```

*Source*: `fabric-item-api-v1/src/main/java/net/fabricmc/fabric/api/item/v1/DefaultItemComponentEvents.java`


## Itemgroup

### ItemGroupEvents.MODIFY_ENTRIES_ALL *(Common)*

**When**: The ItemGroupEvents.MODIFY_ENTRIES_ALL event fires after all item groups have been initialized and allows modifying entries of any item group.

**Parameters**: ItemGroup group, FabricItemGroupEntries entries

**Example**:
```java
ItemGroupEvents.MODIFY_ENTRIES_ALL.register((ItemGroup group, FabricItemGroupEntries entries) -> {
    // Handle ItemGroupEvents.MODIFY_ENTRIES_ALL here...
    // Example from source: entries.addItems(yourItem);
});
```

*Source*: `fabric-item-group-api-v1/src/main/java/net/fabricmc/fabric/api/itemgroup/v1/ItemGroupEvents.java`


## Loot

### LootTableEvents.ALL_LOADED *(Common)*

**When**: The LootTableEvents.ALL_LOADED event fires after all loot tables have been loaded and modified by Fabric's REPLACE and MODIFY events.

**Parameters**: void onLootTablesLoaded(ResourceManager resourceManager, Registry<LootTable> lootRegistry)

**Example**:
```java
LootTableEvents.ALL_LOADED.register((resourceManager, lootRegistry) -> {
    // Handle LootTableEvents.ALL_LOADED here... 
    // Example usage: Perform post-processing on all loot tables
    // such as adding custom loot entries or modifying drop behavior.
});
```

*Source*: `fabric-loot-api-v3/src/main/java/net/fabricmc/fabric/api/loot/v3/LootTableEvents.java`

### LootTableEvents.ALL_LOADED *(Common)*

**When**: The LootTableEvents.ALL_LOADED event fires after all loot tables have been loaded and modified by Fabric.

**Parameters**: void onLootTablesLoaded(ResourceManager resourceManager, Registry<LootTable> lootRegistry)

**Example**:
```java
LootTableEvents.ALL_LOADED.register((ResourceManager resourceManager, Registry<LootTable> lootRegistry) -> {
    // Handle LootTableEvents.ALL_LOADED here...
});
```

*Source*: `deprecated/fabric-loot-api-v2/src/main/java/net/fabricmc/fabric/api/loot/v2/LootTableEvents.java`

### LootTableEvents.MODIFY *(Common)*

**When**: The LootTableEvents.MODIFY event fires when a loot table is loading to allow modification of the loot table.

**Parameters**: RegistryKey<LootTable> key, LootTable.Builder tableBuilder, LootTableSource source, RegistryWrapper.WrapperLookup registries

**Example**:
```java
LootTableEvents.MODIFY.register((key, tableBuilder, source, registries) -> {
    // Handle LootTableEvents.MODIFY here...
    if (Blocks.COBBLESTONE.getLootTableKey() == key && source.isBuiltin()) {
        LootPool.Builder pool = LootPool.builder()
            .with(ItemEntry.builder(Items.DIAMOND))
            .conditionally(SurvivesExplosionLootCondition.builder());

        tableBuilder.pool(pool);
    }
});
```

*Source*: `fabric-loot-api-v3/src/main/java/net/fabricmc/fabric/api/loot/v3/LootTableEvents.java`

### LootTableEvents.MODIFY *(Common)*

**When**: The LootTableEvents.MODIFY event fires when a loot table is loading to allow modification of the loot table.

**Parameters**: RegistryKey<LootTable> key, LootTable.Builder tableBuilder, LootTableSource source

**Example**:
```java
LootTableEvents.MODIFY.register((key, tableBuilder, source) -> {
    // Handle LootTableEvents.MODIFY here...
    if (Blocks.COBBLESTONE.getLootTableKey() == key && source.isBuiltin()) {
        LootPool.Builder pool = LootPool.builder()
            .with(ItemEntry.builder(Items.DIAMOND))
            .conditionally(SurvivesExplosionLootCondition.builder());
        tableBuilder.pool(pool);
    }
});
```

*Source*: `deprecated/fabric-loot-api-v2/src/main/java/net/fabricmc/fabric/api/loot/v2/LootTableEvents.java`

### LootTableEvents.MODIFY_DROPS *(Common)*

**When**: The LootTableEvents.MODIFY_DROPS event fires after a loot table has finished generating drops, allowing modification of the resulting drops.

**Parameters**: RegistryEntry<LootTable> entry, LootContext context, List<ItemStack> drops

**Example**:
```java
LootTableEvents.MODIFY_DROPS.register((entry, context, drops) -> {
    // Handle LootTableEvents.MODIFY_DROPS here...
    // Example: Add a diamond to drops
    drops.add(new ItemStack(Items.DIAMOND));
});
```

*Source*: `fabric-loot-api-v3/src/main/java/net/fabricmc/fabric/api/loot/v3/LootTableEvents.java`

### LootTableEvents.REPLACE *(Common)*

**When**: The LootTableEvents.REPLACE event fires when a loot table is being loaded and can be replaced by a registered listener.

**Parameters**: RegistryKey<LootTable> key, LootTable original, LootTableSource source, RegistryWrapper.WrapperLookup registries

**Example**:
```java
LootTableEvents.REPLACE.register((RegistryKey<LootTable> key, LootTable original, LootTableSource source, RegistryWrapper.WrapperLookup registries) -> {
    // Handle LootTableEvents.REPLACE here...
    if (key == Blocks.COBBLESTONE.getLootTableKey() && source.isBuiltin()) {
        return LootTables.createLootTable(LOOT_TABLE);
    }
    return null;
});
```

*Source*: `fabric-loot-api-v3/src/main/java/net/fabricmc/fabric/api/loot/v3/LootTableEvents.java`

### LootTableEvents.REPLACE *(Common)*

**When**: The LootTableEvents.REPLACE event fires when a loot table is being loaded and can be replaced by registered listeners.

**Parameters**: RegistryKey<LootTable> key, LootTable original, LootTableSource source

**Example**:
```java
LootTableEvents.REPLACE.register((RegistryKey<LootTable> key, LootTable original, LootTableSource source) -> {
    // Handle LootTableEvents.REPLACE here...
    if (key == Blocks.COBBLESTONE.getLootTableKey() && source.isBuiltin()) {
        return LootTable.builder().pool(LootPool.builder().with(ItemEntry.builder(Items.DIAMOND)).build()).build();
    }
    return null;
});
```

*Source*: `deprecated/fabric-loot-api-v2/src/main/java/net/fabricmc/fabric/api/loot/v2/LootTableEvents.java`


## Message

### ServerMessageDecoratorEvent.EVENT *(Common)*

**When**: The ServerMessageDecoratorEvent.EVENT event fires when a message is being decorated, allowing mods to modify the text content or styling of messages sent in the game.

**Parameters**: Identifier phase, BiFunction<ServerPlayerEntity, Text, Text> decorator

**Example**:
```java
ServerMessageDecoratorEvent.EVENT.register(ServerMessageDecoratorEvent.CONTENT_PHASE, (sender, message) -> {
    // Add smiley face. Has to copy() to get a MutableText with siblings and styles.
    return message.copy().append(" :)");
});
```

*Source*: `fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageDecoratorEvent.java`

### ServerMessageEvents.ALLOW_CHAT_MESSAGE *(Common)*

**When**: The ServerMessageEvents.ALLOW_CHAT_MESSAGE event fires when the server broadcasts a chat message sent by a player, typically from a client GUI or a player-executed command.

**Parameters**: SignedMessage message, ServerPlayerEntity sender, MessageType.Parameters params

**Example**:
```java
ServerMessageEvents.ALLOW_CHAT_MESSAGE.register((SignedMessage message, ServerPlayerEntity sender, MessageType.Parameters params) -> {
    // Handle ServerMessageEvents.ALLOW_CHAT_MESSAGE here...
    return true;
});
```

*Source*: `fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageEvents.java`

### ServerMessageEvents.ALLOW_COMMAND_MESSAGE *(Common)*

**When**: The ServerMessageEvents.ALLOW_COMMAND_MESSAGE event fires when the server broadcasts a command message to all players, such as from /me and /say commands (but not ones that specify recipients like /msg).

**Parameters**: boolean allowCommandMessage(SignedMessage message, ServerCommandSource source, MessageType.Parameters params)

**Example**:
```java
ServerMessageEvents.ALLOW_COMMAND_MESSAGE.register((SignedMessage message, ServerCommandSource source, MessageType.Parameters params) -> {
    // Handle ServerMessageEvents.ALLOW_COMMAND_MESSAGE here...
    return true;
});
```

*Source*: `fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageEvents.java`

### ServerMessageEvents.ALLOW_GAME_MESSAGE *(Common)*

**When**: The ServerMessageEvents.ALLOW_GAME_MESSAGE event fires when the server broadcasts a game message to all players, such as death messages, join/leave messages, and advancement messages.

**Parameters**: MinecraftServer server, Text message, boolean overlay

**Example**:
```java
ServerMessageEvents.ALLOW_GAME_MESSAGE.register((MinecraftServer server, Text message, boolean overlay) -> {
    // Handle ServerMessageEvents.ALLOW_GAME_MESSAGE here...
    return true;
});
```

*Source*: `fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageEvents.java`

### ServerMessageEvents.CHAT_MESSAGE *(Common)*

**When**: The ServerMessageEvents.CHAT_MESSAGE event fires when the server broadcasts a chat message sent by a player, typically from a client GUI or a player-executed command.

**Parameters**: SignedMessage message, ServerPlayerEntity sender, MessageType.Parameters params

**Example**:
```java
ServerMessageEvents.CHAT_MESSAGE.register((SignedMessage message, ServerPlayerEntity sender, MessageType.Parameters params) -> {
    // Handle ServerMessageEvents.CHAT_MESSAGE here...
});
```

*Source*: `fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageEvents.java`

### ServerMessageEvents.COMMAND_MESSAGE *(Common)*

**When**: The ServerMessageEvents.COMMAND_MESSAGE event fires when the server broadcasts a command message to all players, such as from /me and /say commands (but not ones that specify recipients like /msg).

**Parameters**: SignedMessage message, ServerCommandSource source, MessageType.Parameters params

**Example**:
```java
ServerMessageEvents.COMMAND_MESSAGE.register((SignedMessage message, ServerCommandSource source, MessageType.Parameters params) -> {
    // Handle ServerMessageEvents.COMMAND_MESSAGE here...
});
```

*Source*: `fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageEvents.java`

### ServerMessageEvents.GAME_MESSAGE *(Common)*

**When**: The ServerMessageEvents.GAME_MESSAGE event fires when the server broadcasts a game message to all players, such as death messages, join/leave messages, and advancement messages.

**Parameters**: MinecraftServer server, Text message, boolean overlay

**Example**:
```java
ServerMessageEvents.GAME_MESSAGE.register((MinecraftServer server, Text message, boolean overlay) -> {
    // Handle ServerMessageEvents.GAME_MESSAGE here...
});
```

*Source*: `fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageEvents.java`


## Networking

### EntityTrackingEvents.START_TRACKING *(Common)*

**When**: The EntityTrackingEvents.START_TRACKING event fires after a player has started tracking an entity, typically when an entity enters a client's view distance.

**Parameters**: Entity trackedEntity, ServerPlayerEntity player

**Example**:
```java
EntityTrackingEvents.START_TRACKING.register((Entity trackedEntity, ServerPlayerEntity player) -> {
    // Handle EntityTrackingEvents.START_TRACKING here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/EntityTrackingEvents.java`

### EntityTrackingEvents.STOP_TRACKING *(Common)*

**When**: The EntityTrackingEvents.STOP_TRACKING event fires before a player stops tracking an entity.

**Parameters**: Entity trackedEntity, ServerPlayerEntity player

**Example**:
```java
EntityTrackingEvents.STOP_TRACKING.register((Entity trackedEntity, ServerPlayerEntity player) -> {
    // Handle EntityTrackingEvents.STOP_TRACKING here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/EntityTrackingEvents.java`

### S2CConfigurationChannelEvents.REGISTER *(Common)*

**When**: The S2CConfigurationChannelEvents.REGISTER event fires when the server configuration network handler receives an update indicating the connected client's ability to receive packets in certain channels.

**Parameters**: ServerConfigurationNetworkHandler handler, PacketSender sender, MinecraftServer server, List<Identifier> channels

**Example**:
```java
S2CConfigurationChannelEvents.REGISTER.register((ServerConfigurationNetworkHandler handler, PacketSender sender, MinecraftServer server, List<Identifier> channels) -> {
    // Handle S2CConfigurationChannelEvents.REGISTER here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/S2CConfigurationChannelEvents.java`

### S2CConfigurationChannelEvents.UNREGISTER *(Common)*

**When**: The S2CConfigurationChannelEvents.UNREGISTER event fires when the server configuration network handler receives an update indicating the connected client's lack of ability to receive packets in certain channels.

**Parameters**: ServerConfigurationNetworkHandler handler, PacketSender sender, MinecraftServer server, List<Identifier> channels

**Example**:
```java
S2CConfigurationChannelEvents.UNREGISTER.register((ServerConfigurationNetworkHandler handler, PacketSender sender, MinecraftServer server, List<Identifier> channels) -> {
    // Handle S2CConfigurationChannelEvents.UNREGISTER here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/S2CConfigurationChannelEvents.java`

### S2CPlayChannelEvents.REGISTER *(Common)*

**When**: The S2CPlayChannelEvents.REGISTER event fires when the server play network handler receives an update indicating the connected client's ability to receive packets in certain channels.

**Parameters**: ServerPlayNetworkHandler handler, PacketSender sender, MinecraftServer server, List<Identifier> channels

**Example**:
```java
S2CPlayChannelEvents.REGISTER.register((ServerPlayNetworkHandler handler, PacketSender sender, MinecraftServer server, List<Identifier> channels) -> {
    // Handle S2CPlayChannelEvents.REGISTER here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/S2CPlayChannelEvents.java`

### S2CPlayChannelEvents.UNREGISTER *(Common)*

**When**: The S2CPlayChannelEvents.UNREGISTER event fires when the server play network handler receives an update indicating the connected client's lack of ability to receive packets in certain channels.

**Parameters**: ServerPlayNetworkHandler handler, PacketSender sender, MinecraftServer server, List<Identifier> channels

**Example**:
```java
S2CPlayChannelEvents.UNREGISTER.register((ServerPlayNetworkHandler handler, PacketSender sender, MinecraftServer server, List<Identifier> channels) -> {
    // Handle S2CPlayChannelEvents.UNREGISTER here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/S2CPlayChannelEvents.java`

### ServerConfigurationConnectionEvents.BEFORE_CONFIGURE *(Common)*

**When**: The ServerConfigurationConnectionEvents.BEFORE_CONFIGURE event fires before any vanilla configuration has taken place on the server's network handler.

**Parameters**: ServerConfigurationNetworkHandler handler, MinecraftServer server

**Example**:
```java
ServerConfigurationConnectionEvents.BEFORE_CONFIGURE.register((ServerConfigurationNetworkHandler handler, MinecraftServer server) -> {
    // Handle ServerConfigurationConnectionEvents.BEFORE_CONFIGURE here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerConfigurationConnectionEvents.java`

### ServerConfigurationConnectionEvents.CONFIGURE *(Common)*

**When**: The ServerConfigurationConnectionEvents.CONFIGURE event fires during vanilla configuration of a client connection on a logical server.

**Parameters**: ServerConfigurationNetworkHandler handler, MinecraftServer server

**Example**:
```java
ServerConfigurationConnectionEvents.CONFIGURE.register((handler, server) -> {
  if (ServerConfigurationNetworking.canSend(handler, ConfigurationPacket.PACKET_TYPE)) {
    handler.addTask(new TestConfigurationTask("Example data"));
  } else {
    // You can opt to disconnect the client if it cannot handle the configuration task
    handler.disconnect(Text.literal("Network test configuration not supported by client"));
  }
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerConfigurationConnectionEvents.java`

### ServerConfigurationConnectionEvents.DISCONNECT *(Common)*

**When**: The ServerConfigurationConnectionEvents.DISCONNECT event fires when the server configuration network handler is disconnected.

**Parameters**: ServerConfigurationNetworkHandler handler, MinecraftServer server

**Example**:
```java
ServerConfigurationConnectionEvents.DISCONNECT.register((ServerConfigurationNetworkHandler handler, MinecraftServer server) -> {
    // Handle ServerConfigurationConnectionEvents.DISCONNECT here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerConfigurationConnectionEvents.java`

### ServerLoginConnectionEvents.DISCONNECT *(Common)*

**When**: The ServerLoginConnectionEvents.DISCONNECT event fires when a server login network handler is disconnected.

**Parameters**: ServerLoginNetworkHandler handler, MinecraftServer server

**Example**:
```java
ServerLoginConnectionEvents.DISCONNECT.register((ServerLoginNetworkHandler handler, MinecraftServer server) -> {
    // Handle ServerLoginConnectionEvents.DISCONNECT here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerLoginConnectionEvents.java`

### ServerLoginConnectionEvents.INIT *(Common)*

**When**: The ServerLoginConnectionEvents.INIT event fires when a connection enters the LOGIN state and is ready for registering query response handlers.

**Parameters**: ServerLoginNetworkHandler handler, MinecraftServer server

**Example**:
```java
ServerLoginConnectionEvents.INIT.register((ServerLoginNetworkHandler handler, MinecraftServer server) -> {
    // Handle ServerLoginConnectionEvents.INIT here...
    // Example from source: Register query response handlers using ServerLoginNetworking.registerReceiver
    ServerLoginNetworking.registerReceiver(handler, Identifier.of("fabric", "example"), (response) -> {
        // Handle response
    });
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerLoginConnectionEvents.java`

### ServerLoginConnectionEvents.QUERY_START *(Common)*

**When**: The ServerLoginConnectionEvents.QUERY_START event fires when a connection enters the LOGIN state and is ready to register query response handlers.

**Parameters**: ServerLoginNetworkHandler handler, MinecraftServer server, LoginPacketSender sender, ServerLoginNetworking.LoginSynchronizer synchronizer

**Example**:
```java
ServerLoginConnectionEvents.QUERY_START.register((ServerLoginNetworkHandler handler, MinecraftServer server, LoginPacketSender sender, ServerLoginNetworking.LoginSynchronizer synchronizer) -> {
    // Handle ServerLoginConnectionEvents.QUERY_START here...
    ServerLoginNetworking.registerReceiver(handler, Identifier.of("fabric_networking", "example"), (response) -> {
        // Handle the query response
    });
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerLoginConnectionEvents.java`

### ServerPlayConnectionEvents.DISCONNECT *(Common)*

**When**: The ServerPlayConnectionEvents.DISCONNECT event fires when a client disconnects from the server.

**Parameters**: ServerPlayNetworkHandler handler, MinecraftServer server

**Example**:
```java
ServerPlayConnectionEvents.DISCONNECT.register((ServerPlayNetworkHandler handler, MinecraftServer server) -> {
    // Handle ServerPlayConnectionEvents.DISCONNECT here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents.java`

### ServerPlayConnectionEvents.INIT *(Common)*

**When**: The ServerPlayConnectionEvents.INIT event fires when a connection enters the PLAY state and is ready for registering channel handlers.

**Parameters**: ServerPlayNetworkHandler handler, MinecraftServer server

**Example**:
```java
ServerPlayConnectionEvents.INIT.register((ServerPlayNetworkHandler handler, MinecraftServer server) -> {
        // Handle ServerPlayConnectionEvents.INIT here...
        // Example usage from source: register channel handlers using ServerPlayNetworking.registerReceiver
        ServerPlayNetworking.registerReceiver(YourMod.NETWORK_CHANNEL, (serverPlayNetworkHandler, packet, responseSender) -> {
            // Handle packet
        });
    });
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents.java`

### ServerPlayConnectionEvents.JOIN *(Common)*

**When**: The ServerPlayConnectionEvents.JOIN event fires when the server play network handler is ready to send packets to the client.

**Parameters**: ServerPlayNetworkHandler handler, PacketSender sender, MinecraftServer server

**Example**:
```java
ServerPlayConnectionEvents.JOIN.register((ServerPlayNetworkHandler handler, PacketSender sender, MinecraftServer server) -> {
    // Handle ServerPlayConnectionEvents.JOIN here...
});
```

*Source*: `fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents.java`


## Transfer

### FluidStorage.GENERAL_COMBINED_PROVIDER *(Common)*

**When**: The FluidStorage.GENERAL_COMBINED_PROVIDER event fires when a general item API provider is queried for all items to provide FluidVariant storage implementations.

**Parameters**: ContainerItemContext context

**Example**:
```java
FluidStorage.GENERAL_COMBINED_PROVIDER.register((ContainerItemContext context) -> {
    // Handle FluidStorage.GENERAL_COMBINED_PROVIDER here...
    if (context.getItemVariant().getItem() instanceof BucketItem bucketItem) {
        Fluid bucketFluid = ((BucketItemAccessor) bucketItem).fabric_getFluid();

        // Make sure the mapping is bidirectional.
        if (bucketFluid != null && bucketFluid.getBucketItem() == bucketItem) {
            return new FullItemFluidStorage(context, Items.BUCKET, FluidVariant.of(bucketFluid), FluidConstants.BUCKET);
        }
    }

    return null;
});
```

*Source*: `fabric-transfer-api-v1/src/main/java/net/fabricmc/fabric/api/transfer/v1/fluid/FluidStorage.java`
