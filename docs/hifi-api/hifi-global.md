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
        <li><a href="#attachmentdata">AttachmentData</a></li>
        <li><a href="#avatardata">AvatarData</a></li>
        <li><a href="#collision">Collision</a></li>
        <li><a href="#color">Color</a></li>
        <li><a href="#mat4">Mat4</a></li>
        <li><a href="#pointerevent">PointerEvent</a></li>
        <li><a href="#quat">Quat</a></li>
        <li><a href="#uuid">Uuid</a></li>
        <li><a href="#webinputmode">WebInputMode</a></li>
    </ul>

<p><a href="../portfolio" class="button button--lg">Back to Portfolio</a></p>

</nav>

<div style={{ width: '75%' }}>

<h1 style={{ textAlign: 'center' , marginBottom: '10px' }}>Globals</h1>

<div class="jumpTo"> • <a href="#methods">Methods</a> • <a href="#type-definitions">Type Definitions</a> • <a href="#method-details">Method Details</a> • </div>

<section>
<article>
    <div class="container-overview"></div>

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
    <td><p><a href="#print"><code>print</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Prints a message to the program log and emits <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged is the message values separated by spaces.</p>
        <p>Alternatively, you can use <a href="hifi-Script.html#print">Script.print</a> or one of the <a href="hifi-console.html">console</a> API methods.</p>
    </td>
</tr>
</tbody>
</table>

---

## Type Definitions

<table>
<thead>
<tr>
    <th><a id="attachmentdata" />
<div class="toc">

#### AttachmentData

</div>
    <p class="member"><span id="AttachmentData" class="member">AttachmentData</span></p><p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Information on an attachment worn by the avatar.</p>

<h3 class="subHeading">Properties</h3>

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
    <td><p><span class="signature">modelUrl</span></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The URL of the glTF, FBX, or OBJ model file. glTF models may be in JSON or binary format (".gltf" or ".glb" URLs respectively).</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">jointName</span></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint that the attachment is parented to.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">translation</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The offset from the joint that the attachment is positioned at.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">rotation</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The rotation applied to the model relative to the joint orientation.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">scale</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The scale applied to the attachment model.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">soft</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p>If <code>true</code> and the model has a skeleton, the bones of the attached model's skeleton are rotated to fit the avatar's current pose. If <code>true</code>, the <code>translation</code>, <code>rotation</code>, and <code>scale</code> parameters are ignored.</p>
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
    <th><a id="avatardata" />
<div class="toc">

#### AvatarData

</div>
    <p class="member"><span id="AvatarData" class="member">AvatarData</span></p><p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Information about an avatar.</p>

<h3 class="subHeading">Properties</h3>

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
    <td><p><span class="signature">position</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The avatar's position.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">scale</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The target scale of the avatar without any restrictions on permissible values imposed by the domain.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">handPosition</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>A user-defined hand position, in world coordinates. The position moves with the avatar but is otherwise not used or changed by Interface.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">orientation</span></p></td>
    <td class="type"><p><a href="#Quat">Quat</a></p></td>
    <td class="description last">
        <p>The orientation of the avatar's body.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">headOrientation</span></p></td>
    <td class="type"><p><a href="#Quat">Quat</a></p></td>
    <td class="description last">
        <p>The orientation of the avatar's head.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">headPitch</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The pitch of the avatar's head relative to the body, in degrees.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">headYaw</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The yaw of the avatar's head relative to the body, in degrees.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">headRoll</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The roll of the avatar's head relative to the body, in degrees.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">velocity</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The linear velocity of the avatar.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">sessionUUID</span></p></td>
    <td class="type"><p><a href="#Uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The avatar's session ID.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">displayName</span></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The avatar's display name.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">sessionDisplayName</span></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The avatar's display name, sanitized and versioned, as defined by the avatar mixer. It is unique among all avatars present in the domain at the time.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">attachmentData</span></p></td>
    <td class="type"><p>Array.&lt;<a href="#AttachmentData">AttachmentData</a>&gt;</p></td>
    <td class="description last">
        <p>Information on the avatar's attachments. </p> <p class="important">Deprecated: This property is deprecated and will be removed. Use avatar entities instead.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">jointNames</span></p></td>
    <td class="type"><p>Array.&lt;string&gt;</p></td>
    <td class="description last">
        <p>The list of joints in the current avatar model.</p>
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
    <th><a id="collision" />
<div class="toc">

#### Collision

</div>
    <p class="member"><span id="Collision" class="member">Collision</span></p><p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Details of a collision between avatars and entities.</p>

<h3 class="subHeading">Properties</h3>

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
    <td><p><span class="signature">idA</span></p></td>
    <td class="type"><p><a href="#Uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of one of the avatars or entities in the collision.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">idB</span></p></td>
    <td class="type"><p><a href="#Uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the other of the avatars or entities in the collision.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">penetration</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The amount of penetration between the two items.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">contactPoint</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The point of contact.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">velocityChange</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The change in relative velocity of the two items, in m/s.</p>
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
    <th><a id="color" />
<div class="toc">

#### Color

</div>
    <p class="member"><span id="Color" class="member">Color</span></p><p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A color vector. </p>

<h3 class="subHeading">Properties</h3>

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
    <td><p><span class="signature">red</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Red component value. Integer in the range <code>0</code> - <code>255</code>. Synonyms: <code>r</code>, <code>x</code>.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">green</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Green component value. Integer in the range <code>0</code> - <code>255</code>. Synonyms: <code>g</code>, <code>y</code>.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">blue</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Blue component value. Integer in the range <code>0</code> - <code>255</code>. Synonyms: <code>b</code>, <code>z</code>.</p>
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
    <th><a id="mat4" />
<div class="toc">

#### Mat4

</div>
    <p class="member"><span id="Mat4" class="member">Mat4</span></p><p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A 4 x 4 matrix, typically containing a scale, rotation, and translation transform. </p>

<h3 class="subHeading">Properties</h3>

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
    <td><p><span class="signature">r0c0</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 0, column 0 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r1c0</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 1, column 0 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r2c0</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 2, column 0 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r3c0</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 3, column 0 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r0c1</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 0, column 1 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r1c1</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 1, column 1 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r2c1</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 2, column 1 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r3c1</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 3, column 1 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r0c2</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 0, column 2 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r1c2</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 1, column 2 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r2c2</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 2, column 2 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r3c2</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 3, column 2 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r0c3</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 0, column 3 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r1c3</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 1, column 3 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r2c3</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 2, column 3 value.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">r3c3</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Row 3, column 3 value.</p>
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
    <th><a id="pointerevent" />
<div class="toc">

#### PointerEvent

</div>
    <p class="member"><span id="PointerEvent" class="member">PointerEvent</span></p><p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A 2D or 3D mouse or similar pointer event.</p>

<h3 class="subHeading">Properties</h3>

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
    <td><p><span class="signature">type</span></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The type of event: <code>"Press"</code>, <code>"DoublePress"</code>, <code>"Release"</code>, or <code>"Move"</code>.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">pos2D</span></p></td>
    <td class="type"><p><a href="#Vec2">Vec2</a></p></td>
    <td class="description last">
        <p>The 2D position of the event on the intersected object XY plane, where applicable.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">pos3D</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The 3D position of the event on the intersected object, where applicable.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">normal</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The surface normal at the intersection point.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">direction</span></p></td>
    <td class="type"><p><a href="#Vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The direction of the intersection ray.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">button</span></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the button pressed: <code>None</code>, <code>Primary</code>, <code>Secondary</code>, or <code>Tertiary</code>.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isPrimaryButton</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the button pressed was the primary button, otherwise <code>undefined</code>; </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isLeftButton</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the button pressed was the primary button, otherwise <code>undefined</code>; </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isSecondaryButton</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the button pressed was the secondary button, otherwise <code>undefined</code>; </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isRightButton</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the button pressed was the secondary button, otherwise <code>undefined</code>; </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isTertiaryButton</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the button pressed was the tertiary button, otherwise <code>undefined</code>; </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isMiddleButton</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the button pressed was the tertiary button, otherwise <code>undefined</code>; </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isPrimaryHeld</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the primary button is currently being pressed, otherwise <code>false</code> </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isSecondaryHeld</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the secondary button is currently being pressed, otherwise <code>false</code> </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isTertiaryHeld</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the tertiary button is currently being pressed, otherwise <code>false</code> </p>
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
    <th><a id="quat" />
<div class="toc">

#### Quat

</div>
    <p class="member"><span id="Quat" class="member">Quat</span></p><p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A quaternion value.</p>

<h3 class="subHeading">Properties</h3>

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
    <td><p><span class="signature">x</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Imaginary component i.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">y</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Imaginary component j.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">z</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Imaginary component k.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">w</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Real component.</p>
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
    <th><a id="uuid" />
<div class="toc">

#### Uuid

</div>
    <p class="member"><span id="Uuid" class="member">Uuid</span></p><p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>UUIDs (Universally Unique IDentifiers) are used to uniquely identify entities, avatars, and the like. They are represented in JavaScript as strings in the format <code>"&lt;nnnnnnnn-nnnn-nnnn-nnnn-nnnnnnnnnnnn&gt;"</code>, where the "n"s are hexadecimal digits.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><p class="member"><span id="Vec3" class="member">Vec3</span></p><p>Type: object</p></th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A 3-dimensional vector. </p>

<h3 class="subHeading">Properties</h3>

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
    <td><p><span class="signature">x</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>X-coordinate of the vector. Synonyms: <code>r</code>, <code>red</code>.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">y</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Y-coordinate of the vector. Synonyms: <code>g</code>, <code>green</code>.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">z</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Z-coordinate of the vector. Synonyms: <code>b</code>, <code>blue</code>.</p>
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
    <th><a id="webinputmode" />
<div class="toc">

#### WebInputMode

</div>
    <p class="member"><span id="WebInputMode" class="member">WebInputMode</span></p><p>Type: string</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Specifies how a web surface processes events.</p>

<table>
<thead>
<tr>
    <th>Value</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>"touch"</code></p></td>
    <td><p>Events are processed as touch events.</p></td>
</tr>
<tr>
    <td><p><code>"mouse"</code></p></td>
    <td><p>Events are processed as mouse events.</p></td>
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
    <th><a id="print" />
<div class="toc">

#### print

</div>
    <p class="member"><span id="print" class="member"><span class="type-signature"></span>print<span class="signature">( ...message<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Prints a message to the program log and emits <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged is the message values separated by spaces. </p>
        <p>Alternatively, you can use <a href="hifi-Script.html#print">Script.print</a> or one of the <a href="hifi-console.html">console</a> API methods.</p>

<h3 class="subHeading">Parameters</h3>

<table class="params">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Attributes</th>
    <th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="name"><p><code>message</code></p></td>
    <td class="type"><p>\*</p></td>
    <td class="attributes"><p>&lt;optional&gt;<br />&lt;repeatable&gt;</p></td>
    <td class="description last">
        <p>The message values to print.</p>
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