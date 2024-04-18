import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./public_routes";
import { adminRoutes } from "./admin_routes";
import { teacherRoutes } from "./teacher_routes";
import { studentRoutes } from "./student_routes";
// import { getRolesByToken } from "../utils/getRolesByToken";
// import NotFoundPage from "../pages/not_found_page/NotFoundPage";

const mainRouter = () => {
	// const role = getRolesByToken();
	// // console.log("role route", role);
	// 			{
	// 				{
	// 					publicRoutes.map(({ path, Component }) => (
	// 						<Route
	// 							key={path}
	// 							path={path}
	// 							element={<Component />}
	// 						/>
	// 					));
	// 				}
	// }
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

export default mainRouter;