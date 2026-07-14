import express from "express"
import { CreateStudent } from "../controller/StudentController.js"


const StudentRoute = express();


StudentRoute.post("/create",CreateStudent);



export default StudentRoute;