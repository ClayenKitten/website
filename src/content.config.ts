import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
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
    loader: file("./content/contacts.toml"),
    schema: z.object({
        order: z.int(),
        label: z.string(),
        value: z.string(),
    }),
});

export const collections = { skillGroups, contacts };
