import { IProduct } from "@/interfaces/IProducts";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProduct[]> {
	try {
		const res = await fetch(`${API_URL}/products`, {
			next: { revalidate: 1200 },
		});
		const products: IProduct[] = await res.json();
		return products;
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function getProductDB(id: string): Promise<IProduct> {
	try {
		const products: IProduct[] = await getProductsDB();
		const productFiltered = products.find(
			(product) => product.id.toString() === id
		);
		if (!productFiltered) {
			throw new Error("Product not found");
		}
		return productFiltered;
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function getProductsByCategory(
	categoryId: number
): Promise<IProduct[]> {
	try {
		const products: IProduct[] = await getProductsDB();
		const productsByCategory = products.filter(
			(product) => product.categoryId === categoryId
		);
		if (!productsByCategory.length)
			throw new Error(`Products not found ${categoryId}`);
		return productsByCategory;
	} catch (error: any) {
		throw new Error(error);
	}
}
