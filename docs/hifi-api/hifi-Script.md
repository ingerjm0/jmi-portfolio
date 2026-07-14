---
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# High Fidelity API Reference

**Tools Used**: JavaScript, JSDoc, GitHub Pages, Markdown, HTML, CSS

---

<div style={{ display: 'flex' }}>

<nav style={{ flex: '1 0 275px' }}>
    <h3><a href="hifi-index.html">API Reference Home</a></h3>
    <h3>Namespaces</h3>
    <ul class="nav">
        <li><a href="hifi-Agent.html">Agent</a></li>
        <li><a href="hifi-AvatarBookmarks.html">AvatarBookmarks</a></li>
        <li><a href="hifi-console.html">console</a></li>
        <li><a href="hifi-Entities.html">Entities</a></li>
        <li><a href="hifi-EntityViewer.html">EntityViewer</a></li>
        <li><a href="hifi-MyAvatar.html">MyAvatar</a></li>
        <li><a href="hifi-Script.html">Script</a></li>
    </ul>
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

<h1 style={{ textAlign: 'center' , marginBottom: '10px' }}>Script</h1>

<div class="jumpTo"> • <a href="#properties">Properties</a> • <a href="#methods">Methods</a> • <a href="#signals">Signals</a> • <a href="#type-definitions">Type Definitions</a> • <a href="#method-details">Method Details</a> • <a href="#signal-details">Signal Details</a> • </div>

<section>
<article>
<div class="container-overview">
    <div>
        <p>The <code>Script</code> API provides facilities for working with scripts.</p>
        <p class='availableIn'><b>Supported Script Types:</b> Interface Scripts &bull; Client Entity Scripts &bull; Avatar Scripts &bull; Server Entity Scripts &bull; Assignment Client Scripts</p>
    </div>
</div>

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
    <td><span class="signature">context</span></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The context that the script is running in:</p>
        <ul>
            <li><code>"client"</code>: An Interface or avatar script.</li>
            <li><code>"entity_client"</code>: A client entity script.</li>
            <li><code>"entity_server"</code>: A server entity script.</li>
            <li><code>"agent"</code>: An assignment client script.</li>
        </ul>
        <p><em>Read-only.</em></p>
    </td>
</tr>
</tbody>
</table>

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
    <td><p><a href="#addeventhandler"><code>addEventHandler</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Adds a function to the list of functions called when an entity event occurs on a particular entity.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#callentityscriptmethod"><code>callEntityScriptMethod</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Calls a method in an entity script.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#clearinterval"><code>clearInterval</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Stops an interval timer set by <a href="#setinterval">setInterval</a>.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#cleartimeout"><code>clearTimeout</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Stops a timeout timer set by <a href="#settimeout">setTimeout</a>.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#getcontext"><code>getContext</code></a></p></td>
    <td><p>string</p></td>
    <td>
        <p>Gets the context that the script is running in: Interface/avatar, client entity, server entity, or assignment client.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#isagentscript"><code>isAgentScript</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether the script is running as an assignment client script.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#isclientscript"><code>isClientScript</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether the script is running as an Interface or avatar script.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#isdebugmode"><code>isDebugMode</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether the application was compiled as a debug build.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#isentityclientscript"><code>isEntityClientScript</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether the script is running as a client entity script.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#isentityscriptrunning"><code>isEntityScriptRunning</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether an entity has an entity script running.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#isentityserverscript"><code>isEntityServerScript</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether the script is running as a server entity script.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#print"><code>print</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Prints a message to the program log and emits <a href="#printedmessage">Script.printedMessage</a>.</p>
        <p>Alternatively, you can use <a href="hifi-global.html#print">print</a> or one of the <a href="console.html">console</a> API methods.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#removeeventhandler"><code>removeEventHandler</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Removes a function from the list of functions called when an entity event occurs on a particular entity.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#require"><code>require</code></a></p></td>
    <td><p>object | array</p></td>
    <td>
        <p>Provides access to methods or objects provided in an external JavaScript or JSON file.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#setinterval"><code>setInterval</code></a></p></td>
    <td><p>object</p></td>
    <td>
        <p>Calls a function repeatedly, at a set interval.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#settimeout"><code>setTimeout</code></a></p></td>
    <td><p>object</p></td>
    <td>
        <p>Calls a function once, after a delay.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#stop"><code>stop</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Stops and unloads the current script.</p>
        <p><strong>Warning:</strong> If an assignment client script, the script gets restarted after stopping.</p>
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
    <td><p><a href="#donerunning"><code>doneRunning</code></a></p></td>
    <td>
        <p>Triggered when the script has stopped.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#entityscriptpreloadfinished"><code>entityScriptPreloadFinished</code></a></p></td>
    <td>
        <p>Triggered when the script starts for the user. See also, <a href="hifi-Entities.html#preload">Entities.preload</a>.</p>
        <p class="availableIn"><strong>Supported Script Types:</strong> Client Entity Scripts &bull; Server Entity Scripts</p>
    </td>
</tr>
<tr>
    <td><p><a href="#errormessage"><code>errorMessage</code></a></p></td>
    <td>
        <p>Triggered when the script generates an error, <a href="console.html#error">console.error</a> or <a href="console.html#exception">console.exception</a> is called, or <a href="console.html#assert">console.assert</a> is called and fails.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#infomessage"><code>infoMessage</code></a></p></td>
    <td>
        <p>Triggered when the script generates an information message or <a href="console.html#info">console.info</a> is called.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#printedmessage"><code>printedMessage</code></a></p></td>
    <td>
        <p>Triggered when the script prints a message to the program log via <a href="hifi-global.html#print">print</a>, <a href="#print">Script.print</a>, <a href="console.html#log">console.log</a>, <a href="console.html#debug">console.debug</a>, <a href="console.html#group">console.group</a>, <a href="console.html#groupend">console.groupEnd</a>, <a href="console.html#time">console.time</a>, or <a href="console.html#timeend">console.timeEnd</a>.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#runningstatechanged"><code>runningStateChanged</code></a></p></td>
    <td>
        <p>Triggered when the running state of the script changes, e.g., from running to stopping.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#scriptending"><code>scriptEnding</code></a></p></td>
    <td>
        <p>Triggered when the script is stopping.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#unhandledexception"><code>unhandledException</code></a></p></td>
    <td>
        <p>Triggered when a script generates an unhandled exception.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#update"><code>update</code></a></p></td>
    <td>
        <p>Triggered frequently at a system-determined interval.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#warningmessage"><code>warningMessage</code></a></p></td>
    <td>
        <p>Triggered when the script generates a warning or <a href="console.html#warn">console.warn</a> is called.</p>
    </td>
</tr>
</tbody>
</table>

---

## Type Definitions

<table>
<thead>
<tr>
    <th><a id="entityevent" />
<div class="toc">

#### EntityEvent

</div>
        <p class="member"><span id=".EntityEvent" class="member">EntityEvent</span></p>
        <p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>The name of an entity event. When the entity event occurs, any function that hasbeen registered for that event via <a href="#addeventhandler">Script.addEventHandler</a> is called with parameters per the entity event. </p>     
        
<h3 class="subHeading">Properties</h3>

<table>
<thead>
<tr>
    <th>Event Name</th>
    <th>Entity Event</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>"enterEntity"</code></p></td>
    <td><p><a href="hifi-Entities.html#enterentity">Entities.enterEntity</a></p></td>
</tr>
<tr>
    <td><p><code>"leaveEntity"</code></p></td>
    <td><p><a href="hifi-Entities.html#leaveentity">Entities.leaveEntity</a></p></td>
</tr>
<tr>
    <td><p><code>"clickDownOnEntity"</code></p></td>
    <td><p><a href="hifi-Entities.html#clickdownonentity">Entities.clickDownOnEntity</a></p></td>
</tr>
<tr>
    <td><p><code>"clickReleaseOnEntity"</code></p></td>
    <td><p><a href="hifi-Entities.html#clickreleaseonentity">Entities.clickReleaseOnEntity</a></p></td>
</tr>
<tr>
    <td><p><code>"collisionWithEntity"</code></p></td>
    <td><p><a href="hifi-Entities.html#collisionwithentity">Entities.collisionWithEntity</a></p></td>
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
    <th><a id="addeventhandler" />
<div class="toc">

#### addEventHandler

</div>
        <p class="member"><span id=".addeventhandler" class="member"><span class="type-signature">(static) </span>addEventHandler<span class="member">( entityID, eventName, handler )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Adds a function to the list of functions called when an entity event occurs on a particular entity. </p>

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
        <p>The ID of the entity.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>eventName</code></p></td>
    <td class="type"><p><a href="#entityevent">Script.EntityEvent</a></p></td>
    <td class="description last">
        <p>The name of the entity event.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>handler</code></p></td>
    <td class="type"><p>function</p></td>
    <td class="description last">
        <p>The function to call when the entity event occurs on the entity. It can be either the name of a function or an in-line definition.</p>
    </td>
</tr>
</tbody>
</table>

<details>
<summary>Example: Report when a mouse press occurs on a particular entity</summary>

```
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});

function reportMousePress(entityID, event) {
    print("Mouse pressed on entity: " + JSON.stringify(event));
}

Script.addEventHandler(entityID, "mousePressOnEntity", reportMousePress);
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="callentityscriptmethod" />
<div class="toc">

#### callEntityScriptMethod

</div>
        <p class="member"><span id=".callEntityScriptMethod" class="member"><span class="type-signature">(static) </span>callEntityScriptMethod<span class="member">( entityID, methodName, parameters<span class="signature-attributes">opt</span>, remoteCallerID<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Calls a method in an entity script.</p>

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
        <p>The ID of the entity running the entity script.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>methodName</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The name of the method to call.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>parameters</code></p></td>
    <td class="type"><p>Array.&lt;string&gt;</p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>[]</p></td>
    <td class="description last">
        <p>The parameters to call the specified method with.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>remoteCallerID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>Uuid.NULL</p></td>
    <td class="description last">
        <p>An ID that identifies the caller.</p>
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
    <th><a id="clearinterval" />
<div class="toc">

#### clearInterval

</div>
        <p class="member"><span id=".clearinterval" class="member"><span class="type-signature">(static) </span>clearInterval<span class="member">( timer )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Stops an interval timer set by <a href="#setinterval">setInterval</a>.</p>

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
    <td class="name"><p><code>timer</code></p></td>
    <td class="type"><p>object</p></td>
    <td class="description last">
        <p>The interval timer to stop.</p>
    </td>
</tr>
</tbody>
</table>

<details>
<summary>Example: Stop an interval timer</summary>

```
// Print a message every second.
var timer = Script.setInterval(function () {
    print("Interval timer fired");
}, 1000);

// Stop the timer after 10 seconds.
Script.setTimeout(function () {
    print("Stop interval timer");
    Script.clearInterval(timer);
}, 10000);
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="cleartimeout" />
<div class="toc">

#### clearTimeout

</div>
        <p class="member"><span id=".cleartimeout" class="member"><span class="type-signature">(static) </span>clearTimeout<span class="member">( timer )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Stops a timeout timer set by <a href="#settimeout">setTimeout</a>. </p>

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
    <td class="name"><p><code>timer</code></p></td>
    <td class="type"><p>object</p></td>
    <td class="description last">
        <p>The timeout timer to stop.</p>
    </td>
</tr>
</tbody>
</table>

<details>
<summary>Example: Stop a timeout timer</summary>

```
// Print a message after two seconds.
var timer = Script.setTimeout(function () {
    print("Timer fired");
}, 2000);

// Uncomment the following line to stop the timer from firing.
//Script.clearTimeout(timer);
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getcontext" />
<div class="toc">

#### getContext

</div>
        <p class="member"><span id=".getContext" class="member"><span class="type-signature">(static) </span>getContext<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; string &rcub;</span></span></p>
        <p>Returns: The context that the script is running in:</p>
        <ul>
        <li><code>"client"</code>: An Interface or avatar script.</li>         <li><code>"entity_client"</code>: A client entity script.</li>         <li><code>"entity_server"</code>: A server entity script.</li>         <li><code>"agent"</code>: An assignment client script.</li>
        </ul>
</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the context that the script is running in: Interface/avatar, client entity, server entity, or assignment client.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="isagentscript" />
<div class="toc">

#### isAgentScript

</div>
        <p class="member"><span id=".isAgentscript" class="member"><span class="type-signature">(static) </span>isAgentScript<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub;</span></span></p>
        <p>Returns: <code>true</code> if the script is running as an assignment client script, <code>false</code> if it isn't.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether the script is running as an assignment client script.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="isclientscript" />
<div class="toc">

#### isClientScript

</div>
        <p class="member"><span id=".isClientscript" class="member"><span class="type-signature">(static) </span>isClientScript<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub;</span></span></p>
        <p>Returns: <code>true</code> if the script is running as an Interface or avatar script, <code>false</code> if it isn't.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether the script is running as an Interface or avatar script.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="isdebugmode" />
<div class="toc">

#### isDebugMode

</div>
        <p class="member"><span id=".isDebugMode" class="member"><span class="type-signature">(static) </span>isDebugMode<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub;</span></span></p>
        <p>Returns: <code>true</code> if the application was compiled as a debug build,     <code>false</code> if it was compiled as a release build.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether the application was compiled as a debug build.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="isentityclientscript" />
<div class="toc">

#### isEntityClientScript

</div>
        <p class="member"><span id=".isEntityClientscript" class="member"><span class="type-signature">(static) </span>isEntityClientScript<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub;</span></span></p>
        <p>Returns: <code>true</code> if the script is running as a client entity script,     <code>false</code> if it isn't.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether the script is running as a client entity script.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="isentityscriptrunning" />
<div class="toc">

#### isEntityScriptRunning

</div>
        <p class="member"><span id=".isEntityScriptRunning" class="member"><span class="type-signature">(static) </span>isEntityScriptRunning<span class="member">( entityID )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub;</span></span></p>
        <p>Returns: <code>true</code> if the entity has an entity script running, <code>false</code> if it doesn't.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether an entity has an entity script running.</p>

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
        <p>The ID of the entity.</p>
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
    <th><a id="isentityserverscript" />
<div class="toc">

#### isEntityServerScript

</div>
        <p class="member"><span id=".isEntityServerscript" class="member"><span class="type-signature">(static) </span>isEntityServerScript<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub;</span></span></p>
        <p>Returns: <code>true</code> if the script is running as a server entity script,     <code>false</code> if it isn't.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether the script is running as a server entity script.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="print" />
<div class="toc">

#### print

</div>
        <p class="member"><span id=".print" class="member"><span class="type-signature">(static) </span>print<span class="member">( message )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Prints a message to the program log and emits <a href="#printedmessage">Script.printedMessage</a>. </p>
        <p>Alternatively, you can use <a href="hifi-global.html#print">print</a> or one of the <a href="console.html">console</a> API methods.</p>

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
    <td class="name"><p><code>message</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The message to print.</p>
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
    <th><a id="removeeventhandler" />
<div class="toc">

#### removeEventHandler

</div>
        <p class="member"><span id=".removeeventhandler" class="member"><span class="type-signature">(static) </span>removeEventHandler<span class="member">( entityID, eventName, handler )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Removes a function from the list of functions called when an entity event occurs on a particular entity. </p>

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
        <p>The ID of the entity.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>eventName</code></p></td>
    <td class="type"><p><a href="#entityevent">Script.EntityEvent</a></p></td>
    <td class="description last">
        <p>The name of the entity event.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>handler</code></p></td>
    <td class="type"><p>function</p></td>
    <td class="description last">
        <p>The name of the function to no longer call when the entity event occurs on the entity.</p>
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
    <th><a id="require" />
<div class="toc">

#### require

</div>
        <p class="member"><span id=".require" class="member"><span class="type-signature">(static) </span>require<span class="member">( module )</span><span class="type-returns"> &rarr; &lcub; object | array &rcub;</span></span></p>
        <p>Returns: The value assigned to <code>module.exports</code> in the JavaScript file, or the value defined in the JSON file.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Provides access to methods or objects provided in an external JavaScript or JSON file.</p>

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
    <td class="name"><p><code>module</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The module to use. May be a JavaScript file, a JSON file, or the name of a system module such as <code>"appUi"</code> (i.e., the "appUi.js" system module JavaScript file).</p>
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
    <th><a id="setinterval" />
<div class="toc">

#### setInterval

</div>
        <p class="member"><span id=".setinterval" class="member"><span class="type-signature">(static) </span>setInterval<span class="member">( function, interval )</span><span class="type-returns"> &rarr; &lcub; object &rcub;</span></span></p>
        <p>Returns: A handle to the interval timer. This can be used in <a href="#clearinterval">Script.clearInterval</a>.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Calls a function repeatedly, at a set interval.</p>

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
    <td class="name"><p><code>function</code></p></td>
    <td class="type"><p>function</p></td>
    <td class="description last">
        <p>The function to call. This can be either the name of a function or an in-line definition.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>interval</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The interval at which to call the function, in ms.</p>
    </td>
</tr>
</tbody>
</table>

<details>
<summary>Example: Print a message every second</summary>

```
Script.setInterval(function () {
    print("Interval timer fired");
}, 1000);
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="settimeout" />
<div class="toc">

#### setTimeout

</div>
        <p class="member"><span id=".settimeout" class="member"><span class="type-signature">(static) </span>setTimeout<span class="member">( function, timeout )</span><span class="type-returns"> &rarr; &lcub; object &rcub;</span></span></p>
        <p>Returns: A handle to the timeout timer. This can be used in <a href="#cleartimeout">Script.clearTimeout</a>.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Calls a function once, after a delay.</p>

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
    <td class="name"><p><code>function</code></p></td>
    <td class="type"><p>function</p></td>
    <td class="description last">
        <p>The function to call. This can be either the name of a function or an in-line definition.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>timeout</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The delay after which to call the function, in ms.</p>
    </td>
</tr>
</tbody>
</table>

<details>
<summary>Example: Print a message once, after a second</summary>

```
Script.setTimeout(function () {
    print("Timeout timer fired");
}, 1000);
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="stop" />
<div class="toc">

#### stop

</div>
        <p class="member"><span id=".stop" class="member"><span class="type-signature">(static) </span>stop<span class="member">( marshal<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Stops and unloads the current script. </p>
        <p><strong>Warning:</strong> If an assignment client script, the script gets     restarted after stopping.</p>

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
    <td class="name"><p><code>marshal</code></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>false</p></td>
    <td class="description last">
        <p>Marshal. </p>
        <p class="important">Deprecated: This parameter is deprecated and will be removed.</p>
    </td>
</tr>
</tbody>
</table>

<details>
<summary>Example: Stop a script after 5s</summary>

```
Script.setInterval(function () {
    print("Hello");
}, 1000);

Script.setTimeout(function () {
    Script.stop(true);
}, 5000);
```

</details>
</td>
</tr>
</tbody>
</table>

---

## Signal Details

<table>
<thead>
<tr>
    <th><a id="donerunning" />
<div class="toc">

#### doneRunning

</div>
        <p class="member"><span id=".doneRunning" class="member">doneRunning( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script has stopped.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="entityscriptpreloadfinished" />
<div class="toc">

#### entityScriptPreloadFinished

</div>
        <p class="member"><span id=".entityScriptPreloadFinished" class="member">entityScriptPreloadFinished( entityID )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script starts for the user. See also, <a href="hifi-Entities.html#preload">Entities.preload</a>. </p>
        <p class="availableIn"><strong>Supported Script Types:</strong> Client Entity     Scripts &bull; Server Entity Scripts</p>

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
<summary>Example: Get the ID of the entity that a client entity script is     running in</summary>

```
var entityScript = function () {
    this.entityID = Uuid.NULL;
};

Script.entityScriptPreloadFinished.connect(function (entityID) {
    this.entityID = entityID;
    print("Entity ID: " + this.entityID);
});

var entityID = Entities.addEntity({
    type: "Box",
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
    <th><a id="errormessage" />
<div class="toc">

#### errorMessage

</div>
        <p class="member"><span id=".errorMessage" class="member">errorMessage( <span>message, </span> scriptName )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script generates an error, <a href="console.html#error">console.error</a> or <a href="console.html#exception">console.exception</a> is called, or     <a href="console.html#assert">console.assert</a> is called and fails. </p>

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
    <td class="name"><p><code>message</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The error message.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>scriptName</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the script that generated the error message.</p>
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
    <th><a id="infomessage" />
<div class="toc">

#### infoMessahe

</div>
        <p class="member"><span id=".infoMessage" class="member">infoMessage( <span>message, </span> scriptName )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script generates an information message or <a href="console.html#info">console.info</a> is called.</p>

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
    <td class="name"><p><code>message</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The information message.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>scriptName</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the script that generated the information message.                 </p>
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
    <th><a id="printedmessage" />
<div class="toc">

#### printedMessage

</div>
        <p class="member"><span id=".printedMessage" class="member">printedMessage( <span>message, </span> scriptName )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script prints a message to the program log via <a href="hifi-global.html#print">print</a>, <a href="#print">Script.print</a>, <a href="console.html#log">console.log</a>, <a href="console.html#debug">console.debug</a>, <a href="console.html#group">console.group</a>, <a href="console.html#groupend">console.groupEnd</a>, <a href="console.html#time">console.time</a>, or <a href="console.html#timeend">console.timeEnd</a>. </p>

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
    <td class="name"><p><code>message</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The message.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>scriptName</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the script that generated the message.</p>
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
    <th><a id="runningstatechanged" />
<div class="toc">

#### runningStateChanged

</div>
        <p class="member"><span id=".runningStatechanged" class="member">runningStateChanged( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the running state of the script changes, e.g., from running to     stopping.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="scriptending" />
<div class="toc">

#### scriptEnding

</div>
        <p class="member"><span id=".scriptEnding" class="member">scriptEnding( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script is stopping.</p>
<details>
<summary>Example: Report when a script is stopping</summary>

```
print("Script started");

Script.scriptEnding.connect(function () {
    print("Script ending");
});

Script.setTimeout(function () {
    print("Stopping script");
    Script.stop();
}, 1000);
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="unhandledexception" />
<div class="toc">

#### unhandledException

</div>
        <p class="member"><span id=".unhandledException" class="member">unhandledException( exception )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when a script generates an unhandled exception.</p>

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
    <td class="name"><p><code>exception</code></p></td>
    <td class="type"><p>object</p></td>
    <td class="description last">
        <p>The details of the exception.</p>
    </td>
</tr>
</tbody>
</table>

<details>
<summary>Example: Report the details of an unhandled exception</summary>

```
Script.unhandledException.connect(function (exception) {
    print("Unhandled exception: " + JSON.stringify(exception));
});
var properties = JSON.parse("{ x: 1"); // Invalid JSON string.
     
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="update" />
<div class="toc">

#### update

</div>
        <p class="member"><span id=".update" class="member">update( deltaTime )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered frequently at a system-determined interval.</p>

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
    <td class="name"><p><code>deltaTime</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The time since the last update, in s.</p>
    </td>
</tr>
</tbody>
</table>

<details>
<summary>Example: Report script update intervals</summary>

```
Script.update.connect(function (deltaTime) {
    print("Update: " + deltaTime);
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
    <th><a id="warningmessage" />
<div class="toc">

#### warningMessage

</div>
        <p class="member"><span id=".warningMessage" class="member">warningMessage( <span>message, </span> scriptName )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the script generates a warning or <a href="console.html#warn">console.warn</a> is called.</p>

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
    <td class="name"><p><code>message</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The warning message.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>scriptName</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the script that generated the warning message.</p>
    </td> 
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
