import { IUserSession } from "./IRegisterUser";

export interface AuthContextProps {
	userData: IUserSession | null;
	setUserData: (userData: IUserSession | null) => void;
}

export interface AuthProviderProps {
	children: React.ReactNode;
}
