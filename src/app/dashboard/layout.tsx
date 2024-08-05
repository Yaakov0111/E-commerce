import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav className="bg-black p-4">
				<div className="container mx-auto flex justify-center items-center">
					<div className="flex space-x-4">
						<Link href="/dashboard">
							<span className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
								Profile
							</span>
						</Link>
						<Link href="/dashboard/orders">
							<span className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
								Orders
							</span>
						</Link>
					</div>
				</div>
			</nav>
			<main className="container mx-auto p-4">{children}</main>
		</>
	);
}
