"use client";

import { useState, useEffect } from "react";
import { IProduct } from "@/interfaces/IProducts";
import { IUserSession } from "@/interfaces/IRegisterUser";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createOrder } from "@/app/helpers/orders.helper";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthContext";

const Cart = () => {
	const [cart, setCart] = useState<IProduct[]>([]);
	const [totalCart, setTotalCart] = useState<number>(0);
	const router = useRouter();
	const { userData } = useAuth();

	useEffect(() => {
		if (userData?.user.name) {
			userData?.user.name === undefined && router.push("/login");
		}
	}, [userData?.user]);

	useEffect(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
			if (storedCart) {
				let totalCart = 0;
				storedCart.map((item: IProduct) => {
					totalCart = totalCart + item.price;
				});
				setCart(storedCart);
				setTotalCart(totalCart);
			}
		}
	}, []);

	const handleRemove = (productId: number) => {
		const updatedCart = cart.filter((product) => product.id !== productId);
		setCart(updatedCart);
		localStorage.setItem("cart", JSON.stringify(updatedCart));

		const newTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
		setTotalCart(newTotal);
	};

	const handleClick = async () => {
		const idProducts = new Set(cart?.map((product) => product.id));
		await createOrder(Array.from(idProducts), userData?.token!);

		Swal.fire("Order created successfully", "", "success");
		router.push("/dashboard/orders");

		setCart([]);
		setTotalCart(0);
		localStorage.setItem("cart", "[]");
	};

	return (
		<div className="container mx-auto p-4">
			<div className="bg-white shadow-xl">
				<div className="px-4 py-6 sm:px-6 border-b">
					<div className="flex items-start justify-between">
						<h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
						<div className="ml-3 flex h-7 items-center">
							<button
								type="button"
								onClick={() => router.push("/")}
								className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">Close panel</span>
								<XMarkIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>

				<div className="px-4 py-6 sm:px-6">
					<div className="flow-root">
						<ul role="list" className="-my-6 divide-y divide-gray-200">
							{cart.length > 0 ? (
								cart.map((product) => (
									<li key={product.id} className="flex py-6">
										<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<img
												src={product.image}
												alt={product.name}
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="ml-4 flex flex-1 flex-col">
											<div>
												<div className="flex justify-between text-base font-medium text-gray-900">
													<h3>
														<a href="#">{product.name}</a>
													</h3>
													<p className="ml-4">${product.price.toFixed(2)}</p>
												</div>
											</div>
											<div className="flex flex-1 items-end justify-between text-sm">
												<p className="text-gray-500">Qty 1</p>
												<div className="flex">
													<button
														type="button"
														onClick={() => handleRemove(product.id)}
														className="font-medium text-indigo-600 hover:text-indigo-500"
													>
														Remove
													</button>
												</div>
											</div>
										</div>
									</li>
								))
							) : (
								<li className="flex py-6">
									<p className="text-gray-500">
										You don't have any products in the cart
									</p>
								</li>
							)}
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
					<div className="flex justify-between text-base font-medium text-gray-900">
						<p>Subtotal</p>
						<p>${totalCart.toFixed(2)}</p>
					</div>
					<p className="mt-0.5 text-sm text-gray-500">
						Shipping and taxes calculated at checkout.
					</p>
					<div className="mt-6">
						<button
							className="flex items-center justify-center rounded-md w-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
							onClick={handleClick}
							disabled={cart.length === 0}
						>
							Checkout
						</button>
					</div>
					<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
						<p>
							or{" "}
							<button
								type="button"
								onClick={() => router.push("/")}
								className="font-medium text-indigo-600 hover:text-indigo-500"
							>
								Continue Shopping
								<span aria-hidden="true"> &rarr;</span>
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
