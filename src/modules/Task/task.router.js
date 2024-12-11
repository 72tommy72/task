import { Router } from "express"
import { createTaskForAmin, getTasksForAdmin, postTaskFromAdmin,showTaskFroUser ,getResultsFromUser} from "./task.controller.js"

const router = Router()
router.post("/createtask" , createTaskForAmin)
router.get("/task" , getTasksForAdmin)
router.post("/posttask" ,  postTaskFromAdmin)
router.get("/showtask" ,  showTaskFroUser)
router.post("/results" ,  getResultsFromUser)
export default router