import mongoose from "mongoose";
import env from "dotenv";
env.config()

const URL: string = process.env.MONGO_STRING!;
export const phoneBookDB = () => {
  mongoose.connect(URL).then(() => {
    console.log("Database successfully attached");
  });
};
