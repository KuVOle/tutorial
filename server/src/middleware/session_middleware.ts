import session from "express-session";
import RedisStore from "connect-redis";
import { createClient } from "redis";
import logger from "../utils/logger.js";

// Initialize client.
let redisClient = createClient();
redisClient.connect().catch(logger.error);

// Initialize store.
let redisStore = new RedisStore({
	client: redisClient,
});

const sessionMiddleware = session({
	store: redisStore,
	secret: `${process.env.SECRET_REDIS}` || "secret_redis",
	resave: true,
	rolling: true,
	saveUninitialized: false,
	cookie: {
		maxAge: 10 * 60 * 1000,
		httpOnly: false,
	},
});

export default sessionMiddleware;
