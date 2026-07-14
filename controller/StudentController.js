import Student from "../models/Student.js";

let ravindu = new Student({
    StudentID :"sc-1234556"+ new Date(2023, 9, 15),
    age : 10,
    name :"RAVINDU"

})



export async  function CreateStudent(req,res) {
    try{
             await ravindu.save();
             res.send("successfull");
    }catch(error){
        res.send(error);
    }
    
}