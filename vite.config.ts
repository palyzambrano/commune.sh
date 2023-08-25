import { defineConfig } from "vite";
import { sveltepress } from "@sveltepress/vite";
import { defaultTheme } from "@sveltepress/theme-default";

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar: {
          // Add your sidebar configs here
        },
        github: "https://github.com/commune-os",
        logo: "/logo.jpg",
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
