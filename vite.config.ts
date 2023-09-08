import { defineConfig } from "vite";
import { sveltepress } from "@sveltepress/vite";
import { defaultTheme } from "@sveltepress/theme-default";

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          { title: "Docs", to: "/docs/business-plan/" },
          { title: "Blog", to: "/blog/" },
        ],
        sidebar: {
          "/docs/": [
            {
              title: "Open Business Plan",
              to: "/docs/business-plan/",
            },
            {
              title: "Terminology",
              to: "/docs/terminology/",
            },
            {
              title: "Values",
              to: "/docs/values/",
            },
          ],
        },
        github: "https://github.com/commune-os",
        logo: "/hero.png",
      }),
      siteConfig: {
        title: "Commune",
        description:
          "A cozy community platform built for world-wide web togetherness.",
      },
    }),
  ],
});

export default config;
