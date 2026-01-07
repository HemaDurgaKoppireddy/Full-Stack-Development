import express from 'express';
import mongoose from 'mongoose';
import router from './routers/StudentRouters.js';
import cors from 'cors';
const app = express();
const port = 6001;
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://hemakoppireddy28_db_user:hema123@cluster0.954iku2.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));
app.use('/',router);
app.get('/users',(req,res)=>{
    console.log("hello this is backend");
    res.send("hello this is backend");
})
app.listen(port,()=>{
    console.log(`server running at the port ${port}`);
})
export default app;