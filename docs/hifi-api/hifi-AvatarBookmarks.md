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

<h1 style={{ textAlign: 'center', marginBottom: '10px' }}>AvatarBookmarks</h1>    

<div class="jumpTo"> • <a href="#methods">Methods</a> • <a href="#signals">Signals</a> • <a href="#type-definitions">Type Definitions</a> • <a href="#method-details">Method Details</a> • <a href="#signal-details">Signal Details</a> • </div>

<section>
<article>
<div class="container-overview">
    <div><p>The <code>AvatarBookmarks</code> API provides facilities for working with avatar bookmarks ("favorites" in the Avatar app). An avatar bookmark associates a name with an avatar model, scale, and avatar entities (wearables).</p><p class='availableIn'><b>Supported Script Types:</b> Interface Scripts &bull; Client Entity Scripts &bull; Avatar Scripts</p></div>

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
        <td><p><a href="#addBookmark"><code>addBookmark</code></a></p></td>
        <td><p>None</p></td>
        <td>
            <p>Adds a new (or updates an existing) avatar bookmark with your current avatar model, scale, and avatar entities.</p>
        </td>
    </tr>
<!--
<details>
    <summary>Example: Add a new avatar bookmark and report the bookmark data</summary>
    
```
var bookmarkName = "New Bookmark";
AvatarBookmarks.addBookmark(bookmarkName);
var bookmarkData = AvatarBookmarks.getBookmark(bookmarkName);
print("Bookmark data: " + JSON.stringify(bookmarkData));
```

-->

<tr>
    <td><p><a href="#deletebookmark"><code>deleteBookmark</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Performs no action.</p>
        <p class="important">Deprecated: This function is deprecated and will be removed.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#getbookmark"><code>getBookmark</code></a></p></td>
    <td class="type"><p><a href="#bookmarkdata">AvatarBookmarks.BookmarkData</a> | Object</p></td>
    <td>
        <p>Gets the details of an avatar bookmark.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#getbookmarks"><code>getBookmarks</code></a></p></td>
    <td class="type"><p>Object.&lt;string, <a href="#bookmarkdata">AvatarBookmarks.BookmarkData</a>&gt;</p></td>
    <td>
        <p>Gets the details of all avatar bookmarks.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#loadbookmark"><code>loadBookmark</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Loads an avatar bookmark, setting your avatar model, scale, and avatar entities (or attachments if an old bookmark) to those in the bookmark.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#removebookmark"><code>removeBookmark</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Deletes an avatar bookmark.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#savebookmark"><code>saveBookmark</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Updates an existing bookmark with your current avatar model, scale, and wearables. No action is taken if the bookmark doesn't exist.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#updateavatarentities"><code>updateAvatarEntities</code></a></p></td>
    <td><p>None</p></td>
    <td>
        <p>Updates the avatar entities and their properties. Current avatar entities not included in the list provided are deleted.</p>
        <p class="important">Deprecated: This function is deprecated and will be removed. Use the <a href="hifi-MyAvatar.html">MyAvatar</a> API instead.</p>
    </td>
</tr>
<!--

-->
            
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
    <td><p><a href="#bookmarkadded"><code>bookmarkAdded</code></a></p></td>
    <td>
        <p>Triggered when a new avatar bookmark is added or an existing avatar bookmark is updated with the <a href="#addbookmark">addBookmark</a> method.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#bookmarkdeleted"><code>bookmarkDeleted</code></a></p></td>
    <td>
        <p>Triggered when an avatar bookmark is deleted.</p>
    </td>
</tr>
<tr>
    <td><p><a href="#bookmarkloaded"><code>bookmarkLoaded</code></a></p></td>
    <td>
        <p>Triggered when an avatar bookmark is loaded, setting your avatar model, scale, and avatar entities (or attachments if an old bookmark) to those in the bookmark.</p>
    </td>
</tr>       
</tbody>
</table>
        
---

## Type Definitions

<table>
    <thead>
        <tr>
            <th><a id="bookmarkdata" />
<div class="toc">

#### BookmarkData

</div>
                <p class="member"><span id=".BookmarkData" class="member">BookmarkData</span></p><p>Type: object</p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Details of an avatar bookmark.</p>
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
            <td><span class="signature">version</span></td>
            <td class="type"><p>number</p></td>
            <td class="attributes"></td>
            <td class="description last">
            <p>The version of the bookmark data format.</p>
            </td>
        </tr>
        <tr>
            <td><span class="signature">avatarUrl</span></td>
            <td class="type"><p>string</p></td>
            <td class="attributes"></td>
            <td class="description last">
            <p>The URL of the avatar model.</p>
            </td>
        </tr>
        <tr>
            <td><span class="signature">avatarScale</span></td>
            <td class="type"><p>number</p></td>
            <td class="attributes"></td>
            <td class="description last">
            <p>The target scale of the avatar.</p>
            </td>
        </tr>
        <tr>
            <td><span class="signature">avatarEntites</span></td>
            <td class="type"><p>Array.&lt;Object.&lt;"properties", <a href="hifi-Entities.html#entityproperties">Entities.EntityProperties</a>&gt;&gt;</p></td>
            <td class="attributes"><p>&lt;optional&gt;</p></td>
            <td class="description last">
            <p>The avatar entities included with the bookmark.</p>
            </td>
        </tr>
        <tr>
            <td><span class="signature">attachments</span></td>
            <td class="type"><p>Array.&lt;MyAvatar.AttachmentData&gt;</p></td>
            <td class="attributes"><p>&lt;optional&gt;</p></td>
            <td class="description last">
            <p>The attachments included with the bookmark.</p>
                <p class="important">Deprecated: Use avatar entities instead.</p>
            </td>
        </tr>
    </tbody>
</table>


</td>
</tr>
</tbody>
</table>
</div>
        
---

## Method Details

<table>
    <thead>
        <tr>
            <th><a id="addbookmark" />
<div class="toc">

#### addBookmark

</div>
<p class="member"><span id=".addBookmark" class="member"><span class="type-signature">(static) </span>addBookmark<span class="member">( bookmarkName )</span><span class="type-returns"></span></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Adds a new (or updates an existing) avatar bookmark with your current avatar model, scale, and avatar entities.</p>

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
        <td class="name"><code>bookmarkName</code></td>
        <td class="type"><p>string</p></td>
        <td class="description last">
            <p>The name of the avatar bookmark (case sensitive).</p>
        </td>
    </tr>
</tbody>
</table>
                    
<details>
<summary>Add a new avatar bookmark and report the bookmark data</summary>
    
```
var bookmarkName = "New Bookmark";
AvatarBookmarks.addBookmark(bookmarkName);
var bookmarkData = AvatarBookmarks.getBookmark(bookmarkName);
print("Bookmark data: " + JSON.stringify(bookmarkData));
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
    <thead>
        <tr>
            <th><a id="deletebookmark" />
<div class="toc">

#### deleteBookmark

</div>
<p class="member"><span id=".deleteBookmark" class="member"><span class="type-signature">(static) </span>deleteBookmark<span class="member">(  )</span><span class="type-returns"></span></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Performs no action.</p>
                <p class="important">Deprecated: This function is deprecated and will be removed.</p>
            </td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th><p class="member"><span id=".getBookmark" class="member"><span class="type-signature">(static) </span>getBookmark<span class="member">( bookmarkName )</span><span class="type-returns"> &rarr; &lcub; <a href="#bookmarkdata">AvatarBookmarks.BookmarkData</a>|Object &rcub;</span></span></p><p>Returns: The bookmark data if the bookmark exists, <code>&lcub;&rcub;</code> if it doesn't.</p></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Gets the details of an avatar bookmark.</p>

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
        <td class="name"><code>bookmarkName</code></td>
        <td class="type"><p>string</p></td>
        <td class="description last">
            <p>The name of the avatar bookmark (case sensitive).</p>
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
            <th><a id="getbookmarks" />
<div class="toc">

#### getBookmarks

</div>
<p class="member"><span id=".getBookmarks" class="member"><span class="type-signature">(static) </span>getBookmarks<span class="signature">(  )</span><span class="type-returns"> &rarr; &lcub; Object.&lt;string, <a href="#bookmarkdata">AvatarBookmarks.BookmarkData</a>&gt; &rcub;</span></span></p><p>Returns: The current avatar bookmarks in an object where the keys are the bookmark names and the values are the bookmark details.</p>
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>Gets the details of all avatar bookmarks.</p>

<details>
    <summary>Example: List the names and URLs of all the avatar bookmarks</summary>
    
```
var bookmarks = AvatarBookmarks.getBookmarks();
print("Avatar bookmarks:");
for (var key in bookmarks) {
    print("- " + key + " " + bookmarks[key].avatarUrl);
};
```

</details>
</td>
</tr>
        </tbody>
    </table>
<table>
    <thead>
        <tr>
            <th><a id="loadbookmark" />
<div class="toc">

#### loadBookmarks

</div>
<p class="member"><span id=".loadBookmark" class="member"><span class="type-signature">(static) </span>loadBookmark<span class="member">( bookmarkName )</span><span class="type-returns"></span></span></p>
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>Loads an avatar bookmark, setting your avatar model, scale, and avatar entities (or attachments if an old bookmark) to those in the bookmark.</p>

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
        <td class="name"><code>bookmarkName</code></td>
        <td class="type"><p>string</p></td>
        <td class="description last">
            <p>The name of the avatar bookmark to load (case sensitive).</p>
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
            <th><a id="removebookmark" />
<div class="toc">

#### removeBookmark

</div>
<p class="member"><span id=".removeBookmark" class="member"><span class="type-signature">(static) </span>removeBookmark<span class="member">( bookmarkName )</span><span class="type-returns"></span></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Deletes an avatar bookmark.</p>

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
        <td class="name"><code>bookmarkName</code></td>
        <td class="type"><p>string</p></td>
        <td class="description last">
            <p>The name of the avatar bookmark to delete (case sensitive).</p>
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
            <th><a id="savebookmark" />
<div class="toc">

#### saveBookmark

</div>
<p class="member"><span id=".saveBookmark" class="member"><span class="type-signature">(static) </span>saveBookmark<span class="member">( bookmarkName )</span><span class="type-returns"></span></span></p>
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>Updates an existing bookmark with your current avatar model, scale, and wearables. No action is taken if the bookmark doesn't exist.</p>

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
        <td class="name"><code>bookmarkName</code></td>
        <td class="type"><p>string</p></td>
        <td class="description last">
            <p>The name of the avatar bookmark (case sensitive).</p>
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
            <th><a id="updateavatarentities" />
<div class="toc">

#### updateAvatarEntities

</div>
<p class="member"><span id=".updateAvatarEntities" class="member"><span class="type-signature">(static) </span>updateAvatarEntities<span class="member">( avatarEntities )</span><span class="type-returns"></span></span></p>
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>Updates the avatar entities and their properties. Current avatar entities not included in the list provided are deleted.</p>
                    <p class="important">Deprecated: This function is deprecated and will be removed. Use the <a href="hifi-MyAvatar.html">MyAvatar</a> API instead.</p>            
</td>
</tr>
</tbody>
</table>
        
---

## Signal Details

<table>
    <thead>
        <tr>
            <th><a id="bookmarkadded" />
<div class="toc">

#### bookmarkAdded

</div>
<p class="member"><span id=".bookmarkAdded" class="member">bookmarkAdded( bookmarkName )</span></p><p>Returns: Signal</p>
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>Triggered when a new avatar bookmark is added or an existing avatar bookmark is updated, using <a href="#addbookmark">addBookmark</a>.</p>

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
        <td class="name"><code>bookmarkName</code></td>
        <td class="type"><p>string</p></td>
        <td class="description last">
            <p>The name of the avatar bookmark added or updated.</p>
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
            <th><a id="bookmarkdeleted" />
<div class="toc">

#### bookmarkDeleted

</div>
<p class="member"><span id=".bookmarkDeleted" class="member">bookmarkDeleted( bookmarkName )</span></p><p>Returns: Signal</p>
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>Triggered when an avatar bookmark is deleted.</p>

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
        <td class="name"><code>bookmarkName</code></td>
        <td class="type"><p>string</p></td>
        <td class="description last">
            <p>The name of the avatar bookmark deleted.</p>
        </td>
    </tr>
</tbody>
</table>
                    
<details>
    <summary>Example: Report when a bookmark is deleted</summary>
    
```
AvatarBookmarks.bookmarkDeleted.connect(function (bookmarkName) {
    print("Bookmark deleted: " + bookmarkName);
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
            <th><a id="bookmarkloaded" />
<div class="toc">

#### bookmarkLoaded

</div>
<p class="member"><span id=".bookmarkLoaded" class="member">bookmarkLoaded( bookmarkName )</span></p><p>Returns: Signal</p>
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>Triggered when an avatar bookmark is loaded, setting your avatar model, scale, and avatar entities (or attachments if an 
old bookmark) to those in the bookmark.</p>

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
        <td class="name"><code>bookmarkName</code></td>
        <td class="type"><p>string</p></td>
        <td class="description last">
            <p>The name of the avatar bookmark loaded.</p>

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