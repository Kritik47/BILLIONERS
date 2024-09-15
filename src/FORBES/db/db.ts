import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const ConnectDb=async():Promise<void>=>{
    try{
        await mongoose.connect(`${process.env.DATABASE}`);
        console.log("Mongodb Connected.....");
    }catch(e){
        console.log("Connection Error.....");
    }
}
export default ConnectDb;