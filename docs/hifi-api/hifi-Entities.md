---
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# High Fidelity API Reference

**Tools Used**: JavaScript, JSDoc, GitHub Pages, Markdown, HTML, CSS

---

<div style={{ display: 'flex' }}>

<nav style={{ flex: '1 0 275px' }}>
    <h3><a href="hifi-index.html">API Reference Home</a></h3><h3>Namespaces</h3><ul class="nav"><li><a href="hifi-Agent.html">Agent</a></li>
    <li><a href="hifi-AvatarBookmarks.html">AvatarBookmarks</a></li>
    <li><a href="hifi-console.html">console</a></li>
    <li><a href="hifi-Entities.html">Entities</a></li>
    <li><a href="hifi-EntityViewer.html">EntityViewer</a></li>
    <li><a href="hifi-MyAvatar.html">MyAvatar</a></li>
    <li><a href="hifi-Script.html">Script</a></li></ul>
    <h3>Globals</h3>
    <ul>
        <li><a href="hifi-global.html#attachmentdata">AttachmentData</a></li>
        <li><a href="hifi-global.html#avatardata">AvatarData</a></li>
        <li><a href="hifi-global.html#collision">Collision</a></li>
        <li><a href="hifi-global.html#color">Color</a></li>
        <li><a href="hifi-global.html#mat4">Mat4</a></li>
        <li><a href="hifi-global.html#pointerevent">PointerEvent</a></li>
        <li><a href="hifi-global.html#quat">Quat</a></li>
        <li><a href="hifi-global.html#uuid">Uuid</a></li>
        <li><a href="hifi-global.html#webinputmode">WebInputMode</a></li>
    </ul>

<p><a href="../portfolio" class="button button--lg">Back to Portfolio</a></p>

</nav>

<div style={{ width: '75%' }}>

<h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Entities</h1>

<div class="jumpTo"> • <a href="#properties">Properties</a> • <a href="#methods">Methods</a> • <a href="#signals">Signals</a> • <a href="#type-definitions">Type Definitions</a> • <a href="#method-details">Method Details</a> • <a href="#signal-details">Signal Details</a> • </div>

<section>
    <article>
        <div class="container-overview">
            <div>
            <p>The <code>Entities</code> API provides facilities to create and interact with entities. Entities are 2D or 3D objects displayed in-world. Depending on their <a href="#entityhosttype">EntityHostType</a>, they may persist in the domain as "domain" entities, travel to different domains with a user as "avatar" entities, or be visible only to an individual user as "local" entities (a.k.a. "overlays").</p>

:::info

**Note**: For Interface, avatar, and client entity scripts, the entities available to scripts are those that Interface has displayed and so knows about. For assignment client scripts, the entities available are those that are "seen" by the <a href="hifi-EntityViewer.html">EntityViewer</a>. For entity server scripts, all entities are available.

:::

<h4>Entity Methods</h4>
<p>Some of the API's signals correspond to entity methods that are called, if present, in the entity being interacted with. The client or server entity script must expose them as a property. However, unlike <a href="#callentitymethod">Entities.callEntityMethod</a>, server entity scripts do not need to list them in an <code>remotelyCallable</code> property. The entity methods are called with parameters per their corresponding signal.</p>
</div>

<table>
<thead>
<tr>
    <th>Method Name</th>
    <th>Corresponding Signal</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>clickDownOnEntity</code></p></td>
    <td><p><a href="#clickdownonentity">Entities.clickDownOnEntity</a></p></td>
</tr>
<tr>
    <td><p><code>clickReleaseOnEntity</code></p></td>
    <td><p><a href="#clickreleaseonentity">Entities.clickReleaseOnEntity</a></p></td>
</tr>
<tr>
    <td><p><code>collisionWithEntity</code></p></td>
    <td><p><a href="#collisionwithentity">Entities.collisionWithEntity</a></p></td>
</tr>
<tr>
    <td><p><code>enterEntity</code></p></td>
    <td><p><a href="#enterentity">Entities.enterEntity</a></p></td>
</tr>
<tr>
    <td><p><code>leaveEntity</code></p></td>
    <td><p><a href="#leaveentity">Entities.leaveEntity</a></p></td>
</tr>
</tbody>
</table>

<p class='availableIn'><b>Supported Script Types:</b> Interface Scripts • Client Entity Scripts • Avatar Scripts • Server Entity Scripts • Assignment Client Scripts</p>

---
                
## Properties

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">keyboardFocusEntity</span></td>
    <td class="type">
        <p><a href="hifi-global.html#uuid">Uuid</a></p>
    </td>
    <td class="description last">
        <p>The <a href="#entityproperties-web">Web</a> entity that has keyboard focus. If no Web entity has keyboard focus, returns <code>null</code>; set to <code>null</code> or <a href="hifi-global.html#uuid">Uuid.NULL</a> to clear keyboard focus.</p>
    </td>
</tr>
</tbody>
</table>
</div>

---

## Methods

<table>
    <thead>
<tr>
        <th class="first">Name</th>
    <th class="type">Return Value</th>
    <th class="last">Summary</th>
        </tr>
    </thead>
    <tbody> 
<tr>
    <td><p class="signature"><a href="#addaction"><code>addAction</code></a></p></td>
    <td><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td>
        <p>Adds an action to an entity. An action is registered with the physics engine and is applied every physics simulation step.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#addentity"><code>addEntity</code></a></p></td>
    <td><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td>
        <p>Adds a new domain, avatar, or local entity.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#appendpoint"><code>appendPoint</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Appends a point to a <a href="#entityproperties-line">Line</a> entity.</p>
        <p class="important">Deprecated: This function is deprecated and will be removed. Use <a href="#entityproperties-polyline">PolyLine</a> entities instead.</p>
    </td>
            </tr>
<tr>
    <td><p class="signature"><a href="#callentityclientmethod"><code>callEntityClientMethod</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Calls a method in a specific user's client entity script from a server entity script. </p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#callentitymethod"><code>callEntityMethod</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Calls a method in a client entity script from an Interface, avatar, or client entity script, or calls a method in a server entity script from a server entity script. </p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#callentityservermethod"><code>callEntityServerMethod</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Calls a method in a server entity script from an Interface, avatar, or client entity script. </p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#cangetandsetprivateuserdata"><code>canGetAndSetPrivateUserData</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether or not the script can get and set the <code>privateUserData</code> property of entities.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#cloneentity"><code>cloneEntity</code></a></p></td>
    <td><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td>
        <p>Creates a clone of an entity. </p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#deleteaction"><code>deleteAction</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Deletes an action from an entity.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#deleteentity"><code>deleteEntity</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Deletes an entity.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#editentity"><code>editEntity</code></a></p></td>
    <td><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td>
        <p>Edits an entity, changing one or more of its property values.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#emitscriptevent"><code>emitScriptEvent</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Sends a message to a <a href="#entityproperties-web">Web</a> entity's HTML page.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#findclosestentity"><code>findClosestEntity</code></a></p></td>
    <td><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td>
        <p>Finds the domain or avatar entity with a position closest to a specified point and within a specified radius.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getactionarguments"><code>getActionArguments</code></a></p></td>
    <td><p><a href="#actionarguments">Entities.ActionArguments</a></p></td>
    <td>
        <p>Gets the arguments of an action.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getactionids"><code>getActionIDs</code></a></p></td>
    <td><p>Array.&lt;<a href="hifi-global.html#uuid">Uuid</a>&gt;</p></td>
    <td>
        <p>Gets the IDs of the actions that are associated with an entity.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getentityobject"><code>getEntityObject</code></a></p></td>
    <td><p>object</p></td>
    <td>
        <p>Gets an entity's script object.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getentityproperties"><code>getEntityProperties</code></a></p></td>
    <td><p><a href="#entityproperties">Entities.EntityProperties</a></p></td>
    <td>
        <p>Gets an entity's property values.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getentitytype"><code>getEntityType</code></a></p></td>
    <td><p><a href="#entitytype">Entities.EntityType</a></p></td>
    <td>
        <p>Gets an entity's type.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#reloadserverscripts"><code>reloadServerScripts</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Reloads an entity's server entity script such that the latest version re-downloaded.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#sendclickdownonentity"><code>sendClickDownOnEntity</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Emits a <a href="#clickdownonentity">clickDownOnEntity</a> event.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#sendclickreleaseonentity"><code>sendClickReleaseOnEntity</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Emits a <a href="#clickreleaseonentity">clickReleaseOnEntity</a> event.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#serversexist"><code>serversExist</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether servers exist for the client to send entity packets to, i.e., whether you are connected to a domain and its entity server is working.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#setpacketspersecond"><code>setPacketsPerSecond</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the maximum number of entity packets that the client can send per second.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#textsize"><code>textSize</code></a></p></td>
    <td><p><a href="hifi-global.html#size">Size</a></p></td>
    <td>
        <p>Calculates the size of some text in a <a href="#entityproperties-text">Text</a> entity. The entity need not be set visible.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#updateaction"><code>updateAction</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Updates an entity action.</p>
    </td>
</tr>
</tbody>
</table>

---

## Signals

<table>
<thead>
<tr>
    <th class="first">Name</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>       
<tr>
    <td><p class="signature"><a href="#addingentity"><code>addingEntity</code></a></p></td>
    <td>
        <p>Triggered when an entity is added to Interface's local in-memory tree of entities it knows about. This may occur when
entities are loaded upon visiting a domain, when the user rotates their view so that more entities become visible, and 
when any type of entity is created (e.g., by <a href="#addentity">addEntity</a>).</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#cangetandsetprivateuserdatachanged"><code>canGetAndSetPrivateUserDataChanged</code></a></p></td>
    <td>
        <p>Triggered when your ability to get and set private user data changes.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#clearingentities"><code>clearingEntities</code></a></p></td>
    <td>
        <p>Triggered when you disconnect from a domain, at which time Interface's local in-memory tree of entities that it knows about is cleared.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#clickdownonentity"><code>clickDownOnEntity</code></a></p></td>
    <td>
        <p>Triggered when a mouse button is clicked while the mouse cursor is on an entity. Note: Not triggered by controllers.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#clickreleaseonentity"><code>clickReleaseOnEntity</code></a></p></td>
    <td>
        <p>Triggered when a mouse button is released after clicking on an entity, even if the mouse cursor has moved off the entity. Note: Not triggered by controllers.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#collisionwithentity"><code>collisionWithEntity</code></a></p></td>
    <td>
        <p>Triggered on the client that is the physics simulation owner during the collision of two entities. Note: Isn't triggered for a collision with an avatar.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#deletingentity"><code>deletingEntity</code></a></p></td>
    <td>
        <p>Triggered when an entity is deleted.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#enterentity"><code>enterEntity</code></a></p></td>
    <td>
        <p>Triggered when an avatar enters an entity, but only if the entity has an entity method exposed for this event.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#leaveentity"><code>leaveEntity</code></a></p></td>
    <td>
        <p>Triggered when an avatar leaves an entity, but only if the entity has an entity method exposed for this event.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#preload"><code>preload</code></a></p></td>
    <td>
        <p>Triggered when the script starts for a user. See also, <a href="hifi-Script.html#entityscriptpreloadfinished">Script.entityScriptPreloadFinished</a>.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#unload"><code>unload</code></a></p></td>
    <td>
        <p>Triggered when the script terminates for a user.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#webeventreceived"><code>webEventReceived</code></a></p></td>
    <td>
        <p>Triggered when a script in a <a href="#entityproperties-web">Web</a> entity's HTML sends an event over the entity's HTML event bridge. </p>
    </td>
</tr>
</tbody>
</table>

---
        
## Type Definitions

<table>
<thead>
<tr>
    <th><a id="#actionarguments" />
<div class="toc">

#### ActionArguments

</div>
    <p class="member"><span id=".ActionArguments" class="member">ActionArguments</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Different entity action types have different arguments: some common to all actions (listed in the table) and some specific to each <a href="#actiontype">ActionType</a> (linked to below).</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">type</span></td>
    <td class="type">
        <p><a href="#actiontype">Entities.ActionType</a></p>
    </td>
    <td class="description last">
        <p>The type of action. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">tag</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>A string that a script can use for its own purposes.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">ttl</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>How long the action should exist, in seconds, before it is automatically deleted. A value of <code>0</code> means that the action should not be deleted.</p>
        <p><b>Default Value:</b> 0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">isMine</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the action was created during the current client session, <code>false</code> if it wasn't. <em>Read-only.</em></p>
        <p><b>Default Value:</b> true </p>
    </td>
</tr>
<tr>
    <td class="type"><p><span class="signature">::no-motion-state</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p>Is present with a value of <code>true</code> when the entity hasn't been registered with the physics engine yet (e.g., if the action hasn't been properly configured), otherwise the property is <code>undefined</code>. <em>Read-only.</em> </p>
    </td>
</tr>
<tr>
    <td><span class="signature">::active</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> when the action is modifying the entity's motion, <code>false</code> otherwise. Is present once the entity has been registered with the physics engine, otherwise the property is <code>undefined</code>. <em>Read-only.</em> </p>
    </td>
</tr>
<tr>
    <td><span class="signature">::motion-type</span></td>
    <td class="type">
        <p><a href="#physicsmotiontype">Entities.PhysicsMotionType</a></p>
    </td>
    <td class="description last">
        <p>How the entity moves with the action. Is present once the entity has been registered with the physics engine, otherwise the property is <code>undefined</code>. <em>Read-only.</em></p>
    </td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="actionarguments-offset" />
<div class="toc">

#### ActionArguments-Offset

</div>
    <p class="member"><span id=".ActionArguments-Offset" class="member">ActionArguments-Offset</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"offset"</code> <a href="#actiontype">ActionType</a> moves an entity so that it is a defined distance away from a target point. In addition to properties in <a href="#actionarguments">ActionArguments</a>, this type has the following properties:</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">pointToOffsetFrom</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The target point to offset the entity from.</p>
        <p><b>Default Value:</b> 0,0,0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">linearDistance</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The distance away from the target point to position the entity.</p>
        <p><b>Default Value:</b> 0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">linearTimeScale</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Controls how long it takes for the entity's position to catch up with the target offset. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p>
        <p><b>Default Value:</b> 34e+38 </p>
    </td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="actionarguments-slider" />
<div class="toc">

#### ActionArguments-Slider

</div>
    <p class="member"><span id=".ActionArguments-Slider" class="member">ActionArguments-Slider</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"slider"</code> <a href="#actiontype">ActionType</a> lets an entity slide and rotate along an axis, or connects two entities that slide and rotate along a shared axis. In addition to properties in <a href="#actionarguments">ActionArguments</a>, this type has the following properties:</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">point</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The local position of a point in the entity that slides along the axis.</p>
        <p><b>Default Value:</b> 0,0,0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">axis</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The axis of the entity that slides. Must be a non-zero vector.</p>
        <p><b>Default Value:</b> 1,0,0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">linearPosition</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The current linear offset the entity is from its initial point if the action involves 
    only one entity, otherwise the linear offset between the two entities' action points. <em>Read-only.</em></p>
        <p><b>Default Value:</b> 0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">angularPosition</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The current angular offset of the entity from its initial rotation if the action 
    involves only one entity, otherwise the angular offset between the two entities. In radians. <em>Read-only.</em></p>
        <p><b>Default Value:</b> 0 </p>
    </td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="actionarguments-traveloriented" />
<div class="toc">

#### ActionArguments-TravelOriented

</div>
    <p class="member"><span id=".ActionArguments-TravelOriented" class="member">ActionArguments-TravelOriented</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"travel-oriented"</code> <a href="#actiontype">ActionType</a> orients an entity to align with its direction of travel. In addition to properties in <a href="#actionarguments">ActionArguments</a>, this type has the following properties:</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">forward</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The axis of the entity to align with the entity's direction of travel.</p>
        <p><b>Default Value:</b> 0,0,0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">angularTimeScale</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Controls how long it takes for the entity's orientation to catch up with the direction of travel. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p>
        <p><b>Default Value:</b> 0.1 </p>
    </td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="actiontype" />
<div class="toc">

#### ActionType

</div>
    <p class="member"><span id=".ActionType" class="member">ActionType</span></p>
    <p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>An entity action may be one of the following types:</p>

<h3 class="subHeading">Properties</h3>

<table>
<thead>
<tr>
    <th>Value</th>
    <th>Type</th>
    <th>Description</th>
    <th>Arguments</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>"offset"</code></p></td>
    <td><p>Object action</p></td>
    <td><p>Moves an entity so that it is a defined distance away from a target point.</p></td>
    <td><p><a href="#actionarguments-offset">Entities.ActionArguments-Offset</a></p></td>
</tr>
    <tr>
        <td class="type"><p><code>"travel-oriented"</code></p></td>
    <td><p>Object action</p></td>
    <td><p>Orients an entity to align with its direction of travel.</p></td>
    <td class="type"><p><a href="#actionarguments-traveloriented">Entities.ActionArguments-TravelOriented</a></p></td>
</tr>
    <tr>
    <td><p><code>"slider"</code></p></td>
    <td><p>Object constraint</p></td>
    <td><p>Lets an entity slide and rotate along an axis, or connects two entities that slide and rotate along a shared axis.</p></td>
    <td><p><a href="#actionarguments-slider">ActionArguments-Slider</a></p></td>
</tr>
  </tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="ambientlight" />
<div class="toc">

#### AmbientLight

</div>
    <p class="member"><span id=".AmbientLight" class="member">AmbientLight</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Ambient light is defined by its intensity.</p>
    
<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">ambientIntensity</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The intensity of the light.</p>
        <p><b>Default Value:</b> 0.5 </p>
                </td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityhosttype" />
<div class="toc">

#### EntityHostType

</div>
    <p class="member"><span id=".EntityHostType" class="member">EntityHostType</span></p>
    <p>Type: string</p>
    </th>
        </tr>
    </thead>
    <tbody>
    <tr>
    <td>
        <p>How an entity is hosted and sent to others for display.</p>

<h3 class="subHeading">Properties</h3>

<table>
<thead>
<tr>
    <th>Value</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p class="signature"><code>"domain"</code></p></td>
    <td><p>Domain entities are stored on the domain, are visible to everyone, and are sent to everyone by the entity server.</p></td>
</tr>
<tr>
    <td><p class="signature"><code>"avatar"</code></p></td>
    <td><p>Avatar entities are stored on an Interface client, are visible to everyone, and are sent to everyone by the avatar mixer. They follow the client to each domain visited, displaying at the same domain coordinates unless parented to the client's avatar.</p></td>
</tr>
<tr>
    <td><p class="signature"><code>"local"</code></p></td>
    <td><p>Local entities are ephemeral &mdash; they aren't stored anywhere &mdash; and are visible only to the client. They follow the client to each domain visited, displaying at the same domain coordinates unless parented to the client's avatar. Additionally, local entities are always collisionless.</p></td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityproperties" />
<div class="toc">

#### EntityProperties

</div>
    <p class="member"><span id=".EntityProperties" class="member">EntityProperties</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Every <a href="#entitytype">EntityType</a> will have these properties, in addition to those properties specific to the type. </p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">id</span></td>
    <td class="type">
        <p><a href="hifi-global.html#uuid">Uuid</a></p>
    </td>
    <td class="description last">
        <p>The ID of the entity. <em>Read-only.</em> </p>
    </td>
</tr>
<tr>
    <td><span class="signature">name</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>A name for the entity. Need not be unique.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">type</span></td>
    <td class="type">
        <p><a href="#entitytype">Entities.EntityType</a></p>
    </td>
    <td class="description last">
        <p>The entity's type. You cannot change the type of an entity after it's created. <em>Read-only.</em></p>
    </td>
</tr>
<tr>
    <td><span class="signature">entityHostType</span></td>
    <td class="type">
        <p><a href="#entityhosttype">Entities.EntityHostType</a></p>
    </td>
    <td class="description last">
        <p>How the entity is hosted and sent to others for display. The value can only be set at entity creation by one of the <a href="#addentity">Entities.addEntity</a> methods. <em>Read-only.</em></p>
        <p><b>Default Value:</b> "domain" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">avatarEntity</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the entity is an <a href="#entityhosttype">avatar entity</a>, <code>false</code> if it isn't. The value is per the <code>entityHostType</code> property value, set at entity creation by one of the <a href="#addentity">Entities.addEntity</a> methods. <em>Read-only.</em></p>
        <p><b>Default Value:</b> false </p>
    </td>
</tr>
<tr>
    <td><span class="signature">localEntity</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the entity is a <a href="#entityhosttype">local entity</a>, <code>false</code> if it isn't. The value is per the <code>entityHostType</code> property value, set at entity creation by one of the <a href="#addentity">Entities.addEntity</a> methods. <em>Read-only.</em></p>
        <p><b>Default Value:</b> false </p>
    </td>
</tr>
<tr>
    <td><span class="signature">created</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The UTC date and time that the entity was created, in ISO 8601 format as <code>yyyy-MM-ddTHH:mm:ssZ</code>. <em>Read-only.</em> </p>
    </td>
</tr>
<tr>
    <td><span class="signature">age</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The age of the entity in seconds since it was created. <em>Read-only.</em> </p>
    </td>
</tr>
<tr>
    <td><span class="signature">ageAsText</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The age of the entity since it was created, formatted as <code>h hours m minutes s seconds</code>. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">lastEdited</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>When the entity was last edited, expressed as the number of microseconds since 1970-01-01T00:00:00 UTC. <em>Read-only.</em> </p>
    </td>
</tr>
<tr>
    <td><span class="signature">lastEditedBy</span></td>
    <td class="type">
        <p><a href="hifi-global.html#uuid">Uuid</a></p>
    </td>
    <td class="description last">
        <p>The session ID of the avatar or agent that most recently created or edited the entity.<em>Read-only.</em> </p>
    </td>
</tr>
<tr>
    <td><span class="signature">renderLayer</span></td>
    <td class="type">
        <p><a href="#renderlayer">Entities.RenderLayer</a></p>
    </td>
    <td class="description last">
        <p>The layer that the entity renders in.</p>
        <p><b>Default Value:</b> "world" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">position</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The position of the entity in world coordinates.</p>
        <p><b>Default Value:</b> 0,0,0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">rotation</span></td>
    <td class="type">
        <p><a href="hifi-global.html#quat">Quat</a></p>
    </td>
    <td class="description last">
        <p>The orientation of the entity in world coordinates.</p>
        <p><b>Default Value:</b> 0,0,0,1 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">collisionless</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the entity shouldn't collide, <code>false</code> if it 
    collides with items per its <code>collidesWith</code> property.</p>
        <p><b>Default Value:</b> false </p>
    </td>
</tr>
<tr>
    <td><span class="signature">collidesWith</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The types of items the entity should collide with, in text format.</p>
        <p><b>Default Value:</b> "static,dynamic,kinematic,myAvatar,otherAvatar," </p>
    </td>
</tr>
<tr>
    <td><span class="signature">dynamic</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the entity's movement is affected by collisions, <code>false</code> if it isn't.</p>
        <p><b>Default Value:</b> false </p>
    </td>
</tr>
<tr>
    <td><span class="signature">description</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>A description of the <code>href</code> property value.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">userData</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>Used to store extra data about the entity in JSON format.</p>
        <p><strong>Warning:</strong> Other apps may also use this property, so make sure you handle data stored by other apps: edit only your bit and leave the rest of the data intact. You can use <code>JSON.parse()</code> to parse the string into a JavaScript object which you can manipulate the properties of, and use <code>JSON.stringify()</code> to convert the object into a string to put back in the property.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">script</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The URL of the client entity script, if any, that is attached to the entity.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">serverScripts</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The URL of the server entity script, if any, that is attached to the entity.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">actionData</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>Base-64 encoded compressed dump of the actions associated with the entity. This property is typically not used in scripts directly; rather, functions that manipulate an entity's actions update it, e.g., <a href="#addaction">Entities.addAction</a>. The size of this property increases with the number of actions. Because this property value has to fit within a High Fidelity datagram packet, there is a limit to the number of actions that an entity can have; edits which would result in overflow are rejected. <em>Read-only.</em></p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">cloneable</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the domain or avatar entity can be cloned via <a href="#cloneentity">Entities.cloneEntity</a>, <code>false</code> if it can't be.</p>
        <p><b>Default Value:</b> false </p>
    </td>
</tr>
<tr>
    <td><span class="signature">cloneLimit</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The total number of clones of this entity that can exist in the domain at any given time.</p>
        <p><b>Default Value:</b> 0 </p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityproperties-light" />
<div class="toc">

#### EntityProperties-Light

</div>
    <p class="member"><span id=".EntityProperties-Light" class="member">EntityProperties-Light</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"Light"</code> <a href="#entitytype">EntityType</a> adds local lighting effects. In addition to properties in <a href="#entityproperties">EntityProperties</a>, this type has the following properties:</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">dimensions</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The dimensions of the entity. Surfaces outside these dimensions are not lit 
    by the light.</p>
        <p><b>Default Value:</b> 0.1,0.1,0.1 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">color</span></td>
    <td class="type">
        <p><a href="hifi-global.html#color">Color</a></p>
    </td>
    <td class="description last">
        <p>The color of the light emitted.</p>
        <p><b>Default Value:</b> 255,255,255 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">intensity</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The brightness of the light.</p>
        <p><b>Default Value:</b> 1 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">falloffRadius</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The distance from the light's center at which intensity is reduced by 25%.</p>
        <p><b>Default Value:</b> 0.1 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">isSpotlight</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the light is directional, emitting along the entity's
    local negative z-axis; <code>false</code> if the light is a point light which emanates in all directions.</p>
        <p><b>Default Value:</b> false </p>
                </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Create a spotlight pointing at the ground</summary>

```
Entities.addEntity({
    type: "Light",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -4 })),
    rotation: Quat.fromPitchYawRollDegrees(-75, 0, 0),
    dimensions: { x: 5, y: 5, z: 5 },
    intensity: 100,
    falloffRadius: 0.3,
    isSpotlight: true,
    lifetime: 300  // Delete after 5 minutes.
});
```

</details>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityproperties-line" />
<div class="toc">

#### EntityProperties-Line

</div>
    <p class="member"><span id=".EntityProperties-Line" class="member">EntityProperties-Line</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"Line"</code> <a href="#entitytype">EntityType</a> draws thin, straight lines between a sequence of two or more points. </p>
        <p class="important">Deprecated: Use <a href="#entityproperties-polyline">PolyLine</a> entities instead.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityproperties-model" />
<div class="toc">

#### EntityProperties-Model

</div>
    <p class="member"><span id=".EntityProperties-Model" class="member">EntityProperties-Model</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"Model"</code> <a href="#entitytype">EntityType</a> displays a glTF, FBX, or OBJ model. It has these properties in addition to those found in <a href="#entityproperties">EntityProperties</a>.</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">dimensions</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The dimensions of the entity. </p>
        <p><b>Default Value:</b> 0.1,0.1,0.1 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">modelURL</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The URL of the glTF, FBX, or OBJ model. glTF models may be in JSON or binary format 
    (".gltf" or ".glb" URLs respectively). Baked models' URLs have ".baked" before the file type. Model files may also be 
    compressed in GZ format, in which case the URL ends in ".gz".</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">modelScale</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The scale factor applied to the model's dimensions.</p>
    <p class="important">Deprecated: This property is deprecated and will be removed. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">animation</span></td>
    <td class="type">
        <p><a href="#animationproperties">Entities.AnimationProperties</a></p>
    </td>
    <td class="description last">
        <p>An animation to play on the model. </p>
                </td>
</tr>
</tbody>
</table>

    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityproperties-polyline" />
<div class="toc">

#### EntityProperties-PolyLine

</div>
    <p class="member"><span id=".EntityProperties-PolyLine" class="member">EntityProperties-PolyLine</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"PolyLine"</code> <a href="#entitytype">EntityType</a> draws textured, straight lines between a sequence of points. In addition to properties in <a href="#entityproperties">EntityProperties</a>, this type has the following properties:</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">linePoints</span></td>
    <td class="type"><p>Array.&lt;<a href="hifi-global.html#vec3">Vec3</a>&gt;</p></td>
    <td class="description last">
        <p>The sequence of points to draw lines between. The values are relative to the entity's position. A maximum of 70 points can be specified.</p>
        <p><b>Default Value:</b> [] </p>
    </td>
</tr>
<tr>
    <td><span class="signature">strokeWidths</span></td>
    <td class="type"><p>Array.&lt;number&gt;</p></td>
    <td class="description last">
        <p>The widths, in m, of the line at the <code>linePoints</code>. Must be specified in order for the entity to render.</p>
        <p><b>Default Value:</b> [] </p>
    </td>
</tr>
<tr>
    <td><span class="signature">strokeColors</span></td>
    <td class="type"><p>Array.&lt;<a href="hifi-global.html#vec3">Vec3</a>&gt;</p></td>
    <td class="description last">
        <p>The base colors of each point, with values in the range <code>0.0,0.0,0.0</code> &ndash; <code>1.0,1.0,1.0</code>. These colors are multiplied with the color of the texture. If there are more line points than stroke colors, the <code>color</code> property value is used for the remaining points.</p>
        <p><strong>Warning:</strong> The ordinate values are in the range <code>0.0</code> &ndash; <code>1.0</code>.</p>
        <p><b>Default Value:</b> [] </p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Draw a textured "V"</summary>

```
var entity = Entities.addEntity({
    type: "PolyLine",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 })),
    rotation: MyAvatar.orientation,
    linePoints: [
        { x: -1, y: 0.5, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 0.5, z: 0 }
    ],
    strokeWidths: [ 0.1, 0.1, 0.1 ],
    lifetime: 300  // Delete after 5 minutes.
});
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityproperties-shape" />
<div class="toc">

#### EntityProperties-Shape

</div>
    <p class="member"><span id=".EntityProperties-Shape" class="member">EntityProperties-Shape</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"Shape"</code> <a href="#entitytype">EntityType</a> displays an entity of a specified <code>shape</code>. In addition to properties in <a href="#entityproperties">EntityProperties</a>, this type has the following properties:</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">shape</span></td>
    <td class="type">
        <p><a href="#shape">Entities.Shape</a></p>
    </td>
    <td class="description last">
        <p>The shape of the entity.</p>
        <p><b>Default Value:</b> "Sphere" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">dimensions</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The dimensions of the entity.</p>
        <p><b>Default Value:</b> 0.1,0.1,0.1 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">color</span></td>
    <td class="type">
        <p><a href="hifi-global.html#color">Color</a></p>
    </td>
    <td class="description last">
        <p>The color of the entity.</p>
        <p><b>Default Value:</b> 255,255,255 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">alpha</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The opacity of the entity, range <code>0.0</code> &ndash; <code>1.0</code>.</p>
        <p><b>Default Value:</b> 1 </p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Create a cylinder</summary>

```
var shape = Entities.addEntity({
    type: "Shape",
    shape: "Cylinder",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.4, y: 0.6, z: 0.4 },
    lifetime: 300  // Delete after 5 minutes.
});
```

</details>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityproperties-text" />
<div class="toc">

#### EntityProperties-Text

</div>
    <p class="member"><span id=".EntityProperties-Text" class="member">EntityProperties-Text</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"Text"</code> <a href="#entitytype">EntityType</a> displays a 2D rectangle of text in the domain.
In addition to properties in <a href="#entityproperties">EntityProperties</a>, this type has the following properties:</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">dimensions</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The dimensions of the entity.</p>
        <p><b>Default Value:</b> 0.1,0.1,0.01 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">text</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The text to display on the face of the entity. Text wraps if necessary to fit. New lines can be
    created using <code>\n</code>. Overflowing lines are not displayed.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">lineHeight</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The height of each line of text (thus determining the font size).</p>
        <p><b>Default Value:</b> 0.1 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">textColor</span></td>
    <td class="type">
        <p><a href="hifi-global.html#color">Color</a></p>
    </td>
    <td class="description last">
        <p>The color of the text.</p>
        <p><b>Default Value:</b> 255,255,255 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">backgroundColor</span></td>
    <td class="type">
        <p><a href="hifi-global.html#color">Color</a></p>
    </td>
    <td class="description last">
        <p>The color of the background rectangle.</p>
        <p><b>Default Value:</b> 0,0,0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">leftMargin</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The left margin, in meters.</p>
        <p><b>Default Value:</b> 0.0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">rightMargin</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The right margin, in meters.</p>
        <p><b>Default Value:</b> 0.0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">topMargin</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The top margin, in meters.</p>
        <p><b>Default Value:</b> 0.0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">bottomMargin</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The bottom margin, in meters.</p>
        <p><b>Default Value:</b> 0.0 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">font</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The font to render the text with. It can be one of the following: <code>"Courier"</code>,<code>"Inconsolata"</code>, <code>"Roboto"</code>, <code>"Timeless"</code>, or a path to a .sdff file.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Create a text entity</summary>

```
var text = Entities.addEntity({
    type: "Text",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.6, y: 0.3, z: 0.01 },
    lineHeight: 0.12,
    text: "Hello\nthere!",
    lifetime: 300  // Delete after 5 minutes.
});
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityproperties-web" />
<div class="toc">

#### EntityProperties-Web

</div>
    <p class="member"><span id=".EntityProperties-Web" class="member">EntityProperties-Web</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The <code>"Web"</code> <a href="#entitytype">EntityType</a> displays a browsable web page. Each user views their own copy of the web page: if one user navigates to another page on the entity, other users do not see the change; if a video is being  played, users don't see it in sync. In addition to properties in <a href="#entityproperties">EntityProperties</a>, this type has the following properties:</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">dimensions</span></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The dimensions of the entity.</p>
        <p><b>Default Value:</b> 0.1,0.1,0.01 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">sourceUrl</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The URL of the web page to display. This value does not change as you or others navigate on the Web entity.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">color</span></td>
    <td class="type">
        <p><a href="hifi-global.html#color">Color</a></p>
    </td>
    <td class="description last">
        <p>The color of the web surface. This color tints the web page displayed: the pixel colors on the web page are multiplied by the property color. For example, a value of  <code>&lcub; red: 255, green: 0, blue: 0 &rcub;</code> lets only the red channel of pixels' colors through.</p>
        <p><b>Default Value:</b> 255,255,255 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">dpi</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The resolution to display the page at, in dots per inch. If you convert this to dots per meter (multiply by 1 / 0.0254 = 39.3701) then multiply <code>dimensions.x</code> and <code>dimensions.y</code> by that value you get the resolution in pixels.</p>
        <p><b>Default Value:</b> 30 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">scriptURL</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The URL of a JavaScript file to inject into the web page.</p>
        <p><b>Default Value:</b> "" </p>
    </td>
</tr>
<tr>
    <td><span class="signature">maxFPS</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The maximum update rate for the web content, in frames/second.</p>
        <p><b>Default Value:</b> 10 </p>
    </td>
</tr>
<tr>
    <td><span class="signature">inputMode</span></td>
    <td class="type">
        <p><a href="hifi-global.html#webinputmode">WebInputMode</a></p>
    </td>
    <td class="description last">
        <p>The user input mode to use.</p>
        <p><b>Default Value:</b> "touch" </p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Create a Web entity displaying at 1920 x 1080 resolution</summary>

```
var METERS_TO_INCHES = 39.3701;
var entity = Entities.addEntity({
    type: "Web",
    sourceUrl: "https://highfidelity.com/",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -4 })),
    rotation: MyAvatar.orientation,
    dimensions: {
        x: 3,
        y: 3 * 1080 / 1920,
        z: 0.01
    },
    dpi: 1920 / (3 * METERS_TO_INCHES),
    lifetime: 300  // Delete after 5 minutes.
});
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entitypropertyinfo" />
<div class="toc">

#### EntityPropertyInfo

</div>
    <p class="member"><span id=".EntityPropertyInfo" class="member">EntityPropertyInfo</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Information about an entity property.</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">propertyEnum</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The internal number of the property. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">minimum</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The minimum numerical value the property may have, if available, otherwise <code>""</code>. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">maximum</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The maximum numerical value the property may have, if available, otherwise <code>""</code>.</p>
    </td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entitytype" />
<div class="toc">

#### EntityType

</div>
    <p class="member"><span id=".EntityType" class="member">EntityType</span></p>
    <p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>An entity may be one of the following types:</p>

<h3 class="subHeading">Properties</h3>

<table>
<thead>
<tr>
    <th>Value</th>
    <th>Description</th>
    <th>Properties</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>"Shape"</code></p></td>
    <td><p>A basic entity such as a cube.</p></td>
    <td><p><a href="#entityproperties-shape">EntityProperties-Shape</a></p></td>
</tr>
    <tr>
    <td><p><code>"Model"</code></p></td>
    <td><p>A mesh model from a glTF, FBX, or OBJ file.</p></td>
    <td><p><a href="#entityproperties-model">EntityProperties-Model</a></p></td>
</tr>
    <tr>
    <td><p><code>"Text"</code></p></td>
    <td><p>A pane of text oriented in space.</p></td>
    <td><p><a href="#entityproperties-text">EntityProperties-Text</a></p></td>
</tr>
    <tr>
    <td><p><code>"Web"</code></p></td>
    <td><p>A browsable web page.</p></td>
    <td><p><a href="#entityproperties-web">EntityProperties-Web</a></p></td>
</tr>
    <tr>
    <td><p><code>"Line"</code></p></td>
    <td><p>A sequence of one or more simple straight lines.</p></td>
    <td><p><a href="#entityproperties-line">EntityProperties-Line</a></p></td>
</tr>
    <tr>
    <td><p><code>"PolyLine"</code></p></td>
    <td><p>A sequence of one or more textured straight lines.</p></td>
    <td><p><a href="#entityproperties-polyline">EntityProperties-PolyLine</a></p></td>
</tr>
    <tr>
    <td><p><code>"Light"</code></p></td>
    <td><p>A local lighting effect.</p></td>
    <td><p><a href="#entityproperties-light">EntityProperties-Light</a></p></td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="physicsmotiontype" />
<div class="toc">

#### PhysicsMotionType

</div>
    <p class="member"><span id=".PhysicsMotionType" class="member">PhysicsMotionType</span></p>
    <p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>

<h3 class="subHeading">Properties</h3>

<table>
<thead>
<tr>
    <th>Value</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>"static"</code></p></td>
    <td><p>There is no motion because the entity is locked  &mdash; its <code>locked</code> property is set to <code>true</code>.</p></td>
</tr>
<tr>
    <td><p><code>"kinematic"</code></p></td>
    <td><p>Motion is applied without physical laws (e.g., damping) because the entity is not locked and has its <code>dynamic</code> property set to <code>false</code>.</p></td>
</tr>
<tr>
    <td><p><code>"dynamic"</code></p></td>
    <td><p>Motion is applied according to physical laws (e.g., damping) because the entity is not locked and has its <code>dynamic</code> property set to <code>true</code>.</p></td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="renderinfo" />
<div class="toc">

#### RenderInfo

</div>
    <p class="member"><span id=".RenderInfo" class="member">RenderInfo</span></p>
    <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Information on how an entity is rendered. Properties are only filled in for <code>Model</code> entities; other entity types have an empty object,  <code>&lcub;&rcub;</code>.</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th class="last">Summary</th>
</tr>
</thead>
<tbody>
<tr>
    <td><span class="signature">verticesCount</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The number of vertices in the entity. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">texturesCount</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The number of textures in the entity. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">texturesSize</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The total size of the textures in the entity, in bytes. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">hasTransparent</span></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if any of the textures has transparency, <code>false</code> if none of them do. </p>
    </td>
</tr>
<tr>
    <td><span class="signature">drawCalls</span></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The number of draw calls required to render the entity.</p>
    </td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="renderlayer" />
<div class="toc">

#### RenderLayer

</div>
    <p class="member"><span id=".RenderLayer" class="member">RenderLayer</span></p>
    <p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A layer in which an entity may be rendered.</p>

<h3 class="subHeading">Properties</h3>

<table>
<thead>
<tr>
    <th>Value</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>"world"</code></p></td>
    <td><p>The entity is drawn in the world with everything else.</p></td>
</tr>
    <tr>
    <td><p><code>"front"</code></p></td>
    <td><p>The entity is drawn on top of the world layer but behind the HUD surface.</p></td>
</tr>
    <tr>
    <td><p><code>"hud"</code></p></td>
    <td><p>The entity is drawn on top of other layers and the HUD surface.</p></td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="shape" />
<div class="toc">

#### Shape

</div>
    <p class="member"><span id=".Shape" class="member">Shape</span></p>
    <p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A <code>"Shape"</code> <a href="#entitytype">EntityType</a> may display as one of the following geometrical shapes.</p>

<h3 class="subHeading">Properties</h3>

<table>
<thead>
<tr>
    <th>Value</th>
    <th>Dimensions</th>
    <th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>"Circle"</code></p></td>
    <td><p>2D</p></td>
    <td><p>A circle oriented in 3D.</p></td>
</tr>
    <tr>
    <td><p><code>"Cone"</code></p></td>
    <td><p>3D</p></td>
    <td></td>
</tr>
    <tr>
    <td><p><code>"Cube"</code></p></td>
    <td><p>3D</p></td>
    <td></td>
</tr>
    <tr>
    <td><p><code>"Cylinder"</code></p></td>
    <td><p>3D</p></td>
    <td></td>
</tr>
    <tr>
    <td><p><code>"Dodecahedron"</code></p></td>
    <td><p>3D</p></td>
    <td></td>
</tr>
    <tr>
    <td><p><code>"Hexagon"</code></p></td>
    <td><p>3D</p></td>
    <td><p>A hexagonal prism.</p></td>
</tr>
    <tr>
    <td><p><code>"Icosahedron"</code></p></td>
    <td><p>3D</p></td>
    <td></td>
</tr>
    <tr>
    <td><p><code>"Octagon"</code></p></td>
    <td><p>3D</p></td>
    <td><p>An octagonal prism.</p></td>
</tr>
    <tr>
    <td><p><code>"Octahedron"</code></p></td>
    <td><p>3D</p></td>
    <td></td>
</tr>
    <tr>
    <td><p><code>"Quad"</code></p></td>
    <td><p>2D</p></td>
    <td><p>A square oriented in 3D.</p></td>
</tr>
    <tr>
    <td><p><code>"Sphere"</code></p></td>
    <td><p>3D</p></td>
    <td></td>
</tr>
    <tr>
    <td><p><code>"Tetrahedron"</code></p></td>
    <td><p>3D</p></td>
    <td></td>
</tr>
    <tr>
    <td><p><code>"Torus"</code></p></td>
    <td><p>3D</p></td>
    <td><p><em>Not implemented.</em></p></td>
</tr>
    <tr>
    <td><p><code>"Triangle"</code></p></td>
    <td><p>3D</p></td>
    <td><p>A triangular prism.</p></td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="texteffect" />
<div class="toc">

#### TextEffect

</div>
    <p class="member"><span id=".TextEffect" class="member">TextEffect</span></p>
    <p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A <a href="#entityproperties-text">Text</a> entity may use one of the following effects:</p>

<h3 class="subHeading">Properties</h3>

<table>
<thead>
<tr>
    <th>Value</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>"none"</code></p></td>
    <td><p>No effect.</p></td>
</tr>
    <tr>
    <td><p><code>"outline"</code></p></td>
    <td><p>An outline effect.</p></td>
</tr>
    <tr>
    <td><p><code>"outlineFill"</code></p></td>
    <td><p>An outline effect, with fill.</p></td>
</tr>
    <tr>
    <td><p><code>"shadow"</code></p></td>
    <td><p>A shadow effect.</p></td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

---

## Method Details

<table>
<thead>
<tr>
<th><a id="addaction" />
<div class="toc">

#### addAction

</div>
    <p class="member"><span id=".addAction" class="member"><span class="type-signature">(static) </span>addAction<span class="member">( actionType, entityID, arguments )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#uuid">Uuid</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The ID of the action if successfully added, otherwise <code>null</code>.</p>                   
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Adds an action to an entity. An action is registered with the physics engine and is applied every physics simulation step. Any entity may have more than one action associated with it, but only as many as will fit in an entity's <code><a href="#entityproperties">actionData</a></code> property.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>actionType</code></p></td>
    <td class="type">
        <p><a href="#actiontype">Entities.ActionType</a></p>
    </td>
    <td class="description last">
        <p>The type of action.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to add the action to.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>arguments</code></p></td>
    <td class="type">
        <p><a href="#actionarguments">Entities.ActionArguments</a></p>
    </td>
    <td class="description last">
        <p>Configures the action.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Constrain a cube to move along a vertical line</summary>

```
var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    dynamic: true,
    collisionless: false,
    lifetime: 300  // Delete after 5 minutes.
});

var actionID = Entities.addAction("slider", entityID, {
    axis: { x: 0, y: 1, z: 0 }
});
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="addentity" />
<div class="toc">

#### addEntity

</div>
    <p class="member"><span id=".addEntity" class="member"><span class="type-signature">(static) </span>addEntity<span class="member">( properties, entityHostType<span class="signature-attributes">opt</span> )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#uuid">Uuid</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The ID of the entity if successfully created, otherwise <a href="hifi-global.html#uuid">Uuid.NULL</a>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Adds a new domain, avatar, or local entity.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Attributes</th>
    <th>Default Value</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>properties</code></p></td>
    <td class="type">
        <p><a href="#entityproperties">Entities.EntityProperties</a></p>
    </td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The properties of the entity to create.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>entityHostType</code></p></td>
    <td class="type">
        <p><a href="#entityhosttype">Entities.EntityHostType</a></p>
    </td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>"domain"</p></td>
    <td class="description last">
        <p>The type of entity to create.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Create a box domain entity in front of your avatar</summary>

```
var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});
print("Entity created: " + entityID);
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="appendpoint" />
<div class="toc">

#### appendPoint

</div>
    <p class="member"><span id=".appendPoint" class="member"><span class="type-signature">(static) </span>appendPoint<span class="member">( entityID, point )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub;</span></span></p>
    <p>Returns: <code>true</code> if the point was added to the <a href="#entityproperties-line">Line</a> entity, otherwise <code>false</code>. </p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Appends a point to a <a href="#entityproperties-line">Line</a> entity.</p>
        <p class="important">Deprecated: This function is deprecated and will be removed. Use <a href="#entityproperties-polyline">PolyLine</a> 
    entities instead.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="callentityclientmethod" />
<div class="toc">

#### callEntityClientMethod

</div>
    <p class="member"><span id=".callEntityClientMethod" class="member"><span class="type-signature">(static) </span>callEntityClientMethod<span class="member">( clientSessionID, entityID, method, parameters<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Calls a method in a specific user's client entity script from a server entity script. The entity script method must be exposed as a property in the target client entity script. Additionally, the client entity script must include the method's name in an exposed property called <code>remotelyCallable</code> that is an array of method names that can be called.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Attributes</th>
    <th>Default Value</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>clientSessionID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The session ID of the user to call the method in.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The ID of the entity to call the method in.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>method</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The name of the method to call. The method is called with the entity ID as the first parameter and the <code>parameters</code> value as the second parameter.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>parameters</code></p></td>
    <td class="type"><p>Array.&lt;string&gt;</p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>[]</p></td>
    <td class="description last">
        <p>The additional parameters to call the specified method with.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Call a method in a client entity script from a server entity script</summary>

```
// Client entity script.
var clientEntityScript = (function () {
    this.entityMethod = function (id, params) {
        print("Method at client entity : " + id + " ; " + params[0] + ", " + params[1]);
    };
    this.remotelyCallable = [
        "entityMethod"
    ];
});

// Server entity script.
var serverEntityScript = (function () {
    var clientSessionID,
        clientEntityID;

    function callClientMethod() {
        // Server entity script call to client entity script.
        Entities.callEntityClientMethod(clientSessionID, clientEntityID, "entityMethod", ["hello", 12]);
    }

    // Obtain client entity details then call client entity method.
    this.entityMethod = function (id, params) {
        clientSessionID = params[0];
        clientEntityID = params[1];
        callClientMethod();
    };
    this.remotelyCallable = [
        "entityMethod"
    ];
});

// Entity that hosts the client entity script.
var clientEntityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -1, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    script: "(" + clientEntityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

// Entity that hosts the server entity script.
var serverEntityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 1, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    serverScripts: "(" + serverEntityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

// Interface script call to the server entity script.
Script.setTimeout(function () {
    Entities.callEntityServerMethod(serverEntityID, "entityMethod", [MyAvatar.sessionUUID, clientEntityID]);
}, 1000); // Wait for the entities to be created.
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="callentitymethod" />
<div class="toc">

#### callEntityMethod

</div>
    <p class="member"><span id=".callEntityMethod" class="member"><span class="type-signature">(static) </span>callEntityMethod<span class="member">( entityID, method, parameters<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Calls a method in a client entity script from an Interface, avatar, or client entity script, or calls a method in a server entity script from a server entity script. The entity script method must be exposed as a property in the target entity script. Additionally, if calling a server entity script, the server entity script must include the method's name in an exposed property called <code>remotelyCallable</code> that is an array of method names that can be called.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Attributes</th>
    <th>Default Value</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The ID of the entity to call the method in.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>method</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The name of the method to call. The method is called with the entity ID as the first parameter and the <code>parameters</code> value as the second parameter.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>parameters</code></p></td>
    <td class="type"><p>Array.&lt;string&gt;</p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>[]</p></td>
    <td class="description last">
        <p>The additional parameters to call the specified method with.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Call a method in a client entity script from an Interface script</summary>

```
// Client entity script.
var entityScript = (function () {
    this.entityMethod = function (id, params) {
        print("Method at entity : " + id + " ; " + params[0] + ", " + params[1]);
    };
});

// Entity that hosts the client entity script.
var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

// Interface script call to the client entity script.
Script.setTimeout(function () {
    Entities.callEntityMethod(entityID, "entityMethod", ["hello", 12]);
}, 1000); // Wait for the entity to be created.
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="callentityservermethod" />
<div class="toc">

#### callEntityServerMethod

</div>
    <p class="member"><span id=".callEntityServerMethod" class="member"><span class="type-signature">(static) </span>callEntityServerMethod<span class="member">( entityID, method, parameters<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Calls a method in a server entity script from an Interface, avatar, or client entity script. The server entity script method must be exposed as a property in the target server entity script. Additionally, the server entity script must include the method's name in an exposed property called <code>remotelyCallable</code> that is an array of method names that can be called.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Attributes</th>
    <th>Default Value</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The ID of the entity to call the method in.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>method</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The name of the method to call. The method is called with the entity ID as the first parameter and the <code>parameters</code> value as the second parameter.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>parameters</code></p></td>
    <td class="type"><p>Array.&lt;string&gt;</p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>[]</p></td>
    <td class="description last">
        <p>The additional parameters to call the specified method with.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Call a method in a server entity script from an Interface script</summary>

```
// Server entity script.
var entityScript = (function () {
    this.entityMethod = function (id, params) {
        print("Method at entity : " + id + " ; " + params[0] + ", " + params[1]); // In server log.
    };
    this.remotelyCallable = [
        "entityMethod"
    ];
});

// Entity that hosts the server entity script.
var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    serverScripts: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

// Interface script call to the server entity script.
Script.setTimeout(function () {
    Entities.callEntityServerMethod(entityID, "entityMethod", ["hello", 12]);
}, 1000); // Wait for the entity to be created.
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="cangetandsetprivateuserdata" />
<div class="toc">

#### canGetAndSetPrivateUserData

</div>
    <p class="member"><span id=".canGetAndSetPrivateUserData" class="member"><span class="type-signature">(static) </span>canGetAndSetPrivateUserData<span class="member">(  )</span><span class="type-returns"> &rarr; &lcub; boolean&nbsp;&rcub;</span></span></p>
    <p>Returns: <code>true</code> if the domain server will allow the script to get and set the <code>privateUserData</code> property of entities, otherwise <code>false</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether or not the script can get and set the <code>privateUserData</code> property of entities.</p>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="canreplacecontent" />
<div class="toc">

#### canReplaceContent

</div>
    <p class="member"><span id=".canReplaceContent" class="member"><span class="type-signature">(static) </span>canReplaceContent<span class="member">(  )</span><span class="type-returns"> &rarr; &lcub; boolean&nbsp;&rcub;</span></span></p>
    <p>Returns: <code>true</code> if the domain server will allow the script to replace the domain's content set, otherwise <code>false</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether or not the script can replace the domain's content set.</p>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="canwriteassets" />
<div class="toc">

#### canWriteAssets

</div>
    <p class="member"><span id=".canWriteAssets" class="member"><span class="type-signature">(static) </span>canWriteAssets<span class="member">(  )</span><span class="type-returns"> &rarr; &lcub; boolean&nbsp;&rcub;</span></span></p>
    <p>Returns: <code>true</code> if the domain server will allow the script to make changes to the asset server's assets, otherwise <code>false</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether or not the script can make changes to the asset server's assets.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="cloneentity" />
<div class="toc">

#### cloneEntity

</div>
    <p class="member"><span id=".cloneEntity" class="member"><span class="type-signature">(static) </span>cloneEntity<span class="member">( entityID )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#uuid">Uuid</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The ID of the new entity if successfully cloned, otherwise <a href="hifi-global.html#uuid">Uuid.NULL</a>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Creates a clone of an entity. The clone has the same properties as the original except that: it has a modified <code>name</code> property, clone-related properties are set per the original entity's clone-related <a href="#entityproperties">properties</a> (e.g., <code>cloneLifetime</code>), and its clone-related properties are set to their defaults.</p>
        <p>Domain entities must have their <code>cloneable</code> property value be <code>true</code> in order to be cloned. A domain entity can be cloned by a client that doesn't have rez permissions in the domain.</p>
        <p>Avatar entities must have their <code>cloneable</code> and <code>cloneAvatarEntity</code> property values be <code>true</code> in order to be cloned.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to clone.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="deleteaction" />
<div class="toc">

#### deleteAction

</div>
    <p class="member"><span id=".deleteAction" class="member"><span class="type-signature">(static) </span>deleteAction<span class="member">( entityID, actionID )</span><span class="type-returns"> &rarr; &lcub; boolean&nbsp;&rcub;</span></span></p>
    <p>Returns: <code>true</code> if the delete was successful, otherwise <code>false</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Deletes an action from an entity.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of entity to delete the action from.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>actionID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the action to delete.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="deleteentity" />
<div class="toc">

#### deleteEntity

</div>
    <p class="member"><span id=".deleteEntity" class="member"><span class="type-signature">(static) </span>deleteEntity<span class="member">( entityID )</span><span class="type-returns"></span></span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Deletes an entity.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to delete.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Delete an entity a few seconds after creating it</summary>

```
var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 }
});

Script.setTimeout(function () {
    Entities.deleteEntity(entityID);
}, 3000);
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="editentity" />
<div class="toc">

#### editEntity

</div>
    <p class="member"><span id=".editEntity" class="member"><span class="type-signature">(static) </span>editEntity<span class="member">( entityID, properties )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#uuid">Uuid</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The ID of the entity if the edit was successful, otherwise <code>null</code> or <a href="hifi-global.html#uuid">Uuid.NULL</a>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Edits an entity, changing one or more of its property values.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to edit.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>properties</code></p></td>
    <td class="type">
        <p><a href="#entityproperties">Entities.EntityProperties</a></p>
    </td>
    <td class="description last">
        <p>The new property values.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Change the color of an entity</summary>

```
var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});
var properties = Entities.getEntityProperties(entityID, ["color"]);
print("Entity color: " + JSON.stringify(properties.color));

Script.setTimeout(function () { // Wait for the entity to be created before editing.
    Entities.editEntity(entityID, {
        color: { red: 255, green: 0, blue: 0 }
    });
    properties = Entities.getEntityProperties(entityID, ["color"]);
    print("Entity color: " + JSON.stringify(properties.color));
}, 50);
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="emitscriptevent" />
<div class="toc">

#### emitScriptEvent

</div>
    <p class="member"><span id=".emitScriptEvent" class="member"><span class="type-signature">(static) </span>emitScriptEvent<span class="member">( entityID, message )</span><span class="type-returns"></span></span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p style={{ marginBottom:'10px' }}>Sends a message to a <a href="#entityproperties-web">Web</a> entity's HTML page. To receive the message, the web page's script must connect to the <code>EventBridge</code> that is automatically provided to the script:</p>
    
```
EventBridge.scriptEventReceived.connect(function(message) {
    ...
});
```

<p>Use <a href="#webeventreceived">Entities.webEventReceived</a> to receive messages from the Web entity's HTML page. Alternatively, use <a href="#getentityobject">Entities.getEntityObject</a> to exchange messages over a Web entity's HTML event bridge.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the Web entity to send the message to.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>message</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The message to send.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Exchange messages with a Web entity</summary>

```
// HTML file, name: "webEntity.html".
<!DOCTYPE html>
<html>
<head>
    <title>HELLO</title>
</head>
<body>
    <h1>HELLO</h1>
    <script>
        function onScriptEventReceived(message) {
            // Message received from the script.
            console.log("Message received: " + message);
        }

        EventBridge.scriptEventReceived.connect(onScriptEventReceived);

        setTimeout(function () {
            // Send a message to the script.
            EventBridge.emitWebEvent("hello");
        }, 5000);
    </script>
</body>
</html>

// Script file.
var webEntity = Entities.addEntity({
    type: "Web",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -3 })),
    rotation: MyAvatar.orientation,
    sourceUrl: Script.resolvePath("webEntity.html"),
    alpha: 1.0,
    lifetime: 300  // 5 min
});

function onWebEventReceived(entityID, message) {
    if (entityID === webEntity) {
        // Message received.
        print("Message received: " + message);

        // Send a message back.
        Entities.emitScriptEvent(webEntity, message + " back");
    }
}

Entities.webEventReceived.connect(onWebEventReceived);
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="findclosestentity" />
<div class="toc">

#### findClosestEntity

</div>
    <p class="member"><span id=".findClosestEntity" class="member"><span class="type-signature">(static) </span>findClosestEntity<span class="member">( center, radius )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#uuid">Uuid</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The ID of the entity that is closest to the <code>center</code> and within the <code>radius</code>, if
    there is one, otherwise <code>null</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Finds the domain or avatar entity with a position closest to a specified point and within a specified radius.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>center</code></p></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The point about which to search.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>radius</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The radius within which to search.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Find the closest entity within 10m of your avatar</summary>

```
var entityID = Entities.findClosestEntity(MyAvatar.position, 10);
print("Closest entity: " + entityID);
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="findentities" />
<div class="toc">

#### findEntities

</div>
    <p class="member"><span id=".findEntities" class="member"><span class="type-signature">(static) </span>findEntities<span class="member">( center, radius )</span><span class="type-returns"> &rarr; &lcub; Array.&lt;<a href="hifi-global.html#uuid">Uuid</a>&gt;&nbsp;&rcub;</span></span></p>
    <p>Returns: An array of entity IDs that intersect the search sphere. The array is empty if no entities could be 
    found.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Finds all domain and avatar entities that intersect a sphere.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>center</code></p></td>
    <td class="type">
        <p><a href="hifi-global.html#vec3">Vec3</a></p>
    </td>
    <td class="description last">
        <p>The point about which to search.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>radius</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The radius within which to search.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Report how many entities are within 10m of your avatar</summary>

```
var entityIDs = Entities.findEntities(MyAvatar.position, 10);
print("Number of entities within 10m: " + entityIDs.length);
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="getactionarguments" />
<div class="toc">

#### getActionArguments

</div>
    <p class="member"><span id=".getActionArguments" class="member"><span class="type-signature">(static) </span>getActionArguments<span class="member">( entityID, actionID )</span><span class="type-returns"> &rarr; &lcub; <a href="#actionarguments">Entities.ActionArguments</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The arguments of the action if found, otherwise an empty object.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the arguments of an action.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity with the action.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>actionID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the action to get the arguments of.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="getactionids" />
<div class="toc">

#### getActionIDs

</div>
    <p class="member"><span id=".getActionIDs" class="member"><span class="type-signature">(static) </span>getActionIDs<span class="member">( entityID )</span><span class="type-returns"> &rarr; &lcub; Array.&lt;<a href="hifi-global.html#uuid">Uuid</a>&gt;&nbsp;&rcub;</span></span></p>
    <p>Returns: The action IDs if any are found, otherwise an empty array.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the IDs of the actions that are associated with an entity.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The entity to get the action IDs for.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="getentityobject" />
<div class="toc">

#### getEntityObject

</div>
    <p class="member"><span id=".getEntityObject" class="member"><span class="type-signature">(static) </span>getEntityObject<span class="member">( id )</span><span class="type-returns"> &rarr; &lcub; object&nbsp;&rcub;</span></span></p>
    <p>Returns: The script object for the entity if found.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets an entity's script object. In particular, this is useful for accessing a <a href="#entityproperties-web">Web</a> entity's HTML <code>EventBridge</code> script object to exchange messages with the web page script.</p>
        <p style={{ marginBottom: '10px' }}>To send a message from an Interface script to a Web entity over its event bridge:</p>

```
var entityObject = Entities.getEntityObject(entityID);
entityObject.emitScriptEvent(message);
```

<p style={{ marginBottom: '10px' }}>To receive a message from a Web entity over its event bridge in an Interface script:</p>

```
var entityObject = Entities.getentityObject(entityID);
entityObject.webEventReceived.connect(function(message) {
    ...
};
```

<p>Alternatively, use <a href="#emitscriptevent">Entities.emitScriptEvent</a> and <a href="#webeventreceived">Entities.webEventReceived</a> to exchange
messages with a Web entity over its event bridge.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>id</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to get the script object for.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Exchange messages with a Web entity</summary>

```
// HTML file, name: "webEntity.html".
<!DOCTYPE html>
<html>
<head>
    <title>HELLO</title>
</head>
<body>
    <h1>HELLO</h1>
    <script>
        function onScriptEventReceived(message) {
            // Message received from the script.
            console.log("Message received: " + message);
        }
   
        EventBridge.scriptEventReceived.connect(onScriptEventReceived);
   
        setTimeout(function () {
            // Send a message to the script.
            EventBridge.emitWebEvent("hello");
        }, 5000);
    </script>
</body>
</html>

// Interface script file.
var webEntity = Entities.addEntity({
    type: "Web",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -3 })),
    rotation: MyAvatar.orientation,
    sourceUrl: Script.resolvePath("webEntity.html"),
    alpha: 1.0,
    lifetime: 300  // 5 min
});

var webEntityObject;

function onWebEventReceived(message) {
    // Message received.
    print("Message received: " + message);

    // Send a message back.
    webEntityObject.emitScriptEvent(message + " back");
}

Script.setTimeout(function () {
    webEntityObject = Entities.getEntityObject(webEntity);
    webEntityObject.webEventReceived.connect(onWebEventReceived);
}, 500);

Script.scriptEnding.connect(function () {
    Entities.deleteEntity(webEntity);
});
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="getentityproperties" />
<div class="toc">

#### getEntityProperties

</div>
    <p class="member"><span id=".getEntityProperties" class="member"><span class="type-signature">(static) </span>getEntityProperties<span class="member">( entityID, desiredProperties<span class="signature-attributes">opt</span> )</span><span class="type-returns"> &rarr;<br />&nbsp;&nbsp;&nbsp;&lcub; <a href="#entityproperties">Entities.EntityProperties</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The specified properties of the entity if the entity can be found, otherwise an empty object. If no properties are specified, then all properties are returned.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets an entity's property values.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Attributes</th>
    <th>Default Value</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The ID of the entity to get the properties of.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>desiredProperties</code></p></td>
    <td class="type"><p>string | Array.&lt;string&gt; </p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>[]</p></td>
    <td class="description last">
        <p>The name or names of the properties to get. For properties that are objects (e.g., the <code>"keyLight"</code> property), use the property and subproperty names in dot notation (e.g., <code>"keyLight.color"</code>).</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Report the color of a new box entity</summary>

```
var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});
var properties = Entities.getEntityProperties(entityID, ["color"]);
print("Entity color: " + JSON.stringify(properties.color));
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="getentitytype" />
<div class="toc">

#### getEntityType

</div>
    <p class="member"><span id=".getEntityType" class="member"><span class="type-signature">(static) </span>getEntityType<span class="member">( id )</span><span class="type-returns"> &rarr; &lcub; <a href="#entitytype">Entities.EntityType</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The type of the entity.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets an entity's type.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>id</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to get the type of.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="reloadserverscripts" />
<div class="toc">

#### reloadServerScripts

</div>
    <p class="member"><span id=".reloadServerScripts" class="member"><span class="type-signature">(static) </span>reloadServerScripts<span class="member">( entityID )</span><span class="type-returns"> &rarr; &lcub; boolean&nbsp;&rcub;</span></span></p>
    <p>Returns: <code>true</code> if the reload request was successfully sent to the server, otherwise <code>false</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Reloads an entity's server entity script such that the latest version re-downloaded.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to reload the server entity script of.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="sendclickdownonentity" />
<div class="toc">

#### sendClickDownOnEntity

</div>
    <p class="member"><span id=".sendClickDownonentity" class="member"><span class="type-signature">(static) </span>sendClickDownOnEntity<span class="member">( entityID, event )</span><span class="type-returns"></span></span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Emits a <a href="#clickdownonentity">clickDownOnEntity</a> event.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to emit the event for.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>event</code></p></td>
    <td class="type">
        <p><a href="hifi-global.html#pointerevent">PointerEvent</a></p>
    </td>
    <td class="description last">
        <p>The event details.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="sendclickreleaseonentity" />
<div class="toc">

#### sendClickReleaseOnEntity

</div>
    <p class="member"><span id=".sendClickReleaseonentity" class="member"><span class="type-signature">(static) </span>sendClickReleaseOnEntity<span class="member">( entityID, event )</span><span class="type-returns"></span></span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Emits a <a href="#clickreleaseonentity">clickReleaseOnEntity</a> event.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to emit the event for.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>event</code></p></td>
    <td class="type">
        <p><a href="hifi-global.html#pointerevent">PointerEvent</a></p>
    </td>
    <td class="description last">
        <p>The event details.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="serversexist" />
<div class="toc">

#### serversExist

</div>
    <p class="member"><span id=".serversExist" class="member"><span class="type-signature">(static) </span>serversExist<span class="member">(  )</span><span class="type-returns"> &rarr; &lcub; boolean&nbsp;&rcub;</span></span></p>
    <p>Returns: <code>true</code> if servers exist for the client to send entity packets to, otherwise <code>false</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether servers exist for the client to send entity packets to, i.e., whether you are connected to a domain and
its entity server is working.</p>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="setpacketspersecond" />
<div class="toc">

#### setPacketsPerSecond

</div>
    <p class="member"><span id=".setPacketsPerSecond" class="member"><span class="type-signature">(static) </span>setPacketsPerSecond<span class="member">( packetsPerSecond )</span><span class="type-returns"></span></span></p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the maximum number of entity packets that the client can send per second.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>packetsPerSecond</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Integer maximum number of entity packets that the client can send per second.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="textsize" />
<div class="toc">

#### textSize

</div>
    <p class="member"><span id=".textSize" class="member"><span class="type-signature">(static) </span>textSize<span class="member">( id, text )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#size">Size</a>&nbsp;&rcub;</span></span></p>
    <p>Returns: The size of the <code>text</code> in meters if the object is a text entity, otherwise
     <code>&lcub; height: 0, width : 0 &rcub;</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Calculates the size of some text in a <a href="#entityproperties-text">Text</a> entity. The entity need not be set visible.</p>
        <p><strong>Note:</strong> The size of text in a Text entity cannot be calculated immediately after the entity is created; a short delay is required while the entity finishes being created.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>id</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the Text entity to use for calculation.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>text</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The string to calculate the size of.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="updateaction" />
<div class="toc">

#### updateAction

</div>
    <p class="member"><span id=".updateAction" class="member"><span class="type-signature">(static) </span>updateAction<span class="member">( entityID, actionID, arguments )</span><span class="type-returns"> &rarr; &lcub; boolean&nbsp;&rcub;</span></span></p>
    <p>Returns: <code>true</code> if the update was successful, otherwise <code>false</code>.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Updates an entity action.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity with the action to update.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>actionID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the action to update.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>arguments</code></p></td>
    <td class="type">
        <p><a href="#actionarguments">Entities.ActionArguments</a></p>
    </td>
    <td class="description last">
        <p>The arguments to update.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

---

## Signal Details

            
<table>
<thead>
<tr>
<th><a id="addingentity" />
<div class="toc">

#### addingEntity

</div>
    <p class="member"><span id=".addingEntity" class="member">addingEntity( entityID )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when an entity is added to Interface's local in-memory tree of entities it knows about. This may occur when
entities are loaded upon visiting a domain, when the user rotates their view so that more entities become visible, and 
when any type of entity is created (e.g., by <a href="#addentity">addEntity</a>).</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity added.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Report when an entity is added</summary>

```
Entities.addingEntity.connect(function (entityID) {
    print("Added entity: " + entityID);
});
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="cangetandsetprivateuserdatachanged" />
<div class="toc">

#### canGetAndSetPrivateUserDataChanged

</div>
    <p class="member"><span id=".canGetAndSetPrivateUserDataChanged" class="member">canGetAndSetPrivateUserDataChanged( canGetAndSetPrivateUserData )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when your ability to get and set private user data changes.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>canGetAndSetPrivateUserData</code></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the script change the <code>privateUserData</code> 
    property of an entity, <code>false</code> if it can't.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="clearingentities" />
<div class="toc">

#### clearingEntities

</div>
    <p class="member"><span id=".clearingEntities" class="member">clearingEntities( )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when you disconnect from a domain, at which time Interface's local in-memory tree of entities that it knows 
about is cleared.</p>
<details>
    <summary>Example: Report when Interfaces's entity tree is cleared</summary>

```
Entities.clearingEntities.connect(function () {
    print("Entities cleared");
});
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="clickdownonentity" />
<div class="toc">

#### clickDownOnEntity

</div>
    <p class="member"><span id=".clickDownonentity" class="member">clickDownOnEntity( <span>entityID, </span>event )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when a mouse button is clicked while the mouse cursor is on an entity. Note: Not triggered by controllers.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity that was clicked on.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>event</code></p></td>
    <td class="type">
        <p><a href="hifi-global.html#pointerevent">PointerEvent</a></p>
    </td>
    <td class="description last">
        <p>Details of the event.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Compare clickDownOnEntity signal and entity script method</summary>

```
var entityScript = (function () {
    // Method is called for only this entity.
    this.clickDownOnEntity = function (entityID, event) {
        print("Entity : Clicked sphere ; " + event.type);
    };
});

var sphereID = Entities.addEntity({
    type: "Sphere",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

Entities.clickDownOnEntity.connect(function (entityID, event) {
    // Signal is triggered for all entities.
    if (entityID === sphereID) {
        print("Interface : Clicked sphere ; " + event.type);
    } else {
        print("Interface : Clicked another entity ; " + event.type);
    }
});
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="clickreleaseonentity" />
<div class="toc">

#### clickReleaseOnEntity

</div>
    <p class="member"><span id=".clickReleaseonentity" class="member">clickReleaseOnEntity( <span>entityID, </span>event )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when a mouse button is released after clicking on an entity, even if the mouse cursor has moved off the 
entity. Note: Not triggered by controllers.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity that was originally clicked.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>event</code></p></td>
    <td class="type">
        <p><a href="hifi-global.html#pointerevent">PointerEvent</a></p>
    </td>
    <td class="description last">
        <p>Details of the event.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="collisionwithentity" />
<div class="toc">

#### collisionWithEntity

</div>
    <p class="member"><span id=".collisionWithEntity" class="member">collisionWithEntity( <span>idA, </span><span>idB, </span>collision )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered on the client that is the physics simulation owner during the collision of two entities. Note: Isn't triggered
for a collision with an avatar.</p>
        <p>See also, <a href="hifi-Entities.html">Entity Methods</a> and <a href="hifi-Script.html#addeventhandler">Script.addEventHandler</a>.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>idA</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of one entity in the collision. For an entity script, this is the ID of the entity containing 
    the script.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>idB</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the other entity in the collision.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>collision</code></p></td>
    <td class="type">
        <p><a href="hifi-global.html#collision">Collision</a></p>
    </td>
    <td class="description last">
        <p>The details of the collision.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Change the color of an entity when it collides with another entity</summary>

```
var entityScript = (function () {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.collisionWithEntity = function (myID, otherID, collision) {
        Entities.editEntity(myID, {
            color: {
                red: randomInteger(128, 255),
                green: randomInteger(128, 255),
                blue: randomInteger(128, 255)
            }
        });
    };
});

var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    color: { red: 128, green: 128, blue: 128 },
    dynamic: true,
    collisionless: false,  // So that collision events are generated.
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="deletingentity" />
<div class="toc">

#### deletingEntity

</div>
    <p class="member"><span id=".deletingEntity" class="member">deletingEntity( entityID )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when an entity is deleted.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity deleted.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Report when an entity is deleted</summary>

```
Entities.deletingEntity.connect(function (entityID) {
    print("Deleted entity: " + entityID);
});
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="enterentity" />
<div class="toc">

#### enterEntity

</div>
    <p class="member"><span id=".enterEntity" class="member">enterEntity( entityID )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when an avatar enters an entity, but only if the entity has an entity method exposed for this event.</p>
        <p>See also, <a href="hifi-Entities.html">Entity Methods</a> and <a href="hifi-Script.html#addeventhandler">Script.addEventHandler</a>.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity that the avatar entered.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="leaveentity" />
<div class="toc">

#### leaveEntity

</div>
    <p class="member"><span id=".leaveEntity" class="member">leaveEntity( entityID )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when an avatar leaves an entity, but only if the entity has an entity method exposed for this event.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity that the avatar left.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="preload" />
<div class="toc">

#### preload

</div>
    <p class="member"><span id=".preload" class="member">preload( entityID )</span></p>
    <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script starts for a user. See also, <a href="hifi-Script.html#entityscriptpreloadfinished">Script.entityScriptPreloadFinished</a>.</p>
        <p>Note: Can only be connected to via <code>this.preload = function (...) &lcub; ... &rcub;</code> in the entity script.</p>
        <p class="availableIn"><strong>Supported Script Types:</strong> Client Entity Scripts &bull; Server Entity Scripts</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity that the script is running in.</p>
    </td>
</tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Get the ID of the entity that a client entity script is running in</summary>

```
var entityScript = (function () {
    this.entityID = Uuid.NULL;

    this.preload = function (entityID) {
        this.entityID = entityID;
        print("Entity ID: " + this.entityID);
    };
});

var entityID = Entities.addEntity({
    type: "Shape",
    shape: "cube",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    color: { red: 255, green: 0, blue: 0 },
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="unload" />
<div class="toc">

#### unload

</div>
<p id=".unload" class="member">unload( entityID )</p>
        <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script terminates for a user.</p>
        <p>Note: Can only be connected to via <code>this.unload = function () &lcub; ... &rcub;</code> in the entity script.</p>
        <p class="availableIn"><strong>Supported Script Types:</strong> Client Entity Scripts &bull; Server Entity Scripts</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity that the script is running in.</p>
    </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><a id="webeventreceived" />
<div class="toc">

#### webEventReceived

</div>
<p id=".webEventReceived" class="member">webEventReceived( <span>entityID, </span> message )</p>
        <p>Returns: Signal</p>          
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when a script in a <a href="#entityproperties-web">Web</a> entity's HTML sends an event over the entity's HTML event bridge. The HTML web page can send a message by calling <code>EventBridge.emitWebEvent(message);</code></p>
        <p>Use <a href="#emitscriptevent">Entities.emitScriptEvent</a> to send messages to the Web entity's HTML page. Alternatively, use <a href="#getentityobject">Entities.getEntityObject</a> to exchange messages over a Web entity's HTML event bridge.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>entityID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the Web entity that the message was received from.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>message</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last"><p>The message received.</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

</article>
</section>
   
</div>
</div>