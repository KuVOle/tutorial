import { $host } from "./axiosConfiguration";
import { loginPointAPI } from "./authorizationPoints";

interface authInterface {
	email: string;
	password: string;
}

export const loginAPI = async (auth: authInterface) => {
	const { data } = await $host.post(loginPointAPI, auth);
	console.log(data);
	return data;
};
