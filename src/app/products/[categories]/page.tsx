import Card from "@/app/components/Card/Card";
import { getProductsByCategory } from "@/app/helpers/products.helper";
import Link from "next/link";
import React from "react";
import ProductDetail from "@/app/components/ProductDetail/ProductDetail";

const Dynamic = async ({ params }: { params: { categories: string } }) => {
	const { categories } = params;
	const products = await getProductsByCategory(Number(categories));
	return (
		<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
			{products &&
				products?.map((product) => {
					return (
						<Link key={product.id} href={`/products/${product.id}`}>
							<ProductDetail key={product.id} {...product} />
						</Link>
					);
				})}
		</div>
	);
};

export default Dynamic;
