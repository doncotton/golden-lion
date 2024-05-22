import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
			nesting: true,
		}),
		expressiveCode(),
	],
	output: 'server',
	adapter: vercel(),
})
