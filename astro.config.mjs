// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Spatial p5",
      customCss: [
        // '@fontsource/inter',
        // '@fontsource-variable/space-grotesk',
        './src/styles/global.css',
      ],
      components: {
        ThemeProvider: './src/components/ForceDarkTheme.astro',
        ThemeSelect: './src/components/EmptyComponent.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        Header: './src/components/Header.astro',
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TiborUdvari/spatial-p5",
        },
      ],
      sidebar: [
        { slug: 'introduction' },
        { slug: 'demo' },
        { slug: 'getting-started' },
        {
          label: "Community Works",
          items: [
            { label: "3D Etch A Sketch", slug: "community/3d-etch-a-sketch" },
            { label: "Share your work", slug: "community/share" },
          ],
        },
        // {
        //   label: "Topics",
        //   items: [
        //     { label: "Units and measurements", slug: "topics/units" },
        //     { label: "Hand Tracking", slug: "topics/hand-tracking" },
        //   ],
        // },
        // { slug: 'hardware' },
        // { slug: 'verified-configuration' },
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Example Guide", slug: "guides/example" },
        //   ],
        // },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
