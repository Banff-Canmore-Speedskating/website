import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    legacyId: z.number().optional(),
    order: z.number().default(99),
    navLabel: z.string().optional(),
    navGroup: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    legacyId: z.number().optional(),
  }),
});

export const collections = { pages, posts };
