import { Router } from "express";
import { isValid } from "../../Middlewares/validation.middleware.js";
import { loginSchema, registerSchema } from "./admin.validation.js";
import { login, register } from "./admin.controller.js";
const router = Router();
//register
router.post("/register", isValid(registerSchema), register)
//login
router.post("/login", isValid(loginSchema), login)
export default router;