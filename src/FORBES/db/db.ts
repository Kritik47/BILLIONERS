import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const ConnectDb=async():Promise<void>=>{
    try{
        await mongoose.connect(`${process.env.DATABASE}`);
      // await mongoose.connect("mongodb://localhost:27017/BILLIONERS");
        console.log("Mongodb Connected.....");
    }catch(e){
        console.log("Connection Error.....");
    }
}
export default ConnectDb;