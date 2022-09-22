const { application } = require('express');
const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/Evaluation1";


const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongoose Succesfully")
    })
}




 module.exports=connectToMongo;