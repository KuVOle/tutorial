import express from "express";
import logger from "./utils/logger.js";
import errorMiddleWare from "./middleware/errorMiddleWare/error_middleware.js";
import cors from "cors";
import router from "./router/main_router.js";
import bodyParser from "body-parser";
import passport from "passport";
import { Strategy } from "passport-local";
import cookieParser from "cookie-parser";
import sessionMiddleware from "./middleware/session_middleware.js";

const app = express();

// passport start
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
// passport end
// middleware start
app.use(
	cors({
		origin: process.env.ORIGIN_CORS || "http://localhost:3000",
		credentials: true,
	})
);
app.use(cookieParser());
app.use(sessionMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(
	new Strategy((user, password, done) => {
		console.log("usr", user);
		console.log("pass", password);
	})
);
app.use(router);
app.use(errorMiddleWare);
// middleware end

app.listen(process.env.PORT || 8833, () => {
	logger.info(`Server running at port ${process.env.PORT || 8833}`);
});
