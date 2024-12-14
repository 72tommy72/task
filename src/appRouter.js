import taskRouter from "./modules/Task/task.router.js"
import adminRouter from "./modules/1-Admin/admin.router.js"
import studentRouter from "./modules/2-Student/student.router.js"
import quizRouter from "./modules/3-QuizList/quiz.router.js"

import cors from "cors"
export const appRouter =(app , express)=>{
        //
        app.use(express.json());
        app.use(cors());
        app.use('/admin', adminRouter)
        app.use('/student', studentRouter)
        app.use('/quiz', quizRouter)
        app.use('/tasks', taskRouter)
        // Not Found Page 
        app.use('/*', (req, res, next) => {
            return next(new Error('Not Found', { cause: 404 }));
        })
        //error handler
        app.use((error, req, res, next) => {
            return res.status(error.cause || 500).json({
                success: false,
                message: error.message,
                stack: error.stack
            })
        })
        
    
}