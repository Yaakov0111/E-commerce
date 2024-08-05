"use client";

import { login } from "@/app/helpers/auth.helper";
import { validateLoginForm } from "@/app/helpers/validate";
import { useAuth } from "@/context/AuthContext";
import { ILoginError, ILoginUser } from "@/interfaces/ILoginUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
	const router = useRouter();
	const initialState = {
		email: "",
		password: "",
	};
	const [dataUser, setDataUser] = useState<ILoginUser>(initialState);
	const { setUserData } = useAuth();
	const [errors, setErrors] = useState<ILoginError>(initialState);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDataUser({ ...dataUser, [name]: value });
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await login(dataUser);
			const { token, user } = response;
			setUserData({ token, user });

			Swal.fire("User logged in successfully", "", "success");
			router.push("/");
		} catch (error: any) {
			setErrors({ ...errors, email: "Incorrect username or password" });
		}
	};

	useEffect(() => {
		const errors = validateLoginForm(dataUser);
		setErrors(errors);
	}, [dataUser]);

	return (
		<div className="max-w-md mx-auto flex flex-col bg-white p-8 border border-gray-300">
			<h2 className="text-2xl mb-4">Sign in</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="email-address" className="block text-gray-700">
						Email:
					</label>
					<input
						type="email"
						id="email-address"
						name="email"
						value={dataUser.email}
						onChange={handleChange}
						placeholder="example@gmail.com"
						className="mt-1 p-2 block w-full border border-gray-300 rounded"
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-gray-700">
						Password:
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={dataUser.password}
						onChange={handleChange}
						placeholder="password"
						className="mt-1 p-2 block w-full border border-gray-300 rounded"
					/>
					{errors.password && (
						<p className="text-red-500 text-sm">{errors.password}</p>
					)}
				</div>
				<div>
					<button
						disabled={errors.email || errors.password ? true : false}
						type="submit"
						className="w-full bg-blue-500 text-white p-2 rounded"
					>
						Sign in
					</button>
				</div>
			</form>
			<Link
				href={"/register"}
				className="w-full text-center text-blue-500 p-2 rounded"
			>
				{" "}
				Register{" "}
			</Link>
		</div>
	);
};

export default Login;
