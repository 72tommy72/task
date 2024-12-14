import { Router } from "express";
import { getArrOfQuiz, pushArrOfQuiz } from "./quiz.controller.js";
// import { isValid } from "../../Middlewares/validation.middleware.js";
// import { loginSchema, registerSchema } from "./admin.validation.js";
// import { login, register } from "./admin.controller.js";
const router = Router();
//register
router.post("/pusharr", pushArrOfQuiz)
router.get("/getarr", getArrOfQuiz)
//login
// router.post("/login", isValid(loginSchema), login)
export default router;