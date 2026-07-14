# Big Fish SDK Documentation

**Tools Used**: Doxygen, Docusaurus, GitHub Pages, Markdown, React.js, HTML, CSS

---

### Overview

The BFG SDKs help game developers integrate with Big Fish platform services and access mobile-specific APIs and features. Three SDKs are available: Unity, Android, and iOS. This sample highlights the Unity implementation, including the Unity SDK class reference, integration guide, and release notes.

<div class="portfolio-btn">
    <a href="https://docs.bigfishgames.com/unity/integrate-unitysdk" class="button button--lg" target="_blank">Browse Unity Docs &nbsp;<i class="fa fa-external-link"></i></a>
    <a href="#my-approach" class="button button2 button--lg">My Approach</a>
    <a href="#implementation" class="button button2 button--lg">Implementation</a>
</div>

---

### My Approach

When I joined the SDK team, developer documentation lived on an on-prem web server maintained by developers. Feature-specific documentation was sparse, and what little existed was buried within the SDK class references. The site had no integration guides or supporting docs, so finding implementation details was difficult. The UI for switching between platforms and versions was also unintuitive and cumbersome. Access required separate SVN credentials issued only to Big Fish employees, and remained SVN-gated even after the company sunset SVN in favor of GitHub. External developers had no way in at all.

To address these problems, I proposed and built "The Anchor," a centralized, publicly accessible developer portal built with Docusaurus and hosted on GitHub Pages. The Anchor consolidates SDK references, developer docs, and integration guides into one cohesive site.

---

### Implementation
**Step 1: Stand up the site generation and hosting infrastructure**

After evaluating documentation tooling options, I selected Docusaurus, an open-source static site generator built for documentation. Using its guides, I stood up an initial site linked to Big Fish's public GitHub repository.

**Step 2: Migrate the SDK reference**

The first major challenge was moving the existing SDK reference from the on-prem server to a public, cloud-hosted domain. I led the docs team in building a custom script that converted Doxygen-generated HTML into Markdown, handled formatting edge cases, and structured pages for Docusaurus. I also designed a custom CSS stylesheet to modernize the site's appearance and align it with Big Fish's brand guidelines.

The result: a documentation workflow that preserved our existing process — auto-generating source files from Doxygen, converting them to clean Markdown, and publishing them to a navigable, public site — while dramatically improving accessibility and usability.

**Step 3: Implement versioning**

The final step was extending documentation to past SDK releases. Using Docusaurus's built-in versioning, I set up independent, tagged instances for each SDK version, so legacy documentation remained accessible even as the current version evolved. I added a version-selector dropdown for easy navigation between releases, with each version's sidebar updating to match its selected instance.

The complete Unity SDK documentation is live on Big Fish's documentation site, [The Anchor](https://docs.bigfishgames.com/unity/integrate-unitysdk).

---

<a href="./portfolio" class="button button--lg">Back to Portfolio</a>
