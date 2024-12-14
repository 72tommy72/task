import bcryptjs from "bcryptjs";
// import randomstring from "randomstring";
import jwt from "jsonwebtoken";
import { Student } from "../../../DB/models/student.models.js";
import { errorHandler } from "../../Utils/errorHandler.js";
import { Admin } from "../../../DB/models/admin.models.js";

// register controller
export const register = errorHandler(async(req, res, next) => {
    //data
    const { userName, email, password,grade} = req.body;
    //check admin
        const isAdmin = await Admin.findOne({email});
        if (isAdmin) {
            return next(new Error('this is a Admin '))
            }
    //check student
    const isStudent = await Student.findOne({email});
    if (isStudent) {
        return next(new Error('Student is exist'))
        }
    //check hash password
    const hashPassword = bcryptjs.hashSync(
        password,
        9
    );
    // create a new student
    const student = await Student.create({
        userName,
        email,
        password: hashPassword,
        grade
    });
    //return response
    return res.json({
        success: true,
        message: "Sign up successful",
        student,
    });
});
export const login = errorHandler(async(req, res, next) => {
    //data
    const { email, password } = req.body;

    //check email
    const student = await Student.findOne({
        email,
    });
    if (!student) {
        return next(
            new Error("Student not found!", {
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
    // //generate token
    // let token = jwt.sign({
    //         id: student._id,
    //         email: student.email,
    //         role: student.role
    //     },
    //     "tommy", {
    //         expiresIn: "1d",
    //     }
    // );
    //response
    return res.status(200).json({
        success: true,
        role: student.role,
        grade: student.grade,
    });
});
