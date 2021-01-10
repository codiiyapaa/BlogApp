const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const app=express();

app.get('/',(req,res)=>{
    res.send("I have just started Node.js");
});

const Port=3000;

app.listen(Port,(err)=>{
    if(err) console.log(err);
    else console.log(`port is live at ${Port}`)
});
