import { Request, Response, NextFunction } from "express";

class AuthController {
	login(req: Request, res: Response, next: NextFunction) {
		console.log(req.body);
		res.send("login");
	}
	restoreGet(req: Request, res: Response, next: NextFunction) {
		res.send("restoreGet");
	}
	restorePost(req: Request, res: Response, next: NextFunction) {
		res.send("restorePost");
	}
	forgot(req: Request, res: Response, next: NextFunction) {
		res.send("forgot");
	}
	registration(req: Request, res: Response, next: NextFunction) {
		res.send("registration");
	}
}

export default new AuthController();
