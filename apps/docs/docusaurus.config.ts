import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

function customPostCssPlugin() {
  return {
    name: "custom-postcss",
    configurePostCss(options) {
      // Append new PostCSS plugins here.
      options.plugins.push(require("postcss-preset-env")); // allow newest CSS syntax
      return options;
    },
  };
}

const config: Config = {
  title: "Tip Top UI",
  tagline:
    "A highly customizable React component library with minimal dependencies",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://tiptopui.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stevenwaller", // Usually your GitHub org/user name.
  projectName: "tiptopui", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: [
            "./src/css/custom.css",
            "./src/css/web-fonts.css",
            "../../packages/components/dist/index.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Tip Top UI",
      logo: {
        alt: "My Site Logo",
        src: "img/TipTopUI-white.svg",
        srcDark: "img/TipTopUI.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "getStartedSidebar",
          label: "Get Started",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "componentsSidebar",
          label: "Components",
          position: "left",
        },
        {
          href: "https://github.com/stevenwaller/tiptopui",
          label: "GitHub",
          position: "right",
          className: "social-link github-link",
        },
        {
          href: "https://twitter.com/tiptopui",
          label: "Twitter",
          position: "right",
          className: "social-link twitter-link",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Tip Top UI.<br/>Made with ♥ by <a href="http://stevenwaller.io" target="_blank">Steven Waller</a>.`,
    },
    liveCodeBlock: {
      playgroundPosition: "top",
    },
    prism: {
      theme: {
        plain: {
          ...prismThemes.jettwaveLight.plain,
          backgroundColor: "#f0f0ea",
        },
        styles: [...prismThemes.jettwaveLight.styles],
      },
      darkTheme: {
        plain: {
          ...prismThemes.jettwaveDark.plain,
          backgroundColor: "#193347",
        },
        styles: [...prismThemes.jettwaveDark.styles],
      },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-react-docgen-typescript",
      /** @type {import('docusaurus-plugin-react-docgen-typescript').Options} */
      {
        // pass in a single string or an array of strings
        src: ["../../packages/components/src/**/*.tsx"],
        parserOptions: {
          // pass parserOptions to react-docgen-typescript
          // here is a good starting point which filters out all
          // types from react
          propFilter: (prop, component) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("@types/react");
            }

            return true;
          },
        },
      },
    ],
    customPostCssPlugin,
  ],
};

export default config;
