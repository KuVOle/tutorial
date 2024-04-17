import { Request, Response, NextFunction } from "express";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
	if (req.user) next();
	else console.log("need error middleware");
};

export default checkAuth;
