// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://clayenkitten.dev",
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Dela Gothic One",
            cssVariable: "--font-dela-gothic-one",
            options: {
                variants: [
                    {
                        weight: 400,
                        style: "normal",
                        src: [
                            "./src/assets/fonts/dela-gothic-one/DelaGothicOne.ttf",
                        ],
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "Montserrat",
            cssVariable: "--font-montserrat",
            options: {
                variants: [
                    {
                        weight: "100 900",
                        style: "normal",
                        src: [
                            "./src/assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf",
                        ],
                    },
                    {
                        weight: "100 900",
                        style: "italic",
                        src: [
                            "./src/assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf",
                        ],
                    },
                ],
            },
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
