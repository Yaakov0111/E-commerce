export interface IRegisterUser {
	name: string;
	email: string;
	password: string;
	address: string;
	phone: string;
}

export interface IRegisterError {
	name?: string;
	email?: string;
	password?: string;
	address?: string;
	phone?: string;
}

export interface IUserSession {
	token: string;
	user: {
		name: string;
		email: string;
		address: string;
		phone: string;
		id: number;
		role: string;
		orders: [];
	};
}
