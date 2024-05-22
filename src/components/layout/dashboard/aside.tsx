import { ProdktLogomark } from '@/components/brand/logomark'
import { ProdktLogotype } from '@/components/brand/logotype'
import {
	Book,
	Bot,
	Code2,
	LifeBuoy,
	Settings2,
	SquareTerminal,
	SquareUser,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	TooltipProvider,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip'

export function Aside() {
	return (
		<aside className="inset-y prodkt-aside left-0  z-20 flex h-full flex-col border-r border-transparent rounded-tl-lg">
			<div className="border-b border-transparent h-[56px] group flex items-center justify-center rounded-tl-lg">
				<Button
					variant="secondary"
					size="icon"
					className="mx-auto my-auto w-full h-full shadow-none border-none bg-transparent hover:bg-transparent"
					aria-label="Home"
				>
					<ProdktLogomark className="hidden prodkt-head-logo size-16 translate-x-6 translate-y-6 text-white  ms-auto mt-auto group-hover:scale-125 ease-in-out group-hover:ease-in-out duration-300" />
					<ProdktLogotype className="absolute size-12 translate-x-4 translate-y-0 text-white group-hover:fill-[var(--ghost-a10)] ms-auto mt-auto group-hover:scale-100 ease-in-out group-hover:ease-in-out duration-300" />
				</Button>
			</div>
			<nav className="grid gap-1 px-2 py-0 items-start justify-center">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="Playground"
							>
								<SquareTerminal className="size-5 " />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Playground
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="Models"
							>
								<Bot className="size-5 " />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Models
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="API"
							>
								<Code2 className="size-5 " />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							API
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="Documentation"
							>
								<Book className="size-5 " />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Documentation
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="Settings"
							>
								<Settings2 className="size-5 " />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Settings
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</nav>
			<nav className="mt-auto grid gap-1 p-2 items-start justify-center">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="mt-auto rounded-lg"
								aria-label="Help"
							>
								<LifeBuoy className="size-5" />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Help
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="mt-auto rounded-lg"
								aria-label="Account"
							>
								<SquareUser className="size-5" />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Account
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</nav>
		</aside>
	)
}
