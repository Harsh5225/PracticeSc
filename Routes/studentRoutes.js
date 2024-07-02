const express=require("express");
const router=express.Router();
const student=require("../Models/Person");

router.get('/',async(req,res)=>{
    try{
        const data=await student.find();
        console.log("Data fetched successfully ");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/',async(req,res)=>{
   try{ 
    const data=req.body;
    const newStudent = new student(data);
    const response= await newStudent.save();
    console.log('Data saved successfully');
    res.status(200).json(response);
}catch(err){
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
}
})
module.exports=router;