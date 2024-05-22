import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-[var(--accent-8)] border border-[var(--accent-9)]',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-[var(--tomato-8)]',
				outline:
					'border border-[var(--accent-a6)] bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-[var(--violet-6)] border border-[var(--violet-9)]',
				ghost:
					'relative text-[var(--accent-a11)] hover:text-[var(--ghost-a11)] after:absolute after:mx-auto after:my-auto after:top-0 bottom-0 after:left-0 after:right-0 after:inset-0 after:z-0 after:scale-75 after:rounded-lg after:bg-[var(--gray-a4)] after:opacity-0 after:will-change-transform after:transition hover:after:scale-100 hover:after:opacity-100',

				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default:
					'h-9 px-4 py-2 rounded-[var(--radius-3)] group flex flex-col items-center justify-center gap-2 relative',
				sm: 'h-8 px-3 text-xs',
				lg: 'h-10 px-8',
				icon: 'flex flex-col items-center justify-center h-9 w-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
