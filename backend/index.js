import express, { Router } from 'express';
import mongoose from "mongoose";
import cors from "cors";
import {PORT,mongoDbUrl} from './config.js'
import bookRoutes from './routes/bookRoutes.js'
const app = express();

app.use(express.json())
app.use(cors())
// normal / get req
app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send(`1working fine1`);
})

app.use('/books',bookRoutes)

//connect mongoose database 
mongoose.connect(mongoDbUrl)
.then(()=>{
    console.log(`app connected to database.`)

    app.listen(PORT,()=>{
        console.log(`SERVER RUNNING ON ${PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
})
