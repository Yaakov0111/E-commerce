"use client";
import { getOrders } from "@/app/helpers/orders.helper";
import { useAuth } from "@/context/AuthContext";
import { IUserSession } from "@/interfaces/IRegisterUser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Orders = () => {
	const router = useRouter();

	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const { userData } = useAuth();

	const fetchData = async () => {
		try {
			const ordersResponse = await getOrders(userData?.token!);
			setOrders(ordersResponse);
		} catch (err) {
			setError("Failed to fetch orders");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (userData?.user.name) {
			userData?.user.name === undefined ? router.push("/login") : fetchData();
		}
	}, [userData?.user]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className="container mx-auto p-4">
			{orders && orders.length > 0 ? (
				orders.map((order: any) => (
					<div key={order.id} className="border-b border-gray-200 pb-4 mb-4">
						<div className="mb-2">
							<p className="text-lg font-semibold">
								{new Date(order.date).toLocaleDateString()}
							</p>
							<p className="text-sm text-gray-500">{order.status}</p>
						</div>
						<div>
							{order.products && Array.isArray(order.products) ? (
								order.products.map((product: any) => (
									<div key={product.id} className="flex items-center mb-4">
										<img
											src={product.image}
											alt={product.name}
											className="h-16 w-16 object-cover rounded mr-4"
										/>
										<div>
											<p className="text-md font-semibold">{product.name}</p>
											<p className="text-sm text-gray-500">
												{product.description}
											</p>
											<p className="text-sm text-gray-500">
												${product.price.toFixed(2)}
											</p>
										</div>
									</div>
								))
							) : (
								<p>No products found</p>
							)}
						</div>
					</div>
				))
			) : (
				<div>
					<p>No orders yet</p>
				</div>
			)}
		</div>
	);
};

export default Orders;
