import ProductDetail from "@/app/components/ProductDetail/ProductDetail";
import { getProductDB } from "@/app/helpers/products.helper";
import React from "react";

const Detail = async ({ params }: { params: { productID: string } }) => {
	const product = await getProductDB(params.productID);
	return <ProductDetail {...product} />;
};

export default Detail;
