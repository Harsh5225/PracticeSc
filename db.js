const mongoose=require('mongoose');
const mongoURL="mongodb://localhost:27017/DetailsCollection";

mongoose.connect(mongoURL)
    .then(()=>{
        console.log("Connected to MongDB server");
    })
    .catch((err)=>{
        console.log("MongoDb connection error:",err);
    })

const db=mongoose.connection;

db.on('disconnected',()=>{
    console.log("Connection to MongDB server lost");
})
module.exports=db;