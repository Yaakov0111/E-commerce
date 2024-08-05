"use client";
import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/interfaces/IProducts";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ProductDetail: React.FC<IProduct> = ({
	name,
	image,
	description,
	price,
	stock,
	id,
}) => {
	const router = useRouter();
	const { userData } = useAuth();

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
		if (userData && userData.token) {
			const cart = JSON.parse(localStorage.getItem("cart") || "[]");
			const productExist = cart.some((product: IProduct) => {
				if (product.id === id) return true;
				return false;
			});
			if (productExist) {
				Swal.fire({
					icon: "error",
					title: "Product already added",
					text: "The product had already been added",
				});

				router.push("/");
			} else {
				cart.push({
					name,
					image,
					description,
					price,
					stock,
					id,
				});
				localStorage.setItem("cart", JSON.stringify(cart));
				Swal.fire("Product added to the cart");
				router.push("/cart");
			}
		} else {
			Swal.fire({
				icon: "error",
				title: "You must be logged in",
			});
		}
	};
	return (
		<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
			<h2 className="text-3xl font-bold mb-4 text-center">{name}</h2>
			<div className="flex justify-center mb-4">
				<img
					src={image}
					alt="Imagen del producto"
					className="w-full h-auto rounded-lg object-cover"
				/>
			</div>
			<p className="text-gray-700 text-lg mb-4">{description}</p>
			<div className="flex justify-between items-center mb-4">
				<p className="text-2xl font-semibold text-gray-900">${price}</p>
				<p className="text-lg text-gray-600">Stock: {stock}</p>
			</div>
			<button
				onClick={handleClick}
				className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
			>
				Add to cart
			</button>
		</div>
	);
};

export default ProductDetail;
