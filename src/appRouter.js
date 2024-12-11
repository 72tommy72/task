
import taskRouter from "./modules/Task/task.router.js"
import cors from "cors"
export const appRouter =(app , express)=>{
        //
        app.use(express.json());
        app.use(cors());
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