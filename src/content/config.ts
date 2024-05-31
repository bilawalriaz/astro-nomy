import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: z.string(),
      category: z.array(z.string()), // Changed to array of strings
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      phone_number: z.string().optional(), // Added phone_number field
      googleMapsUri: z.string().optional(), // Added googleMapsUri field
      reviews: z.array(z.string()).optional(), // Added reviews field
      amenities: z.array(z.string()).optional(), // Added amenities field
    }),
});

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const guides = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const releases = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      versionNumber: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      // Transform string to Date object
      date: z.date({ coerce: true }),
    }),
});

export const collections = { blog, docs, guides, releases };
