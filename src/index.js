// require("dotenv").config({path: ''});
import dotenv from 'dotenv';
dotenv.config({
    path:'./env'
})
import connectDB from "./db/connectDB.js";


connectDB();







/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express'
const app = express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL }/${DB_NAME}`);
        app.on("error", (error)=> {
            console.log("DB Error: ", error);
            throw error 
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch(err) {
        console.log(err);
        throw err 
    }
})()
*/