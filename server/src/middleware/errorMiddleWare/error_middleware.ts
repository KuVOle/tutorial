import { ApiError } from "./api_error.js";
import { NextFunction, type Request, type Response } from "express";
import type HttpException from "./http_expection.js";

const errorMiddleWare = (
	err: HttpException,
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	if (err instanceof ApiError) {
		res.status(err.status).json({
			status: err.status,
			message: err.message,
		});
	} else {
		res.status(500).json({
			status: 500,
			message: "Transport Error",
		});
	}
};

export default errorMiddleWare;
