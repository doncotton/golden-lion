import { CircleUser, Menu, Home, Package2 } from 'lucide-react'
import { IconLink } from '@/components/ui-custom/IconLink'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
	return (
		<header className="prodkt-header fixed top-[16px] flex flex-row h-[56px] items-center gap-4 border-b border-transparent backdrop-blur px-4 md:ps-6 md:pe-2 justify-between place-content-between">
			<nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<IconLink href="#">
					<Home
						size={16}
						className="text-[var(--accent-a11)] hover:text-[var(--ghost-a11)] transition"
					/>
					Home
				</IconLink>
				<a
					href="#"
					className="text-muted-foreground transition-colors hover:text-foreground"
				>
					Orders
				</a>
				<a
					href="#"
					className="text-muted-foreground transition-colors hover:text-foreground"
				>
					Products
				</a>
				<a
					href="#"
					className="text-muted-foreground transition-colors hover:text-foreground"
				>
					Customers
				</a>
				<a
					href="#"
					className="text-muted-foreground transition-colors hover:text-foreground"
				>
					Analytics
				</a>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<a
							href="#"
							className="flex items-center gap-2 text-lg font-semibold"
						>
							<Package2 className="h-6 w-6" />
							<span className="sr-only">Acme Inc</span>
						</a>
						<a href="#" className="hover:text-foreground">
							Dashboard
						</a>
						<a href="#" className="text-muted-foreground hover:text-foreground">
							Orders
						</a>
						<a href="#" className="text-muted-foreground hover:text-foreground">
							Products
						</a>
						<a href="#" className="text-muted-foreground hover:text-foreground">
							Customers
						</a>
						<a href="#" className="text-muted-foreground hover:text-foreground">
							Analytics
						</a>
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex items-center gap-4 md:ml-auto mr-0 md:gap-2 lg:gap-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary" size="icon" className="rounded-full">
							<CircleUser className="h-5 w-5" />
							<span className="sr-only">Toggle user menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	)
}
