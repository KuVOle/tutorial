import { Router } from "express";
import authRouter from "./auth_router.js";

const router = Router();

router.use("/authontification", authRouter);

export default router;
