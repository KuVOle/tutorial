import LoginPage from "../pages/authPages/LoginPage";
import RegistrationPage from "../pages/authPages/RegistrationPage";
import publicPaths from "./paths/publicPaths";

export const publicRoutes = [
	{ path: publicPaths.login, Component: LoginPage },
	{ path: publicPaths.registration, Component: RegistrationPage },
];
