"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
	const router = useRouter();

	const handleHomeRedirect = () => {
		router.push("/");
	};

	return (
		// Esta clase asegura que el div exterior ocupe el 100% de la altura y anchura de la pantalla
		<div className="w-full h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white shadow-xl rounded-lg p-8 text-center w-full">
				<h1 className="text-6xl font-bold text-gray-800 mb-6">404</h1>
				<h2 className="text-3xl font-semibold text-gray-700 mb-4">
					Page Not Found
				</h2>
				<p className="text-gray-600 mb-8">
					We can't find the page you're looking for.
				</p>
				<button
					onClick={handleHomeRedirect}
					className="px-6 py-3 text-lg bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700"
				>
					Go back to home
				</button>
			</div>
		</div>
	);
};

export default NotFound;
