import { IProduct } from "@/interfaces/IProducts";
import Link from "next/link";
import React from "react";

const Card: React.FC<IProduct> = ({
	name,
	price,
	image,
	description,
	stock,
	categoryId,
	id,
}) => {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-full px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
					<img
						src={image}
						alt={name}
						className="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
					<h2 className=" mt-4 text-sm text-gray-700 text-center">{name}</h2>
					<p className="mt-1 text-lg font-medium text-gray-900 text-center">
						Price: {price}
					</p>
					<p className="mt-1 text-lg font-medium text-gray-900 text-center">
						{stock}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
