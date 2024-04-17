import { Router } from "express";
import auth_controller from "../controller/auth_controller.js";

const router = Router();

router.post("/login", auth_controller.login);
router.post("/registration", auth_controller.registration);
router.post("/forgot", auth_controller.forgot);
router.get("/restore", auth_controller.restoreGet);
router.post("/restore", auth_controller.restorePost);

export default router;
