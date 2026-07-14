---
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# High Fidelity API Reference

**Tools Used**: JavaScript, JSDoc, GitHub Pages, Markdown, HTML, CSS

---

<div style={{ display: 'flex' }}>

<nav style={{ flex: '1 0 275px' }}>
<h3><a href="hifi-index.html">API Reference Home</a></h3><h3>Namespaces</h3>
<ul class="nav"><li><a href="hifi-Agent.html">Agent</a></li>
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

<h1 style={{ textAlign: 'center', marginBottom: '10px' }}>console</h1> 

<div class="jumpTo"> • <a href="#methods">Methods</a> • <a href="#method-details">Method Details</a> • </div>

<section>
<article>

<div class="container-overview">
    <div><p>The <code>console</code> API provides program logging facilities.</p><p class='availableIn'><b>Supported Script Types:</b> Interface Scripts &bull; Client Entity Scripts &bull; Avatar Scripts &bull; Server Entity Scripts &bull; Assignment Client Scripts</p></div>
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
            <td><a href="#assert"><code>assert</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Logs an "ERROR" message to the program log and triggers <a href="hifi-Script.html#errormessage">Script.errorMessage</a>, if a test condition fails. The message logged is "ERROR - Assertion failed : " followed by the message values separated by spaces.</p>
<p>Note: Script execution continues whether or not the test condition fails.</p>
</td>
        </tr>
<tr>
            <td><a href="#clear"><code>clear</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Clears the Developer &gt; Scripting &gt; Script Log debug window.</p>
</td>
        </tr>

<tr>
            <td><a href="#debug"><code>debug</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Logs a message to the program log and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged is the message values separated by spaces.</p>
</td>
        </tr>

<tr>
            <td><a href="#error"><code>error</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Logs an "ERROR" message to the program log and triggers <a href="hifi-Script.html#errormessage">Script.errorMessage</a>.
The message logged is "ERROR - " followed by the message values separated by spaces.</p>
</td>
        </tr>

<tr>
            <td><a href="#exception"><code>exception</code></a></td>
            <td><p>None</p></td>
            <td>
<p>A synonym of <a href="#error">console.error</a>.
Logs an "ERROR" message to the program log and triggers <a href="hifi-Script.html#errormessage">Script.errorMessage</a>.
The message logged is "ERROR - " followed by the message values separated by spaces.</p>
</td>
        </tr>

<tr>
            <td><a href="#group"><code>group</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Logs a message to the program log and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>, then starts indenting subsequent 
<a href="#log">console.log</a> messages until a <a href="#groupend">console.groupEnd</a>. Groups may be nested.</p>
</td>
        </tr>
<tr>
            <td><a href="#groupcollapsed"><code>groupCollapsed</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Has the same behavior as <a href="#group">console.group</a>.
Logs a message to the program log and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>, then starts indenting subsequent <a href="#log">console.log</a> messages until a <a href="#groupend">console.groupEnd</a>. Groups may be nested.</p>
</td>
        </tr>
<tr>
            <td><a href="#groupend"><code>groupEnd</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Finishes a group of indented <a href="#log">console.log</a> messages.</p>
</td>
        </tr>

<tr>
            <td><a href="#info"><code>info</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Logs an "INFO" message to the program log and triggers <a href="hifi-Script.html#infomessage">Script.infoMessage</a>. The message logged is "INFO -" followed by the message values separated by spaces.</p>
</td>
        </tr>

<tr>
            <td><a href="#log"><code>log</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Logs a message to the program log and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged is the message values separated by spaces.</p>
<p>If a <a href="#group">console.group</a> is in effect, the message is indented by an amount proportional to the group level.</p>
</td>
        </tr>
<tr>
            <td><a href="#time"><code>time</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Starts a timer, logs a message to the program log, and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged has 
the timer name and "Timer started".</p>
</td>
        </tr>
<tr>
            <td><a href="#timeEnd"><code>timeEnd</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Finishes a timer, logs a message to the program log, and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged has 
the timer name and the number of milliseconds since the timer was started.</p>
</td>
        </tr>

<tr>
            <td><a href="#trace"><code>trace</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Logs the JavaScript call stack at the point of call to the program log.</p>
</td>
        </tr>

<tr>
            <td><a href="#warn"><code>warn</code></a></td>
            <td><p>None</p></td>
            <td>
<p>Logs a "WARNING" message to the program log and triggers <a href="hifi-Script.html#warningmessage">Script.warningMessage</a>.
The message logged is "WARNING - " followed by the message values separated by spaces.</p>
</td>
        </tr>
</tbody>
</table>
    
---

## Method Details

<table>
    <thead>
        <tr>
            <th><a id="assert" />
<div class="toc">

#### assert

</div>
                <p id=".assert" class="member"><span class="type-signature">(static) </span>assert<span class="member">( assertion, ...message<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Logs an "ERROR" message to the program log and triggers <a href="hifi-Script.html#errormessage">Script.errorMessage</a>, if a test condition fails. The message logged is "ERROR - Assertion failed : " followed by the message values separated by spaces.</p>
                <p>Note: Script execution continues whether or not the test condition fails.</p>

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
    <td class="name"><code>assertion</code></td>
    <td class="type"><p>boolean</p></td>
    <td class="attributes"></td>
    <td class="description last">
        <p>The test condition value.</p>
    </td>
</tr>
<tr>
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td>
    <td class="attributes"><p>&lt;optional&gt;<br />&lt;repeatable&gt;</p></td>
    <td class="description last">
        <p>The message values to log if the assertion evaluates to <code>false</code>.</p>
    </td>
</tr>
</tbody>
</table>
                
<details>
<summary>Example: Demonstrate assertion behavior</summary>

```
Script.errorMessage.connect(function (message, scriptName) {
console.info("Error message logged:", "\"" + message + "\"", "in", "[" + scriptName + "]");
});

console.assert(5 === 5, "5 equals 5.", "This assertion will succeed.");  // No log output.
console.assert(5 > 6, "5 is not greater than 6.", "This assertion will fail.");  // Log output is generated.
console.info("hifi-Script continues running.");

// ERROR - Assertion failed :  5 is not greater than 6. This assertion will fail.
// INFO - Error message logged: "Assertion failed :  5 is not greater than 6. This assertion will fail." in [console.js]
// INFO - Script continues running.
```

</details>
</td>
</tr>
</tbody>
</table>
        
<table>
    <thead>
        <tr>
            <th><a id="clear" />
<div class="toc">

#### clear

</div>
                <p id=".clear" class="member"><span class="type-signature">(static) </span>clear<span class="member">(  )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Clears the Developer &gt; Scripting &gt; Script Log debug window.</p>       
            </td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th><a id="debug" />
<div class="toc">

#### debug

</div>
                <p id=".debug" class="member"><span class="type-signature">(static) </span>debug<span class="member">( ...message<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Logs a message to the program log and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>.
The message logged is the message values separated by spaces.</p>
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
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td><td class="attributes"><p>&lt;optional&gt;<br />&lt;repeatable&gt;</p></td>
<td class="description last">
<p>The message values to log.</p>
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
            <th><a id="error" />
<div class="toc">

#### error

</div>
                <p id=".error" class="member"><span class="type-signature">(static) </span>error<span class="member">( ...message<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Logs an "ERROR" message to the program log and triggers <a href="hifi-Script.html#errormessage">Script.errorMessage</a>. The message logged is "ERROR - " followed by the message values separated by spaces.</p>
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
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td><td class="attributes"><p>&lt;optional&gt;<br />&lt;repeatable&gt;</p></td>
<td class="description last">
<p>The message values to log.</p>
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
            <th><a id="exception" />
<div class="toc">

#### exception

</div>
                <p id=".exception" class="member"><span class="type-signature">(static) </span>exception<span class="member">( ...message<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>A synonym of <a href="#error">console.error</a>.
Logs an "ERROR" message to the program log and triggers <a href="hifi-Script.html#errormessage">Script.errorMessage</a>.
The message logged is "ERROR - " followed by the message values separated by spaces.</p>
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
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td>
<td class="attributes"><p>&lt;optional&gt;<br />&lt;repeatable&gt;</p></td>
<td class="description last">
<p>The message values to log.</p>
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
            <th><a id="group" />
<div class="toc">

#### group

</div>
                <p id=".group" class="member"><span class="type-signature">(static) </span>group<span class="member">( message )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Logs a message to the program log and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>, then starts indenting subsequent <a href="#log">console.log</a> messages until a <a href="#groupend">console.groupEnd</a>. Groups may be nested.</p>
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
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td>
    <td class="description last">
<p>The message value to log.</p>
</td>
</tr>
</tbody>
</table>
                
<details>
<summary>Example: Nested groups</summary>

```
console.group("Group 1");
console.log("Sentence 1");
console.log("Sentence 2");
console.group("Group 2");
console.log("Sentence 3");
console.log("Sentence 4");
console.groupEnd();
console.log("Sentence 5");
console.groupEnd();
console.log("Sentence 6");

//Group 1
//   Sentence 1
//   Sentence 2
//   Group 2
//      Sentence 3
//      Sentence 4
//   Sentence 5
//Sentence 6
```

</details>
</td>
</tr>
</tbody>
</table>
<table>
    <thead>
        <tr>
            <th><a id="groupcollapsed" />
<div class="toc">

#### groupCollapsed

</div>
                <p id=".groupCollapsed" class="member"><span class="type-signature">(static) </span>groupCollapsed<span class="member">( message )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Has the same behavior as <a href="#group">console.group</a>. Logs a message to the program log and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>, then starts indenting subsequent <a href="#log">console.log</a> messages until a <a href="#groupend">console.groupEnd</a>. Groups may be nested.</p>
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
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td>
    <td class="description last">
<p>The message value to log.</p>
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
            <th><a id="groupend" />
<div class="toc">

#### groupEnd

</div>
                <p id=".groupEnd" class="member"><span class="type-signature">(static) </span>groupEnd<span class="member">(  )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Finishes a group of indented <a href="#log">console.log</a> messages.</p>  
            </td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th><a id="info" />
<div class="toc">

#### info

</div>
                <p id=".info" class="member"><span class="type-signature">(static) </span>info<span class="member">( ...message<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Logs an "INFO" message to the program log and triggers <a href="hifi-Script.html#infomessage">Script.infoMessage</a>. The message logged is "INFO -" followed by the message values separated by spaces.</p>
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
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td>
<td class="attributes"><p>&lt;optional&gt;<br />&lt;repeatable&gt;</p></td>
<td class="description last">
<p>The message values to log.</p>
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
            <th><a id="log" />
<div class="toc">

#### log

</div>
                <p id=".log" class="member"><span class="type-signature">(static) </span>log<span class="member">( ...message<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Logs a message to the program log and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged is the message values separated by spaces.</p>
<p>If a <a href="#group">console.group</a> is in effect, the message is indented by an amount proportional to the group level.</p>
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
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td>
<td class="attributes"><p>&lt;optional&gt;<br />&lt;repeatable&gt;</p></td>
<td class="description last">
<p>The message values to log.</p>
</td>
</tr>
</tbody>
</table>
                
<details>
<summary>Example: Log some values</summary>

```
Script.printedMessage.connect(function (message, scriptName) {
console.info("Console.log message:", "\"" + message + "\"", "in", "[" + scriptName + "]");
});

console.log("string", 7, true);

// string 7 true
// INFO - Console.log message: "string 7 true" in [console.js]
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
    <thead>
        <tr>
            <th><a id="time" />
<div class="toc">

#### time

</div>
                <p id=".time" class="member"><span class="type-signature">(static) </span>time<span class="member">( name )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Starts a timer, logs a message to the program log, and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged has the timer name and "Timer started".</p>
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
<td class="name"><code>name</code></td>
<td class="type"><p>string</p> </td>
<td class="description last">
<p>The name of the timer.</p>
</td>
</tr>
</tbody>
</table>
                
<details>
<summary>Example: Time some processing</summary>

```
function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i &lt; 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
        break;
    }
}
}

console.time("MyTimer");
sleep(1000);  // Do some processing.
console.timeEnd("MyTimer");

// MyTimer: Timer started
// MyTimer: 1001ms
```

</details>
</td>
</tr>
</tbody>
</table>

<table>
    <thead>
        <tr>
            <th><a id="timeend" />
<div class="toc">

#### timeEnd

</div>
                <p id=".timeEnd" class="member"><span class="type-signature">(static) </span>timeEnd<span class="member">( name )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Finishes a timer, logs a message to the program log, and triggers <a href="hifi-Script.html#printedmessage">Script.printedMessage</a>. The message logged has 
the timer name and the number of milliseconds since the timer was started.</p>
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
<td class="name"><code>name</code></td>
<td class="type"><p>string</p> </td>
<td class="description last">
<p>The name of the timer.</p>
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
            <th><a id="trace" />
<div class="toc">

#### trace

</div>
                <p id=".trace" class="member"><span class="type-signature">(static) </span>trace<span class="member">(  )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Logs the JavaScript call stack at the point of call to the program log.</p>    
            </td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th><a id="warn" />
<div class="toc">

#### warn

</div>
                <p id=".warn" class="member"><span class="type-signature">(static) </span>warn<span class="member">( ...message<span class="signature-attributes">opt</span> )</span><span class="type-returns"></span></p>
</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
<p>Logs a "WARNING" message to the program log and triggers <a href="hifi-Script.html#warningmessage">Script.warningMessage</a>.
The message logged is "WARNING - " followed by the message values separated by spaces.</p>
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
    <td class="name"><code>message</code></td>
    <td class="type"><p>\*</p></td>
<td class="attributes"><p>&lt;optional&gt;<br />&lt;repeatable&gt;</p></td>
<td class="description last">
<p>The message values to log.</p>
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