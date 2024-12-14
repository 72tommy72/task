import mongoose, { model, Schema, Types } from "mongoose";


const quizListSchema = new Schema({
    quizList:[{
        type:Types.ObjectId,
        ref:"Task"
    }],
    student:{
        type:Types.ObjectId,
        ref:"Student"
    },
    date: { type: String, required: true },
    grade: {
        type: String,
        enum: [1, 2,3],
        required: true
    },

}, { timestamps: true });

export const QuizList = mongoose.models.QuizList || model("QuizList", quizListSchema);