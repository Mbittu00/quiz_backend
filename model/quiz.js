import { Schema ,model} from "mongoose";
const quiz=new Schema({
    name:{
        type:String,
        required:true
    },
    qustions:{
        type:Array,
        required:true
    },
    score:{
        type:Array,
        default:[]
    }
})
quiz.index({ expireAt: 1 }, { expireAfterSeconds:  120});

let mod=model("quiz",quiz)
export default mod