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

<h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Agent</h1>

<div class="jumpTo"> • <a href="#properties">Properties</a> • <a href="#methods">Methods</a> • <a href="#method-details">Method Details</a> • </div>

<section>
<article>
<div class="container-overview">
    <div>
    <p>The <code>Agent</code> API enables an assignment client to emulate an avatar. Setting <code>isAvatar = true</code> connects the assignment client to the avatar and audio mixers, and enables the <a href="hifi-MyAvatar.html">MyAvatar</a> API.</p>
    <p class='availableIn'><b>Supported Script Types:</b> Assignment Client Scripts</p>
    </div>

---

## Properties

<table>
    <thead>
        <tr><th class="first">Name</th> <th class="type">Type</th><th class="last">Summary</th></tr>
    </thead>
    <tbody>
        <tr> 
            <td><p class="signature">isAvatar</p></td> 
            <td class="type"><p>boolean</p></td> 
            <td class="description last">
                <p><code>true</code> if the assignment client script is emulating an avatar, otherwise <code>false</code>.</p>
            </td>
        </tr>
<tr> 
            <td><p class="signature">sessionUUID</p></td> 
            <td class="type"><p><a href="hifi-global.html#Uuid">Uuid</a></p></td> 
            <td class="description last">
    <p>The unique ID associated with the agent's current session in the domain. <em>Read-only.</em></p>
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
        <th class="type">Return&nbsp;Value</th>
        <th class="last">Summary</th>
    </tr>
</thead>
<tbody>
<tr> 
    <td><a href="#isavatar">
        <code>isAvatar</code>
        </a>
    </td>
    <td><p>boolean</p></td>
    <td>
<p>Checks whether the script is emulating an avatar.</p>
    </td>
</tr>
<tr> 
    <td><a href="#setisavatar"><code>setIsAvatar</code></a></td>
    <td><p>None</p></td>
    <td>
    <p>Sets whether the script should emulate an avatar.</p>
    </td>
</tr>
</tbody>
</table>

---

## Method Details

<table>
        <thead>
            <tr>
            <th><a id="isavatar" />
<div class="toc">

#### isAvatar

</div>
                    <span id=".isAvatar" class="member"><span class="type-signature">(static) </span>isAvatar<span class="member">(  )</span><span class="type-returns"> &rarr; &lcub; boolean &rcub;</span></span>
                    <br />
                        Returns: <span style={{ fontWeight: 'normal' }}><code>true</code> if the script is emulating an avatar, otherwise <code>false</code>.</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr> 
            <td>
    <p>Checks whether the script is emulating an avatar.</p>
<details>
    <summary>Example: Check whether the agent is emulating an avatar</summary>

``` 
(function () {
    print("Agent is avatar: " + Agent.isAvatar());
    print("Agent is avatar: " + Agent.isAvatar); // Same result.
}());
```

</details>
                </td>
            </tr>
        </tbody>
    </table>
    <table>
        <thead>
            <tr>
            <th><a id="setisavatar" />
<div class="toc">

#### setIsAvatar

</div>
                    <span id=".setIsAvatar" class="member"><span class="type-signature">(static) </span>setIsAvatar<span class="member">( isAvatar )</span><span class="type-returns"></span></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr> 
            <td>
    <p>Sets whether the script should emulate an avatar.</p>
                        <h3 class="subHeading">Parameters</h3>
<table style={{ display: 'table', width: '100%' }} class="params">
    <thead>
    <tr>
        <th style={{ textAlign: 'left' }}>Name</th>
        <th style={{ textAlign: 'left' }}>Type</th>
        <th class="last">Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
                <td class="name"><code>isAvatar</code></td> 
            <td class="type"><p>boolean</p></td> 
            <td class="description last">
    <p><code>true</code> if the script emulates an avatar, otherwise <code>false</code>.</p>
    </td>
        </tr>
    </tbody>
</table>
<details>
    <summary>Example: Make an assignment client script emulate an avatar</summary>

```
(function () {
    Agent.setIsAvatar(true);
    MyAvatar.displayName = "AC avatar";
    print("Position: " + JSON.stringify(MyAvatar.position));  // 0, 0, 0
}());
```
</details>
                </td>
            </tr>
        </tbody>
    </table>
            </div>
    </article>
    </section>
    </div>
</div>