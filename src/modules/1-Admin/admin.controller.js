import bcryptjs from "bcryptjs";
// import randomstring from "randomstring";
import jwt from "jsonwebtoken";
import { Admin } from "../../../DB/models/admin.models.js";
import { errorHandler } from "../../Utils/errorHandler.js";
import { Student } from "../../../DB/models/student.models.js";

// register controller
export const register = errorHandler(async (req, res, next) => {
    //data
    const { userName, email, password } = req.body;
    //check student
    const isStudent = await Student.findOne({ email });
    if (isStudent) {
        return next(new Error("this is a student"));
    }
    //check admin
    const isAdmin = await Admin.findOne({ email });
    if (isAdmin) {
        return next(new Error("Admin is exist"));
    }
    //check hash password
    const hashPassword = bcryptjs.hashSync(password, 9);
    // create a new admin
    const admin = await Admin.create({
        userName,
        email,
        password: hashPassword,
    });
    //return response
    return res.json({
        success: true,
        message: "Sign up successful",
        admin,
    });
});
export const login = errorHandler(async (req, res, next) => {
    //data
    const { email, password } = req.body;

    //check admin
    const admin = await Admin.findOne({
        email,
    });
    if (!admin) {
        //check student
        const student = await Student.findOne({
            email,
        });
        if (!student) {
            return next(
                new Error("User not found!", {
                    cause: 404,
                })
            );
        }
        //check password
        const match = bcryptjs.compareSync(password, student.password);
        if (!match) {
            return next(
                new Error("sorry password incorrect ", {
                    cause: 404,
                })
            );
        }
        //response
        return res.status(200).json({
            success: true,
            role: student.role,
            grade: student.grade,
            id: student._id,
        });
    }
    //check password
    const match = bcryptjs.compareSync(password, admin.password);
    if (!match) {
        return next(
            new Error("sorry password incorrect ", {
                cause: 404,
            })
        );
    }
    //response
    return res.status(200).json({
        success: true,
        role: admin.role,
    });
});
