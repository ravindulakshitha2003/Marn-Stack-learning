import express from "express"
import mongoose, { Types } from "mongoose";
import Student from "./models/Student.js";
import { CreateStudent } from "./controller/StudentController.js";
import StudentRoute from "./routes/StudentRoute.js";



const mongoURL="mongodb+srv://ravindu:1234@cluster1.9xamarc.mongodb.net/expressTRY?retryWrites=true&w=majority&appName=Cluster1";

mongoose.connect(mongoURL).then(()=>{
    console.log("data base connected");
}).catch((error)=>{
    console.log(
        error
    );
})




const app = express();
app.use(express.json());
app.use("/api/v1/student",StudentRoute)


app.listen(3000,()=>{
    console.log("sdfdsafds");
});