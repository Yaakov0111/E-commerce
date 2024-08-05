"use client";
import { AuthContextProps, AuthProviderProps } from "@/interfaces/IAuth";
import { IUserSession } from "@/interfaces/IRegisterUser";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextProps>({
	userData: null,
	setUserData: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [userData, setUserData] = useState<IUserSession | null>(null);

	useEffect(() => {
		if (userData) {
			localStorage.setItem(
				"userSession",
				JSON.stringify({ token: userData.token, user: userData.user })
			);
		} else {
			localStorage.removeItem("userSession");
		}
	}, [userData]);

	useEffect(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			const storedUserData = localStorage.getItem("userSession");
			if (storedUserData) {
				setUserData(JSON.parse(storedUserData));
			}
		}
	}, []);

	return (
		<AuthContext.Provider value={{ userData, setUserData }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
