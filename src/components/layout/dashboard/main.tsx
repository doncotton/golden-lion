export function Main({ children }: { children: React.ReactNode }) {
	return (
		<main className="z-[1] prodkt-main p-0 relative overflow-x-hidden overflow-y-visible scroll-m-0 scroll-smooth scroll-p-0">
			<div className="w-full h-full relative">{children}</div>
		</main>
	)
}
