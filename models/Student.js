import mongoose, { Types } from "mongoose";

const StudentSchema = new mongoose.Schema({
    StudentID:{
        type : String,
        required : true,
        unique : true  
    },
    name :{
        type: String,
        required  : true
    },
    age:{
        type :Number,
        required : true
    },

    Profile : {
        type : String,
        default :"https://tse4.mm.bing.net/th/id/OIP.sQOtvKLPSDzdw7sm_N3h1QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    images :{
        type :[String],
        default:[
             "/images/default-product-01.png",
            "/images/default-product-02.png",
        ]
    }
    

})

const Student = mongoose.model("Student",StudentSchema);


export default Student;