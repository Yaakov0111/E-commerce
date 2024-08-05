import { ICredentials } from "./ICredentials";

export interface IRegisterUserResponse {
	name: string;
	email: string;
	password: string;
	address: string;
	phone: string;
	role: string;
	credentials: ICredentials;
}
