import React from "react";
import Card from "./Card";
import { getProductsDB } from "@/app/helpers/products.helper";
import Link from "next/link";

const CardList = async () => {
	const products = await getProductsDB();
	return (
		<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
			{" "}
			{products &&
				products?.map((product) => {
					return (
						<Link href={`/product/${product.id}`} key={product.id}>
							<Card key={product.id} {...product} />
						</Link>
					);
				})}
		</div>
	);
};

export default CardList;
