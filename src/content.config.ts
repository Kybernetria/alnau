import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z
    .object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()).optional(),
      // Keep accepting older CMS/content files while normalising to `tags`.
      tag: z.string().optional(),
      excerpt: z.string(),
      draft: z.boolean().default(false),
    })
    .transform(({ tags, tag, ...frontmatter }) => ({
      ...frontmatter,
      // Keep the legacy value for published header labels while `tags` remains canonical.
      tag,
      tags: tags?.length ? tags : tag ? [tag] : [],
    })),
});

export const collections = { articles };
