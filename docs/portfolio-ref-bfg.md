# Big Fish SDK Documentation

**Tools Used**: Doxygen, Docusaurus, GitHub Pages, Markdown, HTML, CSS

---

The BFG SDKs help game developers integrate with Big Fish platform services and access mobile-specific APIs and features. Three SDKs are available: Unity, Android, and iOS. This sample highlights the Unity implementation, including an API reference, integration details, and release notes.

When I joined the SDK team, documentation was maintained by developers on a separate on-prem web server. To standardize and centralize it, I proposed to build "The Anchor", a centralized, web-hosted portal using Docusaurus and GitHub Pages. This site consolidates the SDK reference, alongside our developer docs, into a single, cohesive platform.

To migrate the SDK reference, we developed a custom script to convert Doxygen-generated HTML into Markdown for Docusaurus, with additional scripts to handle edge cases and formatting. We also designed a custom CSS stylesheet to modernize the appearance and align with The Anchor's branding.

Finally, we leveraged Docusaurus' versioning to host past SDK releases and set up independent instances for each SDK version, ensuring separate sidebar navigation while maintaining The Anchor’s unified design. 

The complete Unity SDK documentation is live on Big Fish's documentation site, [The Anchor](https://docs.bigfishgames.com/unity/integrate-unitysdk).

<div class="portfolio-example">

![BFG Unity SDK](/img/portfolio-unitysdk.png)

</div>

---

<div style={{ textAlign: 'center'}}>

<h3> [View Portfolio](./portfolio) </h3>

</div>