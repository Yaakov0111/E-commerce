import { ILoginUser } from "@/interfaces/ILoginUser";
import { IRegisterUser } from "@/interfaces/IRegisterUser";
import { headers } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterUser) {
	try {
		const res = await fetch(`${API_URL}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});

		if (res.ok) {
			return res.json();
		} else {
			throw new Error("Failed to register user");
		}
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function login(userData: ILoginUser) {
	try {
		const res = await fetch(`${API_URL}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});

		if (res.ok) {
			return res.json();
		} else {
			throw new Error("Failed to login user");
		}
	} catch (error: any) {
		throw new Error(error);
	}
}
