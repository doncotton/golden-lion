/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		fontFamily: {
			sans: ['DM Sans Variable', 'sans-serif'],
		},
		extend: {
			colors: {
				border: 'var(--ghost-a12)',
				input: 'rgb(var(--input))',
				ring: 'rgb(var(--accent-a8))',
				background: 'var(--gray-1)',
				foreground: 'var(--gray-12)',
				primary: {
					DEFAULT: 'var(--accent-9)',
					foreground: 'var(--accent-12)',
				},
				secondary: {
					DEFAULT: 'var(--violet-9)',
					foreground: 'var(--violet-12)',
				},
				destructive: {
					DEFAULT: 'var(--tomato-9)',
					foreground: 'var(--tomato-12)',
				},
				muted: {
					DEFAULT: 'var(--ghost-a1)',
					foreground: 'var(--ghost-a11)',
				},
				accent: {
					DEFAULT: 'var(--accent-9)',
					foreground: 'rgb(var(--accent-1))',
				},
				popover: {
					DEFAULT: 'rgb(var(--popover))',
					foreground: 'rgb(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'var(--gray-9)',
					foreground: 'var(--gray-12)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
