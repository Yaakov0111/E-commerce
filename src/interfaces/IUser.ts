export interface IUser {
	id: number;
	name: string;
	email: string;
	address: string;
	phone: string;
	password: string;
	orders?: number[];
}
