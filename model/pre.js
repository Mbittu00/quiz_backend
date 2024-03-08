import { Schema ,model} from "mongoose";

const pre=new Schema({
    type:{
        type:String,
        required:true
    },qustions:{
        type:Array,
        required:true
    },dec:{
        type:String,
        required:true
    },img:{
        type:String,
        required:true
    }
})

let Pre=model("preQuiz",pre)
export default Pre