import Express from "express";
import model from "../model/pre.js";
const app = Express.Router();

//create pre qustions

app.post("/", async (req, res) => {
  console.log("first")
  try {
    const data = await model.create(req.body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
//get all pre qustions

app.get("/gets", async (req, res) => {
  console.log("yooo")
  try {
    const data = await model.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

//get one pre qustion by id

app.get("/get/:id", async (req, res) => {
  try {
    const data = await model.findById(req.params.id);
    console.log("yoooooohoooooo")
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
export default app