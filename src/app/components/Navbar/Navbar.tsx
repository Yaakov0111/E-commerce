"use client";
import { IUserSession } from "@/interfaces/IRegisterUser";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import LogoCart from "../Cart/LogoCart";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthContext";
import categoriesToPreload from "@/app/helpers/categories";

const Navbar = () => {
	const { userData, setUserData } = useAuth();
	const router = useRouter();
	const pathname = usePathname();

	const handleLogout = () => {
		localStorage.removeItem("userSession");
		setUserData(null);
		router.push("/");

		Swal.fire("Logout successfully", "", "success");
	};
	return (
		<nav className="dark:bg-neutral-600 ">
			<div className=" mx-auto flex justify-between items-center ">
				<div className="text-white">
					<Link href="/" className="text-xl font-bold ">
						<Logo />
					</Link>
				</div>
				<div>
					{categoriesToPreload &&
						categoriesToPreload.map((category) => {
							return (
								<Link key={category.id} href={`/products/${category.id}`}>
									<label className="m-10 text-gray-300 hover:text-black">
										{" "}
										{category.name}
									</label>
								</Link>
							);
						})}
				</div>
				<div className=" text-2xl mr-10  flex items-center">
					{userData && userData.token ? (
						<>
							<Link
								href="/dashboard"
								className="text-white hover:text-gray-300"
							>
								My Profile
							</Link>

							<Link href="/cart" className="text-white hover:text-gray-300">
								<LogoCart />
							</Link>

							<button
								onClick={handleLogout}
								className="text-red-600 hover:text-red-900"
							>
								Logout
							</button>
						</>
					) : (
						<>
							<Link
								href="/login"
								className="text-white hover:text-gray-300 mr-10"
							>
								Login
							</Link>
							<Link href="/register" className="text-white hover:text-gray-300">
								Register
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
