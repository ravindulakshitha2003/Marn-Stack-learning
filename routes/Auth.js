import express from "express";
import { login } from "../controller/StudentController.js";


const Auth = express();


Auth.post("/login",login);


export default Auth;