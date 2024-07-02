const mongoose=require("mongoose");

const personSchema=new mongoose.Schema({
    stdName:{
        type: String,
        required:true
    },
    stdemail:{
        type:String,
        required:true,
        unique:true
    },
    stdId:{
        type:Number,
        required:true,
        unique:true
    },
    stdMobileNum:{
        type:Number,
        required:true,
    }
})
const student=mongoose.model('student',personSchema);
module.exports=student;