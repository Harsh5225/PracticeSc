const express=require("express");
const db=require('./db');
const bodyparser=require('body-parser');
const app=express();
const studentroutes=require("./Routes/studentRoutes");
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send('Welcome to Detailmania');
})

app.use('/s',studentroutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
// comment added