import { defineConfig } from "vite";
import { sveltepress } from "@sveltepress/vite";
import { defaultTheme } from "@sveltepress/theme-default";

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [],
        sidebar: {
          "/docs/": [
            { title: "Title 1", to: "/docs/title-1/" },
            { title: "Title 2", to: "/docs/title-2/" },
            { title: "Title 3", to: "/docs/title-3/" },
            { title: "Title 4", to: "/docs/title-4/" },
          ],
          "/blog/": [],
        },
        github: "https://github.com/commune-os",
        logo: "logo.svg",
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
