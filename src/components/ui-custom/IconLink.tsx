import clsx from 'clsx'

export function IconLink({
	children,
	className,
	compact = false,
	icon: Icon,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	compact?: boolean
	icon?: React.ComponentType<{ className?: string; size?: number }>
}) {
	return (
		<a
			{...props}
			className={clsx(
				className,
				'group relative isolate overflow-hidden border-none flex text-[var(--accent-12)] w-auto rounded-lg px-3 py-1 text-[0.8125rem]/6 font-medium transition-colors',
				compact ? 'gap-x-2' : 'gap-x-3',
			)}
		>
			<span className="absolute mx-auto my-auto top-0 bottom-0 left-0 right-0 inset-0 -z-10 scale-75 rounded-lg bg-[var(--gray-a4)] opacity-0 will-change-transform transition group-hover:scale-100 group-hover:opacity-100" />
			{Icon && <Icon size={12} className="" />}
			<span className="flex flex-row items-center justify-center gap-2">
				{children}
			</span>
		</a>
	)
}
