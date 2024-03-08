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

app.use("/",main);
app.use("/pre",Pre)

app.listen(8080,console.log("http://192.168.31.77:8080"));
