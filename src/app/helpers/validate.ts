import { ILoginError, ILoginUser } from "@/interfaces/ILoginUser";
import { IRegisterError, IRegisterUser } from "@/interfaces/IRegisterUser";

export function validateLoginForm(values: ILoginUser): ILoginError {
	const errors: ILoginError = {};

	if (!values.email) {
		errors.email = "Email is required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email is invalid";
	}

	return errors;
}

export function validateRegisterForm(values: IRegisterUser): IRegisterError {
	const errors: IRegisterError = {};

	if (!values.email) {
		errors.email = "Email is required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email is invalid";
	}

	return errors;
}
