// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Strategy-Driven Leader in Content & Knowledge Management',
  tagline: 'Hello! I’m Jenna Ingersoll — a strategy-driven content and knowledge leader with a passion for technology and writing. I build scalable content and knowledge systems that don’t just inform—they empower.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jmidocs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ingerjm0', // Usually your GitHub org/user name.
  projectName: 'jmi-portfolio', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: false,
        },
        blog: {
          blogTitle: 'Beyond the Docs',
          blogDescription: 'A Blog about knowledge management, technical writing, continuous improvement, and more',
          blogSidebarTitle: ' ',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Docs by JMI',
          src: 'img/logo.png',
          height: 75,
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'doc',
            position: 'right',
            docId: 'about-me',
            label: 'About Me',
          },
          {
            type: 'doc',
            position: 'right',
            docId: 'portfolio',
            label: 'Portfolio',
          },
          {
            type: 'doc',
            position: 'right',
            docId: 'resume',
            label: 'Resume',
          },
          {
            type: 'doc',
            position: 'right',
            docId: 'recommendations',
            label: 'Recommendations',
          },
          {
            to: 'blog', 
            label: 'Blog', 
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'E-mail me!',
                to: 'mailto:jenna.m.ingersoll@gmail.com',
              },
              {
                label: 'Find me on LinkedIn',
                to: 'https://www.linkedin.com/in/jenna-ingersoll/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jenna Ingersoll. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
