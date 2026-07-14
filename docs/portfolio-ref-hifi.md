# High Fidelity API Reference

**Tools Used**: JavaScript, JSDoc, GitHub Pages, Markdown, HTML, CSS

---

### Overview

The High Fidelity JavaScript API lets content creators and developers create new experiences and transform virtual worlds within the High Fidelity metaverse. This sample highlights the work I did to modernize the docs-as-code pipeline, from docs generation to formatting and hosting. Note that High Fidelity no longer supports this API - it was open source, and I have moved all JavaScript files to my personal GitHub.

<div class="portfolio-btn">
    <a href="./hifi-api/hifi-index.html" class="button button--lg">Browse API Reference</a>
    <a href="#my-approach" class="button button2 button--lg">My Approach</a>
    <a href="#implementation" class="button button2 button--lg">Implementation</a>
</div>

---

### My Approach

Before I joined High Fidelity, the API reference was generated using JSDoc, then extracted and merged with Markdown templates via a custom JavaScript script. This script required constant maintenance, and the iterative process of generating, merging, and re-creating files introduced significant inefficiencies.

After analyzing the existing architecture, I proposed a full migration to JSDoc for both documentation generation and formatting, paired with GitHub Pages for hosting. This eliminated the need for multiple interdependent tools and scripts, streamlining the process while giving the team greater control over branding, design, and implementation.

---

### Implementation

**Step 1: Configure JSDoc**

I started by studying the existing toolchain and identifying its problem areas. Further research showed that JSDoc could handle the entire pipeline — generating documentation from code, formatting the output, and adding table-of-contents navigation, syntax highlighting, and search functionality. The first step was configuring JSDoc to do all of this.

I configured:
- The default template to specify external files to include (custom CSS, images, scripts, fonts, etc.) and to control TOC generation
- The JSDoc config file to specify plugins, source files, and supported tags
- Custom CSS to ensure correct layout and formatting

I then went through the JavaScript API codebase and rewrote the doc comments to match JSDoc's expected tags and formatting.

**Step 2: Set up hosting on GitHub Pages**

I created a new public documentation repository and enabled GitHub Pages, configured to build automatically from the main branch on every commit. I set up a custom domain, and updated Jekyll's default stylesheet and templates to properly render JSDoc's output.

The initial JSDoc output was uploaded manually to the new repository, producing the first published build.

:::info

*Note: High Fidelity no longer maintains this API. Since it was open source, I forked a copy of the documentation files and regenerated this sample. The formatting may differ slightly from the original.*

:::

View a sample of the JavaScript API reference here: [View API Reference](./hifi-api/hifi-index.html).

---

<a href="./portfolio" class="button button--lg">Back to Portfolio</a>
