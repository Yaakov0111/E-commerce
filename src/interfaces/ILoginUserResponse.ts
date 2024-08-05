import { IUser } from "./IUser";

export interface ILoginUserResponse {
	login: boolean;
	user: Partial<IUser> | null;
	token: string;
}
