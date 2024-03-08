import 'dotenv/config'
import  Express  from "express";
import cors from "cors";
import main from "./routes/quiz.js";
import connectDB from "./db.js";
import Pre from "./routes/pre.js";

const app = Express();

app.use(cors());
app.use(Express.json());

connectDB()

app.get('/test',(req,res)=>{
    res.send('Hello World!')
})

app.use("/",main);
app.use("/pre",Pre)

app.listen(8080,console.log("https://quiz-backend-sigma-hazel.vercel.app/:8080"));
