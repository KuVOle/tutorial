import express from "express";
import logger from "./utils/logger.js";
import errorMiddleWare from "./middleware/errorMiddleWare/error_middleware.js";
import cors from "cors";

const app = express();
// middleware start
app.use(
	cors({
		origin: process.env.ORIGIN_CORS || "http://localhost:3000",
		credentials: true,
	})
);
// middleware end

app.get("/", (req, res) => {
	res.send("ok");
});

app.use(errorMiddleWare);

app.listen(process.env.PORT || 8833, () => {
	console.log(`Server running at port ${process.env.PORT || 8833}`);
});
