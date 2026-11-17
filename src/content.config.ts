import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const skillGroups = defineCollection({
    loader: file("./content/skills.toml"),
    schema: z.object({
        order: z.int(),
        label: z.string(),
        skills: z.array(
            z.object({
                label: z.string(),
                icon: z.string(),
                wide: z.boolean().optional(),
            }),
        ),
    }),
});

const contacts = defineCollection({
    loader: glob({ pattern: "contacts.toml", base: "./content" }),
    schema: z.object({
        email: z.string(),
        telegram: z.string(),
        github: z.string(),
    }),
});

export const collections = { skillGroups, contacts };
