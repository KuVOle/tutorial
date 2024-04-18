import { Request, Response, NextFunction } from "express";
import { ApiError } from "./errorMiddleWare/api_error.js";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
	if (req.user) next();
	else next(ApiError.serverError("Отказано в доступе."));
};
export default checkAuth;
