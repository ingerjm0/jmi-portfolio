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

<h1 style={{ textAlign: 'center' , marginBottom: '10px' }}>EntityViewer</h1>

<div class="jumpTo"> • <a href="#methods">Methods</a> • <a href="#method-details">Method Details</a> • </div>

<section>
<article>
<div class="container-overview">
    <div><p>The <code>EntityViewer</code> API provides a headless viewer for assignment client scripts, so that they can "see" entities in order for them to be available in the <a href="hifi-Entities.html">Entities</a> API.</p>
    <p class='availableIn'><b>Supported Script Types:</b> Assignment Client Scripts</p></div>
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
    <td><a href="#getmaxpacketspersecond"><code>getMaxPacketsPerSecond</code></a></td>
    <td><p>number</p></td>
    <td>
        <p>Gets the maximum number of entity packets to receive from the domain server per second.</p>
    </td>
</tr>
<tr>
    <td><a href="#getoctreeelementscount"><code>getOctreeElementsCount</code></a></td>
    <td><p>number</p></td>
    <td>
        <p>Gets the number of nodes in the octree.</p>
    </td>
</tr>
<tr>
    <td><a href="#getorientation"><code>getOrientation</code></a></td>
    <td><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td>
        <p>Gets the orientation of the view frustum.</p>
    </td>
</tr>
<tr>
    <td><a href="#getposition"><code>getPosition</code></a></td>
    <td><p><a href="hifi-global.html#vec3">Vec3</a></p></td>
    <td>
        <p>Gets the position of the view frustum.</p>
    </td>
</tr>
<tr>
    <td><a href="#queryoctree"><code>queryOctree</code></a></td>
    <td><p>None</p></td>
    <td>
        <p>Updates the entities currently in view.</p>
    </td>
</tr>
<tr>
    <td><a href="#setcenterradius"><code>setCenterRadius</code></a></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the radius of the center "keyhole" in the view frustum.</p>
    </td>
</tr>
<tr>
    <td><a href="#setkeyholeradius"><code>setKeyholeRadius</code></a></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the radius of the center "keyhole" in the view frustum.</p>
        <p class="important">Deprecated: This function is deprecated and will be removed. Use <a href="#setcenterradius">setCenterRadius</a> instead.</p>
    </td>
</tr>
<tr>
    <td><a href="#setmaxpacketspersecond"><code>setMaxPacketsPerSecond</code></a></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the maximum number of entity packets to receive from the domain server per second.</p>
    </td>
</tr>
<tr>
    <td><a href="#setorientation"><code>setOrientation</code></a></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the orientation of the view frustum.</p>
    </td>
</tr>
<tr>
    <td><a href="#setposition"><code>setPosition</code></a></td>
    <td><p>None</p></td>
    <td>
        <p>Sets the position of the view frustum.</p>
    </td>
</tr>
</tbody>
</table>

---

## Method Details

<table>
<thead>
<tr>
    <th><a id="getmaxpacketspersecond" />
<div class="toc">

#### getMaxPacketsPerSecond

</div>
        <p class="member"><span id=".getMaxPacketsPerSecond" class="member"><span class="type-signature">(static) </span>getMaxPacketsPerSecond<span class="member">( )</span><span class="type-returns"> &rarr; &lcub; number &rcub;</span></span></p>
        <p>Returns: The maximum number of entity packets to receive per second.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the maximum number of entity packets to receive from the domain server
            per second.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getoctreeelementscount" />
<div class="toc">

#### getOctreeElementsCount

</div>
        <p class="member"><span id=".getOctreeElementsCount" class="member"><span class="type-signature">(static) </span>getOctreeElementsCount<span class="member">( )</span><span class="type-returns"> &rarr;
                &lcub; number &rcub;</span></span></p>
        <p>Returns: The number of nodes in the octree.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the number of nodes in the octree.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getorientation" />
<div class="toc">

#### getOrientation

</div>
        <p class="member"><span id=".getOrientation" class="member"><span class="type-signature">(static)
            </span>getOrientation<span class="member">( )</span><span class="type-returns"> &rarr; {<a href="hifi-global.html#quat">Quat</a>}</span></span></p>
        <p>Returns: The orientation of the view frustum.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the orientation of the view frustum.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="getposition" />
<div class="toc">

#### getPosition

</div>
        <p class="member"><span id=".getPosition" class="member"><span class="type-signature">(static)
            </span>getPosition<span class="member">( )</span><span class="type-returns"> &rarr; {<a href="hifi-global.html#vec3">Vec3</a>}</span></span></p>
        <p>Returns: The position of the view frustum.</p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Gets the position of the view frustum.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="queryoctree" />
<div class="toc">

#### queryOctree

</div>
        <p class="member"><span id=".queryOctree" class="member"><span class="type-signature">(static)
            </span>queryOctree<span class="member">( )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Updates the entities currently in view.</p>
    </td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="setcenterradius" />
<div class="toc">

#### setCenterRadius

</div>
        <p class="member"><span id=".setCenterradius" class="member"><span class="type-signature">(static)
            </span>setCenterRadius<span class="member">( radius )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the radius of the center "keyhole" in the view frustum.</p>

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
    <td class="name"><p><code>radius</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The radius of the center "keyhole" in the view frustum.</p>
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
    <th><a id="setkeyholdradius" />
<div class="toc">

#### setKeyholdRadius

</div>
        <p class="member"><span id=".setKeyholeradius" class="member"><span class="type-signature">(static) </span>setKeyholeRadius<span class="member">( radius )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the radius of the center "keyhole" in the view frustum.</p>
        <p class="important">Deprecated: This function is deprecated and will be removed. Use <a href="#setcenterradius">setCenterRadius</a> instead.</p>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
    <th><a id="setmaxpacketspersecond" />
<div class="toc">

#### setMaxPacketsPerSecond

</div>
        <p class="member"><span id=".setMaxPacketsPerSecond" class="member"><span class="type-signature">(static) </span>setMaxPacketsPerSecond<span class="member">( maxPacketsPerSecond )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the maximum number of entity packets to receive from the domain server
            per second.</p>

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
    <td class="name"><p><code>maxPacketsPerSecond</code></p></td>
    <td class="type"><p>number</p></td>
    <td class="description last">
        <p>The maximum number of entity packets to receive per second.</p>
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
    <th><a id="setorientation" />
<div class="toc">

#### setOrientation

</div>
        <p class="member"><span id=".setOrientation" class="member"><span class="type-signature">(static)
            </span>setOrientation<span class="member">( orientation )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the orientation of the view frustum.</p>

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
    <td class="name"><p><code>orientation</code></p></td>
    <td class="type"><p><a href="hifi-global.html#quat">Quat</a></p></td>
    <td class="description last">
        <p>The orientation of the view frustum.</p>
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
    <th><a id="setposition" />
<div class="toc">

#### setPosition

</div>
        <p class="member"><span id=".setPosition" class="member"><span class="type-signature">(static)
            </span>setPosition<span class="member">( position )</span><span class="type-returns"></span></span></p>
    </th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <p>Sets the position of the view frustum.</p>

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
        <p>The position of the view frustum.</p>
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