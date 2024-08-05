"use client";

import { register } from "@/app/helpers/auth.helper";
import { validateRegisterForm } from "@/app/helpers/validate";

import { IRegisterError, IRegisterUser } from "@/interfaces/IRegisterUser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
	const router = useRouter();
	const initialState = {
		email: "",
		password: "",
		name: "",
		address: "",
		phone: "",
	};
	const [dataUser, setDataUser] = useState<IRegisterUser>(initialState);
	const [errors, setErrors] = useState<IRegisterError>(initialState);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDataUser({ ...dataUser, [name]: value });
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			await register(dataUser);
			Swal.fire("User registered successfully, please login");
			router.push("/login");
		} catch (error: any) {
			Swal.fire({
				icon: "error",
				title: "Registration Error",
				text: "Email already in use, please use another email or login.",
			});
		}
	};

	useEffect(() => {
		const errors = validateRegisterForm(dataUser);
		setErrors(errors);
	}, [dataUser]);

	return (
		<div className="max-w-md mx-auto bg-white p-8 border border-gray-300">
			<h2 className="text-2xl mb-4">Register </h2>
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
					<label htmlFor="name" className="block text-gray-700">
						Name:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={dataUser.name}
						onChange={handleChange}
						placeholder="name"
						className="mt-1 p-2 block w-full border border-gray-300 rounded"
					/>
					{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
				</div>
				<div className="mb-4">
					<label htmlFor="address" className="block text-gray-700">
						Address:
					</label>
					<input
						type="text"
						id="address"
						name="address"
						value={dataUser.address}
						onChange={handleChange}
						placeholder="address"
						className="mt-1 p-2 block w-full border border-gray-300 rounded"
					/>
					{errors.address && (
						<p className="text-red-500 text-sm">{errors.address}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="phone" className="block text-gray-700">
						Phone:
					</label>
					<input
						type="text"
						id="phone"
						name="phone"
						value={dataUser.phone}
						onChange={handleChange}
						placeholder="phone"
						className="mt-1 p-2 block w-full border border-gray-300 rounded"
					/>
					{errors.phone && (
						<p className="text-red-500 text-sm">{errors.phone}</p>
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
		</div>
	);
};

export default Register;
