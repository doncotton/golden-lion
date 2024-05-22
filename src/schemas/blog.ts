import { defineCollection, reference, z } from 'astro:content'

export const blogSchema = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		// Reference a single author from the `authors` collection by `id`
		author: reference('authors'),
		// Reference an array of related posts from the `blog` collection by `slug`
		relatedPosts: z.array(reference('blog')),
	}),
})

export const authorSchema = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		portfolio: z.string().url(),
	}),
})
