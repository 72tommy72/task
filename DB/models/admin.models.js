import mongoose, { model, Schema } from "mongoose";

export const adminSchema = new Schema({
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
    role:{
        type: String,
        required: true,
        default: 'admin'}
},{timestamps: true})

export const Admin = mongoose.models.Admin || model("Admin", adminSchema)