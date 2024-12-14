import { Task } from "../../../DB/models/task.models.js"
import { errorHandler } from "../../Utils/errorHandler.js";

export const createTaskForAmin = errorHandler(async (req, res, next) => {
    const { description, taskId, value1, value2, value3, correctValue } = req.body;
    const tasks = await Task.create({ description, taskId, value1, value2, value3, correctValue })
    return res.json({
        success: true,
        results: tasks,

    })
})
export const getTasksForAdmin = errorHandler(async (req, res, next) => {
    const tasks = await Task.find()
    return res.json({
        success: true,
        results: tasks
    })
})
var tasksForUser;
export const postTaskFromAdmin = errorHandler(async (req, res, next) => {
    let arrOfQuestions = req.body;
    const tasks = await Task.find({ _id: { $in: arrOfQuestions } });
    tasksForUser = tasks;
    return res.json({
        success: true,
        results: tasks
    });
})
export const showTaskFroUser = errorHandler(async (req, res, next) => {
    return res.json({
        success: true,
        results: tasksForUser
    })
})
export const getResultsFromUser = errorHandler(async (req, res, next) => {
    return res.json({
        success: true
    })
})