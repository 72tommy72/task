import mongoose, { model, Schema } from "mongoose";

export const taskSchema = new Schema({
    taskId : {
        unique : true,
        type : Number,
        required : true,
    },
    description :{
        unique : true,
        type : String,
        required : true,
    } ,
    value1 :{
        type : String,
        required : true,
    } ,
    value2 :{
        type : String,
        required : true,
    } ,
    value3 :{
        type : String,
        required : true,
    } ,
    correctValue: String
},{timestamps: true})

export const Task = mongoose.models.Task || model("Task", taskSchema)