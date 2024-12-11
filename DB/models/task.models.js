import mongoose, { model, Schema } from "mongoose";

export const taskSchema = new Schema({
    taskId : {
        unique : true,
        type : Number,
        required : true,
    } ,
    name : String,
    description :{
        unique : true,
        type : String,
        required : true,
    } ,
    value1 :{
        unique : true,
        type : String,
        required : true,
    } ,
    value2 :{
        unique : true,
        type : String,
        required : true,
    } ,
    value3 :{
        unique : true,
        type : String,
        required : true,
    } ,
    correctValue: String
},{timestamps: true})

export const Task = mongoose.models.Task || model("Task", taskSchema)