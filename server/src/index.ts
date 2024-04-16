import express from "express";
import logger from "./utils/logger.js";

const app = express();

app.get("/", (req, res) => {
	res.send("ok");
});

app.listen(3000, () => {
	logger.info("abc");
	logger.error("error");
	console.log("Server running at port 3000");
});
