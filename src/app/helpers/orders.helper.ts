const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
	try {
		const res = await fetch(`${API_URL}/orders`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify({ products }),
		});
		const orders = await res.json();
		return orders;
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function getOrders(token: string) {
	try {
		const res = await fetch(`${API_URL}/users/orders`, {
			method: "GET",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});
		const orders = await res.json();
		return orders;
	} catch (error: any) {
		throw new Error(error);
	}
}
