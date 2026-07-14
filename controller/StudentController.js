import Student from "../models/Student.js";





export async  function CreateStudent(req,res) {

    let ravindu = new Student({
    StudentID :req.body.name,
    age : req.body.age,
    name :"SC-"+req.body.name,
    password : "123456"

})


    try{
             await ravindu.save();
             res.send("successfull");
    }catch(error){
        res.send(error);
    }
    
}

