import Express from "express";
import model from "../model/quiz.js";
const app = Express.Router();

//create an quiz
app.post("/", async (req, res) => {
  try {
    let data = await model.create(req.body);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
//get an quiz
app.get("/:id", async (req, res) => {
  try {
    let data = await model.findById(req.params.id);
    res.status(200).send(data);
    console.log("chal chutiya")
  } catch (e) {
    res.status(500).send(e.message);
    console.log("eeeeee")
  }
});
//add a score

app.put("/", async (req, res) => {
  try {
    let data = await model.findById(req.body.id);
    data.score.push({name:req.body.name,score:req.body.score});
    await data.save();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
export default app;
