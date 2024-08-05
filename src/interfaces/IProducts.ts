export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	stock: number;
	image: string;
	categoryId: number;
}

export interface ICategory {
	name: string;
	id: number;
}
