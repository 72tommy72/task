import express from 'express'
import { connectDB } from './DB/connectionDB.js'
import { appRouter } from './src/appRouter.js'
const app = express()
const port = 3000
// connect to database
connectDB()
// connect to server  
appRouter(app, express)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))