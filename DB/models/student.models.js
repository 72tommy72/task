import mongoose, { model, Schema } from "mongoose";

export const studentSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        enum: ["1", "2","3"],
    },
    role:{
        type: String,
        default: 'student'
    }
},{timestamps: true})

export const Student = mongoose.models.Student || model("Student", studentSchema)