import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./public_routes";

const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map(({ path, Component }) => {
				return (
					<Route
						key={path}
						path={path}
						element={<Component />}
					/>
				);
			})}
		</Routes>
	);
};

export default AppRouter;
