import LoginPage from "../pages/authPages/LoginPage";
import RegistrationPage from "../pages/authPages/RegistrationPage";

export const publicRoutes = [
	{ path: "/login", Component: LoginPage },
	{ path: "/registration", Component: RegistrationPage },
];
