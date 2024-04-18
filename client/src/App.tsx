import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/app_router";

function App() {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
