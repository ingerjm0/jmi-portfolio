# High Fidelity User Documentation

**Tools Used**: Sphinx | Read the Docs | GitHub | Markdown | reStructuredText (RST) | CSS | HTML5 | Paint.NET

---

## Overview

High Fidelity ("HiFi") is an open-source software where users can create and share virtual reality (VR) experiences. Users can create their own VR worlds, explore other worlds, connect with other users, host events and much more. The HiFi documentation system uses Sphinx to generate the documentation, and Read the Docs to publish/host it. GitHub serves as a helpful middleman to store all of the source files for the docs.

High Fidelity is available as an open-source platform, and all content is forked and hosted according to the distribution requirements set out in the Apache License 2.0.

<div class="portfolio-btn">
    <a href="https://ingerjm0.github.io/hifi-docs/home.html" class="button button--lg" target="_blank">Browse HiFi Docs &nbsp;<i class="fa fa-external-link"></i></a>
    <a href="#my-approach" class="button button2 button--lg">My Approach</a>
    <a href="#implementation" class="button button2 button--lg">Implementation</a>
</div>

---

### My Approach

When I joined, I identified two core problems limiting the effectiveness of our documentation: an outdated tooling system and an information architecture that hadn't scaled with the product.

**Tooling**

Content lived in GitHub, but the workflow around it was almost entirely manual. To make an update, I'd pull the files from the repository, edit them locally, manually push changes back, and run a link checker. Only then could Grav (a flat-file content management system) rebuild the site and deploy the artifacts to our AWS servers.

Our GitHub > Grav > AWS process fell short on two fronts: one, it did not have an easy authoring & review process and two, customizing the output was a tedious process of digging through templates and CSS classes then overriding them. Beyond these two blockers, Grav also had a handful of smaller but persistent issues: a mediocre search, unreliable analytics, and difficulty incorporating documentation from other systems (like our JSDoc-based API reference).

To address these issues, I proposed a transition to Sphinx to generate the docs, and Read the Docs to publish, version, and host it. 

**Information Architecture**

The existing information architecture had grown organically and was difficult for users to navigate. I defined three guiding principles for a new structure:

1. **Every page is page one** — Users don't arrive through a predictable path; they might land on any page via search or a forum link. Navigation needed to help someone orient themselves and find what they need from *any* entry point, not just the homepage.
2. **People don't read** — Assume no one reads a doc page start to finish. Structure content with headings, hyperlinks, and lists so information is scannable, not just readable.
3. **Clean, consistent, and concise** — Docs should read as if written by one person, with just enough information for the audience — not too much, not too little.

From these principles, I defined success criteria the old system lacked, including: 

- an always-visible table of contents that doesn't shift as users navigate
- a maximum nesting depth of four levels 
- no empty or placeholder pages
- in-page navigation for longer pages 
- a working search engine
- topic grouping by audience intent, using "See Also" links to connect to related content

---

### Implementation 

**Step 1: Evaluate and set up new tooling**

I selected Sphinx to replace Grav, installed and configured it, and customized the theme to match our existing site's look and feel.

Since Sphinx is built around RST with only limited support for Markdown, I ran an initial build using our existing Markdown files and audited the output. Any file that failed to build, or didn't match our desired formatting, was converted to RST by hand.

**Step 2: Set up hosting on Read the Docs**

I set up Read the Docs and linked it to our GitHub repository, then defined our versioning strategy and completed the build process configuration.

**Step 3: Redesign the information architecture**

Using the principles and success criteria I'd defined, I reorganized our content around top-level "books" based on user intent rather than product structure:

- **Explore** — for users who want to hang out with friends, visit places, and discover fun things to do
- **Create** — for users who want to create items, and optionally sell them on the Marketplace
- **Script** — for advanced users who want to extend their experience through scripting
- **Host** — for users who want to build experiences for others and administer a domain
- **Sell** — for users who want to sell their creations in High Fidelity
- **Contribute** — for users who want to connect with the High Fidelity team or contribute to development

Each of these parent books breaks down into more detailed sub-topics. 

**Step 4: Fill content gaps**

As part of the reorganization, I audited the new structure against our existing content and identified roughly 20 articles that were needed but didn't yet exist. I wrote the missing content required to complete the new structure.

View a forked version of the documentation here: [High Fidelity User Documentation](https://ingerjm0.github.io/hifi-docs/home.html)

---

<a href="./portfolio" class="button button--lg">Back to Portfolio</a>
