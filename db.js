import { connect } from "mongoose";
let uri = process.env.MONGODB;
const connectDB = async () => {
  try {
    await connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }

};
export default connectDB;
