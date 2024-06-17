import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected successfully!");
        // const connectionInstance = await mongoose.connect(`
        // ${process.env.MONGODB_URL}/${DB_NAME}`)
        // console.log(`DB connected ${connectionInstance.connection.host }`);
    } catch(err) {
        console.log("MongoDB connection error: ", err);
        process.exit(1);
    }
}

export default connectDB;