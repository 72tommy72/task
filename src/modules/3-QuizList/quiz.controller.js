import { QuizList } from "../../../DB/models/quizList.models.js";
import { errorHandler } from "../../Utils/errorHandler.js";
import moment from "moment";

export const pushArrOfQuiz = errorHandler(async (req, res, next) => {
    //data
    const { date, grade, tasks } = req.body;

    if (tasks.length === 0) {
        return next(new Error("please select a task"));
    }
    const formattedDate = moment(date).format("DD/MM/YYYY");
    const quizLists = await QuizList.create({
        date: formattedDate,
        grade,
        quizList: tasks,
    });
    //return response
    return res.json({
        success: true,
    });
});

export const getArrOfQuiz = errorHandler(async (req, res, next) => {
    const quizLists = await QuizList.find().populate("quizList");
    if (!quizLists || quizLists.length === 0) {
        return next(new Error("No quiz"));
    }

    //return response
    return res.json({
        success: true,
        result: quizLists,
    });
});
