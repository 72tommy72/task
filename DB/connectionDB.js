import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://hatem27slama78:HuLneRmLj5ihJ5Tr@cluster0.avzwt6f.mongodb.net/tasks ")
    .then(()=>{console.log("Connect to Mongoose database is successful ");
    }).catch((err)=>{console.log("Connect to Mongoose database is Failed  " + err.message);
    })
}