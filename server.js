const express=require("express");
const db=require('./db');
const bodyparser=require('body-parser');
const app=express();

require('dotenv').config();

const studentroutes=require("./Routes/studentRoutes");
app.use(bodyparser.json());

const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Welcome to Detailmania');
})

app.use('/s',studentroutes);




app.listen(PORT, () => {
    console.log('Listening on port 3000');
  });
// comment first
//comment second
// comment added for testing