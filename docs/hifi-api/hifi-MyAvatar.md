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

<h1 style={{ textAlign: 'center' , marginBottom: '10px' }}>MyAvatar</h1>

<div class="jumpTo"> • <a href="#properties">Properties</a> • <a href="#methods">Methods</a> • <a href="#signals">Signals</a> • <a href="#type-definitions">Type Definitions</a> • <a href="#method-details">Method Details</a> • <a href="#signal-details">Signal Details</a> • </div>

<section>
    <article>
        <div class="container-overview">
        <div>
        <p>Your avatar is your in-world representation of you. The <code>MyAvatar</code> API is used to manipulate the avatar. For example, you can customize the avatar's appearance, run custom avatar animations, change the avatar's position within the domain, or manage the avatar's collisions with the environment and other avatars.</p>
        <p class='availableIn'><b>Supported Script Types:</b> Interface Scripts &bull; Client Entity Scripts &bull; Avatar Scripts</p>
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
    <td><p><span class="signature">position</span></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The position of the avatar.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">scale</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The scale of the avatar. The value can be set to anything between <code>0.005</code> and <code>1000.0</code>. </p>
        <p><b>Default Value:</b> 1.0 </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">density</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The density of the avatar in kg/m<sup>3</sup>. The density is used to work out its mass in the application of physics. <em>Read-only.</em></p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">handPosition</span></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>A user-defined hand position, in world coordinates. The position moves with the avatar but is otherwise not used or changed by Interface.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">orientation</span></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>The orientation of the avatar.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">headOrientation</span></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>The orientation of the avatar's head.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">headPitch</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The rotation about an axis running from ear to ear of the avatar's head. Pitch is sometimes called "elevation".</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">headYaw</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The rotation left or right about an axis running from the base to the crown of the avatar's head. Yaw is sometimes called "heading".</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">headRoll</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The rotation about an axis running from the nose to the back of the avatar's head. Roll is sometimes called "bank".</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">velocity</span></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The current velocity of the avatar.</p>
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
        <p><code>displayName's</code> sanitized and default version defined by the avatar mixer rather than Interface clients. The result is unique among all avatars present in the domain at the time.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">attachmentData</span></p></td>
    <td class="type"><p>Array.&lt;<a href="hifi-global.html#attachmentdata">AttachmentData</a>&gt;</p></td>
    <td class="description last">
        <p>Information on the avatar's attachments.</p>
        <p class="important">Deprecated: This property is deprecated and will be removed. Use avatar entities instead.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">jointNames</span></p></td>
    <td class="type"><p>Array.&lt;string&gt;</p></td>
    <td class="description last">
        <p>The list of joints in the current avatar model. <em>Read-only.</em></p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">sessionUUID</span></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>Unique ID of the avatar in the domain. <em>Read-only.</em></p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">leftHandPosition</span></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The position of the left hand in avatar coordinates if it's being positioned by controllers, otherwise <a href="hifi-global.html#vec3">Vec3.ZERO</a>. <em>Read-only.</em></p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">rightHandPosition</span></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The position of the right hand in avatar coordinates if it's being positioned by controllers, otherwise <a href="hifi-global.html#vec3">Vec3.ZERO</a>. <em>Read-only.</em></p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">collisionsEnabled</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p>Set to <code>true</code> to enable the avatar to collide with the environment, <code>false</code> to disable collisions with the environment. May return <code>true</code> even though the value was set <code>false</code> because the zone may disallow collisionless avatars.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">userHeight</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The height of the user in sensor space.</p>
        <p><b>Default Value:</b> 1.75 </p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">walkBackwardSpeed</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The walk backward speed of your avatar.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">sprintSpeed</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The sprint (run) speed of your avatar.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">isInSittingState</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p><code>true</code> if the user wearing the HMD is determined to be sitting (avatar leaning is disabled, recentering is enabled), <code>false</code> if the user wearing the HMD is determined to be standing (avatar leaning is enabled, and avatar recenters if it leans too far). If <code>userRecenterModel == 2</code> (i.e., auto) the property value automatically updates as the user sits or stands, unless <code>isSitStandStateLocked == true</code>. Setting the property value overrides the current sitting / standing state, which is updated when the user next sits or stands unless <code>isSitStandStateLocked == true</code>.</p>
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
    <td><p class="signature"><a href="#attach"><code>attach</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Attaches a model to your avatar. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on.</p>
        <p class="important">Deprecated: This function is deprecated and will be removed. Use avatar entities instead.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#beginsit"><code>beginSit</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Starts a sitting action for the avatar.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#centerbody"><code>centerBody</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Moves and orients the avatar, such that it is directly underneath the HMD, with toes pointed forward in the direction of the HMD.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#clearjointdata"><code>clearJointData</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Clears joint translations and rotations set by script for a specific joint. This restores all motion from the default animation system including inverse kinematics for that joint.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#endsit"><code>endSit</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Ends a sitting action for the avatar.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getacceleration"><code>getAcceleration</code></a></p></td>
    <td><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td>
        <p>Gets the current acceleration of the avatar.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getavatarscale"><code>getAvatarScale</code></a></p></td>
    <td><p>number</p></td>
    <td>
        <p>Gets the target scale of the avatar. The target scale is the desired scale of the avatar without any restrictions on permissible scale values imposed by the domain.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getgravity"><code>getGravity</code></a></p></td>
    <td><p>number</p></td>
    <td>
        <p>Sets the amount of gravity applied to the avatar in the y-axis direction. (Negative values are downward.) The default value is <code>-5</code> m/s<sup>2</sup>.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getheight"><code>getHeight</code></a></p></td>
    <td><p>number</p></td>
    <td>
        <p>Gets the current height of the avatar. This height is only an estimate and might be incorrect for avatars that are missing standard joints.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getjointindex"><code>getJointIndex</code></a></p></td>
    <td><p>number</p></td>
    <td>
        <p>Gets the joint index for a named joint. The joint index value is the position of the joint in the array returned by <a href="#getjointnames">MyAvatar.getJointNames</a>.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getjointnames"><code>getJointNames</code></a></p></td>
           <td><p>Array.&lt;string&gt;</p></td>
    <td>
        <p>Gets the names of all the joints in the current avatar.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getjointposition"><code>getJointPosition</code></a></p></td>
    <td><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td>
        <p>Gets the position of a joint in the current avatar.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getjointrotation"><code>getJointRotation</code></a></p></td>
    <td><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td>
        <p>Gets the rotation of a joint relative to its parent. </p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getjointtranslation"><code>getJointTranslation</code></a></p></td>
    <td><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td>
        <p>Gets the translation of a joint relative to its parent, in model coordinates.</p>
        <p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getparentid"><code>getParentID</code></a></p></td>
    <td><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td>
        <p>Gets the ID of the entity of avatar that the avatar is parented to.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#getskeleton"><code>getSkeleton</code></a></p></td>
    <td class="type"><p>Array.&lt;<a href="#skeletonjoint">MyAvatar.SkeletonJoint</a>&gt;</p></td>
    <td>
        <p>Gets information on all the joints in the avatar's skeleton.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#gotolocation"><code>goToLocation</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Moves the avatar to a new position and (optional) orientation in the domain.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#grab"><code>grab</code></a></p></td>
    <td><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td>
        <p>Creates a new grab that grabs an entity.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#increasesize"><code>increaseSize</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Increases the avatar's scale by five percent, up to a minimum scale of <code>1000</code>.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#isflying"><code>isFlying</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether your avatar is flying.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#isinair"><code>isInAir</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Checks whether your avatar is in the air.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#isseated"><code>isSeated</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Gets whether the avatar is in a seated pose. The seated pose is set by calling the MyAvatar::beginSit method.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#overrideanimation"><code>overrideAnimation</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Overrides the default avatar animations.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#pinjoint"><code>pinJoint</code></a></p></td>
    <td><p>boolean</p></td>
    <td>
        <p>Sets and locks a joint's position and orientation.</p>
        <p><strong>Note:</strong> Only works on the hips joint.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#releasegrab"><code>releaseGrab</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Releases (deletes) a grab to stop grabbing an entity.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#resetsize"><code>resetSize</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Resets the avatar's scale back to the default scale of <code>1.0</code>.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#restoreanimation"><code>restoreAnimation</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Restores the default animations.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#setavatarscale"><code>setAvatarScale</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the target scale of the avatar. The target scale is the desired scale of the avatar without any restrictions on permissible scale values imposed by the domain.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#setgravity"><code>setGravity</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the amount of gravity applied to the avatar in the y-axis direction. (Negative values are downward.)</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#setjointdata"><code>setJointData</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Sets a specific joint's rotation and position relative to its parent, in model coordinates.</p>
        <p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#setjointrotation"><code>setJointRotation</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Sets a specific joint's rotation relative to its parent.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#setjointtranslation"><code>setJointTranslation</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Sets a specific joint's translation relative to its parent, in model coordinates.</p>
        <p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#setparentid"><code>setParentID</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the ID of the entity of avatar that the avatar is parented to.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#setsessionuuid"><code>setSessionUUID</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p class="important">Deprecated: This function is deprecated and will be removed.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#useflow"><code>useFlow</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Enables and disables flow simulation of physics on the avatar's hair, clothes, and body parts.</p>
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
    <td><p class="signature"><a href="#attachmentschanged"><code>attachmentsChanged</code></a></p></td>
    <td>
        <p>Triggered when the a model is attached to or detached from one of the avatar's joints using one of <a href="#attach">attach</a> or <a href="#setattachmentdata">setAttachmentData</a>.</p>
        <p class="important">Deprecated: This signal is deprecated and will be removed. Use avatar entities instead.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#collisionsenabledchanged"><code>collisionsEnabledChanged</code></a></p></td>
    <td>
        <p>Triggered when collisions with the environment are enabled or disabled.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#collisionwithentity"><code>collisionWithEntity</code></a></p></td>
    <td>
        <p>Triggered when the avatar collides with an entity.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#displaynamechanged"><code>displayNameChanged</code></a></p></td>
    <td>
        <p>Triggered when the avatar's <code>displayName</code> property value changes.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#onloadcomplete"><code>onLoadComplete</code></a></p></td>
    <td>
        <p>Triggered when the avatar's model finishes loading.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#onloadfailed"><code>onLoadFailed</code></a></p></td>
    <td>
        <p>Triggered when the avatar's model has failed to load.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#positiongoneto"><code>positionGoneTo</code></a></p></td>
    <td>
        <p>Triggered when the avatar has been moved to a new position by one of the MyAvatar "goTo" functions.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#scalechanged"><code>scaleChanged</code></a></p></td>
    <td>
        <p>Triggered when the avatar's size changes. This can be due to the user changing the size of their avatar or the domain limiting the size of their avatar.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#sessiondisplaynamechanged"><code>sessionDisplayNameChanged</code></a></p></td>
    <td>
        <p>Triggered when the avatar's <code>sessionDisplayName</code> property value changes.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#sessionuuidchanged"><code>sessionUUIDChanged</code></a></p></td>
    <td>
        <p>Triggered when the avatar's <code>sessionUUID</code> property value changes.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#skeletonchanged"><code>skeletonChanged</code></a></p></td>
    <td>
        <p>Triggered when the avatar's model is changed.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#sprintspeedchanged"><code>sprintSpeedChanged</code></a></p></td>
    <td>
        <p>Triggered when the sprint (run) speed set changes.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#walkbackwardspeedchanged"><code>walkBackwardSpeedChanged</code></a></p></td>
    <td>
        <p>Triggered when the walk backward speed set changes.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#wentactive"><code>wentActive</code></a></p></td>
    <td>
        <p>Triggered when your avatar changes from being away to being active.</p>
    </td>
</tr>
<tr>
    <td><p class="signature"><a href="#wentaway"><code>wentAway</code></a></p></td>
    <td>
        <p>Triggered when your avatar changes from being active to being away.</p>
    </td>
</tr>
</tbody>
</table>

---

## Type Definitions

<table>
<thead>
<tr>
    <th><a id="avatarentitydata" />
<div class="toc">

#### AvatarEntityData

</div>
        <p><span id=".AvatarEntityData" class="member">AvatarEntityData</span></p>
        <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Information about an avatar entity.</p>

<h3 class="subHeading" id="props">Properties</h3>

<table>
<thead> 
<tr>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>id</code></p></td>
    <td><p>Uuid</p></td>
    <td><p>Entity ID.</p></td>
</tr>
<tr>
    <td><p><code>properties</code></p></td>
    <td><p><a href="hifi-Entities.html#entityproperties">Entities.EntityProperties</a></p></td>
    <td><p>Entity properties.</p></td>
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
    <th><a id="flowdata" />
<div class="toc">

#### FlowData

</div>
        <p><span id=".FlowData" class="member">FlowData</span></p>
        <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Flow options currently used in flow simulation.</p>

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
    <td><p><span class="signature">initialized</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if flow has been initialized for the current avatar, <code>false</code>if it hasn't.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">active</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if flow is enabled, <code>false</code> if it isn't.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">colliding</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if collisions are enabled, <code>false</code>if they aren't.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">physicsData</span></p></td>
    <td class="type"><p>Object.&lt;GroupName, <a href="#flowphysicsdata">MyAvatar.FlowPhysicsData</a>&gt;</p></td>
    <td class="description last">
        <p>The physics configuration for each group of joints that has been configured.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">threads</span></p></td>
    <td class="type"><p>Object.&lt;ThreadName, Array.&lt;number&gt;</p></td>
    <td class="description last">
        <p>The threads that have been configured, with the first joint's name as the <code>ThreadName</code> and value as an array of the indexes of all the joints in the thread. </p>
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
    <th><a id="flowphysicsdata" />
<div class="toc">

#### FlowPhysicsData

</div>
        <p><span id=".FlowPhysicsData" class="member">FlowPhysicsData</span></p>
        <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A set of physics options currently used in flow simulation.</p>

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
    <td><p><span class="signature">active</span></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> to enable flow on the joint, otherwise <code>false</code>.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">radius</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The thickness of segments and knots. (Needed for collisions.)</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">gravity</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Y-value of the gravity vector.</p>
    </td>
</tr><tr>
         <td><p class="signature">inertia</p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Rotational inertia multiplier.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">damping</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The amount of damping on joint oscillation.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">stiffness</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The stiffness of each thread.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">delta</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Delta time for every integration step.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">jointIndices</span></p></td>
    <td class="type"><p>Array.&lt;number&gt;</p></td>
    <td class="description last">
        <p>The indexes of the joints the options are applied to.</p>
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
    <th><a id="gotoproperties" />
<div class="toc">

#### GoToProperties

</div>
        <p><span id=".GoToProperties" class="member">GoToProperties</span></p>
        <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>A teleport target.</p>

<h3 class="subHeading" id="props">Properties</h3>

<table class="props">
<thead>
<tr>
    <th class="first">Name</th>
    <th class="type">Type</th>
    <th>Attributes</th>
    <th class="last">Summary</th>
</tr>
</thead>
 <tbody>
<tr>
    <td><p><span class="signature">position</span></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="attributes"></td>
    <td class="description last">
        <p>The avatar's new position.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">orientation</span></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="description last">
        <p>The avatar's new orientation.</p>
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
    <th><a id="locomotioncontrolsmode" />
<div class="toc">

#### LocomotionControlsMode

</div>
        <p><span id=".LocomotionControlsMode" class="member">LocomotionControlsMode</span></p>
        <p>Type: number</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Locomotion control types.</p>

<h3 class="subHeading">Properties</h3>
<table>
<thead> 
<tr>
    <th>Value</th>
    <th>Name</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>0</code></p></td>
    <td><p>Default</p></td>
    <td><p>Your walking speed is constant; it doesn't change depending on how far forward you push your controller's joystick. Fully pushing your joystick forward makes your avatar run.</p></td>
</tr>
<tr>
    <td><p><code>1</code></p></td>
    <td><p>Analog</p></td>
    <td><p>Your walking speed changes in steps based on how far forward you push your controller's joystick. Fully pushing your joystick forward makes your avatar run.</p></td>
</tr>
<tr>
    <td><p><code>2</code></p></td>
    <td><p>AnalogPlus</p></td>
    <td><p>Your walking speed changes proportionally to how far forward you push your controller's joystick. Fully pushing your joystick forward makes your avatar run.</p></td>
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
    <th><a id="sitstandmodeltype" />
<div class="toc">

#### SitStandModelType

</div>
        <p><span id=".SitStandModelType" class="member">SitStandModelType</span></p>
        <p>Type: number</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Specifies different avatar leaning and recentering behaviors.</p>

<h3 class="subHeading">Properties</h3>
<table>
<thead> 
<tr>
    <th>Value</th>
    <th>Name</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td><p><code>0</code></p></td>
    <td><p>ForceSit</p></td>
    <td><p>Assumes the user is seated in the real world. Disables avatar leaning regardless of what the avatar is doing in the virtual world (i.e., avatar always recenters).</p></td>
</tr>
<tr>
    <td><p><code>1</code></p></td>
    <td><p>ForceStand</p></td>
    <td><p>Assumes the user is standing in the real world. Enables avatar leaning regardless of what the avatar is doing in the virtual world (i.e. avatar leans, then if leans too far it recenters).</p></td>
</tr>
<tr>
    <td><p><code>2</code></p></td>
    <td><p>Auto</p></td>
    <td><p>Interface detects when the user is standing or seated in the real world. Avatar leaning is disabled when the user is sitting (i.e., avatar always recenters), and avatar leaning is enabled when the user is standing (i.e., avatar leans, then if leans too far it recenters).</p></td>
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
    <th><a id="skeletonjoint" />
<div class="toc">

#### SkeletonJoint

</div>
        <p><span id=".SkeletonJoint" class="member">SkeletonJoint</span></p>
        <p>Type: object</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Information about a single joint in an avatar's skeleton hierarchy.</p>

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
    <td><p><span class="signature">name</span></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>Joint name.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">index</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Joint index.</p>
    </td>
</tr>
<tr>
    <td><p><span class="signature">parentIndex</span></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>Index of this joint's parent (-1 if no parent).</p>
    </td>
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
    <th><a id="attach" />
<div class="toc">

#### attach

</div>
        <p><span id=".attach" class="member"><span class="type-signature">(static) </span>attach<span class="member">( modelURL, jointName<span class="signature-attributes">opt</span>, translation<span class="signature-attributes">opt</span>, rotation<span class="signature-attributes">opt</span>, scale<span class="signature-attributes">opt</span>,<br />&nbsp;&nbsp;&nbsp;isSoft<span class="signature-attributes">opt</span>, allowDuplicates<span class="signature-attributes">opt</span>, useSaved<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Attaches a model to your avatar. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on.</p>
        <p class="important">Deprecated: This function is deprecated and will be removed. Use avatar entities instead.</p>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="beginsit" />
<div class="toc">

#### beginSit

</div>
        <p><span id=".beginSit" class="member"><span class="type-signature">(static) </span>beginSit<span class="member">( position, rotation )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Starts a sitting action for the avatar.</p>

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
    <td class="name"><p><code>position</code></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The point in space where the avatar will sit.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>rotation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>Initial absolute orientation of the avatar once is seated.</p>
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
    <th><a id="centerbody" />
<div class="toc">

#### centerBody

</div>
        <p><span id=".centerBody" class="member"><span class="type-signature">(static) </span>centerBody<span class="member">( )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Moves and orients the avatar, such that it is directly underneath the HMD, with toes pointed forward in the direction of the HMD.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="clearJointData" />
<div class="toc">

#### clearJointData

</div>
        <p><span id=".clearJointData" class="member"><span class="type-signature">(static) </span>clearJointData<span class="member">( name )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Clears joint translations and rotations set by script for a specific joint. This restores all motion from the default animation system including inverse kinematics for that joint.</p>
        <p>Note: This is slightly slower than the function variation that specifies the joint index.</p>

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
    <td class="name"><p><code>name</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint.</p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Offset and restore the position of your avatar's head</summary>

```
// Stretch your avatar's neck.
MyAvatar.setJointTranslation("Neck", Vec3.multiply(2, MyAvatar.getJointTranslation("Neck")));

// Restore your avatar's neck after 5s.
Script.setTimeout(function () {
    MyAvatar.clearJointData("Neck");
}, 5000);
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="endsit" />
<div class="toc">

#### endSit

</div>
        <p><span id=".endSit" class="member"><span class="type-signature">(static) </span>endSit<span class="member">( position, rotation )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Ends a sitting action for the avatar.</p>

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
    <td class="name"><p><code>position</code></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The position of the avatar when standing up.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>rotation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>The absolute rotation of the avatar once the sitting action ends. </p>
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
    <th><a id="getacceleration" />
<div class="toc">

#### getAcceleration

</div>
        <p><span id=".getAcceleration" class="member"><span class="type-signature">(static) </span>getAcceleration<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#vec3">Vec3</a> &rcub; </span></span></p>
        <p>Returns: The current acceleration of the avatar.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the current acceleration of the avatar.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getavatarscale" />
<div class="toc">

#### getAvatarScale

</div>
        <p><span id=".getAvatarScale" class="member"><span class="type-signature">(static) </span>getAvatarScale<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; number &rcub; </span></span></p>
        <p>Returns: The target scale for the avatar, range <code>0.005</code> &ndash; <code>1000.0</code>.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the target scale of the avatar. The target scale is the desired scale of the avatar without any restrictions on permissible scale values imposed by the domain.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getgravity" />
<div class="toc">

#### getGravity

</div>
        <p><span id=".getGravity" class="member"><span class="type-signature">(static) </span>getGravity<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; number &rcub; </span></span></p>
        <p>Returns: The amount of gravity currently applied to the avatar, in m/s<sup>2</sup>.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the amount of gravity applied to the avatar in the y-axis direction. (Negative values are downward.) The default value is <code>-5</code> m/s<sup>2</sup>.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getheight" />
<div class="toc">

#### getHeight

</div>
        <p><span id=".getHeight" class="member"><span class="type-signature">(static) </span>getHeight<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; number &rcub; </span></span></p>
        <p>Returns: The height of the avatar.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the current height of the avatar. This height is only an estimate and might be incorrect for avatars that are missing standard joints.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getjointindex" />
<div class="toc">

#### getJointIndex

</div>
        <p><span id=".getJointIndex" class="member"><span class="type-signature">(static) </span>getJointIndex<span class="member">( name )</span><span class="type-returns"> &rarr; &lcub; number &rcub; </span></span></p>
        <p>Returns: The index of the joint if valid, otherwise -1.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the joint index for a named joint. The joint index value is the position of the joint in the array returned by <a href="#getjointnames">MyAvatar.getJointNames</a>.</p>

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
    <td class="name"><p><code>name</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint.</p>
    </td>
</tr>
</tbody>
</table>
<details>
    <summary>Example: Report the index of your avatar's left arm joint</summary>

```
print(JSON.stringify(MyAvatar.getJointNames()));
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getjointnames" />
<div class="toc">

#### getJointNames

</div>
        <p><span id=".getJointNames" class="member"><span class="type-signature">(static) </span>getJointNames<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; Array.&lt;string> &rcub; </span></span></p>
        <p>Returns: The joint names.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the names of all the joints in the current avatar.</p>
<details>
    <summary>Example: Report the names of all the joints in your current avatar</summary>

```
print(JSON.stringify(MyAvatar.getJointNames()));
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getjointposition" />
<div class="toc">

#### getJointPosition

</div>
        <p><span id=".getJointPosition" class="member"><span class="type-signature">(static) </span>getJointPosition<span class="member">( name )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#vec3">Vec3</a> &rcub; </span></span></p>
        <p>Returns: The position of the joint in world coordinates.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the position of a joint in the current avatar.</p>

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
    <td class="name"><p><code>name</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint.</p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Report the position of your avatar's hips</summary>

```
print(JSON.stringify(MyAvatar.getJointPosition("Hips")));
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getjointrotation" />
<div class="toc">

#### getJointRotation

</div>
        <p><span id=".getJointRotation" class="member"><span class="type-signature">(static) </span>getJointRotation<span class="member">( name )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#quat">Quat</a> &rcub; </span></span></p>
        <p>Returns: The rotation of the joint in world coordinates.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the rotation of a joint relative to its parent.</p>

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
    <td class="name"><p><code>name</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint.</p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Report the rotation of your avatar's hips joint</summary>

```
print(JSON.stringify(MyAvatar.getJointRotation("Hips")));
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getjointtranslation" />
<div class="toc">

#### getJointTranslation

</div>
        <p><span id=".getJointTranslation" class="member"><span class="type-signature">(static) </span>getJointTranslation<span class="member">( name )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#vec3">Vec3</a> &rcub; </span></span></p>
        <p>Returns: The translation of the joint relative to its parent, in model coordinates.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the translation of a joint relative to its parent, in model coordinates.</p>
        <p>Warning: These coordinates are not necessarily in meters.</p>

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
    <td class="name"><p><code>name</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint.</p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Report the translation of your avatar's hips joint</summary>

```
print(JSON.stringify(MyAvatar.getJointRotation("Hips")));
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getparentid" />
<div class="toc">

#### getParentID

</div>
        <p><span id=".getParentID" class="member"><span class="type-signature">(static) </span>getParentID<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#uuid">Uuid</a> &rcub; </span></span></p>
        <p>Returns: The ID of the entity or avatar that the avatar is parented to; if not parented, returns <a href="hifi-global.html#uuid">Uuid.NULL</a>.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the ID of the entity of avatar that the avatar is parented to.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getskeleton" />
<div class="toc">

#### getSkeleton

</div>
        <p><span id=".getSkeleton" class="member"><span class="type-signature">(static) </span>getSkeleton<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; Array.&lt;<a href="#skeletonjoint">MyAvatar.SkeletonJoint</a>> &rcub; </span></span></p>
        <p>Returns: Information about each joint in the avatar's skeleton.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets information on all the joints in the avatar's skeleton.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="gotolocation" />
<div class="toc">

#### goToLocation

</div>
        <p><span id=".goToLocation" class="member"><span class="type-signature">(static) </span>goToLocation<span class="member">( position, hasOrientation<span class="signature-attributes">opt</span>, orientation<span class="signature-attributes">opt</span>,<br />&nbsp;&nbsp;&nbsp;shouldFaceLocation<span class="signature-attributes">opt</span>, withSafeLanding<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Moves the avatar to a new position and/or orientation in the domain.</p>

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
    <td class="name"><p><code>position</code></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="attributes"></td>
    <td class="default"></td>
    <td class="description last">
        <p>The new position for the avatar, in world coordinates.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>hasOrientation</code></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>false</p></td>
    <td class="description last">
        <p>Set to <code>true</code> to set the orientation of the avatar. </p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>orientation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>Quat.IDENTITY</p></td>
    <td class="description last">
        <p>The new orientation for the avatar.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>shouldFaceLocation</code></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="attributes"><p>&lt;optional&gt;</p></td>
    <td class="default"><p>false</p></td>
    <td class="description last">
        <p>Set to <code>true</code> to position the avatar a short distanceaway from</p>
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
    <th><a id="grab" />
<div class="toc">

#### grab

</div>
        <p><span id=".grab" class="member"><span class="type-signature">(static) </span>grab<span class="member">( targetID, parentJointIndex, offset,     rotationalOffset )</span><span class="type-returns"> &rarr; &lcub; <a href="hifi-global.html#uuid">Uuid</a> &rcub; </span></span></p>
        <p>Returns: The ID of the new grab.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Creates a new grab that grabs an entity.</p>

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
    <td class="name"><p><code>targetID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity to grab.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>parentJointIndex</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The avatar joint to use to grab the entity.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>offset</code></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The target's local position relative to the joint.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>rotationalOffset</code></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>The target's local rotation relative to the joint.</p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Create and grab an entity for a short while</summary>

```
var entityPosition = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 }));
var entityRotation = MyAvatar.orientation;
var entityID = Entities.addEntity({
    type: "Box",
    position: entityPosition,
    rotation: entityRotation,
    dimensions: { x: 0.5, y: 0.5, z: 0.5 }
});
var rightHandJoint = MyAvatar.getJointIndex("RightHand");
var relativePosition = Entities.worldToLocalPosition(entityPosition, MyAvatar.SELF_ID, rightHandJoint);
var relativeRotation = Entities.worldToLocalRotation(entityRotation, MyAvatar.SELF_ID, rightHandJoint);
var grabID = MyAvatar.grab(entityID, rightHandJoint, relativePosition, relativeRotation);

Script.setTimeout(function () {
    MyAvatar.releaseGrab(grabID);
    Entities.deleteEntity(entityID);
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
    <th><a id="increasesize" />
<div class="toc">

#### increaseSize

</div>
        <p><span id=".increaseSize" class="member"><span class="type-signature">(static) </span>increaseSize<span class="member">( )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Increases the avatar's scale by five percent, up to a minimum scale of <code>1000</code>.</p>
<details>
    <summary>Example: Reset your avatar's size to default then grow it 5 times</summary>

```
MyAvatar.resetSize();

for (var i = 0; i &lt; 5; i++){
    print("Growing by 5 percent");
    MyAvatar.increaseSize();
}
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="isflying" />
<div class="toc">

#### isFlying

</div>
        <p><span id=".isFlying" class="member"><span class="type-signature">(static) </span>isFlying<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub; </span></span></p>
        <p>Returns: <code>true</code> if your avatar is flying and not taking off or falling, <code>false</code> if not.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether your avatar is flying.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="isinair" />
<div class="toc">

#### isInAir

</div>
        <p><span id=".isInAir" class="member"><span class="type-signature">(static) </span>isInAir<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub; </span></span></p>
        <p>Returns: <code>true</code> if your avatar is taking off, flying, or falling, otherwise <code>false</code> because your avatar is on the ground.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Checks whether your avatar is in the air.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="isseated" />
<div class="toc">

#### isSeated

</div>
        <p><span id=".isSeated" class="member"><span class="type-signature">(static) </span>isSeated<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub; </span></span></p>
        <p>Returns: <code>true</code> if the avatar is in a seated pose.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets whether the avatar is in a seated pose. The seated pose is set by calling the <a href="#beginsit">MyAvatar.beginSit</a> method.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="overrideanimation" />
<div class="toc">

#### overrideAnimation

</div>
        <p><span id=".overrideAnimation" class="member"><span class="type-signature">(static) </span>overrideAnimation<span class="member">( url, fps, loop, firstFrame, lastFrame )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Overrides the default avatar animations.</p>
        <p>The avatar animation system includes a set of default animations along with rules for how those animations are blended together with procedural data (such as look at vectors, hand sensors etc.). <code>overrideAnimation()</code> is used to completely override all motion from the default animation system (including inverse kinematics for hand and head controllers) and play a set of specified animations. To end these animations and restore the default animations, use <a href="#restoreanimation">MyAvatar.restoreAnimation</a>.</p>
        <p>Note: When using pre-built animation data, it's critical that the joint orientation of the source animation and target rig are equivalent, since the animation data applies absolute values onto the joints. If the orientations are different, the avatar will move in unpredictable ways.</p>

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
    <td class="name"><p><code>url</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The URL to the animation file. Animation files may be in glTF orFBX format, but only need tocontain the avatar skeleton and animation data. glTF models maybe in JSON or binary format (".gltf" or ".glb" URLs respectively). </p>
        <p><strong>Warning:</strong> glTF animations currently do not always animate correctly.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>fps</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The frames per second (FPS) rate for the animation playback. 30FPS is normal speed.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>loop</code></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if the animation should loop, <code>false</code> if it shouldn't.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>firstFrame</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The frame to start the animation at.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>lastFrame</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The frame to end the animation at.</p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Play a clapping animation on your avatar for three seconds</summary>

```
var ANIM_URL = "https://s3.amazonaws.com/hifi-public/animations/ClapAnimations/ClapHands_Standing.fbx";
MyAvatar.overrideAnimation(ANIM_URL, 30, true, 0, 53);
Script.setTimeout(function () {
    MyAvatar.restoreAnimation();
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
    <th><a id="pinjoint" />
<div class="toc">

#### pinJoint

</div>
        <p><span id=".pinJoint" class="member"><span class="type-signature">(static) </span>pinJoint<span class="member">( index, position, orientation )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub; </span></span></p>
        <p>Returns: <code>true</code> if the joint was pinned, <code>false</code> if it wasn't.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets and locks a joint's position and orientation.</p>
        <p><strong>Note:</strong> Only works on the hips joint.</p>

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
    <td class="name"><p><code>index</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The index of the joint.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>position</code></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The position of the joint in world coordinates.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>orientation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>The orientation of the joint in world coordinates.</p>
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
    <th><a id="releasegrab" />
<div class="toc">

#### releaseGrab

</div>
        <p><span id=".releaseGrab" class="member"><span class="type-signature">(static) </span>releaseGrab<span class="member">( grabID )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Releases (deletes) a grab to stop grabbing an entity.</p>

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
    <td class="name"><p><code>grabID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the grab to release.</p>
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
    <th><a id="resetsize" />
<div class="toc">

#### resetSize

</div>
        <p><span id=".resetSize" class="member"><span class="type-signature">(static) </span>resetSize<span class="member">( )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Resets the avatar's scale back to the default scale of <code>1.0</code>.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="restoreanimation" />
<div class="toc">

#### restoreAnimation

</div>
        <p><span id=".restoreAnimation" class="member"><span class="type-signature">(static) </span>restoreAnimation<span class="member">( )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Restores the default animations.</p>
        <p>The avatar animation system includes a set of default animations along with rules for how those animations are blended together with procedural data (such as look at vectors, hand sensors etc.). Playing your own custom animations will override the default animations. <code>restoreAnimation()</code> is used to restore all motion from the default animation system including inverse kinematics for hand and head controllers. If you aren't currently playing an override animation, this function has no effect.</p>
<details>
    <summary>Example:  Play a clapping animation on your avatar for three seconds</summary>

```
var ANIM_URL = "https://s3.amazonaws.com/hifi-public/animations/ClapAnimations/ClapHands_Standing.fbx";
MyAvatar.overrideAnimation(ANIM_URL, 30, true, 0, 53);
Script.setTimeout(function () {
    MyAvatar.restoreAnimation();
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
    <th><a id="setavatarscale" />
<div class="toc">

#### setAvatarScale

</div>
        <p><span id=".setAvatarScale" class="member"><span class="type-signature">(static) </span>setAvatarScale<span class="member">( scale )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the target scale of the avatar. The target scale is the desired scale of the avatar without any restrictions on permissible scale values imposed by the domain.</p>

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
    <td class="name"><p><code>scale</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The target scale for the avatar, range <code>0.005</code> &ndash; <code>1000.0</code>.</p>
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
    <th><a id="setgravity" />
<div class="toc">

#### setGravity

</div>
        <p><span id=".setGravity" class="member"><span class="type-signature">(static) </span>setGravity<span class="member">( gravity )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the amount of gravity applied to the avatar in the y-axis direction. (Negative values are downward.)</p>

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
    <td class="name"><p><code>gravity</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The amount of gravity to be applied to the avatar, in m/s<sup>2</sup>.</p>
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
    <th><a id="setjointdata" />
<div class="toc">

#### setJointData

</div>
        <p><span id=".setJointData" class="member"><span class="type-signature">(static) </span>setJointData<span class="member">( name, rotation, translation )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets a specific joint's rotation and position relative to its parent, in model coordinates.</p>
        <p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
        <p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>

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
    <td class="name"><p><code>name</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>rotation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>The rotation of the joint relative to its parent.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>translation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The translation of the joint relative to its parent, in model coordinates.</p>
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
    <th><a id="setjointrotation" />
<div class="toc">

#### setJointRotation

</div>
        <p><span id=".setJointRotation" class="member"><span class="type-signature">(static) </span>setJointRotation<span class="member">( name, rotation )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets a specific joint's rotation relative to its parent.</p>
        <p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>

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
    <td class="name"><p><code>name</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>rotation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>The rotation of the joint relative to its parent.</p>
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
    <th><a id="setjointtranslation" />
<div class="toc">

#### setJointTranslation

</div>
        <p><span id=".setJointTranslation" class="member"><span class="type-signature">(static) </span>setJointTranslation<span class="member">( name, translation )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets a specific joint's translation relative to its parent, in model coordinates.</p>
        <p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
        <p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>

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
    <td class="name"><p><code>name</code></p></td>
    <td class="type"><p>string</p></td>
    <td class="description last">
        <p>The name of the joint.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>translation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td class="description last">
        <p>The translation of the joint relative to its parent, in model coordinates.</p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Stretch your avatar's neck</summary>

<p>Depending on the avatar you are using, you will either see a gap between the head and body or you will see the neck stretched</p>

```
// Stretch your avatar's neck.
MyAvatar.setJointTranslation("Neck", Vec3.multiply(2, MyAvatar.getJointTranslation("Neck")));

// Restore your avatar's neck after 5s.
Script.setTimeout(function () {
    MyAvatar.clearJointData("Neck");
}, 5000);
```

</details>

</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="setparentid" />
<div class="toc">

#### setParentID

</div>
        <p><span id=".setParentID" class="member"><span class="type-signature">(static) </span>setParentID<span class="member">( parentID )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the ID of the entity of avatar that the avatar is parented to.</p>

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
    <td class="name"><p><code>parentID</code></p></td>
    <td class="type"><p><a href="hifi-global.html#uuid">Uuid</a></p></td>
    <td class="description last">
        <p>The ID of the entity or avatar that the avatar should be parented to. Set to <a href="hifi-global.html#uuid">Uuid.NULL</a> to unparent. </p>
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
    <th><a id="setsessionuuid" />
<div class="toc">

#### setSessionUUID

</div>
        <p><span id=".setSessionUUID" class="member"><span class="type-signature">(static) </span>setSessionUUID<span class="member">( sessionUUID )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p class="important">Deprecated: This function is deprecated and will be removed.</p>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="useflow" />
<div class="toc">

#### useFlow

</div>
        <p><span id=".useFlow" class="member"><span class="type-signature">(static) </span>useFlow<span class="member">( isActive, isCollidable, physicsConfig<span class="signature-attributes">opt</span>, collisionsConfig<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Enables and disables flow simulation of physics on the avatar's hair, clothes, and body parts.</p>

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
    <td class="name"><p><code>isActive</code></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="attributes"></td>
    <td class="description last">
        <p><code>true</code> if flow simulation is enabled on the joint, <code>false</code> if it isn't.</p>
    </td>
</tr>
<tr>
    <td class="name"><p><code>isCollidable</code></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="attributes"></td>
    <td class="description last">
        <p><code>true</code> to enable collisions in the flow simulation, <code>false</code> to disable.</p>
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
    <th><a id="attachmentschanged" />
<div class="toc">

#### attachmentsChanged

</div>
        <p><span id=".attachmentsChanged" class="member">attachmentsChanged( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the a model is attached to or detached from one of the avatar's joints using <a href="#attach">attach</a> or <a href="#setattachmentdata">setAttachmentData</a>.</p>
        <p class="important">Deprecated: This signal is deprecated and will be removed. Use avatar entities instead.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="collisionsenabledchanged" />
<div class="toc">

#### collisionsEnabledChanged

</div>
        <p><span id=".collisionsEnabledChanged" class="member">collisionsEnabledChanged( enabled )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when collisions with the environment are enabled or disabled.</p>

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
    <td class="name"><p><code>enabled</code></p></td>
    <td class="type"><p>boolean</p></td>
    <td class="description last">
        <p><code>true</code> if collisions with the environment are enabled, <code>false</code> if they're not.</p>
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
        <p><span id=".collisionWithEntity" class="member">collisionWithEntity( collision )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar collides with an entity.</p>

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
    <td class="name"><p><code>collision</code></p></td>
    <td class="type"><p><a href="hifi-global.html#collision">Collision</a></p></td>
    <td class="description last">
        <p>Details of the collision.</p>
    </td>
</tr>
</tbody>
</table>

<details>
    <summary>Example: Report each time your avatar collides with an entity</summary>

```
MyAvatar.collisionWithEntity.connect(function (collision) {
    print("Your avatar collided with an entity.");
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
    <th><a id="displaynamechanged" />
<div class="toc">

#### displayNameChanged

</div>
        <p><span id=".displayNameChanged" class="member">displayNameChanged( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar's <code>displayName</code> property value changes.</p>
<details>
    <summary>Example: Report when your avatar display name changes</summary>

```
MyAvatar.displayNameChanged.connect(function () {
    print("Avatar display name changed to: " + MyAvatar.displayName);
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
    <th><a id="onloadcomplete" />
<div class="toc">

#### onLoadComplete

</div>
        <p><span id=".onLoadComplete" class="member">onLoadComplete( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar's model finishes loading.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="onloadfailed" />
<div class="toc">

#### onLoadFailed

</div>
        <p><span id=".onLoadFailed" class="member">onLoadFailed( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar's model has failed to load.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="positiongoneto" />
<div class="toc">

#### positionGoneTo

</div>
        <p><span id=".positionGoneTo" class="member">positionGoneTo( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar has been moved to a new position by one of the MyAvatar "goTo" functions.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="scalechanged" />
<div class="toc">

#### scaleChanged

</div>
        <p><span id=".scaleChanged" class="member">scaleChanged( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar's size changes. This can be due to the user changing the size of their avatar or the domain limiting the size of their avatar.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="sessiondisplaynamechanged" />
<div class="toc">

#### sessionDisplayNameChanged

</div>
        <p><span id=".sessionDisplayNameChanged" class="member">sessionDisplayNameChanged( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar's <code>sessionDisplayName</code> property value changes.</p>
<details>
    <summary>Example: Report when your avatar's session display name changes</summary>

```
MyAvatar.sessionDisplayNameChanged.connect(function () {
    print("Avatar session display name changed to: " + MyAvatar.sessionDisplayName);
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
    <th><a id="sessionuuidchanged" />
<div class="toc">

#### sessionUUIDChanged

</div>
        <p><span id=".sessionUUIDChanged" class="member">sessionUUIDChanged( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar's <code>sessionUUID</code> property value changes.</p>
<details>
    <summary>Example: Report when your avatar's session UUID changes</summary>

```
MyAvatar.sessionUUIDChanged.connect(function () {
    print("Avatar session UUID changed to: " + MyAvatar.sessionUUID);
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
    <th><a id="skeletonchanged" />
<div class="toc">

#### skeletonChanged

</div>
        <p><span id=".skeletonChanged" class="member">skeletonChanged( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the avatar's model (i.e., <code>skeletonModelURL</code> property) is changed.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="sprintspeedchanged" />
<div class="toc">

#### sprintSpeedChanged

</div>
        <p><span id=".sprintSpeedChanged" class="member">sprintSpeedChanged( speed )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the sprint (run) speed set changes.</p>

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
    <td class="name"><p><code>speed</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The new sprint speed set for the current control scheme.</p>
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
    <th><a id="walkbackwardspeedchanged" />
<div class="toc">

#### walkBackwardSpeedChanged

</div>
        <p><span id=".walkBackwardSpeedChanged" class="member">walkBackwardSpeedChanged( speed )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when the walk backward speed set changes.</p>

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
    <td class="name"><p><code>speed</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The new walk backward speed set for the current control scheme. </p>
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
    <th><a id="wentactive" />
<div class="toc">

#### wentActive

</div>
        <p><span id=".wentActive" class="member">wentActive( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when your avatar changes from being away to being active.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="wentaway" />
<div class="toc">

#### wentAway

</div>
        <p><span id=".wentAway" class="member">wentAway( )</span></p>
        <p>Returns: Signal</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Triggered when your avatar changes from being active to being away.</p>
<details>
    <summary>Example: Report when your avatar goes away</summary>

```
MyAvatar.wentAway.connect(function () {
    print("My avatar went away");
});
// In desktop mode, pres the Esc key to go away.
```

</details>
</td>
</tr>
</tbody>
</table>
</article>
</section>

</div>
</div>