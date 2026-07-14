import Student from "../models/Student.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export async  function CreateStudent(req,res) {


    try{
       

        let newUser = new Student({
            StudentID :req.body.sid,
            age : req.body.age,
            name :req.body.name,
            password : bcrypt.hashSync(req.body.password,10)
        })

        await newUser.save();
            res.send(
                {
                     message : "User Created Successfully"
                }
            );
             console.log(3);
    }catch(error){
       res.json(
            {
                message : "Error creating user"
            }
        )
    }
    
}


export async function login(req,res) {
    try {
        const user = await Student.findOne({
            StudentID:req.body.sid
        });

        if(user == null ){
            res.send(
                {
                    message:"user not found"
                }
            )
        }else{

            const iscorrectpassword = bcrypt.compareSync(req.body.password,user.password);
           if(iscorrectpassword){
            let  paylord = {
                name : user.name,
                age : user.age,
                sid: user.sid
            }

            const token = jwt.sign(paylord,process.env.SECREATE_KEY,{
                expiresIn : "48h"
            })

            res.json(
                {
                    token : token,
                    
                }
            )

           }else{
            res.status(401).send(
                {
                    message : "invalid token"
                }
            )
           }           
        }




    } catch (error) {
         res.status(500).send(
                {
                    message:"Server found"
                }
            )
         console.log(error);
    }
}



