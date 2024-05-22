import clsx from 'clsx'

function ButtonInner({
	arrow = false,
	children,
}: {
	arrow?: boolean
	children: React.ReactNode
}) {
	return (
		<>
			<span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15" />
			<span className="absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10" />
			{children} {arrow ? <span aria-hidden="true">&rarr;</span> : null}
		</>
	)
}

export function ProdktButton({
	className,
	arrow,
	children,
	...props
}: { arrow?: boolean } & (
	| ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
	| ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
)) {
	className = clsx(
		className,
		'group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white',
		arrow ? 'pl-2.5 pr-[calc(9/16*1rem)]' : 'px-2.5',
	)

	return typeof props.href === 'string' ? (
		<a className={className} {...props}>
			<ButtonInner arrow={arrow}>{children}</ButtonInner>
		</a>
	) : (
		<button className={className} {...props}>
			<ButtonInner arrow={arrow}>{children}</ButtonInner>
		</button>
	)
}
