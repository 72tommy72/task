import { Router } from "express";
import { isValid } from "../../Middlewares/validation.middleware.js";
import { loginSchema, registerSchema } from "./student.validation.js";
import { login, register } from "./student.controller.js";

const router = Router();
//register
router.post("/register", isValid(registerSchema), register)
//login
router.post("/login", isValid(loginSchema), login)
export default router;