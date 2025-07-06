# MinecraftForge – Event Handbook

Generated 2025-07-06T06:27:32.237Z using qwen3.
Processed 215 out of 215 total events.

## Table of Contents
- [Client](#client)
  - [ClientChatEvent](#clientchatevent)
  - [ClientChatEvent.BUS](#clientchatevent.bus)
  - [ClientChatReceivedEvent.BUS](#clientchatreceivedevent.bus)
  - [ClientPauseChangeEvent.BUS](#clientpausechangeevent.bus)
  - [ClientPlayerChangeGameTypeEvent.BUS](#clientplayerchangegametypeevent.bus)
  - [ClientPlayerNetworkEvent.BUS](#clientplayernetworkevent.bus)
  - [ComputeFovModifierEvent](#computefovmodifierevent)
  - [ComputeFovModifierEvent.BUS](#computefovmodifierevent.bus)
  - [ContainerScreenEvent.BUS](#containerscreenevent.bus)
  - [CreateSpecialBlockRendererEvent](#createspecialblockrendererevent)
  - [CreateSpecialBlockRendererEvent.BUS](#createspecialblockrendererevent.bus)
  - [CustomizeGuiOverlayEvent.BUS](#customizeguioverlayevent.bus)
  - [EntityRenderersEvent.getBus](#entityrenderersevent.getbus)
  - [GatherComponents](#gathercomponents)
  - [InputEvent.BUS](#inputevent.bus)
  - [ModelEvent.getBus](#modelevent.getbus)
  - [MovementInputUpdateEvent.BUS](#movementinputupdateevent.bus)
  - [PlaySoundEvent.BUS](#playsoundevent.bus)
  - [PlaySoundSourceEvent.BUS](#playsoundsourceevent.bus)
  - [PlayStreamingSourceEvent.BUS](#playstreamingsourceevent.bus)
  - [RecipesUpdatedEvent.BUS](#recipesupdatedevent.bus)
  - [RegisterClientCommandsEvent.BUS](#registerclientcommandsevent.bus)
  - [RegisterClientReloadListenersEvent.getBus](#registerclientreloadlistenersevent.getbus)
  - [RegisterClientTooltipComponentFactoriesEvent.getBus](#registerclienttooltipcomponentfactoriesevent.getbus)
  - [RegisterColorHandlersEvent.getBus](#registercolorhandlersevent.getbus)
  - [RegisterDimensionSpecialEffectsEvent.getBus](#registerdimensionspecialeffectsevent.getbus)
  - [RegisterEntitySpectatorShadersEvent.getBus](#registerentityspectatorshadersevent.getbus)
  - [RegisterGuiOverlaysEvent](#registerguioverlaysevent)
  - [RegisterItemDecorationsEvent.getBus](#registeritemdecorationsevent.getbus)
  - [RegisterKeyMappingsEvent.getBus](#registerkeymappingsevent.getbus)
  - [RegisterNamedRenderTypesEvent.getBus](#registernamedrendertypesevent.getbus)
  - [RegisterParticleProvidersEvent.getBus](#registerparticleprovidersevent.getbus)
  - [RegisterPictureInPictureRendererEvent](#registerpictureinpicturerendererevent)
  - [RegisterPictureInPictureRendererEvent.BUS](#registerpictureinpicturerendererevent.bus)
  - [RegisterPresetEditorsEvent.getBus](#registerpreseteditorsevent.getbus)
  - [RegisterTextureAtlasSpriteLoadersEvent.getBus](#registertextureatlasspriteloadersevent.getbus)
  - [RenderArmEvent.BUS](#renderarmevent.bus)
  - [RenderBlockScreenEffectEvent.BUS](#renderblockscreeneffectevent.bus)
  - [RenderHandEvent.BUS](#renderhandevent.bus)
  - [RenderHighlightEvent.BUS](#renderhighlightevent.bus)
  - [RenderItemInFrameEvent.BUS](#renderiteminframeevent.bus)
  - [RenderLivingEvent.BUS](#renderlivingevent.bus)
  - [RenderNameTagEvent](#rendernametagevent)
  - [RenderNameTagEvent.BUS](#rendernametagevent.bus)
  - [RenderPlayerEvent.BUS](#renderplayerevent.bus)
  - [RenderTooltipEvent.BUS](#rendertooltipevent.bus)
  - [ScreenEvent.BUS](#screenevent.bus)
  - [ScreenshotEvent](#screenshotevent)
  - [ScreenshotEvent.BUS](#screenshotevent.bus)
  - [SoundEngineLoadEvent.getBus](#soundengineloadevent.getbus)
  - [SoundEvent.BUS](#soundevent.bus)
  - [SystemMessageReceivedEvent](#systemmessagereceivedevent)
  - [SystemMessageReceivedEvent.BUS](#systemmessagereceivedevent.bus)
  - [ToastAddEvent.BUS](#toastaddevent.bus)
  - [ViewportEvent.BUS](#viewportevent.bus)
- [Common](#common)
  - [RegisterCapabilitiesEvent.getBus](#registercapabilitiesevent.getbus)
- [Data](#data)
  - [GatherDataEvent.getBus](#gatherdataevent.getbus)
- [Debug](#debug)
  - [LivingMakeBrainEventTest](#livingmakebraineventtest)
- [Event](#event)
  - [AddPackFindersEvent.getBus](#addpackfindersevent.getbus)
  - [AddReloadListenerEvent](#addreloadlistenerevent)
  - [AddReloadListenerEvent.BUS](#addreloadlistenerevent.bus)
  - [AdvancementEvent.BUS](#advancementevent.bus)
  - [AlterGroundEvent](#altergroundevent)
  - [AlterGroundEvent.BUS](#altergroundevent.bus)
  - [AnimalTameEvent.BUS](#animaltameevent.bus)
  - [AnvilRepairEvent.BUS](#anvilrepairevent.bus)
  - [AnvilUpdateEvent](#anvilupdateevent)
  - [AnvilUpdateEvent.BUS](#anvilupdateevent.bus)
  - [ArrowLooseEvent.BUS](#arrowlooseevent.bus)
  - [ArrowNockEvent.BUS](#arrownockevent.bus)
  - [AttachCapabilitiesEvent.BUS](#attachcapabilitiesevent.bus)
  - [AttackEntityEvent.BUS](#attackentityevent.bus)
  - [BabyEntitySpawnEvent](#babyentityspawnevent)
  - [BabyEntitySpawnEvent.BUS](#babyentityspawnevent.bus)
  - [BlockEvent](#blockevent)
  - [BlockEvent.BUS](#blockevent.bus)
  - [BonemealEvent.BUS](#bonemealevent.bus)
  - [BrewingRecipeRegisterEvent.BUS](#brewingreciperegisterevent.bus)
  - [BuildCreativeModeTabContentsEvent.getBus](#buildcreativemodetabcontentsevent.getbus)
  - [ChannelRegistrationChangeEvent.BUS](#channelregistrationchangeevent.bus)
  - [ChunkDataEvent.BUS](#chunkdataevent.bus)
  - [ChunkEvent.BUS](#chunkevent.bus)
  - [ChunkTicketLevelUpdatedEvent](#chunkticketlevelupdatedevent)
  - [ChunkTicketLevelUpdatedEvent.BUS](#chunkticketlevelupdatedevent.bus)
  - [ChunkWatchEvent.BUS](#chunkwatchevent.bus)
  - [CommandEvent](#commandevent)
  - [CommandEvent.BUS](#commandevent.bus)
  - [ConnectionStartEvent.BUS](#connectionstartevent.bus)
  - [CustomPayloadEvent.BUS](#custompayloadevent.bus)
  - [DifficultyChangeEvent.BUS](#difficultychangeevent.bus)
  - [EnchantmentLevelSetEvent](#enchantmentlevelsetevent)
  - [EnchantmentLevelSetEvent.BUS](#enchantmentlevelsetevent.bus)
  - [EntityAttributeCreationEvent.getBus](#entityattributecreationevent.getbus)
  - [EntityAttributeModificationEvent.getBus](#entityattributemodificationevent.getbus)
  - [EntityEvent](#entityevent)
  - [EntityEvent.BUS](#entityevent.bus)
  - [EntityItemPickupEvent.BUS](#entityitempickupevent.bus)
  - [EntityJoinLevelEvent.BUS](#entityjoinlevelevent.bus)
  - [EntityLeaveLevelEvent.BUS](#entityleavelevelevent.bus)
  - [EntityMobGriefingEvent.BUS](#entitymobgriefingevent.bus)
  - [EntityMountEvent.BUS](#entitymountevent.bus)
  - [EntityStruckByLightningEvent.BUS](#entitystruckbylightningevent.bus)
  - [EntityTeleportEvent.BUS](#entityteleportevent.bus)
  - [EntityTravelToDimensionEvent.BUS](#entitytraveltodimensionevent.bus)
  - [ExplosionEvent.BUS](#explosionevent.bus)
  - [FillBucketEvent.BUS](#fillbucketevent.bus)
  - [FurnaceFuelBurnTimeEvent](#furnacefuelburntimeevent)
  - [FurnaceFuelBurnTimeEvent.BUS](#furnacefuelburntimeevent.bus)
  - [GameShuttingDownEvent.BUS](#gameshuttingdownevent.bus)
  - [GatherComponentsEvent.BUS](#gathercomponentsevent.bus)
  - [GatherLoginConfigurationTasksEvent](#gatherloginconfigurationtasksevent)
  - [GatherLoginConfigurationTasksEvent.BUS](#gatherloginconfigurationtasksevent.bus)
  - [GrindstoneEvent.BUS](#grindstoneevent.bus)
  - [ItemEvent.BUS](#itemevent.bus)
  - [ItemExpireEvent.BUS](#itemexpireevent.bus)
  - [ItemFishedEvent.BUS](#itemfishedevent.bus)
  - [ItemStackedOnOtherEvent.BUS](#itemstackedonotherevent.bus)
  - [ItemTooltipEvent.BUS](#itemtooltipevent.bus)
  - [ItemTossEvent.BUS](#itemtossevent.bus)
  - [LevelEvent](#levelevent)
  - [LevelEvent.BUS](#levelevent.bus)
  - [LivingAttackEvent.BUS](#livingattackevent.bus)
  - [LivingBreatheEvent.BUS](#livingbreatheevent.bus)
  - [LivingChangeTargetEvent.BUS](#livingchangetargetevent.bus)
  - [LivingConversionEvent.BUS](#livingconversionevent.bus)
  - [LivingDamageEvent.BUS](#livingdamageevent.bus)
  - [LivingDeathEvent.BUS](#livingdeathevent.bus)
  - [LivingDestroyBlockEvent.BUS](#livingdestroyblockevent.bus)
  - [LivingDropsEvent.BUS](#livingdropsevent.bus)
  - [LivingDrownEvent.BUS](#livingdrownevent.bus)
  - [LivingEntityUseItemEvent.BUS](#livingentityuseitemevent.bus)
  - [LivingEquipmentChangeEvent.BUS](#livingequipmentchangeevent.bus)
  - [LivingEvent.BUS](#livingevent.bus)
  - [LivingExperienceDropEvent.BUS](#livingexperiencedropevent.bus)
  - [LivingFallEvent.BUS](#livingfallevent.bus)
  - [LivingGetProjectileEvent.BUS](#livinggetprojectileevent.bus)
  - [LivingHealEvent.BUS](#livinghealevent.bus)
  - [LivingHurtEvent.BUS](#livinghurtevent.bus)
  - [LivingKnockBackEvent.BUS](#livingknockbackevent.bus)
  - [LivingMakeBrainEvent.BUS](#livingmakebrainevent.bus)
  - [LivingPackSizeEvent.BUS](#livingpacksizeevent.bus)
  - [LivingSwapItemsEvent.BUS](#livingswapitemsevent.bus)
  - [LivingSwapItemsEvent.EVENT_BUS](#livingswapitemsevent.event_bus)
  - [LivingUseTotemEvent.BUS](#livingusetotemevent.bus)
  - [LootingLevelEvent.BUS](#lootinglevelevent.bus)
  - [LootTableLoadEvent](#loottableloadevent)
  - [LootTableLoadEvent.BUS](#loottableloadevent.bus)
  - [MobEffectEvent.BUS](#mobeffectevent.bus)
  - [MobSpawnEvent.BUS](#mobspawnevent.bus)
  - [ModMismatchEvent.getBus](#modmismatchevent.getbus)
  - [MonsterDisguiseEvent.BUS](#monsterdisguiseevent.bus)
  - [NoteBlockEvent.BUS](#noteblockevent.bus)
  - [OnDatapackSyncEvent.BUS](#ondatapacksyncevent.bus)
  - [PermissionsChangedEvent.BUS](#permissionschangedevent.bus)
  - [PistonEvent.BUS](#pistonevent.bus)
  - [PlayerBrewedPotionEvent.BUS](#playerbrewedpotionevent.bus)
  - [PlayerContainerEvent.BUS](#playercontainerevent.bus)
  - [PlayerDestroyItemEvent.BUS](#playerdestroyitemevent.bus)
  - [PlayerEvent.BUS](#playerevent.bus)
  - [PlayerFlyableFallEvent.BUS](#playerflyablefallevent.bus)
  - [PlayerInteractEvent.BUS](#playerinteractevent.bus)
  - [PlayerSetSpawnEvent.BUS](#playersetspawnevent.bus)
  - [PlayerSleepInBedEvent.BUS](#playersleepinbedevent.bus)
  - [PlayerSpawnPhantomsEvent.BUS](#playerspawnphantomsevent.bus)
  - [PlayerWakeUpEvent.BUS](#playerwakeupevent.bus)
  - [PlayerXpEvent.BUS](#playerxpevent.bus)
  - [PlayLevelSoundEvent.BUS](#playlevelsoundevent.bus)
  - [PotionBrewEvent.BUS](#potionbrewevent.bus)
  - [ProjectileImpactEvent.BUS](#projectileimpactevent.bus)
  - [RegisterCommandsEvent.BUS](#registercommandsevent.bus)
  - [RegisterStructureConversionsEvent](#registerstructureconversionsevent)
  - [RegisterStructureConversionsEvent.BUS](#registerstructureconversionsevent.bus)
  - [SaplingGrowTreeEvent.BUS](#saplinggrowtreeevent.bus)
  - [ServerAboutToStartEvent.BUS](#serverabouttostartevent.bus)
  - [ServerChatEvent](#serverchatevent)
  - [ServerChatEvent.BUS](#serverchatevent.bus)
  - [ServerLifecycleEvent.BUS](#serverlifecycleevent.bus)
  - [ServerStartedEvent.BUS](#serverstartedevent.bus)
  - [ServerStartingEvent.BUS](#serverstartingevent.bus)
  - [ServerStoppedEvent.BUS](#serverstoppedevent.bus)
  - [ServerStoppingEvent.BUS](#serverstoppingevent.bus)
  - [ShieldBlockEvent.BUS](#shieldblockevent.bus)
  - [SleepFinishedTimeEvent.BUS](#sleepfinishedtimeevent.bus)
  - [SleepingLocationCheckEvent.BUS](#sleepinglocationcheckevent.bus)
  - [SleepingTimeCheckEvent.BUS](#sleepingtimecheckevent.bus)
  - [SpawnPlacementCheck](#spawnplacementcheck)
  - [SpawnPlacementRegisterEvent.getBus](#spawnplacementregisterevent.getbus)
  - [TagsUpdatedEvent](#tagsupdatedevent)
  - [TagsUpdatedEvent.BUS](#tagsupdatedevent.bus)
  - [TickEvent.BUS](#tickevent.bus)
  - [TradeWithVillagerEvent.BUS](#tradewithvillagerevent.bus)
  - [VanillaGameEvent.BUS](#vanillagameevent.bus)
  - [VillagerTradesEvent](#villagertradesevent)
  - [VillagerTradesEvent.BUS](#villagertradesevent.bus)
  - [VillageSiegeEvent.BUS](#villagesiegeevent.bus)
  - [WandererTradesEvent](#wanderertradesevent)
  - [WandererTradesEvent.BUS](#wanderertradesevent.bus)
  - [ZombieEvent.BUS](#zombieevent.bus)
- [Eventtest](#eventtest)
  - [EntityJoinedWorldTest](#entityjoinedworldtest)
- [Fml](#fml)
  - [FMLClientSetupEvent.getBus](#fmlclientsetupevent.getbus)
  - [FMLCommonSetupEvent.getBus](#fmlcommonsetupevent.getbus)
  - [FMLConstructModEvent.getBus](#fmlconstructmodevent.getbus)
  - [FMLDedicatedServerSetupEvent.getBus](#fmldedicatedserversetupevent.getbus)
  - [FMLLoadCompleteEvent.getBus](#fmlloadcompleteevent.getbus)
  - [InterModEnqueueEvent.getBus](#intermodenqueueevent.getbus)
  - [InterModProcessEvent.getBus](#intermodprocessevent.getbus)
  - [ModConfigEvent.getBus](#modconfigevent.getbus)
- [Registries](#registries)
  - [DataPackRegistryEvent.getBus](#datapackregistryevent.getbus)
  - [IdMappingEvent](#idmappingevent)
  - [IdMappingEvent.BUS](#idmappingevent.bus)
  - [MissingMappingsEvent](#missingmappingsevent)
  - [MissingMappingsEvent.BUS](#missingmappingsevent.bus)
  - [NewRegistryEvent.getBus](#newregistryevent.getbus)
  - [RegisterEvent.getBus](#registerevent.getbus)
- [Server](#server)
  - [PermissionGatherEvent.BUS](#permissiongatherevent.bus)

## Client

### ClientChatEvent *(Client)*

**When**: When the client is about to send a chat message to the server

**Cancellable**: Yes

**Fields**:
```yaml
- name: message
  type: String
  description: The message that will be sent to the server, if the event is not cancelled. This can be changed by mods.
- name: originalMessage
  type: String
  description: The original message that was to be sent to the server. This cannot be changed by mods.
```

**Methods**:
```yaml
- name: getMessage
  signature: public String getMessage()
  description: Returns the message that will be sent to the server, if the event is not cancelled.
- name: setMessage
  signature: public void setMessage(String message)
  description: Sets the new message to be sent to the server, if the event is not cancelled.
- name: getOriginalMessage
  signature: public String getOriginalMessage()
  description: Returns the original message that was to be sent to the server. This cannot be changed by mods.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChat(ClientChatEvent event) {
        if (!event.isCanceled()) {
            event.setMessage("Hello, server!");
            System.out.println("Original message: " + event.getOriginalMessage());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ClientChatEvent.java`

### ClientChatEvent.BUS *(Client)*

**When**: When the client is about to send a chat message to the server

**Cancellable**: Yes

**Fields**:
```yaml
- name: message
  type: String
  description: The message that will be sent to the server, if the event is not cancelled. This can be changed by mods.
- name: originalMessage
  type: String
  description: The original message that was to be sent to the server. This cannot be changed by mods.
```

**Methods**:
```yaml
- name: getMessage
  signature: public String getMessage()
  description: Returns the message that will be sent to the server, if the event is not cancelled.
- name: setMessage
  signature: public void setMessage(String message)
  description: Sets the new message to be sent to the server, if the event is not cancelled.
- name: getOriginalMessage
  signature: public String getOriginalMessage()
  description: Returns the original message that was to be sent to the server. This cannot be changed by mods.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChat(ClientChatEvent event) {
        if (!event.isCanceled()) {
            event.setMessage("Hello, server!");
            System.out.println("Original message: " + event.getOriginalMessage());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ClientChatEvent.java`

### ClientChatReceivedEvent.BUS *(Client)*

**When**: When a chat message is received on the client side, specifically when a player or system message is received.

**Cancellable**: Yes

**Fields**:
```yaml
- name: message
  type: Component
  description: The chat message content that will be displayed in the chat window if the event is not cancelled.
- name: boundChatType
  type: ChatType.Bound
  description: Contains the chat type, display name of the sender, and nullable target name depending on the chat type.
- name: sender
  type: UUID
  description: The UUID of the message sender.
```

**Methods**:
```yaml
- name: getMessage
  signature: public Component getMessage()
  description: Returns the message that will be displayed in the chat message window if the event is not cancelled.
- name: setMessage
  signature: public void setMessage(Component message)
  description: Sets the new message to be displayed in the chat message window if the event is not cancelled.
- name: getBoundChatType
  signature: public ChatType.Bound getBoundChatType()
  description: Returns the bound chat type of the chat message.
- name: getSender
  signature: public UUID getSender()
  description: Returns the UUID of the message sender.
- name: isSystem
  signature: public boolean isSystem()
  description: Returns true if the message was sent by the system, false otherwise. (Deprecated)
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChatReceived(ClientChatReceivedEvent event) {
        if (event.getMessage().getString().contains("secret")) {
            event.setCancelled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ClientChatReceivedEvent.java`

### ClientPauseChangeEvent.BUS *(Client)*

**When**: This event is fired when the game's pause state is about to change, specifically before the pause state is updated.

**Cancellable**: Yes

**Fields**:
```yaml
- name: pause
  type: boolean
  description: Indicates whether the game will be paused or unpaused. True means the game will be paused, false means it will be unpaused.
```

**Methods**:
```yaml
- name: isPaused
  signature: public boolean isPaused()
  description: Returns the current pause state. This is the state that will be applied after the event is processed.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPrePause(ClientPauseChangeEvent.Pre event) {
        if (event.isPaused()) {
            event.setCanceled(true);
            System.out.println("Pause cancelled");
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ClientPauseChangeEvent.java`

### ClientPlayerChangeGameTypeEvent.BUS *(Client)*

**When**: This event fires when the client player is notified of a change in their GameType from the server, specifically when the server updates the player's game mode.

**Cancellable**: No

**Fields**:
```yaml
- name: getInfo
  type: PlayerInfo
  description: Provides access to the client's player information, including their current status and connection details.
- name: getCurrentGameType
  type: GameType
  description: Represents the player's current game mode before the change, such as SURVIVAL or CREATIVE.
- name: getNewGameType
  type: GameType
  description: Represents the new game mode the player is being switched to, as determined by the server.
```

**Methods**:
```yaml
- name: getInfo
  signature: PlayerInfo getInfo()
  description: Retrieves the player's information, which can be used to identify or interact with the player on the client.
- name: getCurrentGameType
  signature: GameType getCurrentGameType()
  description: Gets the player's current game mode before the change, useful for logging or conditional logic.
- name: getNewGameType
  signature: GameType getNewGameType()
  description: Gets the new game mode the player is transitioning to, allowing for client-side adjustments or notifications.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onGameTypeChange(ClientPlayerChangeGameTypeEvent event) {
        PlayerInfo player = event.getInfo();
        GameType oldType = event.getCurrentGameType();
        GameType newType = event.getNewGameType();
        // Example: Log the game type change
        System.out.println("Player changed game type from " + oldType + " to " + newType);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ClientPlayerChangeGameTypeEvent.java`

### ClientPlayerNetworkEvent.BUS *(Client)*

**When**: When the client player connects to or disconnects from a server, or when the player respawns

**Cancellable**: No

**Fields**:
```yaml
- name: multiPlayerGameMode
  type: MultiPlayerGameMode
  description: The multiplayer game mode controller for the player
- name: player
  type: LocalPlayer
  description: The player instance
- name: connection
  type: Connection
  description: The network connection for the player
```

**Methods**:
```yaml
- name: getMultiPlayerGameMode
  signature: public MultiPlayerGameMode getMultiPlayerGameMode()
  description: Returns the multiplayer game mode controller for the player
- name: getPlayer
  signature: public LocalPlayer getPlayer()
  description: Returns the player instance
- name: getConnection
  signature: public Connection getConnection()
  description: Returns the network connection for the player
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlayerLogin(ClientPlayerNetworkEvent.LoggingIn event) {
        System.out.println("Player logged in: " + event.getPlayer().getName());
        // Cannot cancel this event
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ClientPlayerNetworkEvent.java`

### ComputeFovModifierEvent *(Client)*

**When**: This event fires after the field of vision (FOV) modifier for the player is calculated, allowing developers to adjust it further.

**Cancellable**: No

**Fields**:
```yaml
- name: player
  type: Player
  description: The player affected by this event
- name: fovModifier
  type: float
  description: The original field of vision (FOV) of the player, before any modifications or interpolation
- name: scale
  type: float
  description: The scale factor used for interpolation in the FOV calculation
- name: newFovModifier
  type: float
  description: The current field of vision (FOV) of the player, which can be modified by event handlers
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player affected by this event
- name: getFovModifier
  signature: public float getFovModifier()
  description: Returns the original field of vision (FOV) of the player, before any modifications or interpolation
- name: getScale
  signature: public float getScale()
  description: Returns the scale factor used for interpolation in the FOV calculation
- name: getNewFovModifier
  signature: public float getNewFovModifier()
  description: Returns the current field of vision (FOV) of the player
- name: setNewFovModifier
  signature: public void setNewFovModifier(float newFovModifier)
  description: Sets the new field of vision (FOV) of the player
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onComputeFovModifier(ComputeFovModifierEvent event) {
        Player player = event.getPlayer();
        float newFov = event.getNewFovModifier();
        event.setNewFovModifier(newFov * 1.5F);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ComputeFovModifierEvent.java`

### ComputeFovModifierEvent.BUS *(Client)*

**When**: This event fires after the field of vision (FOV) modifier for the player is calculated, allowing developers to adjust it further.

**Cancellable**: No

**Fields**:
```yaml
- name: player
  type: Player
  description: The player affected by this event
- name: fovModifier
  type: float
  description: The original field of vision (FOV) of the player, before any modifications or interpolation
- name: scale
  type: float
  description: The scale factor used for interpolation in calculating the final FOV
- name: newFovModifier
  type: float
  description: The current field of vision (FOV) of the player, which can be modified by event handlers
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player affected by this event
- name: getFovModifier
  signature: public float getFovModifier()
  description: Returns the original field of vision (FOV) of the player, before any modifications or interpolation
- name: getScale
  signature: public float getScale()
  description: Returns the scale factor used for interpolation in calculating the final FOV
- name: getNewFovModifier
  signature: public float getNewFovModifier()
  description: Returns the current field of vision (FOV) of the player
- name: setNewFovModifier
  signature: public void setNewFovModifier(float newFovModifier)
  description: Sets the new field of vision (FOV) of the player
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onComputeFovModifier(ComputeFovModifierEvent event) {
        Player player = event.getPlayer();
        float newFov = event.getNewFovModifier();
        event.setNewFovModifier(newFov * 1.5F);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ComputeFovModifierEvent.java`

### ContainerScreenEvent.BUS *(Client)*

**When**: Fired when an AbstractContainerScreen renders, specifically for foreground or background rendering events.

**Cancellable**: No

**Fields**:
```yaml
- name: containerScreen
  type: AbstractContainerScreen<?>
  description: The container screen associated with the event.
- name: guiGraphics
  type: GuiGraphics
  description: The graphics context used for rendering.
- name: mouseX
  type: int
  description: The X coordinate of the mouse pointer during rendering.
- name: mouseY
  type: int
  description: The Y coordinate of the mouse pointer during rendering.
```

**Methods**:
```yaml
- name: getContainerScreen
  signature: public AbstractContainerScreen<?> getContainerScreen()
  description: Returns the container screen associated with the event.
- name: getGuiGraphics
  signature: public GuiGraphics getGuiGraphics()
  description: Returns the graphics context used for rendering.
- name: getMouseX
  signature: public int getMouseX()
  description: Returns the X coordinate of the mouse pointer during rendering.
- name: getMouseY
  signature: public int getMouseY()
  description: Returns the Y coordinate of the mouse pointer during rendering.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRenderForeground(ContainerScreenEvent.Foreground event) {
        // Access the container screen
        AbstractContainerScreen<?> screen = event.getContainerScreen();
        // Get mouse coordinates
        int mouseX = event.getMouseX();
        int mouseY = event.getMouseY();
        // Render custom overlay
        event.getGuiGraphics.drawString(screen.font, "Custom Overlay", mouseX, mouseY, 0xFFFFFF);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ContainerScreenEvent.java`

### CreateSpecialBlockRendererEvent *(Client)*

**When**: This event fires when Minecraft is creating special block renderers for blocks that use the SpecialModelRenderer system.

**Cancellable**: No

**Fields**:
```yaml
- name: map
  type: Map<Block, SpecialModelRenderer.Unbaked>
  description: A map of blocks to their corresponding unbaked special model renderers. Modders can add entries to this map to register custom block renderers.
```

**Methods**:
```yaml
- name: register
  signature: void register(Block block, SpecialModelRenderer.Unbaked renderer)
  description: Registers a block and its corresponding unbaked special model renderer in the event's map. This allows modders to add custom block renderers during the event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSpecialBlockRender(CreateSpecialBlockRendererEvent event) {
        event.register(Blocks.DIAMOND_BLOCK, new SpecialModelRenderer.Unbaked());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/CreateSpecialBlockRendererEvent.java`

### CreateSpecialBlockRendererEvent.BUS *(Client)*

**When**: This event fires when a special block renderer needs to be created for a block, allowing modders to register custom renderers for specific blocks.

**Cancellable**: No

**Fields**:
```yaml
- name: map
  type: Map<Block, SpecialModelRenderer.Unbaked>
  description: A map of blocks to their corresponding special model renderers. Modders can add entries to this map to register custom renderers.
```

**Methods**:
```yaml
- name: register
  signature: void register(Block block, SpecialModelRenderer.Unbaked renderer)
  description: Registers a special model renderer for a specific block. This method adds an entry to the map.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSpecialBlockRender(CreateSpecialBlockRendererEvent event) {
        event.register(Blocks.DIAMOND_BLOCK, new SpecialModelRenderer.Unbaked());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/CreateSpecialBlockRendererEvent.java`

### CustomizeGuiOverlayEvent.BUS *(Client)*

**When**: This event fires when an overlay is about to be rendered to the screen, allowing modifications to the overlay before it is drawn.

**Cancellable**: Yes

**Fields**:
```yaml
- name: window
  type: Window
  description: The Minecraft window object representing the game window.
- name: guiGraphics
  type: GuiGraphics
  description: The GuiGraphics object used for rendering graphics.
- name: partialTick
  type: float
  description: The partial tick value used for smooth animation calculations.
```

**Methods**:
```yaml
- name: getWindow
  signature: public Window getWindow()
  description: Returns the Minecraft window object.
- name: getGuiGraphics
  signature: public GuiGraphics getGuiGraphics()
  description: Returns the GuiGraphics object used for rendering.
- name: getPartialTick
  signature: public float getPartialTick()
  description: Returns the partial tick value for animation calculations.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onCustomizeGuiOverlay(CustomizeGuiOverlayEvent event) {
        if (event.isCanceled()) return;
        event.getGuiGraphics().drawText("Custom Overlay!", 100, 100, 0xFFFFFFFF);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/CustomizeGuiOverlayEvent.java`

### EntityRenderersEvent.getBus *(Client)*

**When**: The event occurs during the registration phase of the Minecraft client, specifically when modders are registering entity and block entity renderers.

**Cancellable**: false

**Fields**:
```yaml
- name: renderers
  type: Map<EntityType<?>, EntityRenderer<?, ?>>
  description: A map of entity types to their corresponding entity renderers.
- name: skinMap
  type: Map<PlayerSkin.Model, EntityRenderer<? extends Player, ?>>
  description: A map of player skin models to their corresponding player skin renderers.
- name: context
  type: EntityRendererProvider.Context
  description: The context for the entity renderer provider, which provides access to the model set and other rendering-related information.
```

**Methods**:
```yaml
- name: getSkins
  signature: public Set<PlayerSkin.Model> getSkins()
  description: Returns the set of player skin names which have a renderer.
- name: getPlayerSkin
  signature: public <R extends EntityRenderer<? extends Player, ?>> R getPlayerSkin(PlayerSkin.Model skinName)
  description: Returns a player skin renderer for the given skin name.
- name: getEntityRenderer
  signature: public <T extends LivingEntity, S extends EntityRenderState, R extends EntityRenderer<T, S>> R getEntityRenderer(EntityType<? extends T> entityType)
  description: Returns an entity renderer for the given entity type.
- name: getEntityModels
  signature: public EntityModelSet getEntityModels()
  description: Returns the set of entity models.
- name: getContext
  signature: public EntityRendererProvider.Context getContext()
  description: Returns the context for the entity renderer provider.
```

**Example**:
```java
When a mod is registering a new player skin renderer, it would listen for the AddLayers event and use the getPlayerSkin method to retrieve the renderer for the specified skin name.
```

*Source*: `src/main/java/net/minecraftforge/client/event/EntityRenderersEvent.java`

### GatherComponents *(Client)*

**When**: 2023-10-15T12:34:56.789Z

**Cancellable**: true

**Fields**:
```yaml
- name: itemStack
  type: ItemStack
  description: The item stack for which the tooltip is being rendered.
- name: screenWidth
  type: int
  description: The width of the screen, used for wrapping text within the tooltip.
- name: screenHeight
  type: int
  description: The height of the screen, used for positioning the tooltip within the screen bounds.
- name: tooltipElements
  type: List<Either<FormattedText, TooltipComponent>>
  description: The list of elements to be rendered on the tooltip, which can be either formatted text or custom tooltip components.
- name: maxWidth
  type: int
  description: The maximum width of the tooltip when being rendered. A value of -1 means unlimited maximum width.
```

**Methods**:
```yaml
- name: setMaxWidth
  signature: public void setMaxWidth(int maxWidth)
  description: Sets the maximum width of the tooltip. Use -1 for unlimited maximum width.
```

**Example**:
```java
To modify the maximum width of the tooltip, you can use the following code:

```java
GatherComponents event = new GatherComponents(...);
event.setMaxWidth(200);
```
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderTooltipEvent.java`

### InputEvent.BUS *(Client)*

**When**: 2023-10-15T12:34:17.000Z

**Cancellable**: false

**Fields**:
```yaml
- name: key
  type: int
  description: The GLFW key code for the key pressed. This is platform-agnostic and corresponds to constants like GLFW_KEY_A.
- name: scanCode
  type: int
  description: The platform-specific scan code for the key. This is unique for each key and can be used for custom key bindings.
- name: action
  type: int
  description: The action performed on the key (e.g., press, release, repeat). Corresponds to constants like InputConstants.PRESS.
- name: modifiers
  type: int
  description: A bitmask representing active modifier keys (e.g., Shift, Ctrl).
```

**Methods**:
```yaml
- name: getKey
  signature: int getKey()
  description: Returns the GLFW key code for the key pressed.
- name: getScanCode
  signature: int getScanCode()
  description: Returns the platform-specific scan code for the key.
- name: getAction
  signature: int getAction()
  description: Returns the action performed on the key (e.g., press, release, repeat).
- name: getModifiers
  signature: int getModifiers()
  description: Returns a bitmask representing active modifier keys.
```

**Example**:
```java
When the user presses the 'A' key, this event is triggered with key=GLFW_KEY_A, scanCode=platform-specific, action=InputConstants.PRESS, and modifiers=0 (no modifiers).
```

*Source*: `src/main/java/net/minecraftforge/client/event/InputEvent.java`

### ModelEvent.getBus *(Client)*

**When**: This event is fired during the model reloading process in the Minecraft client, specifically when the ModelManager is notified of the resource manager reloading.

**Cancellable**: No

**Fields**:
```yaml
- name: modelManager
  type: ModelManager
  description: The model manager that is being notified of the resource manager reloading.
- name: modelBakery
  type: ModelBakery
  description: The model loader used for baking models.
```

**Methods**:
```yaml
- name: getModelManager
  signature: public ModelManager getModelManager()
  description: Returns the model manager associated with this event.
- name: getModelBakery
  signature: public ModelBakery getModelBakery()
  description: Returns the model loader used for baking models.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBakingCompleted(BakingCompleted event) {
        ModelManager manager = event.getModelManager();
        ModelBakery bakery = event.getModelBakery();
        // Use the model manager and bakery for custom model processing
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ModelEvent.java`

### MovementInputUpdateEvent.BUS *(Client)*

**When**: This event fires after the player's movement inputs are updated, specifically when the client processes movement input from the player's controls.

**Cancellable**: No

**Fields**:
```yaml
- name: input
  type: ClientInput
  description: Represents the player's current movement input state, including movement direction and speed.
```

**Methods**:
```yaml
- name: getInput
  signature: public ClientInput getInput()
  description: Returns the player's movement input object containing the current movement state.
```

**Example**:
```java
@Mod("movementexample")
public class MovementExample {
    @SubscribeEvent
    public void onMovementInput(MovementInputUpdateEvent event) {
        ClientInput input = event.getInput();
        // Example: Check if forward movement is active
        if (input.forward) {
            System.out.println("Player is moving forward");
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/MovementInputUpdateEvent.java`

### PlaySoundEvent.BUS *(Client)*

**When**: Fires when a sound is about to be played by the sound engine, before any checks on the sound are performed.

**Cancellable**: No

**Fields**:
```yaml
- name: name
  type: String
  description: The name of the original sound, equivalent to the path of the location of the original sound.
- name: originalSound
  type: SoundInstance
  description: The original sound that was to be played before any modifications.
- name: sound
  type: SoundInstance
  description: The sound to be played, which can be set to null to prevent the sound from playing.
```

**Methods**:
```yaml
- name: getName
  signature: public String getName()
  description: Returns the name of the original sound.
- name: getOriginalSound
  signature: public SoundInstance getOriginalSound()
  description: Returns the original sound that was to be played.
- name: getSound
  signature: public @Nullable SoundInstance getSound()
  description: Returns the sound to be played, or null if no sound will be played.
- name: setSound
  signature: public void setSound(@Nullable SoundInstance newSound)
  description: Sets the sound to be played, which may be null to prevent any sound from being played.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlaySound(PlaySoundEvent event) {
        // Check if the sound is a specific one
        if (event.getName().equals("minecraft:block.wood.place")) {
            // Change the sound to a different one
            event.setSound(new SoundInstance("examplemod:custom_sound"));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/sound/PlaySoundEvent.java`

### PlaySoundSourceEvent.BUS *(Client)*

**When**: When a non-streaming sound is being played, specifically for short sounds loaded into memory as buffers.

**Cancellable**: No

**Fields**:
```yaml
- name: engine
  type: SoundEngine
  description: The sound engine responsible for playing the sound.
- name: sound
  type: SoundInstance
  description: The sound instance being played, representing the specific sound data.
- name: channel
  type: Channel
  description: The audio channel through which the sound is being played.
```

**Methods**:
```yaml
- name: getEngine
  signature: public SoundEngine getEngine()
  description: Returns the sound engine associated with this event.
- name: getSound
  signature: public SoundInstance getSound()
  description: Returns the sound instance being played.
- name: getChannel
  signature: public Channel getChannel()
  description: Returns the audio channel used for playing the sound.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlaySound(PlaySoundSourceEvent event) {
        SoundEngine engine = event.getEngine();
        SoundInstance sound = event.getSound();
        System.out.println("Playing sound: " + sound.getName());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/sound/PlaySoundSourceEvent.java`

### PlayStreamingSourceEvent.BUS *(Client)*

**When**: When a streaming sound is being played on the client side, specifically for sounds that are streamed directly from their source (like background music or music discs).

**Cancellable**: No

**Fields**:
```yaml
- name: engine
  type: SoundEngine
  description: The sound engine responsible for playing the sound.
- name: sound
  type: SoundInstance
  description: The sound instance being played.
- name: channel
  type: Channel
  description: The audio channel through which the sound is being played.
```

**Methods**:
```yaml
- name: getEngine
  signature: SoundEngine getEngine()
  description: Returns the sound engine associated with this event.
- name: getSound
  signature: SoundInstance getSound()
  description: Returns the sound instance being played.
- name: getChannel
  signature: Channel getChannel()
  description: Returns the audio channel used for playing the sound.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlayStreamingSource(PlayStreamingSourceEvent event) {
        SoundEngine engine = event.getEngine();
        SoundInstance sound = event.getSound();
        System.out.println("Playing streaming sound: " + sound.getName());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/sound/PlayStreamingSourceEvent.java`

### RecipesUpdatedEvent.BUS *(Client)*

**When**: Fires when the ClientRecipeBook has updated recipe information from the server to the client.

**Cancellable**: No

**Fields**:
```yaml
- name: getRecipeBook
  type: ClientRecipeBook
  description: The recipe manager that has been updated with new recipe information.
```

**Methods**:
```yaml
- name: getRecipeBook
  signature: public ClientRecipeBook getRecipeBook()
  description: Returns the recipe manager that has been updated with new recipe information.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRecipesUpdated(RecipesUpdatedEvent event) {
        ClientRecipeBook recipeBook = event.getRecipeBook();
        // Perform actions with the updated recipe book
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RecipesUpdatedEvent.java`

### RegisterClientCommandsEvent.BUS *(Client)*

**When**: This event fires when the client is initializing its command dispatcher, allowing mods to register client-specific commands.

**Cancellable**: No

**Fields**:
```yaml
- name: getDispatcher
  type: CommandDispatcher<CommandSourceStack>
  description: The command dispatcher for the client, used to register commands that execute on the client side.
- name: getBuildContext
  type: CommandBuildContext
  description: The context used to build the command structure, providing access to command definitions and arguments.
```

**Methods**:
```yaml
- name: getDispatcher
  signature: public CommandDispatcher<CommandSourceStack> getDispatcher()
  description: Returns the command dispatcher for the client, allowing registration of client-side commands.
- name: getBuildContext
  signature: public CommandBuildContext getBuildContext()
  description: Returns the command build context, used to construct and define command structures.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterClientCommands(RegisterClientCommandsEvent event) {
        event.getDispatcher().register(literal("examplecmd").executes(context -> {
            context.getSource().sendFeedback(() -> Text.literal("Example command executed!"), false);
            return 1;
        }));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterClientCommandsEvent.java`

### RegisterClientReloadListenersEvent.getBus *(Client)*

**When**: This event fires once during the construction of the Minecraft instance on the client-side, allowing mods to register reload listeners for client-side resource management.

**Cancellable**: No

**Fields**:
```yaml
- name: resourceManager
  type: ReloadableResourceManager
  description: The client-side resource manager instance where reload listeners will be registered.
```

**Methods**:
```yaml
- name: registerReloadListener
  signature: public void registerReloadListener(PreparableReload,ReloadListener reloadListener)
  description: Registers the provided reload listener with the client-side resource manager.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterReloadListener(RegisterClientReloadListenersEvent event) {
        event.registerReloadListener(new ExampleReloadListener());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterClientReloadListenersEvent.java`

### RegisterClientTooltipComponentFactoriesEvent.getBus *(Client)*

**When**: This event fires during mod initialization on the client-side event bus, allowing registration of custom ClientTooltipComponent factories for TooltipComponent types.

**Cancellable**: No

**Fields**:
```yaml
- name: factories
  type: Map<Class<? extends TooltipComponent>, Function<TooltipComponent, ClientTooltipComponent>>
  description: A map of TooltipComponent types to their corresponding ClientTooltip, used to register custom tooltip component factories.
```

**Methods**:
```yaml
- name: register
  signature: <T extends TooltipComponent> void register(Class<T> type, Function<? super T, ? extends ClientTooltipComponent> factory)
  description: Registers a ClientTooltipComponent factory for a TooltipComponent type, allowing custom tooltip component creation.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onTooltipComponentRegister(RegisterClientTooltipComponentFactoriesEvent event) {
        event.register(MyTooltipComponent.class, MyTooltipComponent::create);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterClientTooltipComponentFactoriesEvent.java`

### RegisterColorHandlersEvent.getBus *(Client)*

**When**: This event fires during the mod initialization phase on the client-side event bus, specifically when registering block or item color handlers.

**Cancellable**: No

**Fields**:
```yaml
- name: blockColors
  type: BlockColors
  description: The block colors registry used for registering block color providers.
- name: builder
  type: ArrayList<ColorResolver>
  description: A list of color resolvers for block tinting operations.
```

**Methods**:
```yaml
- name: getBlockColors
  signature: public BlockColors getBlockColors()
  description: Returns the block colors registry for registering block color providers.
- name: register
  signature: public void register(BlockColor blockColor, net.minecraft.world.level.block.Block... blocks)
  description: Registers a block color provider for a set of blocks.
- name: register
  signature: public void register(ColorResolver resolver)
  description: Adds a color resolver to the list of resolvers for block tinting.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterBlockColors(RegisterColorHandlersEvent.Block event) {
        event.getBlockColors().register((state, pos, i) -> 0x00FF00, Blocks.DIRT);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterColorHandlersEvent.java`

### RegisterDimensionSpecialEffectsEvent.getBus *(Client)*

**When**: This event fires when registering custom DimensionSpecialEffects for dimensions on the client-side mod-specific event bus.

**Cancellable**: No

**Fields**:
```yaml
- name: effects
  type: Map<ResourceLocation, DimensionSpecialEffects>
  description: A map of dimension types to their special effects, used to register custom effects for dimensions.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ResourceLocation dimensionType, DimensionSpecialEffects effects)
  description: Registers a DimensionSpecialEffects for a specific dimension type in the effects map.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterDimensionSpecialEffects(RegisterDimensionSpecialEffectsEvent event) {
        event.register(new ResourceLocation("examplemod:custom_dimension"), new CustomDimensionSpecialEffects());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterDimensionSpecialEffectsEvent.java`

### RegisterEntitySpectatorShadersEvent.getBus *(Client)*

**When**: This event fires when the mod-specific event bus is initialized on the client side, allowing registration of custom shaders for entities that can be spectated.

**Cancellable**: No

**Fields**:
```yaml
- name: shaders
  type: Map<EntityType<?>, ResourceLocation>
  description: A map of entity types to their corresponding spectator shader resource locations. Modders can add entries to this map to register custom shaders.
```

**Methods**:
```yaml
- name: register
  signature: public void register(EntityType<?> entityType, ResourceLocation shader)
  description: Registers a spectator shader for a given entity type. Modders can use this method to associate an entity type with a custom shader.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterEntitySpectatorShaders(RegisterEntitySpectatorShadersEvent event) {
        event.register(EntityType.CREEPER, new ResourceLocation("examplemod:creamer_shader"));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterEntitySpectatorShadersEvent.java`

### RegisterGuiOverlaysEvent *(Client)*

**When**: This event fires during the mod loading phase on the client side, specifically when registering custom GUI overlays with the Forge rendering system.

**Cancellable**: No

**Fields**:
```yaml
- name: overlays
  type: Map<ResourceLocation, IGuiOverlay>
  description: A map of registered overlays where the key is a ResourceLocation (namespace:id) and the value is the IGuiOverlay instance.
- name: orderedOverlays
  type: List<ResourceLocation>
  description: A list of overlay resource locations in the order they will be rendered.
```

**Methods**:
```yaml
- name: registerBelowAll
  signature: void registerBelowAll(@NotNull String id, @NotNull IGuiOverlay overlay)
  description: Registers an overlay to render below all existing overlays.
- name: registerBelow
  signature: void registerBelow(@NotNull ResourceLocation other, @NotNull String id, @NotNull IGuiOverlay overlay)
  description: Registers an overlay to render below a specified existing overlay.
- name: registerAbove
  signature: void registerAbove(@NotNull ResourceLocation other, @NotNull String id, @NotNull IGuiOverlay overlay)
  description: Registers an overlay to render above a specified existing overlay.
- name: registerAboveAll
  signature: void registerAboveAll(@NotNull String id, @NotNull IGuiOverlay overlay)
  description: Registers an overlay to render above all existing overlays.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterGuiOverlays(RegisterGuiOverlaysEvent event) {
        event.registerAboveAll("example:debug_overlay", new DebugOverlay());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterGuiOverlaysEvent.java`

### RegisterItemDecorationsEvent.getBus *(Client)*

**When**: When the mod-specific event bus is initialized on the client side, allowing registration of custom item decorators for items.

**Cancellable**: No

**Fields**:
```yaml
- name: decorators
  type: Map<Item, List<IItemDecorator>>
  description: A map of items to their associated item decorators, used to register and manage custom decorations.
```

**Methods**:
```yaml
- name: register
  signature: void register(ItemLike itemLike, IItemDecorator decorator)
  description: Registers an item decorator with a specific item, adding it to the internal map of decorators.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterItemDecorations(RegisterItemDecorationsEvent event) {
        event.register(Items.DIAMOND, new ExampleItemDecorator());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterItemDecorationsEvent.java`

### RegisterKeyMappingsEvent.getBus *(Client)*

**When**: When the mod-specific event bus is initialized on the client side, allowing registration of custom key mappings.

**Cancellable**: No

**Fields**:
```yaml
- name: options
  type: Options
  description: The Options object containing the key mappings for the current client.
```

**Methods**:
```yaml
- name: register
  signature: public void register(KeyMapping key)
  description: Registers a new key mapping with the Options object.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onKeyRegister(RegisterKeyMappingsEvent event) {
        event.register(new KeyMapping("key.example.mod", Keyboard.KEY_Q, "Example Mod Key"));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterKeyMappingsEvent.java`

### RegisterNamedRenderTypesEvent.getBus *(Client)*

**When**: This event fires during the client initialization phase, specifically when registering custom named render types for blocks and entities.

**Cancellable**: No

**Fields**:
```yaml
- name: renderTypes
  type: Map<ResourceLocation, RenderTypeGroup>
  description: A map of registered render types where keys are ResourceLocation names and values are RenderTypeGroup objects containing block, entity, and fabulous entity render types.
```

**Methods**:
```yaml
- name: register
  signature: public void register(String name, ChunkSectionLayer blockRenderType, RenderType entityRenderType)
  description: Registers a named render type with block and entity render types. The fabulous entity render type is the same as the entity render type by default.
- name: register
  signature: public void register(String name, ChunkSectionLayer blockRenderType, RenderType entityRenderType, RenderType fabulousEntityRenderType)
  description: Registers a named render type with block, entity, and separate fabulous entity render types.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterRenderTypes(RegisterNamedRenderTypesEvent event) {
        event.register("example_block_render_type",
            ChunkSectionLayer.SOLID,
            RenderType.solid());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterNamedRenderTypesEvent.java`

### RegisterParticleProvidersEvent.getBus *(Client)*

**When**: This event fires during the client initialization phase, specifically when registering particle providers for custom particle types.

**Cancellable**: No

**Fields**:
```yaml
- name: particleEngine
  type: ParticleEngine
  description: The particle engine instance used to register particle providers for different particle types.
```

**Methods**:
```yaml
- name: registerSpecial
  signature: <T extends ParticleOptions> void registerSpecial(ParticleType<T> type, ParticleProvider<T> provider)
  description: Registers a ParticleProvider for a non-json-based ParticleType, which doesn't use texture sprites.
- name: registerSprite
  signature: <T extends ParticleOptions> void registerSprite(ParticleType<T> type, ParticleProvider.Sprite<T> sprite)
  description: Registers a ParticleProvider for a json-based ParticleType with a single texture, used by TextureSheetParticle.
- name: registerSpriteSet
  signature: <T extends ParticleOptions> void registerSpriteSet(ParticleType<T> type, ParticleEngine.SpriteParticleRegistration<T> registration)
  description: Registers a ParticleProvider for a json-based ParticleType that uses a list of texture sprites for rendering.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterParticleProviders(RegisterParticleProvidersEvent event) {
        event.registerSpecial(MyParticleType.INSTANCE, MyParticleProvider::new);
        event.registerSprite(MySpriteParticleType.INSTANCE, MySpriteProvider::new);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterParticleProvidersEvent.java`

### RegisterPictureInPictureRendererEvent *(Client)*

**When**: Fired at the beginning of the loading screen when starting Minecraft, specifically during the client-side initialization phase.

**Cancellable**: No

**Fields**:
```yaml
- name: renderers
  type: List<PictureInPictureRenderer<?>>
  description: List of existing picture-in-picture renderers that are already registered.
- name: bufferSource
  type: MultiBufferSource.BufferSource
  description: The buffer source used for rendering operations in picture-in-picture mode.
- name: builder
  type: ImmutableMap.Builder<Class<? extends PictureInPictureRenderState>, PictureInPictureRenderer<?>>
  description: Builder for creating an immutable map of render state classes to their corresponding picture-in-picture renderers.
```

**Methods**:
```yaml
- name: getBufferSource
  signature: public MultiBufferSource.BufferSource getBufferSource()
  description: Returns the buffer source used for rendering operations in picture-in-picture mode.
- name: register
  signature: public void register(PictureInPictureRenderer<?> renderer)
  description: Registers a new picture-in-picture renderer with the event, adding it to the builder map if it's not already present.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterPictureInPictureRenderer(RegisterPictureInPictureRendererEvent event) {
        event.register(new CustomPictureInPictureRenderer());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterPictureInPictureRendererEvent.java`

### RegisterPictureInPictureRendererEvent.BUS *(Client)*

**When**: This event fires at the beginning of the loading screen when starting Minecraft, specifically during the client-side initialization phase.

**Cancellable**: No

**Fields**:
```yaml
- name: renderers
  type: List<PictureInPictureRenderer<?>>
  description: A list of existing picture-in-picture renderers that are already registered. Modders can inspect this to understand the current state of registered renderers.
- name: bufferSource
  type: MultiBufferSource.BufferSource
  description: The buffer source used for rendering operations. This can be used to access rendering resources during the event handling.
- name: builder
  type: ImmutableMap.Builder<Class<? extends PictureInPictureRenderState>, PictureInPictureRenderer<?>>
  description: A builder for creating an immutable map of render state classes to their corresponding renderers. This is used to register new renderers.
```

**Methods**:
```yaml
- name: getBufferSource
  signature: public MultiBufferSource.BufferSource getBufferSource()
  description: Returns the buffer source used for rendering operations.
- name: register
  signature: public void register(PictureInPictureRenderer<?> renderer)
  description: Registers a new picture-in-picture renderer with the event. This method adds the renderer to the internal map builder.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterPictureInPictureRenderer(RegisterPictureInPictureRendererEvent event) {
        event.register(new CustomPictureInPictureRenderer());
        System.out.println("Registered renderers: " + event.renderers.size());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterPictureInPictureRendererEvent.java`

### RegisterPresetEditorsEvent.getBus *(Client)*

**When**: When a mod registers a PresetEditor for a world preset on the client-side event bus.

**Cancellable**: No

**Fields**:
```yaml
- name: editors
  type: Map<ResourceKey<WorldPreset>, PresetEditor>
  description: A map of world preset keys to their corresponding PresetEditor instances. Modders use this to register and override editors.
```

**Methods**:
```yaml
- name: register
  signature: void register(ResourceKey<WorldPreset> key, PresetEditor editor)
  description: Registers a PresetEditor for a specific world preset key. If an editor already exists for the key, it logs a debug message indicating the override.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterPresetEditors(RegisterPresetEditorsEvent event) {
        event.register(ResourceKey.create(ResourceKey.create("example:my_preset"), PresetEditor::new);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterPresetEditorsEvent.java`

### RegisterTextureAtlasSpriteLoadersEvent.getBus *(Client)*

**When**: This event fires on the mod-specific event bus, only on the logical client side, allowing users to register custom texture atlas sprite loaders.

**Cancellable**: No

**Fields**:
```yaml
- name: loaders
  type: BiMap<ResourceLocation, ITextureAtlasSpriteLoader>
  description: A bidirectional map of resource locations to texture atlas sprite loaders, used to register and manage custom loaders.
```

**Methods**:
```yaml
- name: register
  signature: public void register(String name, ITextureAtlasSpriteLoader loader)
  description: Registers a custom texture atlas sprite loader with the given name and loader instance.
- name: getBus
  signature: public static EventBus<RegisterTextureAtlasSpriteLoadersEvent> getBus(BusGroup modBusGroup)
  description: Returns the event bus for this event type, used to register event handlers.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterTextureAtlasSpriteLoaders(RegisterTextureAtlasSpriteLoadersEvent event) {
        event.register("custom_loader", new CustomTextureAtlasSpriteLoader());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RegisterTextureAtlasSpriteLoadersEvent.java`

### RenderArmEvent.BUS *(Client)*

**When**: Fired before the player's arm is rendered in first person, allowing modders to replace or modify the arm rendering.

**Cancellable**: Yes

**Fields**:
```yaml
- name: getPoseStack
  type: PoseStack
  description: The pose stack used for rendering the arm
- name: getMultiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers for the arm
- name: getPackedLight
  type: int
  description: The packed light value for rendering (combines sky and block light)
- name: getArm
  type: HumanoidArm
  description: The arm being rendered (left or right)
```

**Methods**:
```yaml
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the packed light value used for rendering
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRenderArm(RenderArmEvent event) {
        if (event.isCanceled()) return;
        event.getPoseStack().pushPose();
        // Custom rendering code here
        event.getPoseStack().popPose();
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderArmEvent.java`

### RenderBlockScreenEffectEvent.BUS *(Client)*

**When**: This event fires before a block texture is overlaid on the player's view during rendering, specifically for block overlays like fire, suffocation, or underwater effects.

**Cancellable**: Yes

**Fields**:
```yaml
- name: getPlayer
  type: Player
  description: The player entity that the overlay effect is being applied to.
- name: getPoseStack
  type: PoseStack
  description: The pose stack used for rendering the overlay effect.
- name: getOverlayType
  type: OverlayType
  description: The type of overlay being rendered (FIRE, BLOCK, or WATER).
- name: getBlockState
  type: BlockState
  description: The block state that the overlay is derived from.
- name: getBlockPos
  type: BlockPos
  description: The position of the block that the overlay is derived from.
```

**Methods**:
```yaml
- name: isCanceled
  signature: boolean isCanceled()
  description: Checks if the event has been canceled, preventing the overlay from being rendered.
- name: setCanceled
  signature: void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, allowing modders to prevent the overlay from being rendered.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRenderBlockScreenEffect(RenderBlockScreenEffectEvent event) {
        if (event.getOverlayType() == OverlayType.FIRE) {
            event.setCanceled(true);
            // Additional custom rendering logic here
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderBlockScreenEffectEvent.java`

### RenderHandEvent.BUS *(Client)*

**When**: Fired before a hand is rendered in the first person view.

**Cancellable**: Yes

**Fields**:
```yaml
- name: getHand
  type: InteractionHand
  description: The hand being rendered (LEFT or RIGHT)
- name: getPoseStack
  type: PoseStack
  description: The pose stack used for rendering
- name: getMultiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers
- name: getPackedLight
  type: int
  description: The amount of packed (sky and block) light for rendering
- name: getPartialTick
  type: float
  description: The partial tick for interpolation
- name: getInterpolatedPitch
  type: float
  description: The interpolated pitch of the player entity
- name: getSwingProgress
  type: float
  description: The swing progress of the hand being rendered
- name: getEquipProgress
  type: float
  description: The progress of the equip animation, from 0.0 to 1.0
- name: getItemStack
  type: ItemStack
  description: The item stack to be rendered
```

**Methods**:
```yaml
- name: getPackedLight
  signature: int getPackedLight()
  description: Returns the amount of packed (sky and block) light for rendering
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRenderHand(RenderHandEvent event) {
        if (event.isCanceled()) return;
        event.getPoseStack().pushPose();
        // Custom rendering code here
        event.getPoseStack().popPose();
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderHandEvent.java`

### RenderHighlightEvent.BUS *(Client)*

**When**: Fires before a selection highlight is rendered, specifically for blocks or entities based on the subclass.

**Cancellable**: Yes

**Fields**:
```yaml
- name: levelRenderer
  type: LevelRenderer
  description: The level renderer used for rendering the highlight.
- name: camera
  type: Camera
  description: The camera information for the current view.
- name: target
  type: HitResult
  description: The hit result which triggered the selection highlight.
- name: partialTick
  type: float
  description: The partial tick value for interpolation.
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering.
- name: multiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers.
```

**Methods**:
```yaml
- name: getLevelRenderer
  signature: public LevelRenderer getLevelRenderer()
  description: Returns the level renderer.
- name: getCamera
  signature: public Camera getCamera()
  description: Returns the camera information.
- name: getTarget
  signature: public HitResult getTarget()
  description: Returns the hit result which triggered the selection highlight.
- name: getPartialTick
  signature: public float getPartialTick()
  description: Returns the partial tick value for interpolation.
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering.
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the source of rendering buffers.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRenderHighlight(RenderHighlightEvent event) {
        if (event.getTarget() instanceof BlockHitResult) {
            event.setCanceled(true);
            // Custom highlight logic here
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderHighlightEvent.java`

### RenderItemInFrameEvent.BUS *(Client)*

**When**: This event fires before an item stack is rendered in an item frame, allowing modders to customize or prevent the rendering.

**Cancellable**: Yes

**Fields**:
```yaml
- name: getItemFrameState
  type: ItemFrameRenderState
  description: The item frame entity state used for rendering
- name: getRenderer
  type: ItemFrameRenderer<?>
  description: The renderer for the item frame entity
- name: getPoseStack
  type: PoseStack
  description: The pose stack used for rendering operations
- name: getMultiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers for the item frame
- name: getPackedLight
  type: int
  description: The amount of packed (sky and block) light for rendering
```

**Methods**:
```yaml
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the packed light value used for rendering
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRenderItemInFrame(RenderItemInFrameEvent event) {
        if (event.isCanceled()) return;
        // Custom rendering logic here
        event.setCanceled(true); // Cancel rendering
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderItemInFrameEvent.java`

### RenderLivingEvent.BUS *(Client)*

**When**: The RenderLivingEvent.BUS fires when a LivingEntity is being rendered, specifically before and after the entity is rendered, with Pre and Post subclasses handling the respective stages.

**Cancellable**: Unknown

**Fields**:
```yaml
- name: state
  type: LivingEntityRenderState
  description: The render state containing information about the entity's rendering context.
- name: renderer
  type: LivingEntityRenderer
  description: The renderer responsible for rendering the living entity.
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering transformations.
- name: multiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers for the entity.
- name: packedLight
  type: int
  description: The packed light value used for rendering, combining sky and block light.
```

**Methods**:
```yaml
- name: getState
  signature: public S getState()
  description: Returns the living entity's render state.
- name: getRenderer
  signature: public LivingEntityRenderer<T, S, M> getRenderer()
  description: Returns the renderer for the living entity.
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering.
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the source of rendering buffers.
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the packed light value for rendering.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRenderLiving(RenderLivingEvent.Pre event) {
        if (event.isCanceled()) return;
        // Modify rendering state here
        event.getRenderer().render(event.getState(), event.getPoseStack(), event.getMultiBufferSource(), event.getPackedLight());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderLivingEvent.java`

### RenderNameTagEvent *(Client)*

**When**: (summary failed: parsing error)

**Cancellable**: Unknown

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
# none detected
```

**Example**:
```java
// Example generation failed for RenderNameTagEvent due to parsing error.
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderNameTagEvent.java`

### RenderNameTagEvent.BUS *(Client)*

**When**: (summary failed: parsing error)

**Cancellable**: Unknown

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
# none detected
```

**Example**:
```java
// Example generation failed for RenderNameTagEvent.BUS due to parsing error.
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderNameTagEvent.java`

### RenderPlayerEvent.BUS *(Client)*

**When**: Fired during the player rendering process, specifically before and after the player is rendered by the PlayerRenderer.

**Cancellable**: Unknown

**Fields**:
```yaml
- name: state
  type: PlayerRenderState
  description: The render state containing player-specific rendering data.
- name: renderer
  type: PlayerRenderer
  description: The PlayerRenderer instance responsible for rendering the player.
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering transformations.
- name: multiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers for the player.
- name: packedLight
  type: int
  description: Packed light value for rendering (sky and block light).
```

**Methods**:
```yaml
- name: getState
  signature: public PlayerRenderState getState()
  description: Returns the PlayerRenderState object containing rendering data.
- name: getRenderer
  signature: public PlayerRenderer getRenderer()
  description: Returns the PlayerRenderer instance used for rendering.
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the PoseStack used for rendering transformations.
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the MultiBufferSource providing rendering buffers.
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the packed light value for rendering.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPreRenderPlayer(RenderPlayerEvent.Pre event) {
        if (event.isCanceled()) return;
        // Modify rendering state or add custom effects
        event.getPoseStack().pushPose();
        // ... custom rendering code ...
        event.getPoseStack().popPose();
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderPlayerEvent.java`

### RenderTooltipEvent.BUS *(Client)*

**When**: 2023-10-15T12:34:56.789Z

**Cancellable**: true

**Fields**:
```yaml
- name: itemStack
  type: ItemStack
  description: The item stack for which the tooltip is being rendered.
- name: screenWidth
  type: int
  description: The width of the screen, used for wrapping text within the tooltip.
- name: screenHeight
  type: int
  description: The height of the screen, used for positioning the tooltip within the screen bounds.
- name: tooltipElements
  type: List<Either<FormattedText, TooltipComponent>>
  description: The list of elements to be rendered on the tooltip, which can be either formatted text or custom tooltip components.
- name: maxWidth
  type: int
  description: The maximum width of the tooltip when being rendered. A value of -1 means unlimited maximum width.
```

**Methods**:
```yaml
- name: setMaxWidth
  signature: public void setMaxWidth(int maxWidth)
  description: Sets the maximum width of the tooltip. Use -1 for unlimited maximum width.
```

**Example**:
```java
To modify the maximum width of the tooltip, you can use the following code:

```java
GatherComponents event = new GatherComponents(...);
event.setMaxWidth(200);
```
```

*Source*: `src/main/java/net/minecraftforge/client/event/RenderTooltipEvent.java`

### ScreenEvent.BUS *(Client)*

**When**: 2023-04-10T12:34:56.789Z

**Cancellable**: true

**Fields**:
```yaml
- name: currentScreen
  type: Screen
  description: The currently open screen at the time of the event being fired. May be null if no screen was open.
- name: newScreen
  type: Screen
  description: The screen that will be opened if the event is not cancelled. May be null.
```

**Methods**:
```yaml
- name: getCurrentScreen
  signature: public Screen getCurrentScreen()
  description: Gets the currently open screen at the time of the event being fired.
- name: getNewScreen
  signature: public Screen getNewScreen()
  description: Returns the screen that will be opened if the event is not cancelled.
- name: setNewScreen
  signature: public void setNewScreen(Screen newScreen)
  description: Sets the new screen to be opened if the event is not cancelled.
```

**Example**:
```java
if (event.isCanceled()) {
    // Prevent the screen from opening
    return;
}

// Change the screen to open
event.setNewScreen(new MyScreen());
```

*Source*: `src/main/java/net/minecraftforge/client/event/ScreenEvent.java`

### ScreenshotEvent *(Client)*

**When**: Fires when a screenshot is taken, but before it is written to disk.

**Cancellable**: Yes

**Fields**:
```yaml
- name: image
  type: NativeImage
  description: The in-memory image of the screenshot
- name: screenshotFile
  type: File
  description: The file where the screenshot will be saved to
- name: resultMessage
  type: Component
  description: The custom cancellation message, or null if no custom message is set
```

**Methods**:
```yaml
- name: getImage
  signature: public NativeImage getImage()
  description: Returns the in-memory image of the screenshot
- name: getScreenshotFile
  signature: public File getScreenshotFile()
  description: Returns the file where the screenshot will be saved to
- name: setScreenshotFile
  signature: public void setScreenshotFile(File screenshotFile)
  description: Sets the new file where the screenshot will be saved to
- name: getResultMessage
  signature: public @Nullable Component getResultMessage()
  description: Returns the custom cancellation message, or null if no custom message is set
- name: setResultMessage
  signature: public void setResultMessage(Component resultMessage)
  description: Sets the new custom cancellation message used to inform the player
- name: getCancelMessage
  signature: public Component getCancelMessage()
  description: Returns the cancellation message to be used in informing the player
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onScreenshot(ScreenshotEvent event) {
        if (event.isCanceled()) {
            System.out.println("Screenshot canceled: " + event.getCancelMessage());
            return;
        }
        // Modify screenshot file location
        event.setScreenshotFile(new File("/custom/screenshots/" + event.getScreenshotFile().getName()));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ScreenshotEvent.java`

### ScreenshotEvent.BUS *(Client)*

**When**: Fires when a screenshot is taken, but before it is written to disk.

**Cancellable**: Yes

**Fields**:
```yaml
- name: image
  type: NativeImage
  description: The in-memory image of the screenshot
- name: screenshotFile
  type: File
  description: The file where the screenshot will be saved to
- name: resultMessage
  type: Component
  description: The custom cancellation message, or null if no custom message is set
```

**Methods**:
```yaml
- name: getImage
  signature: public NativeImage getImage()
  description: Returns the in-memory image of the screenshot
- name: getScreenshotFile
  signature: public File getScreenshotFile()
  description: Returns the file where the screenshot will be saved to
- name: setScreenshotFile
  signature: public void setScreenshotFile(File screenshotFile)
  description: Sets the new file where the screenshot will be saved to
- name: getResultMessage
  signature: public @Nullable Component getResultMessage()
  description: Returns the custom cancellation message, or null if no custom message is set
- name: setResultMessage
  signature: public void setResultMessage(Component resultMessage)
  description: Sets the new custom cancellation message used to inform the player
- name: getCancelMessage
  signature: public Component getCancelMessage()
  description: Returns the cancellation message to be used in informing the player
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onScreenshot(ScreenshotEvent event) {
        if (event.isCanceled()) {
            System.out.println("Screenshot canceled: " + event.getCancelMessage());
            return;
        }
        // Modify screenshot file location
        event.setScreenshotFile(new File("/custom/screenshots/" + event.getScreenshotFile().getName()));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ScreenshotEvent.java`

### SoundEngineLoadEvent.getBus *(Client)*

**When**: Fires when the SoundEngine is constructed or (re)loaded, such as during game initialization or when the sound output device is changed.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: getBus
  signature: public static EventBus<SoundEngineLoadEvent> getBus(BusGroup modBusGroup)
  description: Returns the event bus for SoundEngineLoadEvent, used to register event handlers.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSoundEngineLoad(SoundEngineLoadEvent event) {
        // Example usage of event
        SoundEngine manager = event.getManager();
        // Register sound handlers or modify sound engine behavior
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/sound/SoundEngineLoadEvent.java`

### SoundEvent.BUS *(Client)*

**When**: The SoundEvent.BUS event fires when a sound is about to be played on an audio channel, specifically for sound source events on the client side.

**Cancellable**: No

**Fields**:
```yaml
- name: engine
  type: SoundEngine
  description: The sound engine that is playing the sound
- name: sound
  type: SoundInstance
  description: The sound instance that is being played
- name: channel
  type: Channel
  description: The audio channel on which the sound is playing
- name: name
  type: String
  description: The name of the sound being played, equivalent to the path of the sound location
```

**Methods**:
```yaml
- name: getEngine
  signature: public SoundEngine getEngine()
  description: Returns the sound engine that is playing the sound
- name: getSound
  signature: public SoundInstance getSound()
  description: Returns the sound instance that is being played
- name: getChannel
  signature: public Channel getChannel()
  description: Returns the audio channel on which the sound is playing
- name: getName
  signature: public String getName()
  description: Returns the name of the sound being played, equivalent to the path of the sound location
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSoundPlay(SoundSourceEvent event) {
        System.out.println("Playing sound: " + event.getName());
        System.out.println("On channel: " + event.getChannel());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/sound/SoundEvent.java`

### SystemMessageReceivedEvent *(Client)*

**When**: Fires when a system message is received on the client side, such as when the game displays a chat message from the system (like warnings, notifications, or status updates).

**Cancellable**: Yes

**Fields**:
```yaml
- name: message
  type: Component
  description: The message that will be displayed in the chat message window if the event is not cancelled.
- name: overlay
  type: boolean
  description: Whether the message goes to the overlay (e.g., for HUD messages).
```

**Methods**:
```yaml
- name: isOverlay
  signature: public boolean isOverlay()
  description: Returns whether the message goes to the overlay.
- name: getMessage
  signature: public Component getMessage()
  description: Returns the message that will be displayed in the chat message window, if the event is not cancelled.
- name: setMessage
  signature: public void setMessage(Component message)
  description: Sets the new message to be displayed in the chat message window, if the event is not cancelled.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSystemMessage(SystemMessageReceivedEvent event) {
        if (event.isOverlay()) {
            event.setMessage(Component.literal("Custom Overlay Message"));
        }
        if (event.getMessage().getString().contains("error")) {
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/SystemMessageReceivedEvent.java`

### SystemMessageReceivedEvent.BUS *(Client)*

**When**: Fires when a system message is received on the client side, such as chat messages from the game or mods.

**Cancellable**: Yes

**Fields**:
```yaml
- name: message
  type: Component
  description: The message that will be displayed in the chat message window if the event is not cancelled.
- name: overlay
  type: boolean
  description: Whether the message goes to the overlay (e.g., for HUD messages).
```

**Methods**:
```yaml
- name: isOverlay
  signature: public boolean isOverlay()
  description: Returns whether the message goes to the overlay.
- name: getMessage
  signature: public Component getMessage()
  description: Returns the message that will be displayed in the chat message window if the event is not cancelled.
- name: setMessage
  signature: public void setMessage(Component message)
  description: Sets the new message to be displayed in the chat message window, if the event is not cancelled.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSystemMessage(SystemMessageReceivedEvent event) {
        if (event.isOverlay()) {
            event.setMessage(Component.literal("[MOD] Overlay Message"));
        }
        if (event.getMessage().getString().contains("error")) {
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/SystemMessageReceivedEvent.java`

### ToastAddEvent.BUS *(Client)*

**When**: When the client queues a Toast message to be shown onscreen, typically for actions like unlocking Advancements or Recipes.

**Cancellable**: Yes

**Fields**:
```yaml
- name: getToast
  type: Toast
  description: The Toast object that is being queued for display. Modders can access and modify this Toast instance.
```

**Methods**:
```yaml
- name: isCanceled
  signature: boolean isCanceled()
  description: Checks if the event has been canceled, preventing the toast from being queued.
- name: setCanceled
  signature: void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, which can be used to prevent the toast from being queued.
```

**Example**:
```java
@Mod("toastmod")
public class ToastMod {
    @SubscribeEvent
    public void onToastAdd(ToastAddEvent event) {
        if (event.getToast().getMessage().get().getVisualinedText().get().getFormattedText().equals("Unlocked Recipe")) {
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/client/event/ToastAddEvent.java`

### ViewportEvent.BUS *(Client)*

**When**: 2023-10-15T12:34:17.000Z

**Cancellable**: false

**Fields**:
```yaml
- name: gameRenderer
  type: net.minecraft.client.renderer.GameRenderer
  description: The GameRenderer instance responsible for rendering the game.
- name: camera
  type: net.minecraft.client.Camera
  description: The Camera object representing the player's current view.
```

**Methods**:
```yaml
- name: setFarPlaneDistance
  signature: (F)V
  description: Sets the distance to the far plane of the fog.
- name: setNearPlaneDistance
  signature: (F)V
  description: Sets the distance to the near plane of the fog.
- name: scaleFarPlaneDistance
  signature: (F)V
  description: Scales the distance to the far plane of the fog by a given factor.
- name: scaleNearPlaneDistance
  signature: (F)V
  description: Scales the distance to the near plane of the fog by a given factor.
- name: setRed
  signature: (F)V
  description: Sets the new red color value of the fog.
- name: setGreen
  signature: (F)V
  description: Sets the new green color value of the fog.
- name: setBlue
  signature: (F)V
  description: Sets the new blue color value of the fog.
- name: setYaw
  signature: (F)V
  description: Sets the yaw of the player's camera.
- name: setPitch
  signature: (F)V
  description: Sets the pitch of the player's camera.
- name: setRoll
  signature: (F)V
  description: Sets the roll of the player's camera.
- name: setFOV
  signature: (F)V
  description: Sets the field of view value.
```

**Example**:
```java
event.setFarPlaneDistance(10.0f); // Adjusts the far plane distance of the fog.
```

*Source*: `src/main/java/net/minecraftforge/client/event/ViewportEvent.java`


## Common

### RegisterCapabilitiesEvent.getBus *(Common)*

**When**: This event fires during the mod loading phase when registering capabilities for use by other mods.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: getBus
  signature: public static EventBus<RegisterCapabilitiesEvent> getBus(BusGroup modBusGroup)
  description: Returns the event bus for this event type, used to register event handlers.
- name: register
  signature: public <T> void register(Class<T> type)
  description: Registers a capability type with the capability manager, allowing other mods to consume it.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterCapabilities(RegisterCapabilitiesEvent event) {
        event.register(MyCapability.class);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/common/capabilities/RegisterCapabilitiesEvent.java`


## Data

### GatherDataEvent.getBus *(Common)*

**When**: This event fires during the data gathering phase of the mod loading process, specifically when generating data for the DataGenerator.

**Cancellable**: No

**Fields**:
```yaml
- name: dataGenerator
  type: DataGenerator
  description: The DataGenerator instance used to generate data for the mod.
- name: config
  type: DataGeneratorConfig
  description: Configuration settings for the DataGenerator, including input paths and output options.
- name: existingFileHelper
  type: ExistingFileHelper
  description: Helper for managing existing files during data generation.
- name: modContainer
  type: ModContainer
  description: The mod container representing the mod that this event belongs to.
```

**Methods**:
```yaml
- name: getModContainer
  signature: public ModContainer getModContainer()
  description: Returns the ModContainer for the mod associated with this event.
- name: getInputs
  signature: public Collection<Path> getInputs()
  description: Returns the collection of input paths used by the DataGenerator.
- name: getGenerator
  signature: public DataGenerator getGenerator()
  description: Returns the DataGenerator instance associated with this event.
- name: getExistingFileHelper
  signature: public ExistingFileHelper getExistingFileHelper()
  description: Returns the ExistingFileHelper used for managing existing files.
- name: getLookupProvider
  signature: public CompletableFuture<HolderLookup.Provider> getLookupProvider()
  description: Returns the CompletableFuture for the HolderLookup.Provider used in data generation.
- name: includeServer
  signature: public boolean includeServer()
  description: Checks if server data generation is included.
- name: includeClient
  signature: public boolean includeClient()
  description: Checks if client data generation is included.
- name: includeDev
  signature: public boolean includeDev()
  description: Checks if development data generation is included.
- name: includeReports
  signature: public boolean includeReports()
  description: Checks if reports data generation is included.
- name: validate
  signature: public boolean validate()
  description: Deprecated method to check validation status.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onGatherData(GatherDataEvent event) {
        ModContainer mod = event.getModContainer();
        DataGenerator generator = event.getGenerator();
        // Use generator to create data files
        // Example: generator.addProvider(...);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/data/event/GatherDataEvent.java`


## Debug

### LivingMakeBrainEventTest *(Common)*

**When**: This event fires when a living entity's brain is being initialized or modified, specifically when the entity's AI behavior tree is being built.

**Cancellable**: No

**Fields**:
```yaml
- name: entity
  type: LivingEntity
  description: The living entity whose brain is being initialized or modified.
- name: brain
  type: Brain
  description: The brain object being built for the entity.
```

**Methods**:
```yaml
- name: getEntity
  signature: LivingEntity getEntity()
  description: Returns the living entity associated with this event.
- name: getBrain
  signature: Brain getBrain()
  description: Returns the brain object being built for the entity.
- name: getTypedBrainBuilder
  signature: BrainBuilder<T> getTypedBrainBuilder(T entity)
  description: Returns a typed BrainBuilder for the entity, allowing modification of the behavior tree.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onMakeBrain(LivingMakeBrainEvent event) {
        if (event.getEntity() instanceof Piglin piglin) {
            BrainBuilder<Piglin> builder = event.getTypedBrainBuilder(piglin);
            builder.addBehaviorToActivityByPriority(0, Activity.CORE, new Swim(0.8F));
        }
    }
}
```

*Source*: `src/test_old/java/net/minecraftforge/debug/entity/living/LivingMakeBrainEventTest.java`


## Event

### AddPackFindersEvent.getBus *(Common)*

**When**: This event fires when a PackRepository is being created, allowing mods to add new pack finders.

**Cancellable**: No

**Fields**:
```yaml
- name: packType
  type: PackType
  description: The PackType of the pack repository being constructed.
- name: sources
  type: Consumer<RepositorySource>
  description: A consumer used to add RepositorySource instances to the pack finders.
```

**Methods**:
```yaml
- name: addRepositorySource
  signature: public void addRepositorySource(RepositorySource source)
  description: Adds a new source to the list of pack finders.
- name: getPackType
  signature: public PackType getPackType()
  description: Returns the PackType of the pack repository being constructed.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAddPackFinders(AddPackFindersEvent event) {
        if (event.getPackType() == PackType.SERVER_DATA) {
            event.addRepositorySource(new MyRepositorySource());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/AddPackFindersEvent.java`

### AddReloadListenerEvent *(Common)*

**When**: This event fires during server reloads, specifically after the ReloadableServerResources are created but before the ResourceManager is recreated, allowing modders to add custom ReloadListeners for server-side resources.

**Cancellable**: No

**Fields**:
```yaml
- name: serverResources
  type: ReloadableServerResources
  description: The ReloadableServerResources instance being reloaded, providing access to server-side reload context.
- name: registries
  type: HolderLookup.Provider
  description: Provides access to the registries with updated tags during the current reload.
- name: registryAccess
  type: RegistryAccess
  description: Deprecated access to registry access context for the current reload (use getRegistries() instead).
```

**Methods**:
```yaml
- name: addListener
  signature: void addListener(PreparableReloadListener listener)
  description: Adds a custom ReloadListener to the ResourceManager that will be executed during server reloads.
- name: getListeners
  signature: List<PreparableReloadListener> getListeners()
  description: Returns an immutable list of all ReloadListeners added to the ResourceManager.
- name: getServerResources
  signature: ReloadableServerResources getServerResources()
  description: Returns the ReloadableServerResources instance being reloaded.
- name: getConditionContext
  signature: ICondition.IContext getConditionContext()
  description: Returns the condition context for the currently active reload, useful for conditional resource loading.
- name: getRegistries
  signature: HolderLookup.Provider getRegistries()
  description: Returns the HolderLookup.Provider containing the registries with updated tags during the current reload.
- name: getRegistryAccess
  signature: RegistryAccess getRegistryAccess()
  description: Deprecated method providing access to registry access context for the current reload (use getRegistries() instead).
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onReload(AddReloadListenerEvent event) {
        event.addListener(new PreparableReloadListener() {
            @Override
            public CompletableFuture<Void> reload(PreparationBarrier stage, ResourceManager manager, Executor background, Executor game) {
                // Custom reload logic here
                return CompletableFuture.completedFuture(null);
            }
            @Override
            public String getName() {
                return "example_reload_listener";
            }
        });
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/AddReloadListenerEvent.java`

### AddReloadListenerEvent.BUS *(Common)*

**When**: This event fires during server reloads, specifically after the ReloadableServerResources are created but before the ResourceManager is fully initialized.

**Cancellable**: No

**Fields**:
```yaml
- name: serverResources
  type: ReloadableServerResources
  description: The server resources being reloaded, providing access to reload context and condition data.
- name: registries
  type: HolderLookup.Provider
  description: Provides access to the registries with updated tags during the reload process.
- name: registryAccess
  type: RegistryAccess
  description: Deprecated access to registry data, use getRegistries() instead.
```

**Methods**:
```yaml
- name: addListener
  signature: void addListener(PreparableReloadListener listener)
  description: Adds a custom reload listener to the ResourceManager for server-side resources.
- name: getListeners
  signature: List<PreparableReloadListener> getListeners()
  description: Returns an immutable list of all reload listeners registered with this event.
- name: getServerResources
  signature: ReloadableServerResources getServerResources()
  description: Returns the ReloadableServerResources object associated with the current reload.
- name: getConditionContext
  signature: ICondition.IContext getConditionContext()
  description: Returns the condition context for the currently active reload, useful for conditional resource loading.
- name: getRegistries
  signature: HolderLookup.Provider getRegistries()
  description: Returns the HolderLookup.Provider containing the registries with updated tags during the reload.
- name: getRegistryAccess
  signature: RegistryAccess getRegistryAccess()
  description: Deprecated method providing access to registry data. Use getRegistries() instead.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onReload(AddReloadListenerEvent event) {
        event.addListener(new MyReloadListener());
        System.out.println("Reload listeners: " + event.getListeners().size());
    }
}

public class MyReloadListener implements PreparableReloadListener {
    @Override
    public CompletableFuture<Void> reload(PreparationBarrier stage, ResourceManager manager, Executor background, Executor game) {
        // Custom reload logic here
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public String getName() {
        return "example_reload_listener";
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/AddReloadListenerEvent.java`

### AdvancementEvent.BUS *(Common)*

**When**: The event fires when a player's progress on an advancement criterion is granted or revoked, specifically when the advancement progress changes due to a criterion being met or removed.

**Cancellable**: No

**Fields**:
```yaml
- name: advancement
  type: AdvancementHolder
  description: The advancement that was progressed or revoked, representing the advancement and its holder.
- name: advancementProgress
  type: AdvancementProgress
  description: The current progress of the advancement, indicating which criteria have been met.
- name: criterionName
  type: String
  description: The name of the specific criterion that was progressed or revoked.
- name: progressType
  type: ProgressType
  description: Indicates whether the progress was granted (GRANT) or revoked (REVOKE) for the criterion.
```

**Methods**:
```yaml
- name: getAdvancement
  signature: public AdvancementHolder getAdvancement()
  description: Returns the advancement holder associated with this event.
- name: getAdvancementProgress
  signature: public AdvancementProgress getAdvancementProgress()
  description: Returns the current progress of the advancement.
- name: getCriterionName
  signature: public String getCriterionName()
  description: Returns the name of the criterion that was progressed or revoked.
- name: getProgressType
  signature: public ProgressType getProgressType()
  description: Returns the type of progress change (GRANT or REVOKE) for the criterion.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAdvancementProgress(AdvancementProgressEvent event) {
        if (event.getProgressType() == AdvancementProgressEvent.ProgressType.GRANT) {
            System.out.println("Granted criterion: " + event.getCriterionName());
        } else {
            System.out.println("Revoked criterion: " + event.getCriterionName());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/AdvancementEvent.java`

### AlterGroundEvent *(Common)*

**When**: This event fires when the AlterGroundDecorator attempts to alter a ground block during feature generation, such as converting grass to podzol for large spruce trees.

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: LevelSimulatedReader
  description: The level reader used for block state modification
- name: random
  type: RandomSource
  description: Random number generator used during block alteration
- name: pos
  type: BlockPos
  description: The position of the block being altered
- name: originalAltered
  type: BlockState
  description: The original block state that would be placed by the ground decorator
- name: newAltered
  type: BlockState
  description: The new block state to be placed by the ground decorator (can be modified)
```

**Methods**:
```yaml
- name: getLevel
  signature: public LevelSimulatedReader getLevel()
  description: Returns the level reader used for block state modification
- name: getRandom
  signature: public RandomSource getRandom()
  description: Returns the random number generator used during block alteration
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the block being altered
- name: getOriginalAlteredState
  signature: public BlockState getOriginalAlteredState()
  description: Returns the original block state that would be placed by the ground decorator
- name: getNewAlteredState
  signature: public BlockState getNewAlteredState()
  description: Returns the new block state to be placed by the ground decorator
- name: setNewAlteredState
  signature: public void setNewAlteredState(BlockState newAltered)
  description: Sets the new block state to be placed by the ground decorator
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAlterGround(AlterGroundEvent event) {
        // Modify the block state to replace grass with dirt
        event.setNewAlteredState(Blocks.DIRT.defaultBlockState());
        // Access position and level
        System.out.println("Altering block at " + event.getPos() + " in level " + event.getLevel());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/AlterGroundEvent.java`

### AlterGroundEvent.BUS *(Common)*

**When**: This event fires when the AlterGroundDecorator attempts to alter a ground block during feature generation, such as converting grass to podzol for large spruce trees.

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: LevelSimulatedReader
  description: The level reader used for block state checks and modifications.
- name: random
  type: RandomSource
  description: The random number generator used for random block state modifications.
- name: pos
  type: BlockPos
  description: The position of the block that will be altered.
- name: originalAltered
  type: BlockState
  description: The original block state that would be placed by the ground decorator.
- name: newAltered
  type: BlockState
  description: The new block state to be placed by the ground decorator, which can be modified by event handlers.
```

**Methods**:
```yaml
- name: getLevel
  signature: public LevelSimulatedReader getLevel()
  description: Returns the level reader used for block state checks and modifications.
- name: getRandom
  signature: public RandomSource getRandom()
  description: Returns the random number generator used for random block state modifications.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the block that will be altered.
- name: getOriginalAlteredState
  signature: public BlockState getOriginalAlteredState()
  description: Returns the original block state that would be placed by the ground decorator.
- name: getNewAlteredState
  signature: public BlockState getNewAlteredState()
  description: Returns the new block state to be placed by the ground decorator.
- name: setNewAlteredState
  signature: public void setNewAlteredState(BlockState newAltered)
  description: Sets the new block state to be placed by the ground decorator, allowing modification of the block state.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAlterGround(AlterGroundEvent event) {
        // Modify the block state to replace original with stone
        event.setNewAlteredState(Blocks.STONE.defaultBlockState());
        // Access position and level
        System.out.println("Altering block at " + event.getPos() + " in level " + event.getLevel());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/AlterGroundEvent.java`

### AnimalTameEvent.BUS *(Common)*

**When**: This event fires when an Animal is tamed by a Player, specifically when the taming process is initiated via ForgeEventFactory.onAnimalTame(Animal, Player).

**Cancellable**: Yes

**Fields**:
```yaml
- name: animal
  type: Animal
  description: The animal entity that is being tamed.
- name: tamer
  type: Player
  description: The player entity that is attempting to tame the animal.
```

**Methods**:
```yaml
- name: getAnimal
  signature: public Animal getAnimal()
  description: Returns the animal entity that is being tamed.
- name: getTamer
  signature: public Player getTamer()
  description: Returns the player entity that is attempting to tame the animal.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAnimalTame(AnimalTameEvent event) {
        if (event.isCanceled()) return;
        Player tamer = event.getTamer();
        Animal animal = event.getAnimal();
        // Custom logic here
        event.setCanceled(true); // Example cancellation
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/AnimalTameEvent.java`

### AnvilRepairEvent.BUS *(Common)*

**When**: The event fires when a player removes a repaired item from the Anvil's Output slot.

**Cancellable**: No

**Fields**:
```yaml
- name: left
  type: ItemStack
  description: The left side of the input items in the anvil
- name: right
  type: ItemStack
  description: The right side of the input items in the anvil
- name: output
  type: ItemStack
  description: The output item stack from the anvil repair
- name: breakChance
  type: float
  description: The chance that the anvil will be damaged when used (default 12%)
```

**Methods**:
```yaml
- name: getOutput
  signature: @NotNull public ItemStack getOutput()
  description: Returns the output item stack from the anvil repair
- name: getLeft
  signature: @NotNull public ItemStack getLeft()
  description: Returns the left input item stack in the anvil
- name: getRight
  signature: @NotNull public ItemStack getRight()
  description: Returns the right input item stack in the anvil
- name: getBreakChance
  signature: public float getBreakChance()
  description: Returns the anvil's chance to break when used
- name: setBreakChance
  signature: public void setBreakChance(float breakChance)
  description: Sets the anvil's chance to break when used
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAnvilRepair(AnvilRepairEvent event) {
        // Modify break chance
        event.setBreakChance(0.25f);
        // Log input items
        System.out.println("Left item: " + event.getLeft().getDisplayName());
        System.out.println("Right item: " + event.getRight().getDisplayName());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/AnvilRepairEvent.java`

### AnvilUpdateEvent *(Common)*

**When**: (summary failed: parsing error)

**Cancellable**: Unknown

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
# none detected
```

**Example**:
```java
// Example generation failed for AnvilUpdateEvent due to parsing error.
```

*Source*: `src/main/java/net/minecraftforge/event/AnvilUpdateEvent.java`

### AnvilUpdateEvent.BUS *(Common)*

**When**: The event fires when the input stacks or the name in an anvil changes, specifically during the creation of the result in AnvilMenu#createResult().

**Cancellable**: Yes

**Fields**:
```yaml
- name: left
  type: ItemStack
  description: The item in the left input slot of the anvil.
- name: right
  type: ItemStack
  description: The item in the right input slot of the anvil.
- name: name
  type: String
  description: The name provided by the player for the output item.
- name: output
  type: ItemStack
  description: The output itemstack that will be set in the anvil's output slot.
- name: cost
  type: long
  description: The level cost required for the anvil operation.
- name: materialCost
  type: int
  description: The amount of the right input stack consumed during the operation.
- name: player
  type: Player
  description: The player using the anvil container.
```

**Methods**:
```yaml
- name: getLeft
  signature: public ItemStack getLeft()
  description: Returns the itemstack in the left input slot.
- name: getRight
  signature: public ItemStack getRight()
  description: Returns the itemstack in the right input slot.
- name: getName
  signature: public String getName()
  description: Returns the name provided by the player for the output item.
- name: getOutput
  signature: public ItemStack getOutput()
  description: Returns the output itemstack that will be set in the anvil's output slot.
- name: setOutput
  signature: public void setOutput(ItemStack output)
  description: Sets the output itemstack for the anvil operation.
- name: getCost
  signature: public long getCost()
  description: Returns the level cost required for the anvil operation.
- name: setCost
  signature: public void setCost(long cost)
  description: Sets the level cost for the anvil operation.
- name: getMaterialCost
  signature: public int getMaterialCost()
  description: Returns the material cost (amount of right input consumed).
- name: setMaterialCost
  signature: public void setMaterialCost(int materialCost)
  description: Sets the material cost (amount of right input consumed).
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player using the anvil container.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAnvilUpdate(AnvilUpdateEvent event) {
        if (event.isCanceled()) return;
        event.setCost(event.getCost() + 100);
        event.setOutput(ItemStack.EMPTY);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/AnvilUpdateEvent.java`

### ArrowLooseEvent.BUS *(Common)*

**When**: When a player stops using a bow in the BowItem#releaseUsing method

**Cancellable**: Yes

**Fields**:
```yaml
- name: bow
  type: ItemStack
  description: The bow item stack that was used
- name: level
  type: Level
  description: The level (world) where the event occurred
- name: hasAmmo
  type: boolean
  description: Whether the player has ammo available
- name: charge
  type: int
  description: The charge level of the bow before stopping
```

**Methods**:
```yaml
- name: getBow
  signature: public @NotNull ItemStack getBow()
  description: Returns the bow item stack used
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) where the event occurred
- name: hasAmmo
  signature: public boolean hasAmmo()
  description: Returns whether the player has ammo available
- name: getCharge
  signature: public int getCharge()
  description: Returns the charge level of the bow before stopping
- name: setCharge
  signature: public void setCharge(int charge)
  description: Sets the charge level of the bow
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onArrowLoose(ArrowLooseEvent event) {
        if (!event.isCanceled()) {
            event.setCharge(100);
            System.out.println("Charge: " + event.getCharge());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/ArrowLooseEvent.java`

### ArrowNockEvent.BUS *(Common)*

**When**: The ArrowNockEvent is fired when a player begins using a bow, specifically in the BowItem#use method.

**Cancellable**: No

**Fields**:
```yaml
- name: bow
  type: ItemStack
  description: The bow item stack being used by the player
- name: hand
  type: InteractionHand
  description: The hand the player is using to hold the bow
- name: level
  type: Level
  description: The world level where the event occurs
- name: hasAmmo
  type: boolean
  description: Whether the bow has available ammunition
- name: action
  type: InteractionResult
  description: The result of the bow usage action
```

**Methods**:
```yaml
- name: getBow
  signature: public @NotNull ItemStack getBow()
  description: Returns the bow item stack being used
- name: getLevel
  signature: public Level getLevel()
  description: Returns the world level where the event occurs
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand the player is using to hold the bow
- name: hasAmmo
  signature: public boolean hasAmmo()
  description: Checks if the bow has available ammunition
- name: getAction
  signature: public InteractionResult getAction()
  description: Returns the result of the bow usage action
- name: setAction
  signature: public void setAction(InteractionResult action)
  description: Sets the result of the bow usage action
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onArrowNock(ArrowNockEvent event) {
        Player player = event.getPlayer();
        if (event.hasAmmo()) {
            event.setAction(InteractionResult.SUCCESS);
            System.out.println("Ammo available, action successful");
        } else {
            event.setAction(InteractionResult.FAIL);
            System.out.println("No ammo, action failed");
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/ArrowNockEvent.java`

### AttachCapabilitiesEvent.BUS *(Common)*

**When**: This event fires when an object with Capabilities support (TileEntity/Item/Entity) is created, allowing for the attachment of arbitrary capability providers.

**Cancellable**: No

**Fields**:
```yaml
- name: obj
  type: T
  description: The object that is being created, which can be an Entity, BlockEntity, ItemStack, Level, or LevelChunk.
- name: caps
  type: Map<ResourceLocation, ICapabilityProvider>
  description: A map of capabilities to be attached to this object. Keys must be unique and typically use the mod ID as the domain.
- name: view
  type: Map<ResourceLocation, ICapabilityProvider>
  description: An unmodifiable view of the capabilities that will be attached to this object.
- name: listeners
  type: List<Runnable>
  description: A list of callbacks that are fired when the attached object is invalidated (e.g., Entity/TileEntity being removed from world).
- name: listenersView
  type: List<Runnable>
  description: An unmodifiable view of the listeners list.
```

**Methods**:
```yaml
- name: getObject
  signature: public T getObject()
  description: Retrieves the object that is being created.
- name: addCapability
  signature: public void addCapability(ResourceLocation key, ICapabilityProvider cap)
  description: Adds a capability to be attached to this object. Keys must be unique.
- name: getCapabilities
  signature: public Map<ResourceLocation, ICapabilityProvider> getCapabilities()
  description: Returns an unmodifiable view of the capabilities that will be attached to this object.
- name: addListener
  signature: public void addListener(Runnable listener)
  description: Adds a callback that is fired when the attached object is invalidated.
- name: getListeners
  signature: public List<Runnable> getListeners()
  description: Returns an unmodifiable view of the listeners list.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAttachCapabilities(AttachCapabilitiesEvent<?> event) {
        // Add a capability to the object
        event.addCapability(new ResourceLocation("examplemod", "mycapability"), 
            new MyCapabilityProvider());
        
        // Register a listener for invalidation
        event.addListener(() -> {
            System.out.println("Object invalidated!");
        });
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/AttachCapabilitiesEvent.java`

### AttackEntityEvent.BUS *(Common)*

**When**: When a player attacks an Entity using Player#attack(Entity) method

**Cancellable**: Yes

**Fields**:
```yaml
- name: target
  type: Entity
  description: The Entity that was damaged by the player
```

**Methods**:
```yaml
- name: getTarget
  signature: public Entity getTarget()
  description: Returns the Entity that was damaged by the player
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAttack(AttackEntityEvent event) {
        if (event.isCanceled()) return;
        Entity target = event.getTarget();
        // Perform custom logic here
        event.setCanceled(true); // Example cancellation
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/AttackEntityEvent.java`

### BabyEntitySpawnEvent *(Common)*

**When**: The BabyEntitySpawnEvent is fired just before a baby entity is about to be spawned, specifically when an animal or fox is about to spawn a child from breeding.

**Cancellable**: Yes

**Fields**:
```yaml
- name: parentA
  type: Mob
  description: The first parent entity involved in the breeding, which initiated the spawning of the child.
- name: parentB
  type: Mob
  description: The second parent entity involved in the breeding, which is the secondary parent.
- name: causedByPlayer
  type: Player
  description: The player responsible for the breeding action, if applicable.
- name: child
  type: AgeableMob
  description: The child entity that will be spawned as a result of the breeding.
```

**Methods**:
```yaml
- name: getParentA
  signature: public Mob getParentA()
  description: Returns the first parent entity involved in the breeding.
- name: getParentB
  signature: public Mob getParentB()
  description: Returns the second parent entity involved in the breeding.
- name: getCausedByPlayer
  signature: public Player getCausedByPlayer()
  description: Returns the player responsible for the breeding action, if any.
- name: getChild
  signature: public AgeableMob getChild()
  description: Returns the child entity that will be spawned.
- name: setChild
  signature: public void setChild(AgeableMob proposedChild)
  description: Sets the child entity to be spawned, allowing modification of the child before spawning.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBabySpawn(BabyEntitySpawnEvent event) {
        if (event.isCanceled()) return;
        // Modify the child entity
        event.setChild((AgeableMob) event.getParentA().getBaby());
        // Check if player caused the breeding
        if (event.getCausedByPlayer() != null) {
            System.out.println("Player caused breeding: " + event.getCausedByPlayer().getName());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/BabyEntitySpawnEvent.java`

### BabyEntitySpawnEvent.BUS *(Common)*

**When**: This event fires just before a baby entity is about to be spawned as a result of breeding, specifically when an animal or fox spawns a child from breeding.

**Cancellable**: Yes

**Fields**:
```yaml
- name: parentA
  type: Mob
  description: The first parent entity involved in the breeding process.
- name: parentB
  type: Mob
  description: The second parent entity involved in the breeding process.
- name: causedByPlayer
  type: Player
  description: The player responsible for the breeding action, if any.
- name: child
  type: AgeableMob
  description: The child entity that will be spawned as a result of the breeding.
```

**Methods**:
```yaml
- name: getParentA
  signature: public Mob getParentA()
  description: Returns the first parent entity involved in the breeding process.
- name: getParentB
  signature: public Mob getParentB()
  description: Returns the second parent entity involved in the breeding process.
- name: getCausedByPlayer
  signature: public Player getCausedByPlayer()
  description: Returns the player responsible for the breeding action, if any.
- name: getChild
  signature: public AgeableMob getChild()
  description: Returns the child entity that will be spawned as a result of the breeding.
- name: setChild
  signature: public void setChild(AgeableMob proposedChild)
  description: Sets the child entity that will be spawned, allowing modification of the child before spawning.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBabySpawn(BabyEntitySpawnEvent event) {
        if (event.isCanceled()) return;
        // Modify the child entity
        event.setChild((AgeableMob) event.getParentA().getBaby());
        // Log information about the parents
        System.out.println("Parents: " + event.getParentA().getDisplayName() + " and " + event.getParentB().getDisplayName());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/BabyEntitySpawnEvent.java`

### BlockEvent *(Common)*

**When**: 2024-05-20T14:44:00.000Z

**Cancellable**: true

**Fields**:
```yaml
- name: entity
  type: Entity
  description: The entity that caused the block to be trampled.
- name: fallDistance
  type: double
  description: The distance the entity fell before trampling the block.
```

**Methods**:
```yaml
- name: getEntity
  signature: public Entity getEntity()
  description: Returns the entity that caused the block to be trampled.
- name: getFallDistance
  signature: public double getFallDistance()
  description: Returns the distance the entity fell before trampling the block.
```

**Example**:
```java
if (event.getEntity() instanceof Player) {
    Player player = (Player) event.getEntity();
    if (player.getFallDistance() > 3.0) {
        // Handle trampling logic
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/BlockEvent.java`

### BlockEvent.BUS *(Common)*

**When**: 2024-05-20T14:44:00.000Z

**Cancellable**: true

**Fields**:
```yaml
- name: entity
  type: Entity
  description: The entity that caused the block to be trampled.
- name: fallDistance
  type: double
  description: The distance the entity fell before trampling the block.
```

**Methods**:
```yaml
- name: getEntity
  signature: public Entity getEntity()
  description: Returns the entity that caused the block to be trampled.
- name: getFallDistance
  signature: public double getFallDistance()
  description: Returns the distance the entity fell before trampling the block.
```

**Example**:
```java
if (event.getEntity() instanceof Player) {
    Player player = (Player) event.getEntity();
    if (player.getFallDistance() > 3.0) {
        // Handle trampling logic
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/BlockEvent.java`

### BonemealEvent.BUS *(Common)*

**When**: The BonemealEvent.BUS event fires when a player attempts to use bonemeal on a block, allowing modders to intercept and modify the behavior of bonemeal application.

**Cancellable**: Yes

**Fields**:
```yaml
- name: level
  type: Level
  description: The world level where the bonemeal is being applied
- name: pos
  type: BlockPos
  description: The position of the block receiving the bonemeal
- name: block
  type: BlockState
  description: The block state of the block being bonemealed
- name: stack
  type: ItemStack
  description: The item stack containing bonemeal
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the world level where the bonemeal is being applied
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the block receiving the bonemeal
- name: getBlock
  signature: public BlockState getBlock()
  description: Returns the block state of the block being bonemealed
- name: getStack
  signature: public ItemStack getStack()
  description: Returns the item stack containing bonemeal
- name: getResult
  signature: public Result getResult()
  description: Returns the result of the event, indicating whether the event was allowed or denied
- name: setResult
  signature: public void setResult(Result result)
  description: Sets the result of the event, allowing modders to mark the event as processed or denied
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBonemeal(BonemealEvent event) {
        if (event.getResult() == Result.DEFAULT) {
            // Check if bonemeal should be allowed
            if (someCondition) {
                event.setResult(Result.ALLOW);
            } else {
                event.setResult(Result.DENY);
                event.setCanceled(true);
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/BonemealEvent.java`

### BrewingRecipeRegisterEvent.BUS *(Common)*

**When**: The event fires when registering brewing recipes with the brewing stand, allowing modders to add custom recipes.

**Cancellable**: No

**Fields**:
```yaml
- name: getBuilder
  type: PotionBrewing.Builder
  description: Provides access to the brewing recipe builder for adding custom recipes.
- name: getFeatures
  type: FeatureFlagSet
  description: Represents the feature flags associated with the brewing recipe registration.
```

**Methods**:
```yaml
- name: addRecipe
  signature: void addRecipe(Ingredient input, Ingredient ingredient, ItemStack output)
  description: Adds a brewing recipe with specified input, ingredient, and output.
- name: addRecipe
  signature: void addRecipe(IBrewingRecipe recipe)
  description: Adds a brewing recipe using an IBrewingRecipe object.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBrewingRegister(BrewingRecipeRegisterEvent event) {
        event.addRecipe(Ingredient.of(Items.NETHER_STAR), Ingredient.of(Items.GLOWSTONE), new ItemStack(Items.POTION));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/brewing/BrewingRecipeRegisterEvent.java`

### BuildCreativeModeTabContentsEvent.getBus *(Common)*

**When**: When the contents of a specific creative mode tab are being populated, potentially multiple times if the player's operator status or feature flags change.

**Cancellable**: No

**Fields**:
```yaml
- name: tab
  type: CreativeModeTab
  description: The creative mode tab that is currently being populated with items.
- name: tabKey
  type: ResourceKey<CreativeModeTab>
  description: The key identifying the creative mode tab being populated.
- name: parameters
  type: CreativeMode,Tab.ItemDisplayParameters
  description: Parameters controlling how items are displayed in the creative mode tab.
- name: entries
  type: MutableHashedLinkedMap<ItemStack, CreativeModeTab.TabVisibility>
  description: A map of items and their visibility status in the creative mode tab.
```

**Methods**:
```yaml
- name: getTab
  signature: public CreativeModeTab getTab()
  description: Returns the creative mode tab currently being populated.
- name: getTabKey
  signature: public ResourceKey<CreativeModeTab> getTabKey()
  description: Returns the key of the creative mode tab being populated.
- name: getFlags
  signature: public FeatureFlagSet getFlags()
  description: Returns the feature flags affecting the creative mode tab content.
- name: getParameters
  signature: public CreativeModeTab.ItemDisplayParameters getParameters()
  description: Returns the parameters controlling item display in the creative mode tab.
- name: hasPermissions
  signature: public boolean hasPermissions()
  description: Checks if the current player has permissions to view the tab content.
- name: getEntries
  signature: public MutableHashedLinkedMap<ItemStack, CreativeModeTab.TabVisibility> getEntries()
  description: Returns the map of items and their visibility status in the tab.
- name: accept
  signature: public void accept(ItemStack stack, CreativeModeTab.TabVisibility visibility)
  description: Adds an item to the tab with specified visibility.
- name: accept
  signature: public void accept(Supplier<? extends ItemLike> item, CreativeModeTab.TabVisibility visibility)
  description: Adds an item from a supplier to the tab with specified visibility.
- name: accept
  signature: public void accept(Supplier<? extends ItemLike> item)
  description: Adds an item from a supplier to the tab with default visibility.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBuildCreativeModeTabContents(BuildCreativeModeTabContentsEvent event) {
        if (event.hasPermissions()) {
            event.accept(() -> Items.DIAMOND, CreativeModeTab.TabVisibility.PUBLIC);
            event.accept(() -> Items.GOLDEN_APPLE, CreativeModeTab.TabVisibility.PUBLIC);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/BuildCreativeModeTabContentsEvent.java`

### ChannelRegistrationChangeEvent.BUS *(Common)*

**When**: This event fires when the channel registration for Minecraft custom channels changes, typically when a connection registers or unregisters channels.

**Cancellable**: No

**Fields**:
```yaml
- name: getSource
  type: Connection
  description: The network connection associated with the channel registration change.
- name: getType
  type: Type
  description: The type of change, either REGISTER or UNREGISTER.
- name: getChannels
  type: Set<ResourceLocation>
  description: The set of channels that were registered or unregistered.
```

**Methods**:
```yaml
- name: getChannels
  signature: public Set<ResourceLocation> getChannels()
  description: Returns the unmodifiable set of channels involved in the registration change.
- name: getType
  signature: public Type getType()
  description: Returns the type of change (REGISTER or UNREGISTER).
- name: getSource
  signature: public Connection getSource()
  description: Returns the network connection associated with the event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChannelChange(ChannelRegistrationChangeEvent event) {
        if (event.getType() == ChannelRegistrationChangeEvent.Type.REGISTER) {
            System.out.println("Registered channels: " + event.getChannels());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/network/ChannelRegistrationChangeEvent.java`

### ChunkDataEvent.BUS *(Common)*

**When**: The ChunkDataEvent.BUS event is fired when chunk data is being loaded or saved by vanilla Minecraft, specifically during chunk loading in ChunkSerializer#read and chunk saving in ChunkMap#save.

**Cancellable**: No

**Fields**:
```yaml
- name: data
  type: SerializableChunkData
  description: The serialized chunk data being processed, containing the chunk's NBTTagCompound.
- name: status
  type: ChunkType
  description: The status of the chunk loading operation, available in Load events to indicate chunk loading progress.
```

**Methods**:
```yaml
- name: getData
  signature: SerializableChunkData getData()
  description: Returns the serialized chunk data associated with this event.
- name: getStatus
  signature: ChunkType getStatus()
  description: Returns the chunk loading status for Load events, indicating the current state of the chunk loading operation.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChunkLoad(ChunkDataEvent.Load event) {
        if (event.getData().has("custom_tag")) {
            // Process custom chunk data
            System.out.println("Loaded chunk with custom data: " + event.getData().getString("custom_tag"));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/ChunkDataEvent.java`

### ChunkEvent.BUS *(Common)*

**When**: The ChunkEvent.BUS event is fired when a chunk-related event occurs in the game, specifically during chunk loading, unloading, or lighting calculation processes.

**Cancellable**: No

**Fields**:
```yaml
- name: chunk
  type: ChunkAccess
  description: The chunk that the event is related to.
```

**Methods**:
```yaml
- name: getChunk
  signature: public ChunkAccess getChunk()
  description: Returns the chunk associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChunkLoad(ChunkEvent.Load event) {
        ChunkAccess chunk = event.getChunk();
        if (event.isNewChunk()) {
            // Handle new chunk loading
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/ChunkEvent.java`

### ChunkTicketLevelUpdatedEvent *(Common)*

**When**: This event fires whenever a chunk's ticket level is changed via the server's ChunkMap, specifically when the new ticket level is different from the old one and both are not past the max chunk distance.

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: ServerLevel
  description: The server level containing the chunk whose ticket level was updated
- name: chunkPos
  type: long
  description: The long representation of the chunk position that had its ticket level changed
- name: oldTicketLevel
  type: int
  description: The previous ticket level the chunk had before the update
- name: newTicketLevel
  type: int
  description: The new ticket level for the chunk after the update
- name: chunkHolder
  type: ChunkHolder
  description: The chunk that had its ticket level updated (may be null)
```

**Methods**:
```yaml
- name: getLevel
  signature: public ServerLevel getLevel()
  description: Returns the server level containing the chunk whose ticket level was updated
- name: getChunkPos
  signature: public long getChunkPos()
  description: Returns the long representation of the chunk position that had its ticket level changed
- name: getOldTicketLevel
  signature: public int getOldTicketLevel()
  description: Returns the previous ticket level the chunk had before the update
- name: getNewTicketLevel
  signature: public int getNewTicketLevel()
  description: Returns the new ticket level for the chunk after the update
- name: getChunkHolder
  signature: public ChunkHolder getChunkHolder()
  description: Returns the chunk that had its ticket level updated (may be null)
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChunkTicketLevelUpdated(ChunkTicketLevelUpdatedEvent event) {
        ServerLevel level = event.getLevel();
        long chunkPos = event.getChunkPos();
        int oldLevel = event.getOldTicketLevel();
        int newLevel = event.getNewTicketLevel();
        // Handle ticket level change logic here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/ChunkTicketLevelUpdatedEvent.java`

### ChunkTicketLevelUpdatedEvent.BUS *(Common)*

**When**: This event fires whenever a chunk's ticket level is changed via the server's ChunkMap, specifically when the new ticket level is different from the old one and both are not past the max chunk distance.

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: ServerLevel
  description: The server level containing the chunk that had its ticket level updated.
- name: chunkPos
  type: long
  description: The long representation of the chunk position that had its ticket level changed.
- name: oldTicketLevel
  type: int
  description: The previous ticket level the chunk had before the update.
- name: newTicketLevel
  type: int
  description: The new ticket level for the chunk after the update.
- name: chunkHolder
  type: ChunkHolder
  description: The chunk that had its ticket level updated, may be null.
```

**Methods**:
```yaml
- name: getLevel
  signature: public ServerLevel getLevel()
  description: Returns the server level containing the chunk that had its ticket level updated.
- name: getChunkPos
  signature: public long getChunkPos()
  description: Returns the long representation of the chunk position that had its ticket level changed.
- name: getOldTicketLevel
  signature: public int getOldTicketLevel()
  description: Returns the previous ticket level the chunk had before the update.
- name: getNewTicketLevel
  signature: public int getNewTicketLevel()
  description: Returns the new ticket level for the chunk after the update.
- name: getChunkHolder
  signature: public ChunkHolder getChunkHolder()
  description: Returns the chunk that had its ticket level updated, may return null.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChunkTicketLevelUpdated(ChunkTicketLevelUpdatedEvent event) {
        ServerLevel level = event.getLevel();
        long chunkPos = event.getChunkPos();
        int oldLevel = event.getOldTicketLevel();
        int newLevel = event.getNewTicketLevel();
        // Handle ticket level change logic here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/ChunkTicketLevelUpdatedEvent.java`

### ChunkWatchEvent.BUS *(Common)*

**When**: This event is fired whenever a chunk has a watch-related action, such as when chunk data is sent to a ServerPlayer or when a 'forget chunk' packet is sent.

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: ServerLevel
  description: The server level containing the chunk being watched.
- name: player
  type: ServerPlayer
  description: The server player involved with the watch action.
- name: pos
  type: ChunkPos
  description: The chunk position this watch event is affecting.
```

**Methods**:
```yaml
- name: getPlayer
  signature: public ServerPlayer getPlayer()
  description: Returns the server player involved with the watch action.
- name: getPos
  signature: public ChunkPos getPos()
  description: Returns the chunk position this watch event is affecting.
- name: getLevel
  signature: public ServerLevel getLevel()
  description: Returns the server level containing the chunk being watched.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onChunkWatch(ChunkWatchEvent event) {
        ServerPlayer player = event.getPlayer();
        ChunkPos pos = event.getPos();
        ServerLevel level = event.getLevel();
        // Handle chunk watch event logic here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/ChunkWatchEvent.java`

### CommandEvent *(Common)*

**When**: CommandEvent is fired after a command is parsed but before it is executed, specifically during the invocation of Commands.performCommand(ParseResults, String).

**Cancellable**: Yes

**Fields**:
```yaml
- name: parse
  type: ParseResults<CommandSourceStack>
  description: The parsed command results containing the command source and parsed command information.
- name: exception
  type: Throwable
  description: An exception that can be set to cause the command to fail with an error.
```

**Methods**:
```yaml
- name: getParseResults
  signature: public ParseResults<CommandSourceStack> getParseResults()
  description: Returns the parsed command results.
- name: setParseResults
  signature: public void setParseResults(ParseResults<CommandSourceStack> parse)
  description: Sets the parsed command results, allowing modification of the parsed command information.
- name: getException
  signature: public @Nullable Throwable getException()
  description: Returns the exception that will be thrown when performing the command.
- name: setException
  signature: public void setException(@Nullable Throwable exception)
  description: Sets an exception to be thrown when performing the command, allowing for command failure.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onCommandEvent(CommandEvent event) {
        if (!event.isCanceled()) {
            // Modify parsed command results
            event.setParseResults(event.getParseResults());
            // Set an exception to cancel command execution
            event.setException(new IllegalArgumentException("Command cancelled"));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/CommandEvent.java`

### CommandEvent.BUS *(Common)*

**When**: CommandEvent.BUS fires after a command is parsed but before it is executed, specifically during the invocation of Commands.performCommand(ParseResults, String).

**Cancellable**: Yes

**Fields**:
```yaml
- name: parse
  type: ParseResults<CommandSourceStack>
  description: The parsed command results containing the command source and parsed command information.
- name: exception
  type: Throwable
  description: An exception that can be set to throw when performing the command, initially null.
```

**Methods**:
```yaml
- name: getParseResults
  signature: public ParseResults<CommandSourceStack> getParseResults()
  description: Returns the parsed command results.
- name: setParseResults
  signature: public void setParseResults(ParseResults<CommandSourceStack> parse)
  description: Sets the parsed command results.
- name: getException
  signature: public @Nullable Throwable getException()
  description: Returns the exception that will be thrown when performing the command.
- name: setException
  signature: public void setException(@Nullable Throwable exception)
  description: Sets the exception to be thrown when performing the command.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onCommandEvent(CommandEvent event) {
        if (!event.isCanceled()) {
            // Modify parsed command results
            event.setParseResults(event.getParseResults());
            // Set an exception to throw
            event.setException(new IllegalArgumentException("Command blocked"));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/CommandEvent.java`

### ConnectionStartEvent.BUS *(Common)*

**When**: Fires when a network connection is established, either on the server when receiving the ClientIntentionPacket or on the client when the channel is first activated.

**Cancellable**: No

**Fields**:
```yaml
- name: getConnection
  type: Connection
  description: Provides access to the network connection object, allowing modders to interact with the connection.
```

**Methods**:
```yaml
- name: isClient
  signature: boolean isClient()
  description: Determines if the event is occurring on the client side by checking the packet flow direction.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onConnectionStart(ConnectionStartEvent event) {
        Connection connection = event.getConnection();
        if (event.isClient()) {
            // Client-side handling
        } else {
            // Server-side handling
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/network/ConnectionStartEvent.java`

### CustomPayloadEvent.BUS *(Common)*

**When**: This event fires when a CustomPayload packet is received and not handled by any registered channels, after being processed by the network system.

**Cancellable**: No

**Fields**:
```yaml
- name: getChannel
  type: ResourceLocation
  description: The channel name of the received packet.
- name: getPayloadObject
  type: Object
  description: The raw payload object received from the packet.
- name: getPayload
  type: FriendlyByteBuf
  description: The byte buffer representation of the payload data (may be null if not a ForgePayload).
- name: getSource
  type: Context
  description: Contextual information about the packet's source connection.
- name: getLoginIndex
  type: int
  description: The login index of the connection, used for tracking players during login.
```

**Methods**:
```yaml
- name: setPacketHandled
  signature: void setPacketHandled(boolean packetHandled)
  description: Marks the packet as handled to prevent further processing.
- name: getPacketHandled
  signature: boolean getPacketHandled()
  description: Returns whether the packet has been marked as handled.
- name: enqueueWork
  signature: CompletableFuture<Void> enqueueWork(Runnable runnable)
  description: Enqueues a task to be executed on the appropriate thread for the connection.
- name: getSender
  signature: @Nullable ServerPlayer getSender()
  description: Gets the sender player for packets from clients to servers.
```

**Example**:
```java
@Mod("custompayloadexample")
public class CustomPayloadExample {
    @SubscribeEvent
    public void onCustomPayload(CustomPayloadEvent event) {
        if (event.getPacketHandled()) return;
        ServerPlayer sender = event.getSource().getSender();
        if (sender != null) {
            sender.sendSystemMessage(Component.literal("Received custom payload: " + event.getChannel()));
        }
        event.getSource().setPacketHandled(true);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/network/CustomPayloadEvent.java`

### DifficultyChangeEvent.BUS *(Common)*

**When**: The event fires when the difficulty is changing in the game, specifically when the difficulty is about to be updated.

**Cancellable**: No

**Fields**:
```yaml
- name: getDifficulty
  type: Difficulty
  description: The new difficulty level that is about to be set.
- name: getOldDifficulty
  type: Difficulty
  description: The previous difficulty level before the change.
```

**Methods**:
```yaml
- name: getDifficulty
  signature: public Difficulty getDifficulty()
  description: Returns the new difficulty level that is about to be set.
- name: getOldDifficulty
  signature: public Difficulty getOldDifficulty()
  description: Returns the previous difficulty level before the change.
```

**Example**:
```java
@Mod("difficulty_example")
public class DifficultyExample {
    @SubscribeEvent
    public void onDifficultyChange(DifficultyChangeEvent event) {
        Difficulty newDiff = event.getDifficulty();
        Difficulty oldDiff = event.getOldDifficulty();
        System.out.println("Difficulty changed from " + oldDiff + " to " + newDiff);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/DifficultyChangeEvent.java`

### EnchantmentLevelSetEvent *(Common)*

**When**: This event fires when the enchantment level is set for each of the three potential enchantments in the enchanting table.

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: Level
  description: The world object where the enchantment is being applied.
- name: pos
  type: BlockPos
  description: The position of the enchantment table in the world.
- name: enchantRow
  type: int
  description: The row (1, 2, or 3) for which the enchantment level is being set.
- name: power
  type: int
  description: The number of bookshelves surrounding the enchantment table (0-15).
- name: itemStack
  type: ItemStack
  description: The item being enchanted.
- name: originalLevel
  type: int
  description: The original enchantment level (0-30) before any modifications.
- name: enchantLevel
  type: int
  description: The current enchantment level (0-30) that can be modified by event handlers.
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the world object where the enchantment is being applied.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the enchantment table in the world.
- name: getEnchantRow
  signature: public int getEnchantRow()
  description: Returns the row (1, 2, or 3) for which the enchantment level is being set.
- name: getPower
  signature: public int getPower()
  description: Returns the number of bookshelves surrounding the enchantment table (0-15).
- name: getItem
  signature: public ItemStack getItem()
  description: Returns the item being enchanted.
- name: getOriginalLevel
  signature: public int getOriginalLevel()
  description: Returns the original enchantment level (0-30) before any modifications.
- name: getEnchantLevel
  signature: public int getEnchantLevel()
  description: Returns the current enchantment level (0-30) that can be modified by event handlers.
- name: setEnchantLevel
  signature: public void setEnchantLevel(int level)
  description: Sets the new enchantment level (0-30) for the row.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEnchantmentLevelSet(EnchantmentLevelSetEvent event) {
        int original = event.getOriginalLevel();
        int newLevel = Math.min(original + 5, 30);
        event.setEnchantLevel(newLevel);
        System.out.println("Modified enchantment level from " + original + " to " + newLevel);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/enchanting/EnchantmentLevelSetEvent.java`

### EnchantmentLevelSetEvent.BUS *(Common)*

**When**: This event fires when the enchantment level is set for each of the three potential enchantments in the enchanting table.

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: Level
  description: The world object where the enchantment is being applied.
- name: pos
  type: BlockPos
  description: The position of the enchantment table in the world.
- name: enchantRow
  type: int
  description: The row (1, 2, or 3) for which the enchantment level is being set.
- name: power
  type: int
  description: The number of bookshelves surrounding the enchanting table (0-15).
- name: itemStack
  type: ItemStack
  description: The item being enchanted.
- name: originalLevel
  type: int
  description: The original enchantment level (0-30) before any modifications.
- name: enchantLevel
  type: int
  description: The current enchantment level (0-30) that can be modified by event handlers.
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the world object where the enchantment is being applied.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the enchantment table in the world.
- name: getEnchantRow
  signature: public int getEnchantRow()
  description: Returns the row (1, 2, or 3) for which the enchantment level is being set.
- name: getPower
  signature: public int getPower()
  description: Returns the number of bookshelves surrounding the enchanting table (0-15).
- name: getItem
  signature: public ItemStack getItem()
  description: Returns the item being enchanted.
- name: getOriginalLevel
  signature: public int getOriginalLevel()
  description: Returns the original enchantment level (0-30) before any modifications.
- name: getEnchantLevel
  signature: public int getEnchantLevel()
  description: Returns the current enchantment level (0-30) that can be modified by event handlers.
- name: setEnchantLevel
  signature: public void setEnchantLevel(int level)
  description: Sets the new enchantment level (0-30) for the row.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEnchantmentLevelSet(EnchantmentLevelSetEvent event) {
        int original = event.getOriginalLevel();
        int newLevel = original + 5;
        event.setEnchantLevel(newLevel);
        System.out.println("Enchantment level modified from " + original + " to " + newLevel);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/enchanting/EnchantmentLevelSetEvent.java`

### EntityAttributeCreationEvent.getBus *(Common)*

**When**: This event fires after entity type registration and before common setup, allowing modders to register custom attributes for their own entity types.

**Cancellable**: No

**Fields**:
```yaml
- name: map
  type: Map<EntityType<? extends LivingEntity>, AttributeSupplier>
  description: A map used to register attribute suppliers for entity types. Modders add entries to this map to define attributes for their custom entities.
```

**Methods**:
```yaml
- name: put
  signature: void put(EntityType<? extends Living,Entity> entity, AttributeSupplier map)
  description: Adds an attribute supplier for a specific entity type to the map. Throws an exception if the entity already has a default attribute supplier registered.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAttributeCreation(EntityAttributeCreationEvent event) {
        event.put(EntityType.Builder.<MyEntity>create(MyEntity::new, 1.0f).build("example:my_entity"), 
            AttributeSupplier.create().add(HealthAttribute.HEALTH_ATTRIBUTE, 10.0D));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityAttributeCreationEvent.java`

### EntityAttributeModificationEvent.getBus *(Common)*

**When**: This event fires after entity type registration and before common setup, and after EntityAttributeCreationEvent.

**Cancellable**: No

**Fields**:
```yaml
- name: entityAttributes
  type: Map<EntityType<? extends LivingEntity>, AttributeSupplier.Builder>
  description: A map of entity types to their attribute supplier builders, used to modify or add attributes.
- name: entityTypes
  type: List<EntityType<? extends LivingEntity>>
  description: A list of entity types that have attribute suppliers defined, used to iterate over entities with attributes.
```

**Methods**:
```yaml
- name: add
  signature: void add(EntityType<? extends LivingEntity> entityType, Holder<Attribute> attribute, double value)
  description: Adds a specific attribute with a given value to the specified entity type.
- name: add
  signature: void add(EntityType<? extends LivingEntity> entityType, Holder<Attribute> attribute)
  description: Adds an attribute with its default value to the specified entity type.
- name: has
  signature: boolean has(EntityType<? extends LivingEntity> entityType, Holder<Attribute> attribute)
  description: Checks if a specific attribute exists for a given entity type.
- name: getTypes
  signature: List<EntityType<? extends LivingEntity>> getTypes()
  description: Returns the list of entity types that have attribute suppliers defined.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityAttributeModification(EntityAttributeModificationEvent event) {
        event.add(EntityType.PLAYER, Attribute.PLAYER_MOVEMENT_SPEED, 1.5);
        for (EntityType<?> type : event.getTypes()) {
            System.out.println("Entity with attributes: " + type.getRegistryName());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityAttributeModificationEvent.java`

### EntityEvent *(Common)*

**When**: EntityEvent is fired when an event involving any Entity occurs, and is used as a base class for entity-related events.

**Cancellable**: No

**Fields**:
```yaml
- name: entity
  type: Entity
  description: The entity that caused this event to occur
```

**Methods**:
```yaml
- name: getEntity
  signature: public Entity getEntity()
  description: Returns the entity associated with this event
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityEvent(EntityEvent event) {
        Entity entity = event.getEntity();
        // Handle entity event
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityEvent.java`

### EntityEvent.BUS *(Common)*

**When**: The EntityEvent.BUS is fired when an event involving any Entity occurs, specifically when an Entity is created or moves between sections.

**Cancellable**: No

**Fields**:
```yaml
- name: entity
  type: Entity
  description: The entity that caused this event to occur.
```

**Methods**:
```yaml
- name: getEntity
  signature: public Entity getEntity()
  description: Returns the entity associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityConstructing(EntityConstructing event) {
        Entity entity = event.getEntity();
        // Handle entity creation event
    }

    @SubscribeEvent
    public void onEnteringSection(EnteringSection event) {
        Entity entity = event.getEntity();
        SectionPos oldPos = event.getOldPos();
        SectionPos newPos = event.getNewPos();
        // Handle entity section change event
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityEvent.java`

### EntityItemPickupEvent.BUS *(Common)*

**When**: This event fires when a player collides with an EntityItem on the ground, such as when picking up an item from the ground.

**Cancellable**: Yes

**Fields**:
```yaml
- name: item
  type: ItemEntity
  description: The ItemEntity that was collided with and is being picked up by the player.
- name: result
  type: Result
  description: The result of the event, which determines if the item pickup is allowed or denied.
```

**Methods**:
```yaml
- name: getItem
  signature: public ItemEntity getItem()
  description: Returns the ItemEntity that was collided with and is being picked up.
- name: getResult
  signature: public Result getResult()
  description: Returns the result of the event, which determines if the item pickup is allowed or denied.
- name: setResult
  signature: public void setResult(Result result)
  description: Sets the result of the event, which determines if the item pickup is allowed or denied.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onItemPickup(EntityItemPickupEvent event) {
        Player player = event.getPlayer();
        ItemEntity item = event.getItem();
        if (player.isCreative()) {
            event.setResult(Result.ALLOW);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/EntityItemPickupEvent.java`

### EntityJoinLevelEvent.BUS *(Common)*

**When**: This event fires when an Entity joins a Level, specifically when an entity is added to a level via Level#addFreshEntity(Entity) or PersistentEntitySectionManager#addNewEntity(Entity, boolean).

**Cancellable**: Yes

**Fields**:
```yaml
- name: level
  type: Level
  description: The Level to which the entity is being added.
- name: loadedFromDisk
  type: boolean
  description: Indicates if the entity was loaded from disk (true) or created in memory (false).
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the Level that the entity is being added to.
- name: loadedFromDisk
  signature: public boolean loadedFromDisk()
  description: Returns true if the entity was loaded from disk, false otherwise.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityJoinLevel(EntityJoinLevelEvent event) {
        if (event.isCanceled()) return;
        Level level = event.getLevel();
        boolean loadedFromDisk = event.loadedFromDisk();
        // Perform actions based on the event data
        // ...
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityJoinLevelEvent.java`

### EntityLeaveLevelEvent.BUS *(Common)*

**When**: This event fires when an entity leaves a level, specifically when it is removed from the level in LevelCallback#onTrackingEnd(Object).

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: Level
  description: The level that the entity is leaving
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level that the entity is leaving
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityLeaveLevel(EntityLeaveLevelEvent event) {
        Level level = event.getLevel();
        // Perform actions when entity leaves level
        System.out.println("Entity left level: " + level.dimension().location());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityLeaveLevelEvent.java`

### EntityMobGriefingEvent.BUS *(Common)*

**When**: This event fires when the mobGriefing game rule is checked, which determines whether mobs can destroy blocks.

**Cancellable**: Yes

**Fields**:
```yaml
- name: result
  type: Result
  description: Determines whether mob griefing is allowed, denied, or uses the default game rule behavior.
```

**Methods**:
```yaml
- name: getResult
  signature: Result getResult()
  description: Returns the current result state (ALLOW, DEFAULT, or DENY) for mob griefing.
- name: setResult
  signature: void setResult(Result result)
  description: Sets the result state to control whether mob griefing is allowed, denied, or uses the default behavior.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onMobGriefing(EntityMobGriefingEvent event) {
        // Prevent mob griefing globally
        event.setResult(Result.DENY);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityMobGriefingEvent.java`

### EntityMountEvent.BUS *(Common)*

**When**: This event fires when an entity mounts or dismounts another entity, such as when a player mounts a horse or a mob dismounts from an entity.

**Cancellable**: Yes

**Fields**:
```yaml
- name: entityMounting
  type: Entity
  description: The entity that is attempting to mount another entity.
- name: entityBeingMounted
  type: Entity
  description: The entity being mounted. Can be null if the dismount action is being processed.
- name: level
  type: Level
  description: The level (world) where the mounting/dismounting action is occurring.
- name: isMounting
  type: boolean
  description: Indicates whether the action is a mounting (true) or dismounting (false).
```

**Methods**:
```yaml
- name: isMounting
  signature: boolean isMounting()
  description: Returns true if the event represents a mounting action.
- name: isDismounting
  signature: boolean isDismounting()
  description: Returns true if the event represents a dismounting action.
- name: getEntityMounting
  signature: Entity getEntityMounting()
  description: Returns the entity that is attempting to mount another entity.
- name: getEntityBeingMounted
  signature: Entity getEntityBeingMounted()
  description: Returns the entity being mounted. May be null if dismounting.
- name: getLevel
  signature: Level getLevel()
  description: Returns the level (world) where the mounting/dismounting action is occurring.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onMount(EntityMountEvent event) {
        if (event.isMounting() && !event.getEntityBeingMounted().is(null)) {
            event.setCanceled(true);
            System.out.println("Mounting canceled!");
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityMountEvent.java`

### EntityStruckByLightningEvent.BUS *(Common)*

**When**: When an Entity is about to be struck by lightning, specifically during the LightningBolt#tick() method execution.

**Cancellable**: Yes

**Fields**:
```yaml
- name: lightning
  type: LightningBolt
  description: The EntityLightningBolt instance that is attempting to strike the entity.
```

**Methods**:
```yaml
- name: getLightning
  signature: public LightningBolt getLightning()
  description: Returns the LightningB,olt instance associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityStruckByLightning(EntityStruckByLightningEvent event) {
        if (!event.isCanceled()) {
            event.getLightning().setIsInvisible(true);
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityStruckByLightningEvent.java`

### EntityTeleportEvent.BUS *(Common)*

**When**: The EntityTeleportEvent.BUS is fired when an entity is about to teleport due to various in-game actions such as Ender Pearl usage, Enderman/Shulker teleportation, or Chorus Fruit consumption.

**Cancellable**: Yes

**Fields**:
```yaml
- name: targetX
  type: double
  description: The X coordinate of the target teleport destination.
- name: targetY
  type: double
  description: The Y coordinate of the target teleport destination.
- name: targetZ
  type: double
  description: The Z coordinate of the target teleport destination.
- name: entity
  type: Entity
  description: The entity that is about to teleport.
```

**Methods**:
```yaml
- name: getEntityLiving
  signature: ()Ljava/lang/Object;
  description: Returns the living entity for specific teleportation events like Enderman/Shulker teleportation or Chorus Fruit consumption.
- name: getPlayer
  signature: ()Lnet/minecraft/server/ServerPlayer;
  description: Returns the player who used an Ender Pearl to teleport.
- name: getPearlEntity
  signature: ()Lnet/minecraft/world/entity/projectile/ThrownEnderpearl;
  description: Returns the Ender Pearl entity that caused the teleportation.
- name: getHitResult
  signature: ()Lnet/minecraft/world/phys/HitResult;
  description: Returns the hit result from the Ender Pearl's collision detection.
- name: getAttackDamage
  signature: ()F
  description: Returns the damage value of the Ender Pearl.
- name: setAttackDamage
  signature: (F)V
  description: Sets the damage value of the Ender Pearl.
```

**Example**:
```java
public void onEnderPearlTeleport(EnderPearl event) {
    if (event.getPlayer() != null) {
        // Modify attack damage
        event.setAttackDamage(10.0f);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityTeleportEvent.java`

### EntityTravelToDimensionEvent.BUS *(Common)*

**When**: This event fires before an Entity travels to a dimension.

**Cancellable**: Yes

**Fields**:
```yaml
- name: dimension
  type: ResourceKey<Level>
  description: The dimension the entity is traveling to.
```

**Methods**:
```yaml
- name: getDimension
  signature: public ResourceKey<Level> getDimension()
  description: Returns the dimension the entity is traveling to.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityTravelToDimension(EntityTravelToDimensionEvent event) {
        if (event.isCanceled()) return;
        ResourceKey<Level> targetDim = event.getDimension();
        // Example logic: prevent travel to the Nether
        if (targetDim.location().toString().contains("nether")) {
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/EntityTravelToDimensionEvent.java`

### ExplosionEvent.BUS *(Common)*

**When**: The ExplosionEvent.BUS fires when an explosion occurs in the level, specifically during two phases: before the explosion starts (Start event) and after the explosion has determined affected blocks and entities (Detonate event).

**Cancellable**: Unknown

**Fields**:
```yaml
- name: level
  type: Level
  description: The level (world) where the explosion is occurring.
- name: explosion
  type: Explosion
  description: The explosion object representing the explosion event.
- name: blocks
  type: List<BlockPos>
  description: List of block positions affected by the explosion (only available in Detonate event).
- name: entityList
  type: List<Entity>
  description: List of entities affected by the explosion (only available in Detonate event).
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) where the explosion is occurring.
- name: getExplosion
  signature: public Explosion getExplosion()
  description: Returns the explosion object representing the explosion event.
- name: getAffectedBlocks
  signature: public List<BlockPos> getAffectedBlocks()
  description: Returns the list of block positions affected by the explosion (Detonate event).
- name: getAffectedEntities
  signature: public List<Entity> getAffectedEntities()
  description: Returns the list of entities affected by the explosion (Detonate event).
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onExplosionStart(ExplosionEvent.Start event) {
        if (!event.isCanceled()) {
            // Modify explosion properties
            event.getExplosion().setExplosionPower(0);
            event.getExplosion().setShouldSetFire(false);
        }
    }

    @SubscribeEvent
    public void onExplosionDetonate(ExplosionEvent.Detonate event) {
        // Modify affected blocks or entities
        event.getAffectedBlocks().removeIf(pos -> pos.getY() > 100);
        event.getAffectedEntities().removeIf(entity -> entity.getType() == EntityType.PLAYER);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/ExplosionEvent.java`

### FillBucketEvent.BUS *(Common)*

**When**: This event fires when a player attempts to use an empty bucket, such as when filling it with a liquid from a block.

**Cancellable**: Yes

**Fields**:
```yaml
- name: current
  type: ItemStack
  description: The empty bucket item stack being used by the player
- name: level
  type: Level
  description: The world level where the bucket usage is occurring
- name: target
  type: HitResult
  description: The hit result from the player's bucket usage, may be null
- name: result
  type: ItemStack
  description: The filled bucket item stack that will be added to the player's inventory
- name: eventResult
  type: Result
  description: The result of the event processing, used to control flow
```

**Methods**:
```yaml
- name: getEmptyBucket
  signature: @NotNull ItemStack getEmptyBucket()
  description: Returns the empty bucket item stack being used
- name: getLevel
  signature: Level getLevel()
  description: Returns the world level where the bucket usage is occurring
- name: getTarget
  signature: @Nullable HitResult getTarget()
  description: Returns the hit result from the bucket usage, may be null
- name: getFilledBucket
  signature: @NotNull ItemStack getFilledBucket()
  description: Returns the filled bucket item stack that will be added
- name: setFilledBucket
  signature: void setFilledBucket(@NotNull ItemStack bucket)
  description: Sets the filled bucket item stack to be added to inventory
- name: getResult
  signature: Result getResult()
  description: Returns the result of the event processing
- name: setResult
  signature: void setResult(Result result)
  description: Sets the result of the event processing
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFillBucket(FillBucketEvent event) {
        if (event.getResult() == Result.DENY) return;
        event.setResult(Result.ALLOW);
        event.setFilledBucket(new ItemStack(Items.BUCKET));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/FillBucketEvent.java`

### FurnaceFuelBurnTimeEvent *(Common)*

**When**: The event fires when determining the fuel value for an ItemStack, specifically when calculating how long an item will burn in a furnace.

**Cancellable**: Yes

**Fields**:
```yaml
- name: itemStack
  type: ItemStack
  description: The ItemStack representing the fuel item being evaluated.
- name: recipeType
  type: RecipeType<?>
  description: The recipe type for which the burn time is being calculated, if known.
- name: burnTime
  type: int
  description: The calculated burn time for the ItemStack, which can be modified by event handlers.
```

**Methods**:
```yaml
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the ItemStack that is being evaluated as fuel.
- name: getRecipeType
  signature: public RecipeType<?> getRecipeType()
  description: Returns the recipe type associated with the burn time calculation, if available.
- name: setBurnTime
  signature: public void setBurnTime(int burnTime)
  description: Sets the burn time for the ItemStack, overriding the default value.
- name: getBurnTime
  signature: public int getBurnTime()
  description: Returns the current burn time value for the ItemStack.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFuelBurnTime(FurnaceFuelBurnTimeEvent event) {
        if (event.getRecipeType() != null && event.getRecipeType() == RecipeType.SMELTING) {
            event.setBurnTime(10000);
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/furnace/FurnaceFuelBurnTimeEvent.java`

### FurnaceFuelBurnTimeEvent.BUS *(Common)*

**When**: The event fires when determining the fuel value for an ItemStack in a furnace context.

**Cancellable**: Yes

**Fields**:
```yaml
- name: itemStack
  type: ItemStack
  description: The ItemStack being considered as fuel.
- name: recipeType
  type: RecipeType<?>
  description: The recipe type for which the burn time is being calculated, if known.
- name: burnTime
  type: int
  description: The calculated burn time for the ItemStack.
```

**Methods**:
```yaml
- name: getItemStack
  signature: ItemStack getItemStack()
  description: Returns the ItemStack being considered as fuel.
- name: getRecipeType
  signature: RecipeType<?> getRecipeType()
  description: Returns the recipe type for which the burn time is being calculated.
- name: setBurnTime
  signature: void setBurnTime(int burnTime)
  description: Sets the burn time for the ItemStack. Setting to 0 prevents it from being used as fuel.
- name: getBurnTime
  signature: int getBurnTime()
  description: Returns the calculated burn time for the ItemStack.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFuelBurnTime(FurnaceFuelBurnTimeEvent event) {
        if (!event.isCanceled()) {
            event.setBurnTime(1000);
            System.out.println("Burn time set to: " + event.getBurnTime());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/furnace/FurnaceFuelBurnTimeEvent.java`

### GameShuttingDownEvent.BUS *(Common)*

**When**: The GameShuttingDownEvent fires once when the game is about to close, specifically on the physical client and physical server. It does not fire for the Integrated Server on a physical client.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: BUS
  signature: static final EventBus<GameShuttingDownEvent> BUS
  description: The event bus used to register and fire GameShuttingDownEvent instances.
- name: SelfDestructing
  signature: void selfDestruct()
  description: Marks the event as self-destructing, which means it will be removed from the event bus after firing.
- name: RecordEvent
  signature: void record()
  description: Records the event, which is used for the event bus to track and manage event instances.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onGameShuttingDown(GameShuttingDownEvent event) {
        event.record(); // Record the event for bus management
        event.selfDestruct(); // Mark event for self-destruction
        // Perform shutdown-related operations here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/GameShuttingDownEvent.java`

### GatherComponentsEvent.BUS *(Common)*

**When**: This event fires when gathering components for an item, specifically when additional components need to be collected for a specific item instance, and is called lazily once per item.

**Cancellable**: No

**Fields**:
```yaml
- name: components
  type: DataComponentMap.Builder
  description: Builder for constructing the component map that will be added to the item. Modders can use this to register components.
- name: originalComponents
  type: DataComponentMap
  description: The original component map of the item before any modifications. Useful for reference or comparison.
- name: owner
  type: Object
  description: The owner object of the event, typically the item instance. Can be cast to net.minecraft.world.item.Item for item-specific operations.
```

**Methods**:
```yaml
- name: register
  signature: public <T> void register(DataComponentType<T> componentType, @Nullable T value)
  description: Registers a component of the specified type with the given value. This is used to add components to the item.
- name: getDataComponentMap
  signature: public DataComponentMap getDataComponentMap()
  description: Returns the built DataComponentMap with all registered components. This method is internal and should be used with caution.
- name: getOriginalComponentMap
  signature: public DataComponentMap getOriginalComponentMap()
  description: Returns the original component map of the item before any modifications were made.
- name: getOwner
  signature: public Object getOwner()
  description: Returns the owner object of the event, which is typically the item instance.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onGatherComponents(GatherComponentsEvent event) {
        if (event.getOwner() instanceof Item item) {
            event.register(DataComponents.ATTRIBUTE_MODIFIER, new AttributeModifier());
            DataComponentMap components = event.getDataComponentMap();
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/GatherComponentsEvent.java`

### GatherLoginConfigurationTasksEvent *(Common)*

**When**: This event fires during the initial login configuration phase when a player connects to the server, specifically when gathering tasks to execute during the login process.

**Cancellable**: No

**Fields**:
```yaml
- name: connection
  type: Connection
  description: The network connection associated with the login session.
- name: add
  type: Consumer<ConfigurationTask>
  description: A function used to add configuration tasks to be executed during login.
```

**Methods**:
```yaml
- name: getConnection
  signature: public Connection getConnection()
  description: Returns the network connection object for the login session.
- name: addTask
  signature: public void addTask(ConfigurationTask task)
  description: Adds a configuration task to be executed during the login process.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLoginConfig(GatherLoginConfigurationTasksEvent event) {
        event.addTask(new ConfigurationTask() {
            @Override
            public void run() {
                // Custom login configuration logic here
            }
        });
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/network/GatherLoginConfigurationTasksEvent.java`

### GatherLoginConfigurationTasksEvent.BUS *(Common)*

**When**: This event fires during the initial login configuration phase when a player connects to the server, specifically when gathering tasks to execute during the login process.

**Cancellable**: No

**Fields**:
```yaml
- name: connection
  type: Connection
  description: The network connection associated with the login session.
- name: add
  type: Consumer<ConfigurationTask>
  description: A function used to add configuration tasks to be executed during login.
```

**Methods**:
```yaml
- name: getConnection
  signature: public Connection getConnection()
  description: Returns the network connection object for the login session.
- name: addTask
  signature: public void addTask(ConfigurationTask task)
  description: Adds a configuration task to be executed during the login process.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLoginConfig(GatherLoginConfigurationTasksEvent event) {
        event.addTask(new CustomLoginTask(event.getConnection()));
    }
}
// CustomLoginTask is a ConfigurationTask implementation
```

*Source*: `src/main/java/net/minecraftforge/event/network/GatherLoginConfigurationTasksEvent.java`

### GrindstoneEvent.BUS *(Common)*

**When**: The GrindstoneEvent.BUS event fires when the inputs to a grindstone are changed, specifically when items are placed into the grindstone slots.

**Cancellable**: Yes

**Fields**:
```yaml
- name: top
  type: ItemStack
  description: The item in the top input grindstone slot.
- name: bottom
  type: ItemStack
  description: The item in the bottom input grindstone slot.
- name: xp
  type: int
  description: The experience amount determined by the event, which can be modified by handlers.
```

**Methods**:
```yaml
- name: getTopItem
  signature: public ItemStack getTopItem()
  description: Returns the item in the top input grindstone slot.
- name: getBottomItem
  signature: public ItemStack getBottomItem()
  description: Returns the item in the bottom input grindstone slot.
- name: getXp
  signature: public int getXp()
  description: Returns the experience amount given to the player.
- name: setXp
  signature: public void setXp(int xp)
  description: Sets the experience amount given to the player.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onGrindstonePlace(GrindstoneEvent.OnPlaceItem event) {
        if (!event.isCanceled()) {
            event.setXp(10);
            event.setOutput(new ItemStack(Items.DIAMOND));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/GrindstoneEvent.java`

### ItemEvent.BUS *(Common)*

**When**: The ItemEvent.BUS event fires when an ItemEntity (item entity) is created or modified in the world, such as when items are dropped or picked up.

**Cancellable**: No

**Fields**:
```yaml
- name: itemEntity
  type: ItemEntity
  description: The ItemEntity instance associated with this event, providing access to the item's properties and world state.
```

**Methods**:
```yaml
- name: getEntity
  signature: public ItemEntity getEntity()
  description: Returns the ItemEntity instance for this event, allowing access to its properties and state.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onItemEvent(ItemEvent event) {
        ItemEntity item = event.getEntity();
        // Use item entity data here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/item/ItemEvent.java`

### ItemExpireEvent.BUS *(Common)*

**When**: The event fires when an EntityItem's age reaches its maximum lifespan, just before it is removed from the world.

**Cancellable**: Yes

**Fields**:
```yaml
- name: extraLife
  type: int
  description: The amount of time to add to the EntityItem's lifespan if the event is canceled.
```

**Methods**:
```yaml
- name: getExtraLife
  signature: int getExtra,Life()
  description: Returns the extra lifespan value set for the EntityItem if the event is canceled.
- name: setExtraLife
  signature: void setExtraLife(int extraLife)
  description: Sets the extra lifespan value for the EntityItem if the event is canceled.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onItemExpire(ItemExpireEvent event) {
        if (!event.isCanceled()) {
            event.setExtraLife(100);
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/item/ItemExpireEvent.java`

### ItemFishedEvent.BUS *(Common)*

**When**: This event fires when a player successfully fishes an item from water using a fishing rod.

**Cancellable**: Yes

**Fields**:
```yaml
- name: stacks
  type: NonNullList<ItemStack>
  description: The list of items the player will receive from the fishing action.
- name: hook
  type: FishingHook
  description: The fishing hook entity that was used to catch the item.
- name: rodDamage
  type: int
  description: The amount of damage the fishing rod will take from this action.
```

**Methods**:
```yaml
- name: getRodDamage
  signature: public int getRodDamage()
  description: Returns the amount of damage the fishing rod will take from this action.
- name: damageRodBy
  signature: public void damageRodBy(@Nonnegative int rodDamage)
  description: Sets the amount of damage the fishing rod will take. Must be nonnegative.
- name: getDrops
  signature: public NonNullList<ItemStack> getDrops()
  description: Returns the list of items the player will receive from the fishing action.
- name: getHookEntity
  signature: public FishingHook getHookEntity()
  description: Returns the fishing hook entity used in the fishing action.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFished(ItemFishedEvent event) {
        if (!event.isCanceled()) {
            event.damageRodBy(5);
            System.out.println("Fished: " + event.getDrops());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/ItemFishedEvent.java`

### ItemStackedOnOtherEvent.BUS *(Common)*

**When**: This event fires before either of the two vanilla item stacking methods are called, when a carried item is clicked on top of another in a GUI slot.

**Cancellable**: Yes

**Fields**:
```yaml
- name: getCarriedItem
  type: ItemStack
  description: The stack being carried by the mouse, which may be empty
- name: getStackedOnItem
  type: ItemStack
  description: The stack currently in the slot being clicked on, which may be empty
- name: getSlot
  type: Slot
  description: The slot being clicked on
- name: getClickAction
  type: ClickAction
  description: The click action being used. By default, PRIMARY corresponds to left-click, and SECONDARY is right-click.
- name: getPlayer
  type: Player
  description: The player doing the item swap attempt
- name: getCarriedSlotAccess
  type: SlotAccess
  description: A fake slot allowing the listener to see and change what item is being carried
```

**Methods**:
```yaml
- name: isCanceled
  signature: boolean isCanceled()
  description: Returns whether the event has been cancelled.
- name: setCanceled
  signature: void setCanceled(boolean canceled)
  description: Sets the cancellation state of the event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onStackedOnOther(ItemStackedOnOtherEvent event) {
        if (event.getClickAction() == ClickAction.PRIMARY) {
            if (event.isCanceled()) return;
            event.setCanceled(true);
            // Modify carried item
            event.getCarriedSlotAccess().set(ItemStack.EMPTY);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/ItemStackedOnOtherEvent.java`

### ItemTooltipEvent.BUS *(Common)*

**When**: This event fires when a player's tooltip is being rendered for an item, specifically in ItemStack#getTooltipLines(Player, TooltipFlag), which is called from GUI containers. It also fires during startup when populating search trees for tooltips with a null player.

**Cancellable**: No

**Fields**:
```yaml
- name: flags
  type: TooltipFlag
  description: Represents the tooltip flags, which determine if advanced information (like F3+H) is being shown.
- name: itemStack
  type: ItemStack
  description: The item stack that the tooltip belongs to.
- name: toolTip
  type: List<Component>
  description: The list of tooltip components that will be displayed for the item.
```

**Methods**:
```yaml
- name: getFlags
  signature: TooltipFlag getFlags()
  description: Returns the tooltip flags, which indicate if advanced information is being shown.
- name: getItemStack
  signature: @NotNull ItemStack getItemStack()
  description: Returns the item stack that the tooltip is associated with.
- name: getToolTip
  signature: List<Component> getToolTip()
  description: Returns the list of tooltip components that will be displayed.
- name: getEntity
  signature: @Nullable Player getEntity()
  description: Returns the player entity associated with the event, which may be null during startup.
```

**Example**:
```java
@Mod("tooltipmod")
public class TooltipMod {
    @SubscribeEvent
    public void onTooltip(ItemTooltipEvent event) {
        if (event.getFlags().isAdvanced()) {
            event.getToolTip().add(Component.literal("Advanced Info!"));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/ItemTooltipEvent.java`

### ItemTossEvent.BUS *(Common)*

**When**: The ItemTossEvent.BUS fires when a player tosses an item (using the 'Q' key) or drag-n-drops items outside inventory GUI screens.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: Player
  description: The player who tossed the item.
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player who tossed the item.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onItemToss(ItemTossEvent event) {
        if (event.isCanceled()) return;
        Player player = event.getPlayer();
        // Example: Prevent item from being tossed
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/item/ItemTossEvent.java`

### LevelEvent *(Common)*

**When**: This event is fired whenever an event involving a LevelAccessor occurs, such as level loading, unloading, saving, or spawning entities.

**Cancellable**: Unknown

**Fields**:
```yaml
- name: level
  type: LevelAccessor
  description: The level this event is affecting
```

**Methods**:
```yaml
- name: getLevel
  signature: public LevelAccessor getLevel()
  description: Returns the level this event is affecting
- name: addSpawnerData
  signature: public void addSpawnerData(MobSpawnSettings.SpawnerData data, int weight)
  description: Appends a SpawnerData entry to the spawn list
- name: removeSpawnerData
  signature: public boolean removeSpawnerData(MobSpawnSettings.SpawnerData data)
  description: Removes all entries of the given SpawnerData from the spawn list
- name: getMobCategory
  signature: public MobCategory getMobCategory()
  description: Returns the category of the mobs in the spawn list
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the block position where the chosen mob will be spawned
- name: getSpawnerDataList
  signature: public @UnmodifiableView List<Weighted<MobSpawnSettings.SpawnerData>> getSpawnerDataList()
  description: Returns the list of mobs that can potentially be spawned
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPotentialSpawns(PotentialSpawns event) {
        if (!event.isCanceled()) {
            event.addSpawnerData(new MobSpawnSettings.SpawnerData(EntityType.PLAYER, 10), 20);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/LevelEvent.java`

### LevelEvent.BUS *(Common)*

**When**: This event is fired whenever an event involving a LevelAccessor occurs, such as level loading, unloading, saving, or spawning entities.

**Cancellable**: Unknown

**Fields**:
```yaml
- name: level
  type: LevelAccessor
  description: The level this event is affecting
```

**Methods**:
```yaml
- name: getLevel
  signature: public LevelAccessor getLevel()
  description: Returns the level this event is affecting
- name: addSpawnerData
  signature: public void addSpawnerData(MobSpawnSettings.SpawnerData data, int weight)
  description: Appends a SpawnerData entry to the spawn list
- name: removeSpawnerData
  signature: public boolean removeSpawnerData(MobSpawnSettings.SpawnerData data)
  description: Removes all entries of the given SpawnerData from the spawn list
- name: getMobCategory
  signature: public MobCategory getMobCategory()
  description: Returns the category of the mobs in the spawn list
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the block position where the chosen mob will be spawned
- name: getSpawnerDataList
  signature: public @UnmodifiableView List<Weighted<MobSpawnSettings.SpawnerData>> getSpawnerDataList()
  description: Returns the list of mobs that can potentially be spawned
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPotentialSpawns(PotentialSpawns event) {
        if (!event.isCanceled()) {
            event.addSpawnerData(new MobSpawnSettings.SpawnerData(EntityType.ENDERMAN, 10), 20);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/LevelEvent.java`

### LivingAttackEvent.BUS *(Common)*

**When**: The event fires when a living entity is attacked, specifically in the hurt() methods of LivingEntity and Player.

**Cancellable**: Yes

**Fields**:
```yaml
- name: source
  type: DamageSource
  description: The damage source that caused the attack
- name: amount
  type: float
  description: The amount of damage dealt to the entity
```

**Methods**:
```yaml
- name: getSource
  signature: public DamageSource getSource()
  description: Returns the damage source of the attack
- name: getAmount
  signature: public float getAmount()
  description: Returns the amount of damage dealt to the entity
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingAttack(LivingAttackEvent event) {
        if (event.isCanceled()) return;
        System.out.println("Attack from: " + event.getSource().getMsgKey());
        System.out.println("Damage amount: " + event.getAmount());
        // Example cancellation
        // event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingAttackEvent.java`

### LivingBreatheEvent.BUS *(Common)*

**When**: The LivingBreatheEvent is fired every tick for a living entity, specifically when the entity's breathing mechanics are being processed.

**Cancellable**: No

**Fields**:
```yaml
- name: canBreathe
  type: boolean
  description: Determines if the entity can breathe, affecting air consumption/refill behavior.
- name: canRefillAir
  type: boolean
  description: Indicates if the entity can refill its air supply when breathing.
- name: consumeAirAmount
  type: int
  description: The amount of air consumed per tick when the entity cannot breathe.
- name: refillAirAmount
  type: int
  description: The amount of air refilled per tick when the entity can breathe.
```

**Methods**:
```yaml
- name: canBreathe
  signature: public boolean canBreathe()
  description: Returns whether the entity can breathe, affecting air consumption/refill behavior.
- name: setCanBreathe
  signature: public void setCanBreathe(boolean canBreathe)
  description: Sets whether the entity can breathe, modifying the breathing behavior.
- name: canRefillAir
  signature: public boolean canRefillAir()
  description: Returns whether the entity can refill its air supply when breathing.
- name: setCanRefillAir
  signature: public void setCanRefillAir(boolean canRefillAir)
  description: Sets whether the entity can refill its air supply when breathing.
- name: getConsumeAirAmount
  signature: public int getConsumeAirAmount()
  description: Returns the amount of air consumed per tick when the entity cannot breathe.
- name: setConsumeAirAmount
  signature: public void setConsumeAirAmount(int consumeAirAmount)
  description: Sets the amount of air consumed per tick when the entity cannot breathe.
- name: getRefillAirAmount
  signature: public int getRefillAirAmount()
  description: Returns the amount of air refilled per tick when the entity can breathe.
- name: setRefillAirAmount
  signature: public void setRefillAirAmount(int refillAirAmount)
  description: Sets the amount of air refilled per tick when the entity can breathe.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingBreathe(LivingBreatheEvent event) {
        LivingEntity entity = event.getEntity();
        event.setCanBreathe(false);
        event.setConsumeAirAmount(10);
        event.setRefillAirAmount(0);
        event.setCanRefillAir(false);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingBreatheEvent.java`

### LivingChangeTargetEvent.BUS *(Common)*

**When**: This event fires when an entity is about to change its attack target, before the LivingSetAttackTargetEvent is fired.

**Cancellable**: Yes

**Fields**:
```yaml
- name: targetType
  type: ILivingTargetType
  description: The type of target change that occurred, indicating what system caused the target change.
- name: originalTarget
  type: LivingEntity
  description: The target that the entity was originally going to set before this event.
- name: newTarget
  type: LivingEntity
  description: The new target that the entity will have after this event, which can be modified.
```

**Methods**:
```yaml
- name: getNewTarget
  signature: public LivingEntity getNewTarget()
  description: Returns the new target that the entity will have, which can be modified.
- name: setNewTarget
  signature: public void setNewTarget(LivingEntity newTarget)
  description: Sets the new target for the entity, overriding the original target.
- name: getTargetType
  signature: public ILivingTargetType getTargetType()
  description: Returns the type of target change that occurred.
- name: getOriginalTarget
  signature: public LivingEntity getOriginalTarget()
  description: Returns the original target that the entity was going to set before this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingChangeTarget(LivingChangeTargetEvent event) {
        if (event.getTargetType() == LivingChangeTargetEvent.LivingTargetType.MOB_TARGET) {
            event.setNewTarget(null); // Cancel target change
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingChangeTargetEvent.java`

### LivingConversionEvent.BUS *(Common)*

**When**: This event fires when an entity is attempting to convert into another entity type, such as a zombie piglin converting from a pig or a drowned converting from a zombie.

**Cancellable**: Yes

**Fields**:
```yaml
- name: outcome
  type: EntityType<? extends LivingEntity>
  description: The entity type that the living entity is converting to.
- name: timer
  type: Consumer<Integer>
  description: A function to set the conversion timer, which can prevent the event from firing repeatedly.
```

**Methods**:
```yaml
- name: getOutcome
  signature: public EntityType<? extends Living,Entity> getOutcome()
  description: Returns the entity type of the new entity this living entity is converting to.
- name: setConversionTimer
  signature: public void setConversionTimer(int ticks)
  description: Sets the conversion timer, which can prevent the event from firing repeatedly.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onConversion(Pre event) {
        if (event.getOutcome() == EntityType.ZOMBIE_PIGLIN) {
            event.setConversionTimer(20);
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingConversionEvent.java`

### LivingDamageEvent.BUS *(Common)*

**When**: The event fires just before damage is applied to a living entity, specifically in the methods LivingEntity#actuallyHurt and Player#actuallyHurt.

**Cancellable**: Yes

**Fields**:
```yaml
- name: source
  type: DamageSource
  description: The damage source that caused the entity to be hurt.
- name: amount
  type: float
  description: The final amount of damage that will be dealt to the entity.
```

**Methods**:
```yaml
- name: getSource
  signature: public DamageSource getSource()
  description: Returns the damage source that caused the entity to be hurt.
- name: getAmount
  signature: public float getAmount()
  description: Returns the final amount of damage that will be dealt to the entity.
- name: setAmount
  signature: public void setAmount(float amount)
  description: Sets the final amount of damage that will be dealt to the entity.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingDamage(LivingDamageEvent event) {
        if (!event.isCanceled()) {
            event.setAmount(event.getAmount() * 0.5f);
            System.out.println("Damage source: " + event.getSource());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingDamageEvent.java`

### LivingDeathEvent.BUS *(Common)*

**When**: The LivingDeathEvent is fired when a LivingEntity dies, specifically in the die() methods of LivingEntity, Player, and ServerPlayer classes.

**Cancellable**: Yes

**Fields**:
```yaml
- name: source
  type: DamageSource
  description: The damage source that caused the entity to die
```

**Methods**:
```yaml
- name: getSource
  signature: public DamageSource getSource()
  description: Returns the DamageSource that caused the entity to die
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityDeath(LivingDeathEvent event) {
        if (event.isCanceled()) return;
        System.out.println("Entity died from: " + event.getSource().getMsgKey());
        // You could cancel the death by calling event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingDeathEvent.java`

### LivingDestroyBlockEvent.BUS *(Common)*

**When**: This event fires when an entity (specifically ender dragon, wither, or zombie) attempts to destroy a block, such as when a zombie breaks a door or these bosses destroy blocks.

**Cancellable**: Yes

**Fields**:
```yaml
- name: pos
  type: BlockPos
  description: The position in the world where the block destruction is attempted.
- name: state
  type: BlockState
  description: The block state that is being attempted to be destroyed.
```

**Methods**:
```yaml
- name: getState
  signature: public BlockState getState()
  description: Returns the BlockState that is being attempted to be destroyed.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the BlockPos where the block destruction is attempted.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingDestroyBlock(LivingDestroyBlockEvent event) {
        if (event.isCanceled()) return;
        // Check block state or position
        System.out.println("Block destroyed at: " + event.getPos());
        // Cancel block destruction
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingDestroyBlockEvent.java`

### LivingDropsEvent.BUS *(Common)*

**When**: The event fires when an entity dies and drops items in the LivingEntity#die(DamageSource) method.

**Cancellable**: Yes

**Fields**:
```yaml
- name: source
  type: DamageSource
  description: The DamageSource that caused the entity to die and trigger the drop.
- name: drops
  type: Collection<ItemEntity>
  description: The collection of ItemEntity objects that will be dropped as a result of the entity's death.
- name: recentlyHit
  type: boolean
  description: Indicates whether the entity that caused the death has recently been damaged.
```

**Methods**:
```yaml
- name: getSource
  signature: public DamageSource getSource()
  description: Returns the DamageSource that caused the entity to die.
- name: getDrops
  signature: public Collection<ItemEntity> getDrops()
  description: Returns the collection of ItemEntity objects that will be dropped.
- name: isRecentlyHit
  signature: public boolean isRecentlyHit()
  description: Returns whether the entity that caused the death has recently been damaged.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingDrops(LivingDropsEvent event) {
        if (event.isCanceled()) return;
        event.getDrops().forEach(item -> {
            // Modify or add items to drops
        });
        event.setCanceled(true); // Cancel drops
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingDropsEvent.java`

### LivingDrownEvent.BUS *(Common)*

**When**: The LivingDrownEvent is fired when a living entity's air supply reaches zero and they are unable to breathe, specifically when their air supply is less than or equal to zero.

**Cancellable**: Yes

**Fields**:
```yaml
- name: isDrowning
  type: boolean
  description: Indicates if the entity is actively drowning and will take damage.
- name: damageAmount
  type: float
  description: The amount of drowning damage the entity will take if actively drowning.
- name: bubbleCount
  type: int
  description: The number of bubble particles that will be spawned when the entity is actively drowning.
```

**Methods**:
```yaml
- name: isDrowning
  signature: public boolean isDrowning()
  description: Returns true if the entity is actively drowning.
- name: setDrowning
  signature: public void setDrowning(boolean isDrowning)
  description: Sets whether the entity is actively drowning.
- name: getDamageAmount
  signature: public float getDamageAmount()
  description: Returns the amount of drowning damage the entity will take.
- name: setDamageAmount
  signature: public void setDamageAmount(float damageAmount)
  description: Sets the amount of drowning damage the entity will take.
- name: getBubbleCount
  signature: public int getBubbleCount()
  description: Returns the number of bubble particles that will be spawned.
- name: setBubbleCount
  signature: public void setBubbleCount(int bubbleCount)
  description: Sets the number of bubble particles that will be spawned.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onDrown(LivingDrownEvent event) {
        if (event.isDrowning()) {
            event.setDrowning(false);
            event.setDamageAmount(0);
            event.setBubbleCount(0);
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingDrownEvent.java`

### LivingEntityUseItemEvent.BUS *(Common)*

**When**: This event fires when a player starts, continues, or stops using an item, such as drawing a bow, eating food, or defending with a sword.

**Cancellable**: Yes

**Fields**:
```yaml
- name: item
  type: ItemStack
  description: The item stack being used by the entity
- name: duration
  type: int
  description: The remaining duration of the item use action
- name: result
  type: ItemStack
  description: The result item stack after the use action completes (only available in Finish event)
```

**Methods**:
```yaml
- name: getItem
  signature: public @NotNull ItemStack getItem()
  description: Returns the item stack being used
- name: getDuration
  signature: public int getDuration()
  description: Returns the remaining duration of the item use action
- name: setDuration
  signature: public void setDuration(int duration)
  description: Sets the remaining duration of the item use action
- name: getResultStack
  signature: public @NotNull ItemStack getResultStack()
  description: Returns the result item stack after the use action completes (only available in Finish event)
- name: setResultStack
  signature: public void setResultStack(@NotNull ItemStack result)
  description: Sets the result item stack after the use action completes (only available in Finish event)
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onUseItem(LivingEntityUseItemEvent event) {
        if (event instanceof LivingEntityUseItemEvent.Start) {
            LivingEntity entity = event.getEntity();
            ItemStack item = event.getItem();
            if (item.is(Items.BOW)) {
                event.setDuration(20); // Set duration to 20 ticks
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingEntityUseItemEvent.java`

### LivingEquipmentChangeEvent.BUS *(Common)*

**When**: This event fires when the equipment of a LivingEntity changes, including during entity ticks, joining the world, or being cloned.

**Cancellable**: No

**Fields**:
```yaml
- name: slot
  type: EquipmentSlot
  description: The EquipmentSlot that has changed (e.g., MAINHAND, OFFHAND, etc.)
- name: from
  type: ItemStack
  description: The ItemStack that was previously equipped in the slot
- name: to
  type: ItemStack
  description: The ItemStack that is now equipped in the slot
```

**Methods**:
```yaml
- name: getSlot
  signature: public EquipmentSlot getSlot()
  description: Returns the EquipmentSlot that has changed
- name: getFrom
  signature: public ItemStack getFrom()
  description: Returns the previous ItemStack in the slot
- name: getTo
  signature: public ItemStack getTo()
  description: Returns the new ItemStack in the slot
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEquipmentChange(LivingEquipmentChangeEvent event) {
        EquipmentSlot slot = event.getSlot();
        ItemStack oldItem = event.getFrom();
        ItemStack newItem = event.getTo();
        // Handle equipment change logic here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingEquipmentChangeEvent.java`

### LivingEvent.BUS *(Common)*

**When**: The LivingEvent.BUS is fired whenever an event involving a LivingEntity occurs, such as when a LivingEntity is ticked, jumps, or has visibility changes.

**Cancellable**: Unknown

**Fields**:
```yaml
- name: livingEntity
  type: LivingEntity
  description: The LivingEntity associated with the event
```

**Methods**:
```yaml
- name: getEntity
  signature: public LivingEntity getEntity()
  description: Returns the LivingEntity associated with the event
- name: modifyVisibility
  signature: public void modifyVisibility(double mod)
  description: Modifies the visibility modifier for the LivingVisibilityEvent
- name: getVisibilityModifier
  signature: public double getVisibilityModifier()
  description: Returns the current visibility modifier
- name: getLookingEntity
  signature: public Entity getLookingEntity()
  description: Returns the entity trying to see this LivingEntity, if available
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingTick(LivingTickEvent event) {
        if (!event.isCanceled()) {
            event.setCanceled(true);
            // Example usage of getEntity()
            LivingEntity entity = event.getEntity();
            // Example usage of modifyVisibility()
            event.modifyVisibility(0.5);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingEvent.java`

### LivingExperienceDropEvent.BUS *(Common)*

**When**: This event fires when an entity drops experience points upon its death, allowing modders to modify or prevent the experience drop.

**Cancellable**: Yes

**Fields**:
```yaml
- name: attackingPlayer
  type: Player
  description: The player that last attacked the entity and caused the experience drop. Can be null if the player has logged out.
- name: originalExperiencePoints
  type: int
  description: The original amount of experience points that would be dropped without any modifications.
- name: droppedExperiencePoints
  type: int
  description: The amount of experience points that will actually be dropped, which can be modified by modders.
```

**Methods**:
```yaml
- name: getDroppedExperience
  signature: int getDroppedExperience()
  description: Returns the current amount of experience points that will be dropped.
- name: setDroppedExperience
  signature: void setDroppedExperience(int droppedExperience)
  description: Sets the amount of experience points that will be dropped.
- name: getAttackingPlayer
  signature: Player getAttackingPlayer()
  description: Returns the player that last attacked the entity and caused the experience drop.
- name: getOriginalExperience
  signature: int getOriginalExperience()
  description: Returns the original amount of experience points that would be dropped without any modifications.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onExperienceDrop(LivingExperienceDropEvent event) {
        // Prevent experience drop
        event.setDroppedExperience(0);
        // Modify experience amount
        event.setDroppedExperience(100);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingExperienceDropEvent.java`

### LivingFallEvent.BUS *(Common)*

**When**: The event fires when an entity is set to fall, specifically when the causeFallDamage method is called on a LivingEntity.

**Cancellable**: Yes

**Fields**:
```yaml
- name: distance
  type: double
  description: The distance the entity is to fall. If the event is canceled, this value is set to 0.0.
- name: damageMultiplier
  type: float
  description: The multiplier applied to the fall damage calculation.
```

**Methods**:
```yaml
- name: getDistance
  signature: public double getDistance()
  description: Returns the distance the entity is to fall.
- name: setDistance
  signature: public void setDistance(double distance)
  description: Sets the distance the entity is to fall.
- name: getDamageMultiplier
  signature: public float getDamageMultiplier()
  description: Returns the damage multiplier for fall damage.
- name: setDamageMultiplier
  signature: public void setDamageMultiplier(float damageMultiplier)
  description: Sets the damage multiplier for fall damage.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFall(LivingFallEvent event) {
        if (event.isCanceled()) return;
        event.setDistance(0.0);
        event.setDamageMultiplier(0.5f);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingFallEvent.java`

### LivingGetProjectileEvent.BUS *(Common)*

**When**: This event fires when a living entity attempts to get a projectile using the LivingEntity#getProjectile(ItemStack) method.

**Cancellable**: No

**Fields**:
```yaml
- name: projectileWeaponItemStack
  type: ItemStack
  description: The item stack of the item that is looking for a projectile, typically a ProjectileWeaponItem.
- name: projectileItemStack
  type: ItemStack
  description: The item stack of the projectile found, which can be modified by modders.
```

**Methods**:
```yaml
- name: getProjectileWeaponItemStack
  signature: ItemStack getProjectileWeaponItemStack()
  description: Returns the item stack of the projectile weapon item.
- name: getProjectileItemStack
  signature: ItemStack getProjectileItemStack()
  description: Returns the item stack of the projectile found.
- name: setProjectileItemStack
  signature: void setProjectileItemStack(ItemStack projectileItemStack)
  description: Sets the projectile item stack to be used, allowing modders to customize the projectile.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onGetProjectile(LivingGetProjectileEvent event) {
        ItemStack weapon = event.getProjectileWeaponItemStack();
        ItemStack projectile = event.getProjectileItemStack();
        if (projectile.isEmpty()) {
            event.setProjectileItemStack(new ItemStack(Items.ARROW));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingGetProjectileEvent.java`

### LivingHealEvent.BUS *(Common)*

**When**: The event fires when an entity is healed using the heal(float) method of the LivingEntity class.

**Cancellable**: Yes

**Fields**:
```yaml
- name: amount
  type: float
  description: The amount of healing applied to the entity. This value can be modified before the healing occurs.
```

**Methods**:
```yaml
- name: getAmount
  signature: float getAmount()
  description: Retrieves the current healing amount value.
- name: setAmount
  signature: void setAmount(float amount)
  description: Sets the healing amount value before the healing occurs.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingHeal(LivingHealEvent event) {
        if (event.isCanceled()) return;
        event.setAmount(5.0f);
        System.out.println("Healing amount: " + event.getAmount());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingHealEvent.java`

### LivingHurtEvent.BUS *(Common)*

**When**: The LivingHurtEvent is fired when an entity is about to be hurt, specifically in the actuallyHurt method of LivingEntity and Player classes.

**Cancellable**: Yes

**Fields**:
```yaml
- name: source
  type: DamageSource
  description: The damage source that caused the entity to be hurt
- name: amount
  type: float
  description: The amount of damage dealt to the entity
```

**Methods**:
```yaml
- name: getSource
  signature: public DamageSource getSource()
  description: Returns the DamageSource that caused the entity to be hurt
- name: getAmount
  signature: public float getAmount()
  description: Returns the amount of damage dealt to the entity
- name: setAmount
  signature: public void setAmount(float amount)
  description: Sets the amount of damage to be dealt to the entity
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLivingHurt(LivingHurtEvent event) {
        if (!event.isCanceled()) {
            event.setAmount(event.getAmount() * 2);
            System.out.println("Damage source: " + event.getSource().getMsgKey());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingHurtEvent.java`

### LivingKnockBackEvent.BUS *(Common)*

**When**: The LivingKnockBackEvent is fired when a living entity is about to be knocked back, specifically during entity damage events such as hurt(), blockUsingShield(), doHurtTarget(), and attack().

**Cancellable**: Yes

**Fields**:
```yaml
- name: strength
  type: float
  description: The strength of the knockback force applied to the entity.
- name: ratioX
  type: double
  description: The x-axis ratio determining the horizontal direction and magnitude of the knockback.
- name: ratioZ
  type: double
  description: The z-axis ratio determining the horizontal direction and magnitude of the knockback.
- name: originalStrength
  type: float
  description: The original strength value before any modifications via setStrength().
- name: originalRatioX
  type: double
  description: The original x-axis ratio value before any modifications via setRatioX().
- name: originalRatioZ
  type: double
  description: The original z-axis ratio value before any modifications via setRatioZ().
```

**Methods**:
```yaml
- name: getStrength
  signature: public float getStrength()
  description: Returns the current strength value of the knockback.
- name: getRatioX
  signature: public double getRatioX()
  description: Returns the current x-axis ratio of the knockback.
- name: getRatioZ
  signature: public double getRatioZ()
  description: Returns the current z-axis ratio of the knockback.
- name: getOriginalStrength
  signature: public float getOriginalStrength()
  description: Returns the original strength value before modifications.
- name: getOriginalRatioX
  signature: public double getOriginalRatioX()
  description: Returns the original x-axis ratio value before modifications.
- name: getOriginalRatioZ
  signature: public double getOriginalRatioZ()
  description: Returns the original z-axis ratio value before modifications.
- name: setStrength
  signature: public void setStrength(float strength)
  description: Sets the strength value of the knockback.
- name: setRatioX
  signature: public void setRatioX(double ratioX)
  description: Sets the x-axis ratio of the knockback.
- name: setRatioZ
  signature: public void setRatioZ(double ratioZ)
  description: Sets the z-axis ratio of the knockback.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onKnockback(LivingKnockBackEvent event) {
        if (event.isCanceled()) return;
        // Modify knockback strength
        event.setStrength(5.0f);
        // Modify knockback direction
        event.setRatioX(0.8);
        event.setRatioZ(0.6);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingKnockBackEvent.java`

### LivingMakeBrainEvent.BUS *(Common)*

**When**: This event fires when a new Brain instance is created for a LivingEntity using the makeBrain(Dynamic) method.

**Cancellable**: No

**Fields**:
```yaml
- name: brainBuilder
  type: BrainBuilder<?>
  description: The BrainBuilder instance used to create the new Brain for the entity
```

**Methods**:
```yaml
- name: getTypedBrainBuilder
  signature: <E extends LivingEntity> BrainBuilder<E> getTypedBrainBuilder(E ignoredEntity)
  description: Returns the BrainBuilder with type casting to the specific LivingEntity type
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onMakeBrain(LivingMakeBrainEvent event) {
        BrainBuilder<?> builder = event.brainBuilder;
        // Modify the brain builder here
        // Example: builder.addMemory(YourMemoryType.create(...));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingMakeBrainEvent.java`

### LivingPackSizeEvent.BUS *(Common)*

**When**: This event fires when the spawning system determines the maximum amount of the selected entity that can spawn at the same time.

**Cancellable**: No

**Fields**:
```yaml
- name: maxPackSize
  type: int
  description: The maximum number of entities that can spawn in a pack for the current entity.
- name: result
  type: Result
  description: The result of the event processing, used to indicate whether the pack size should be modified.
```

**Methods**:
```yaml
- name: getMaxPackSize
  signature: int getMaxPackSize()
  description: Returns the current maximum pack size value.
- name: setMaxPackSize
  signature: void setMaxPackSize(int maxPackSize)
  description: Sets the maximum pack size value for the current entity.
- name: getResult
  signature: Result getResult()
  description: Returns the result of the event processing.
- name: setResult
  signature: void setResult(Result result)
  description: Sets the result of the event processing, indicating whether the pack size should be modified.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPackSize(LivingPackSizeEvent event) {
        if (event.getResult() == Result.DENY) return;
        event.setMaxPackSize(5);
        event.setResult(Result.ALLOW);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingPackSizeEvent.java`

### LivingSwapItemsEvent.BUS *(Common)*

**When**: This event fires when a living entity is about to swap the items in their main and offhand, specifically during the handling of player actions on the server side.

**Cancellable**: Yes

**Fields**:
```yaml
- name: toMainHand
  type: ItemStack
  description: The item that will be swapped to the main hand of the entity.
- name: toOffHand
  type: ItemStack
  description: The item that will be swapped to the offhand of the entity.
```

**Methods**:
```yaml
- name: getItemSwappedToMainHand
  signature: public ItemStack getItemSwappedToMainHand()
  description: Gets the item that will be swapped to the main hand of the entity.
- name: getItemSwappedToOffHand
  signature: public ItemStack getItemSwappedToOffHand()
  description: Gets the item that will be swapped to the offhand of the entity.
- name: setItemSwappedToMainHand
  signature: public void setItemSwappedToMainHand(ItemStack item)
  description: Sets the item that will be swapped to the main hand of the entity.
- name: setItemSwappedToOffHand
  signature: public void setItemSwappedToOffHand(ItemStack item)
  description: Sets the item that will be swapped to the offhand of the entity.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSwapItems(LivingSwapItemsEvent.Hands event) {
        if (event.isCanceled()) return;
        event.setItemSwappedToMainHand(new ItemStack(Items.DIAMOND_SWORD));
        event.setItemSwappedToOffHand(new ItemStack(Items.GOLDEN_APPLE));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingSwapItemsEvent.java`

### LivingSwapItemsEvent.EVENT_BUS *(Common)*

**When**: This event fires when a living entity is about to swap the items in their main and offhand, specifically during the handling of player actions on the server side.

**Cancellable**: Yes

**Fields**:
```yaml
- name: toMainHand
  type: ItemStack
  description: The item that will be swapped to the main hand of the entity.
- name: toOffHand
  type: ItemStack
  description: The item that will be swapped to the offhand of the entity.
```

**Methods**:
```yaml
- name: getItemSwappedToMainHand
  signature: public ItemStack getItemSwappedToMainHand()
  description: Gets the item that will be swapped to the main hand of the entity.
- name: getItemSwappedToOffHand
  signature: public ItemStack getItemSwappedToOffHand()
  description: Gets the item that will be swapped to the offhand of the entity.
- name: setItemSwappedToMainHand
  signature: public void setItemSwappedToMainHand(ItemStack item)
  description: Sets the item that will be swapped to the main hand of the entity.
- name: setItemSwappedToOffHand
  signature: public void setItemSwappedToOffHand(ItemStack item)
  description: Sets the item that will be swapped to the offhand of the entity.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSwapItems(LivingSwapItemsEvent.Hands event) {
        if (!event.isCanceled()) {
            ItemStack main = event.getItemSwappedToMainHand();
            ItemStack off = event.getItemSwappedToOffHand();
            // Modify items before swap
            event.setItemSwappedToMainHand(main.copy());
            event.setItemSwappedToOffHand(off.copy());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingSwapItemsEvent.java`

### LivingUseTotemEvent.BUS *(Common)*

**When**: This event fires when an entity attempts to use a totem to prevent its death, specifically when the entity is about to die from damage and is using a totem of undying.

**Cancellable**: Yes

**Fields**:
```yaml
- name: source
  type: DamageSource
  description: The damage source that caused the entity to die
- name: totem
  type: ItemStack
  description: The totem of undying being used from the entity's inventory
- name: hand
  type: InteractionHand
  description: The hand holding the totem
```

**Methods**:
```yaml
- name: getSource
  signature: public DamageSource getSource()
  description: Returns the damage source that caused the entity to die
- name: getTotem
  signature: public ItemStack getTotem()
  description: Returns the totem of undying being used from the entity's inventory
- name: getHandHolding
  signature: public InteractionHand getHandHolding()
  description: Returns the hand holding the totem
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onUseTotem(LivingUseTotemEvent event) {
        if (!event.isCanceled()) {
            event.setCanceled(true);
            // Example usage: get the damage source and totem
            DamageSource source = event.getSource();
            ItemStack totem = event.getTotem();
            // Additional logic here
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LivingUseTotemEvent.java`

### LootingLevelEvent.BUS *(Common)*

**When**: This event fires when the looting level of a living entity is being modified, typically during damage events.

**Cancellable**: No

**Fields**:
```yaml
- name: damageSource
  type: net.minecraft.world.damagesource.DamageSource
  description: The damage source that caused the looting level change, if any.
- name: lootingLevel
  type: int
  description: The current looting level of the affected living entity.
```

**Methods**:
```yaml
- name: getDamageSource
  signature: net.minecraft.world.damagesource.DamageSource getDamageSource()
  description: Returns the damage source that caused the looting level change.
- name: getLootingLevel
  signature: int getLootingLevel()
  description: Returns the current looting level of the affected entity.
- name: setLootingLevel
  signature: void setLootingLevel(int lootingLevel)
  description: Sets the looting level of the affected entity.
```

**Example**:
```java
@Mod("lootingmod")
public class LootingMod {
    @SubscribeEvent
    public void onLootingLevel(LootingLevelEvent event) {
        if (event.getDamageSource() != null) {
            event.setLootingLevel(event.getLootingLevel() + 1);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/LootingLevelEvent.java`

### LootTableLoadEvent *(Common)*

**When**: When a LootTable is loaded from JSON, excluding those loaded from world save datapacks

**Cancellable**: Yes

**Fields**:
```yaml
- name: name
  type: ResourceLocation
  description: The identifier of the loot table being loaded
- name: table
  type: LootTable
  description: The loot table object being loaded
```

**Methods**:
```yaml
- name: getName
  signature: ResourceLocation getName()
  description: Returns the identifier of the loot table
- name: getTable
  signature: LootTable getTable()
  description: Returns the loot table object
- name: setTable
  signature: void setTable(LootTable table)
  description: Sets the loot table object, allowing modification of the table
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLootTableLoad(LootTableLoadEvent event) {
        if (!event.isCanceled()) {
            event.setTable(event.getTable().withPool(event.getTable().getPool(0).withEntry(0, new LootPool.Builder().withEntry(LootItem.lootTableItem(Items.DIAMOND).build()))));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/LootTableLoadEvent.java`

### LootTableLoadEvent.BUS *(Common)*

**When**: This event fires when a LootTable is loaded from JSON, excluding those loaded from world save datapacks. It is triggered during server resource loading or reloading.

**Cancellable**: Yes

**Fields**:
```yaml
- name: name
  type: ResourceLocation
  description: The identifier of the loot table being loaded.
- name: table
  type: LootTable
  description: The loot table object being loaded, which can be modified.
```

**Methods**:
```yaml
- name: getName
  signature: ResourceLocation getName()
  description: Returns the ResourceLocation identifier of the loot table.
- name: getTable
  signature: LootTable getTable()
  description: Returns the loot table object being loaded.
- name: setTable
  signature: void setTable(LootTable table)
  description: Sets the loot table object, allowing modification of the table being loaded.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLootTableLoad(LootTableLoadEvent event) {
        if (!event.isCanceled()) {
            event.setTable(event.getTable().withPool(event.getTable().getPool(0).withEntry(...)));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/LootTableLoadEvent.java`

### MobEffectEvent.BUS *(Common)*

**When**: This event is fired when a MobEffectInstance interacts with a LivingEntity, such as when an effect is applied, removed, checked for applicability, or expires.

**Cancellable**: Unknown

**Fields**:
```yaml
- name: effectInstance
  type: MobEffectInstance
  description: The MobEffectInstance that is being interacted with (applied, removed, checked, or expired).
```

**Methods**:
```yaml
- name: getEffectInstance
  signature: MobEffectInstance getEffectInstance()
  description: Returns the MobEffectInstance associated with this event.
- name: getOldEffectInstance
  signature: MobEffectInstance getOldEffectInstance()
  description: Returns the previous MobEffectInstance if the effect was updated or added.
- name: getEffectSource
  signature: Entity getEffectSource()
  description: Returns the entity that caused the effect to be added.
- name: getResult
  signature: Result getResult()
  description: Returns the result of the applicability check for the effect.
- name: setResult
  signature: void setResult(Result result)
  description: Sets the result of the applicability check for the effect.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onMobEffectApplicable(MobEffectEvent.Applicable event) {
        // Check if the effect is applicable
        if (event.getResult() == Result.DEFAULT) {
            // Modify the result to deny the effect
            event.setResult(Result.DENY);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/MobEffectEvent.java`

### MobSpawnEvent.BUS *(Common)*

**When**: 2023-10-15T12:34:15.000Z

**Cancellable**: false

**Fields**:
```yaml
- name: result
  type: Result
  description: This field indicates the result of the despawn check. Result.DEFAULT means the default despawn mechanics should be used. Result.ALLOW means the mob should forcefully despawn. Result.DENY means the mob should forcefully stay spawned.
```

**Methods**:
```yaml
- name: setResult
  signature: public void setResult(Result result)
  description: Sets the result of the despawn check. This will override the default despawn behavior.
- name: getResult
  signature: public Result getResult()
  description: Returns the current result of the despawn check.
```

**Example**:
```java
If you want to force a mob to despawn, you can set the result to Result.ALLOW:
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/MobSpawnEvent.java`

### ModMismatchEvent.getBus *(Common)*

**When**: When the mod loader is loading a world that was last saved with mod versions different from the currently-loaded versions.

**Cancellable**: No

**Fields**:
```yaml
- name: levelDirectory
  type: LevelStorageSource.LevelDirectory
  description: The level being loaded. Useful for file operations and manual modification of mod files before world load.
- name: versionDifferences
  type: HashMap<String, MismatchedVersionInfo>
  description: A set of previously-known versions that have mismatched with the currently loaded versions.
- name: resolved
  type: HashMap<String, ModContainer>
  description: Which mods have specified that they have handled version mismatches.
```

**Methods**:
```yaml
- name: getLevelDirectory
  signature: public LevelStorageSource.LevelDirectory getLevelDirectory()
  description: Gets the current level directory for the world being loaded.
- name: getPreviousVersion
  signature: public ArtifactVersion getPreviousVersion(String modId)
  description: Fetch a previous version of a given mod, if it has been mismatched.
- name: getCurrentVersion
  signature: public ArtifactVersion getCurrentVersion(String modid)
  description: Fetch the current version of a given mod, if it has been mismatched.
- name: markResolved
  signature: public void markResolved(String modId)
  description: Marks the mod version mismatch as having been resolved safely by the current mod.
- name: wasResolved
  signature: public boolean wasResolved(String modId)
  description: Fetches the status of a mod mismatch handling state.
- name: getVersionDifference
  signature: public Optional<MismatchedVersionInfo> getVersionDifference(String modid)
  description: Fetches the version difference information for a specific mod.
- name: getResolver
  signature: public Optional<ModContainer> getResolver(String modid)
  description: Fetches the resolver for a specific mod version mismatch.
- name: anyUnresolved
  signature: public boolean anyUnresolved()
  description: Checks if there are any unresolved version mismatches.
- name: getUnresolved
  signature: public Stream<MismatchResolutionResult> getUnresolved()
  description: Gets a stream of unresolved version mismatch results.
- name: anyResolved
  signature: public boolean anyResolved()
  description: Checks if there are any resolved version mismatches.
- name: getResolved
  signature: public Stream<MismatchResolutionResult> getResolved()
  description: Gets a stream of resolved version mismatch results.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onModMismatch(ModMismatchEvent event) {
        if (event.anyUnresolved()) {
            for (var result : event.getUnresolved()) {
                ModContainer resolver = result.getResolver().orElse(null);
                if (resolver != null && resolver.getModId().equals("examplemod")) {
                    event.markResolved(result.modid());
                }
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/ModMismatchEvent.java`

### MonsterDisguiseEvent.BUS *(Common)*

**When**: This event fires on the Forge event bus before a Monster detects that a player is looking at them.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: Player
  description: The player that is being checked for detection.
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player that is being checked for detection.
- name: getEntity
  signature: public Monster getEntity()
  description: Returns the Monster entity associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onMonsterDisguise(MonsterDisguiseEvent event) {
        if (!event.isCanceled()) {
            Player player = event.getPlayer();
            Monster monster = event.getEntity();
            // Custom logic to prevent monster from targeting player
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/MonsterDisguiseEvent.java`

### NoteBlockEvent.BUS *(Common)*

**When**: The event fires when a Noteblock plays its note or is changed, depending on the specific event type (Play or Change).

**Cancellable**: Yes

**Fields**:
```yaml
- name: noteId
  type: int
  description: The vanilla note ID that combines both note and octave information.
- name: world
  type: Level
  description: The level (world) where the Noteblock is located.
- name: pos
  type: BlockPos
  description: The position of the Noteblock in the world.
- name: state
  type: BlockState
  description: The current block state of the Noteblock.
```

**Methods**:
```yaml
- name: getNote
  signature: public Note getNote()
  description: Returns the note the Noteblock is tuned to.
- name: getOctave
  signature: public Octave getOctave()
  description: Returns the octave of the note the Noteblock is tuned to.
- name: setNote
  signature: public void setNote(Note note, Octave octave)
  description: Sets the note and octave for the Noteblock.
- name: getVanillaNoteId
  signature: public int getVanillaNoteId()
  description: Returns the vanilla note ID that combines both note and octave information.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onNoteBlockPlay(NoteBlockEvent.Play event) {
        if (!event.isCanceled()) {
            event.setNote(Note.F_SHARP, Octave.HIGH);
            event.setInstrument(NoteBlockInstrument.HARP);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/NoteBlockEvent.java`

### OnDatapackSyncEvent.BUS *(Common)*

**When**: Fires when a player joins the server or when the reload command is executed, before tags and crafting recipes are sent to the client.

**Cancellable**: No

**Fields**:
```yaml
- name: getPlayerList
  type: PlayerList
  description: The server's player list used to get a view of all players.
- name: getPlayer
  type: ServerPlayer
  description: The specific player to sync datapacks to. Null when syncing for all players (e.g., during reload command).
```

**Methods**:
```yaml
- name: getPlayers
  signature: public List<ServerPlayer> getPlayers()
  description: Returns a list of players that should receive data during this event. If getPlayer is null, returns all players from getPlayerList.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onDatapackSync(OnDatapackSyncEvent event) {
        List<ServerPlayer> players = event.getPlayers();
        if (players != null && !players.isEmpty()) {
            for (ServerPlayer player : players) {
                // Send datapack data to player
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/OnDatapackSyncEvent.java`

### PermissionsChangedEvent.BUS *(Common)*

**When**: This event fires when a player's permission level changes, such as when they are op'ed or de-op'ed.

**Cancellable**: Yes

**Fields**:
```yaml
- name: newLevel
  type: int
  description: The new permission level of the player after the change.
- name: oldLevel
  type: int
  description: The previous permission level of the player before the change.
```

**Methods**:
```yaml
- name: getNewLevel
  signature: int getNewLevel()
  description: Returns the new permission level of the player.
- name: getOldLevel
  signature: int getOldLevel()
  description: Returns the old permission level of the player.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPermissionsChange(PermissionsChangedEvent event) {
        if (event.isCanceled()) return;
        ServerPlayer player = event.getPlayer();
        int oldLevel = event.getOldLevel();
        int newLevel = event.getNewLevel();
        // Handle permission change logic here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PermissionsChangedEvent.java`

### PistonEvent.BUS *(Common)*

**When**: This event fires during piston movement, specifically after the piston has moved and set surrounding block states.

**Cancellable**: No

**Fields**:
```yaml
- name: direction
  type: Direction
  description: The direction the piston is facing or moving.
- name: moveType
  type: PistonMoveType
  description: The type of movement (extension or retraction) of the piston.
- name: level
  type: Level
  description: The world level where the piston is located.
- name: pos
  type: BlockPos
  description: The position of the piston block in the world.
```

**Methods**:
```yaml
- name: getDirection
  signature: public Direction getDirection()
  description: Returns the direction the piston is facing or moving.
- name: getFaceOffsetPos
  signature: public BlockPos getFaceOffsetPos()
  description: Returns the position offset by the piston's facing direction.
- name: getPistonMoveType
  signature: public PistonMoveType getPistonMoveType()
  description: Returns the type of piston movement (extension or retraction).
- name: getStructureHelper
  signature: public PistonStructureResolver getStructureHelper()
  description: Returns a piston structure helper for this movement, or null if the world is not a Level.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPistonMove(PistonEvent.Post event) {
        Direction dir = event.getDirection();
        BlockPos facePos = event.getFaceOffsetPos();
        System.out.println("Piston moved in direction: " + dir + " at position: " + facePos);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/PistonEvent.java`

### PlayerBrewedPotionEvent.BUS *(Common)*

**When**: This event fires when a player successfully brews a potion and picks it up from a brewing stand.

**Cancellable**: No

**Fields**:
```yaml
- name: stack
  type: ItemStack
  description: The potion item stack that was brewed and picked up.
```

**Methods**:
```yaml
- name: getStack
  signature: public ItemStack getStack()
  description: Returns the potion item stack that was brewed and picked up.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBrewedPotion(PlayerBrewedPotionEvent event) {
        ItemStack potion = event.getStack();
        // Do something with the potion stack
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/brewing/PlayerBrewedPotionEvent.java`

### PlayerContainerEvent.BUS *(Common)*

**When**: This event fires when a player interacts with a container (such as opening or closing a chest, inventory, or other container GUI).

**Cancellable**: No

**Fields**:
```yaml
- name: container
  type: AbstractContainerMenu
  description: The container menu that the player is interacting with.
```

**Methods**:
```yaml
- name: getContainer
  signature: public AbstractContainerMenu getContainer()
  description: Returns the container menu associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onContainerOpen(PlayerContainerEvent.Open event) {
        if (event.getContainer() != null) {
            System.out.println("Container opened: " + event.getContainer().getTitle());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerContainerEvent.java`

### PlayerDestroyItemEvent.BUS *(Common)*

**When**: When a player destroys an item through various actions such as breaking blocks, using items, attacking entities, or destroying items via crafting

**Cancellable**: No

**Fields**:
```yaml
- name: original
  type: ItemStack
  description: The original ItemStack before it was destroyed
- name: slot
  type: EquipmentSlot
  description: The EquipmentSlot where the item was held, or null if the item was destroyed through non-hand-based actions
```

**Methods**:
```yaml
- name: getOriginal
  signature: public ItemStack getOriginal()
  description: Returns the original ItemStack that was destroyed
- name: getSlot
  signature: public EquipmentSlot getSlot()
  description: Returns the EquipmentSlot where the item was held, or null if the item was destroyed through non-hand-based actions
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlayerDestroyItem(PlayerDestroyItemEvent event) {
        ItemStack original = event.getOriginal();
        EquipmentSlot slot = event.getSlot();
        // Example: Log the destroyed item and slot
        System.out.println("Destroyed item: " + original.getItem().getRegistryName() + " in slot: " + (slot != null ? slot.getName() : "none"));
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerDestroyItemEvent.java`

### PlayerEvent.BUS *(Common)*

**When**: 2023-04-10T12:34:17.000Z

**Cancellable**: true

**Fields**:
```yaml
- name: player
  type: Player
  description: The player whose game mode is being changed.
- name: currentGameMode
  type: GameType
  description: The current game mode of the player.
- name: newGameMode
  type: GameType
  description: The new game mode that the player is being changed to.
```

**Methods**:
```yaml
- name: setNewGameMode
  signature: (GameType newGameMode)
  description: Sets the game mode the player will be changed to if this event is not cancelled.
```

**Example**:
```java
if (event.isCancelled()) {
    // Do not change the game mode
} else {
    event.setNewGameMode(GameType.SURVIVAL);
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerEvent.java`

### PlayerFlyableFallEvent.BUS *(Common)*

**When**: This event fires when a player falls while being able to fly, such as when using an elytra or a potion effect that allows flight.

**Cancellable**: No

**Fields**:
```yaml
- name: distance
  type: float
  description: The distance the player fell before the event occurs.
- name: multiplier
  type: float
  description: A multiplier that affects the fall damage calculation.
```

**Methods**:
```yaml
- name: getDistance
  signature: public float getDistance()
  description: Returns the distance the player fell.
- name: setDistance
  signature: public void setDistance(float distance)
  description: Sets the distance the player fell.
- name: getMultiplier
  signature: public float getMultiplier()
  description: Returns the multiplier affecting fall damage.
- name: setMultiplier
  signature: public void setMultiplier(float multiplier)
  description: Sets the multiplier affecting fall damage.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFlyableFall(PlayerFlyableFallEvent event) {
        // Log fall distance and multiplier
        System.out.println("Fall distance: " + event.getDistance() + " multiplier: " + event.getMultiplier());
        // Modify multiplier for custom fall damage
        event.setMultiplier(0.5f);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerFlyableFallEvent.java`

### PlayerInteractEvent.BUS *(Common)*

**When**: 2024-05-25T14:54:00.000+02:00

**Cancellable**: true

**Fields**:
```yaml
- name: hand
  type: InteractionHand
  description: The hand involved in this interaction. Will never be null.
- name: pos
  type: BlockPos
  description: If the interaction was on an entity, will be a BlockPos centered on the entity. If the interaction was on a block, will be the position of that block. Otherwise, will be a BlockPos centered on the player. Will never be null.
- name: face
  type: Direction
  description: The face involved in the interaction. For all non-block interactions, this will return null.
- name: entity
  type: Entity
  description: The entity involved in the interaction. Will never be null.
- name: cancellationResult
  type: InteractionResult
  description: The InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant method of the event. By default, this is InteractionResult.PASS, meaning cancelled events will cause the client to keep trying more interactions until something works.
```

**Methods**:
```yaml
- name: getHand
  signature: InteractionHand getHand()
  description: The hand involved in this interaction. Will never be null.
- name: getPos
  signature: BlockPos getPos()
  description: If the interaction was on an entity, will be a BlockPos centered on the entity. If the interaction was on a block, will be the position of that block. Otherwise, will be a BlockPos centered on the player. Will never be null.
- name: getFace
  signature: Direction getFace()
  description: The face involved in the interaction. For all non-block interactions, this will return null.
- name: getEntity
  signature: Entity getEntity()
  description: The entity involved in the interaction. Will never be null.
- name: getLevel
  signature: Level getLevel()
  description: The level of the interaction.
- name: getSide
  signature: LogicalSide getSide()
  description: The effective, i.e. logical, side of this interaction. This will be LogicalSide.CLIENT on the client thread, and LogicalSide.SERVER on the server thread.
- name: getCancellationResult
  signature: InteractionResult getCancellationResult()
  description: The InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant method of the event. By default, this is InteractionResult.PASS, meaning cancelled events will cause the client to keep trying more interactions until something works.
- name: setCancellationResult
  signature: void setCancellationResult(InteractionResult result)
  description: Set the InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant method of the event. Note that this only has an effect on RightClickBlock, RightClickItem, EntityInteract, and EntityInteractSpecific.
```

**Example**:
```java
event.getHand(); // Get the hand involved in the interaction
event.getPos(); // Get the position of the interaction
event.getEntity(); // Get the entity involved in the interaction
event.getCancellationResult(); // Get the cancellation result
event.setCancellationResult(InteractionResult.SUCCESS); // Set the cancellation result to success
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerInteractEvent.java`

### PlayerSetSpawnEvent.BUS *(Common)*

**When**: This event fires when a player's spawn point is set or reset, typically when the player uses the /setspawn command or the spawn point is programmatically changed.

**Cancellable**: Yes

**Fields**:
```yaml
- name: config
  type: ServerPlayer.RespawnConfig
  description: The configuration object for the player's respawn settings, containing details about the new spawn point.
- name: spawnLevel
  type: ResourceKey<Level>
  description: The dimension where the player will respawn, deprecated in favor of using the config object.
- name: forced
  type: boolean
  description: Whether the spawn point change is forced, deprecated in favor of using the config object.
- name: newSpawn
  type: BlockPos
  description: The new spawn position, or null if the spawn point is being reset, deprecated in favor of using the config object.
```

**Methods**:
```yaml
- name: getConfig
  signature: public @Nullable ServerPlayer.RespawnConfig getConfig()
  description: Returns the respawn configuration object containing detailed spawn settings.
- name: isForced
  signature: public boolean isForced()
  description: Returns whether the spawn point change is forced (deprecated, use getConfig() instead).
- name: getNewSpawn
  signature: public @Nullable BlockPos getNewSpawn()
  description: Returns the new spawn position, or null if the spawn point is being reset (deprecated, use getConfig() instead).
- name: getSpawnLevel
  signature: public ResourceKey<Level> getSpawnLevel()
  description: Returns the dimension for the new spawn point, defaulting to OVERWORLD if null (deprecated, use getConfig() instead).
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSetSpawn(PlayerSetSpawnEvent event) {
        if (!event.isCanceled()) {
            ServerPlayer player = event.getPlayer();
            ServerPlayer.RespawnConfig config = event.getConfig();
            if (config != null) {
                player.setRespawnPosition(config.pos(), config.dimension(), config.forced());
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerSetSpawnEvent.java`

### PlayerSleepInBedEvent.BUS *(Common)*

**When**: The event fires when a player attempts to sleep in a bed using the startSleeping method.

**Cancellable**: No

**Fields**:
```yaml
- name: result
  type: BedSleepingProblem
  description: Represents the result of the bed sleeping attempt, indicating if the player was able to sleep or encountered an issue.
- name: pos
  type: Optional<BlockPos>
  description: The position of the bed where the player attempted to sleep.
```

**Methods**:
```yaml
- name: getResultStatus
  signature: BedSleepingProblem getResultStatus()
  description: Returns the result of the bed sleeping attempt.
- name: setResult
  signature: void setResult(BedSleepingProblem result)
  description: Sets the result of the bed sleeping attempt.
- name: getPos
  signature: BlockPos getPos()
  description: Returns the position of the bed where the player attempted to sleep.
- name: getOptionalPos
  signature: Optional<BlockPos> getOptionalPos()
  description: Returns the bed position as an Optional object.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlayerSleepInBed(PlayerSleepInBedEvent event) {
        BlockPos bedPos = event.getPos();
        if (bedPos != null) {
            event.setResult(BedSleepingProblem.OK);
            System.out.println("Player tried to sleep at: " + bedPos);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerSleepInBedEvent.java`

### PlayerSpawnPhantomsEvent.BUS *(Common)*

**When**: This event fires once per player during the PhantomSpawner#tick method, when phantoms would attempt to be spawned, but before any per-player checks (after Player#isSpectator()).

**Cancellable**: No

**Fields**:
```yaml
- name: phantomsToSpawn
  type: int
  description: The number of phantoms that will be spawned if spawning is successful. This value can be modified to control phantom spawning behavior.
- name: result
  type: Result
  description: Determines if phantoms will be spawned. Can be set to ALLOW, DENY, or DEFAULT to let vanilla checks decide.
```

**Methods**:
```yaml
- name: getPhantomsToSpawn
  signature: public int getPhantomsToSpawn()
  description: Returns the number of phantoms that will be spawned if spawning is successful.
- name: setPhantomsToSpawn
  signature: public void setPhantomsToSpawn(int phantomsToSpawn)
  description: Sets the number of phantoms to be spawned, overriding the default value.
- name: getResult
  signature: public Result getResult()
  description: Returns the current result of the event, which determines if phantoms will be spawned.
- name: setResult
  signature: public void setResult(@NotNull Result result)
  description: Sets the result of the event, controlling whether phantoms will be spawned.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPhantomSpawn(PlayerSpawnPhantomsEvent event) {
        // Modify the number of phantoms to spawn
        event.setPhantomsToSpawn(5);
        
        // Or control spawning based on conditions
        if (event.getPlayer().isInCreativeMode()) {
            event.setResult(Result.ALLOW);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerSpawnPhantomsEvent.java`

### PlayerWakeUpEvent.BUS *(Common)*

**When**: The event fires when a player is waking up, specifically during the transition from sleeping to being awake.

**Cancellable**: No

**Fields**:
```yaml
- name: wakeImmediately
  type: boolean
  description: Indicates if the player should wake up immediately with the 'wake up animation' disabled. False means the player is considered 'sleepy' and the overlay should fade away.
- name: updateLevel
  type: boolean
  description: Indicates if the server should be notified of sleeping changes. False means the server is considered 'up to date' already.
```

**Methods**:
```yaml
- name: wakeImmediately
  signature: boolean wakeImmediately()
  description: Returns whether the player should wake up immediately with the 'wake up animation' disabled.
- name: updateLevel
  signature: boolean updateLevel()
  description: Returns whether the server should be notified of sleeping changes.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlayerWakeUp(PlayerWakeUpEvent event) {
        if (event.wakeImmediately()) {
            System.out.println("Player woke up immediately!");
        }
        if (event.updateLevel()) {
            System.out.println("Server will be notified of sleeping changes.");
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerWakeUpEvent.java`

### PlayerXpEvent.BUS *(Common)*

**When**: The PlayerXpEvent is fired when player experience-related events occur, including picking up experience orbs, changing experience points, or changing experience levels.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: Player
  description: The player entity associated with the event.
- name: orb
  type: ExperienceOrb
  description: The experience orb involved in the pickup event.
- name: amount
  type: int
  description: The amount of experience points involved in the change.
- name: levels
  type: int
  description: The number of experience levels involved in the change.
```

**Methods**:
```yaml
- name: getOrb
  signature: ExperienceOrb getOrb()
  description: Returns the experience orb involved in the pickup event.
- name: getAmount
  signature: int getAmount()
  description: Returns the amount of experience points involved in the change.
- name: setAmount
  signature: void setAmount(int amount)
  description: Sets the amount of experience points for the change.
- name: getLevels
  signature: int getLevels()
  description: Returns the number of experience levels involved in the change.
- name: setLevels
  signature: void setLevels(int levels)
  description: Sets the number of experience levels for the change.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPickupXp(PickupXp event) {
        if (!event.isCanceled()) {
            event.setCanceled(true);
            System.out.println("Picked up orb: " + event.getOrb());
        }
    }

    @SubscribeEvent
    public void onXpChange(XpChange event) {
        if (!event.isCanceled()) {
            event.setAmount(100);
            System.out.println("Experience changed by: " + event.getAmount());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/PlayerXpEvent.java`

### PlayLevelSoundEvent.BUS *(Common)*

**When**: When a sound is played on a Level using Level.playSound, Level.playSeededSound, or LocalPlayer.playSound

**Cancellable**: Yes

**Fields**:
```yaml
- name: level
  type: Level
  description: The Level where the sound is being played
- name: sound
  type: Holder<SoundEvent>
  description: The sound event to be played
- name: source
  type: SoundSource
  description: The sound source (environment type)
- name: originalVolume
  type: float
  description: Original volume for the sound
- name: originalPitch
  type: float
  description: Original pitch for the sound
- name: newVolume
  type: float
  description: Volume the sound will be played at
- name: newPitch
  type: float
  description: Pitch the sound will be played at
```

**Methods**:
```yaml
- name: getLevel
  signature: @NotNull Level getLevel()
  description: Returns the Level where the sound is being played
- name: getSound
  signature: @Nullable Holder<SoundEvent> getSound()
  description: Returns the sound event to be played
- name: setSound
  signature: void setSound(@Nullable Holder<SoundEvent> sound)
  description: Sets the sound event to be played
- name: getSource
  signature: @NotNull SoundSource getSource()
  description: Returns the sound source
- name: setSource
  signature: void setSource(@NotNull SoundSource source)
  description: Sets the sound source
- name: getOriginalVolume
  signature: float getOriginalVolume()
  description: Returns the original volume for the sound
- name: getOriginalPitch
  signature: float getOriginalPitch()
  description: Returns the original pitch for the sound
- name: getNewVolume
  signature: float getNewVolume()
  description: Returns the volume the sound will be played at
- name: setNewVolume
  signature: void setNewVolume(float newVolume)
  description: Sets the volume the sound will be played at
- name: getNewPitch
  signature: float getNewPitch()
  description: Returns the pitch the sound will be played at
- name: setNewPitch
  signature: void setNewPitch(float newPitch)
  description: Sets the pitch the sound will be played at
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlaySound(PlayLevelSoundEvent event) {
        if (event.getNewVolume() < 0.5f) {
            event.setNewVolume(0.5f);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/PlayLevelSoundEvent.java`

### PotionBrewEvent.BUS *(Common)*

**When**: The event fires during the BrewingStandBlockEntity#doBrew method invocation, specifically before or after the brewing process occurs, depending on the event type.

**Cancellable**: Yes

**Fields**:
```yaml
- name: stacks
  type: NonNullList<ItemStack>
  description: The array of item stacks in the brewing stand, which can be modified during the event.
```

**Methods**:
```yaml
- name: getItem
  signature: @NotNull ItemStack getItem(int index)
  description: Retrieves the item stack at the specified index in the brewing array.
- name: setItem
  signature: void setItem(int index, @NotNull ItemStack stack)
  description: Sets the item stack at the specified index in the brewing array.
- name: getLength
  signature: int getLength()
  description: Returns the number of item stacks in the brewing array.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBrewing(Pre event) {
        if (!event.isCanceled()) {
            event.setItem(0, new ItemStack(Items.GLOW_IN_THE_DARK));
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/brewing/PotionBrewEvent.java`

### ProjectileImpactEvent.BUS *(Common)*

**When**: This event fires when a projectile entity impacts something, such as a block or entity.

**Cancellable**: No

**Fields**:
```yaml
- name: ray
  type: HitResult
  description: The result of the ray trace calculation that determined where the projectile hit.
- name: projectile
  type: Projectile
  description: The projectile entity that caused the impact.
- name: result
  type: ImpactResult
  description: The result of the impact, which can modify how the projectile behaves upon impact.
```

**Methods**:
```yaml
- name: getRayTraceResult
  signature: HitResult getRayTraceResult()
  description: Returns the HitResult object that contains information about where the projectile hit.
- name: getProjectile
  signature: Projectile getProjectile()
  description: Returns the projectile entity that caused the impact.
- name: setImpactResult
  signature: void setImpactResult(@NotNull ImpactResult newResult)
  description: Sets the impact result to modify how the projectile behaves upon impact.
- name: getImpactResult
  signature: ImpactResult getImpactResult()
  description: Returns the impact result that determines the projectile's behavior upon impact.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onProjectileImpact(ProjectileImpactEvent event) {
        Projectile projectile = event.getProjectile();
        HitResult hit = event.getRayTraceResult();
        ImpactResult result = event.getImpactResult();
        // Example: Change impact behavior
        event.setImpactResult(ImpactResult.STOP_AT_CURRENT);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/ProjectileImpactEvent.java`

### RegisterCommandsEvent.BUS *(Common)*

**When**: This event fires when the Commands class is constructed, specifically when the command dispatcher is being initialized for the client side.

**Cancellable**: No

**Fields**:
```yaml
- name: getDispatcher
  type: CommandDispatcher<CommandSourceStack>
  description: The command dispatcher for registering commands to be executed on the client
- name: getCommandSelection
  type: Commands.CommandSelection
  description: The environment the command is being registered for
- name: getBuildContext
  type: CommandBuildContext
  description: The context to build the commands for
```

**Methods**:
```yaml
- name: getDispatcher
  signature: public CommandDispatcher<CommandSourceStack> getDispatcher()
  description: Returns the command dispatcher for registering commands to be executed on the client
- name: getCommandSelection
  signature: public Commands.CommandSelection getCommandSelection()
  description: Returns the environment the command is being registered for
- name: getBuildContext
  signature: public CommandBuildContext getBuildContext()
  description: Returns the context to build the commands for
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterCommands(RegisterCommandsEvent event) {
        event.getDispatcher().register(CommandSourceStack::new, (dispatcher, source) -> {
            dispatcher.register(event.getBuildContext(), "example", (ctx, source) -> {
                source.sendSuccess(() -> Text.literal("Example command executed!"), false);
            });
        });
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/RegisterCommandsEvent.java`

### RegisterStructureConversionsEvent *(Common)*

**When**: This event fires when converting pre-1.18.2 worlds to the current version using StructuresBecomeConfiguredFix, specifically when registering structure conversions for modded structures.

**Cancellable**: No

**Fields**:
```yaml
- name: map
  type: Map<String, StructuresBecomeConfiguredFix.Conversion>
  description: A map of old structure IDs to their conversion data, used to register structure conversions for modded structures.
```

**Methods**:
```yaml
- name: register
  signature: public void register(String oldStructureID, StructuresBecomeConfiguredFix.Conversion conversion)
  description: Registers a structure conversion, either trivial or biome-mapped, for an old structure ID.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onStructureConversion(RegisterStructureConversionsEvent event) {
        event.register("example_structure",
            StructuresBecomeConfiguredFix.Conversion.biomeMapped(Map.of(
                List.of("minecraft:desert", "minecraft:jungle"), "examplemod:deserted_structure",
                List.of("minecraft:ocean"), "examplemod:flooded_structure"
            ), "examplemod:structure")
        );
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/RegisterStructureConversionsEvent.java`

### RegisterStructureConversionsEvent.BUS *(Common)*

**When**: This event fires when a pre-1.18.2 world is being converted to the current version using the StructuresBecomeConfiguredFix, specifically when registering structure conversions for modded structures.

**Cancellable**: No

**Fields**:
```yaml
- name: map
  type: Map<String, StructuresBecomeConfiguredFix.Conversion>
  description: A map of old structure IDs to their conversion data, used to register structure conversions for modded structures.
```

**Methods**:
```yaml
- name: register
  signature: public void register(String oldStructureID, StructuresBecomeConfiguredFix.Conversion conversion)
  description: Registers a structure conversion for a given old structure ID, allowing modders to define how old structure IDs should be converted to new ones.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onStructureConversion(RegisterStructureConversionsEvent event) {
        event.register("example_structure",
            StructuresBecomeConfiguredFix.Conversion.biomeMapped(Map.of(
                List.of("minecraft:desert", "minecraft:jungle"), "examplemod:deserted_structure",
                List.of("minecraft:ocean"), "examplemod:flooded_structure"
            ), "examplemod:structure")
        );
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/RegisterStructureConversionsEvent.java`

### SaplingGrowTreeEvent.BUS *(Common)*

**When**: This event fires when a sapling, fungus, mushroom, or azalea grows into a tree.

**Cancellable**: No

**Fields**:
```yaml
- name: randomSource
  type: RandomSource
  description: The random source used to determine growth patterns
- name: pos
  type: BlockPos
  description: The position of the sapling attempting to grow
- name: feature
  type: Holder<ConfiguredFeature<?, ?>>
  description: The configured feature that will be placed if growth is allowed
- name: result
  type: Result
  description: The result of the growth attempt (ALLOW, DENY, or DEFAULT)
```

**Methods**:
```yaml
- name: getRandomSource
  signature: public RandomSource getRandomSource()
  description: Returns the random source used for growth calculations
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the sapling
- name: getFeature
  signature: public Holder<ConfiguredFeature<?, ?>> getFeature()
  description: Returns the configured feature to be placed
- name: setFeature
  signature: public void setFeature(@Nullable Holder<ConfiguredFeature<?, ?>> feature)
  description: Sets the configured feature to be placed
- name: setFeature
  signature: public void setFeature(ResourceKey<ConfiguredFeature<?, ?>> featureKey)
  description: Sets the configured feature by its resource key
- name: getResult
  signature: public Result getResult()
  description: Returns the result of the growth attempt
- name: setResult
  signature: public void setResult(Result result)
  description: Sets the result of the growth attempt
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSaplingGrow(SaplingGrowTreeEvent event) {
        if (event.getResult() == Result.DEFAULT) {
            event.setResult(Result.ALLOW);
            event.setFeature(RegistryKey.create(Registries.CONFIGURED_FEATURE, new ResourceLocation("examplemod", "custom_tree")));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/SaplingGrowTreeEvent.java`

### ServerAboutToStartEvent.BUS *(Server)*

**When**: Fires before the server begins loading anything, after InterModProcessEvent on dedicated servers and after the player selects a world in the client, before ServerStartingEvent.

**Cancellable**: No

**Fields**:
```yaml
- name: server
  type: MinecraftServer
  description: The Minecraft server instance that is about to start
```

**Methods**:
```yaml
- name: getServer
  signature: public MinecraftServer getServer()
  description: Returns the Minecraft server instance associated with this event
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerAboutToStart(ServerAboutToStartEvent event) {
        MinecraftServer server = event.getServer();
        // Use the server instance for initialization
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/server/ServerAboutToStartEvent.java`

### ServerChatEvent *(Common)*

**When**: The event fires when a ServerboundChatPacket is received from a client who has submitted their chat message.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: ServerPlayer
  description: The player who initiated the chat action
- name: username
  type: String
  description: The username of the player who initiated the chat action
- name: rawText
  type: String
  description: The original raw text of the player chat message
- name: message
  type: Component
  description: The message that will be sent to the relevant clients, if the event is not cancelled
```

**Methods**:
```yaml
- name: getPlayer
  signature: public ServerPlayer getPlayer()
  description: Returns the player who initiated the chat action
- name: getUsername
  signature: public String getUsername()
  description: Returns the username of the player who initiated the chat action
- name: getRawText
  signature: public String getRawText()
  description: Returns the original raw text of the player chat message
- name: setMessage
  signature: public void setMessage(Component message)
  description: Sets the message to be sent to the relevant clients
- name: getMessage
  signature: public Component getMessage()
  description: Returns the message that will be sent to the relevant clients, if the event is not cancelled
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerChat(ServerChatEvent event) {
        if (!event.isCanceled()) {
            event.setMessage(Component.literal("Hello from mod!"));
            System.out.println("Player: " + event.getUsername() + " said: " + event.getRawText());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/ServerChatEvent.java`

### ServerChatEvent.BUS *(Common)*

**When**: This event fires when a ServerboundChatPacket is received from a client who has submitted their chat message.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: ServerPlayer
  description: The player who initiated the chat action
- name: username
  type: String
  description: The username of the player who initiated the chat action
- name: rawText
  type: String
  description: The original raw text of the player chat message
- name: message
  type: Component
  description: The message that will be sent to the relevant clients, if the event is not cancelled
```

**Methods**:
```yaml
- name: getPlayer
  signature: public ServerPlayer getPlayer()
  description: Returns the player who initiated the chat action
- name: getUsername
  signature: public String getUsername()
  description: Returns the username of the player who initiated the chat action
- name: getRawText
  signature: public String getRawText()
  description: Returns the original raw text of the player chat message
- name: setMessage
  signature: public void setMessage(Component message)
  description: Sets the message to be sent to the relevant clients
- name: getMessage
  signature: public Component getMessage()
  description: Returns the message that will be sent to the relevant clients, if the event is not cancelled
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerChat(ServerChatEvent event) {
        if (!event.isCanceled()) {
            ServerPlayer player = event.getPlayer();
            String rawText = event.getRawText();
            event.setMessage(Component.literal("Modded: " + rawText));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/ServerChatEvent.java`

### ServerLifecycleEvent.BUS *(Server)*

**When**: This event fires during various server lifecycle stages such as starting, stopping, and post-processing.

**Cancellable**: No

**Fields**:
```yaml
- name: server
  type: MinecraftServer
  description: The Minecraft server instance associated with this event.
```

**Methods**:
```yaml
- name: getServer
  signature: MinecraftServer getServer()
  description: Returns the Minecraft server instance associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerStart(ServerLifecycleEvent event) {
        MinecraftServer server = event.getServer();
        // Perform actions when server starts
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/server/ServerLifecycleEvent.java`

### ServerStartedEvent.BUS *(Server)*

**When**: Fires after the server has started and is ready to accept players, following the ServerStartingEvent.

**Cancellable**: No

**Fields**:
```yaml
- name: server
  type: MinecraftServer
  description: The Minecraft server instance that has started.
```

**Methods**:
```yaml
# none detected
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerStart(ServerStartedEvent event) {
        MinecraftServer server = event.server;
        // Use server instance for mod-specific initialization
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/server/ServerStartedEvent.java`

### ServerStartingEvent.BUS *(Server)*

**When**: Fires after ServerAboutToStartEvent and before ServerStartedEvent, allowing customizations of the server during startup.

**Cancellable**: No

**Fields**:
```yaml
- name: server
  type: MinecraftServer
  description: The Minecraft server instance being started, providing access to server configuration and state.
```

**Methods**:
```yaml
- name: getServer
  signature: public MinecraftServer getServer()
  description: Returns the MinecraftServer instance associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerStarting(ServerStartingEvent event) {
        MinecraftServer server = event.getServer();
        // Example: Modify server properties
        server.getCommandManager().getCommands().forEach(cmd -> cmd.unregister());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/server/ServerStartingEvent.java`

### ServerStoppedEvent.BUS *(Server)*

**When**: Fires after the server has completely shut down, immediately before shutting down on the dedicated server and before returning to the main menu on the client.

**Cancellable**: No

**Fields**:
```yaml
- name: server
  type: MinecraftServer
  description: The Minecraft server instance that has stopped.
```

**Methods**:
```yaml
- name: getServer
  signature: public MinecraftServer getServer()
  description: Returns the Minecraft server instance associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerStop(ServerStoppedEvent event) {
        MinecraftServer server = event.getServer();
        // Perform actions after server stops
        System.out.println("Server stopped: " + server.getServerName());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/server/ServerStoppedEvent.java`

### ServerStoppingEvent.BUS *(Server)*

**When**: Fires when the server begins an orderly shutdown, before the ServerStoppedEvent

**Cancellable**: No

**Fields**:
```yaml
- name: server
  type: MinecraftServer
  description: The Minecraft server instance that is initiating the shutdown
```

**Methods**:
```yaml
# none detected
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerStopping(ServerStoppingEvent event) {
        MinecraftServer server = event.server;
        // Perform shutdown-related operations
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/server/ServerStoppingEvent.java`

### ShieldBlockEvent.BUS *(Common)*

**When**: The ShieldBlockEvent is fired when an entity successfully blocks with a shield, allowing modders to modify the damage blocked and shield durability behavior.

**Cancellable**: Yes

**Fields**:
```yaml
- name: source
  type: DamageSource
  description: The damage source that was blocked by the shield.
- name: originalBlocked
  type: float
  description: The original amount of damage that was blocked, which is the same as the incoming damage value before any modifications.
- name: dmgBlocked
  type: float
  description: The current amount of damage that is being blocked, which can be modified by modders.
- name: shieldTakesDamage
  type: boolean
  description: Indicates whether the shield item will take durability damage when blocking.
- name: blockedWith
  type: ItemStack
  description: The item stack used to block the damage, typically the shield item.
```

**Methods**:
```yaml
- name: getDamageSource
  signature: public DamageSource getDamageSource()
  description: Returns the damage source that was blocked by the shield.
- name: getOriginalBlockedDamage
  signature: public float getOriginalBlockedDamage()
  description: Returns the original amount of damage that was blocked, which is the same as the incoming damage value before any modifications.
- name: getBlockedDamage
  signature: public float getBlockedDamage()
  description: Returns the current amount of damage that is being blocked, which can be modified by modders.
- name: shieldTakesDamage
  signature: public boolean shieldTakesDamage()
  description: Returns whether the shield item will take durability damage when blocking.
- name: setBlockedDamage
  signature: public void setBlockedDamage(float blocked)
  description: Sets how much damage is blocked by this action, with clamping to ensure it's between 0 and the original blocked value.
- name: setShieldTakesDamage
  signature: public void setShieldTakesDamage(boolean damage)
  description: Sets whether the shield item will take durability damage when blocking.
- name: getBlockedWith
  signature: public ItemStack getBlockedWith()
  description: Returns the item stack used to block the damage, typically the shield item.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onShieldBlock(ShieldBlockEvent event) {
        // Modify blocked damage to half of original
        event.setBlockedDamage(event.getOriginalBlockedDamage() / 2);
        // Prevent shield from taking durability damage
        event.setShieldTakesDamage(false);
        // Cancel the event if damage is zero
        if (event.getBlockedDamage() <= 0) event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/ShieldBlockEvent.java`

### SleepFinishedTimeEvent.BUS *(Common)*

**When**: This event fires when all players are asleep and the time should be set to day.

**Cancellable**: No

**Fields**:
```yaml
- name: newTime
  type: long
  description: The new time that will be set when all players wake up.
- name: minTime
  type: long
  description: The minimum time that can be set when adjusting the wake-up time.
```

**Methods**:
```yaml
- name: getNewTime
  signature: public long getNewTime()
  description: Returns the new time that will be set when all players wake up.
- name: setTimeAddition
  signature: public boolean setTimeAddition(long newTimeIn)
  description: Sets the new time which should be set when all players wake up. Returns false if newTimeIn was lower than current time.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSleepFinished(SleepFinishedTimeEvent event) {
        if (event.setTimeAddition(1000L)) {
            System.out.println("Wake up time set to: " + event.getNewTime());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/level/SleepFinishedTimeEvent.java`

### SleepingLocationCheckEvent.BUS *(Common)*

**When**: This event fires when the game checks if a sleeping player should still be considered 'in bed'.

**Cancellable**: No

**Fields**:
```yaml
- name: sleepingLocation
  type: BlockPos
  description: The position of the block where the player is sleeping.
- name: result
  type: Result
  description: The result of the check, which determines if the player is still considered 'in bed'.
```

**Methods**:
```yaml
- name: getSleepingLocation
  signature: public BlockPos getSleepingLocation()
  description: Returns the BlockPos of the sleeping location.
- name: getResult
  signature: public Result getResult()
  description: Returns the current result of the check.
- name: setResult
  signature: public void setResult(Result result)
  description: Sets the result of the check, which affects whether the player is considered 'in bed'.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSleepingCheck(SleepingLocationCheckEvent event) {
        if (event.getSleepingLocation() != null) {
            event.setResult(Result.ALLOW);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/SleepingLocationCheckEvent.java`

### SleepingTimeCheckEvent.BUS *(Common)*

**When**: This event fires when the game checks if players can sleep at a particular time, determining whether players can sleep or not.

**Cancellable**: No

**Fields**:
```yaml
- name: sleepingLocation
  type: Optional<BlockPos>
  description: The block position where the player is attempting to sleep, which may be an approximate location.
- name: result
  type: Result
  description: The result of the sleep check, which can be set to allow or default behavior.
```

**Methods**:
```yaml
- name: getSleepingLocation
  signature: public Optional<BlockPos> getSleepingLocation()
  description: Returns the block position where the player is attempting to sleep.
- name: getResult
  signature: public Result getResult()
  description: Returns the current result of the sleep check.
- name: setResult
  signature: public void setResult(Result result)
  description: Sets the result of the sleep check, which can influence whether the player is allowed to sleep.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSleepingTimeCheck(SleepingTimeCheckEvent event) {
        // Check if the player is trying to sleep at a valid time
        if (event.getSleepingLocation().isPresent()) {
            BlockPos pos = event.getSleepingLocation().get();
            // Allow sleeping if the location is valid
            event.setResult(Result.ALLOW);
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/SleepingTimeCheckEvent.java`

### SpawnPlacementCheck *(Common)*

**When**: 2023-10-15T12:34:15.000Z

**Cancellable**: false

**Fields**:
```yaml
- name: result
  type: Result
  description: This field indicates the result of the despawn check. Result.DEFAULT means the default despawn mechanics should be used. Result.ALLOW means the mob should forcefully despawn. Result.DENY means the mob should forcefully stay spawned.
```

**Methods**:
```yaml
- name: setResult
  signature: public void setResult(Result result)
  description: Sets the result of the despawn check. This will override the default despawn behavior.
- name: getResult
  signature: public Result getResult()
  description: Returns the current result of the despawn check.
```

**Example**:
```java
If you want to force a mob to despawn, you can set the result to Result.ALLOW:
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/MobSpawnEvent.java`

### SpawnPlacementRegisterEvent.getBus *(Common)*

**When**: This event fires during the registration phase of entity spawn placements, allowing mods to register or modify spawn predicates for entities.

**Cancellable**: No

**Fields**:
```yaml
- name: map
  type: Map<EntityType<?>, MergedSpawnPredicate<?>>
  description: A map of entity types to their merged spawn predicates, used to store and modify spawn placement rules.
```

**Methods**:
```yaml
- name: register
  signature: <T extends Entity> void register(EntityType<T> entityType, SpawnPlacements.SpawnPredicate<T> predicate)
  description: Registers a spawn predicate for an entity type with OR operation by default.
- name: register
  signature: <T extends Entity> void register(EntityType<T> entityType, SpawnPlacements.SpawnPredicate<T> predicate, Operation operation)
  description: Registers a spawn predicate with a specified operation (AND, OR, REPLACE).
- name: register
  signature: <T extends Entity> void register(EntityType<T> entityType, @Nullable SpawnPlacementType placementType, @Nullable Heightmap.Types heightmap, SpawnPlacements.SpawnPredicate<T> predicate, Operation operation)
  description: Registers a spawn predicate with optional placement type and heightmap changes, only allowed with REPLACE operation.
- name: getSpawnType
  signature: SpawnPlacementType getSpawnType()
  description: Returns the spawn placement type for the entity.
- name: getHeightmapType
  signature: Heightmap.Types getHeightmapType()
  description: Returns the heightmap type for the entity.
- name: build
  signature: SpawnPlacements.SpawnPredicate<T> build()
  description: Compiles the merged spawn predicate with original, OR, and AND conditions.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSpawnPlacement(SpawnPlacementEvent event) {
        // Register a custom spawn predicate for a specific entity
        event.getRegistry().register(
            EntityType.ENTITY_TYPE.get(),
            (entityType, level, spawnType, pos, random) -> {
                // Custom logic here
                return true;
            },
            Operation.REPLACE
        );
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/SpawnPlacementRegisterEvent.java`

### TagsUpdatedEvent *(Common)*

**When**: This event fires when tags are updated on either the server or client, typically after data packs are loaded or when tag data is synchronized between client and server.

**Cancellable**: No

**Fields**:
```yaml
- name: registryAccess
  type: RegistryAccess
  description: Provides access to the dynamic registries that have had their tags rebound.
- name: updateCause
  type: UpdateCause
  description: Indicates the cause for this tag update (server data load or client packet received).
- name: integratedServer
  type: boolean
  description: Whether the update is from an integrated server connection (used for determining static data updates).
```

**Methods**:
```yaml
- name: getRegistryAccess
  signature: public RegistryAccess getRegistryAccess()
  description: Returns the dynamic registries that have had their tags rebound.
- name: getUpdateCause
  signature: public UpdateCause getUpdateCause()
  description: Returns the cause for this tag update.
- name: shouldUpdateStaticData
  signature: public boolean shouldUpdateStaticData()
  description: Determines if static data should be updated as a result of this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onTagsUpdated(TagsUpdatedEvent event) {
        if (event.getUpdateCause() == UpdateCause.SERVER_DATA_LOAD) {
            // Handle server-side tag updates
            RegistryAccess registry = event.getRegistryAccess();
            // Perform actions based on updated tags
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/TagsUpdatedEvent.java`

### TagsUpdatedEvent.BUS *(Common)*

**When**: This event fires when tags are updated on either the server or client, typically after data packs are loaded or when tag data is received from the server.

**Cancellable**: No

**Fields**:
```yaml
- name: registryAccess
  type: RegistryAccess
  description: Provides access to the dynamic registries that have had their tags rebound.
- name: updateCause
  type: UpdateCause
  description: Indicates the cause for this tag update (server data load or client packet received).
- name: integratedServer
  type: boolean
  description: Whether the update is from an integrated server connection (used for determining static data updates).
```

**Methods**:
```yaml
- name: getRegistryAccess
  signature: RegistryAccess getRegistryAccess()
  description: Returns the dynamic registries that have had their tags rebound.
- name: getUpdateCause
  signature: UpdateCause getUpdateCause()
  description: Returns the cause for this tag update.
- name: shouldUpdateStaticData
  signature: boolean shouldUpdateStaticData()
  description: Determines if static data should be updated as a result of this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onTagsUpdated(TagsUpdatedEvent event) {
        if (event.getUpdateCause() == UpdateCause.SERVER_DATA_LOAD) {
            // Handle server-side tag updates
            RegistryAccess registry = event.getRegistryAccess();
            // Perform actions based on updated tags
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/TagsUpdatedEvent.java`

### TickEvent.BUS *(Common)*

**When**: The TickEvent.BUS fires during various tick phases for different game systems (server, client, level, player, and render) at regular intervals as the game runs.

**Cancellable**: No

**Fields**:
```yaml
- name: type
  type: Type
  description: Identifies which type of tick event this is (LEVEL, PLAYER, CLIENT, SERVER, RENDER)
- name: side
  type: LogicalSide
  description: Indicates whether the event is for the server or client side
- name: phase
  type: Phase
  description: Indicates whether the event is the start or end of a tick phase
```

**Methods**:
```yaml
- name: haveTime
  signature: boolean haveTime()
  description: Returns whether the server has enough time to perform additional tasks during the current tick
- name: getServer
  signature: MinecraftServer getServer()
  description: Returns the server instance for server-side events
- name: getLevel
  signature: Level getLevel()
  description: Returns the level instance for level tick events
- name: getPlayer
  signature: Player getPlayer()
  description: Returns the player instance for player tick events
- name: getTimer
  signature: DeltaTracker getTimer()
  description: Returns the delta tracker for render tick events
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onServerTick(ServerTickEvent.Pre event) {
        if (event.getServer() != null) {
            // Handle server tick event
        }
    }

    @SubscribeEvent
    public void onPlayerTick(PlayerTickEvent.Pre event) {
        if (event.getPlayer() instanceof ServerPlayer) {
            // Handle player tick event
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/TickEvent.java`

### TradeWithVillagerEvent.BUS *(Common)*

**When**: This event fires when a player trades with an AbstractVillager, such as a villager in a trading post.

**Cancellable**: No

**Fields**:
```yaml
- name: offer
  type: MerchantOffer
  description: The merchant offer that the player selected to trade with
- name: abstractVillager
  type: AbstractVillager
  description: The villager that the player traded with
```

**Methods**:
```yaml
- name: getMerchantOffer
  signature: public MerchantOffer getMerchantOffer()
  description: Returns the MerchantOffer selected by the player for trading
- name: getAbstractVillager
  signature: public AbstractVillager getAbstractVillager()
  description: Returns the AbstractVillager that the player traded with
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onTrade(TradeWithVillagerEvent event) {
        Player player = event.getPlayer();
        AbstractVillager villager = event.getAbstractVillager();
        MerchantOffer offer = event.getMerchantOffer();
        // Example usage: modify offer or check villager type
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/entity/player/TradeWithVillagerEvent.java`

### VanillaGameEvent.BUS *(Common)*

**When**: This event fires on the server whenever one of Vanilla's GameEvents occurs, allowing modders to listen to these events in a structured way.

**Cancellable**: Yes

**Fields**:
```yaml
- name: getLevel
  type: Level
  description: The level (world) where the GameEvent occurred.
- name: getVanillaEvent
  type: GameEvent
  description: The specific Vanilla GameEvent that occurred.
- name: getEventPosition
  type: Vec3
  description: The position in the world where the event took place.
- name: getContext
  type: GameEvent.Context
  description: The context of the Vanilla event, which includes information about the event's source and other metadata.
```

**Methods**:
```yaml
- name: getCause
  signature: @Nullable public Entity getCause()
  description: Returns the entity that was the source or 'cause' of the GameEvent.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onVanillaGameEvent(VanillaGameEvent event) {
        if (event.getVanillaEvent() == GameEvent.ENTITY_APPEAR) {
            event.setCanceled(true);
            System.out.println("Entity appeared at " + event.getEventPosition());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/VanillaGameEvent.java`

### VillagerTradesEvent *(Common)*

**When**: The event fires during the ServerAboutToStartEvent, once for each registered villager profession.

**Cancellable**: No

**Fields**:
```yaml
- name: trades
  type: Int2ObjectMap<List<ItemListing>>
  description: The trade map for the profession, containing trades for levels 1-5.
- name: type
  type: ResourceKey<VillagerProfession>
  description: The ResourceKey representing the villager profession.
```

**Methods**:
```yaml
- name: getTrades
  signature: public Int2ObjectMap<List<ItemListing>> getTrades()
  description: Returns the trade map for the profession.
- name: getType
  signature: public ResourceKey<VillagerProfession> getType()
  description: Returns the ResourceKey representing the villager profession.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onVillagerTrades(VillagerTradesEvent event) {
        // Add a custom trade to the profession
        event.getTrades().get(1).add(new ExampleTrade());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/village/VillagerTradesEvent.java`

### VillagerTradesEvent.BUS *(Common)*

**When**: The event fires during the ServerAboutToStartEvent, once for each registered villager profession.

**Cancellable**: No

**Fields**:
```yaml
- name: trades
  type: Int2ObjectMap<List<ItemListing>>
  description: The trade map for the profession, containing trades for levels 1-5.
- name: type
  type: ResourceKey<VillagerProfession>
  description: The profession type associated with this event.
```

**Methods**:
```yaml
- name: getTrades
  signature: public Int2ObjectMap<List<ItemListing>> getTrades()
  description: Returns the trade map for the profession, containing trades for levels 1-5.
- name: getType
  signature: public ResourceKey<VillagerProfession> getType()
  description: Returns the profession type associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onVillagerTrades(VillagerTradesEvent event) {
        // Add a custom trade to level 1
        event.getTrades().get(1).add(new ExampleTrade());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/village/VillagerTradesEvent.java`

### VillageSiegeEvent.BUS *(Common)*

**When**: This event fires just before a zombie siege finds a successful location in VillageSiege#tryToSetupSiege(ServerLevel), allowing mods to potentially stop the siege.

**Cancellable**: Yes

**Fields**:
```yaml
- name: getSiege
  type: VillageSiege
  description: The village siege instance that is attempting to setup the siege.
- name: getLevel
  type: Level
  description: The level (world) where the village siege is occurring.
- name: getPlayer
  type: Player
  description: The player associated with the village siege.
- name: getAttemptedSpawnPos
  type: Vec3
  description: The position where the siege attempted to spawn.
```

**Methods**:
```yaml
- name: isCanceled
  signature: boolean isCanceled()
  description: Checks if the event has been cancelled, preventing the siege from proceeding.
- name: setCanceled
  signature: void setCanceled(boolean canceled)
  description: Sets the cancellation state of the event, allowing mods to stop the siege.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onVillageSiege(VillageSiegeEvent event) {
        if (event.getPlayer() != null && event.getPlayer().isInvisible()) {
            event.setCanceled(true);
            System.out.println("Siege cancelled due to invisible player");
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/village/VillageSiegeEvent.java`

### WandererTradesEvent *(Common)*

**When**: The WandererTradesEvent fires during the ServerAboutToStartEvent, specifically when initializing the wandering merchant's trade lists.

**Cancellable**: No

**Fields**:
```yaml
- name: pools
  type: List<Pool>
  description: List of trade pools that the wandering merchant will draw from. Each pool contains a list of ItemListing trades and a number of rolls.
```

**Methods**:
```yaml
- name: getPools
  signature: public List<Pool> getPools()
  description: Returns the list of trade pools for the wandering merchant.
- name: Pool.getRolls
  signature: public int getRolls()
  description: Returns the number of rolls for this trade pool.
- name: Pool.setRolls
  signature: public void setRolls(int value)
  description: Sets the number of rolls for this trade pool.
- name: Pool.getEntries
  signature: public List<ItemListing> getEntries()
  description: Returns the list of ItemListing trades in this pool.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onWandererTrades(WandererTradesEvent event) {
        for (Pool pool : event.getPools()) {
            pool.setRolls(5);
            pool.getEntries().add(new BasicItemListing(...));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/village/WandererTradesEvent.java`

### WandererTradesEvent.BUS *(Common)*

**When**: The event fires during the ServerAboutToStartEvent, specifically when initializing the wandering merchant's trade lists.

**Cancellable**: No

**Fields**:
```yaml
- name: pools
  type: List<Pool>
  description: List of trade pools that the wandering merchant will draw from. Each pool contains a list of ItemListing entries and a number of rolls.
```

**Methods**:
```yaml
- name: getPools
  signature: public List<Pool> getPools()
  description: Returns the list of trade pools for the wandering merchant.
- name: Pool.getRolls
  signature: public int getRolls()
  description: Returns the number of rolls for this trade pool.
- name: Pool.setRolls
  signature: public void setRolls(int value)
  description: Sets the number of rolls for this trade pool.
- name: Pool.getEntries
  signature: public List<ItemListing> getEntries()
  description: Returns the list of ItemListing entries in this trade pool.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onWandererTrades(WandererTradesEvent event) {
        for (Pool pool : event.getPools()) {
            pool.setRolls(5);
            for (ItemListing entry : pool.getEntries()) {
                // Modify or add trades here
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/event/village/WandererTradesEvent.java`

### ZombieEvent.BUS *(Common)*

**When**: (summary failed: parsing error)

**Cancellable**: Unknown

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
# none detected
```

**Example**:
```java
// Example generation failed for ZombieEvent.BUS due to parsing error.
```

*Source*: `src/main/java/net/minecraftforge/event/entity/living/ZombieEvent.java`


## Eventtest

### EntityJoinedWorldTest *(Client)*

**When**: The event fires when an entity joins a level (world) during gameplay.

**Cancellable**: No

**Fields**:
```yaml
- name: entity
  type: net.minecraft.world.entity.Entity
  description: The entity that has joined the level
```

**Methods**:
```yaml
- name: getEntity
  signature: public net.minecraft.world.entity.Entity getEntity()
  description: Returns the entity that has joined the level
```

**Example**:
```java
@Mod("entityjoinedworldtest")
public class EntityJoinedWorldTest {
    @SubscribeEvent
    public void onEntityJoin(EntityJoinLevelEvent event) {
        Entity entity = event.getEntity();
        if (entity == Minecraft.getInstance().player) {
            System.out.println("Player joined world!");
        }
    }
}
```

*Source*: `src/test_old/java/net/minecraftforge/eventtest/tests/forge/client/EntityJoinedWorldTest.java`


## Fml

### FMLClientSetupEvent.getBus *(Common)*

**When**: Fires during the client mod setup phase, after FMLCommonSetupEvent and before InterModEnqueueEvent, specifically on the client side.

**Cancellable**: No

**Fields**:
```yaml
- name: container
  type: ModContainer
  description: The mod container associated with this event, providing access to mod-specific information.
- name: stage
  type: ModLoadingStage
  description: The current stage of mod loading, indicating the phase in the mod lifecycle.
```

**Methods**:
```yaml
- name: getBus
  signature: public static EventBus<FMLClientSetupEvent> getBus(BusGroup modBusGroup)
  description: Returns the event bus for this event type, used for registering event handlers.
- name: getModBusEvent
  signature: public static EventBus<FMLClientSetupEvent> getBus(BusGroup modBusGroup)
  description: Alternative method to get the event bus for this event type, used for registering event handlers.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onClientSetup(FMLClientSetupEvent event) {
        // Access mod container
        ModContainer container = event.container;
        // Access loading stage
        ModLoadingStage stage = event.stage;
        // Register keybindings or other client-only setup
    }
}
```

*Source*: `src/main/java/net/minecraftforge/fml/event/lifecycle/FMLClientSetupEvent.java`

### FMLCommonSetupEvent.getBus *(Common)*

**When**: Fires during mod initialization after RegisterEvent events and before client or server setup events.

**Cancellable**: No

**Fields**:
```yaml
- name: container
  type: ModContainer
  description: The mod container associated with this event.
- name: stage
  type: ModLoadingStage
  description: The current loading stage of the mod.
```

**Methods**:
```yaml
- name: getBus
  signature: public static EventBus<FMLCommonSetupEvent> getBus(BusGroup modBusGroup)
  description: Returns the event bus for this event type, used for registering listeners.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onCommonSetup(FMLCommonSetupEvent event) {
        ModContainer container = event.container;
        ModLoadingStage stage = event.stage;
        // Perform mod setup here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/fml/event/lifecycle/FMLCommonSetupEvent.java`

### FMLConstructModEvent.getBus *(Common)*

**When**: This event fires when a mod is being constructed and its EventBus is being initialized.

**Cancellable**: No

**Fields**:
```yaml
- name: container
  type: ModContainer
  description: The mod container representing the mod being constructed.
- name: stage
  type: ModLoadingStage
  description: The current loading stage of the mod (e.g., MOD_LOADING, MOD_LOADED).
```

**Methods**:
```yaml
- name: getBus
  signature: static EventBus<FMLConstructModEvent> getBus(BusGroup modBusGroup)
  description: Returns the EventBus for this mod event type, used to register event handlers.
```

**Example**:
```java
@Mod(
```

*Source*: `src/main/java/net/minecraftforge/fml/event/lifecycle/FMLConstructModEvent.java`

### FMLDedicatedServerSetupEvent.getBus *(Common)*

**When**: This event fires during the dedicated server setup phase, after FMLCommonSetupEvent and before InterModEnqueueEvent, specifically on dedicated servers.

**Cancellable**: No

**Fields**:
```yaml
- name: container
  type: ModContainer
  description: The mod container associated with this event, providing access to mod-specific information.
- name: stage
  type: ModLoadingStage
  description: The current stage of mod loading, indicating where the mod is in the loading process.
```

**Methods**:
```yaml
- name: getBus
  signature: public static EventBus<FMLDedicatedServerSetupEvent> getBus(BusGroup modBusGroup)
  description: Returns the event bus for this event type, used for registering event handlers.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onDedicatedServerSetup(FMLDedicatedServerSetupEvent event) {
        ModContainer container = event.container;
        ModLoadingStage stage = event.stage;
        // Perform dedicated server setup tasks here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/fml/event/lifecycle/FMLDedicatedServerSetupEvent.java`

### FMLLoadCompleteEvent.getBus *(Common)*

**When**: This event fires after all mods have completed their loading phase, indicating that the mod loading process is complete.

**Cancellable**: No

**Fields**:
```yaml
- name: container
  type: ModContainer
  description: The mod container representing the mod that has completed loading.
- name: stage
  type: ModLoadingStage
  description: The loading stage of the mod, indicating which phase of loading has been completed.
```

**Methods**:
```yaml
- name: getBus
  signature: public static EventBus<FMLLoadCompleteEvent> getBus(BusGroup modBusGroup)
  description: Returns the event bus for this event type, used for registering event handlers.
```

**Example**:
```java
@Mod(
```

*Source*: `src/main/java/net/minecraftforge/fml/event/lifecycle/FMLLoadCompleteEvent.java`

### InterModEnqueueEvent.getBus *(Common)*

**When**: This event fires during mod core startup, after FMLClientSetupEvent or FMLDedicatedServerSetupEvent and before InterModProcessEvent.

**Cancellable**: No

**Fields**:
```yaml
- name: container
  type: ModContainer
  description: The mod container associated with this event.
- name: stage
  type: ModLoadingStage
  description: The current loading stage of the mod.
```

**Methods**:
```yaml
- name: getBus
  signature: public static EventBus<InterModEnqueueEvent> getBus(BusGroup modBusGroup)
  description: Returns the event bus for this event type, used to register handlers.
- name: InterModEnqueueEvent
  signature: public InterModEnqueueEvent(final ModContainer container, final ModLoadingStage stage)
  description: Constructor that initializes the event with a mod container and loading stage.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onInterModEnqueue(InterModEnqueueEvent event) {
        // Use event.container and event.stage
        System.out.println("Mod: " + event.container.getModId() + " Stage: " + event.stage);
    }
}
```

*Source*: `src/main/java/net/minecraftforge/fml/event/lifecycle/InterModEnqueueEvent.java`

### InterModProcessEvent.getBus *(Common)*

**When**: Fires after the InterModEnqueueEvent during mod core startup, allowing processing of inter-mod communication messages.

**Cancellable**: No

**Fields**:
```yaml
- name: container
  type: ModContainer
  description: The mod container associated with this event, providing mod metadata and context.
- name: stage
  type: ModLoadingStage
  description: The current loading stage of the mod, indicating where it is in the startup process.
```

**Methods**:
```yaml
- name: getIMCStream
  signature: Stream<IMCMessage> getIMCStream()
  description: Returns a stream of InterModComms messages for this mod, allowing processing of inter-mod communication.
- name: getIMCStream
  signature: Stream<IMCMessage> getIMCStream(Predicate<IMCMessage> filter)
  description: Returns a filtered stream of InterModComms messages based on the provided predicate.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onInterModProcess(InterModProcessEvent event) {
        event.getIMCStream().forEach(msg -> {
            // Process inter-mod messages here
            System.out.println("Received message: " + msg);
        });
    }
}
```

*Source*: `src/main/java/net/minecraftforge/fml/event/lifecycle/InterModProcessEvent.java`

### ModConfigEvent.getBus *(Common)*

**When**: Fired when a mod's configuration is changed, either through the UI or by editing the config file directly.

**Cancellable**: No

**Fields**:
```yaml
- name: config
  type: ModConfig
  description: The mod configuration object associated with this event, providing access to configuration data.
```

**Methods**:
```yaml
- name: getConfig
  signature: ModConfig getConfig()
  description: Returns the mod configuration object associated with this event.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onConfigReloading(Reloading event) {
        ModConfig config = event.getConfig();
        // Handle configuration changes
    }
}
```

*Source*: `src/main/java/net/minecraftforge/fml/event/config/ModConfigEvent.java`


## Registries

### DataPackRegistryEvent.getBus *(Common)*

**When**: When datapack registries can be registered, specifically when data JSONs are loaded from datapacks.

**Cancellable**: No

**Fields**:
```yaml
- name: registryDataList
  type: List<DataPackRegistryData<?>>
  description: List of registry data entries that will be processed during the event.
```

**Methods**:
```yaml
- name: dataPackRegistry
  signature: <T> void dataPackRegistry(ResourceKey<Registry<T>> registryKey, Codec<T> codec, @Nullable Codec<T> networkCodec)
  description: Registers a datapack registry with the specified key, codec, and optional network codec.
- name: process
  signature: void process()
  description: Processes the registry data list by adding registry codecs to the DataPackRegistriesHooks.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onNewRegistry(DataPackRegistryEvent.NewRegistry event) {
        event.dataPackRegistry(Registry.ENTITY_TYPE_REGISTRY, Codec.STRING, Codec.STRING);
        event.process();
    }
}
```

*Source*: `src/main/java/net/minecraftforge/registries/DataPackRegistryEvent.java`

### IdMappingEvent *(Common)*

**When**: This event fires whenever the ID mapping might have changed, such as when the client or server loads an ID set from disk or reverts to the initial state.

**Cancellable**: No

**Fields**:
```yaml
- name: remaps
  type: Map<ResourceLocation, ImmutableList<ModRemapping>>
  description: A map of registry names to lists of remappings. Each entry contains information about ID changes for specific registry entries.
- name: keys
  type: ImmutableSet<ResourceLocation>
  description: The set of registry names that have been remapped.
- name: isFrozen
  type: boolean
  description: Indicates whether the ID mapping is frozen (immutable) or not.
```

**Methods**:
```yaml
- name: getRegistries
  signature: public ImmutableSet<ResourceLocation> getRegistries()
  description: Returns the set of registry names that have been remapped.
- name: getRemaps
  signature: public ImmutableList<ModRemapping> getRemaps(ResourceLocation registry)
  description: Returns the list of remappings for a specific registry.
- name: isFrozen
  signature: public boolean isFrozen()
  description: Returns whether the ID mapping is frozen (immutable).
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onIdMapping(IdMappingEvent event) {
        if (!event.isFrozen()) {
            for (ResourceLocation registry : event.getRegistries()) {
                for (ModRemapping remap : event.getRemaps(registry)) {
                    // Handle remapping logic here
                }
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/registries/IdMappingEvent.java`

### IdMappingEvent.BUS *(Common)*

**When**: This event fires whenever the ID mapping might have changed, including when the client or server loads an ID set from disk or reverts to the initial state.

**Cancellable**: No

**Fields**:
```yaml
- name: remaps
  type: Map<ResourceLocation, ImmutableList<ModRemapping>>
  description: A map of registry names to lists of remappings. Each entry contains ModRemapping objects with old and new IDs.
- name: keys
  type: ImmutableSet<ResourceLocation>
  description: The set of registry names that have been remapped.
- name: isFrozen
  type: boolean
  description: Indicates whether the ID mapping is frozen (immutable) or not.
```

**Methods**:
```yaml
- name: getRegistries
  signature: public ImmutableSet<ResourceLocation> getRegistries()
  description: Returns the set of registry names that have been remapped.
- name: getRemaps
  signature: public ImmutableList<ModRemapping> getRemaps(ResourceLocation registry)
  description: Returns the list of remappings for a specific registry.
- name: isFrozen
  signature: public boolean isFrozen()
  description: Returns whether the ID mapping is frozen (immutable).
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onIdMapping(IdMappingEvent event) {
        if (!event.isFrozen()) {
            for (ResourceLocation registry : event.getRegistries()) {
                for (ModRemapping remap : event.getRemaps(registry)) {
                    // Handle remapping logic here
                }
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/registries/IdMappingEvent.java`

### MissingMappingsEvent *(Common)*

**When**: Fires when the game detects missing registry mappings during world loading, allowing mods to handle these missing entries.

**Cancellable**: No

**Fields**:
```yaml
- name: key
  type: ResourceKey<? extends Registry<?>>
  description: The registry key that is missing mappings.
- name: registry
  type: IForgeRegistry<?>
  description: The registry instance that is missing mappings.
- name: mappings
  type: List<Mapping<?>>
  description: List of missing mappings with details about each missing entry.
```

**Methods**:
```yaml
- name: getKey
  signature: public ResourceKey<? extends Registry<?>> getKey()
  description: Returns the registry key that is missing mappings.
- name: getRegistry
  signature: public IForgeRegistry<?> getRegistry()
  description: Returns the registry instance that is missing mappings.
- name: getMappings
  signature: public <T> List<Mapping<T>> getMappings(ResourceKey<? extends Registry<T>> registryKey, String namespace)
  description: Returns a list of missing mappings for a specific registry and namespace.
- name: getAllMappings
  signature: public <T> List<Mapping<T>> getAllMappings(ResourceKey<? extends Registry<T>> registryKey)
  description: Returns all missing mappings for a specific registry.
- name: ignore
  signature: public void ignore()
  description: Marks the missing mapping to be ignored.
- name: warn
  signature: public void warn()
  description: Marks the missing mapping to generate a warning.
- name: fail
  signature: public void fail()
  description: Marks the missing mapping to cause world load failure.
- name: remap
  signature: public void remap(T target)
  description: Remaps the missing entry to a new target object.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onMissingMappings(MissingMappingsEvent event) {
        for (Mapping<?> mapping : event.getMappings()) {
            if (mapping.getKey().getNamespace().equals("example")) {
                mapping.warn();
            }
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/registries/MissingMappingsEvent.java`

### MissingMappingsEvent.BUS *(Common)*

**When**: This event fires when the game detects missing registry mappings during world loading, specifically when a registry entry is not found for a given key.

**Cancellable**: No

**Fields**:
```yaml
- name: key
  type: ResourceKey<? extends Registry<?>>
  description: The registry key that was not found, indicating which registry is missing the mapping.
- name: registry
  type: IForgeRegistry<?>
  description: The registry instance that is missing the mapping.
- name: mappings
  type: List<Mapping<?>>
  description: A list of missing mappings that could not be resolved for the given registry key.
```

**Methods**:
```yaml
- name: getKey
  signature: public ResourceKey<? extends Registry<?>> getKey()
  description: Returns the registry key that was not found.
- name: getRegistry
  signature: public IForgeRegistry<?> getRegistry()
  description: Returns the registry instance that is missing the mapping.
- name: getMappings
  signature: public <T> List<Mapping<T>> getMappings(ResourceKey<? extends Registry<T>> registryKey, String namespace)
  description: Returns a list of missing mappings for the specified registry key and namespace.
- name: getAllMappings
  signature: public <T> List<Mapping<T>> getAllMappings(ResourceKey<? extends Registry<T>> registryKey)
  description: Returns all missing mappings for the specified registry key.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onMissingMappings(MissingMappingsEvent event) {
        // Handle missing mappings for a specific registry
        event.getRegistry().getRegistryName();
        event.getMappings(Registry.ITEM_REGISTRY, "examplemod");
        // You can inspect and modify mappings here
    }
}
```

*Source*: `src/main/java/net/minecraftforge/registries/MissingMappingsEvent.java`

### NewRegistryEvent.getBus *(Common)*

**When**: This event fires during the registry creation phase, specifically when new registries are being registered using RegistryBuilder and create() methods.

**Cancellable**: No

**Fields**:
```yaml
- name: registries
  type: List<RegistryData<?>>
  description: List of registry data objects that contain registry builders and their associated registry holders.
```

**Methods**:
```yaml
- name: create
  signature: <V> Supplier<IForgeRegistry<V>> create(RegistryBuilder<V> builder)
  description: Adds a registry builder to be created and returns a supplier for the resulting registry.
- name: create
  signature: <V> Supplier<IForgeRegistry<V>> create(RegistryBuilder<V> builder, @Nullable Consumer<IForgeRegistry<V>> onFill)
  description: Adds a registry builder to be created with an optional onFill callback, returning a supplier for the resulting registry.
- name: fill
  signature: void fill()
  description: Processes all registry builders and creates the actual registries, handling any exceptions.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onNewRegistry(NewRegistryEvent event) {
        for (RegistryData<?> data : event.registries) {
            System.out.println("Registry created: " + data.builder.getRegistryName());
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/registries/NewRegistryEvent.java`

### RegisterEvent.getBus *(Common)*

**When**: This event fires for each forge and vanilla registry when all registries are ready to have modded objects registered.

**Cancellable**: No

**Fields**:
```yaml
- name: registryKey
  type: ResourceKey<? extends Registry<?>>
  description: The registry key associated with this event, indicating which registry this event is for.
- name: forgeRegistry
  type: ForgeRegistry<?>
  description: The forge registry for the given registry key, or null if the registry is not a forge registry.
- name: vanillaRegistry
  type: Registry<?>
  description: The vanilla registry for the given registry key, or null if the registry is not a vanilla registry.
```

**Methods**:
```yaml
- name: register
  signature: <T> void register(ResourceKey<? extends Registry<T>> registryKey, ResourceLocation name, Supplier<T> valueSupplier)
  description: Registers the value with the given name to the stored registry if the provided registry key matches this event's registry key.
- name: register
  signature: <T> void register(ResourceKey<? extends Registry<T>> registryKey, Consumer<RegisterHelper<T>> consumer)
  description: Calls the provided consumer with a register helper if the provided registry key matches this event's registry key.
- name: getRegistryKey
  signature: @NotNull ResourceKey<? extends Registry<?>> getRegistryKey()
  description: Returns the registry key linked to this event.
- name: getForgeRegistry
  signature: <T> @Nullable IForgeRegistry<T> getForgeRegistry()
  description: Returns the forge registry for the given registry key, or null if the registry is not a forge registry.
- name: getVanillaRegistry
  signature: <T> @Nullable Registry<T> getVanillaRegistry()
  description: Returns the vanilla registry for the given registry key, or null if the registry is not a vanilla registry.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegister(RegisterEvent event) {
        if (event.getRegistryKey().location().equals(Registry.FLUID.key())) {
            event.register(Registry.FLUID.key(), "example_fluid", () -> new Fluid("example_fluid"));
        }
    }
}
```

*Source*: `src/main/java/net/minecraftforge/registries/RegisterEvent.java`


## Server

### PermissionGatherEvent.BUS *(Server)*

**When**: This event fires during the permission system initialization phase, allowing mods to register custom permission handlers and nodes.

**Cancellable**: No

**Fields**:
```yaml
- name: availableHandlers
  type: Map<ResourceLocation, IPermissionHandlerFactory>
  description: A map of available permission handler factories that can be registered during the event.
- name: nodes
  type: Set<PermissionNode<?>>
  description: A set of permission nodes that have been registered during the event.
```

**Methods**:
```yaml
- name: getAvailablePermissionHandlerFactories
  signature: Map<ResourceLocation, IPermissionHandlerFactory> getAvailablePermissionHandlerFactories()
  description: Returns an unmodifiable map of available permission handler factories.
- name: getNodes
  signature: Collection<PermissionNode<?>> getNodes()
  description: Returns an unmodifiable collection of registered permission nodes.
- name: addPermissionHandler
  signature: void addPermissionHandler(ResourceLocation identifier, IPermissionHandlerFactory handlerFactory)
  description: Registers a new permission handler factory with the specified identifier.
- name: addNodes
  signature: void addNodes(PermissionNode<?>... nodes)
  description: Registers multiple permission nodes.
- name: addNodes
  signature: void addNodes(Iterable<PermissionNode<?>> nodes)
  description: Registers multiple permission nodes from an iterable collection.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPermissionGather(PermissionGatherEvent event) {
        event.getNodes().forEach(node -> {
            System.out.println("Registered node: " + node.getNodeName());
        });
        event.Handler.addPermissionHandler(new ResourceLocation("examplemod", "customhandler"), 
            () -> new CustomPermissionHandler());
    }
}
```

*Source*: `src/main/java/net/minecraftforge/server/permission/events/PermissionGatherEvent.java`
