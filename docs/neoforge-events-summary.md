# NeoForge – Event Handbook

Generated 2025-07-06T06:06:28.237Z using qwen3.
Processed 194 out of 194 total events.

## Table of Contents
- [Capabilities](#capabilities)
  - [RegisterCapabilitiesEvent](#registercapabilitiesevent)
- [Client](#client)
  - [AddSectionGeometryEvent](#addsectiongeometryevent)
  - [Block](#block)
  - [BossEventProgress](#bosseventprogress)
  - [CalculateDetachedCameraDistanceEvent](#calculatedetachedcameradistanceevent)
  - [CalculatePlayerTurnEvent](#calculateplayerturnevent)
  - [ClientChatEvent](#clientchatevent)
  - [ClientChatReceivedEvent](#clientchatreceivedevent)
  - [ClientPlayerChangeGameTypeEvent](#clientplayerchangegametypeevent)
  - [ClientResourceLoadFinishedEvent](#clientresourceloadfinishedevent)
  - [ComputeFovModifierEvent](#computefovmodifierevent)
  - [ConfigureMainRenderTargetEvent](#configuremainrendertargetevent)
  - [DoRender](#dorender)
  - [FrameGraphSetupEvent](#framegraphsetupevent)
  - [GatherComponents](#gathercomponents)
  - [GatherEffectScreenTooltipsEvent](#gathereffectscreentooltipsevent)
  - [InitializeClientRegistriesEvent](#initializeclientregistriesevent)
  - [InteractionKeyMappingTriggered](#interactionkeymappingtriggered)
  - [MouseScrollingEvent](#mousescrollingevent)
  - [Opening](#opening)
  - [Post](#post)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [RecipesReceivedEvent](#recipesreceivedevent)
  - [RegisterBlockStateModels](#registerblockstatemodels)
  - [RegisterClientCommandsEvent](#registerclientcommandsevent)
  - [RegisterClientExtensionsEvent](#registerclientextensionsevent)
  - [RegisterClientPayloadHandlersEvent](#registerclientpayloadhandlersevent)
  - [RegisterClientTooltipComponentFactoriesEvent](#registerclienttooltipcomponentfactoriesevent)
  - [RegisterConditionalItemModelPropertyEvent](#registerconditionalitemmodelpropertyevent)
  - [RegisterDimensionSpecialEffectsEvent](#registerdimensionspecialeffectsevent)
  - [RegisterDimensionTransitionScreenEvent](#registerdimensiontransitionscreenevent)
  - [RegisterEntitySpectatorShadersEvent](#registerentityspectatorshadersevent)
  - [RegisterGuiLayersEvent](#registerguilayersevent)
  - [RegisterItemDecorationsEvent](#registeritemdecorationsevent)
  - [RegisterItemModelsEvent](#registeritemmodelsevent)
  - [RegisterJsonAnimationTypesEvent](#registerjsonanimationtypesevent)
  - [RegisterKeyMappingsEvent](#registerkeymappingsevent)
  - [RegisterMapDecorationRenderersEvent](#registermapdecorationrenderersevent)
  - [RegisterMaterialAtlasesEvent](#registermaterialatlasesevent)
  - [RegisterMenuScreensEvent](#registermenuscreensevent)
  - [RegisterNamedRenderTypesEvent](#registernamedrendertypesevent)
  - [RegisterParticleProvidersEvent](#registerparticleprovidersevent)
  - [RegisterPictureInPictureRenderersEvent](#registerpictureinpicturerenderersevent)
  - [RegisterPipelineModifiersEvent](#registerpipelinemodifiersevent)
  - [RegisterPresetEditorsEvent](#registerpreseteditorsevent)
  - [RegisterRangeSelectItemModelPropertyEvent](#registerrangeselectitemmodelpropertyevent)
  - [RegisterRecipeBookSearchCategoriesEvent](#registerrecipebooksearchcategoriesevent)
  - [RegisterRenderBuffersEvent](#registerrenderbuffersevent)
  - [RegisterRenderPipelinesEvent](#registerrenderpipelinesevent)
  - [RegisterRenderStateModifiersEvent](#registerrenderstatemodifiersevent)
  - [RegisterSelectItemModelPropertyEvent](#registerselectitemmodelpropertyevent)
  - [RegisterSpecialBlockModelRendererEvent](#registerspecialblockmodelrendererevent)
  - [RegisterSpecialModelRendererEvent](#registerspecialmodelrendererevent)
  - [RegisterSpriteDefaultMetadataSectionTypesEvent](#registerspritedefaultmetadatasectiontypesevent)
  - [RegisterSpriteSourcesEvent](#registerspritesourcesevent)
  - [RenderArmEvent](#renderarmevent)
  - [RenderBlockScreenEffectEvent](#renderblockscreeneffectevent)
  - [RenderHandEvent](#renderhandevent)
  - [RenderInventoryMobEffects](#renderinventorymobeffects)
  - [RenderItemInFrameEvent](#renderiteminframeevent)
  - [ScreenshotEvent](#screenshotevent)
  - [SelectMusicEvent](#selectmusicevent)
  - [TextureAtlasStitchedEvent](#textureatlasstitchedevent)
  - [ToastAddEvent](#toastaddevent)
- [Common](#common)
  - [RegisterTicketControllersEvent](#registerticketcontrollersevent)
- [Entity](#entity)
  - [XpOrbTargetingEvent](#xporbtargetingevent)
- [Event](#event)
  - [AddAttributeTooltipsEvent](#addattributetooltipsevent)
  - [AddPackFindersEvent](#addpackfindersevent)
  - [AlterGroundEvent](#altergroundevent)
  - [AnimalTameEvent](#animaltameevent)
  - [AnvilUpdateEvent](#anvilupdateevent)
  - [ArmorHurtEvent](#armorhurtevent)
  - [ArrowLooseEvent](#arrowlooseevent)
  - [ArrowNockEvent](#arrownockevent)
  - [AttackEntityEvent](#attackentityevent)
  - [BabyEntitySpawnEvent](#babyentityspawnevent)
  - [BlockDropsEvent](#blockdropsevent)
  - [BlockEntityTypeAddBlocksEvent](#blockentitytypeaddblocksevent)
  - [BlockGrowFeatureEvent](#blockgrowfeatureevent)
  - [BlockToolModificationEvent](#blocktoolmodificationevent)
  - [BonemealEvent](#bonemealevent)
  - [BreakEvent](#breakevent)
  - [BreakSpeed](#breakspeed)
  - [BuildCreativeModeTabContentsEvent](#buildcreativemodetabcontentsevent)
  - [Change](#change)
  - [ChunkTicketLevelUpdatedEvent](#chunkticketlevelupdatedevent)
  - [CommandEvent](#commandevent)
  - [CreateSpawnPosition](#createspawnposition)
  - [DifficultyChangeEvent](#difficultychangeevent)
  - [EnderEntity](#enderentity)
  - [EnderManAngerEvent](#endermanangerevent)
  - [EnderPearl](#enderpearl)
  - [EntityAttributeCreationEvent](#entityattributecreationevent)
  - [EntityAttributeModificationEvent](#entityattributemodificationevent)
  - [EntityInteract](#entityinteract)
  - [EntityInteractSpecific](#entityinteractspecific)
  - [EntityJoinLevelEvent](#entityjoinlevelevent)
  - [EntityMountEvent](#entitymountevent)
  - [EntityMultiPlaceEvent](#entitymultiplaceevent)
  - [EntityPlaceEvent](#entityplaceevent)
  - [EntityStruckByLightningEvent](#entitystruckbylightningevent)
  - [EntityTeleportEvent](#entityteleportevent)
  - [EntityTravelToDimensionEvent](#entitytraveltodimensionevent)
  - [Expired](#expired)
  - [FarmlandTrampleEvent](#farmlandtrampleevent)
  - [FinalizeSpawnEvent](#finalizespawnevent)
  - [FluidPlaceBlockEvent](#fluidplaceblockevent)
  - [FurnaceFuelBurnTimeEvent](#furnacefuelburntimeevent)
  - [GameShuttingDownEvent](#gameshuttingdownevent)
  - [GatherSkippedAttributeTooltipsEvent](#gatherskippedattributetooltipsevent)
  - [GetEnchantmentLevelEvent](#getenchantmentlevelevent)
  - [Hands](#hands)
  - [ItemAttributeModifierEvent](#itemattributemodifierevent)
  - [ItemConsumption](#itemconsumption)
  - [ItemFishedEvent](#itemfishedevent)
  - [ItemStackedOnOtherEvent](#itemstackedonotherevent)
  - [ItemTossEvent](#itemtossevent)
  - [LeftClickBlock](#leftclickblock)
  - [LevelChange](#levelchange)
  - [LivingChangeTargetEvent](#livingchangetargetevent)
  - [LivingDeathEvent](#livingdeathevent)
  - [LivingDestroyBlockEvent](#livingdestroyblockevent)
  - [LivingDropsEvent](#livingdropsevent)
  - [LivingDrownEvent](#livingdrownevent)
  - [LivingExperienceDropEvent](#livingexperiencedropevent)
  - [LivingFallEvent](#livingfallevent)
  - [LivingHealEvent](#livinghealevent)
  - [LivingIncomingDamageEvent](#livingincomingdamageevent)
  - [LivingKnockBackEvent](#livingknockbackevent)
  - [LivingUseTotemEvent](#livingusetotemevent)
  - [LootTableLoadEvent](#loottableloadevent)
  - [MobSplitEvent](#mobsplitevent)
  - [ModifyCustomSpawnersEvent](#modifycustomspawnersevent)
  - [ModifyDefaultComponentsEvent](#modifydefaultcomponentsevent)
  - [ModMismatchEvent](#modmismatchevent)
  - [NeighborNotifyEvent](#neighbornotifyevent)
  - [OnDatapackSyncEvent](#ondatapacksyncevent)
  - [OnPlaceItem](#onplaceitem)
  - [OnTakeItem](#ontakeitem)
  - [PermissionsChangedEvent](#permissionschangedevent)
  - [PickupXp](#pickupxp)
  - [Play](#play)
  - [PlayerChangeGameModeEvent](#playerchangegamemodeevent)
  - [PlayerNegotiationEvent](#playernegotiationevent)
  - [PlayerSetSpawnEvent](#playersetspawnevent)
  - [PlayLevelSoundEvent](#playlevelsoundevent)
  - [PortalSpawnEvent](#portalspawnevent)
  - [PotentialSpawns](#potentialspawns)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [Pre](#pre)
  - [ProjectileImpactEvent](#projectileimpactevent)
  - [RegisterBrewingRecipesEvent](#registerbrewingrecipesevent)
  - [RegisterCommandsEvent](#registercommandsevent)
  - [RegisterGameTestsEvent](#registergametestsevent)
  - [RegisterSpawnPlacementsEvent](#registerspawnplacementsevent)
  - [RegisterStructureConversionsEvent](#registerstructureconversionsevent)
  - [Remove](#remove)
  - [RightClickBlock](#rightclickblock)
  - [RightClickItem](#rightclickitem)
  - [ServerChatEvent](#serverchatevent)
  - [SpawnPlacementCheck](#spawnplacementcheck)
  - [SpreadPlayersCommand](#spreadplayerscommand)
  - [Start](#start)
  - [Start](#start)
  - [StatAwardEvent](#statawardevent)
  - [Stop](#stop)
  - [SweepAttackEvent](#sweepattackevent)
  - [TagsUpdatedEvent](#tagsupdatedevent)
  - [TeleportCommand](#teleportcommand)
  - [Tick](#tick)
  - [UseItemOnBlockEvent](#useitemonblockevent)
  - [VanillaGameEvent](#vanillagameevent)
  - [VillagerTradesEvent](#villagertradesevent)
  - [VillageSiegeEvent](#villagesiegeevent)
  - [WandererTradesEvent](#wanderertradesevent)
  - [XpChange](#xpchange)
- [Fluids](#fluids)
  - [RegisterCauldronFluidContentEvent](#registercauldronfluidcontentevent)
- [Network](#network)
  - [RegisterConfigurationTasksEvent](#registerconfigurationtasksevent)
  - [RegisterPayloadHandlersEvent](#registerpayloadhandlersevent)
- [Registries](#registries)
  - [DataMapsUpdatedEvent](#datamapsupdatedevent)
  - [ModifyRegistriesEvent](#modifyregistriesevent)
  - [NewRegistryEvent](#newregistryevent)
  - [RegisterDataMapTypesEvent](#registerdatamaptypesevent)
  - [RegisterEvent](#registerevent)

## Capabilities

### RegisterCapabilitiesEvent *(Common)*

**When**: Fires during the registration phase of capabilities for blocks, entities, and items, allowing modders to register custom capability providers.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: registerBlock
  signature: public <T, C extends @Nullable Object> void registerBlock(BlockCapability<T, C> capability, IBlockCapabilityProvider<T, C> provider, Block... blocks)
  description: Registers a capability provider for specified blocks. Modders use this to add custom capabilities to blocks.
- name: registerBlockEntity
  signature: public <T, C extends @Nullable Object, BE extends BlockEntity> void registerBlockEntity(BlockCapability<T, C> capability, BlockEntityType<BE> blockEntityType, ICapabilityProvider<? super BE, C, T> provider)
  description: Registers a capability provider for a block entity type. This allows capabilities to be added to block entities.
- name: isBlockRegistered
  signature: public boolean isBlockRegistered(BlockCapability<?, ?> capability, Block block)
  description: Checks if a capability provider is already registered for a specific block and capability.
- name: setProxyable
  signature: public void setProxyable(BlockCapability<?, ?> capability)
  description: Marks a block capability as proxyable, allowing it to be safely forwarded to other blocks.
- name: setNonProxyable
  signature: public void setNonProxyable(BlockCapability<?, ?> capability)
  description: Marks a block capability as non-proxyable, preventing it from being forwarded to other blocks.
- name: registerEntity
  signature: public <T, C extends @Nullable Object, E extends Entity> void registerEntity(EntityCapability<T, C> capability, EntityType<E> entityType, ICapabilityProvider<? super E, C, T> provider)
  description: Registers a capability provider for an entity type. This allows capabilities to be added to entities.
- name: isEntityRegistered
  signature: public boolean isEntityRegistered(EntityCapability<?, ?> capability, EntityType<?> entityType)
  description: Checks if a capability provider is already registered for a specific entity type and capability.
- name: registerItem
  signature: public <T, C extends @Nullable Object> void registerItem(ItemCapability<T, C> capability, ICapabilityProvider<ItemStack, C, T> provider, ItemLike... items)
  description: Registers a capability provider for specified items. Modders use this to add custom capabilities to items.
- name: isItemRegistered
  signature: public boolean isItemRegistered(ItemCapability<?, ?> capability, Item item)
  description: Checks if a capability provider is already registered for a specific item and capability.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterCapabilities(RegisterCapabilitiesEvent event) {
        // Register a capability for a block
        event.registerBlock(MyCapability.BLOCK_CAPABILITY, new MyBlockProvider(), MyBlockBlock.INSTANCE);

        // Register a capability for an item
        event.registerItem(MyCapability.ITEM_CAPABILITY, new MyItemProvider(), MyItemItem.INSTANCE);

        // Register a capability for an entity
        event.registerEntity(MyCapability.ENTITY_CAPABILITY, MyEntityEntityType.get(), new MyEntityProvider());
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/capabilities/RegisterCapabilitiesEvent.java`


## Client

### AddSectionGeometryEvent *(Client)*

**When**: This event fires on the main client thread whenever a chunk section is queued for (re)building.

**Cancellable**: No

**Fields**:
```yaml
- name: sectionOrigin
  type: BlockPos
  description: The origin block position of the chunk section being rendered.
- name: level
  type: Level
  description: The level (world) being rendered. This may differ from the current client level in certain contexts.
- name: additionalRenderers
  type: List<AdditionalSectionRenderer>
  description: List of renderers that will add geometry to the chunk section.
```

**Methods**:
```yaml
- name: addRenderer
  signature: public void addRenderer(AdditionalSectionRenderer renderer)
  description: Adds a renderer to the list of renderers that will add geometry to the chunk section.
- name: getAdditionalRenderers
  signature: public List<AdditionalSectionRenderer> getAdditionalRenderers()
  description: Returns the list of added renderers. Do not modify the returned list.
- name: getSectionOrigin
  signature: public BlockPos getSectionOrigin()
  description: Returns the origin block position of the chunk section.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) being rendered. This can differ from the current client level in certain contexts.
```

**Example**:
```java
@SubscribeEvent
public static void addChunkGeometry(AddSectionGeometryEvent ev) {
    if (shouldAddGeometryTo(ev.getLevel(), ev.getSectionOrigin())) {
        final var renderingData = getDataOnMainThread(ev.getLevel(), ev.getSectionOrigin());
        ev.addRenderer(context -> renderThreadsafe(renderingData, context));
    }
}

// Example renderer implementation
public static class ExampleRenderer implements AddSectionGeometryEvent.AdditionalSectionRenderer {
    @Override
    public void render(SectionRenderingContext context) {
        // Render geometry using context.getPoseStack() and context.getOrCreateChunkBuffer()
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/AddSectionGeometryEvent.java`

### Block *(Client)*

**When**: Fires before a selection highlight is rendered for a block or entity in the Minecraft client.

**Cancellable**: Unknown

**Fields**:
```yaml
- name: levelRenderer
  type: LevelRenderer
  description: The level renderer used for rendering the world
- name: camera
  type: Camera
  description: Camera information for the current view
- name: target
  type: HitResult
  description: The hit result which triggered the selection highlight
- name: deltaTracker
  type: DeltaTracker
  description: Tracks delta time for rendering calculations
- name: poseStack
  type: PoseStack
  description: Pose stack used for rendering operations
- name: multiBufferSource
  type: MultiBufferSource
  description: Source of rendering buffers
```

**Methods**:
```yaml
- name: getLevelRenderer
  signature: public LevelRenderer getLevelRenderer()
  description: Returns the level renderer used for rendering the world
- name: getCamera
  signature: public Camera getCamera()
  description: Returns camera information for the current view
- name: getTarget
  signature: public HitResult getTarget()
  description: Returns the hit result which triggered the selection highlight
- name: getDeltaTracker
  signature: public DeltaTracker getDeltaTracker()
  description: Returns the delta tracker for rendering calculations
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering operations
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the source of rendering buffers
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.RenderHighlightEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBlockHighlight(RenderHighlightEvent.Block event) {
        // Check if the event is cancellable and cancel it
        if (event.isCanceled()) {
            return;
        }
        // Access the block hit result
        BlockHitResult hitResult = event.getTarget();
        // Access the level renderer
        LevelRenderer renderer = event.getLevelRenderer();
        // Access the camera
        Camera camera = event.getCamera();
        // Access the delta tracker
        DeltaTracker delta = event.getDeltaTracker();
        // Access the pose stack
        PoseStack poseStack = event.getPoseStack();
        // Access the multi buffer source
        MultiBufferSource buffer = event.getMultiBufferSource();
        // You can perform custom rendering or modify the highlight behavior here
        // For example, you could cancel the event to prevent the default highlight
        // event.setCanceled(true);
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderHighlightEvent.java`

### BossEventProgress *(Client)*

**When**: Fired before a boss health bar is rendered to the screen

**Cancellable**: Yes

**Fields**:
```yaml
- name: bossEvent
  type: LerpingBossEvent
  description: The boss health bar currently being rendered
- name: x
  type: int
  description: The X position of the boss health bar
- name: y
  type: int
  description: The Y position of the boss health bar
- name: increment
  type: int
  description: The Y position increment before rendering the next boss health bar
```

**Methods**:
```yaml
- name: getBossEvent
  signature: public LerpingBossEvent getBossEvent()
  description: Returns the boss health bar currently being rendered
- name: getX
  signature: public int getX()
  description: Returns the X position of the boss health bar
- name: getY
  signature: public int getY()
  description: Returns the Y position of the boss health bar
- name: getIncrement
  signature: public int getIncrement()
  description: Returns the Y position increment before rendering the next boss health bar
- name: setIncrement
  signature: public void setIncrement(int increment)
  description: Sets the Y position increment before rendering the next boss health bar
```

**Example**:
```java
@SubscribeEvent
public void onBossEventProgress(BossEventProgress event) {
    if (event.isCanceled()) return;
    // Modify the Y position increment
    event.setIncrement(10);
    // Access the boss event
    LerpingBossEvent bossEvent = event.getBossEvent();
    // Get positions
    int x = event.getX();
    int y = event.getY();
    // You can also modify the positions if needed, though they are read-only
    // ...
    // Prevent rendering by cancelling the event
    // event.setCanceled(true);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/CustomizeGuiOverlayEvent.java`

### CalculateDetachedCameraDistanceEvent *(Client)*

**When**: This event fires when calculating the maximum distance from the player to the camera in third-person view, allowing modders to modify this distance before the ray-cast calculation occurs.

**Cancellable**: No

**Fields**:
```yaml
- name: camera
  type: Camera
  description: The camera instance used for the third-person view calculation.
- name: cameraFlipped
  type: boolean
  description: Indicates if the camera is flipped (facing backward instead of forward).
- name: entityScale
  type: float
  description: Scaling factor applied to the entity distance based on the size of the camera entity.
- name: entityDistance
  type: float
  description: Unscaled camera distance provided by the camera entity.
- name: vehicleEntityScale
  type: float
  description: Scaling factor applied to the vehicle entity distance based on the size of the vehicle.
- name: vehicleEntityDistance
  type: float
  description: Unscaled camera distance provided by the vehicle ridden by the camera entity, if any.
- name: distance
  type: float
  description: The final calculated distance from the camera to the camera entity, which can be modified.
```

**Methods**:
```yaml
- name: getCamera
  signature: public Camera getCamera()
  description: Returns the Camera instance used for the third-person view calculation.
- name: isCameraFlipped
  signature: public boolean isCameraFlipped()
  description: Returns true if the camera is flipped (facing backward instead of forward).
- name: getEntityScalingFactor
  signature: public float getEntityScalingFactor()
  description: Returns the scaling factor applied to the entity distance based on the size of the camera entity.
- name: getEntityDistance
  signature: public float getEntityDistance()
  description: Returns the unscaled camera distance provided by the camera entity.
- name: getVehicleEntityScalingFactor
  signature: public float getVehicleEntityScalingFactor()
  description: Returns the scaling factor applied to the vehicle entity distance based on the size of the vehicle.
- name: getVehicleEntityDistance
  signature: public float getVehicleEntityDistance()
  description: Returns the unscaled camera distance provided by the vehicle ridden by the camera entity, if any.
- name: getDistance
  signature: public float getDistance()
  description: Returns the final calculated distance from the camera to the camera entity.
- name: setDistance
  signature: public void setDistance(float distance)
  description: Sets the final distance from the camera to the camera entity, allowing modders to override the default calculation.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.CalculateDetachedCameraDistanceEvent;
import net.minecraft.client.Camera;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onCalculateDetachedCameraDistance(CalculateDetachedCameraDistanceEvent event) {
        // Modify the camera distance based on entity scale
        float newDistance = event.getEntityScale() * event.getEntityDistance();
        event.setDistance(newDistance);
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/CalculateDetachedCameraDistanceEvent.java`

### CalculatePlayerTurnEvent *(Client)*

**When**: This event fires when retrieving mouse sensitivity and cinematic camera values in MouseHandler#turnPlayer(), prior to running calculations on these values.

**Cancellable**: No

**Fields**:
```yaml
- name: mouseSensitivity
  type: double
  description: The raw mouse sensitivity value from Options#sensitivity() that will be used in calculations.
- name: cinematicCameraEnabled
  type: boolean
  description: The raw cinematic camera value from Options#smoothCamera that will be used in calculations.
```

**Methods**:
```yaml
- name: getMouseSensitivity
  signature: public double getMouseSensitivity()
  description: Returns the raw mouse sensitivity value from Options#sensitivity() that will be used in calculations.
- name: setMouseSensitivity
  signature: public void setMouseSensitivity(double mouseSensitivity)
  description: Sets the mouse sensitivity value that will be used in calculations.
- name: getCinematicCameraEnabled
  signature: public boolean getCinematicCameraEnabled()
  description: Returns the raw cinematic camera value from Options#smoothCamera that will be used in calculations.
- name: setCinematicCameraEnabled
  signature: public void setCinematicCameraEnabled(boolean cinematicCameraEnabled)
  description: Sets the cinematic camera value that will be used in calculations.
```

**Example**:
```java
@SubscribeEvent
public void onCalculatePlayerTurn(CalculatePlayerTurnEvent event) {
    // Modify mouse sensitivity
    event.setMouseSensitivity(1.5);
    
    // Enable cinematic camera
    event.setCinematicCameraEnabled(true);
}

// Or if you need to access the values:
@SubscribeEvent
public void onCalculatePlayerTurn(CalculatePlayerTurnEvent event) {
    double sensitivity = event.getMouseSensitivity();
    boolean cinematic = event.getCinematicCameraEnabled();
    // Perform calculations with these values
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/CalculatePlayerTurnEvent.java`

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
@SubscribeEvent
public void onClientChat(ClientChatEvent event) {
    if (event.isCanceled()) return;
    // Modify the message before sending
    event.setMessage(event.getMessage().toUpperCase());
    // Or access the original message
    System.out.println("Original message: " + event.getOriginalMessage());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ClientChatEvent.java`

### ClientChatReceivedEvent *(Client)*

**When**: When a chat message is received on the client side, specifically when a player or system message is sent and processed by the client.

**Cancellable**: Yes

**Fields**:
```yaml
- name: message
  type: Component
  description: The chat message that will be displayed in the chat message window if the event is not cancelled.
- name: boundChatType
  type: ChatType.Bound
  description: The bound chat type of the message, which contains the chat type, display name of the sender, and nullable target name depending on the chat type.
- name: sender
  type: UUID
  description: The UUID of the message sender. Util.NIL_UUID if the message is a system message.
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
  description: Returns the UUID of the message sender. Returns Util.NIL_UUID if the message is a system message.
- name: isSystem
  signature: public boolean isSystem()
  description: Returns true if the message was sent by the system, false otherwise.
```

**Example**:
```java
@SubscribeEvent
public void onChatReceived(ClientChatReceivedEvent event) {
    // Check if the message is system message
    if (event.isSystem()) {
        // Modify the message
        event.setMessage(Component.literal("System Message: " + event.getMessage().getString()));
        // Or cancel the event
        event.setCanceled(true);
    }
    // Access sender information
    if (event.getSender() != Util.NIL_UUID) {
        System.out.println("Message from: " + event.getSender());
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ClientChatReceivedEvent.java`

### ClientPlayerChangeGameTypeEvent *(Client)*

**When**: This event fires when the client player is notified of a change in their game type from the server.

**Cancellable**: No

**Fields**:
```yaml
- name: info
  type: PlayerInfo
  description: The PlayerInfo object representing the client player whose game type has changed.
- name: currentGameType
  type: GameType
  description: The game type the player had before the change.
- name: newGameType
  type: GameType
  description: The new game type the player has been changed to.
```

**Methods**:
```yaml
- name: getInfo
  signature: public PlayerInfo getInfo()
  description: Returns the PlayerInfo object for the client player.
- name: getCurrentGameType
  signature: public GameType getCurrentGameType()
  description: Returns the current game type of the player before the change.
- name: getNewGameType
  signature: public GameType getNewGameType()
  description: Returns the new game type the player has been changed to.
```

**Example**:
```java
@SubscribeEvent
public void onGameTypeChange(ClientPlayerChangeGameTypeEvent event) {
    PlayerInfo player = event.getInfo();
    GameType oldType = event.getCurrentGameType();
    GameType newType = event.getNewGameType();
    // Handle the game type change, e.g. update UI or save data
    System.out.println("Player changed game type from " + oldType + " to " + newType);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ClientPlayerChangeGameTypeEvent.java`

### ClientResourceLoadFinishedEvent *(Client)*

**When**: This event fires after the client has completed loading or reloading its resources successfully, both during initial startup and subsequent reloads.

**Cancellable**: No

**Fields**:
```yaml
- name: initial
  type: boolean
  description: Indicates whether the completed resource load was the initial load during client startup or a subsequent reload.
```

**Methods**:
```yaml
- name: isInitial
  signature: public boolean isInitial()
  description: Returns true if the completed resource load was the initial load during client startup.
```

**Example**:
```java
@Mod("mymod")
public class MyMod {
    @SubscribeEvent
    public void onResourceLoadFinished(ClientResourceLoadFinishedEvent event) {
        if (event.isInitial()) {
            // Handle initial resource load
        } else {
            // Handle subsequent resource reload
        }
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ClientResourceLoadFinishedEvent.java`

### ComputeFovModifierEvent *(Client)*

**When**: This event fires after the field of vision (FOV) modifier for a player is calculated, allowing developers to adjust it further.

**Cancellable**: No

**Fields**:
```yaml
- name: player
  type: Player
  description: The player whose FOV modifier is being calculated
- name: fovModifier
  type: float
  description: The original FOV modifier value before any modifications
- name: fovScale
  type: float
  description: The FOV scale used for interpolating the final FOV modifier
- name: newFovModifier
  type: float
  description: The final FOV modifier value after modifications
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player affected by this event
- name: getFovModifier
  signature: public float getFovModifier()
  description: Returns the original FOV modifier value before any modifications
- name: getFovScale
  signature: public float getFovScale()
  description: Returns the FOV scale used for interpolating the final FOV modifier
- name: getNewFovModifier
  signature: public float getNewFovModifier()
  description: Returns the final FOV modifier value after modifications
- name: setNewFovModifier
  signature: public void setNewFovModifier(float newFovModifier)
  description: Sets the new FOV modifier value for the player
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.ComputeFovModifierEvent;
import net.minecraft.world.entity.player.Player;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onComputeFovModifier(ComputeFovModifierEvent event) {
        Player player = event.getPlayer();
        float originalFov = event.getFovModifier();
        float scale = event.getFovScale();
        
        // Example: Increase FOV by 20% for the player
        event.setNewFovModifier(originalFov * 1.2f);
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ComputeFovModifierEvent.java`

### ConfigureMainRenderTargetEvent *(Client)*

**When**: Fired when configuring the MainTarget main render target during startup.

**Cancellable**: No

**Fields**:
```yaml
- name: enableStencil
  type: boolean
  description: A flag indicating whether the stencil buffer should be enabled for the main render target.
```

**Methods**:
```yaml
- name: isStencilEnabled
  signature: public boolean isStencilEnabled()
  description: Returns whether the stencil buffer is enabled for the main render target.
- name: enableStencil
  signature: public void enableStencil()
  description: Enables the stencil buffer for the main render target.
```

**Example**:
```java
@SubscribeEvent
public void onConfigureMainRenderTarget(ConfigureMainRenderTargetEvent event) {
    // Check if stencil is already enabled
    if (!event.isStencilEnabled()) {
        // Enable stencil buffer
        event.enableStencil();
        // Additional configuration can be done here if needed
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ConfigureMainRenderTargetEvent.java`

### DoRender *(Client)*

**When**: This event is fired before an entity renderer renders the nameplate of an entity, allowing modders to customize the rendering process.

**Cancellable**: Yes

**Fields**:
```yaml
- name: renderState
  type: EntityRenderState
  description: The render state of the entity whose nameplate is being rendered
- name: entityRenderer
  type: EntityRenderer
  description: The entity renderer responsible for rendering the nameplate
- name: partialTick
  type: float
  description: The partial tick value used for interpolation during rendering
- name: content
  type: Component
  description: The text content of the nameplate that will be rendered
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering operations
- name: multiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers for the nameplate
- name: packedLight
  type: int
  description: The packed light value used for rendering the nameplate
```

**Methods**:
```yaml
- name: getContent
  signature: public Component getContent()
  description: Returns the text content of the nameplate that will be rendered
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering operations
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the source of rendering buffers for the nameplate
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the packed light value used for rendering the nameplate
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, preventing the default rendering behavior
- name: isCanceled
  signature: public boolean isCanceled()
  description: Returns whether the event has been canceled, indicating the default rendering should be prevented
```

**Example**:
```java
@Mod("modid")
public class ModClient {
    @SubscribeEvent
    public void onNameTagRender(DoRender event) {
        // Modify the nameplate content
        event.setContent(Component.literal("Custom Name!"));
        
        // Cancel default rendering
        event.setCanceled(true);
        
        // Access rendering context
        event.getPoseStack().pushPose();
        event.getPoseStack().translate(0, 1, 0);
        // Custom rendering code here
        event.getPoseStack().popPose();
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderNameTagEvent.java`

### FrameGraphSetupEvent *(Client)*

**When**: This event fires when the frame graph is set up at the start of level rendering, right before the vanilla frame passes are set up.

**Cancellable**: No

**Fields**:
```yaml
- name: builder
  type: FrameGraphBuilder
  description: The FrameGraphBuilder used to set up the frame graph
- name: targets
  type: LevelTargetBundle
  description: The render targets used during level rendering
- name: renderTargetDescriptor
  type: RenderTargetDescriptor
  description: The render target descriptor to use for creating full-screen render targets
- name: frustum
  type: Frustum
  description: The culling frustum
- name: camera
  type: Camera
  description: The active Camera
- name: modelViewMatrix
  type: Matrix4f
  description: The model view matrix
- name: projectionMatrix
  type: Matrix4f
  description: The projection matrix
- name: deltaTracker
  type: DeltaTracker
  description: The DeltaTracker
- name: profiler
  type: ProfilerFiller
  description: The active ProfilerFiller
- name: enableOutline
  type: boolean
  description: Whether the entity outline post-processing shader will be enabled regardless of entities using it
```

**Methods**:
```yaml
- name: getFrameGrapBuilder
  signature: public FrameGraphBuilder getFrameGrapBuilder()
  description: Returns the FrameGraphBuilder used to set up the frame graph
- name: getTargetBundle
  signature: public LevelTargetBundle getTargetBundle()
  description: Returns the render targets used during level rendering
- name: getRenderTargetDescriptor
  signature: public RenderTargetDescriptor getRenderTargetDescriptor()
  description: Returns the render target descriptor to use for creating full-screen render targets
- name: getFrustum
  signature: public Frustum getFrustum()
  description: Returns the culling frustum
- name: getCamera
  signature: public Camera getCamera()
  description: Returns the active Camera
- name: getModelViewMatrix
  signature: public Matrix4f getModelViewMatrix()
  description: Returns the model view matrix
- name: getProjectionMatrix
  signature: public Matrix4f getProjectionMatrix()
  description: Returns the projection matrix
- name: getDeltaTracker
  signature: public DeltaTracker getDeltaTracker()
  description: Returns the DeltaTracker
- name: getProfiler
  signature: public ProfilerFiller getProfiler()
  description: Returns the active ProfilerFiller
- name: enableOutlineProcessing
  signature: public void enableOutlineProcessing()
  description: Enables the entity outline post-processing shader regardless of any entities having active outlines
- name: isOutlineProcessingEnabled
  signature: public boolean isOutlineProcessingEnabled()
  description: Returns whether the entity outline post-processing shader will be enabled regardless of entities using it
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.FrameGraphSetupEvent;
import net.neoforged.neoforge.eventbus.api.EventBus;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFrameGraphSetup(FrameGraphSetupEvent event) {
        // Access the frame graph builder
        FrameGraphBuilder builder = event.getFrameGrapBuilder();
        
        // Enable entity outline processing
        event.enableOutlineProcessing();
        
        // Access other rendering context information
        Camera camera = event.getCamera();
        Matrix4f projectionMatrix = event.getProjectionMatrix();
        
        // You can use this information to modify rendering behavior
        // For example, you could add custom rendering passes to the frame graph
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/FrameGraphSetupEvent.java`

### GatherComponents *(Client)*

**When**: Fired when a tooltip is gathering components to be rendered, before any text wrapping or processing.

**Cancellable**: Yes

**Fields**:
```yaml
- name: itemStack
  type: ItemStack
  description: The item stack for which the tooltip is being rendered.
- name: screenWidth
  type: int
  description: The width of the screen, used for text wrapping and positioning.
- name: screenHeight
  type: int
  description: The height of the screen, used for positioning the tooltip.
- name: tooltipElements
  type: List<Either<FormattedText, TooltipComponent>>
  description: The list of elements to be rendered on the tooltip, which can be either formatted text or custom tooltip components.
- name: maxWidth
  type: int
  description: The maximum width of the tooltip when being rendered. A value of -1 means unlimited width.
```

**Methods**:
```yaml
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the item stack for which the tooltip is being rendered.
- name: getScreenWidth
  signature: public int getScreenWidth()
  description: Returns the width of the screen, used for text wrapping and positioning.
- name: getScreenHeight
  signature: public int getScreenHeight()
  description: Returns the height of the screen, used for positioning the tooltip.
- name: getTooltipElements
  signature: public List<Either<FormattedText, TooltipComponent>> getTooltipElements()
  description: Returns the list of elements to be rendered on the tooltip.
- name: setMaxWidth
  signature: public void setMaxWidth(int maxWidth)
  description: Sets the maximum width of the tooltip. Use -1 for unlimited width.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.RenderTooltipEvent;
import net.neoforged.neoforge.eventbus.api.EventBus;
import net.minecraft.world.item.ItemStack;

@Mod("examplemod")
public class ExampleMod {
    public ExampleMod() {
        EventBus.EVENT_BUS.register(this);
    }

    @SubscribeEvent
    public void onTooltipGather(RenderTooltipEvent.GatherComponents event) {
        // Modify tooltip elements
        List<Either<FormattedText, TooltipComponent>> tooltipElements = event.getTooltipElements();
        // Add a custom component
        tooltipElements.add(Either.left(FormattedText.of("Custom Tooltip!", true, false, false)));
        // Set maximum width to 200
        event.setMaxWidth(200);
        // Cancel tooltip rendering
        event.setCanceled(true);
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderTooltipEvent.java`

### GatherEffectScreenTooltipsEvent *(Client)*

**When**: This event fires when EffectsInInventory draws the tooltip lines for a hovered MobEffectInstance in an AbstractContainerScreen.

**Cancellable**: No

**Fields**:
```yaml
- name: screen
  type: AbstractContainerScreen<?>
  description: The screen which will be rendering the tooltip lines.
- name: effectInst
  type: MobEffectInstance
  description: The effect whose tooltip is being drawn.
- name: tooltip
  type: List<Component>
  description: A mutable list of tooltip lines that can be modified.
```

**Methods**:
```yaml
- name: getScreen
  signature: public AbstractContainerScreen<?> getScreen()
  description: Returns the screen which will be rendering the tooltip lines.
- name: getEffectInstance
  signature: public MobEffectInstance getEffectInstance()
  description: Returns the effect whose tooltip is being drawn.
- name: getTooltip
  signature: public List<Component> getTooltip()
  description: Returns a mutable list of tooltip lines.
```

**Example**:
```java
@SubscribeEvent
public void onGatherEffectScreenTooltips(GatherEffectScreenTooltipsEvent event) {
    // Modify the tooltip lines
    event.getTooltip().add(Component.literal("Custom Tooltip Line"));
    
    // Access the screen and effect instance
    AbstractContainerScreen<?> screen = event.getScreen();
    MobEffectInstance effectInst = event.getEffectInstance();
    
    // Example: Add a custom line based on the effect
    if (effectInst.getEffect().getCategory() == MobEffectCategory.HARMFUL) {
        event.getTooltip().add(Component.literal("This effect is harmful!") );
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/GatherEffectScreenTooltipsEvent.java`

### InitializeClientRegistriesEvent *(Client)*

**When**: The event fires during Minecraft initialization and datagen startup to allow initializing custom client-only registries.

**Cancellable**: No

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
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.InitializeClientRegistriesEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onInitializeClientRegistTries(InitializeClientRegistriesEvent event) {
        // Custom client registry initialization code here
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/InitializeClientRegistriesEvent.java`

### InteractionKeyMappingTriggered *(Client)*

**When**: Fired when a keymapping that involves clicking the mouse buttons (Use Item, Pick Block, Attack) is triggered.

**Cancellable**: Yes

**Fields**:
```yaml
- name: button
  type: int
  description: The mouse button that triggered the event (0 for left, 1 for right, 2 for middle).
- name: keyMapping
  type: KeyMapping
  description: The key mapping that triggered this event.
- name: hand
  type: InteractionHand
  description: The hand that caused the input (MAIN_HAND or OFF_HAND).
- name: handSwing
  type: boolean
  description: Whether to swing the hand when the event is processed.
```

**Methods**:
```yaml
- name: setSwingHand
  signature: void setSwingHand(boolean value)
  description: Sets whether to swing the hand. This takes effect whether or not the event is cancelled.
- name: shouldSwingHand
  signature: boolean shouldSwingHand()
  description: Returns whether to swing the hand; always takes effect, regardless of cancellation.
- name: getHand
  signature: InteractionHand getHand()
  description: Returns the hand that caused the input.
- name: isAttack
  signature: boolean isAttack()
  description: Returns true if the mouse button is the left mouse button.
- name: isUseItem
  signature: boolean isUseItem()
  description: Returns true if the mouse button is the right mouse button.
- name: isPickBlock
  signature: boolean isPickBlock()
  description: Returns true if the mouse button is the middle mouse button.
- name: getKeyMapping
  signature: KeyMapping getKeyMapping()
  description: Returns the key mapping which triggered this event.
```

**Example**:
```java
When the player clicks the right mouse button to use an item, this event is triggered with the keyMapping for 'Use Item', the hand used, and whether to swing the hand.
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/InputEvent.java`

### MouseScrollingEvent *(Client)*

**When**: Fired when a mouse scroll wheel is used outside of a screen and a player is loaded, before being processed by vanilla.

**Cancellable**: Yes

**Fields**:
```yaml
- name: scrollDeltaX
  type: double
  description: The amount of change / delta of the mouse scroll on the X axis
- name: scrollDeltaY
  type: double
  description: The amount of change / delta of the mouse scroll on the Y axis
- name: mouseX
  type: double
  description: The X position of the mouse cursor
- name: mouseY
  type: double
  description: The Y position of the mouse cursor
- name: leftDown
  type: boolean
  description: True if the left mouse button is pressed
- name: middleDown
  type: boolean
  description: True if the middle mouse button is pressed
- name: rightDown
  type: boolean
  description: True if the right mouse button is pressed
```

**Methods**:
```yaml
- name: getScrollDeltaX
  signature: public double getScrollDeltaX()
  description: Returns the amount of change / delta of the mouse scroll on the X axis
- name: getScrollDeltaY
  signature: public double getScrollDeltaY()
  description: Returns the amount of change / delta of the mouse scroll on the Y axis
- name: isLeftDown
  signature: public boolean isLeftDown()
  description: Returns true if the left mouse button is pressed
- name: isRightDown
  signature: public boolean isRightDown()
  description: Returns true if the right mouse button is pressed
- name: isMiddleDown
  signature: public boolean isMiddleDown()
  description: Returns true if the middle mouse button is pressed
- name: getMouseX
  signature: public double getMouseX()
  description: Returns the X position of the mouse cursor
- name: getMouseY
  signature: public double getMouseY()
  description: Returns the Y position of the mouse cursor
```

**Example**:
```java
public class ScrollHandler {
    public void onScroll(MouseScrollingEvent event) {
        if (event.isLeftDown() && event.getScrollDeltaY() > 0) {
            System.out.println("Scrolling up with left click");
        }
        
        if (event.isRightDown() && event.getScrollDeltaX() > 0) {
            System.out.println("Scrolling right with right click");
        }
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/InputEvent.java`

### Opening *(Client)*

**When**: 2023-10-15T12:34:17.000Z

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
If a mod wants to change the screen that is about to be opened, they can listen for the Opening event and call setNewScreen() with their desired screen.
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ScreenEvent.java`

### Post *(Client)*

**When**: 2023-10-15T12:34:17.000Z

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
If a mod wants to change the screen that is about to be opened, they can listen for the Opening event and call setNewScreen() with their desired screen.
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ScreenEvent.java`

### Pre *(Client)*

**When**: Fires when the game pause state is about to change, specifically before the pause state is updated.

**Cancellable**: Yes

**Fields**:
```yaml
- name: pause
  type: boolean
  description: Represents the upcoming pause state. True means the game will be paused, false means it will be unpaused.
```

**Methods**:
```yaml
- name: isPaused
  signature: boolean isPaused()
  description: Returns the pause state. On Pre events, this returns the upcoming pause state. On Post events, it returns the updated pause state after the change.
```

**Example**:
```java
@SubscribeEvent
public void onPrePauseChange(ClientPauseChangeEvent.Pre event) {
    // Check if the pause state is about to change
    boolean newPauseState = event.isPaused();
    
    // Cancel the pause change if needed
    if (newPauseState) {
        event.setCanceled(true);
        // The game will not pause as this event was cancelled
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ClientPauseChangeEvent.java`

### Pre *(Client)*

**When**: (summary failed: unhandled error)

**Cancellable**: (summary failed: unhandled error)

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
// Example generation failed for Pre due to unhandled error.
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/InputEvent.java`

### Pre *(Client)*

**When**: Fires before the HUD is rendered to the screen, specifically during the rendering phase prior to the HUD elements being drawn.

**Cancellable**: Yes

**Fields**:
```yaml
- name: guiGraphics
  type: GuiGraphics
  description: Provides access to the GuiGraphics object used for rendering the HUD, allowing modders to interact with the rendering context.
- name: partialTick
  type: DeltaTracker
  description: Represents the partial tick time, useful for smooth animations or calculations that require sub-tick precision.
```

**Methods**:
```yaml
- name: getGuiGraphics
  signature: public GuiGraphics getGuiGraphics()
  description: Returns the GuiGraphics object associated with the event, providing access to rendering capabilities.
- name: getPartialTick
  signature: public DeltaTracker getPartialTick()
  description: Returns the DeltaTracker instance representing the partial tick time, useful for timing calculations.
```

**Example**:
```java
@SubscribeEvent
public void onPreRenderGui(RenderGuiEvent.Pre event) {
    if (event.isCanceled()) return;
    // Access the GuiGraphics object
    GuiGraphics guiGraphics = event.getGuiGraphics();
    // Access the partial tick delta
    DeltaTracker partialTick = event.getPartialTick();
    // Example: Draw a custom HUD element
    guiGraphics.drawString("Custom HUD Text", 10, 10, 0xFFFFFF, false);
    // Cancel the event to prevent the default HUD from rendering
    event.setCanceled(true);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderGuiEvent.java`

### Pre *(Client)*

**When**: Fires before a GUI layer is rendered to the screen, specifically during the pre-rendering phase of a GUI layer in Minecraft.

**Cancellable**: Yes

**Fields**:
```yaml
- name: guiGraphics
  type: GuiGraphics
  description: Provides access to the GuiGraphics object used for rendering the GUI layer.
- name: partialTick
  type: DeltaTracker
  description: Represents the partial tick used for smooth animation during rendering.
- name: name
  type: ResourceLocation
  description: Identifies the name of the GUI layer being rendered.
- name: layer
  type: GuiLayer
  description: References the GuiLayer object associated with the rendering operation.
```

**Methods**:
```yaml
- name: getGuiGraphics
  signature: public GuiGraphics getGuiGraphics()
  description: Returns the GuiGraphics object used for rendering the GUI layer.
- name: getPartialTick
  signature: public DeltaTracker getPartialTick()
  description: Returns the DeltaTracker instance representing the partial tick for animation.
- name: getName
  signature: public ResourceLocation getName()
  description: Returns the ResourceLocation identifier for the GUI layer.
- name: getLayer
  signature: public GuiLayer getLayer()
  description: Returns the GuiLayer object associated with the rendering operation.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, preventing the GUI layer from rendering.
- name: isCanceled
  signature: public boolean isCanceled()
  description: Returns whether the event has been canceled, preventing the GUI layer from rendering.
```

**Example**:
```java
@SubscribeEvent
public void onPreRenderGuiLayer(RenderGuiLayerEvent.Pre event) {
    if (event.isCanceled()) return;
    // Modify rendering parameters here
    event.getLayer().setRenderEnabled(false);
    event.setCanceled(true);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderGuiLayerEvent.java`

### Pre *(Client)*

**When**: Fires before a LivingEntity is rendered, allowing modders to modify rendering behavior or cancel rendering entirely.

**Cancellable**: Yes

**Fields**:
```yaml
- name: renderState
  type: S
  description: The render state of the living entity being rendered, which contains information about the entity's appearance and animation state.
- name: renderer
  type: LivingEntityRenderer<T, S, M>
  description: The renderer responsible for rendering the living entity, providing access to rendering logic and model.
- name: partialTick
  type: float
  description: The partial tick value representing the interpolation between the current and next tick for smooth animation.
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering transformations, allowing modification of rendering positions and orientations.
- name: multiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers that will be used to collect and render graphics.
- name: packedLight
  type: int
  description: The packed light value containing both sky and block light information for the rendering context.
```

**Methods**:
```yaml
- name: getRenderState
  signature: public S getRenderState()
  description: Returns the render state of the living entity, containing information about its appearance and animation state.
- name: getRenderer
  signature: public LivingEntityRenderer<T, S, M> getRenderer()
  description: Returns the renderer responsible for rendering the living entity, providing access to rendering logic and model.
- name: getPartialTick
  signature: public float getPartialTick()
  description: Returns the partial tick value used for interpolation between ticks to achieve smooth animation.
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering transformations, allowing modification of rendering positions and orientations.
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the source of rendering buffers that will be used to collect and render graphics.
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the packed light value containing both sky and block light information for the rendering context.
```

**Example**:
```java
@SubscribeEvent
public void onRenderLivingPre(RenderLivingEvent.Pre event) {
    if (event.isCanceled()) return;
    // Modify rendering behavior here
    event.getPoseStack().translate(0, 1, 0);
    // Cancel rendering
    event.setCanceled(true);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderLivingEvent.java`

### Pre *(Client)*

**When**: Fires before a player is rendered in the game client, allowing modders to modify rendering behavior or suppress rendering.

**Cancellable**: Yes

**Fields**:
```yaml
- name: renderState
  type: PlayerRenderState
  description: The current rendering state of the player, containing information about the player's position, rotation, and other rendering parameters.
- name: renderer
  type: PlayerRenderer
  description: The PlayerRenderer instance responsible for rendering the player, allowing access to rendering logic and properties.
- name: partialTick
  type: float
  description: The partial tick value representing the interpolation between the last and current tick for smooth animation.
- name: poseStack
  type: PoseStack
  description: The PoseStack used for rendering transformations, allowing modders to apply custom transformations.
- name: multiBufferSource
  type: MultiBufferSource
  description: The MultiBufferSource providing access to buffer data for rendering operations.
- name: packedLight
  type: int
  description: The packed light value containing lighting information for the player's rendering.
```

**Methods**:
```yaml
- name: getRenderer
  signature: public PlayerRenderer getRenderer()
  description: Returns the PlayerRenderer instance associated with this event, allowing access to rendering properties and methods.
- name: isCanceled
  signature: public boolean isCanceled()
  description: Checks if the event has been canceled, preventing the player from being rendered.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, which can be used to suppress player rendering.
```

**Example**:
```java
@SubscribeEvent
public void onPlayerRenderPre(RenderPlayerEvent.Pre event) {
    // Check if the event is canceled
    if (event.isCanceled()) return;
    
    // Modify rendering parameters
    event.renderState.setPartialTick(0.5f);
    
    // Apply custom transformations
    event.poseStack.translate(0.5, 0.5, 0);
    
    // Cancel rendering if needed
    event.setCanceled(true);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderPlayerEvent.java`

### Pre *(Client)*

**When**: Fired before the tooltip is rendered, allowing modification of positioning and font settings.

**Cancellable**: Yes

**Fields**:
```yaml
- name: itemStack
  type: ItemStack
  description: The item stack for which the tooltip is being rendered.
- name: graphics
  type: GuiGraphics
  description: The graphics helper for the GUI used to draw the tooltip.
- name: x
  type: int
  description: The X position of the tooltip box.
- name: y
  type: int
  description: The Y position of the tooltip box.
- name: font
  type: Font
  description: The font used to render the text of the tooltip.
- name: components
  type: List<ClientTooltipComponent>
  description: The unmodifiable list of tooltip components to be rendered.
```

**Methods**:
```yaml
- name: getScreenWidth
  signature: int getScreenWidth()
  description: Returns the width of the screen, used for text wrapping and positioning.
- name: getScreenHeight
  signature: int getScreenHeight()
  description: Returns the height of the screen, used for positioning the tooltip within the screen bounds.
- name: getTooltipPositioner
  signature: ClientTooltipPositioner getTooltipPositioner()
  description: Returns the tooltip positioner used to determine the tooltip's position on the screen.
- name: setFont
  signature: void setFont(Font fr)
  description: Sets the font to be used for rendering the tooltip text.
- name: setX
  signature: void setX(int x)
  description: Sets the X origin position of the tooltip.
- name: setY
  signature: void setY(int y)
  description: Sets the Y origin position of the tooltip.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.RenderTooltipEvent;
import net.neoforged.neoforge.eventbus.api.EventBus;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent;
import net.minecraft.world.item.ItemStack;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onTooltipRender(RenderTooltipEvent.Pre event) {
        // Change tooltip font
        event.setFont(Font.MONOSPACE);
        
        // Adjust tooltip position
        event.setX(event.getX() + 10);
        event.setY(event.getY() + 10);
        
        // Modify tooltip components if needed
        // event.getComponents().forEach(...);
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderTooltipEvent.java`

### Pre *(Client)*

**When**: 2023-10-15T12:34:17.000Z

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
If a mod wants to change the screen that is about to be opened, they can listen for the Opening event and call setNewScreen() with their desired screen.
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ScreenEvent.java`

### RecipesReceivedEvent *(Client)*

**When**: This event fires on the client when it has finished receiving recipe data from the server, shortly after first entering the world or when the server reloads its datapacks.

**Cancellable**: No

**Fields**:
```yaml
- name: recipeTypes
  type: Set<RecipeType<?>>
  description: The recipe types that were requested by mods on the server to be sent to the client.
- name: recipeMap
  type: RecipeMap
  description: The recipes received from the server.
```

**Methods**:
```yaml
- name: getRecipeTypes
  signature: public Set<RecipeType<?>> getRecipeTypes()
  description: Returns the recipe types that were requested by mods on the server to be sent to the client.
- name: getRecipeMap
  signature: public RecipeMap getRecipeMap()
  description: Returns the recipes received from the server.
```

**Example**:
```java
@SubscribeEvent
public void onRecipesReceived(RecipesReceivedEvent event) {
    Set<RecipeType<?>> recipeTypes = event.getRecipeTypes();
    RecipeMap recipeMap = event.getRecipeMap();
    // Process received recipes here
    // For example, update UI or cache recipes
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RecipesReceivedEvent.java`

### RegisterBlockStateModels *(Client)*

**When**: This event fires during the client initialization phase to register custom block state models and their definitions.

**Cancellable**: No

**Fields**:
```yaml
- name: modelIdMapper
  type: ExtraCodecs.LateBoundIdMapper<ResourceLocation, MapCodec<? extends CustomUnbakedBlockStateModel>>
  description: Maps resource locations to block state model codecs for custom models.
- name: defintionIdMapper
  type: ExtraCodecs.LateBoundIdMapper<ResourceLocation, MapCodec<? extends CustomBlockModelDefinition>>
  description: Maps resource locations to block model definition codecs for custom definitions.
```

**Methods**:
```yaml
- name: registerModel
  signature: public void registerModel(ResourceLocation location, MapCodec<? extends CustomUnbakedBlockStateModel> codec)
  description: Registers a custom block state model codec with the specified resource location.
- name: registerDefinition
  signature: public void registerDefinition(ResourceLocation location, MapCodec<? extends CustomBlockModelDefinition> codec)
  description: Registers a custom block model definition codec with the specified resource location.
```

**Example**:
```java
@Mod("modid")
public class ModInit {
    @SubscribeEvent
    public static void onRegisterBlockStateModels(RegisterBlockStateModels event) {
        event.registerModel(new ResourceLocation("modid:block/model"), BlockModel::codec);
        event.registerDefinition(new ResourceLocation("modid:block/definition"), BlockDefinition::codec);
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterBlockStateModels.java`

### RegisterClientCommandsEvent *(Client)*

**When**: When the client is initializing its command registration system, allowing mods to register custom commands that run on the client side.

**Cancellable**: No

**Fields**:
```yaml
- name: dispatcher
  type: CommandDispatcher<CommandSourceStack>
  description: The command dispatcher used to register commands that will be executed on the client.
- name: context
  type: CommandBuildContext
  description: The context used to build the commands, providing access to command arguments and their definitions.
```

**Methods**:
```yaml
- name: getDispatcher
  signature: public CommandDispatcher<CommandSource,Stack> getDispatcher()
  description: Returns the command dispatcher for registering client-side commands.
- name: getBuildContext
  signature: public CommandBuildContext getBuildContext()
  description: Returns the context used to build the commands, which contains command argument definitions.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterClientCommands(RegisterClientCommandsEvent event) {
    event.getDispatcher().register((source, command) -> {
        command.then(LiteralArgumentBuilder.literal("example")
            .executes(context -> {
                source.sendSuccess(new TextComponent("Example command executed!"), true);
                return 0;
            })
        );
    });
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterClientCommandsEvent.java`

### RegisterClientExtensionsEvent *(Client)*

**When**: This event fires on the mod-specific event bus, only on the logical client side, allowing modders to register client-side extensions for various game objects.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: registerBlock
  signature: void registerBlock(IClientBlockExtensions extensions, Block... blocks)
  description: Registers the given IClientBlockExtensions for the specified Block(s), allowing modders to add custom client-side behavior to blocks.
- name: registerBlock
  signature: void registerBlock(IClientBlockExtensions extensions, Holder<Block>... blocks)
  description: Alternative registerBlock method that accepts Holder<Block> parameters, converting them to Block objects before registration.
- name: isBlockRegistered
  signature: boolean isBlockRegistered(Block block)
  description: Checks if a IClientBlockExtensions has been registered for the specified Block.
- name: registerItem
  signature: void registerItem(IClientItemExtensions extensions, Item... items)
  description: Registers the given IClientItemExtensions for the specified Item(s), allowing modders to add custom client-side behavior to items.
- name: registerItem
  signature: void registerItem(IClientItemExtensions extensions, Holder<Item>... items)
  description: Alternative registerItem method that accepts Holder<Item> parameters, converting them to Item objects before registration.
- name: isItemRegistered
  signature: boolean isItemRegistered(Item item)
  description: Checks if a IClientItemExtensions has been registered for the specified Item.
- name: registerMobEffect
  signature: void registerMobEffect(IClientMobEffectExtensions extensions, MobEffect... mobEffects)
  description: Registers the given IClientMobEffectExtensions for the specified MobEffect(s), allowing modders to add custom client-side behavior to mob effects.
- name: registerMobEffect
  signature: void registerMobEffect(IClientMobEffectExtensions extensions, Holder<MobEffect>... mobEffects)
  description: Alternative registerMobEffect method that accepts Holder<MobEffect> parameters, converting them to MobEffect objects before registration.
- name: isMobEffectRegistered
  signature: boolean isMobEffectRegistered(MobEffect mobEffect)
  description: Checks if a IClientMobEffectExtensions has been registered for the specified MobEffect.
- name: registerFluidType
  signature: void registerFluidType(IClientFluidTypeExtensions extensions, FluidType... fluidTypes)
  description: Registers the given IClientFluidTypeExtensions for the specified FluidType(s), allowing modders to add custom client-side behavior to fluid types.
- name: registerFluidType
  signature: void registerFluidType(IClientFluidTypeExtensions extensions, Holder<FluidType>... fluidTypes)
  description: Alternative registerFluidType method that accepts Holder<FluidType> parameters, converting them to FluidType objects before registration.
- name: isFluidTypeRegistered
  signature: boolean isFluidTypeRegistered(FluidType fluidType)
  description: Checks if a IClientFluidTypeExtensions has been registered for the specified FluidType.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterClientExtensions(RegisterClientExtensionsEvent event) {
        event.registerBlock(new MyBlockExtensions(), Blocks.DIAMOND_BLOCK);
        event.registerItem(new MyItemExtensions(), Items.DIAMOND);
        event.registerMobEffect(new MyMobEffectExtensions(), MobEffects.BLINDNESS);
        event.registerFluidType(new MyFluidTypeExtensions(), Fluids.LAVA);
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/extensions/common/RegisterClientExtensionsEvent.java`

### RegisterClientPayloadHandlersEvent *(Client)*

**When**: This event fires when the ClientNetworkRegistry is being set up, specifically during the registration of clientbound payload handlers.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: register
  signature: public <T extends CustomPacketPayload> void register(CustomPacketPayload.Type<T> type, IPayloadHandler<T> handler)
  description: Registers the provided IPayloadHandler as the client handler for the specified payload type, invoking it on the main thread.
- name: register
  signature: public <T extends CustomPacketPayload> void register(CustomPacketPayload.Type<T> type, HandlerThread thread, IPayloadHandler<T> handler)
  description: Registers the provided IPayloadHandler as the client handler for the specified payload type, invoking it on the specified thread.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.network.event.RegisterClientPayloadHandlersEvent;
import net.neoforged.neoforge.network.handling.IPayloadHandler;
import net.neoforged.neoforge.network.registration.HandlerThread;
import net.neoforged.neoforge.network.registration.ClientNetworkRegistry;
import net.minecraft.network.protocol.common.custom.CustomPacketPayload;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterClientPayloadHandlers(RegisterClientPayloadHandlersEvent event) {
        event.register(CustomPacketPayload.Type.literal("examplepayload"), (payload, context) -> {
            // Handle payload
        });
        event.register(CustomPacketPayload.Type.literal("examplepayload2"), HandlerThread.MAIN, (payload, context) -> {
            // Handle payload on main thread
        });
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/network/event/RegisterClientPayloadHandlersEvent.java`

### RegisterClientTooltipComponentFactoriesEvent *(Client)*

**When**: This event fires when modders want to register custom ClientTooltipComponent factories for TooltipComponent types, specifically on the mod-specific event bus on the logical client side.

**Cancellable**: No

**Fields**:
```yaml
- name: factories
  type: Map<Class<? extends TooltipComponent>, Function<TooltipComponent, ClientTooltipComponent>>
  description: A map of TooltipComponent types to their corresponding ClientTooltipComponent factory functions. Modders use this to register custom tooltip component factories.
```

**Methods**:
```yaml
- name: register
  signature: <T extends TooltipComponent> void register(Class<T> type, Function<? super T, ? extends ClientTooltipComponent> factory)
  description: Registers a ClientTooltip,Component factory for a TooltipComponent type. This is the primary method modders use to add custom tooltip component factories.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterTooltipFactories(RegisterClientTooltipComponentFactoriesEvent event) {
    event.register(MyTooltipComponent.class, MyTooltipComponent::createTooltipComponent);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterClientTooltipComponentFactoriesEvent.java`

### RegisterConditionalItemModelPropertyEvent *(Client)*

**When**: This event fires during the model registration process for conditional item model properties, specifically when registering property codecs for custom conditional item model properties.

**Cancellable**: No

**Fields**:
```yaml
- name: idMapper
  type: ExtraCodecs.LateBoundIdMapper<ResourceLocation, MapCodec<? extends ConditionalItemModelProperty>>
  description: The id mapper used to register property codecs. This is the primary object used to register new conditional item model properties.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ResourceLocation location, MapCodec<? extends ConditionalItemModelProperty> source)
  description: Registers a new conditional item model property codec with the specified location and source codec. This is the primary method used to register custom properties.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterConditionalItemModelProperty(RegisterConditionalItemModelPropertyEvent event) {
    event.register(new ResourceLocation("mymod:my_property"), MyPropertyCodec.INSTANCE);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterConditionalItemModelPropertyEvent.java`

### RegisterDimensionSpecialEffectsEvent *(Client)*

**When**: This event fires when modders want to register custom DimensionSpecialEffects for their dimensions, specifically on the mod-specific event bus on the logical client side.

**Cancellable**: No

**Fields**:
```yaml
- name: effects
  type: Map<ResourceLocation, DimensionSpecialEffects>
  description: A map of dimension types to their corresponding DimensionSpecialEffects, which modders can modify to register custom effects.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ResourceLocation dimensionType, DimensionSpecialEffects effects)
  description: Registers the effects for a given dimension type by adding an entry to the effects map.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterDimensionSpecialEffects(RegisterDimensionSpecialEffectsEvent event) {
    event.register(new ResourceLocation("mymod:my_dimension"), new MyDimensionSpecialEffects());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterDimensionSpecialEffectsEvent.java`

### RegisterDimensionTransitionScreenEvent *(Client)*

**When**: This event fires when registering screen effects for dimension transitions in the Minecraft client.

**Cancellable**: No

**Fields**:
```yaml
- name: conditionalDimensionEffects
  type: Map<Pair<ResourceKey<Level>, ResourceKey<Level>>, ReceivingLevelScreenFactory>
  description: Stores conditional dimension transition screens that are triggered when traveling to a specific dimension from a specific origin dimension.
- name: toEffects
  type: Map<ResourceKey<Level>, ReceivingLevelScreenFactory>
  description: Stores screens that are displayed when transitioning to a specific dimension.
- name: fromEffects
  type: Map<ResourceKey<Level>, ReceivingLevelScreenFactory>
  description: Stores screens that are displayed when transitioning from a specific dimension.
```

**Methods**:
```yaml
- name: registerIncomingEffect
  signature: public boolean registerIncomingEffect(ResourceKey<Level> dimension, ReceivingLevelScreenFactory screen)
  description: Registers a screen to be shown when transitioning to the specified dimension.
- name: registerOutgoingEffect
  signature: public boolean registerOutgoingEffect(ResourceKey<Level> dimension, ReceivingLevelScreenFactory screen)
  description: Registers a screen to be shown when transitioning from the specified dimension.
- name: registerConditionalEffect
  signature: public boolean registerConditionalEffect(ResourceKey<Level> toDimension, ResourceKey<Level> fromDimension, ReceivingLevelScreenFactory screen)
  description: Registers a conditional screen that is shown when transitioning to a specific dimension from a specific origin dimension. This has priority over regular incoming/outgoing effects.
```

**Example**:
```java
@SubscribeEvent
public void onDimensionTransition(RegisterDimensionTransitionScreenEvent event) {
    // Register a screen for transitioning to the Overworld
    event.registerIncomingEffect(Levels.OVERWORLD, (context) -> new MyTransitionScreen(context));
    
    // Register a screen for transitioning from the Nether
    event.registerOutgoingEffect(Levels.NETHER, (context) -> new MyTransitionScreen(context));
    
    // Register a conditional screen for transitioning to the Overworld from the Nether
    event.registerConditionalEffect(Levels.OVERWORLD, Levels.NETHER, (context) -> new MyTransitionScreen(context));
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterDimensionTransitionScreenEvent.java`

### RegisterEntitySpectatorShadersEvent *(Client)*

**When**: This event fires when the game is initializing client-side spectator shaders for entities, allowing modders to register custom shaders for specific entity types.

**Cancellable**: No

**Fields**:
```yaml
- name: shaders
  type: Map<EntityType<?>, ResourceLocation>
  description: A map of entity types to their corresponding spectator shader resource locations. Modders can modify this map to register custom shaders for entities.
```

**Methods**:
```yaml
- name: register
  signature: public void register(EntityType<?> entityType, ResourceLocation shader)
  description: Registers a spectator shader for a given entity type. This method adds an entry to the shaders map.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterEntitySpectatorShaders(RegisterEntitySpectatorShadersEvent event) {
    event.register(EntityType.CREEPER, new ResourceLocation("modid", "shaders/spectator/creeper.json"));
    event.register(EntityType.ENDERMAN, new ResourceLocation("modid", "shaders/spectator/enderman.json"));
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterEntitySpectatorShadersEvent.java`

### RegisterGuiLayersEvent *(Client)*

**When**: This event fires during the client initialization phase, allowing modders to register custom GUI layers for rendering.

**Cancellable**: No

**Fields**:
```yaml
- name: layers
  type: List<GuiLayerManager.NamedLayer>
  description: A list of named GUI layers that have been registered. Modders can access this to inspect or modify the layers.
```

**Methods**:
```yaml
- name: registerBelowAll
  signature: public void registerBelowAll(ResourceLocation id, GuiLayer layer)
  description: Registers a layer that renders below all other layers.
- name: registerBelow
  signature: public void registerBelow(ResourceLocation other, ResourceLocation id, GuiLayer layer)
  description: Registers a layer that renders below a specified existing layer.
- name: registerAbove
  signature: public void registerAbove(ResourceLocation other, ResourceLocation id, GuiLayer layer)
  description: Registers a layer that renders above a specified existing layer.
- name: registerAboveAll
  signature: public void registerAboveAll(ResourceLocation id, GuiLayer layer)
  description: Registers a layer that renders above all other layers.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterGuiLayers(RegisterGuiLayersEvent event) {
    event.registerAboveAll(new ResourceLocation("mymod", "custom_layer"), new CustomGuiLayer());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterGuiLayersEvent.java`

### RegisterItemDecorationsEvent *(Client)*

**When**: This event fires during the client initialization phase, allowing modders to register custom item decorators for items.

**Cancellable**: No

**Fields**:
```yaml
- name: decorators
  type: Map<Item, List<IItemDecorator>>
  description: A map that holds registered item decorators, where keys are items and values are lists of decorators.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ItemLike itemLike, IItemDecorator decorator)
  description: Registers an item decorator for a specific item, adding it to the internal map of decorators.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterItemDecorations(RegisterItemDecorationsEvent event) {
    event.register(Items.DIAMOND_SWORD, new CustomItemDecorator());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterItemDecorationsEvent.java`

### RegisterItemModelsEvent *(Client)*

**When**: This event fires during the model registration process for items, specifically when item models are being registered in the client side.

**Cancellable**: No

**Fields**:
```yaml
- name: idMapper
  type: ExtraCodecs.LateBoundIdMapper<ResourceLocation, MapCodec<? extends ItemModel.Unbaked>>
  description: The mapper used to register custom item model codecs. Modders can use this to register their own item model codecs for custom models.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ResourceLocation location, MapCodec<? extends ItemModel.Unbaked> source)
  description: Registers a custom item model codec with the provided location and source. This allows modders to define custom item models using their own codec definitions.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterItemModels(RegisterItemModelsEvent event) {
    event.register(new ResourceLocation("mymod:item/custom_model"), MyCustomModelCodec.INSTANCE);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterItemModelsEvent.java`

### RegisterJsonAnimationTypesEvent *(Client)*

**When**: This event fires during the client initialization phase, allowing modders to register custom AnimationTarget and interpolation functions for JSON entity animations.

**Cancellable**: No

**Fields**:
```yaml
- name: targets
  type: ImmutableMap.Builder<ResourceLocation, AnimationTarget>
  description: Builder for registering custom AnimationTarget instances with specific ResourceLocation keys.
- name: interpolations
  type: ImmutableMap.Builder<ResourceLocation, AnimationChannel.Interpolation>
  description: Builder for registering custom interpolation functions for AnimationChannel with specific ResourceLocation keys.
- name: registeredTargets
  type: Map<ResourceLocation, AnimationTarget>
  description: Map of already registered AnimationTarget instances that can be accessed or modified.
- name: registeredInterpolations
  type: Map<ResourceLocation, AnimationChannel.Interpolation>
  description: Map of already registered interpolation functions that can be accessed or modified.
```

**Methods**:
```yaml
- name: registerTarget
  signature: public void registerTarget(ResourceLocation key, AnimationTarget target)
  description: Registers a custom AnimationTarget with the specified ResourceLocation key.
- name: registerInterpolation
  signature: public void registerInterpolation(ResourceLocation key, AnimationChannel.Interpolation interpolation)
  description: Registers a custom interpolation function with the specified ResourceLocation key.
- name: checkDuplicate
  signature: private static <T> void checkDuplicate(String what, ResourceLocation key, Map<ResourceLocation, T> by, T obj)
  description: Helper method to check for duplicate registrations and throw an exception if a duplicate is found.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLClientSetupEvent;
import net.neoforged.neoforge.client.event.RegisterJsonAnimationTypesEvent;
import net.minecraft.resources.ResourceLocation;
import net.neoforged.neoforge.client.entity.animation.AnimationTarget;
import net.neoforged.neoforge.client.entity.animation.AnimationChannel;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterJsonAnimationTypes(RegisterJsonAnimationTypesEvent event) {
        // Register a custom AnimationTarget
        event.registerTarget(new ResourceLocation("examplemod", "custom_target"), new CustomAnimationTarget());
        
        // Register a custom interpolation function
        event.registerInterpolation(new ResourceLocation("examplemod", "custom_interpolation"), AnimationChannel.Interpolation.CUBIC);
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterJsonAnimationTypesEvent.java`

### RegisterKeyMappingsEvent *(Client)*

**When**: This event fires when the game is initializing client-side key mappings, allowing modders to register custom key mappings.

**Cancellable**: No

**Fields**:
```yaml
- name: options
  type: Options
  description: The Options object containing the current key mappings, which can be modified to add new key mappings.
```

**Methods**:
```yaml
- name: register
  signature: public void register(KeyMapping key)
  description: Registers a new key mapping by adding it to the Options object's keyMappings array.
```

**Example**:
```java
@SubscribeEvent
public void onKeyRegister(RegisterKeyMappingsEvent event) {
    event.register(new KeyMapping("key.example.key", Keyboard.KEY_A, "Example Key"));
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterKeyMappingsEvent.java`

### RegisterMapDecorationRenderersEvent *(Client)*

**When**: This event fires during the client initialization phase, allowing modders to register custom map decoration renderers for specific MapDecoration types.

**Cancellable**: No

**Fields**:
```yaml
- name: renderers
  type: Map<MapDecorationType, IMapDecorationRenderer>
  description: A map that holds the registered custom decoration renderers, where keys are MapDecorationType instances and values are IMapDecorationRenderer implementations.
```

**Methods**:
```yaml
- name: register
  signature: public void register(MapDecorationType type, IMapDecorationRenderer renderer)
  description: Registers a custom decoration renderer for the specified MapDecorationType. Throws an IllegalStateException if a renderer for the same type is already registered.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterMapDecorationRenderers(RegisterMapDecorationRenderersEvent event) {
    event.register(MapDecorationType.RED_X, new CustomRedXRenderer());
    event.register(MapDecorationType.RED_ARROW, new CustomRedArrowRenderer());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/gui/map/RegisterMapDecorationRenderersEvent.java`

### RegisterMaterialAtlasesEvent *(Client)*

**When**: This event fires during startup when the ModelManager is constructed, specifically for registering texture atlases used with Material or other systems that retrieve the atlas via Minecraft#getTextureAtlas(ResourceLocation) or ModelManager#getAtlas(ResourceLocation).

**Cancellable**: No

**Fields**:
```yaml
- name: atlases
  type: Map<ResourceLocation, ResourceLocation>
  description: A map of texture atlas names to their corresponding info JSON locations. Modders use this to register new texture atlases that will be available for materials and other systems.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ResourceLocation atlasLocation, Resource,Location atlasInfoLocation)
  description: Registers a texture atlas with the given name and info location. This method adds the atlas to the atlases map, throwing an exception if the atlas is already registered.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterMaterialAtlases(RegisterMaterialAtlasesEvent event) {
    event.register(new ResourceLocation("modid", "textures/atlas.png"),
                   new ResourceLocation("modid", "atlases/atlas.json"));
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterMaterialAtlasesEvent.java`

### RegisterMenuScreensEvent *(Client)*

**When**: This event fires during the client initialization phase, allowing modders to register custom menu screens for container types.

**Cancellable**: No

**Fields**:
```yaml
- name: registeredScreens
  type: Map<MenuType<?>, MenuScreens.ScreenConstructor<?, ?>>
  description: A map of registered menu screens that modders can modify to add custom screen constructors for different container types.
```

**Methods**:
```yaml
- name: register
  signature: <M extends AbstractContainerMenu, U extends Screen & MenuAccess<M>> void register(MenuType<? extends M> menuType, Menu, ScreenConstructor<M, U> screenConstructor)
  description: Registers a custom screen constructor for a specific container type. Throws an exception if the container type is already registered.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterMenuScreens(RegisterMenuScreensEvent event) {
    event.register(
        MenuType.CRAFTING,
        (menu, screen) -> new CustomCraftingScreen(menu, screen)
    );
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterMenuScreensEvent.java`

### RegisterNamedRenderTypesEvent *(Client)*

**When**: This event fires during the client initialization phase, allowing modders to register custom named RenderTypeGroups for rendering entities and terrain.

**Cancellable**: No

**Fields**:
```yaml
- name: renderTypes
  type: Map<ResourceLocation, RenderTypeGroup>
  description: A map of ResourceLocation keys to RenderTypeGroup objects that have been registered through the register() method.
```

**Methods**:
```yaml
- name: register
  signature: void register(ResourceLocation key, ChunkSectionLayer chunkLayer, RenderType entityRenderType)
  description: Registers a named RenderTypeGroup with the specified chunk layer and entity render type. Validates that the entity render type uses the NEW_ENTITY vertex format.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterNamedRenderTypes(RegisterNamedRenderTypesEvent event) {
    event.register(new ResourceLocation("mymod:custom_entity_render_type"),
        ChunkSectionLayer.get("mymod:custom_chunk_layer"),
        RenderType.entityTranslucent());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterNamedRenderTypesEvent.java`

### RegisterParticleProvidersEvent *(Client)*

**When**: This event fires during the client initialization phase, specifically when registering particle providers for particle types.

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
  description: Registers a ParticleProvider for a non-json-based ParticleType. These particles do not receive a list of texture sprites to use for rendering themselves.
- name: registerSprite
  signature: <T extends ParticleOptions> void registerSprite(ParticleType<T> type, ParticleProvider.Sprite<T> sprite)
  description: Registers a ParticleProvider for a json-based ParticleType with a single texture; the resulting TextureSheetParticle will use that texture when created.
- name: registerSpriteSet
  signature: <T extends ParticleOptions> void registerSpriteSet(ParticleType<T> type, ParticleEngine.SpriteParticleRegistration<T> registration)
  description: Registers a ParticleProvider for a json-based ParticleType. Particle jsons define a list of texture sprites which the particle can use to render itself.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterParticleProviders(RegisterParticleProvidersEvent event) {
    event.particleEngine.registerSpecial(MyParticleType.INSTANCE, MyParticleProvider::new);
    event.particleEngine.registerSprite(MySpriteParticleType.INSTANCE, MySpriteParticleProvider::new);
    event.particleEngine.registerSpriteSet(MySpriteSetParticleType.INSTANCE, MySpriteSetParticleRegistration::new);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterParticleProvidersEvent.java`

### RegisterPictureInPictureRenderersEvent *(Client)*

**When**: This event fires when modders want to register custom PictureInPictureRenderer factories for specialized UI rendering, specifically on the client logical side.

**Cancellable**: No

**Fields**:
```yaml
- name: renderers
  type: List<PictureInPictureRendererRegistration<?>>
  description: A list of registered PictureInPictureRenderer factories that will be used for specialized UI rendering.
```

**Methods**:
```yaml
- name: register
  signature: public <T extends PictureInPictureRenderState> void register(Class<T> stateClass, Function<MultiBufferSource.BufferSource, PictureInPictureRenderer<T>> factory)
  description: Registers a custom PictureInPictureRenderer factory that can handle specific render states.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterPictureInPictureRenderers(RegisterPictureInPictureRenderersEvent event) {
    event.register(PictureInPictureRenderState.class, (source) -> {
        return new CustomPictureInPictureRenderer(source);
    });
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterPictureInPictureRenderersEvent.java`

### RegisterPipelineModifiersEvent *(Client)*

**When**: This event fires when registering pipeline modifiers to modify RenderPipeline instances in arbitrary render paths, specifically on the client logical side.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: register
  signature: public void register(ResourceKey<PipelineModifier> key, PipelineModifier modifier)
  description: Registers a PipelineModifier with the specified key. If a modifier with the same key already exists, an IllegalStateException is thrown.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterPipelineModifiers(RegisterPipelineModifiersEvent event) {
    event.register(ResourceKey.create(ResourceKey.create("mod:render_pipeline"), PipelineModifier.class), new MyPipelineModifier());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/pipeline/RegisterPipelineModifiersEvent.java`

### RegisterPresetEditorsEvent *(Client)*

**When**: This event fires when modders want to register PresetEditor screen factories for world presets, specifically on the mod-specific event bus on the logical client side.

**Cancellable**: No

**Fields**:
```yaml
- name: editors
  type: Map<ResourceKey<WorldPreset>, PresetEditor>
  description: A map of world preset keys to their corresponding PresetEditor instances. Modders can use this to register or override editors for specific presets.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ResourceKey<WorldPreset> key, Preset,editor editor)
  description: Registers a PresetEditor for a given world preset key. If an editor already exists for the key, it will be overridden and a debug log entry will be created.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterPresetEditors(RegisterPresetEditorsEvent event) {
    event.register(ResourceKey.create(ResourceKey.create("minecraft:overworld"), "preset"), new CustomPresetEditor());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterPresetEditorsEvent.java`

### RegisterRangeSelectItemModelPropertyEvent *(Client)*

**When**: This event fires during the model registration process for range select item model properties, specifically when registering property codecs for custom range select item model properties.

**Cancellable**: No

**Fields**:
```yaml
- name: idMapper
  type: ExtraCodecs.LateBoundIdMapper<ResourceLocation, MapCodec<? extends RangeSelectItemModelProperty>>
  description: The id mapper used to register property codecs. Modders can use this to associate resource locations with their custom range select item model property codecs.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ResourceLocation location, MapCodec<? extends RangeSelectItemModelProperty> source)
  description: Registers a custom range select item model property codec with the specified resource location. This allows the property to be deserialized from JSON data.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterRangeSelectItemModelProperty(RegisterRangeSelectItemModelPropertyEvent event) {
    event.register(new ResourceLocation("mymod:my_property"), MyPropertyCodec.INSTANCE);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterRangeSelectItemModelPropertyEvent.java`

### RegisterRecipeBookSearchCategoriesEvent *(Client)*

**When**: This event fires when registering extended recipe book categories for search on the client side, allowing mods to define custom search categories for the recipe book.

**Cancellable**: No

**Fields**:
```yaml
- name: categories
  type: Map<ExtendedRecipeBookCategory, List<RecipeBookCategory>>
  description: A map of extended recipe book categories to their included recipe book categories. Modders use this to associate search categories with specific recipes.
```

**Methods**:
```yaml
- name: register
  signature: void register(ExtendedRecipeBookCategory searchCategory, RecipeBook... includedCategories)
  description: Registers a new search category with the specified included recipe categories. This is the primary method modders will use to define custom search categories.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterRecipeBookSearchCategories(RegisterRecipeBookSearchCategoriesEvent event) {
    event.register(ExtendedRecipeBookCategory.CRAFTING, RecipeBookCategory.SHAPELESS, RecipeBookCategory.SHAPED);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterRecipeBookSearchCategoriesEvent.java`

### RegisterRenderBuffersEvent *(Client)*

**When**: This event fires after the default Minecraft render buffers have been registered, allowing mods to register custom render buffers for specific render types.

**Cancellable**: No

**Fields**:
```yaml
- name: renderBuffers
  type: SequencedMap<RenderType, ByteBufferBuilder>
  description: A map of render types to their corresponding ByteBufferBuilder instances, which mods can modify to register custom render buffers.
```

**Methods**:
```yaml
- name: registerRenderBuffer
  signature: public void registerRenderBuffer(RenderType renderType)
  description: Registers a default render buffer with buffer size specified in the render type.
- name: registerRenderBuffer
  signature: public void registerRenderBuffer(RenderType renderType, ByteBufferBuilder renderBuffer)
  description: Registers a render buffer for the specified render type, allowing modders to specify a custom ByteBufferBuilder.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.RegisterRenderBuffersEvent;
import net.minecraft.client.renderer.RenderType;
import com.mojang.blaze3d.vertex.ByteBufferBuilder;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterRenderBuffers(RegisterRenderBuffersEvent event) {
        // Register a custom render buffer for a specific render type
        event.registerRenderBuffer(RenderType.solid(), new ByteBufferBuilder(1024));
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterRenderBuffersEvent.java`

### RegisterRenderPipelinesEvent *(Client)*

**When**: Fires after the default Minecraft pipelines have been registered, allowing mods to register custom RenderPipeline instances.

**Cancellable**: No

**Fields**:
```yaml
- name: registrar
  type: Consumer<RenderPipeline>
  description: A consumer used to register custom RenderPipeline instances with the game.
```

**Methods**:
```yaml
- name: registerPipeline
  signature: public void registerPipeline(RenderPipeline pipeline)
  description: Registers a RenderPipeline instance with the game using the internal registrar.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterRenderPipelines(RegisterRenderPipelinesEvent event) {
    event.registerPipeline(new CustomRenderPipeline());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterRenderPipelinesEvent.java`

### RegisterRenderStateModifiersEvent *(Client)*

**When**: This event fires during the client initialization phase, specifically when registering render state modifiers for various render state objects. It is fired on the mod-specific event bus and only on the logical client side.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: registerEntityModifier
  signature: <E extends Entity, S extends EntityRenderState> void registerEntityModifier(TypeToken<? extends EntityRenderer<? extends E, ? extends S>> baseRenderer, BiConsumer<E, S> modifier)
  description: Registers a render state modifier for EntityRenderState objects. This modifier is applied to all subclasses of the specified renderer class. The modifier function allows adding custom data to the EntityRenderState.
- name: registerEntityModifier
  signature: <E extends Entity, S extends EntityRenderState> void registerEntityModifier(Class<? extends EntityRenderer<? extends E, ? extends S>> baseRenderer, BiConsumer<E, S> modifier)
  description: A convenience method for registering a render state modifier for EntityRenderState objects when generics are not present. It works similarly to the TypeToken version but uses a Class object for the renderer.
- name: registerMapModifier
  signature: void registerMapModifier(BiConsumer<MapItemSavedData, MapRenderState> modifier)
  description: Registers a render state modifier for MapRenderState objects. This modifier is applied after the texture is set and before decorations are added. It allows adding custom data to the MapRenderState.
- name: registerMapDecorationModifier
  signature: void registerMapDecorationModifier(ResourceKey<MapDecorationType> mapDecorationTypeKey, MapDecorationRenderStateModifier modifier)
  description: Registers a render state modifier for MapRenderState.MapDecorationRenderState objects. This modifier is applied after vanilla map decoration data has been set. It allows adding custom data to the map decoration.
```

**Example**:
```java
@Mod("modid")
public class ModInit {
    @SubscribeEvent
    public void onRegisterRenderStateModifiers(RegisterRenderStateModifiersEvent event) {
        // Register an entity modifier for PlayerRenderer
        event.registerEntityModifier(PlayerRenderer.class, (entity, renderState) -> {
            renderState.setRenderData(ContextKey.of("custom_data", String.class), "example_value");
        });

        // Register a map modifier
        event.registerMapModifier((mapData, renderState) -> {
            renderState.setRenderData(ContextKey.of("map_custom_data", String.class), "map_example_value");
        });
    }
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/renderstate/RegisterRenderStateModifiersEvent.java`

### RegisterSelectItemModelPropertyEvent *(Client)*

**When**: This event fires during the model registration process for item model property selectors, specifically when registering custom selector types.

**Cancellable**: No

**Fields**:
```yaml
- name: idMapper
  type: ExtraCodecs.LateBoundIdMapper<ResourceLocation, SelectItemModelProperty.Type<?, ?>>
  description: The mapper used to register custom selector types by location.
```

**Methods**:
```yaml
- name: register
  signature: void register(ResourceLocation location, SelectItemModelProperty.Type<?, ?> source)
  description: Registers a custom selector type with the specified location and source.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterSelectItemModelProperty(RegisterSelectItemModelPropertyEvent event) {
    event.register(new ResourceLocation("mymod:my_selector"), new MySelectorType<>());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterSelectItemModelPropertyEvent.java`

### RegisterSpecialBlockModelRendererEvent *(Client)*

**When**: This event fires during model loading on the worker thread, specifically when special block model renderers are created.

**Cancellable**: No

**Fields**:
```yaml
- name: renderers
  type: Map<Block, SpecialModelRenderer.Unbaked>
  description: A map of blocks to their corresponding unbaked special model renderers. Modders can register custom renderers for specific blocks using this map.
```

**Methods**:
```yaml
- name: register
  signature: void register(Block block, SpecialModelRenderer.Unbaked unbakedRenderer)
  description: Registers a custom special block model renderer for a specific block. If a renderer already exists for the block, it throws an IllegalStateException.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterSpecialBlockModelRenderer(RegisterSpecialBlockModelRendererEvent event) {
    event.register(MyBlock.INSTANCE, new MySpecialModelRenderer());
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterSpecialBlockModelRendererEvent.java`

### RegisterSpecialModelRendererEvent *(Client)*

**When**: This event fires during the model registration process for special item model renderers.

**Cancellable**: No

**Fields**:
```yaml
- name: idMapper
  type: ExtraCodecs.LateBoundIdMapper<ResourceLocation, MapCodec<? extends SpecialModelRenderer.Unbaked>>
  description: The id mapper used to register custom special item model renderer codecs.
```

**Methods**:
```yaml
- name: register
  signature: void register(ResourceLocation location, MapCodec<? extends SpecialModelRenderer.Unbaked> source)
  description: Registers a custom special item model renderer codec with the provided location and source.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterSpecialModelRenderer(RegisterSpecialModelRendererEvent event) {
    event.register(new ResourceLocation("modid", "custom_renderer"), SpecialModelRenderer.CODEC);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterSpecialModelRendererEvent.java`

### RegisterSpriteDefaultMetadataSectionTypesEvent *(Client)*

**When**: This event fires once on startup, before the initial resource reload, on the logical client side.

**Cancellable**: No

**Fields**:
```yaml
- name: defaultTypes
  type: Set<MetadataSectionType<?>>
  description: A set of metadata section types that are registered by default for sprite loading. Modders can add their own types to this set.
```

**Methods**:
```yaml
- name: register
  signature: public void register(MetadataSection, Type<?> sectionType)
  description: Adds a specified metadata section type to the default types set, allowing it to be used during sprite loading.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterSpriteDefaultMetadataSectionTypes(RegisterSpriteDefaultMetadataSectionTypesEvent event) {
    event.register(YourMetadataSectionType.INSTANCE);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterSpriteDefaultMetadataSectionTypesEvent.java`

### RegisterSpriteSourcesEvent *(Client)*

**When**: Fires once during the construction of the Minecraft instance or before datagen when client datagen is enabled

**Cancellable**: No

**Fields**:
```yaml
- name: idMapper
  type: ExtraCodecs.LateBoundIdMapper<ResourceLocation, MapCodec<? extends SpriteSource>>
  description: The mapper used to register sprite source codecs. Modders can use this to register their own sprite source codecs.
```

**Methods**:
```yaml
- name: register
  signature: void register(ResourceLocation id, MapCodec<? extends SpriteSource> codec)
  description: Registers a new sprite source codec with the given ID and codec. This is the primary method modders will use to register their own sprite sources.
```

**Example**:
```java
@SubscribeEvent
public static void onRegisterSpriteSources(RegisterSpriteSourcesEvent event) {
    event.register(new ResourceLocation("mymod:sprite_source"), MySpriteSource.CODEC);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RegisterSpriteSourcesEvent.java`

### RenderArmEvent *(Client)*

**When**: Fired before the player's arm is rendered in first person, allowing modders to replace or modify the arm rendering.

**Cancellable**: Yes

**Fields**:
```yaml
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering operations
- name: multiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers for the current render
- name: packedLight
  type: int
  description: The packed light value containing both sky and block light information
- name: player
  type: AbstractClientPlayer
  description: The client player whose arm is being rendered
- name: arm
  type: HumanoidArm
  description: The arm (left or right) being rendered
```

**Methods**:
```yaml
- name: getArm
  signature: public HumanoidArm getArm()
  description: Returns the arm (left or right) being rendered
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering operations
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the source of rendering buffers for the current render
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the packed light value containing both sky and block light information
- name: getPlayer
  signature: public AbstractClientPlayer getPlayer()
  description: Returns the client player whose arm is being rendered
```

**Example**:
```java
@SubscribeEvent
public void onRenderArm(RenderArmEvent event) {
    if (event.isCanceled()) return;
    // Modify rendering parameters or replace arm rendering
    // Example: Change light value
    event.setCanceled(true); // Cancel rendering to show no arm
    // Or modify pose stack/multiBufferSource for custom rendering
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderArmEvent.java`

### RenderBlockScreenEffectEvent *(Client)*

**When**: Fired before a block texture overlay is rendered on the player's view, specifically when the player is burning, suffocating, or underwater.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: Player
  description: The player entity that the overlay effect is being applied to.
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering the overlay effect.
- name: overlayType
  type: OverlayType
  description: The type of overlay being rendered (FIRE, BLOCK, or WATER).
- name: blockState
  type: BlockState
  description: The block state that the overlay is derived from.
- name: blockPos
  type: BlockPos
  description: The position in the world where the block is located.
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player entity that the overlay effect is being applied to.
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering the overlay effect.
- name: getOverlayType
  signature: public OverlayType getOverlayType()
  description: Returns the type of overlay being rendered (FIRE, BLOCK, or WATER).
- name: getBlockState
  signature: public BlockState getBlockState()
  description: Returns the block state that the overlay is derived from.
- name: getBlockPos
  signature: public BlockPos getBlockPos()
  description: Returns the position in the world where the block is located.
```

**Example**:
```java
@SubscribeEvent
public void onRenderBlockScreenEffect(RenderBlockScreenEffectEvent event) {
    if (event.getOverlayType() == RenderBlockScreenEffectEvent.OverlayType.FIRE) {
        // Modify fire overlay effect
        event.setCanceled(true); // Cancel rendering for fire effect
    }
    // Access other fields like event.getPlayer(), event.getPoseStack(), etc.
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderBlockScreenEffectEvent.java`

### RenderHandEvent *(Client)*

**When**: Fired before a hand is rendered in the first person view

**Cancellable**: Yes

**Fields**:
```yaml
- name: hand
  type: InteractionHand
  description: The hand being rendered (LEFT or RIGHT)
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering
- name: multiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers
- name: packedLight
  type: int
  description: The amount of packed (sky and block) light for rendering
- name: partialTick
  type: float
  description: The partial tick for interpolation
- name: interpolatedPitch
  type: float
  description: The interpolated pitch of the player entity
- name: swingProgress
  type: float
  description: The swing progress of the hand being rendered
- name: equipProgress
  type: float
  description: The progress of the equip animation, from 0.0 to 1.0
- name: stack
  type: ItemStack
  description: The item stack to be rendered
```

**Methods**:
```yaml
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand being rendered
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the source of rendering buffers
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the amount of packed (sky and block) light for rendering
- name: getPartialTick
  signature: public float getPartialTick()
  description: Returns the partial tick for interpolation
- name: getInterpolatedPitch
  signature: public float getInterpolatedPitch()
  description: Returns the interpolated pitch of the player entity
- name: getSwingProgress
  signature: public float getSwingProgress()
  description: Returns the swing progress of the hand being rendered
- name: getEquipProgress
  signature: public float getEquipProgress()
  description: Returns the progress of the equip animation, from 0.0 to 1.0
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the item stack to be rendered
```

**Example**:
```java
@SubscribeEvent
public void onRenderHand(RenderHandEvent event) {
    if (event.isCanceled()) return;
    // Modify the item stack being rendered
    event.getItemStack().setCount(1);
    // Modify the swing progress
    event.setSwingProgress(1.0f);
    // Modify the equip progress
    event.setEquipProgress(0.5f);
    // Cancel rendering
    // event.setCanceled(true);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderHandEvent.java`

### RenderInventoryMobEffects *(Client)*

**When**: 2023-10-15T12:34:17.000Z

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
If a mod wants to change the screen that is about to be opened, they can listen for the Opening event and call setNewScreen() with their desired screen.
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ScreenEvent.java`

### RenderItemInFrameEvent *(Client)*

**When**: Fired before an item stack is rendered in an item frame, allowing modders to modify rendering behavior or prevent rendering.

**Cancellable**: Yes

**Fields**:
```yaml
- name: itemStack
  type: ItemStackRenderState
  description: The item stack being rendered, providing access to its rendering state.
- name: frameRenderState
  type: ItemFrameRenderState
  description: The item frame entity's rendering state, containing information about the frame itself.
- name: renderer
  type: ItemFrameRenderer
  description: The renderer responsible for rendering the item frame entity.
- name: poseStack
  type: PoseStack
  description: The pose stack used for rendering transformations.
- name: multiBufferSource
  type: MultiBufferSource
  description: The source of rendering buffers used during the rendering process.
- name: packedLight
  type: int
  description: The packed light value containing both sky and block light information for rendering.
```

**Methods**:
```yaml
- name: getItemStackRenderState
  signature: public ItemStackRenderState getItemStackRenderState()
  description: Returns the item stack's rendering state.
- name: getItemFrameRenderState
  signature: public ItemFrameRenderState getItemFrameRenderState()
  description: Returns the item frame entity's rendering state.
- name: getRenderer
  signature: public ItemFrameRenderer<?> getRenderer()
  description: Returns the renderer for the item frame entity.
- name: getPoseStack
  signature: public PoseStack getPoseStack()
  description: Returns the pose stack used for rendering transformations.
- name: getMultiBufferSource
  signature: public MultiBufferSource getMultiBufferSource()
  description: Returns the source of rendering buffers.
- name: getPackedLight
  signature: public int getPackedLight()
  description: Returns the packed light value for rendering.
```

**Example**:
```java
@SubscribeEvent
public void onRenderItemInFrame(RenderItemInFrameEvent event) {
    if (event.isCanceled()) return;
    // Modify rendering behavior here
    event.setCanceled(true); // Cancel rendering
}

// Or customize rendering using the event data:
@SubscribeEvent
public void onRenderItemInFrame(RenderItemInFrameEvent event) {
    // Access item stack state
    ItemStackRenderState itemStack = event.getItemStackRenderState();
    // Access frame state
    ItemFrameRenderState frameState = event.getItemFrameRenderState();
    // Access renderer
    ItemFrameRenderer<?> renderer = event.getRenderer();
    // Access pose stack
    PoseStack poseStack = event.getPoseStack();
    // Access buffer source
    MultiBufferSource bufferSource = event.getMultiBufferSource();
    // Access light value
    int light = event.getPackedLight();
    // Custom rendering logic here
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/RenderItemInFrameEvent.java`

### ScreenshotEvent *(Client)*

**When**: Fired when a screenshot is taken, but before it is written to disk.

**Cancellable**: Yes

**Fields**:
```yaml
- name: image
  type: NativeImage
  description: The in-memory image of the screenshot that will be saved.
- name: screenshotFile
  type: File
  description: The file where the screenshot will be saved to.
- name: resultMessage
  type: Component
  description: The custom cancellation message, or null if no custom message is set.
```

**Methods**:
```yaml
- name: getImage
  signature: public NativeImage getImage()
  description: Returns the in-memory image of the screenshot.
- name: getScreenshotFile
  signature: public File getScreenshotFile()
  description: Returns the file where the screenshot will be saved to.
- name: setScreenshotFile
  signature: public void setScreenshotFile(File screenshotFile)
  description: Sets the new file where the screenshot will be saved to.
- name: getResultMessage
  signature: public Component getResultMessage()
  description: Returns the custom cancellation message, or null if no custom message is set.
- name: setResultMessage
  signature: public void setResultMessage(@Nullable Component resultMessage)
  description: Sets the new custom cancellation message used to inform the player.
- name: getCancelMessage
  signature: public Component getCancelMessage()
  description: Returns the cancellation message to be used in informing the player, using the default if none is set.
```

**Example**:
```java
@SubscribeEvent
public void onScreenshot(ScreenshotEvent event) {
    // Modify the screenshot file location
    event.setScreenshotFile(new File("/custom/screenshots/" + event.getScreenshotFile().getName()));
    
    // Cancel the screenshot and set a custom message
    event.setCanceled(true);
    event.setResultMessage(Component.literal("Custom screenshot cancellation message"));
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ScreenshotEvent.java`

### SelectMusicEvent *(Client)*

**When**: Fires when the MusicManager checks what situational music should be used, before the music begins playing.

**Cancellable**: Yes

**Fields**:
```yaml
- name: music
  type: MusicInfo
  description: The MusicInfo object representing the music to be played, or null to cancel any currently playing music.
- name: originalMusic
  type: MusicInfo
  description: The original situational music that was selected before any modders modified it.
- name: playingMusic
  type: SoundInstance
  description: The current track that the MusicManager is playing, or null if there is none.
```

**Methods**:
```yaml
- name: getOriginalMusic
  signature: public MusicInfo getOriginalMusic()
  description: Returns the original situational music that was selected before any modders modified it.
- name: getPlayingMusic
  signature: public SoundInstance getPlayingMusic()
  description: Returns the current track that the MusicManager is playing, or null if there is none.
- name: getMusic
  signature: public MusicInfo getMusic()
  description: Returns the MusicInfo object representing the music to be played, or null if any currently playing music should be cancelled.
- name: setMusic
  signature: public void setMusic(@Nullable MusicInfo newMusic)
  description: Changes the situational music. If this is set to null, any currently playing music will be cancelled.
- name: overrideMusic
  signature: public void overrideMusic(@Nullable MusicInfo newMusic)
  description: Sets the music and cancels the event so that other listeners will not be invoked. Listeners using receiveCanceled() will still be able to override this.
```

**Example**:
```java
@SubscribeEvent
public void onSelectMusic(SelectMusicEvent event) {
    // Check if the original music is not null
    if (event.getOriginalMusic() != null) {
        // Set new music to play
        event.setMusic(event.getOriginalMusic().getMusic());
    } else {
        // Cancel current music
        event.setMusic(null);
    }
    // Optionally cancel the event
    event.setCanceled(true);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/SelectMusicEvent.java`

### TextureAtlasStitchedEvent *(Client)*

**When**: This event fires after a texture atlas is stitched together and all textures therein have been loaded.

**Cancellable**: No

**Fields**:
```yaml
- name: atlas
  type: TextureAtlas
  description: The texture atlas that has been stitched and loaded.
```

**Methods**:
```yaml
- name: getAtlas
  signature: public TextureAtlas getAtlas()
  description: Returns the texture atlas that has been stitched and loaded.
```

**Example**:
```java
@SubscribeEvent
public void onTextureAtlasStitched(TextureAtlasStitchedEvent event) {
    TextureAtlas atlas = event.getAtlas();
    // Perform actions with the atlas, such.g. register custom textures or modify atlas properties
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/TextureAtlasStitchedEvent.java`

### ToastAddEvent *(Client)*

**When**: When the client queues a Toast message to be shown onscreen, typically for actions like unlocking Advancements and Recipes.

**Cancellable**: Yes

**Fields**:
```yaml
- name: toast
  type: net.minecraft.client.gui.components.toasts.Toast
  description: The Toast object that is being queued for display. This represents the message content that will appear onscreen.
```

**Methods**:
```yaml
- name: getToast
  signature: public Toast getToast()
  description: Returns the Toast object that is being queued for display. This allows modders to access and potentially modify the toast's properties.
```

**Example**:
```java
@SubscribeEvent
public void onToastAdd(ToastAddEvent event) {
    // Check if the event is cancelled
    if (event.isCanceled()) {
        return;
    }

    // Access the toast being added
    Toast toast = event.getToast();
    
    // Example: Modify toast properties (if possible)
    // toast.set...(); // Note: Actual methods may vary based on Toast implementation
    
    // Optionally cancel the event to prevent the toast from being shown
    // event.setCanceled(true);
}
```

*Source*: `src/client/java/net/neoforged/neoforge/client/event/ToastAddEvent.java`


## Common

### RegisterTicketControllersEvent *(Common)*

**When**: This event is fired during the mod initialization phase to register chunk ticket controllers.

**Cancellable**: No

**Fields**:
```yaml
- name: registrar
  type: Consumer<TicketController>
  description: A consumer used to register ticket controllers with the system.
```

**Methods**:
```yaml
- name: register
  signature: public void register(TicketController controller)
  description: Registers a ticket controller with the system. Throws an exception if a controller with the same ID is already registered.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterTicketControllers(RegisterTicketControllersEvent event) {
        event.register(new TicketController("example_id", ...));
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/common/world/chunk/RegisterTicketControllersEvent.java`


## Entity

### XpOrbTargetingEvent *(Common)*

**When**: This event fires once per second when an XP Orb finds itself without a player to move toward.

**Cancellable**: Yes

**Fields**:
```yaml
- name: xpOrb
  type: ExperienceOrb
  description: The XP Orb that is searching for a player to follow.
- name: scanDistance
  type: double
  description: The maximum distance to scan for players. This is 8 for vanilla orbs.
- name: followingPlayer
  type: Optional<Player>
  description: The player that the XP Orb is following, or null if not set.
```

**Methods**:
```yaml
- name: getFollowingPlayer
  signature: public @Nullable Player getFollowingPlayer()
  description: Returns the player that the XP Orb is following, or null if not set.
- name: setFollowingPlayer
  signature: public void setFollowingPlayer(@Nullable Player newFollowingPlayer)
  description: Sets a new player for the XP Orb to follow. Can be null to cancel the default search.
- name: getXpOrb
  signature: public ExperienceOrb getXpOrb()
  description: Returns the XP Orb that is searching for a player to follow.
- name: getScanDistance
  signature: public double getScanDistance()
  description: Returns the maximum distance to scan for players.
```

**Example**:
```java
@SubscribeEvent
public void onXpOrbTargeting(XpOrbTargetingEvent event) {
    // Check if the orb is already following a player
    if (event.getFollowingPlayer() != null) return;

    // Find the nearest player within scan distance
    Player nearestPlayer = event.getXpOrb().level().getNearestPlayer(event.getXpOrb(), event.getScanDistance());

    // Set the player to follow
    event.setFollowingPlayer(nearestPlayer);

    // Optionally cancel the default behavior by setting to null
    // event.setFollowingPlayer(null);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/entity/XpOrbTargetingEvent.java`


## Event

### AddAttributeTooltipsEvent *(Common)*

**When**: This event fires after attribute tooltip lines have been added to an item stack's tooltip in AttributeUtil.addAttributeTooltips().

**Cancellable**: No

**Fields**:
```yaml
- name: stack
  type: ItemStack
  description: The item stack that has the tooltip being built.
- name: tooltip
  type: Consumer<Component>
  description: A consumer that can be used to add tooltip lines to the tooltip.
- name: ctx
  type: AttributeTooltipContext
  description: The context object containing information about the tooltip display.
```

**Methods**:
```yaml
- name: getContext
  signature: public AttributeTooltipContext getContext()
  description: Returns the current tooltip context.
- name: getStack
  signature: public ItemStack getStack()
  description: Returns the item stack with the tooltip.
- name: addTooltipLines
  signature: public void addTooltipLines(Component... comps)
  description: Adds one or more Component objects to the tooltip.
- name: shouldShow
  signature: public boolean shouldShow()
  description: Checks if the attribute tooltips should be shown on the current item stack.
```

**Example**:
```java
@SubscribeEvent
public void onAddAttributeTooltips(AddAttributeTooltipsEvent event) {
    // Add a custom tooltip line
    event.addTooltipLines(Component.translatable("tooltip.my_mod.custom_line"));
    
    // Check if tooltips should be shown
    if (event.shouldShow()) {
        // Do something with the tooltip context
        System.out.println("Tooltip context: " + event.getContext());
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/AddAttributeTooltipsEvent.java`

### AddPackFindersEvent *(Common)*

**When**: When a PackRepository is created, allowing mods to add new pack finders.

**Cancellable**: No

**Fields**:
```yaml
- name: packType
  type: PackType
  description: The type of pack repository being constructed (e.g., RESOURCE_PACK or DATA_PACK).
- name: sources
  type: Consumer<RepositorySource>
  description: A consumer that allows adding repository sources to the pack repository.
- name: trusted
  type: boolean
  description: Whether the pack repository being assembled is trusted (used for client-side known packs).
```

**Methods**:
```yaml
- name: addRepositorySource
  signature: public void addRepositorySource(RepositorySource source)
  description: Adds a new repository source to the list of pack finders. Sources are processed in the order they are added.
- name: getPackType
  signature: public PackType getPackType()
  description: Returns the PackType of the pack repository being constructed.
- name: addPackFinders
  signature: public void addPackFinders(ResourceLocation packLocation, PackType packType, Component packNameDisplay, PackSource packSource, boolean alwaysActive, Pack.Position packPosition)
  description: Registers a pack found under the resources/ folder. This method handles creating the pack and adding it to the repository.
- name: isTrusted
  signature: public boolean isTrusted()
  description: Returns whether the pack repository being assembled is trusted for client-side known packs.
```

**Example**:
```java
@SubscribeEvent
public void onAddPackFinders(AddPackFindersEvent event) {
    // Add a custom repository source
    event.addRepositorySource((source) -> {
        // Custom source logic here
    });

    // Register a pack from resources
    event.addPackFinders(
        new ResourceLocation("mymod", "example_pack"),
        PackType.DATA_PACK,
        Component.literal("Example Pack"),
        PackSource.BUILTIN,
        true,
        Pack.Position.TOP
    );
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/AddPackFindersEvent.java`

### AlterGroundEvent *(Common)*

**When**: This event fires when the AlterGroundDecorator's placeBlockAt method attempts to alter a ground block during feature generation, such as converting grass blocks into podzol for large spruce trees.

**Cancellable**: No

**Fields**:
```yaml
- name: ctx
  type: TreeDecorator.Context
  description: The tree decoration context for the current alteration, providing access to tree generation context information.
- name: positions
  type: List<BlockPos>
  description: The list of positions that will be used for alteration placement. This list is immutable.
- name: provider
  type: StateProvider
  description: The block state provider that will be used by the AlterGroundDecorator to determine which block state to place.
```

**Methods**:
```yaml
- name: getContext
  signature: public TreeDecorator.Context getContext()
  description: Returns the tree decoration context for the current alteration.
- name: getPositions
  signature: public List<BlockPos> getPositions()
  description: Returns the list of positions that will be used for alteration placement. This list is immutable.
- name: getStateProvider
  signature: public StateProvider getStateProvider()
  description: Returns the current block state provider that will be used by the AlterGroundDecorator.
- name: setStateProvider
  signature: public void setStateProvider(StateProvider provider)
  description: Sets a new block state provider that will be used by the AlterGroundDecorator. This allows mods to modify the block state placement logic.
```

**Example**:
```java
@SubscribeEvent
public void onAlterGround(AlterGroundEvent event) {
    // Modify the block state provider to replace podzol with redstone block
    event.setStateProvider((random, pos) -> {
        BlockState state = event.getStateProvider().getState(random, pos);
        return state.is(Blocks.PODZOL) ? Blocks.REDSTONE_BLOCK.defaultBlockState() : state;
    });
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/AlterGroundEvent.java`

### AnimalTameEvent *(Common)*

**When**: This event fires when an Animal is tamed, specifically when the taming process is initiated by a Player.

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
@SubscribeEvent
public void onAnimalTame(AnimalTameEvent event) {
    Player tamer = event.getTamer();
    Animal animal = event.getAnimal();
    // Check if taming should be canceled
    if (someCondition) {
        event.setCanceled(true);
    }
    // Handle taming logic here
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/AnimalTameEvent.java`

### AnvilUpdateEvent *(Common)*

**When**: This event fires when an anvil's left input is not empty and any of the inputs (left, right, or name) are changed, after the vanilla result has been computed.

**Cancellable**: Yes

**Fields**:
```yaml
- name: left
  type: ItemStack
  description: The item stack in the left input slot of the anvil.
- name: right
  type: ItemStack
  description: The item stack in the right input slot of the anvil.
- name: name
  type: String
  description: The custom name provided by the client for the output item, may be null.
- name: vanillaResult
  type: VanillaResult
  description: A record containing the vanilla result of the anvil operation.
- name: player
  type: Player
  description: The player using the anvil container.
- name: output
  type: ItemStack
  description: The output item stack that will be set in the anvil's output slot.
- name: xpCost
  type: int
  description: The experience cost of the anvil operation.
- name: materialCost
  type: int
  description: The material cost (how many units of the right input stack are consumed).
```

**Methods**:
```yaml
- name: getLeft
  signature: public ItemStack getLeft()
  description: Returns a copy of the item stack in the left input slot.
- name: getRight
  signature: public ItemStack getRight()
  description: Returns a copy of the item stack in the right input slot.
- name: getName
  signature: public String getName()
  description: Returns the custom name provided by the client for the output item, may be null.
- name: getVanillaResult
  signature: public VanillaResult getVanillaResult()
  description: Returns the vanilla result of the anvil operation as a VanillaResult record.
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player using the anvil container.
- name: getOutput
  signature: public ItemStack getOutput()
  description: Returns the output item stack that will be set in the anvil's output slot.
- name: setOutput
  signature: public void setOutput(ItemStack output)
  description: Sets the output item stack for the anvil operation.
- name: getXpCost
  signature: public int getXpCost()
  description: Returns the experience cost of the anvil operation.
- name: setXpCost
  signature: public void setXpCost(int xpCost)
  description: Sets the experience cost of the anvil operation.
- name: getMaterialCost
  signature: public int getMaterialCost()
  description: Returns the material cost (how many units of the right input stack are consumed).
- name: setMaterialCost
  signature: public void setMaterialCost(int materialCost)
  description: Sets the material cost (how many units of the right input stack are consumed).
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Cancels the event, preventing any further handling and ignoring the output settings.
```

**Example**:
```java
@SubscribeEvent
public void onAnvilUpdate(AnvilUpdateEvent event) {
    Player player = event.getPlayer();
    ItemStack left = event.getLeft();
    ItemStack right = event.getRight();
    String name = event.getName();
    VanillaResult vanillaResult = event.getVanillaResult();
    
    // Modify the output stack
    ItemStack newOutput = left.copy();
    newOutput.setCount(1);
    event.setOutput(newOutput);
    
    // Change the experience cost
    event.setXpCost(5);
    
    // Change the material cost
    event.setMaterialCost(2);
    
    // Cancel the event to prevent vanilla processing
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/AnvilUpdateEvent.java`

### ArmorHurtEvent *(Common)*

**When**: The ArmorHurtEvent is fired on both the client and server sides when a LivingEntity's armor takes damage during the doHurtEquipment method.

**Cancellable**: Yes

**Fields**:
```yaml
- name: armorEntries
  type: EnumMap<EquipmentSlot, ArmorEntry>
  description: A map of equipment slots to ArmorEntry objects containing the armor item stack and damage values.
```

**Methods**:
```yaml
- name: getArmorItemStack
  signature: public ItemStack getArmorItemStack(EquipmentSlot slot)
  description: Returns the ItemStack for the given equipment slot. Hand slots will return an empty ItemStack.
- name: getOriginalDamage
  signature: public Float getOriginalDamage(EquipmentSlot slot)
  description: Returns the original damage value before any modifications from event handlers.
- name: getNewDamage
  signature: public Float getNewDamage(EquipmentSlot slot)
  description: Returns the modified damage value that will be applied to the armor if the event is not cancelled.
- name: setNewDamage
  signature: public void setNewDamage(EquipmentSlot slot, float damage)
  description: Sets the new damage value for the specified equipment slot. Values below zero will be clamped to zero.
- name: getArmorMap
  signature: public Map<EquipmentSlot, ArmorEntry> getArmorMap()
  description: Returns the full map of equipment slots to ArmorEntry objects containing armor item stacks and damage values.
```

**Example**:
```java
@SubscribeEvent
public void onArmorHurt(ArmorHurtEvent event) {
    // Example: Modify damage to chest armor
    event.setNewDamage(EquipmentSlot.CHEST, 5.0f);
    
    // Example: Check original damage
    float originalDamage = event.getOriginalDamage(EquipmentSlot.HEAD);
    
    // Example: Get armor item stack
    ItemStack headArmor = event.getArmorItemStack(EquipmentSlot.HEAD);
    
    // Example: Cancel the event
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/ArmorHurtEvent.java`

### ArrowLooseEvent *(Common)*

**When**: The ArrowLooseEvent is fired when a player stops using a bow, specifically in the BowItem#releaseUsing method.

**Cancellable**: Yes

**Fields**:
```yaml
- name: bow
  type: ItemStack
  description: The bow item stack that was used to fire the arrow.
- name: level
  type: Level
  description: The level (world) where the bow was used.
- name: hasAmmo
  type: boolean
  description: Whether the player had ammunition available to fire an arrow.
- name: charge
  type: int
  description: The charge level of the bow when the player stopped using it.
```

**Methods**:
```yaml
- name: getBow
  signature: public ItemStack getBow()
  description: Returns the bow item stack that was used to fire the arrow.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) where the bow was used.
- name: hasAmmo
  signature: public boolean hasAmmo()
  description: Returns whether the player had ammunition available to fire an arrow.
- name: getCharge
  signature: public int getCharge()
  description: Returns the charge level of the bow when the player stopped using it.
- name: setCharge
  signature: public void setCharge(int charge)
  description: Sets the charge level of the bow, which can affect the arrow's behavior.
```

**Example**:
```java
@SubscribeEvent
public void onArrowLoose(ArrowLooseEvent event) {
    // Check if the event is cancellable
    if (event.isCanceled()) {
        return;
    }

    // Modify the charge level
    event.setCharge(100);

    // Check if the player has ammo
    if (event.hasAmmo()) {
        // Do something with the bow
        ItemStack bow = event.getBow();
        Level level = event.getLevel();
        // Additional logic here
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/ArrowLooseEvent.java`

### ArrowNockEvent *(Common)*

**When**: The ArrowNockEvent is fired when a player begins using a bow, specifically in the BowItem#use method.

**Cancellable**: Yes

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
  description: The level (world) where the player is using the bow
- name: hasAmmo
  type: boolean
  description: Whether the bow has available ammunition
```

**Methods**:
```yaml
- name: getBow
  signature: public ItemStack getBow()
  description: Returns the bow item stack being used by the player
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) where the player is using the bow
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand the player is using to hold the bow
- name: hasAmmo
  signature: public boolean hasAmmo()
  description: Returns whether the bow has available ammunition
- name: getAction
  signature: public InteractionResult getAction()
  description: Returns the interaction result for the bow use action
- name: setAction
  signature: public void setAction(InteractionResult action)
  description: Sets the interaction result for the bow use action, which can be used to cancel the action
```

**Example**:
```java
@SubscribeEvent
public void onArrowNock(ArrowNockEvent event) {
    // Check if the bow has ammo
    if (!event.hasAmmo()) {
        // Cancel the action and return FAIL result
        event.setAction(InteractionResult.FAIL);
        return;
    }

    // Modify the action result if needed
    event.setAction(InteractionResult.SUCCESS);
}

// Register the event handler
@Mod("mymod")
public class MyMod {
    public MyMod() {
        NeoForge.EVENT_BUS.register(this);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/ArrowNockEvent.java`

### AttackEntityEvent *(Common)*

**When**: When a player attacks an Entity using Player#attack(Entity)

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
@SubscribeEvent
public static void onAttack(AttackEntityEvent event) {
    if (event.isCanceled()) return;
    Entity target = event.getTarget();
    // Perform custom logic here, such.g. applying damage modifiers
    // or changing attack behavior
    // To cancel the attack: event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/AttackEntityEvent.java`

### BabyEntitySpawnEvent *(Common)*

**When**: The BabyEntitySpawnEvent fires just before a baby entity is about to be spawned, specifically during the breeding process of animals and foxes.

**Cancellable**: Yes

**Fields**:
```yaml
- name: parentA
  type: Mob
  description: The initiating parent entity involved in the breeding process.
- name: parentB
  type: Mob
  description: The secondary parent entity involved in the breeding process.
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
  description: Returns the initiating parent entity involved in the breeding process.
- name: getParentB
  signature: public Mob getParentB()
  description: Returns the secondary parent entity involved in the breeding process.
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
@SubscribeEvent
public void onBabySpawn(BabyEntitySpawnEvent event) {
    // Check if the event is cancellable
    if (event.isCanceled()) {
        return;
    }

    // Modify the child entity
    event.setChild(new AgeableMob(...));

    // Access parent entities
    Mob parentA = event.getParentA();
    Mob parentB = event.getParentB();

    // Check if the breeding was caused by a player
    Player player = event.getCausedByPlayer();
    if (player != null) {
        // Handle player-related logic
    }

    // Optionally cancel the event
    // event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/BabyEntitySpawnEvent.java`

### BlockDropsEvent *(Common)*

**When**: Fires when a block is broken and the drops have been determined, but before they have been added to the world.

**Cancellable**: Yes

**Fields**:
```yaml
- name: blockEntity
  type: BlockEntity
  description: The block entity of the broken block, if available
- name: drops
  type: List<ItemEntity>
  description: A mutable list of item entities that will be dropped by this block
- name: breaker
  type: Entity
  description: The entity that broke the block, or null if unknown
- name: tool
  type: ItemStack
  description: The tool used to break the block; may be empty
- name: experience
  type: int
  description: The amount of experience points that will be dropped by the block
```

**Methods**:
```yaml
- name: getDrops
  signature: public List<ItemEntity> getDrops()
  description: Returns a mutable list of item entities that will be dropped by this block
- name: getBlockEntity
  signature: public BlockEntity getBlockEntity()
  description: Returns the block entity from the current position, if available
- name: getBreaker
  signature: public Entity getBreaker()
  description: Returns the entity that broke the block, or null if unknown
- name: getTool
  signature: public ItemStack getTool()
  description: Returns the tool used to break the block; may be empty
- name: getDroppedExperience
  signature: public int getDroppedExperience()
  description: Returns the amount of experience points that will be dropped by the block
- name: setDroppedExperience
  signature: public void setDroppedExperience(int experience)
  description: Sets the amount of experience points that will be dropped by the block. This is the true value, after enchantments have been applied.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Cancels this event, preventing any drops from being spawned and preventing Block#spawnAfterBreak from being called.
```

**Example**:
```java
@SubscribeEvent
public void onBlockDrops(BlockDropsEvent event) {
    // Modify drops
    event.getDrops().add(new ItemEntity(event.getLevel(), event.getPos().getX(), event.getPos().getY(), event.getPos().getZ(), new ItemStack(Items.DIAMOND)));
    
    // Modify experience
    event.setDroppedExperience(5);
    
    // Cancel drops
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockDropsEvent.java`

### BlockEntityTypeAddBlocksEvent *(Common)*

**When**: This event fires when modders want to add new blocks to a BlockEntityType's validBlocks list, allowing safe injection of blocks into block entity type definitions.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: modify
  signature: public void modify(BlockEntityType<?> blockEntityType, Block... blocksToAdd)
  description: Adds the specified blocks to the given BlockEntityType's validBlocks list, ensuring they share the common superclass of existing valid blocks.
- name: modify
  signature: public void modify(ResourceKey<BlockEntityType<?>> blockEntityTypeKey, Block... blocksToAdd)
  description: Adds the specified blocks to the BlockEntityType associated with the given key, using the same validation as the single BlockEntityType version.
- name: modify
  signature: public void modify(BiPredicate<ResourceKey<BlockEntityType<?>>, BlockEntityType<?>> blockEntityTypeToMatch, Block... blocksToAdd)
  description: Adds the specified blocks to all BlockEntityTypes that match the given predicate, providing flexible targeting of block entity types.
- name: addValidBlock
  signature: private void addValidBlock(Block block, @Nullable Class<?> baseClass, Set<Block> currentValidBlocks)
  description: Helper method that adds a block to the valid blocks set if it derives from the base class, throwing an exception if not.
- name: getCommonSuperClassForExistingValidBlocks
  signature: private Class<?> getCommonSuperClassForExistingValidBlocks(Set<Block> validBlocks)
  description: Calculates the common superclass of all existing valid blocks in the BlockEntityType, used for validation when adding new blocks.
- name: findClosestCommonSuper
  signature: private static Class<?> findClosestCommonSuper(Class<?> superClass, Class<?> childClass)
  description: Finds the closest common superclass between two classes, used by getCommonSuperClassForExistingValidBlocks.
```

**Example**:
```java
@SubscribeEvent
public static void onBlockEntityValidBlocks(BlockEntityTypeAddBlocksEvent event) {
    event.modify(BlockEntityType.SIGN, MODDED_SIGN_BLOCK.get());
}

// Or for multiple block entity types:
@SubscribeEvent
public static void onBlockEntityValidBlocks(BlockEntityTypeAddBlocksEvent event) {
    event.modify((key, type) -> key.location().toString().contains("modid"), MODDED_SIGN_BLOCK.get());
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/BlockEntityTypeAddBlocksEvent.java`

### BlockGrowFeatureEvent *(Common)*

**When**: This event fires when a block (like a sapling) grows into a feature (like a tree), specifically during the growth process of blocks such as saplings, fungi, mushrooms, and azaleas.

**Cancellable**: Yes

**Fields**:
```yaml
- name: rand
  type: RandomSource
  description: The random source used to determine the growth outcome.
- name: pos
  type: BlockPos
  description: The position of the block attempting to grow.
- name: feature
  type: Holder<ConfiguredFeature<?, ?>>
  description: The feature that will be placed as a result of the growth, or null if none.
```

**Methods**:
```yaml
- name: getRandom
  signature: public RandomSource getRandom()
  description: Returns the random source used for determining the growth outcome.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the block attempting to grow.
- name: getFeature
  signature: public Holder<ConfiguredFeature<?, ?>> getFeature()
  description: Returns the feature that will be placed, or null if none.
- name: setFeature
  signature: public void setFeature(@Nullable Holder<ConfiguredFeature<?, ?>> feature)
  description: Changes the feature to be placed. If null, the original block remains.
- name: setFeature
  signature: public void setFeature(ResourceKey<ConfiguredFeature<?, ?>> featureKey)
  description: Changes the feature to be placed using a resource key. If the key is invalid, null is set.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Cancels the event to prevent the feature from growing. The original block remains.
```

**Example**:
```java
@SubscribeEvent
public void onBlockGrow(BlockGrowFeatureEvent event) {
    if (event.getFeature() == null) {
        event.setFeature(RegistryKey.create(Registries.CONFIGURED_FEATURE, new ResourceLocation("modid", "custom_tree")));
    }
    // Cancel growth if certain conditions are met
    if (someCondition) {
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockGrowFeatureEvent.java`

### BlockToolModificationEvent *(Common)*

**When**: Fired when a block is right-clicked by a tool to change its state, such as when using an axe to strip, a shovel to flatten, or a hoe to till.

**Cancellable**: Yes

**Fields**:
```yaml
- name: context
  type: UseOnContext
  description: The context of the tool use, containing information about the player, block position, and item being used.
- name: itemAbility
  type: ItemAbility
  description: The specific ability being used by the tool (e.g., AXE_STRIP, SHOVEL_FLATTEN, HOE_TILL).
- name: simulate
  type: boolean
  description: Indicates whether the event is in simulation mode (true) or actual modification mode (false).
- name: state
  type: BlockState
  description: The final state the block will be transformed into after the tool use.
```

**Methods**:
```yaml
- name: getPlayer
  signature: Player getPlayer()
  description: Returns the player using the tool, or null if not applicable.
- name: getHeldItemStack
  signature: ItemStack getHeldItemStack()
  description: Returns the item stack being used by the player.
- name: getItemAbility
  signature: ItemAbility getItemAbility()
  description: Returns the specific ability being performed by the tool.
- name: isSimulated
  signature: boolean isSimulated()
  description: Returns true if the event is in simulation mode (no level modifications).
- name: getContext
  signature: UseOnContext getContext()
  description: Returns the UseOnContext object containing detailed information about the tool use.
- name: setFinalState
  signature: void setFinalState(@Nullable BlockState finalState)
  description: Sets the final state of the block after tool use.
- name: getFinalState
  signature: BlockState getFinalState()
  description: Returns the final state of the block after tool use, or the original state if not set.
```

**Example**:
```java
To prevent an axe from stripping a block, you could cancel the event in your mod's handler.
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockEvent.java`

### BonemealEvent *(Common)*

**When**: The BonemealEvent fires when a player attempts to use bone meal on a block, both on the client and server sides.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: Player
  description: The player who used the bone meal, if any.
- name: level
  type: Level
  description: The level (world) where the bone meal was applied.
- name: pos
  type: BlockPos
  description: The position of the block that received the bone meal.
- name: state
  type: BlockState
  description: The state of the block that received the bone meal.
- name: stack
  type: ItemStack
  description: The bone meal item stack used, which can be modified.
- name: isValidBonemealTarget
  type: boolean
  description: Whether the block is a valid target for bone meal, determined by BonemealableBlock.
- name: isSuccess
  type: boolean
  description: Whether the bone meal was considered successful, affecting hand swings and other effects.
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player who used the bone meal, if any.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) where the bone meal was applied.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the block that received the bone meal.
- name: getState
  signature: public BlockState getState()
  description: Returns the state of the block that received the bone meal.
- name: getStack
  signature: public ItemStack getStack()
  description: Returns the bone meal item stack used, which can be modified.
- name: isValidBonemealTarget
  signature: public boolean isValidBonemealTarget()
  description: Returns true if the block is a valid target for bone meal.
- name: setSuccessful
  signature: public void setSuccessful(boolean success)
  description: Cancels the event and changes the successful state, affecting hand swings and other effects.
- name: isSuccessful
  signature: public boolean isSuccessful()
  description: Returns if the event is successful, only relevant if the event is canceled.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Cancels the event, preventing vanilla handling from being applied.
```

**Example**:
```java
@SubscribeEvent
public void onBonemeal(BonemealEvent event) {
    Player player = event.getPlayer();
    Level level = event.getLevel();
    BlockPos pos = event.getPos();
    BlockState state = event.getState();
    ItemStack stack = event.getStack();
    
    // Check if the block is a valid target
    if (event.isValidBonemealTarget()) {
        // Custom logic here
        // ...
        
        // Set success and cancel the event
        event.setSuccessful(true);
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/BonemealEvent.java`

### BreakEvent *(Common)*

**When**: This event is fired on the server when a player attempts to break a block, upon receipt of a block break packet.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: Player
  description: The player who is attempting to break the block
- name: level
  type: LevelAccessor
  description: The level (world) where the block break is occurring
- name: pos
  type: BlockPos
  description: The position of the block being broken
- name: state
  type: BlockState
  description: The current state of the block being broken
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player who is attempting to break the block
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Cancelling this event will prevent the block from being broken, and notifies the client of the refusal.
- name: getLevel
  signature: public LevelAccessor getLevel()
  description: Returns the level (world) where the block break is occurring
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position of the block being broken
- name: getState
  signature: public BlockState getState()
  description: Returns the current state of the block being broken
```

**Example**:
```java
import net.neoforged.neoforge.event.level.BlockEvent;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.entity.player.Player;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBlockBreak(BlockEvent.BreakEvent event) {
        Player player = event.getPlayer();
        Level level = event.getLevel();
        BlockPos pos = event.getPos();
        BlockState state = event.getState();
        // Check if the player has a specific item
        if (player.getItemInHand(InteractionHand.MAIN_HAND).getItem() == Items.DIAMOND_PICKAXE) {
            // Prevent breaking of diamond ore
            if (state.getBlock() == Blocks.DIAMOND_ORE) {
                event.setCanceled(true);
            }
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockEvent.java`

### BreakSpeed *(Common)*

**When**: Player is cloned (e.g., respawn or dimension change)

**Cancellable**: false

**Fields**:
```yaml
- name: original
  type: Player
  description: The old EntityPlayer that this new entity is a clone of.
- name: wasDeath
  type: boolean
  description: True if this event was fired because the player died. False if it was fired because the entity switched dimensions.
```

**Methods**:
```yaml
- name: getOriginal
  signature: public Player getOriginal()
  description: The old EntityPlayer that this new entity is a clone of.
- name: isWasDeath
  signature: public boolean isWasDeath()
  description: True if this event was fired because the player died. False if it was fired because the entity switched dimensions.
```

**Example**:
```java
if (event instanceof CloneEvent) {
    Player original = event.getOriginal();
    boolean wasDeath = event.isWasDeath();
    // Handle clone event logic here
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerEvent.java`

### BuildCreativeModeTabContentsEvent *(Common)*

**When**: This event fires when the contents of a specific creative mode tab are being populated in the buildContents method of the CreativeModeTab class.

**Cancellable**: No

**Fields**:
```yaml
- name: tab
  type: CreativeModeTab
  description: The creative mode tab currently populating its contents
- name: tabKey
  type: ResourceKey<CreativeModeTab>
  description: The key of the creative mode tab currently populating its contents
- name: parameters
  type: CreativeModeTab.ItemDisplayParameters
  description: The parameters used for displaying items in the creative mode tab
- name: parentEntries
  type: InsertableLinkedOpenCustomHashSet<ItemStack>
  description: The set of parent tab entries that will be added to the Creative Menu
- name: searchEntries
  type: InsertableLinkedOpenCustomHashSet<ItemStack>
  description: The set of search tab entries that will be added to the Creative Menu
```

**Methods**:
```yaml
- name: getTab
  signature: public CreativeModeTab getTab()
  description: Returns the creative mode tab currently populating its contents
- name: getTabKey
  signature: public ResourceKey<CreativeModeTab> getTabKey()
  description: Returns the key of the creative mode tab currently populating its contents
- name: getFlags
  signature: public FeatureFlagSet getFlags()
  description: Returns the feature flags that are enabled for the current tab
- name: getParameters
  signature: public CreativeModeTab.ItemDisplayParameters getParameters()
  description: Returns the parameters used for displaying items in the creative mode tab
- name: hasPermissions
  signature: public boolean hasPermissions()
  description: Checks if the current tab has the necessary permissions
- name: getParentEntries
  signature: public ObjectSortedSet<ItemStack> getParentEntries()
  description: Returns the immutable ordered set of parent tab entries
- name: getSearchEntries
  signature: public ObjectSortedSet<ItemStack> getSearchEntries()
  description: Returns the immutable ordered set of search tab entries
- name: accept
  signature: public void accept(ItemStack newEntry, CreativeModeTab.TabVisibility visibility)
  description: Inserts the new stack at the end of the given tab
- name: insertAfter
  signature: public void insertAfter(ItemStack existingEntry, ItemStack newEntry, CreativeModeTab.TabVisibility visibility)
  description: Inserts the new entry after the specified existing entry
- name: insertBefore
  signature: public void insertBefore(ItemStack existingEntry, ItemStack newEntry, CreativeModeTab.TabVisibility visibility)
  description: Inserts the new entry before the specified existing entry
- name: insertFirst
  signature: public void insertFirst(ItemStack newEntry, CreativeModeTab.TabVisibility visibility)
  description: Inserts the new entry in the front of the tab's content
- name: remove
  signature: public void remove(ItemStack existingEntry, CreativeModeTab.TabVisibility visibility)
  description: Removes an entry from the tab's content
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onBuildCreativeModeTabContents(BuildCreativeModeTabContentsEvent event) {
        // Add a new item to the parent tab
        event.accept(new ItemStack(Items.EXAMPLE_ITEM), CreativeModeTab.TabVisibility.PARENT_TAB_ONLY);
        
        // Insert a new item after an existing one
        event.insertAfter(new ItemStack(Items.EXISTING_ITEM), new ItemStack(Items.NEW_ITEM), CreativeModeTab.TabVisibility.PARENT_TAB_ONLY);
        
        // Remove an existing item from the tab
        event.remove(new ItemStack(Items.EXISTING_ITEM), CreativeModeTab.TabVisibility.PARENT_TAB_ONLY);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/BuildCreativeModeTabContentsEvent.java`

### Change *(Common)*

**When**: When a Noteblock is changed, such as when its note is altered by another block or mod interaction.

**Cancellable**: Yes

**Fields**:
```yaml
- name: noteId
  type: int
  description: The internal note ID that represents both the note and octave information.
- name: world
  type: Level
  description: The Level object representing the world where the Noteblock is located.
- name: pos
  type: BlockPos
  description: The BlockPos representing the position of the Noteblock in the world.
- name: state
  type: BlockState
  description: The BlockState representing the current state of the Noteblock.
```

**Methods**:
```yaml
- name: getNote
  signature: public Note getNote()
  description: Returns the Note the Noteblock is tuned to.
- name: getOctave
  signature: public Octave getOctave()
  description: Returns the Octave of the note this Noteblock is tuned to.
- name: getVanillaNoteId
  signature: public int getVanillaNoteId()
  description: Returns the vanilla note ID, which contains information about both Note and Octave.
- name: setNote
  signature: public void setNote(Note note, Octave octave)
  description: Sets the Note and Octave for this event. If octave is Octave.HIGH, note may only be Note.F_SHARP.
- name: getOldNote
  signature: public Note getOldNote()
  description: Returns the old Note value before the change.
- name: getOldOctave
  signature: public Octave getOldOctave()
  description: Returns the old Octave value before the change.
```

**Example**:
```java
@SubscribeEvent
public void onNoteBlockChange(NoteBlockEvent.Change event) {
    // Get the old note and octave
    Note oldNote = event.getOldNote();
    Octave oldOctave = event.getOldOctave();

    // Modify the new note and octave
    event.setNote(Note.A, Octave.MID);

    // Check if the event is cancelled
    if (event.isCanceled()) {
        // Handle cancellation
        return;
    }

    // Proceed with the note change
    // Additional logic can be added here
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/NoteBlockEvent.java`

### ChunkTicketLevelUpdatedEvent *(Common)*

**When**: This event fires whenever a chunk's ticket level is changed via the server's ChunkMap, excluding cases where the new level is the same as the old or both are past the max chunk distance.

**Cancellable**: No

**Fields**:
```yaml
- name: level
  type: ServerLevel
  description: The server level containing the chunk that had its ticket level updated
- name: chunkPos
  type: long
  description: The long representation of the chunk position that had its ticket level changed
- name: oldTicketLevel
  type: int
  description: The previous ticket level the chunk had before the change
- name: newTicketLevel
  type: int
  description: The new ticket level for the chunk after the change
- name: chunkHolder
  type: ChunkHolder
  description: The chunk holder that had its ticket level updated (may be null)
```

**Methods**:
```yaml
- name: getLevel
  signature: public ServerLevel getLevel()
  description: Returns the server level containing the chunk that had its ticket level updated
- name: getChunkPos
  signature: public long getChunkPos()
  description: Returns the long representation of the chunk position that had its ticket level changed
- name: getOldTicketLevel
  signature: public int getOldTicketLevel()
  description: Returns the previous ticket level the chunk had before the change
- name: getNewTicketLevel
  signature: public int getNewTicketLevel()
  description: Returns the new ticket level for the chunk after the change
- name: getChunkHolder
  signature: public ChunkHolder getChunkHolder()
  description: Returns the chunk holder that had its ticket level updated (may return null)
```

**Example**:
```java
@SubscribeEvent
public void onChunkTicketLevelUpdated(ChunkTicketLevelUpdatedEvent event) {
    ServerLevel level = event.getLevel();
    long chunkPos = event.getChunkPos();
    int oldLevel = event.getOldTicketLevel();
    int newLevel = event.getNewTicketLevel();
    ChunkHolder holder = event.getChunkHolder();
    // Example: Log the chunk position and ticket level change
    NeoForge.EVENT_BUS.post(new SomeModEvent(level, chunkPos, oldLevel, newLevel));
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/ChunkTicketLevelUpdatedEvent.java`

### CommandEvent *(Common)*

**When**: CommandEvent is fired after a command is parsed, but before it is executed, specifically during the invocation of Commands.performCommand(ParseResults, String).

**Cancellable**: Yes

**Fields**:
```yaml
- name: parse
  type: ParseResults<CommandSourceStack>
  description: The parsed command results containing information about the command and its context.
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
  description: Sets the parsed command results, allowing modification of the command context.
- name: getException
  signature: public @Nullable Throwable getException()
  description: Returns the exception that will be thrown when performing the command, or null if none.
- name: setException
  signature: public void setException(@Nullable Throwable exception)
  description: Sets an exception to be thrown when performing the command, or null to clear any existing exception.
```

**Example**:
```java
@SubscribeEvent
public void onCommandEvent(CommandEvent event) {
    // Check if the event is cancelled
    if (event.isCanceled()) return;
    
    // Modify the parsed command results
    event.setParseResults(event.getParseResults());
    
    // Set an exception to cancel the command execution
    event.setException(new IllegalArgumentException("Command cancelled by event handler"));
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/CommandEvent.java`

### CreateSpawnPosition *(Common)*

**When**: This event fires whenever a ServerLevel is initialized for the first time and a spawn position needs to be chosen.

**Cancellable**: Yes

**Fields**:
```yaml
- name: level
  type: LevelAccessor
  description: The level this event is affecting, providing access to level-related data and operations.
- name: settings
  type: ServerLevelData
  description: The server level data settings used to determine the spawn position.
```

**Methods**:
```yaml
- name: getLevel
  signature: public LevelAccessor getLevel()
  description: Returns the level this event is affecting.
- name: getSettings
  signature: public ServerLevelData getSettings()
  description: Returns the server level data settings used to determine the spawn position.
```

**Example**:
```java
@SubscribeEvent
public void onSpawnPositionCreation(CreateSpawnPosition event) {
    if (event.isCanceled()) {
        // Handle canceled event
        return;
    }
    // Modify spawn position logic here
    // For example, you could set a custom spawn position:
    // event.level.setSpawnPosition(new BlockPos(0, 64, 0));
    // Or modify the settings:
    // event.settings.setPlayerSpawnLocation(new BlockPos(0, 64, 0));
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/LevelEvent.java`

### DifficultyChangeEvent *(Common)*

**When**: The event fires when the difficulty is changing, specifically when the game is transitioning between difficulty levels.

**Cancellable**: No

**Fields**:
```yaml
- name: difficulty
  type: net.minecraft.world.Difficulty
  description: The new difficulty level that the game is transitioning to.
- name: oldDifficulty
  type: net.minecraft.world.Difficulty
  description: The previous difficulty level before the change.
```

**Methods**:
```yaml
- name: getDifficulty
  signature: public Difficulty getDifficulty()
  description: Returns the new difficulty level that the game is transitioning to.
- name: getOldDifficulty
  signature: public Difficulty getOldDifficulty()
  description: Returns the previous difficulty level before the change.
```

**Example**:
```java
@SubscribeEvent
public static void onDifficultyChange(DifficultyChangeEvent event) {
    Difficulty newDifficulty = event.getDifficulty();
    Difficulty oldDifficulty = event.getOldDifficulty();
    // Mod logic here, such as adjusting mob behavior based on difficulty change
    // Note: This event is not cancellable
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/DifficultyChangeEvent.java`

### EnderEntity *(Common)*

**When**: The EnderEntity event is fired before an Enderman or Shulker randomly teleports.

**Cancellable**: Yes

**Fields**:
```yaml
- name: entityLiving
  type: LivingEntity
  description: The LivingEntity that is about to teleport, specifically an Enderman or Shulker.
```

**Methods**:
```yaml
- name: getEntityLiving
  signature: public LivingEntity getEntityLiving()
  description: Returns the LivingEntity that is about to teleport, which is either an Enderman or Shulker.
```

**Example**:
```java
@SubscribeEvent
public static void onEnderEntityTeleport(EntityTeleportEvent.EnderEntity event) {
    if (!event.isCanceled()) {
        LivingEntity entity = event.getEntityLiving();
        // Mod logic here to affect teleportation behavior
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityTeleportEvent.java`

### EnderManAngerEvent *(Common)*

**When**: This event fires on the NeoForge bus before an Enderman detects that a player is looking at them, but only if the detection isn't prevented by an item's gaze disguise.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: Player
  description: The player that is being checked for gaze detection.
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player that is being checked for gaze detection.
- name: getEntity
  signature: public EnderMan getEntity()
  description: Returns the Enderman entity that is detecting the player.
```

**Example**:
```java
@SubscribeEvent
public void onEnderManAnger(EnderManAngerEvent event) {
    Player player = event.getPlayer();
    EnderMan enderman = event.getEntity();
    // Check if the event is canceled
    if (event.isCanceled()) {
        // Do nothing, the Enderman will not target the player
        return;
    }
    // Add custom logic here, such as modifying player detection behavior
    // To cancel the event and prevent targeting:
    // event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/EnderManAngerEvent.java`

### EnderPearl *(Common)*

**When**: The EnderPearl event is fired before an entity is teleported from an EnderPearlEntity.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: ServerPlayer
  description: The player who threw the Ender Pearl.
- name: pearlEntity
  type: ThrownEnderpearl
  description: The Ender Pearl entity that was thrown.
- name: hitResult
  type: HitResult
  description: The result of where the Ender Pearl hit.
- name: attackDamage
  type: float
  description: The damage value of the Ender Pearl.
```

**Methods**:
```yaml
- name: getPlayer
  signature: ServerPlayer getPlayer()
  description: Returns the player who threw the Ender Pearl.
- name: getPearlEntity
  signature: ThrownEnderpearl getPearlEntity()
  description: Returns the Ender Pearl entity that was thrown.
- name: getHitResult
  signature: HitResult getHitResult()
  description: Returns the result of where the Ender Pearl hit.
- name: getAttackDamage
  signature: float getAttackDamage()
  description: Returns the damage value of the Ender Pearl.
- name: setAttackDamage
  signature: void setAttackDamage(float attackDamage)
  description: Sets the damage value of the Ender Pearl.
```

**Example**:
```java
@SubscribeEvent
public static void onEnderPearlTeleport(EntityTeleportEvent.EnderPearl event) {
    if (event.isCanceled()) return;
    ServerPlayer player = event.getPlayer();
    ThrownEnderpearl pearl = event.getPearlEntity();
    HitResult hitResult = event.getHitResult();
    float damage = event.getAttackDamage();
    // Modify damage or cancel teleportation
    event.setAttackDamage(10.0f);
    // Or cancel the event
    // event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityTeleportEvent.java`

### EntityAttributeCreationEvent *(Common)*

**When**: This event fires after entity type registration and before common setup, allowing modders to register custom attributes for their entity types.

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
  description: Adds an attribute supplier for a specific entity type. If the entity already has a default attribute supplier, it throws an IllegalStateException.
```

**Example**:
```java
@SubscribeEvent
public static void onEntityAttributeCreation(EntityAttributeCreationEvent event) {
    event.put(MyEntityType.ENTITY_TYPE, MyEntityAttributes.create());
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityAttributeCreationEvent.java`

### EntityAttributeModificationEvent *(Common)*

**When**: This event fires after entity attribute registration and before common setup, and after EntityAttributeCreationEvent.

**Cancellable**: No

**Fields**:
```yaml
- name: entityAttributes
  type: Map<EntityType<? extends LivingEntity>, AttributeSupplier.Builder>
  description: A map of entity types to their attribute supplier builders, used to modify attributes for entities.
- name: entityTypes
  type: List<EntityType<? extends LivingEntity>>
  description: A list of entity types that have attributes defined, used to iterate over entities with attributes.
```

**Methods**:
```yaml
- name: add
  signature: void add(EntityType<? extends LivingEntity> entityType, Holder<Attribute> attribute, double value)
  description: Adds a new attribute to the specified entity type with the given value.
- name: add
  signature: void add(EntityType<? extends LivingEntity> entityType, Holder<Attribute> attribute)
  description: Adds a new attribute to the specified entity type using the attribute's default value.
- name: has
  signature: boolean has(EntityType<? extends LivingEntity> entityType, Holder<Attribute> attribute)
  description: Checks if the specified entity type has the given attribute.
- name: getTypes
  signature: List<EntityType<? extends LivingEntity>> getTypes()
  description: Returns the list of entity types that have attributes defined.
```

**Example**:
```java
@Mod("modid")
public class ModEvents {
    @SubscribeEvent
    public void onEntityAttributeModification(EntityAttributeModificationEvent event) {
        // Add a custom attribute to a specific entity type
        event.add(EntityType.PLAYER, AttributeRegistry.CUSTOM_ATTRIBUTE, 10.0);
        
        // Check if an attribute exists
        if (event.has(EntityType.PLAYER, AttributeRegistry.CUSTOM_ATTRIBUTE)) {
            // Do something with the attribute
        }
        
        // Get all entity types with attributes
        for (EntityType<? extends LivingEntity> entityType : event.getTypes()) {
            // Process each entity type
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityAttributeModificationEvent.java`

### EntityInteract *(Common)*

**When**: 2023-10-15T12:34:56.789Z

**Cancellable**: true

**Fields**:
```yaml
- name: getHand
  type: InteractionHand
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  type: ItemStack
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  type: BlockPos
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  type: Direction
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  type: Level
  description: Returns the level (world) of the interaction.
- name: getSide
  type: LogicalSide
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  type: void
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  type: void
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  type: LeftClickBlock.Action
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  type: void
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  type: void
  description: Sets whether the item should be used to interact with the block.
```

**Methods**:
```yaml
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  signature: public Direction getFace()
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) of the interaction.
- name: getSide
  signature: public LogicalSide getSide()
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  signature: public void setCancellationResult(InteractionResult result)
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  signature: public LeftClickBlock.Action getAction()
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  signature: public void setUseBlock(TriState triggerBlock)
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  signature: public void setUseItem(TriState triggerItem)
  description: Sets whether the item should be used to interact with the block.
```

**Example**:
```java
When a player left-clicks a block, the LeftClickBlock event is fired. You can use this event to modify the behavior of block interaction, such as preventing the block from being broken or changing how the item interacts with the block.
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerInteractEvent.java`

### EntityInteractSpecific *(Common)*

**When**: 2023-10-15T12:34:56.789Z

**Cancellable**: true

**Fields**:
```yaml
- name: getHand
  type: InteractionHand
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  type: ItemStack
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  type: BlockPos
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  type: Direction
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  type: Level
  description: Returns the level (world) of the interaction.
- name: getSide
  type: LogicalSide
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  type: void
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  type: void
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  type: LeftClickBlock.Action
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  type: void
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  type: void
  description: Sets whether the item should be used to interact with the block.
```

**Methods**:
```yaml
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  signature: public Direction getFace()
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) of the interaction.
- name: getSide
  signature: public LogicalSide getSide()
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  signature: public void setCancellationResult(InteractionResult result)
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  signature: public LeftClickBlock.Action getAction()
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  signature: public void setUseBlock(TriState triggerBlock)
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  signature: public void setUseItem(TriState triggerItem)
  description: Sets whether the item should be used to interact with the block.
```

**Example**:
```java
When a player left-clicks a block, the LeftClickBlock event is fired. You can use this event to modify the behavior of block interaction, such as preventing the block from being broken or changing how the item interacts with the block.
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerInteractEvent.java`

### EntityJoinLevelEvent *(Common)*

**When**: This event fires whenever an Entity joins a Level, specifically when an entity is added to a level via Level#addFreshEntity(Entity) or PersistentEntitySectionManager#addNewEntity(Entity, boolean).

**Cancellable**: Yes

**Fields**:
```yaml
- name: level
  type: Level
  description: The Level to which the entity is being added.
- name: loadedFromDisk
  type: boolean
  description: Indicates if the entity was loaded from disk (true) or created in memory (false). On the client side, this will always be false.
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the Level that the entity is being added to.
- name: loadedFromDisk
  signature: public boolean loadedFromDisk()
  description: Returns true if the entity was loaded from disk, false otherwise. On the client side, this will always return false.
```

**Example**:
```java
@SubscribeEvent
public void onEntityJoinLevel(EntityJoinLevelEvent event) {
    if (event.isCanceled()) return;
    Level level = event.getLevel();
    boolean loadedFromDisk = event.loadedFromDisk();
    // Example: Prevent entities from being added to the client side
    if (level.isClientSide()) {
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityJoinLevelEvent.java`

### EntityMountEvent *(Common)*

**When**: This event fires when an entity mounts or dismounts another entity.

**Cancellable**: Yes

**Fields**:
```yaml
- name: entityMounting
  type: Entity
  description: The entity that is attempting to mount another entity.
- name: entityBeingMounted
  type: Entity
  description: The entity being mounted by another entity. Can be null.
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
  description: Returns the entity being mounted. Can return null.
- name: getLevel
  signature: Level getLevel()
  description: Returns the level (world) where the mounting/dismounting action is occurring.
```

**Example**:
```java
@SubscribeEvent
public void onEntityMount(EntityMountEvent event) {
    if (event.isMounting()) {
        if (event.getEntityBeingMounted() != null) {
            // Check if we want to allow this mounting action
            if (someCondition) {
                event.setCanceled(true);
            }
        }
    }
    // Handle dismounting similarly
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityMountEvent.java`

### EntityMultiPlaceEvent *(Common)*

**When**: This event is fired when a single block placement triggers the creation of multiple blocks, such as placing a bed block. It occurs after the initial block placement and when multiple blocks are created as a result.

**Cancellable**: Yes

**Fields**:
```yaml
- name: blockSnapshots
  type: List<BlockSnapshot>
  description: A list of BlockSnapshots representing all blocks that were replaced by the placement of new blocks. Most of these blocks will be of type AIR.
- name: entity
  type: @Nullable Entity
  description: The entity that performed the block placement. This can be null if the placement was not done by an entity.
- name: placedAgainst
  type: BlockState
  description: The block state against which the placement occurred.
- name: placedBlock
  type: BlockState
  description: The block state that was placed as a result of the placement action.
```

**Methods**:
```yaml
- name: getReplacedBlockSnapshots
  signature: public List<BlockSnapshot> getReplacedBlockSnapshots()
  description: Returns an immutable list of BlockSnapshots for all blocks replaced by the placement of new blocks.
- name: getEntity
  signature: @Nullable public Entity getEntity()
  description: Returns the entity that performed the block placement.
- name: getPlacedBlock
  signature: public BlockState getPlacedBlock()
  description: Returns the block state that was placed as a result of the placement action.
- name: getPlacedAgainst
  signature: public BlockState getPlacedAgainst()
  description: Returns the block state against which the placement occurred.
- name: isSimulated
  signature: public boolean isSimulated()
  description: Returns true if this event should not perform any actions that modify the level. If false, level-modifying actions can be performed.
```

**Example**:
```java
To handle this event, you would register a listener that checks if the event is canceled and then performs actions based on the block snapshots and entity information.
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockEvent.java`

### EntityPlaceEvent *(Common)*

**When**: When an entity (not a player) places a block, such as when a mob places a block or a projectile hits a block.

**Cancellable**: Yes

**Fields**:
```yaml
- name: entity
  type: Entity
  description: The entity that placed the block
- name: blockSnapshot
  type: BlockSnapshot
  description: A snapshot of the block that was placed, including pre-placement state
- name: placedBlock
  type: BlockState
  description: The block state that was placed
- name: placedAgainst
  type: BlockState
  description: The block state that was placed against
```

**Methods**:
```yaml
- name: getEntity
  signature: public Entity getEntity()
  description: Returns the entity that placed the block
- name: getBlockSnapshot
  signature: public BlockSnapshot getBlockSnapshot()
  description: Returns the block snapshot of the placed block
- name: getPlacedBlock
  signature: public BlockState getPlacedBlock()
  description: Returns the block state that was placed
- name: getPlacedAgainst
  signature: public BlockState getPlacedAgainst()
  description: Returns the block state that was placed against
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.entity.EntityPlaceBlockEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onEntityPlaceBlock(EntityPlaceBlockEvent event) {
        // Check if the block placement was canceled
        if (event.isCanceled()) {
            // Handle canceled placement
            return;
        }
        
        // Get the entity that placed the block
        Entity entity = event.getEntity();
        
        // Get the block state that was placed
        BlockState placedBlock = event.getPlacedBlock();
        
        // Get the block state that was placed against
        BlockState placedAgainst = event.getPlacedAgainst();
        
        // Modify the block state if needed
        // event.setPlacedBlock(...);
        
        // Cancel the placement if needed
        // event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockEvent.java`

### EntityStruckByLightningEvent *(Common)*

**When**: The event fires when an Entity is about to be struck by lightning, specifically during the LightningBolt#tick() method execution.

**Cancellable**: Yes

**Fields**:
```yaml
- name: lightning
  type: LightningBolt
  description: The EntityLightningBolt instance that is attempting to strike an entity.
```

**Methods**:
```yaml
- name: getLightning
  signature: public LightningBolt getLightning()
  description: Returns the LightningB,olt instance that is attempting to strike an entity.
- name: isCanceled
  signature: public boolean isCanceled()
  description: Returns whether the event has been canceled.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event.
```

**Example**:
```java
@SubscribeEvent
public void onEntityStruckByLightning(EntityStruckByLightningEvent event) {
    if (event.isCanceled()) return;
    // Modify lightning properties or prevent strike
    event.setCanceled(true); // Cancel the lightning strike
    // Access lightning bolt entity
    LightningBolt lightning = event.getLightning();
    // Perform custom logic with lightning entity
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityStruckByLightningEvent.java`

### EntityTeleportEvent *(Common)*

**When**: The EntityTeleportEvent is fired when an entity is about to teleport due to various causes such as Enderman/Shulker teleportation, Enderpearl usage, teleport commands, or Chorus Fruit consumption.

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
  description: The entity that is about to be teleported.
```

**Methods**:
```yaml
- name: getTargetX
  signature: double getTargetX()
  description: Returns the X coordinate of the target teleport destination.
- name: setTargetX
  signature: void setTargetX(double targetX)
  description: Sets the X coordinate of the target teleport destination.
- name: getTargetY
  signature: double getTargetY()
  description: Returns the Y coordinate of the target teleport destination.
- name: setTargetY
  signature: void setTargetY(double targetY)
  description: Sets the Y coordinate of the target teleport destination.
- name: getTargetZ
  signature: void getTargetZ()
  description: Returns the Z coordinate of the target teleport destination.
- name: setTargetZ
  signature: void setTargetZ(double targetZ)
  description: Sets the Z coordinate of the target teleport destination.
- name: getTarget
  signature: Vec3 getTarget()
  description: Returns the target teleport destination as a Vec3 object.
- name: getPrevX
  signature: double getPrevX()
  description: Returns the X coordinate of the entity's previous position.
- name: getPrevY
  signature: double getPrevY()
  description: Returns the Y coordinate of the entity's previous position.
- name: getPrevZ
  signature: double getPrevZ()
  description: Returns the Z coordinate of the entity's previous position.
- name: getPrev
  signature: Vec3 getPrev()
  description: Returns the entity's previous position as a Vec3 object.
- name: isCanceled
  signature: boolean isCanceled()
  description: Checks if the event has been canceled.
- name: setCanceled
  signature: void setCanceled(boolean canceled)
  description: Sets the canceled state of the event.
```

**Example**:
```java
@SubscribeEvent
public static void onEntityTeleport(EntityTeleportEvent event) {
    if (event.isCanceled()) return;
    // Modify teleport destination
    event.setTargetX(event.getTargetX() + 1);
    event.setTargetZ(event.getTargetZ() + 1);
    // Or cancel the teleport
    // event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityTeleportEvent.java`

### EntityTravelToDimensionEvent *(Common)*

**When**: This event fires before an Entity travels to a dimension, allowing modders to intercept and modify the dimension transition.

**Cancellable**: Yes

**Fields**:
```yaml
- name: dimension
  type: ResourceKey<Level>
  description: The dimension the entity is traveling to. If the dimension is the same as the entity's current dimension, the entity will not move.
```

**Methods**:
```yaml
- name: getDimension
  signature: public ResourceKey<Level> getDimension()
  description: Returns the dimension the entity is attempting to travel to.
```

**Example**:
```java
@SubscribeEvent
public void onEntityTravelToDimension(EntityTravelToDimensionEvent event) {
    // Check if the entity is trying to travel to a specific dimension
    if (event.getDimension().location().equals("minecraft:the_nether".toLowerCase())) {
        // Cancel the dimension travel
        event.setCanceled(true);
        // Optionally modify the dimension
        // event.dimension = ResourceKey.create(Registry.LEVEL_KEY, ...);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityTravelToDimensionEvent.java`

### Expired *(Common)*

**When**: This event is fired when a MobEffectInstance expires on an entity.

**Cancellable**: Yes

**Fields**:
```yaml
- name: effectInstance
  type: MobEffectInstance
  description: The MobEffectInstance that has expired.
```

**Methods**:
```yaml
- name: getEffectInstance
  signature: MobEffectInstance getEffectInstance()
  description: Returns the MobEffectInstance that has expired.
- name: setCanceled
  signature: void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, preventing the effect from expiring.
- name: isCanceled
  signature: boolean isCanceled()
  description: Returns whether the event has been canceled, preventing the effect from expiring.
```

**Example**:
```java
@SubscribeEvent
public void onMobEffectExpired(MobEffectEvent.Expired event) {
    if (!event.isCanceled()) {
        // Handle expired effect
        MobEffectInstance effect = event.getEffectInstance();
        // You can cancel the event to prevent the effect from expiring
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/MobEffectEvent.java`

### FarmlandTrampleEvent *(Common)*

**When**: This event is fired when farmland is trampled by an entity, such as when an animal or player walks on it.

**Cancellable**: Yes

**Fields**:
```yaml
- name: entity
  type: Entity
  description: The entity that trampled the farmland.
- name: fallDistance
  type: double
  description: The distance the entity fell before trampling the farmland.
```

**Methods**:
```yaml
- name: setCanceled
  signature: void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, preventing the trampling from occurring.
- name: isCanceled
  signature: boolean isCanceled()
  description: Checks if the event has been canceled, which would prevent the trampling from happening.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.level.FarmlandTrampleEvent;
import net.neoforged.neoforge.event.level.BlockEvent;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.level.Level;
import net.minecraft.core.BlockPos;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFarmlandTrample(FarmlandTrampleEvent event) {
        // Check if the event is canceled
        if (event.isCanceled()) {
            return;
        }
        
        // Prevent trampling by canceling the event
        if (event.getEntity() instanceof Player player && player.isCreative()) {
            event.setCanceled(true);
        }
        
        // Log trampling details
        System.out.println("Farmland trampled by " + event.getEntity().getName() + " with fall distance " + event.getFallDistance());
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockEvent.java`

### FinalizeSpawnEvent *(Common)*

**When**: This event fires before the Mob's finalizeSpawn method is called, allowing mods to control mob initialization.

**Cancellable**: Yes

**Fields**:
```yaml
- name: spawnType
  type: EntitySpawnReason
  description: The type of mob spawn that happened, indicating why the mob was spawned.
- name: difficulty
  type: DifficultyInstance
  description: The difficulty instance for the chunk where the mob is about to be spawned.
- name: spawnData
  type: SpawnGroupData
  description: The spawn group data for this entity, used for spawning groups of entities.
- name: spawner
  type: Either<BlockEntity, Entity>
  description: The block entity or entity that performed the spawn, if applicable.
```

**Methods**:
```yaml
- name: getDifficulty
  signature: public DifficultyInstance getDifficulty()
  description: Retrieves the difficulty instance for the chunk where the mob is about to be spawned.
- name: setDifficulty
  signature: public void setDifficulty(DifficultyInstance inst)
  description: Sets the difficulty instance for this event, which will be propagated to Mob.finalizeSpawn.
- name: getSpawnType
  signature: public EntitySpawnReason getSpawnType()
  description: Retrieves the type of mob spawn that happened.
- name: getSpawnData
  signature: public SpawnGroupData getSpawnData()
  description: Retrieves the spawn group data for this entity.
- name: setSpawnData
  signature: public void setSpawnData(@Nullable SpawnGroupData data)
  description: Sets the spawn data for this entity.
- name: getSpawner
  signature: public Either<BlockEntity, Entity> getSpawner()
  description: Retrieves the block entity or entity that performed the spawn.
- name: setSpawnCancelled
  signature: public void setSpawnCancelled(boolean cancel)
  description: Used to cancel the spawn of this mob, preventing it from being spawned.
- name: isSpawnCancelled
  signature: public boolean isSpawnCancelled()
  description: Returns the current spawn cancellation status.
```

**Example**:
```java
@SubscribeEvent
public void onFinalizeSpawn(FinalizeSpawnEvent event) {
    // Modify difficulty
    event.setDifficulty(new DifficultyInstance(Difficulty.NORMAL));
    
    // Check spawn type
    if (event.getSpawnType() == EntitySpawnReason.SPAWNER_EGG) {
        // Set spawn data for spawner eggs
        event.setSpawnData(new SpawnGroupData());
    }
    
    // Cancel spawn if needed
    event.setSpawnCancelled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/FinalizeSpawnEvent.java`

### FluidPlaceBlockEvent *(Common)*

**When**: This event is fired when a liquid (such as lava or water) attempts to place a block, such as when lava sets blocks on fire or water replaces blocks in a fluid flow.

**Cancellable**: Yes

**Fields**:
```yaml
- name: liquidPos
  type: BlockPos
  description: The position of the liquid that initiated the block placement. This may be the same as the block position being changed.
- name: newState
  type: BlockState
  description: The block state that will be placed after this event resolves. This can be modified to change the resulting block.
- name: origState
  type: BlockState
  description: The original block state that was going to be changed before the event was fired.
```

**Methods**:
```yaml
- name: getLiquidPos
  signature: public BlockPos getLiquidPos()
  description: Returns the position of the liquid that initiated the block placement.
- name: getNewState
  signature: public BlockState getNewState()
  description: Returns the block state that will be placed after this event resolves.
- name: setNewState
  signature: public void setNewState(BlockState state)
  description: Sets the block state that will be placed after this event resolves, allowing modification of the resulting block.
- name: getOriginalState
  signature: public BlockState getOriginalState()
  description: Returns the original block state that was going to be changed before the event was fired.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.core.BlockPos;
import net.neoforged.neoforge.event.block.FluidPlaceBlockEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onFluidPlaceBlock(FluidPlaceBlockEvent event) {
        // Change the block being placed to obsidian
        event.setNewState(BlockState.getBlockState(Blocks.OBSIDIAN));
        // Prevent lava from setting blocks on fire
        if (event.getLiquidPos().equals(event.getPos())) {
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockEvent.java`

### FurnaceFuelBurnTimeEvent *(Common)*

**When**: The event fires when determining the fuel value for an ItemStack, specifically when calculating how long an item will burn in a furnace.

**Cancellable**: Yes

**Fields**:
```yaml
- name: itemStack
  type: ItemStack
  description: The ItemStack that is being considered as fuel.
- name: recipeType
  type: RecipeType<capture<?>>
  description: The recipe type for which the burn time is being calculated, if known.
- name: fuelValues
  type: FuelValues
  description: The FuelValues object populated from the furnace fuels data map.
- name: burnTime
  type: int
  description: The resulting burn time for the ItemStack, which can be modified by event handlers.
```

**Methods**:
```yaml
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the ItemStack that is being considered as fuel.
- name: getRecipeType
  signature: public @Nullable RecipeType<?> getRecipeType()
  description: Returns the recipe type for which the burn time is being calculated, if known.
- name: getFuelValues
  signature: public FuelValues getFuelValues()
  description: Returns the FuelValues object populated from the furnace fuels data map.
- name: setBurnTime
  signature: public void setBurnTime(int burnTime)
  description: Sets the burn time for the given ItemStack. Setting it to 0 will prevent the item from being used as fuel.
- name: getBurnTime
  signature: public int getBurnTime()
  description: Returns the resulting burn time for the ItemStack, which can be modified by event handlers.
```

**Example**:
```java
@SubscribeEvent
public void onFurnaceFuelBurnTime(FurnaceFuelBurnTimeEvent event) {
    // Modify the burn time for the item stack
    event.setBurnTime(1000);
    
    // Check if the event was canceled
    if (event.isCanceled()) {
        System.out.println("Event was canceled!");
    }
}

// To cancel the event:
@SubscribeEvent
public void onFurnaceFuelBurnTimeCancel(FurnaceFuelBurnTimeEvent event) {
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/furnace/FurnaceFuelBurnTimeEvent.java`

### GameShuttingDownEvent *(Common)*

**When**: Fires once when the game is about to close, specifically on the physical client and physical server. It does not fire for the Integrated Server on a physical client.

**Cancellable**: No

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
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.GameShuttingDownEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onGameShuttingDown(GameShuttingDownEvent event) {
        // This will be called when the game is shutting down
        System.out.println("Game is shutting down");
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/GameShuttingDownEvent.java`

### GatherSkippedAttributeTooltipsEvent *(Common)*

**When**: This event fires when gathering attribute modifiers to skip for item tooltips, allowing modders to hide specific modifiers or entire groups from being displayed.

**Cancellable**: No

**Fields**:
```yaml
- name: stack
  type: ItemStack
  description: The item stack that has the tooltip being processed.
- name: ctx
  type: AttributeTooltipContext
  description: The context for the tooltip being generated.
- name: skippedIds
  type: Set<ResourceLocation>
  description: Set of attribute modifier IDs that are skipped (not displayed) in the tooltip.
- name: skippedGroups
  type: Set<EquipmentSlotGroup>
  description: Set of equipment slot groups that are skipped (all modifiers in these groups are not displayed).
- name: skipAll
  type: boolean
  description: Whether all attribute modifiers should be skipped for this tooltip.
```

**Methods**:
```yaml
- name: getContext
  signature: public AttributeTooltipContext getContext()
  description: Returns the tooltip context for the current tooltip generation.
- name: getStack
  signature: public ItemStack getStack()
  description: Returns the item stack that has the tooltip being processed.
- name: skipId
  signature: public void skipId(ResourceLocation id)
  description: Marks a specific attribute modifier ID as skipped, preventing it from being displayed in the tooltip.
- name: skipGroup
  signature: public void skipGroup(EquipmentSlotGroup group)
  description: Marks an entire equipment slot group as skipped, preventing all modifiers in that group from being displayed.
- name: setSkipAll
  signature: public void setSkipAll(boolean skip)
  description: Sets whether all attribute modifiers should be skipped for this tooltip.
- name: isSkippingAll
  signature: public boolean isSkippingAll()
  description: Checks if all attribute modifiers are being skipped for this tooltip.
- name: getSkippedIds
  signature: protected Set<ResourceLocation> getSkippedIds()
  description: Returns the set of skipped attribute modifier IDs, initializing it if necessary.
- name: getSkippedGroups
  signature: protected Set<EquipmentSlotGroup> getSkippedGroups()
  description: Returns the set of skipped equipment slot groups, initializing it if necessary.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.GatherSkippedAttributeTooltipsEvent;
import net.minecraft.world.item.ItemStack;
import net.minecraft.resources.ResourceLocation;
import net.neoforged.neoforge.common.util.AttributeTooltipContext;
import net.neoforged.neoforge.eventbus.api.EventBus;
import net.neoforged.neoforge.eventbus.api.SubscribeEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onGatherSkippedAttributeTooltips(GatherSkippedAttributeTooltipsEvent event) {
        // Skip all modifiers for this item
        event.setSkipAll(true);
        
        // Or skip specific modifiers
        // event.skipId(ResourceLocation.fromNamespaceAndPath("examplemod", "modifier_id"));
        
        // Or skip entire equipment slot groups
        // event.skipGroup(EquipmentSlotGroup.MAINHAND);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/GatherSkippedAttributeTooltipsEvent.java`

### GetEnchantmentLevelEvent *(Common)*

**When**: This event fires when the enchantment level of an item is requested for gameplay purposes, specifically when the getEnchantmentLevel(Enchantment) or getAllEnchantments() methods of IItemStackExtension are called.

**Cancellable**: No

**Fields**:
```yaml
- name: stack
  type: ItemStack
  description: The item stack that is being queried for enchantment information.
- name: enchantments
  type: ItemEnchantments.Mutable
  description: The mutable map of enchantment to level that can be modified during the event.
- name: targetEnchant
  type: Holder<Enchantment>
  description: The specific enchantment being queried, or null if all enchantments are being requested.
- name: lookup
  type: RegistryLookup<Enchantment>
  description: The registry lookup used to access enchantment holders.
```

**Methods**:
```yaml
- name: getStack
  signature: public ItemStack getStack()
  description: Returns the item stack that is being queried against.
- name: getEnchantments
  signature: public ItemEnchantments.Mutable getEnchantments()
  description: Returns the mutable enchantment->level map.
- name: getTargetEnchant
  signature: public Holder<Enchantment> getTargetEnchant()
  description: Returns the specific enchantment being queried, or null if all enchantments are being requested.
- name: isTargetting
  signature: public boolean isTargetting(Holder<Enchantment> ench)
  description: Checks if the target enchantment matches the specified enchantment.
- name: isTargetting
  signature: public boolean isTargetting(ResourceKey<Enchantment> ench)
  description: Checks if the target enchantment matches the specified resource key.
- name: getHolder
  signature: public Optional<Holder.Reference<Enchantment>> getHolder(ResourceKey<Enchantment> key)
  description: Attempts to resolve a Holder for a target enchantment.
- name: getLookup
  signature: public RegistryLookup<Enchantment> getLookup()
  description: Returns the registry lookup used to access enchantment holders.
```

**Example**:
```java
@SubscribeEvent
public void onGetEnchantmentLevel(GetEnchantmentLevelEvent event) {
    ItemStack stack = event.getStack();
    ItemEnchantments.Mutable enchantments = event.getEnchantments();
    Holder<Enchantment> targetEnchant = event.getTargetEnchant();
    RegistryLookup<Enchantment> lookup = event.getLookup();

    // Example: Modify the level of a specific enchantment
    if (targetEnchant != null && targetEnchant.is(Enchantments.FIRE_ASPECT)) {
        enchantments.setLevel(targetEnchant, 2);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/enchanting/GetEnchantmentLevelEvent.java`

### Hands *(Common)*

**When**: This event fires when a living entity is about to swap the items in their main and offhand, specifically during the handling of player actions in the server.

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
@SubscribeEvent
public void onItemSwap(LivingSwapItemsEvent.Hands event) {
    if (event.isCanceled()) return;
    // Modify the items being swapped
    event.setItemSwappedToMainHand(new ItemStack(Items.DIAMOND_SWORD));
    event.setItemSwappedToOffHand(new ItemStack(Items.GOLDEN_APPLE));
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingSwapItemsEvent.java`

### ItemAttributeModifierEvent *(Common)*

**When**: This event is fired when the attributes for an item stack are queried through ItemStack#getAttributeModifiers()

**Cancellable**: No

**Fields**:
```yaml
- name: stack
  type: ItemStack
  description: The item stack whose attribute modifiers are being computed
- name: defaultModifiers
  type: ItemAttributeModifiers
  description: The default attribute modifiers before changes made by the event
- name: builder
  type: ItemAttributeModifiersBuilder
  description: The builder used for adjusting the attribute modifiers
```

**Methods**:
```yaml
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the item stack whose attribute modifiers are being computed
- name: getDefaultModifiers
  signature: public ItemAttributeModifiers getDefaultModifiers()
  description: Returns the default attribute modifiers before changes made by the event
- name: getModifiers
  signature: public List<ItemAttributeModifiers.Entry> getModifiers()
  description: Returns an unmodifiable view of the attribute modifier entries
- name: addModifier
  signature: public boolean addModifier(Holder<Attribute> attribute, AttributeModifier modifier, EquipmentSlotGroup slot)
  description: Adds a new attribute modifier to the given stack
- name: removeModifier
  signature: public boolean removeModifier(Holder<Attribute> attribute, ResourceLocation id)
  description: Removes an attribute modifier for the target attribute by id
- name: replaceModifier
  signature: public void replaceModifier(Holder<Attribute> attribute, AttributeModifier modifier, EquipmentSlotGroup slot)
  description: Adds a new attribute modifier to the given stack, optionally replacing any existing modifiers with the same id
- name: removeIf
  signature: public boolean removeIf(Predicate<ItemAttributeModifiers.Entry> condition)
  description: Removes modifiers based on a condition
- name: removeAllModifiersFor
  signature: public boolean removeAllModifiersFor(Holder<Attribute> attribute)
  description: Removes all modifiers for the given attribute
- name: clearModifiers
  signature: public void clearModifiers()
  description: Removes all modifiers for all attributes
- name: build
  signature: public ItemAttributeModifiers build()
  description: Builds a new ItemAttributeModifiers with the results of this event
```

**Example**:
```java
@SubscribeEvent
public void onItemAttributeModifier(ItemAttributeModifierEvent event) {
    ItemStack stack = event.getItemStack();
    ItemAttributeModifiers defaultModifiers = event.getDefaultModifiers();
    ItemAttributeModifiersBuilder builder = event.getBuilder();

    // Add a new modifier
    if (event.addModifier(Attributes.ATTACK_DAMAGE, new AttributeModifier("example_mod", 1.0, AttributeModifier.Operation.ADDITION), EquipmentSlotGroup.MAINHAND)) {
        System.out.println("Modifier added");
    }

    // Remove an existing modifier
    if (event.removeModifier(Attributes.ATTACK_DAMAGE, new ResourceLocation("example_mod"))) {
        System.out.println("Modifier removed");
    }

    // Replace an existing modifier
    event.replaceModifier(Attributes.ATTACK_DAMAGE, new AttributeModifier("example_mod", 2.0, AttributeModifier.Operation.ADDITION), EquipmentSlotGroup.MAINHAND);

    // Build the final modifiers
    ItemAttributeModifiers finalModifiers = event.build();
    System.out.println("Final modifiers: " + finalModifiers);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/ItemAttributeModifierEvent.java`

### ItemConsumption *(Common)*

**When**: The ItemConsumption event is fired before a LivingEntity is teleported due to consuming a Chorus Fruit.

**Cancellable**: Yes

**Fields**:
```yaml
- name: entityLiving
  type: LivingEntity
  description: The living entity that consumed the Chorus Fruit and is about to be teleported.
- name: itemStack
  type: ItemStack
  description: The ItemStack representing the Chorus Fruit that was consumed.
- name: targetX
  type: double
  description: The X coordinate of the target teleportation position.
- name: targetY
  type: double
  description: The Y coordinate of the target teleportation position.
- name: targetZ
  type: double
  description: The Z coordinate of the target teleportation position.
```

**Methods**:
```yaml
- name: getEntityLiving
  signature: public LivingEntity getEntityLiving()
  description: Returns the living entity that consumed the Chorus Fruit.
- name: getConsumedItem
  signature: public ItemStack getConsumedItem()
  description: Returns the ItemStack representing the Chorus Fruit that was consumed.
- name: getTargetX
  signature: public double getTargetX()
  description: Returns the X coordinate of the target teleportation position.
- name: getTargetY
  signature: public double getTargetY()
  description: Returns the Y coordinate of the target teleportation position.
- name: getTargetZ
  signature: public double getTargetZ()
  description: Returns the Z coordinate of the target teleportation position.
- name: setTargetX
  signature: public void setTargetX(double targetX)
  description: Sets the X coordinate of the target teleportation position.
- name: setTargetY
  signature: public void setTargetY(double targetY)
  description: Sets the Y coordinate of the target teleportation position.
- name: setTargetZ
  signature: public void setTargetZ(double targetZ)
  description: Sets the Z coordinate of the target teleportation position.
```

**Example**:
```java
@SubscribeEvent
public void onItemConsumption(EntityTeleportEvent.ItemConsumption event) {
    // Check if the event is canceled
    if (event.isCanceled()) {
        return;
    }

    // Get the entity and item stack
    LivingEntity entity = event.getEntityLiving();
    ItemStack item = event.getConsumedItem();

    // Modify the target position if needed
    event.setTargetX(event.getTargetX() + 1.0);
    event.setTargetZ(event.getTargetZ() + 1.0);

    // Cancel the event if needed
    // event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityTeleportEvent.java`

### ItemFishedEvent *(Common)*

**When**: The ItemFishedEvent fires when a player successfully catches an item using a fishing rod.

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
  description: The amount of damage the fishing rod will take from this fishing action.
```

**Methods**:
```yaml
- name: getRodDamage
  signature: public int getRodDamage()
  description: Returns the amount of damage the fishing rod will take from this fishing action.
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
@Mod("mymod")
public class MyMod {
    @SubscribeEvent
    public void onFished(ItemFishedEvent event) {
        // Prevent the player from getting any items
        event.setCanceled(true);
        
        // Modify rod damage
        event.damageRodBy(5);
        
        // Access fishing hook entity
        FishingHook hook = event.getHookEntity();
        
        // Get the items the player will receive
        NonNullList<ItemStack> drops = event.getDrops();
        
        // Example: Add a custom item to drops (not recommended, use loot tables instead)
        // drops.add(new ItemStack(Items.DIAMOND));
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/ItemFishedEvent.java`

### ItemStackedOnOtherEvent *(Common)*

**When**: This event fires before either of the two vanilla item stacking functions are called, when a carried item is clicked on top of another in a GUI slot.

**Cancellable**: Yes

**Fields**:
```yaml
- name: carriedItem
  type: ItemStack
  description: The stack being carried by the mouse (may be empty)
- name: stackedOnItem
  type: ItemStack
  description: The stack currently in the slot being clicked on (may be empty)
- name: slot
  type: Slot
  description: The slot being clicked on
- name: action
  type: ClickAction
  description: The click action being used (left-click or right-click)
- name: player
  type: Player
  description: The player doing the item swap attempt
- name: carriedSlotAccess
  type: SlotAccess
  description: A fake slot allowing the listener to see and change what item is being carried
```

**Methods**:
```yaml
- name: getCarriedItem
  signature: public ItemStack getCarriedItem()
  description: Returns the stack being carried by the mouse (may be empty)
- name: getStackedOnItem
  signature: public ItemStack getStackedOnItem()
  description: Returns the stack currently in the slot being clicked on (may be empty)
- name: getSlot
  signature: public Slot getSlot()
  description: Returns the slot being clicked on
- name: getClickAction
  signature: public ClickAction getClickAction()
  description: Returns the click action being used (left-click or right-click)
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the player doing the item swap attempt
- name: getCarriedSlotAccess
  signature: public SlotAccess getCarriedSlotAccess()
  description: Returns a fake slot allowing the listener to see and change what item is being carried
```

**Example**:
```java
@SubscribeEvent
public void onItemStackedOnOther(ItemStackedOnOtherEvent event) {
    if (event.getClickAction() == ClickAction.PRIMARY) {
        // Modify the carried item
        event.getCarriedSlotAccess().set(ItemStack.EMPTY);
        // Cancel the event to prevent vanilla stacking
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/ItemStackedOnOtherEvent.java`

### ItemTossEvent *(Common)*

**When**: The ItemTossEvent is fired when a player tosses an item (using the 'Q' key) or drag-n-drops a stack of items outside inventory GUI screens.

**Cancellable**: Yes

**Fields**:
```yaml
- name: player
  type: Player
  description: The player who tossed the item. This field is set in the constructor and is accessible via the getPlayer() method.
```

**Methods**:
```yaml
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the Player object representing the player who tossed the item.
- name: isCanceled
  signature: public boolean isCanceled()
  description: Checks if the event has been canceled. This method is inherited from ICancellableEvent.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event. This method is inherited from ICancellableEvent.
```

**Example**:
```java
@SubscribeEvent
public void onItemToss(ItemTossEvent event) {
    if (event.isCanceled()) return;
    Player player = event.getPlayer();
    // Example: Prevent the item from being tossed by the player
    event.setCanceled(true);
    // Or modify the item entity before it's added to the world
    // ItemEntity entity = event.getEntityItem();
    // entity.setItem(item);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/item/ItemTossEvent.java`

### LeftClickBlock *(Common)*

**When**: 2023-10-15T12:34:56.789Z

**Cancellable**: true

**Fields**:
```yaml
- name: getHand
  type: InteractionHand
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  type: ItemStack
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  type: BlockPos
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  type: Direction
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  type: Level
  description: Returns the level (world) of the interaction.
- name: getSide
  type: LogicalSide
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  type: void
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  type: void
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  type: LeftClickBlock.Action
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  type: void
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  type: void
  description: Sets whether the item should be used to interact with the block.
```

**Methods**:
```yaml
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  signature: public Direction getFace()
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) of the interaction.
- name: getSide
  signature: public LogicalSide getSide()
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  signature: public void setCancellationResult(InteractionResult result)
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  signature: public LeftClickBlock.Action getAction()
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  signature: public void setUseBlock(TriState triggerBlock)
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  signature: public void setUseItem(TriState triggerItem)
  description: Sets whether the item should be used to interact with the block.
```

**Example**:
```java
When a player left-clicks a block, the LeftClickBlock event is fired. You can use this event to modify the behavior of block interaction, such as preventing the block from being broken or changing how the item interacts with the block.
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerInteractEvent.java`

### LevelChange *(Common)*

**When**: The LevelChange event is fired when a player's experience level changes through the Player#giveExperienceLevels(int) method.

**Cancellable**: Yes

**Fields**:
```yaml
- name: levels
  type: int
  description: The number of experience levels the player's level has changed by.
```

**Methods**:
```yaml
- name: getLevels
  signature: public int getLevels()
  description: Returns the number of experience levels the player's level has changed by.
- name: setLevels
  signature: public void setLevels(int levels)
  description: Sets the number of experience levels the player's level has changed by. This can be used to modify the level change amount.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.entity.player.LevelChangeEvent;
import net.minecraft.world.entity.player.Player;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onLevelChange(LevelChangeEvent event) {
        // Modify the level change amount
        event.setLevels(5);
        
        // Access the level change amount
        int levels = event.getLevels();
        
        // Example: Cancel the event if the level change is more than 5
        if (levels > 5) {
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerXpEvent.java`

### LivingChangeTargetEvent *(Common)*

**When**: This event fires when an entity is about to change its attack target, before the target is actually set.

**Cancellable**: Yes

**Fields**:
```yaml
- name: targetType
  type: ILivingTargetType
  description: The type of target change that is occurring, indicating what system caused the target change.
- name: originalAboutToBeSetTarget
  type: LivingEntity
  description: The target that Minecraft originally intended to set before this event was fired.
- name: newAboutToBeSetTarget
  type: LivingEntity
  description: The new target that the entity will have, which can be modified by modders.
```

**Methods**:
```yaml
- name: getNewAboutToBeSetTarget
  signature: public @Nullable LivingEntity getNewAboutToBeSetTarget()
  description: Returns the new target that the entity will begin to track.
- name: setNewAboutToBeSetTarget
  signature: public void setNewAboutToBeSetTarget(@Nullable LivingEntity newAboutToBeSetTarget)
  description: Sets the new target that the entity will have.
- name: getTargetType
  signature: public ILivingTargetType getTargetType()
  description: Returns the living target type that indicates what system caused the target change.
- name: getOriginalAboutToBeSetTarget
  signature: public @Nullable LivingEntity getOriginalAboutToBeSetTarget()
  description: Returns the original target that Minecraft intended to set before this event was fired.
```

**Example**:
```java
@SubscribeEvent
public void onLivingChangeTarget(LivingChangeTargetEvent event) {
    // Check if the event is cancellable
    if (event.isCanceled()) return;
    
    // Get the original target
    LivingEntity originalTarget = event.getOriginalAboutToBeSetTarget();
    
    // Get the new target
    LivingEntity newTarget = event.getNewAboutToBeSetTarget();
    
    // Change the target to a different entity
    event.setNewAboutToBeSetTarget(someOtherEntity);
    
    // Cancel the event to prevent the target change
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingChangeTargetEvent.java`

### LivingDeathEvent *(Common)*

**When**: When an entity dies, specifically in the die() methods of LivingEntity, Player, and ServerPlayer classes.

**Cancellable**: Yes

**Fields**:
```yaml
- name: source
  type: DamageSource
  description: The damage source that caused the entity to die.
```

**Methods**:
```yaml
- name: getSource
  signature: public DamageSource getSource()
  description: Returns the DamageSource that caused the entity to die.
```

**Example**:
```java
@SubscribeEvent
public static void onLivingDeath(LivingDeathEvent event) {
    if (event.getSource().isExplosion()) {
        event.setCanceled(true);
        // Entity will not die because the event was canceled
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingDeathEvent.java`

### LivingDestroyBlockEvent *(Common)*

**When**: This event fires when an ender dragon or wither attempts to destroy a block, or when a zombie attempts to break a door. It serves as an alternative to the Block.canEntityDestroy() method.

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
- name: isCanceled
  signature: public boolean isCanceled()
  description: Checks if the event has been canceled.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event.
```

**Example**:
```java
@SubscribeEvent
public static void onLivingDestroyBlock(LivingDestroyBlockEvent event) {
    if (event.isCanceled()) return;
    // Check if the block is a specific type
    if (event.getState().getBlock() == Blocks.OBSIDIAN) {
        event.setCanceled(true);
        // Prevent the block from being destroyed
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingDestroyBlockEvent.java`

### LivingDropsEvent *(Common)*

**When**: The LivingDropsEvent fires when an entity dies and drops items in the LivingEntity#die(DamageSource) method.

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
@SubscribeEvent
public void onLivingDrops(LivingDropsEvent event) {
    if (event.getSource().isFire()) {
        event.setCanceled(true);
        // Prevent fire damage from dropping items
    }
    // Modify drops
    event.getDrops().add(new ItemEntity(...));
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingDropsEvent.java`

### LivingDrownEvent *(Common)*

**When**: The LivingDrownEvent is fired when a living entity's air supply reaches zero or below, indicating the entity is drowning and will take damage unless the event is cancelled.

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
- name: setCanceled
  signature: public void setCanceled(boolean cancel)
  description: Cancels the drowning event, preventing damage and bubble particles.
```

**Example**:
```java
@SubscribeEvent
public void onLivingDrown(LivingDrownEvent event) {
    // Check if the entity is actively drowning
    if (event.isDrowning()) {
        // Prevent damage and bubble particles by cancelling the event
        event.setCanceled(true);
        // Alternatively, modify damage amount or bubble count
        // event.setDamageAmount(0);
        // event.setBubbleCount(0);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingDrownEvent.java`

### LivingExperienceDropEvent *(Common)*

**When**: This event fires when an entity drops experience points upon its death.

**Cancellable**: Yes

**Fields**:
```yaml
- name: attackingPlayer
  type: Player
  description: The player that last attacked the entity and thus caused the experience drop. This can be null if the player has since logged out.
- name: originalExperiencePoints
  type: int
  description: The original amount of experience points that would be dropped by the entity before any modifications.
- name: droppedExperiencePoints
  type: int
  description: The amount of experience points that will actually be dropped. This can be modified through the setDroppedExperience method.
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
  description: Returns the original amount of experience points that would be dropped before any modifications.
```

**Example**:
```java
@SubscribeEvent
public void onExperienceDrop(LivingExperienceDropEvent event) {
    // Check if the event is cancellable
    if (event.isCanceled()) return;

    // Modify the experience drop amount
    event.setDroppedExperience(10);

    // Access the attacking player
    Player attacker = event.getAttackingPlayer();
    if (attacker != null) {
        // Do something with the attacker
    }

    // Access original experience points
    int original = event.getOriginalExperience();
    // ... perform calculations or checks ...
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingExperienceDropEvent.java`

### LivingFallEvent *(Common)*

**When**: The event fires when an entity is set to fall, specifically in the causeFallDamage method of LivingEntity.

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
  description: Returns the damage multiplier for fall damage calculation.
- name: setDamageMultiplier
  signature: public void setDamageMultiplier(float damageMultiplier)
  description: Sets the damage multiplier for fall damage calculation.
```

**Example**:
```java
@SubscribeEvent
public void onFall(LivingFallEvent event) {
    if (event.isCanceled()) return;
    // Modify fall distance
    event.setDistance(5.0);
    // Modify damage multiplier
    event.setDamageMultiplier(0.5f);
    // Cancel fall damage
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingFallEvent.java`

### LivingHealEvent *(Common)*

**When**: The event fires when an entity is healed using the LivingEntity#heal(float) method.

**Cancellable**: Yes

**Fields**:
```yaml
- name: amount
  type: float
  description: The amount of healing that was applied to the entity before any modifiers or cancellations.
```

**Methods**:
```yaml
- name: getAmount
  signature: float getAmount()
  description: Returns the amount of healing that was applied to the entity.
- name: setAmount
  signature: void setAmount(float amount)
  description: Sets the amount of healing for the entity. This is used internally by the event system.
```

**Example**:
```java
@SubscribeEvent
public static void onLivingHeal(LivingHealEvent event) {
    if (event.isCanceled()) return;
    // Modify the healing amount
    event.setAmount(event.getAmount() * 0.5f);
    // Or cancel the healing entirely
    // event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingHealEvent.java`

### LivingIncomingDamageEvent *(Common)*

**When**: The event fires when a LivingEntity is about to receive damage, specifically in the hurt() method after invulnerability checks but before any damage processing/mitigation.

**Cancellable**: Yes

**Fields**:
```yaml
- name: container
  type: DamageContainer
  description: The damage container that holds all the information about the damage sequence, including source, damage values, and modifiers.
```

**Methods**:
```yaml
- name: getContainer
  signature: public DamageContainer getContainer()
  description: Returns the damage container for this damage sequence.
- name: getSource
  signature: public DamageSource getSource()
  description: Returns the DamageSource for this damage sequence.
- name: getAmount
  signature: public float getAmount()
  description: Returns the current damage to be applied to the entity.
- name: getOriginalAmount
  signature: public float getOriginalAmount()
  description: Returns the damage value passed into the damage sequence before modifications.
- name: setAmount
  signature: public void setAmount(float newDamage)
  description: Sets the damage value to be used in the rest of the damage sequence.
- name: addReductionModifier
  signature: public void addReductionModifier(DamageContainer.Reduction type, IReductionFunction reductionFunc)
  description: Adds a reduction modifier to the damage sequence, which alters the vanilla damage reduction before modifying the damage value.
- name: setInvulnerabilityTicks
  signature: public void setInvulnerabilityTicks(int ticks)
  description: Sets a new invulnerability tick count when the entity's invulnerable time is fully cooled down.
```

**Example**:
```java
@SubscribeEvent
public void onLivingIncomingDamage(LivingIncomingDamageEvent event) {
    // Check if the event is cancelled
    if (event.isCanceled()) return;

    // Get the damage source and amount
    DamageSource source = event.getSource();
    float damage = event.getAmount();

    // Modify the damage amount
    event.setAmount(damage * 2);

    // Add a reduction modifier
    event.addReductionModifier(DamageContainer.Reduction.PHYSICAL, (damageValue, reduction) -> {
        return damageValue * 0.5f;
    });

    // Set invulnerability ticks
    event.setInvulnerabilityTicks(20);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingIncomingDamageEvent.java`

### LivingKnockBackEvent *(Common)*

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
  description: The original strength value before any modifications by event handlers.
- name: originalRatioX
  type: double
  description: The original x-axis ratio value before any modifications by event handlers.
- name: originalRatioZ
  type: double
  description: The original z-axis ratio value before any modifications by event handlers.
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
@SubscribeEvent
public void onKnockback(LivingKnockBackEvent event) {
    if (event.isCanceled()) return;
    // Modify knockback strength
    event.setStrength(5.0f);
    // Modify knockback direction
    event.setRatioX(0.8);
    event.setRatioZ(0.6);
    // Or revert to original values
    event.setStrength(event.getOriginalStrength());
    event.setRatioX(event.getOriginalRatioX());
    event.setRatioZ(event.getOriginalRatioZ());
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingKnockBackEvent.java`

### LivingUseTotemEvent *(Common)*

**When**: When an entity attempts to use a totem to prevent its death

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
@SubscribeEvent
public void onUseTotem(LivingUseTotemEvent event) {
    if (event.isCanceled()) return;
    // Check if the totem is a specific item
    if (event.getTotem().getItem() == Items.TOTEM_OF_UNDYING) {
        // Prevent the totem from working
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingUseTotemEvent.java`

### LootTableLoadEvent *(Common)*

**When**: The event fires when a LootTable is loaded from JSON, specifically during server resource loading or reloading.

**Cancellable**: Yes

**Fields**:
```yaml
- name: registries
  type: HolderLookup.Provider
  description: Provides access to registry providers that can be used to access various registries.
- name: name
  type: ResourceLocation
  description: The resource location identifier of the loot table being loaded.
- name: table
  type: LootTable
  description: The loot table object that is being loaded, which can be modified or replaced.
- name: key
  type: ResourceKey<LootTable>
  description: The resource key for the loot table, used for referencing it in registries.
```

**Methods**:
```yaml
- name: getRegistries
  signature: public HolderLookup.Provider getRegistries()
  description: Returns the registry provider that can be used to access various registries.
- name: getName
  signature: public ResourceLocation getName()
  description: Returns the resource location identifier of the loot table being loaded.
- name: getKey
  signature: public ResourceKey<LootTable> getKey()
  description: Returns the resource key for the loot table, which is lazily initialized.
- name: getTable
  signature: public LootTable getTable()
  description: Returns the loot table object that is being loaded.
- name: setTable
  signature: public void setTable(LootTable table)
  description: Sets the loot table object, allowing modification or replacement of the table.
```

**Example**:
```java
@SubscribeEvent
public void onLootTableLoad(LootTableLoadEvent event) {
    // Check if the event is cancelled
    if (event.isCanceled()) {
        return;
    }

    // Modify or replace the loot table
    event.setTable(LootTable.builder().withPool(LootPool.lootPool().setWeight(1).add(LootItem.lootTableItem(Items.DIAMOND))));

    // Access registry provider and name
    System.out.println("Loading loot table: " + event.getName() + " using registries: " + event.getRegistries());
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/LootTableLoadEvent.java`

### MobSplitEvent *(Common)*

**When**: This event fires when a mob is removed and splits into multiple children, specifically on the logical server. It occurs during the removal process of mobs like Slimes and Magma Cubes in vanilla.

**Cancellable**: Yes

**Fields**:
```yaml
- name: parent
  type: Mob
  description: The parent mob that is currently being removed.
- name: children
  type: List<Mob>
  description: The list of children mobs that will be spawned as a result of the parent's removal.
```

**Methods**:
```yaml
- name: getParent
  signature: public Mob getParent()
  description: Returns the parent mob that is in the process of being removed.
- name: getChildren
  signature: public List<Mob> getChildren()
  description: Returns the mutable list of all children mobs. This list can be modified, removed, or added to.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event. Canceling this event will prevent any children from being spawned.
```

**Example**:
```java
@SubscribeEvent
public void onMobSplit(MobSplitEvent event) {
    // Check if the event is canceled
    if (event.isCanceled()) {
        return;
    }

    // Modify the children list
    event.getChildren().removeIf(child -> child.getType() == ModEntities.SPECIAL_MOB.get());

    // Prevent children from spawning
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/MobSplitEvent.java`

### ModifyCustomSpawnersEvent *(Common)*

**When**: This event fires on the server side when a ServerLevel is building its custom spawners.

**Cancellable**: No

**Fields**:
```yaml
- name: serverLevel
  type: ServerLevel
  description: The server level that is being processed for custom spawners.
- name: customSpawners
  type: List<CustomSpawner>
  description: The list of custom spawners that can be modified during the event.
```

**Methods**:
```yaml
- name: getLevel
  signature: public ServerLevel getLevel()
  description: Returns the server level this event is affecting.
- name: getCustomSpawners
  signature: public List<CustomSpawner> getCustomSpawners()
  description: Returns the modifiable custom spawner list.
- name: addCustomSpawner
  signature: public void addCustomSpawner(CustomSpawner customSpawner)
  description: Adds a custom spawner to the list.
```

**Example**:
```java
@SubscribeEvent
public static void onModifyCustomSpawners(ModifyCustomSpawnersEvent event) {
    ServerLevel level = event.getLevel();
    List<CustomSpawner> spawners = event.getCustomSpawners();
    
    // Example: Add a custom spawner for a specific entity
    spawners.add(new CustomSpawner(level, MyEntity::create, 10, 10, 10, 10, 10, 10));
    
    // Example: Remove a specific spawner (if needed)
    // spawners.removeIf(spawner -> spawner.getEntityType() == MyEntity.TYPE);
}

```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/ModifyCustomSpawnersEvent.java`

### ModifyDefaultComponentsEvent *(Common)*

**When**: This event fires when modifying the default components of items, specifically when using the modify() or modifyMatching() methods to change item components.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: modify
  signature: public void modify(ItemLike item, Consumer<DataComponentPatch.Builder> patch)
  description: Applies a component patch to the default components of a specific item.
- name: modifyMatching
  signature: public void modifyMatching(Predicate<? super Item> predicate, Consumer<DataComponentPatch.Builder> patch)
  description: Applies a component patch to all items matching the given predicate. Should be used with lowest priority to ensure other modifications are applied first.
- name: getAllItems
  signature: public Stream<Item> getAllItems()
  description: Returns a stream of all registered items, useful for iterating through items when using modifyMatching()
```

**Example**:
```java
import net.minecraft.core.component.DataComponents;
import net.minecraft.world.item.Items;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;
import net.neoforged.neoforge.event.ModifyDefaultComponentsEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onModifyComponents(ModifyDefaultComponentsEvent event) {
        // Modify specific items
        event.modify(Items.MELON_SEEDS, builder -> builder
            .set(DataComponents.MAX_STACK_SIZE, 16)); // Set max stack size to 16

        event.modify(Items.APPLE, builder -> builder
            .remove(DataComponents.FOOD)); // Remove food component

        // Modify items matching a predicate
        event.modifyMatching(item -> item.components().has(DataComponents.FIRE_RESISTANT), builder -> builder
            .set(DataComponents.ENCHANTMENT_GLINT_OVERRIDE, true));
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/ModifyDefaultComponentsEvent.java`

### ModMismatchEvent *(Common)*

**When**: When the mod loader is loading a world that was last saved with mod versions different from the currently-loaded versions

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
  description: Fetches the previous version of a given mod if it has been mismatched.
- name: getCurrentVersion
  signature: public ArtifactVersion getCurrentVersion(String modId)
  description: Fetches the current version of a given mod.
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
  description: Fetches the resolver for a specific mod.
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
@SubscribeEvent
public void onModMismatch(ModMismatchEvent event) {
    // Get the level directory
    LevelStorageSource.LevelDirectory levelDir = event.getLevelDirectory();
    
    // Check for version differences
    for (String modId : event.versionDifferences.keySet()) {
        MismatchedVersionInfo info = event.versionDifferences.get(modId);
        
        // Handle version mismatch for modId
        if (info.isMissing()) {
            // Handle missing mod version
        } else if (info.wasUpgrade()) {
            // Handle version upgrade
        }
    }

    // Mark this mod as having resolved a version mismatch
    event.markResolved("exampleMod");
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/ModMismatchEvent.java`

### NeighborNotifyEvent *(Common)*

**When**: This event is fired on the server when a block's physics update occurs, indicating that neighboring blocks may need to be updated due to changes in the block's state.

**Cancellable**: Yes

**Fields**:
```yaml
- name: notifiedSides
  type: EnumSet<Direction>
  description: A set of directions indicating which sides of the block will have their neighbors updated.
- name: forceRedstoneUpdate
  type: boolean
  description: Indicates whether the redstone update was forced during the block change operation.
```

**Methods**:
```yaml
- name: getNotifiedSides
  signature: public EnumSet<Direction> getNotifiedSides()
  description: Returns the set of directions that will have their neighbors updated.
- name: getForceRedstoneUpdate
  signature: public boolean getForceRedstoneUpdate()
  description: Returns whether the redstone update was forced during the block change operation.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.level.NeighborNotifyEvent;
import net.minecraft.core.Direction;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.LevelAccessor;
import net.minecraft.world.level.block.BlockState;
import net.minecraft.world.level.block.state.EnumSet;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onNeighborChange(NeighborNotifyEvent event) {
        LevelAccessor level = event.getLevel();
        BlockPos pos = event.getPos();
        BlockState state = event.getState();
        EnumSet<Direction> sides = event.getNotifiedSides();
        boolean forceRedstone = event.getForceRedstoneUpdate();
        
        // Example logic: If redstone update was forced, log it
        if (forceRedstone) {
            System.out.println("Redstone update forced for block at " + pos);
        }
        
        // Example logic: Check if any specific side was notified
        if (sides.contains(Direction.NORTH)) {
            System.out.println("North side of block at " + pos + " needs update");
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockEvent.java`

### OnDatapackSyncEvent *(Common)*

**When**: Fires when a player joins the server or when the reload command is ran, before tags and crafting recipes are sent to the client.

**Cancellable**: No

**Fields**:
```yaml
- name: playerList
  type: PlayerList
  description: The server's player list, containing all players, when the event fires.
- name: player
  type: ServerPlayer
  description: The player that is joining the server, or null when syncing for all players, such as when the reload command runs.
- name: recipeTypesToSend
  type: Set<RecipeType<?>>
  description: The recipe types that have been requested to be sent to the players.
```

**Methods**:
```yaml
- name: getPlayerList
  signature: public PlayerList getPlayerList()
  description: Gets the server's player list, containing all players, when the event fires.
- name: getRelevantPlayers
  signature: public Stream<ServerPlayer> getRelevantPlayers()
  description: Creates a stream of players that need to receive data during this event, which is the specified player (if present) or all players.
- name: getPlayer
  signature: public ServerPlayer getPlayer()
  description: Gets the player that is joining the server, or null when syncing for all players, such as when the reload command runs.
- name: sendRecipes
  signature: public void sendRecipes(RecipeType<?>... recipeTypes)
  description: Requests that all recipes of the given types should be sent to the players.
- name: sendRecipes
  signature: public void sendRecipes(Iterable<RecipeType<?>> recipeTypes)
  description: Requests that all recipes of the given types should be sent to the players.
- name: getRecipeTypesToSend
  signature: public Set<RecipeType<?>> getRecipeTypesToSend()
  description: Gets the recipe types that have already been requested to be sent to the players.
```

**Example**:
```java
@SubscribeEvent
public void onDatapackSync(OnDatapackSyncEvent event) {
    // Get the player list
    PlayerList playerList = event.getPlayerList();
    
    // Get the relevant players
    Stream<ServerPlayer> players = event.getRelevantPlayers();
    
    // Send specific recipe types to players
    event.sendRecipes(RecipeType.MISC, RecipeType.FURNACE);
    
    // Access recipe types to send
    Set<RecipeType<?>> recipeTypes = event.getRecipeTypesToSend();
    
    // Example: Log the recipe types
    recipeTypes.forEach(recipeType -> System.out.println("Sending recipes: " + recipeType.getName()));
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/OnDatapackSyncEvent.java`

### OnPlaceItem *(Common)*

**When**: When the inputs to a grindstone are changed

**Cancellable**: Yes

**Fields**:
```yaml
- name: top
  type: ItemStack
  description: The item in the top input grindstone slot
- name: bottom
  type: ItemStack
  description: The item in the bottom input grindstone slot
- name: xp
  type: int
  description: The experience amount given to the player
```

**Methods**:
```yaml
- name: getTopItem
  signature: public ItemStack getTopItem()
  description: Returns the item in the top input grindstone slot
- name: getBottomItem
  signature: public ItemStack getBottomItem()
  description: Returns the item in the bottom input grindstone slot
- name: getXp
  signature: public int getXp()
  description: Returns the experience amount given to the player
- name: setXp
  signature: public void setXp(int xp)
  description: Sets the experience amount given to the player
```

**Example**:
```java
@SubscribeEvent
public void onPlaceItem(OnPlaceItem event) {
    // Modify the output item
    event.setOutput(new ItemStack(Items.DIAMOND));
    
    // Modify the experience amount
    event.setXp(10);
    
    // Cancel the event to prevent vanilla behavior
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/GrindstoneEvent.java`

### OnTakeItem *(Common)*

**When**: When the output of a grindstone is taken by the player

**Cancellable**: Yes

**Fields**:
```yaml
- name: newTop
  type: ItemStack
  description: The item that will be placed in the top input slot after the event
- name: newBottom
  type: ItemStack
  description: The item that will be placed in the bottom input slot after the event
```

**Methods**:
```yaml
- name: getNewTopItem
  signature: public ItemStack getNewTopItem()
  description: Returns the item that will be in the top input slot after the event
- name: getNewBottomItem
  signature: public ItemStack getNewBottomItem()
  description: Returns the item that will be in the bottom input slot after the event
- name: setNewTopItem
  signature: public void setNewTopItem(ItemStack newTop)
  description: Sets the item that will be placed in the top input slot after the event
- name: setNewBottomItem
  signature: public void setNewBottomItem(ItemStack newBottom)
  description: Sets the item that will be placed in the bottom input slot after the event
- name: getXp
  signature: public int getXp()
  description: Returns the experience amount that will be given to the player
```

**Example**:
```java
@Mod("modid")
public class ModEvents {
    @SubscribeEvent
    public void onTakeItem(OnTakeItem event) {
        // Modify the items in the grindstone slots
        event.setNewTopItem(ItemStack.EMPTY);
        event.setNewBottomItem(ItemStack.EMPTY);
        
        // Prevent experience from being given
        event.setXp(0);
        
        // Cancel the event to prevent vanilla behavior
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/GrindstoneEvent.java`

### PermissionsChangedEvent *(Common)*

**When**: This event fires when a player's permission level changes, such as when they are opped or deopped.

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
@SubscribeEvent
public static void onPermissionsChange(PermissionsChangedEvent event) {
    ServerPlayer player = event.getPlayer();
    int oldLevel = event.getOldLevel();
    int newLevel = event.getNewLevel();
    
    // Check if the event is cancelled
    if (event.isCanceled()) {
        // Handle cancelled case
        return;
    }
    
    // Example: Prevent promoting players above level 2
    if (newLevel > 2 && player.getServer() != null) {
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PermissionsChangedEvent.java`

### PickupXp *(Common)*

**When**: When a player collides with an experience orb and before the player receives the experience

**Cancellable**: Yes

**Fields**:
```yaml
- name: orb
  type: ExperienceOrb
  description: The experience orb that the player collided with
```

**Methods**:
```yaml
- name: getOrb
  signature: public ExperienceOrb getOrb()
  description: Returns the experience orb that the player collided with
```

**Example**:
```java
@SubscribeEvent
public void onPickupXp(PickupXp event) {
    if (event.isCanceled()) return;
    ExperienceOrb orb = event.getOrb();
    // Handle the experience pickup event
    // For example, modify orb behavior or add custom effects
    // You can cancel the event by calling event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerXpEvent.java`

### Play *(Common)*

**When**: When a Noteblock plays its note, allowing modders to modify the note or instrument before it plays.

**Cancellable**: Yes

**Fields**:
```yaml
- name: noteId
  type: int
  description: The internal note ID that represents both the note and octave. Most modders should use getNote() and getOctave() instead.
- name: instrument
  type: NoteBlockInstrument
  description: The instrument associated with the Noteblock, which can be modified to change the sound.
```

**Methods**:
```yaml
- name: getNote
  signature: public Note getNote()
  description: Returns the Note the Noteblock is tuned to.
- name: getOctave
  signature: public Octave getOctave()
  description: Returns the Octave of the note this Noteblock is tuned to.
- name: setNote
  signature: public void setNote(Note note, Octave octave)
  description: Sets the Note and Octave for this event. Note that Octave.HIGH is only valid for Note.F_SHARP.
- name: getInstrument
  signature: public NoteBlockInstrument getInstrument()
  description: Returns the instrument associated with the Noteblock.
- name: setInstrument
  signature: public void setInstrument(NoteBlockInstrument instrument)
  description: Sets the instrument for the Noteblock.
- name: isCanceled
  signature: public boolean isCanceled()
  description: Checks if the event has been canceled.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, which can stop the note from playing.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onNoteBlockPlay(NoteBlockEvent.Play event) {
        // Change the note to G in the middle octave
        event.setNote(Note.G, Octave.MID);
        
        // Change the instrument to a different one
        event.setInstrument(NoteBlockInstrument.HARP);
        
        // Cancel the note from playing
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/NoteBlockEvent.java`

### PlayerChangeGameModeEvent *(Common)*

**When**: Player is cloned (e.g., respawn or dimension change)

**Cancellable**: false

**Fields**:
```yaml
- name: original
  type: Player
  description: The old EntityPlayer that this new entity is a clone of.
- name: wasDeath
  type: boolean
  description: True if this event was fired because the player died. False if it was fired because the entity switched dimensions.
```

**Methods**:
```yaml
- name: getOriginal
  signature: public Player getOriginal()
  description: The old EntityPlayer that this new entity is a clone of.
- name: isWasDeath
  signature: public boolean isWasDeath()
  description: True if this event was fired because the player died. False if it was fired because the entity switched dimensions.
```

**Example**:
```java
if (event instanceof CloneEvent) {
    Player original = event.getOriginal();
    boolean wasDeath = event.isWasDeath();
    // Handle clone event logic here
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerEvent.java`

### PlayerNegotiationEvent *(Common)*

**When**: This event fires on the server when a connection has started the Forge handshake, allowing modders to delay player login until necessary pre-login work is completed.

**Cancellable**: No

**Fields**:
```yaml
- name: connection
  type: Connection
  description: The Minecraft network connection associated with the player attempting to login.
- name: profile
  type: GameProfile
  description: The GameProfile of the player attempting to login.
- name: futures
  type: List<Future<Void>>
  description: A list of asynchronous tasks that must complete before the login process continues.
```

**Methods**:
```yaml
- name: enqueueWork
  signature: void enqueueWork(Runnable runnable)
  description: Enqueues a Runnable task to be executed asynchronously before the login proceeds.
- name: enqueueWork
  signature: void enqueueWork(Future<Void> future)
  description: Adds a Future task to the list of tasks that must complete before the login process continues.
- name: getConnection
  signature: Connection getConnection()
  description: Returns the Minecraft network connection associated with the player attempting to login.
- name: getProfile
  signature: GameProfile getProfile()
  description: Returns the GameProfile of the player attempting to login.
```

**Example**:
```java
@SubscribeEvent
public void onPlayerNegotiation(PlayerNegotiationEvent event) {
    // Enqueue a task to preload player data
    event.enqueueWork(() -> {
        // Simulate data loading
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    });

    // Access connection and profile information
    Connection connection = event.getConnection();
    GameProfile profile = event.getProfile();
    // The login will proceed only after all futures in event.futures are completed
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerNegotiationEvent.java`

### PlayerSetSpawnEvent *(Common)*

**When**: This event fires when a player's spawn point is set or reset, typically during respawn or when the spawn is manually changed.

**Cancellable**: Yes

**Fields**:
```yaml
- name: spawnLevel
  type: ResourceKey<Level>
  description: The dimension where the player's spawn point is being set.
- name: forced
  type: boolean
  description: Whether the spawn point change was forced (e.g., through a command).
- name: newSpawn
  type: BlockPos
  description: The new spawn position, or null if the spawn position is being reset.
```

**Methods**:
```yaml
- name: isForced
  signature: boolean isForced()
  description: Returns whether the spawn point change was forced.
- name: getNewSpawn
  signature: BlockPos getNewSpawn()
  description: Returns the new spawn position, or null if the spawn position is being reset.
- name: getSpawnLevel
  signature: ResourceKey<Level> getSpawnLevel()
  description: Returns the dimension where the player's spawn point is being set.
```

**Example**:
```java
@SubscribeEvent
public void onPlayerSetSpawn(PlayerSetSpawnEvent event) {
    if (event.isCanceled()) return;
    // Check if the spawn is being forced
    if (event.isForced()) {
        // Handle forced spawn change
    } else {
        // Handle regular spawn change
    }
    // Get the new spawn position
    BlockPos newSpawn = event.getNewSpawn();
    // Get the dimension where the spawn is set
    ResourceKey<Level> spawnLevel = event.getSpawnLevel();
    // You can cancel the event to prevent the spawn change
    // event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerSetSpawnEvent.java`

### PlayLevelSoundEvent *(Common)*

**When**: When a sound is played on a Level using Level.playSound, Level.playSeededSound, or LocalPlayer.playSound

**Cancellable**: Yes

**Fields**:
```yaml
- name: level
  type: Level
  description: The level where the sound is being played
- name: sound
  type: Holder<SoundEvent>
  description: The sound event to be played
- name: source
  type: SoundSource
  description: The sound source (environment type) for the sound
- name: originalVolume
  type: float
  description: The original volume for the sound to be played at
- name: originalPitch
  type: float
  description: The original pitch for the sound to be played at
- name: newVolume
  type: float
  description: The volume the sound will be played at (can be modified)
- name: newPitch
  type: float
  description: The pitch the sound will be played at (can be modified)
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level where the sound is being played
- name: getSound
  signature: public Holder<SoundEvent> getSound()
  description: Returns the sound event to be played
- name: setSound
  signature: public void setSound(@Nullable Holder<SoundEvent> sound)
  description: Sets the sound event to be played
- name: getSource
  signature: public SoundSource getSource()
  description: Returns the sound source (environment type) for the sound
- name: setSource
  signature: public void setSource(SoundSource source)
  description: Sets the sound source for the sound
- name: getOriginalVolume
  signature: public float getOriginalVolume()
  description: Returns the original volume for the sound to be played at
- name: getOriginalPitch
  signature: public float getOriginalPitch()
  description: Returns the original pitch for the sound to be played at
- name: getNewVolume
  signature: public float getNewVolume()
  description: Returns the volume the sound will be played at
- name: setNewVolume
  signature: public void setNewVolume(float newVolume)
  description: Sets the volume the sound will be played at
- name: getNewPitch
  signature: public float getNewPitch()
  description: Returns the pitch the sound will be played at
- name: setNewPitch
  signature: public void setNewPitch(float newPitch)
  description: Sets the pitch the sound will be played at
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.PlayLevelSoundEvent;
import net.minecraft.world.level.Level;
import net.minecraft.sounds.SoundEvent;
import net.minecraft.sounds.SoundSource;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPlayLevelSound(PlayLevelSoundEvent event) {
        // Check if the sound is a specific event
        if (event.getSound() != null && event.getSound().value() == SomeSoundEvent.SOUND_EVENT) {
            // Modify volume and pitch
            event.setNewVolume(0.5f);
            event.setNewPitch(2.0f);
            // Cancel the sound
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/PlayLevelSoundEvent.java`

### PortalSpawnEvent *(Common)*

**When**: This event is fired when an attempt is made to spawn a nether portal from BaseFireBlock#onPlace().

**Cancellable**: Yes

**Fields**:
```yaml
- name: size
  type: PortalShape
  description: Represents the size and shape of the portal being created.
```

**Methods**:
```yaml
- name: getPortalSize
  signature: public PortalShape getPortalSize()
  description: Returns the PortalShape object representing the size and shape of the portal.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.level.PortalSpawnEvent;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPortalSpawn(PortalSpawnEvent event) {
        // Check if the portal should be spawned
        if (event.getPortalSize().getWidth() > 10) {
            // Cancel the portal spawn
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/BlockEvent.java`

### PotentialSpawns *(Common)*

**When**: This event is fired when building a list of all possible entities that can spawn at the specified location, specifically in the NaturalSpawner's mobsAt method.

**Cancellable**: Yes

**Fields**:
```yaml
- name: mobcategory
  type: MobCategory
  description: The category of mobs in the spawn list (e.g., mobs, animals, etc.).
- name: pos
  type: BlockPos
  description: The block position where the chosen mob will be spawned.
- name: view
  type: List<Weighted<MobSpawnSettings.SpawnerData>>
  description: The list of mobs that can potentially be spawned, wrapped as a list for access.
```

**Methods**:
```yaml
- name: getMobCategory
  signature: public MobCategory getMobCategory()
  description: Returns the category of the mobs in the spawn list.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the block position where the chosen mob will be spawned.
- name: getSpawnerDataList
  signature: public List<Weighted<MobSpawnSettings.SpawnerData>> getSpawnerDataList()
  description: Returns the list of mobs that can potentially be spawned.
- name: addSpawnerData
  signature: public void addSpawnerData(Weighted<MobSpawnSettings.SpawnerData> data)
  description: Appends a SpawnerData entry to the spawn list.
- name: removeSpawnerData
  signature: public void removeSpawnerData(Weighted<MobSpawnSettings.SpawnerData> data)
  description: Removes a SpawnerData entry from the spawn list.
```

**Example**:
```java
@SubscribeEvent
public void onPotentialSpawns(PotentialSpawns event) {
    if (event.isCanceled()) return;
    // Modify the spawn list
    event.addSpawnerData(new Weighted<>(MyMobSpawnerData, 10));
    // Or remove an entry
    event.removeSpawnerData(someSpawnerData);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/LevelEvent.java`

### Pre *(Common)*

**When**: The event fires before vanilla brewing takes place in the Brewing Stand Block Entity's doBrew method.

**Cancellable**: Yes

**Fields**:
```yaml
- name: stacks
  type: NonNullList<ItemStack>
  description: The array of item stacks in the brewing stand, which can be modified before brewing occurs.
```

**Methods**:
```yaml
- name: getItem
  signature: public ItemStack getItem(int index)
  description: Retrieves the item stack at the specified index in the brewing array.
- name: setItem
  signature: public void setItem(int index, ItemStack stack)
  description: Sets the item stack at the specified index in the brewing array.
- name: getLength
  signature: public int getLength()
  description: Returns the number of item stacks in the brewing array.
```

**Example**:
```java
@SubscribeEvent
public void onBrewing(Pre event) {
    // Modify the brewing array
    event.setItem(0, new ItemStack(Items.REDSTONE));
    
    // Cancel the event to prevent vanilla brewing
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/brewing/PotionBrewEvent.java`

### Pre *(Common)*

**When**: This event fires before the piston has updated block states, allowing modders to modify behavior before movement occurs.

**Cancellable**: Yes

**Fields**:
```yaml
- name: direction
  type: Direction
  description: The direction the piston is facing and moving.
- name: moveType
  type: PistonMoveType
  description: The type of movement (extension or retraction).
- name: level
  type: Level
  description: The level (world) the piston is in.
- name: pos
  type: BlockPos
  description: The position of the piston block.
```

**Methods**:
```yaml
- name: getDirection
  signature: public Direction getDirection()
  description: Returns the direction the piston is facing.
- name: getFaceOffsetPos
  signature: public BlockPos getFaceOffsetPos()
  description: Returns the position offset by the piston's facing direction.
- name: getPistonMoveType
  signature: public PistonMoveType getPistonMoveType()
  description: Returns the type of piston movement (extension or retraction).
- name: getStructureHelper
  signature: public PistonStructureResolver getStructureHelper()
  description: Returns a helper for calculating the piston's structure, or null if the level is not a Level.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event.
- name: isCanceled
  signature: public boolean isCanceled()
  description: Checks if the event has been canceled.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.level.PistonEvent;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.piston.PistonMoveType;
import net.minecraft.world.level.block.piston.PistonStructureResolver;
import net.minecraft.core.Direction;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onPistonMove(PistonEvent.Pre event) {
        // Check if event is canceled
        if (event.isCanceled()) return;
        
        // Get piston position and direction
        BlockPos pos = event.getPos();
        Direction direction = event.getDirection();
        
        // Get movement type
        PistonMoveType moveType = event.getPistonMoveType();
        
        // Get structure helper
        PistonStructureResolver resolver = event.getStructureHelper();
        
        // Cancel the piston movement
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/PistonEvent.java`

### Pre *(Common)*

**When**: Fires once per game tick, per entity, before the entity performs work for the current tick.

**Cancellable**: Yes

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: setCanceled
  signature: void setCanceled(boolean canceled)
  description: Cancels this event, preventing the current tick from being executed for the entity. Additionally, if this event is canceled, then EntityTickEvent.Post will not be fired for the current tick.
```

**Example**:
```java
@SubscribeEvent
public static void onEntityTickPre(EntityTickEvent.Pre event) {
    if (event.isCanceled()) {
        // Handle canceled event
        return;
    }
    // Perform actions before entity tick
    event.setCanceled(true); // Cancel the tick
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/tick/EntityTickEvent.java`

### Pre *(Common)*

**When**: When an entity is trying to replace itself with another entity

**Cancellable**: Yes

**Fields**:
```yaml
- name: outcome
  type: EntityType<? extends LivingEntity>
  description: The entity type of the new entity this living entity is converting to
- name: timer
  type: Consumer<Integer>
  description: The conversion timer used to control the conversion process
```

**Methods**:
```yaml
- name: getOutcome
  signature: public EntityType<? extends Living,Entity> getOutcome()
  description: Gets the entity type of the new entity this living entity is converting to
- name: setConversionTimer
  signature: public void setConversionTimer(int ticks)
  description: Sets the conversion timer, by changing this it prevents the event being triggered every tick
```

**Example**:
```java
@Mod("modid")
public class ModEvents {
    @SubscribeEvent
    public void onLivingConversion(Pre event) {
        if (event.isCanceled()) return;
        // Modify conversion timer
        event.setConversionTimer(20);
        // Get outcome entity type
        EntityType<? extends LivingEntity> outcome = event.getOutcome();
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingConversionEvent.java`

### Pre *(Common)*

**When**: The event fires when the player picks up the result of an anvil operation, but before any post-processing occurs.

**Cancellable**: Yes

**Fields**:
```yaml
- name: menu
  type: AnvilMenu
  description: The current anvil menu instance, which is the same as the player's container menu.
- name: left
  type: ItemStack
  description: A copy of the item stack that was in the left input slot before the crafting operation.
- name: right
  type: ItemStack
  description: A copy of the item stack that was in the right input slot before the crafting operation.
- name: output
  type: ItemStack
  description: A copy of the item stack that was picked up from the anvil output slot.
```

**Methods**:
```yaml
- name: getMenu
  signature: public AnvilMenu getMenu()
  description: Returns the current AnvilMenu instance.
- name: getOutput
  signature: public ItemStack getOutput()
  description: Returns a copy of the item stack that was picked up from the anvil output slot.
- name: getLeft
  signature: public ItemStack getLeft()
  description: Returns a copy of the item stack that was in the left input slot before the crafting operation.
- name: getRight
  signature: public ItemStack getRight()
  description: Returns a copy of the item stack that was in the right input slot before the crafting operation.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Cancels the event, preventing any post-processing that occurs when the output item is picked up.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.entity.player.AnvilCraftEvent;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AnvilMenu;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onAnvilCraft(AnvilCraftEvent.Pre event) {
        Player player = event.getPlayer();
        AnvilMenu menu = event.getMenu();
        ItemStack left = event.getLeft();
        ItemStack right = event.getRight();
        ItemStack output = event.getOutput();
        
        // Example: Cancel the event to prevent post-processing
        event.setCanceled(true);
        
        // Example: Modify the output stack (note: this is not allowed as per the event's purpose)
        // output.shrink(1);
        
        // Example: Log the event details
        System.out.println("Anvil craft event: " + left + " + " + right + " = " + output);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/AnvilCraftEvent.java`

### ProjectileImpactEvent *(Common)*

**When**: This event fires when a projectile entity impacts something, specifically when a projectile collides with a block or entity.

**Cancellable**: Yes

**Fields**:
```yaml
- name: ray
  type: net.minecraft.world.phys.HitResult
  description: The result of the projectile's collision, containing information about where and how the projectile hit the target.
- name: projectile
  type: net.minecraft.world.entity.projectile.Projectile
  description: The projectile entity that caused the impact.
```

**Methods**:
```yaml
- name: getRayTraceResult
  signature: public net.minecraft.world.phys.HitResult getRayTraceResult()
  description: Returns the HitResult object representing where the projectile hit.
- name: getProjectile
  signature: public net.minecraft.world.entity.projectile.Projectile getProjectile()
  description: Returns the projectile entity that caused the impact.
- name: isCanceled
  signature: public boolean isCanceled()
  description: Checks if the event has been canceled, preventing the projectile from processing the impact.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, which can be used to prevent the projectile from processing the impact.
```

**Example**:
```java
@SubscribeEvent
public void onProjectileImpact(ProjectileImpactEvent event) {
    if (event.isCanceled()) return;
    // Check if the projectile hit a block
    if (event.getRayTraceResult().getType() == HitResult.Type.BLOCK) {
        // Handle block impact, e.g. create explosion or apply damage
        // You can cancel the event to prevent the projectile from stopping
        // event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/ProjectileImpactEvent.java`

### RegisterBrewingRecipesEvent *(Common)*

**When**: The event fires on both client and server side, on the main event bus, when registering new brewing recipes.

**Cancellable**: No

**Fields**:
```yaml
- name: builder
  type: PotionBrewing.Builder
  description: The builder used to register new brewing recipes. Modders can use this to add custom brewing recipes.
- name: registryAccess
  type: RegistryAccess
  description: The registry access used for the current world. Provides access to various registries needed for recipe registration.
```

**Methods**:
```yaml
- name: getBuilder
  signature: public PotionBrewing.Builder getBuilder()
  description: Returns the PotionBrew,ing.Builder instance used to register brewing recipes.
- name: getRegistryAccess
  signature: public RegistryAccess getRegistryAccess()
  description: Returns the RegistryAccess instance for the current world, allowing access to various registries.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterBrewingRecipes(RegisterBrewingRecipesEvent event) {
    event.getBuilder().register((potion, ingredient) -> {
        // Register custom brewing recipe here
    });
    event.getRegistryAccess(); // Access registry access if needed
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/brewing/RegisterBrewingRecipesEvent.java`

### RegisterCommandsEvent *(Common)*

**When**: This event fires when the Commands class in constructed, specifically when ReloadableServerResources is recreated, allowing modders to register commands at this stage.

**Cancellable**: No

**Fields**:
```yaml
- name: dispatcher
  type: CommandDispatcher<CommandSourceStack>
  description: The command dispatcher used to register commands that will be executed on the client.
- name: environment
  type: Commands.CommandSelection
  description: The environment the command is being registered for, indicating whether it's for the server or client.
- name: context
  type: CommandBuildContext
  description: The context used to build the commands, providing access to the command registry and other command-related data.
```

**Methods**:
```yaml
- name: getDispatcher
  signature: public CommandDispatcher<CommandSourceStack> getDispatcher()
  description: Returns the command dispatcher for registering commands to be executed on the client.
- name: getCommandSelection
  signature: public Commands.CommandSelection getCommandSelection()
  description: Returns the environment the command is being registered for, indicating whether it's for the server or client.
- name: getBuildContext
  signature: public CommandBuildContext getBuildContext()
  description: Returns the context used to build the commands, providing access to the command registry and other command-related data.
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

*Source*: `src/main/java/net/neoforged/neoforge/event/RegisterCommandsEvent.java`

### RegisterGameTestsEvent *(Common)*

**When**: This event fires during client or server startup when game tests are being registered, specifically in the RegistryDataLoader#load method if gametest mode is enabled.

**Cancellable**: No

**Fields**:
```yaml
- name: environmentsRegistry
  type: WritableRegistry<TestEnvironmentDefinition>
  description: The registry used to register test environments, allowing modders to define custom test environments.
- name: testsRegistry
  type: WritableRegistry<GameTestInstance>
  description: The registry used to register game tests, allowing modders to define custom test instances.
```

**Methods**:
```yaml
- name: registerEnvironment
  signature: Holder<TestEnvironmentDefinition> registerEnvironment(ResourceLocation name, TestEnvironmentDefinition... definitions)
  description: Registers a new test environment with the given name and definitions. Returns a Holder for the registered environment.
- name: registerEnvironment
  signature: Holder<TestEnvironmentDefinition> registerEnvironment(ResourceLocation name, TestEnvironmentDefinition definition)
  description: Registers a single test environment with the given name and definition. Returns a Holder for the registered environment.
- name: registerTest
  signature: void registerTest(ResourceLocation name, Function<TestData<Holder<TestEnvironmentDefinition>>, GameTestInstance> factory, TestData<Holder<TestEnvironmentDefinition>> testData)
  description: Registers a new game test with the given name, using a factory function to create the test instance from test data.
- name: registerTest
  signature: void registerTest(ResourceLocation name, GameTestInstance test)
  description: Registers a pre-created game test instance with the given name.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLLoadEvent;
import net.neoforged.neoforge.event.RegisterGameTestsEvent;
import net.minecraft.core.Registry;
import net.minecraft.core.Registries;
import net.minecraft.core.WritableRegistry;
import net.minecraft.core.Holder;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.gametest.framework.GameTestInstance;
import net.minecraft.gametest.framework.TestEnvironmentDefinition;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegisterGameTests(RegisterGameTestsEvent event) {
        // Register a test environment
        Holder<TestEnvironmentDefinition> environment = event.registerEnvironment(new ResourceLocation("examplemod:testenv"), 
            new TestEnvironmentDefinition("examplemod:testenv", "Example Test Environment"));

        // Register a game test
        event.registerTest(new ResourceLocation("examplemod:mytest"), 
            new GameTestInstance("examplemod:mytest", environment, () -> {
                // Test logic here
                return true;
            }));
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/RegisterGameTestsEvent.java`

### RegisterSpawnPlacementsEvent *(Common)*

**When**: This event fires during the registration phase of entity spawn placements, allowing mods to register or modify spawn predicates for entities.

**Cancellable**: No

**Fields**:
```yaml
- name: map
  type: Map<EntityType<?>, MergedSpawnPredicate<?>>
  description: A map of entity types to their merged spawn predicates, used to register or modify spawn placement logic.
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
  description: Registers a spawn predicate with optional placement type and heightmap, only applicable with REPLACE operation.
- name: getSpawnType
  signature: public SpawnPlacementType getSpawnType()
  description: Returns the spawn placement type for the entity.
- name: getHeightmapType
  signature: public Heightmap.Types getHeightmapType()
  description: Returns the heightmap type for the entity.
- name: build
  signature: @ApiStatus.Internal public SpawnPlacements.SpawnPredicate<T> build()
  description: Compiles the merged spawn predicate logic for the entity.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterSpawnPlacements(RegisterSpawnPlacementsEvent event) {
    event.register(EntityType.PLAYER, (entityType, level, spawnType, pos, random) -> {
        // Custom spawn predicate logic here
        return true;
    }, Operation.OR);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/RegisterSpawnPlacementsEvent.java`

### RegisterStructureConversionsEvent *(Common)*

**When**: This event fires when a pre-1.18.2 world is being converted to the current version using the StructuresBecomeConfiguredFix, specifically when registering structure conversions for that conversion process.

**Cancellable**: No

**Fields**:
```yaml
- name: map
  type: Map<String, StructuresBecomeConfiguredFix.Conversion>
  description: A map of structure conversions that will be used during the world conversion process. Modders can register new conversions by calling the register method.
```

**Methods**:
```yaml
- name: register
  signature: public void register(String oldStructureID, StructuresBecomeConfiguredFix.Conversion conversion)
  description: Registers a structure conversion. This method allows modders to define how old structure IDs should be converted to new structure IDs, either as a trivial conversion or a biome-mapped conversion.
```

**Example**:
```java
@SubscribeEvent
public static void onRegisterStructureConversions(RegisterStructureConversionsEvent event) {
    event.register("example_structure_old",
        StructuresBecomeConfiguredFix.Conversion.biomeMapped(Map.of(
            List.of("minecraft:desert", "minecraft:jungle"), "examplemod:deserted_structure",
            List.of("minecraft:ocean"), "examplemod:flooded_structure"), "examplemod:structure")
    );
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/RegisterStructureConversionsEvent.java`

### Remove *(Common)*

**When**: This event is fired when a MobEffect is about to be removed from an Entity.

**Cancellable**: Yes

**Fields**:
```yaml
- name: effect
  type: Holder<MobEffect>
  description: The MobEffect which is being removed from the entity
- name: effectInstance
  type: MobEffectInstance
  description: The MobEffectInstance that was removed from the entity
```

**Methods**:
```yaml
- name: getEffect
  signature: public Holder<MobEffect> getEffect()
  description: Returns the MobEffect which is being removed from the entity
- name: getEffectInstance
  signature: public MobEffectInstance getEffectInstance()
  description: Returns the MobEffectInstance that was removed from the entity
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event, preventing the effect from being removed
- name: isCanceled
  signature: public boolean isCanceled()
  description: Returns whether the event has been canceled, preventing the effect from being removed
```

**Example**:
```java
@SubscribeEvent
public static void onMobEffectRemove(MobEffectEvent.Remove event) {
    if (!event.isCanceled()) {
        // Check which effect is being removed
        Holder<MobEffect> effect = event.getEffect();
        // Check if the effect instance exists
        MobEffectInstance effectInstance = event.getEffectInstance();
        // Cancel the effect removal if needed
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/MobEffectEvent.java`

### RightClickBlock *(Common)*

**When**: 2023-10-15T12:34:56.789Z

**Cancellable**: true

**Fields**:
```yaml
- name: getHand
  type: InteractionHand
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  type: ItemStack
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  type: BlockPos
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  type: Direction
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  type: Level
  description: Returns the level (world) of the interaction.
- name: getSide
  type: LogicalSide
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  type: void
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  type: void
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  type: LeftClickBlock.Action
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  type: void
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  type: void
  description: Sets whether the item should be used to interact with the block.
```

**Methods**:
```yaml
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  signature: public Direction getFace()
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) of the interaction.
- name: getSide
  signature: public LogicalSide getSide()
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  signature: public void setCancellationResult(InteractionResult result)
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  signature: public LeftClickBlock.Action getAction()
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  signature: public void setUseBlock(TriState triggerBlock)
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  signature: public void setUseItem(TriState triggerItem)
  description: Sets whether the item should be used to interact with the block.
```

**Example**:
```java
When a player left-clicks a block, the LeftClickBlock event is fired. You can use this event to modify the behavior of block interaction, such as preventing the block from being broken or changing how the item interacts with the block.
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerInteractEvent.java`

### RightClickItem *(Common)*

**When**: 2023-10-15T12:34:56.789Z

**Cancellable**: true

**Fields**:
```yaml
- name: getHand
  type: InteractionHand
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  type: ItemStack
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  type: BlockPos
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  type: Direction
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  type: Level
  description: Returns the level (world) of the interaction.
- name: getSide
  type: LogicalSide
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  type: void
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  type: void
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  type: LeftClickBlock.Action
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  type: void
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  type: void
  description: Sets whether the item should be used to interact with the block.
```

**Methods**:
```yaml
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand involved in the interaction. Will never be null.
- name: getItemStack
  signature: public ItemStack getItemStack()
  description: Returns the item stack involved in the interaction, ItemStack.EMPTY if the hand was empty.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position involved in the interaction. For block interactions, it's the block's position; for entity interactions, it's the entity's position; otherwise, it's the player's position.
- name: getFace
  signature: public Direction getFace()
  description: Returns the face involved in the interaction. For non-block interactions, this will return null.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) of the interaction.
- name: getSide
  signature: public LogicalSide getSide()
  description: Returns the logical side of the interaction (CLIENT or SERVER).
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Sets the canceled state of the event. This method is overridden in subclasses to handle cancellation logic.
- name: setCancellationResult
  signature: public void setCancellationResult(InteractionResult result)
  description: Sets the result to return to vanilla if the event is canceled.
- name: getAction
  signature: public LeftClickBlock.Action getAction()
  description: Returns the action type for the interaction (START, STOP, ABORT, CLIENT_HOLD).
- name: setUseBlock
  signature: public void setUseBlock(TriState triggerBlock)
  description: Sets whether the block should be attacked (used) in the interaction.
- name: setUseItem
  signature: public void setUseItem(TriState triggerItem)
  description: Sets whether the item should be used to interact with the block.
```

**Example**:
```java
When a player left-clicks a block, the LeftClickBlock event is fired. You can use this event to modify the behavior of block interaction, such as preventing the block from being broken or changing how the item interacts with the block.
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerInteractEvent.java`

### ServerChatEvent *(Common)*

**When**: The ServerChatEvent is fired whenever a ServerboundChatPacket is received from a client who has submitted their chat message.

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
@SubscribeEvent
public void onServerChat(ServerChatEvent event) {
    if (event.isCanceled()) return;
    ServerPlayer player = event.getPlayer();
    String username = event.getUsername();
    String rawText = event.getRawText();
    Component message = event.getMessage();
    // Modify the message before sending
    event.setMessage(Component.literal("Modified: " + rawText));
    // Or cancel the chat entirely
    // event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/ServerChatEvent.java`

### SpawnPlacementCheck *(Common)*

**When**: This event fires when Spawn Placements (aka Spawn Rules) are checked, before a mob attempts to spawn.

**Cancellable**: Yes

**Fields**:
```yaml
- name: entityType
  type: EntityType<?>
  description: The type of entity that checks are being performed for.
- name: level
  type: ServerLevelAccessor
  description: The level relating to the mob spawn action
- name: spawnType
  type: EntitySpawnReason
  description: The type of mob spawn that is happening.
- name: pos
  type: BlockPos
  description: The position where checks are being evaluated.
- name: random
  type: RandomSource
  description: The random source being used.
- name: defaultResult
  type: boolean
  description: The result of the vanilla spawn placement check.
- name: result
  type: Result
  description: The result of this event, which controls if the placement check will succeed.
```

**Methods**:
```yaml
- name: getEntityType
  signature: public EntityType<?> getEntityType()
  description: Returns the type of entity that checks are being performed for.
- name: getLevel
  signature: public ServerLevelAccessor getLevel()
  description: Returns the level relating to the mob spawn action.
- name: getSpawnType
  signature: public EntitySpawnReason getSpawnType()
  description: Retrieves the type of mob spawn that is happening.
- name: getPos
  signature: public BlockPos getPos()
  description: Returns the position where checks are being evaluated.
- name: getRandom
  signature: public RandomSource getRandom()
  description: Returns the random source being used.
- name: getDefaultResult
  signature: public boolean getDefaultResult()
  description: Returns the result of the vanilla spawn placement check.
- name: setResult
  signature: public void setResult(Result result)
  description: Changes the result of this event.
- name: getResult
  signature: public Result getResult()
  description: Returns the result of this event, which controls if the placement check will succeed.
- name: getPlacementCheckResult
  signature: public boolean getPlacementCheckResult()
  description: Returns if the placement check will succeed based on the current event result.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.entity.living.SpawnPlacementCheck;
import net.neoforged.neoforge.event.entity.living.SpawnPlacementCheck.Result;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.EntitySpawnReason;
import net.minecraft.world.level.ServerLevelAccessor;
import net.minecraft.core.BlockPos;
import net.minecraft.util.RandomSource;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSpawnPlacementCheck(SpawnPlacementCheck event) {
        // Example: Always allow spawning for a specific entity type
        if (event.getEntityType() == EntityType.PLAYER) {
            event.setResult(Result.SUCCEED);
        }
        // Example: Prevent spawning for a specific entity type
        else if (event.getEntityType() == EntityType.ZOMBIE) {
            event.setResult(Result.FAIL);
        }
        // Example: Allow spawning only if the default check passes
        else {
            event.setResult(Result.DEFAULT);
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/MobSpawnEvent.java`

### SpreadPlayersCommand *(Common)*

**When**: The SpreadPlayersCommand event is fired before a living entity is teleported as a result of the SpreadPlayersCommand command being executed.

**Cancellable**: Yes

**Fields**:
```yaml
- name: targetX
  type: double
  description: The X coordinate of the target teleportation position.
- name: targetY
  type: double
  description: The Y coordinate of the target teleportation position.
- name: targetZ
  type: double
  description: The Z coordinate of the target teleportation position.
```

**Methods**:
```yaml
- name: getTargetX
  signature: double getTargetX()
  description: Returns the X coordinate of the target teleportation position.
- name: setTargetX
  signature: void setTargetX(double targetX)
  description: Sets the X coordinate of the target teleportation position.
- name: getTargetY
  signature: double getTargetY()
  description: Returns the Y coordinate of the target teleportation position.
- name: setTargetY
  signature: void setTargetY(double targetY)
  description: Sets the Y coordinate of the target teleportation position.
- name: getTargetZ
  signature: double getTargetZ()
  description: Returns the Z coordinate of the target teleportation position.
- name: setTargetZ
  signature: void setTargetZ(double targetZ)
  description: Sets the Z coordinate of the target teleportation position.
- name: getTarget
  signature: Vec3 getTarget()
  description: Returns the target teleportation position as a Vec3 object.
- name: getPrevX
  signature: double getPrevX()
  description: Returns the X coordinate of the entity's previous position.
- name: getPrevY
  signature: double getPrevY()
  description: Returns the Y coordinate of the entity's previous position.
- name: getPrevZ
  signature: double getPrevZ()
  description: Returns the Z coordinate of the entity's previous position.
- name: getPrev
  signature: Vec3 getPrev()
  description: Returns the entity's previous position as a Vec3 object.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLLoadEvent;
import net.neoforged.neoforge.event.entity.EntityTeleportEvent;
import net.neoforged.neoforge.event.entity.EntityTeleportEvent.SpreadPlayersCommand;
import net.minecraft.world.entity.LivingEntity;

@Mod("examplemod")
public class ExampleMod {
    public ExampleMod() {
        NeoForge.EVENT_BUS.register(this);
    }

    @SubscribeEvent
    public void onSpreadPlayersCommand(SpreadPlayersCommand event) {
        LivingEntity entity = event.getEntity();
        double targetX = event.getTargetX();
        double targetY = event.getTargetY();
        double targetZ = event.getTargetZ();
        
        // Example: Cancel teleportation
        event.setCanceled(true);
        
        // Example: Modify target position
        event.setTargetX(targetX + 10);
        event.setTargetY(targetY + 10);
        event.setTargetZ(targetZ + 10);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityTeleportEvent.java`

### Start *(Common)*

**When**: The event fires before an explosion occurs in the level, allowing modders to intervene or modify explosion behavior before it is processed.

**Cancellable**: Yes

**Fields**:
```yaml
- name: level
  type: Level
  description: The Minecraft level (world) where the explosion is occurring.
- name: explosion
  type: ServerExplosion
  description: The explosion object containing details about the explosion's properties and state.
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the Minecraft level (world) where the explosion is occurring.
- name: getExplosion
  signature: public ServerExplosion getExplosion()
  description: Returns the explosion object containing details about the explosion's properties and state.
```

**Example**:
```java
@SubscribeEvent
public static void onExplosionStart(ExplosionEvent.Start event) {
    // Check if the explosion is canceled
    if (event.isCanceled()) {
        return;
    }

    // Modify explosion properties
    event.getExplosion().setExplosionPower(10.0F);
    
    // Cancel the explosion
    event.setCanceled(true);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/level/ExplosionEvent.java`

### Start *(Common)*

**When**: When a player starts 'using' an item, typically when they hold right mouse click.

**Cancellable**: Yes

**Fields**:
```yaml
- name: item
  type: ItemStack
  description: The item stack being used by the entity.
- name: hand
  type: InteractionHand
  description: The hand the entity is using the item in.
- name: duration
  type: int
  description: The duration of the item use in ticks.
```

**Methods**:
```yaml
- name: getItem
  signature: public ItemStack getItem()
  description: Returns the item stack being used by the entity.
- name: getDuration
  signature: public int getDuration()
  description: Returns the duration of the item use in ticks.
- name: setDuration
  signature: public void setDuration(int duration)
  description: Sets the duration of the item use in ticks.
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand the entity is using the item in.
```

**Example**:
```java
@Mod("modid")
public class ModEvents {
    @SubscribeEvent
    public void onItemUseStart(LivingEntityUseItemEvent.Start event) {
        LivingEntity entity = event.getEntity();
        ItemStack item = event.getItem();
        InteractionHand hand = event.getHand();
        int duration = event.getDuration();
        
        // Example: Cancel the event if the item is a specific one
        if (item.getItem() == ModItems.SPECIAL_ITEM.get()) {
            event.setDuration(0); // Stop the item use immediately
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingEntityUseItemEvent.java`

### StatAwardEvent *(Common)*

**When**: The event fires when a Player is awarded a Stat, specifically when the Player#awardStat(Stat, int) method is called.

**Cancellable**: Yes

**Fields**:
```yaml
- name: stat
  type: Stat<?>
  description: The Stat that is being awarded to the player
- name: value
  type: int
  description: The value to be awarded to the Stat
```

**Methods**:
```yaml
- name: getStat
  signature: public Stat<?> getStat()
  description: Returns the Stat that is being awarded
- name: setStat
  signature: public void setStat(Stat<?> stat)
  description: Replaces the Stat to be awarded
- name: getValue
  signature: public int getValue()
  description: Returns the current value to be awarded to the Stat
- name: setValue
  signature: public void setValue(int value)
  description: Replaces the value to be awarded
```

**Example**:
```java
@SubscribeEvent
public void onStatAward(StatAwardEvent event) {
    // Check if the event is cancelled
    if (event.isCanceled()) return;
    
    // Modify the stat being awarded
    event.setStat(event.getStat().withPrefix("Custom:"));
    
    // Modify the value being awarded
    event.setValue(event.getValue() * 2);
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/StatAwardEvent.java`

### Stop *(Common)*

**When**: When a player stops using an item before its duration completes, such as stopping eating, defending with a sword, or drawing a bow

**Cancellable**: Yes

**Fields**:
```yaml
- name: item
  type: ItemStack
  description: The item stack being used by the entity
- name: hand
  type: InteractionHand
  description: The hand in which the entity is using the item
- name: duration
  type: int
  description: The remaining duration of the item's use
```

**Methods**:
```yaml
- name: getItem
  signature: public ItemStack getItem()
  description: Returns the item stack being used by the entity
- name: getDuration
  signature: public int getDuration()
  description: Returns the remaining duration of the item's use
- name: setDuration
  signature: public void setDuration(int duration)
  description: Sets the remaining duration of the item's use
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand in which the entity is using the item
```

**Example**:
```java
@Mod("mymod")
public class MyMod {
    @SubscribeEvent
    public void onUseItemStop(LivingEntityUseItemEvent.Stop event) {
        // Cancel the event to prevent the item from being notified of the stop
        event.setCanceled(true);
        
        // Modify the remaining duration
        event.setDuration(0);
        
        // Get the item stack and hand
        ItemStack item = event.getItem();
        InteractionHand hand = event.getHand();
        
        // Example: Prevent bows from firing arrows when stopped prematurely
        if (item.getItem() instanceof BowItem) {
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingEntityUseItemEvent.java`

### SweepAttackEvent *(Common)*

**When**: The SweepAttackEvent is fired when a Player attacks a target, after the CriticalHitEvent has been fired.

**Cancellable**: Yes

**Fields**:
```yaml
- name: target
  type: Entity
  description: The entity that is being attacked by the player.
- name: isVanillaSweep
  type: boolean
  description: Indicates if the attack would cause a sweep based on vanilla rules.
- name: isSweeping
  type: boolean
  description: Indicates if the attack will trigger a sweep.
```

**Methods**:
```yaml
- name: getTarget
  signature: public Entity getTarget()
  description: Returns the target of the attack, which is guaranteed to be a valid attack target.
- name: isVanillaSweep
  signature: public boolean isVanillaSweep()
  description: Returns true if the attack would cause a sweep by utilizing the vanilla rules.
- name: isSweeping
  signature: public boolean isSweeping()
  description: Returns true if the attack will be trigger a sweep.
- name: setSweeping
  signature: public void setSweeping(boolean sweep)
  description: Sets whether the attack will trigger a sweep.
- name: setCanceled
  signature: public void setCanceled(boolean canceled)
  description: Cancels the event, preventing further event handlers from acting. Canceling the event will use the current value of isSweeping().
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.entity.player.SweepAttackEvent;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.entity.Entity;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onSweepAttack(SweepAttackEvent event) {
        Player player = event.getPlayer();
        Entity target = event.getTarget();
        boolean isVanillaSweep = event.isVanillaSweep();
        boolean isSweeping = event.isSweeping();
        
        // Example: Prevent a sweep from occurring
        if (isVanillaSweep) {
            event.setSweeping(false);
            event.setCanceled(true);
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/SweepAttackEvent.java`

### TagsUpdatedEvent *(Common)*

**When**: Fires when tags are updated on either server or client, typically after datapack data is loaded or when tag data is received from the server.

**Cancellable**: No

**Fields**:
```yaml
- name: lookupProvider
  type: HolderLookup.Provider
  description: Provides access to the dynamic registries that have had their tags rebound.
- name: updateCause
  type: UpdateCause
  description: Indicates whether the tag update was caused by server data load or client receiving data from the server.
- name: integratedServer
  type: boolean
  description: Whether the update is from an integrated server connection (used for determining static data updates).
```

**Methods**:
```yaml
- name: getLookupProvider
  signature: HolderLookup.Provider getLookupProvider()
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
@Mod("modid")
public class ModEvents {
    @SubscribeEvent
    public void onTagsUpdated(TagsUpdatedEvent event) {
        if (event.getUpdateCause() == UpdateCause.SERVER_DATA_LOAD) {
            // Handle server-side tag updates
            HolderLookup.Provider provider = event.getLookupProvider();
            // Perform actions based on updated tags
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/TagsUpdatedEvent.java`

### TeleportCommand *(Common)*

**When**: The TeleportCommand event is fired before a living entity is teleported as a result of the /teleport command.

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
```

**Methods**:
```yaml
- name: getTargetX
  signature: double getTargetX()
  description: Returns the X coordinate of the target teleport destination.
- name: setTargetX
  signature: void setTargetX(double targetX)
  description: Sets the X coordinate of the target teleport destination.
- name: getTargetY
  signature: double getTargetY()
  description: Returns the Y coordinate of the target teleport destination.
- name: setTargetY
  signature: void setTargetY(double targetY)
  description: Sets the Y coordinate of the target teleport destination.
- name: getTargetZ
  signature: void getTargetZ()
  description: Returns the Z coordinate of the target teleport destination.
- name: setTargetZ
  signature: void setTargetZ(double targetZ)
  description: Sets the Z coordinate of the target teleport destination.
- name: getTarget
  signature: Vec3 getTarget()
  description: Returns the target teleport destination as a Vec3 object.
- name: getPrevX
  signature: double getPrevX()
  description: Returns the X coordinate of the entity's previous position.
- name: getPrevY
  signature: double getPrevY()
  description: Returns the Y coordinate of the entity's previous position.
- name: getPrevZ
  signature: double getPrevZ()
  description: Returns the Z coordinate of the entity's previous position.
- name: getPrev
  signature: Vec3 getPrev()
  description: Returns the entity's previous position as a Vec3 object.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;
import net.neoforged.neoforge.event.entity.EntityTeleportEvent;
import net.neoforged.neoforge.event.entity.EntityTeleportEvent.TeleportCommand;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.ServerPlayer;
import net.minecraft.world.phys.Vec3;

@Mod("examplemod")
public class ExampleMod {
    public ExampleMod() {
        NeoForge.EVENT_BUS.register(this);
    }

    @SubscribeEvent
    public void onTeleportCommand(EntityTeleportEvent.TeleportCommand event) {
        // Check if the event is canceled
        if (event.isCanceled()) return;
        
        // Get the entity being teleported
        LivingEntity entity = event.getEntity();
        
        // Get the target position
        Vec3 target = event.getTarget();
        
        // Modify the target position if needed
        event.setTargetX(target.x + 10);
        
        // Cancel the teleportation
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/EntityTeleportEvent.java`

### Tick *(Common)*

**When**: Fires every tick that a player is 'using' an item, such as when drawing a bow, eating food, or guarding with a sword.

**Cancellable**: Yes

**Fields**:
```yaml
- name: item
  type: ItemStack
  description: The item stack being used by the entity
- name: hand
  type: InteractionHand
  description: The hand the entity is using the item in
- name: duration
  type: int
  description: The remaining duration of the item use
```

**Methods**:
```yaml
- name: getItem
  signature: public ItemStack getItem()
  description: Returns the item stack being used by the entity
- name: getDuration
  signature: public int getDuration()
  description: Returns the remaining duration of the item use
- name: setDuration
  signature: public void setDuration(int duration)
  description: Sets the remaining duration of the item use
- name: getHand
  signature: public InteractionHand getHand()
  description: Returns the hand the entity is using the item in
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onUseItemTick(LivingEntityUseItemEvent.Tick event) {
        // Check if the entity is using an item
        if (event.getItem().isEmpty()) return;
        
        // Modify the duration to stop the item use
        event.setDuration(0);
        
        // Or cancel the event to prevent processing
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/living/LivingEntityUseItemEvent.java`

### UseItemOnBlockEvent *(Common)*

**When**: (summary failed: unhandled error)

**Cancellable**: (summary failed: unhandled error)

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
// Example generation failed for UseItemOnBlockEvent due to unhandled error.
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/UseItemOnBlockEvent.java`

### VanillaGameEvent *(Common)*

**When**: VanillaGameEvent is fired on the server whenever one of Vanilla's GameEvents occurs.

**Cancellable**: Yes

**Fields**:
```yaml
- name: level
  type: Level
  description: The level (world) where the GameEvent occurred.
- name: vanillaEvent
  type: Holder<GameEvent>
  description: The specific GameEvent that was triggered.
- name: position
  type: Vec3
  description: The position in the world where the event occurred.
- name: context
  type: GameEvent.Context
  description: Additional context information about the event, including the source entity.
```

**Methods**:
```yaml
- name: getLevel
  signature: public Level getLevel()
  description: Returns the level (world) where the GameEvent occurred.
- name: getCause
  signature: public @Nullable Entity getCause()
  description: Returns the entity that was the source or 'cause' of the GameEvent.
- name: getVanillaEvent
  signature: public Holder<GameEvent> getVanillaEvent()
  description: Returns the specific GameEvent that was triggered.
- name: getEventPosition
  signature: public Vec3 getEventPosition()
  description: Returns the position in the world where the event occurred.
- name: getContext
  signature: public GameEvent.Context getContext()
  description: Returns the context information about the event, including the source entity.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.VanillaGameEvent;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.gameevent.GameEvent;
import net.minecraft.world.phys.Vec3;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onVanillaGameEvent(VanillaGameEvent event) {
        // Check if event is cancelled
        if (event.isCanceled()) return;
        
        // Get level information
        Level level = event.getLevel();
        
        // Get the specific GameEvent
        GameEvent gameEvent = event.getVanillaEvent().value();
        
        // Get event position
        Vec3 position = event.getEventPosition();
        
        // Get source entity
        Entity cause = event.getCause();
        
        // Prevent Vanilla from posting the event to listeners
        event.setCanceled(true);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/VanillaGameEvent.java`

### VillagerTradesEvent *(Common)*

**When**: The VillagerTradesEvent is fired during the reload phase by TagsUpdatedEvent, specifically when gathering trade lists for each registered villager profession.

**Cancellable**: No

**Fields**:
```yaml
- name: trades
  type: Int2ObjectMap<List<ItemListing>>
  description: A map of trade levels (1-5) to lists of item listings representing the trades available for this profession.
- name: type
  type: ResourceKey<VillagerProfession>
  description: The ResourceKey identifying the villager profession this event is associated with.
- name: registries
  type: HolderLookup.Provider
  description: Provides access to the registries needed for resolving references in trade items.
```

**Methods**:
```yaml
- name: getTrades
  signature: public Int2ObjectMap<List<ItemListing>> getTrades()
  description: Returns the map of trade levels to item listings for this profession.
- name: getType
  signature: public ResourceKey<VillagerProfession> getType()
  description: Returns the ResourceKey identifying the villager profession.
- name: getRegistries
  signature: public HolderLookup.Provider getRegistries()
  description: Returns the registry provider used for resolving references in trade items.
```

**Example**:
```java
@SubscribeEvent
public void onVillagerTrades(VillagerTradesEvent event) {
    // Add a new trade to the profession's trade list
    event.getTrades().put(1, List.of(new BasicItemListing(/* trade details */)));
    // Access the profession type
    ResourceKey<VillagerProfession> professionType = event.getType();
    // Access registry provider
    HolderLookup.Provider registries = event.getRegistries();
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/village/VillagerTradesEvent.java`

### VillageSiegeEvent *(Common)*

**When**: The event fires just before a zombie siege finds a successful location in VillageSiege#tryToSetupSiege(ServerLevel), allowing mods to stop the siege.

**Cancellable**: Yes

**Fields**:
```yaml
- name: siege
  type: VillageSiege
  description: The VillageSiege instance associated with the event, providing access to siege-related data and operations.
- name: level
  type: Level
  description: The Level (world) where the village siege is occurring.
- name: player
  type: Player
  description: The Player entity that initiated or is involved in the siege.
- name: attemptedSpawnPos
  type: Vec3
  description: The position where the siege attempted to spawn, which can be modified or checked for validity.
```

**Methods**:
```yaml
- name: getSiege
  signature: public VillageSiege getSiege()
  description: Returns the VillageSiege instance associated with the event.
- name: getLevel
  signature: public Level getLevel()
  description: Returns the Level (world) where the village siege is occurring.
- name: getPlayer
  signature: public Player getPlayer()
  description: Returns the Player entity that initiated or is involved in the siege.
- name: getAttemptedSpawnPos
  signature: public Vec3 getAttemptedSpawnPos()
  description: Returns the position where the siege attempted to spawn.
```

**Example**:
```java
@SubscribeEvent
public void onVillageSiege(VillageSiegeEvent event) {
    if (event.isCanceled()) return;
    // Check if the attempted spawn position is valid
    if (event.getAttemptedSpawnPos().y < 0) {
        event.setCanceled(true);
        // Prevent the siege from occurring at invalid positions
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/village/VillageSiegeEvent.java`

### WandererTradesEvent *(Common)*

**When**: The WandererTradesEvent is fired during reload by TagsUpdatedEvent, specifically when gathering trade lists for the wandering merchant.

**Cancellable**: No

**Fields**:
```yaml
- name: buying
  type: List<ItemListing>
  description: List of trades the wandering merchant will buy from the player.
- name: buyingAmount
  type: int
  description: Number of trades the wandering merchant will select from the buying list.
- name: rare
  type: List<ItemListing>
  description: List of rare trades the wandering merchant will offer.
- name: rareAmount
  type: int
  description: Number of trades the wandering merchant will select from the rare list.
- name: generic
  type: List<ItemListing>
  description: List of generic trades the wandering merchant will offer.
- name: genericAmount
  type: int
  description: Number of trades the wandering merchant will select from the generic list.
- name: additionalTrades
  type: List<Pair<List<ItemListing>, Integer>>
  description: List of additional trades that can be added to the wandering merchant's offerings.
- name: registries
  type: HolderLookup.Provider
  description: Provider for registry lookups used in trade item definitions.
```

**Methods**:
```yaml
- name: getBuyingTrades
  signature: public List<ItemListing> getBuyingTrades()
  description: Returns the list of trades the wandering merchant will buy from the player.
- name: getBuyingAmount
  signature: public int getBuyingAmount()
  description: Returns the number of trades the wandering merchant will select from the buying list.
- name: setBuyingAmount
  signature: public void setBuyingAmount(int amount)
  description: Sets the number of trades the wandering merchant will select from the buying list.
- name: getRareTrades
  signature: public List<ItemListing> getRareTrades()
  description: Returns the list of rare trades the wandering merchant will offer.
- name: getRareAmount
  signature: public int getRareAmount()
  description: Returns the number of trades the wandering merchant will select from the rare list.
- name: setRareAmount
  signature: public void setRareAmount(int amount)
  description: Sets the number of trades the wandering merchant will select from the rare list.
- name: getGenericTrades
  signature: public List<ItemListing> getGenericTrades()
  description: Returns the list of generic trades the wandering merchant will offer.
- name: getGenericAmount
  signature: public int getGenericAmount()
  description: Returns the number of trades the wandering merchant will select from the generic list.
- name: setGenericAmount
  signature: public void setGenericAmount(int amount)
  description: Sets the number of trades the wandering merchant will select from the generic list.
- name: addTrades
  signature: public void addTrades(List<ItemListing> trades, int amount)
  description: Adds additional trades to the wandering merchant's offerings with a specified amount.
- name: getRegistries
  signature: public HolderLookup.Provider getRegistries()
  description: Returns the provider for registry lookups used in trade item definitions.
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.village.WandererTradesEvent;
import net.minecraft.world.entity.npc.VillagerTrades.ItemListing;
import net.neoforged.neoforge.common.BasicItemListing;
import java.util.List;
import java.util.Arrays;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onWandererTrades(WandererTradesEvent event) {
        // Add a new trade to the buying list
        event.getBuyingTrades().add(new BasicItemListing(Items.DIAMOND, 1, 10, 10));
        event.setBuyingAmount(2);
        
        // Add a new rare trade
        event.getRareTrades().add(new BasicItemListing(Items.EMERALD, 1, 10, 10));
        event.setRareAmount(1);
        
        // Add a new generic trade
        event.getGenericTrades().add(new BasicItemListing(Items.GOLD_INGOT, 1, 10, 10));
        event.setGenericAmount(1);
        
        // Add additional trades
        event.addTrades(Arrays.asList(new BasicItemListing(Items.REDSTONE, 1, 10, 10)), 1);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/village/WandererTradesEvent.java`

### XpChange *(Common)*

**When**: When the player's experience changes through the Player#giveExperiencePoints(int) method

**Cancellable**: Yes

**Fields**:
```yaml
- name: amount
  type: int
  description: The amount of experience points being added to the player
```

**Methods**:
```yaml
- name: getAmount
  signature: int getAmount()
  description: Returns the amount of experience points being added to the player
- name: setAmount
  signature: void setAmount(int amount)
  description: Sets the amount of experience points to be added to the player
```

**Example**:
```java
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.entity.player.XpChange;
import net.minecraft.world.entity.player.Player;

@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onXpChange(XpChange event) {
        // Modify the amount of experience points
        event.setAmount(100);
        
        // Check if the event is cancelled
        if (event.isCanceled()) {
            // Handle cancellation
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/event/entity/player/PlayerXpEvent.java`


## Fluids

### RegisterCauldronFluidContentEvent *(Common)*

**When**: This event fires during the mod's initialization phase, specifically when registering custom cauldron fluid content for modded cauldrons.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: register
  signature: public void register(Block block, Fluid fluid, int totalAmount, @Nullable IntegerProperty levelProperty)
  description: Registers a new cauldron with the specified fluid properties, allowing it to interact with the fluid handler capability.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterCauldronFluidContent(RegisterCauldronFluidContentEvent event) {
    event.register(
        MyModBlocks.MY_CAULDRON.get(),
        Fluids.WATER,
        1000,
        MyModBlocks.MY_CAULDRON.get().getBlockState().getBlock().getProperties().getOrDefault("level", null)
    );
}
```

*Source*: `src/main/java/net/neoforged/neoforge/fluids/RegisterCauldronFluidContentEvent.java`


## Network

### RegisterConfigurationTasksEvent *(Common)*

**When**: This event fires when the server configuration packet listener collects all the configuration tasks that should be run on the server to configure the client.

**Cancellable**: No

**Fields**:
```yaml
- name: configurationTasks
  type: Queue<ConfigurationTask>
  description: A queue of configuration tasks that have been registered with the event.
- name: listener
  type: ServerConfigurationPacketListener
  description: The server configuration packet listener associated with this event.
```

**Methods**:
```yaml
- name: register
  signature: public void register(ConfigurationTask task)
  description: Registers a configuration task to be run on the server.
- name: getConfigurationTasks
  signature: public Queue<ConfigurationTask> getConfigurationTasks()
  description: Returns a copy of the queue of configuration tasks that have been registered.
- name: getListener
  signature: public ServerConfigurationPacketListener getListener()
  description: Returns the server configuration packet listener associated with this event.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterConfigurationTasks(RegisterConfigurationTasksEvent event) {
    event.getListener().sendConfigurationPacket();
    event.register(new ConfigurationTask() {
        @Override
        public void run() {
            // Task logic here
        }
    });
}
```

*Source*: `src/main/java/net/neoforged/neoforge/network/event/RegisterConfigurationTasksEvent.java`

### RegisterPayloadHandlersEvent *(Common)*

**When**: When the NetworkRegistry is being set up during mod initialization

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: registrar
  signature: PayloadRegistrar registrar(String version)
  description: Creates and returns a new PayloadRegistrar instance for registering payloads with a specified network version.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterPayloadHandlers(RegisterPayloadHandlersEvent event) {
    event.registrar("1.0.0").register(
        PayloadType.codec(MyPayload.class, MyPayload::write, MyPayload::read)
    );
}
```

*Source*: `src/main/java/net/neoforged/neoforge/network/event/RegisterPayloadHandlersEvent.java`


## Registries

### DataMapsUpdatedEvent *(Common)*

**When**: The event fires when data maps of a registry have been synced to the client or reloaded on the server.

**Cancellable**: No

**Fields**:
```yaml
- name: registryAccess
  type: RegistryAccess
  description: Provides access to the registry access object which contains all registry data.
- name: registry
  type: Registry<?>
  description: The registry that had its data maps updated.
- name: cause
  type: UpdateCause
  description: The reason for the data map update (either CLIENT_SYNC or SERVER_RELOAD).
```

**Methods**:
```yaml
- name: getRegistries
  signature: public RegistryAccess getRegistries()
  description: Returns the registry access object.
- name: getRegistry
  signature: public Registry<?> getRegistry()
  description: Returns the registry that had its data maps updated.
- name: getRegistryKey
  signature: public ResourceKey<? extends Registry<?>> getRegistryKey()
  description: Returns the registry key of the updated registry.
- name: ifRegistry
  signature: public <T> void ifRegistry(ResourceKey<Registry<T>> type, Consumer<Registry<T>> consumer)
  description: Runs the consumer if the registry matches the given type.
- name: getCause
  signature: public UpdateCause getCause()
  description: Returns the reason for the data map update.
```

**Example**:
```java
@SubscribeEvent
public void onDataMapsUpdated(DataMapsUpdatedEvent event) {
    if (event.getCause() == UpdateCause.CLIENT_SYNC) {
        // Handle client sync logic
        RegistryAccess registryAccess = event.getRegistries();
        Registry<?> registry = event.getRegistry();
        // Use registryAccess and registry for post-processing or caching
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/registries/datamaps/DataMapsUpdatedEvent.java`

### ModifyRegistriesEvent *(Common)*

**When**: Fired during startup after builtin registries are constructed. For vanilla registries, this event is fired after vanilla entries are registered but before modded entries. For modded registries, this event is fired before any entry is registered.

**Cancellable**: No

**Fields**:
```yaml
# none detected
```

**Methods**:
```yaml
- name: getRegistries
  signature: public Iterable<? extends Registry<?>> getRegistries()
  description: Returns all builtin registries.
- name: getRegistry
  signature: public <T> Registry<T> getRegistry(ResourceKey<? extends Registry<T>> key)
  description: Retrieve a builtin registry by its key.
```

**Example**:
```java
@SubscribeEvent
public void onModifyRegistries(ModifyRegistriesEvent event) {
    // Get the registry for blocks
    Registry<Block> blockRegistry = event.getRegistry(BuiltInRegistries.BLOCK.key());
    
    // Register a callback to the block registry
    blockRegistry.callbacks().add((registry, key, value) -> {
        // Handle registry changes
    });
}
```

*Source*: `src/main/java/net/neoforged/neoforge/registries/ModifyRegistriesEvent.java`

### NewRegistryEvent *(Common)*

**When**: When new registries can be constructed and registered, typically during mod initialization to register built-in registries like those in BuiltInRegistries.

**Cancellable**: No

**Fields**:
```yaml
- name: registries
  type: List<Registry<?>>
  description: A list of registries that have been registered through the register method or created via the create method.
```

**Methods**:
```yaml
- name: create
  signature: public <T> Registry<T> create(RegistryBuilder<T> builder)
  description: Creates a registry using the provided builder and registers it. Returns the built registry.
- name: register
  signature: public <T> void register(Registry<T> registry)
  description: Registers an already-created registry. Allows storing registries in static final fields and registering them later.
- name: fill
  signature: void fill()
  description: Finalizes the registration process by freezing the root registry and registering all collected registries.
- name: registerToRootRegistry
  signature: private void registerToRootRegistry(Registry<?> registry)
  description: Registers the given registry to the root registry. Throws an exception if a duplicate registry is attempted.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onNewRegistryEvent(NewRegistryEvent event) {
        // Create a new registry and register it
        RegistryBuilder<ExampleItem> builder = new RegistryBuilder<>();
        builder.setRegistryName("example:item");
        builder.add(ExampleItem.INSTANCE);
        Registry<ExampleItem> registry = event.create(builder);
        
        // Alternatively, register an existing registry
        // event.register(registry);
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/registries/NewRegistryEvent.java`

### RegisterDataMapTypesEvent *(Common)*

**When**: This event fires during the mod loading phase, specifically when registering data map types for various registries.

**Cancellable**: No

**Fields**:
```yaml
- name: attachments
  type: Map<ResourceKey<Registry<?>>, Map<ResourceLocation, DataMapType<?, ?>>>
  description: A map of registry keys to data map types, used to register data map types for different registries.
```

**Methods**:
```yaml
- name: register
  signature: <T, R> void register(DataMapType<R, T> type)
  description: Registers a data map type for a specific registry. Throws exceptions if the type is already registered or if the registry is not synced but the data map is synced.
```

**Example**:
```java
@SubscribeEvent
public void onRegisterDataMapTypes(RegisterDataMapTypesEvent event) {
    event.register(new MyDataMapType<>());
}
```

*Source*: `src/main/java/net/neoforged/neoforge/registries/datamaps/RegisterDataMapTypesEvent.java`

### RegisterEvent *(Common)*

**When**: This event fires when a registry is ready to have modded objects registered, specifically for all built-in registries from vanilla and mods.

**Cancellable**: No

**Fields**:
```yaml
- name: registryKey
  type: ResourceKey<? extends Registry<?>>
  description: The registry key associated with this event, used to identify which registry this event is for.
- name: registry
  type: Registry<?>
  description: The actual registry object linked to this event, used for registering new entries.
```

**Methods**:
```yaml
- name: register
  signature: <T> void register(ResourceKey<? extends Registry<T>> registryKey, ResourceLocation name, Supplier<T> valueSupplier)
  description: Registers a value with the given name to the stored registry if the provided registry key matches this event's registry key.
- name: register
  signature: <T> void register(ResourceKey<? extends Registry<T>> registryKey, Consumer<RegisterHelper<T>> consumer)
  description: Calls the provided consumer with a register helper if the provided registry key matches this event's registry key.
- name: getRegistryKey
  signature: ResourceKey<? extends Registry<?>> getRegistryKey()
  description: Returns the registry key linked to this event.
- name: getRegistry
  signature: Registry<?> getRegistry()
  description: Returns the registry linked to this event.
- name: getRegistry
  signature: <T> @Nullable Registry<T> getRegistry(ResourceKey<? extends Registry<T>> key)
  description: Returns the registry typed to the given registry key if it matches the event's registry key, or null if it does not match.
```

**Example**:
```java
@Mod("examplemod")
public class ExampleMod {
    @SubscribeEvent
    public void onRegister(RegisterEvent event) {
        if (event.getRegistryKey().equals(BuiltInRegistries.ITEM.key())) {
            event.register(BuiltInRegistries.ITEM.key(), "example_item", () -> new ItemStack(Items.DIAMOND));
        }
    }
}
```

*Source*: `src/main/java/net/neoforged/neoforge/registries/RegisterEvent.java`
