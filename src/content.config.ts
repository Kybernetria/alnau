import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false).optional(),
  }),
});

export const collections = { articles };
