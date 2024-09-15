import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config();
import ConnectDb from './src/FORBES/db/db';
ConnectDb();
import cors from "cors"
app.use(cors());
import router from './src/FORBES/routes/routes';
app.use('/api',router);
app.listen(process.env.PORT,()=>{
  console.log(`listen in ${process.env.PORT}`);
})