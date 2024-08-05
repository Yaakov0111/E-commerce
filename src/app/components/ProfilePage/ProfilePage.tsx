"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProfilePage = () => {
	const router = useRouter();
	const { userData } = useAuth();

	useEffect(() => {
		if (!userData) {
			router.push("/login");
		}
	}, [userData, router]);

	if (!userData) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<div className="bg-white shadow-lg rounded-lg p-6  flex flex-col items-center">
				<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
				<h1 className="text-xl font-semibold mb-2">
					Bienvenido, {userData.user.name}
				</h1>
				<p className="text-gray-700">
					Tu dirección es: {userData.user.address}
				</p>
			</div>
		</div>
	);
};

export default ProfilePage;
