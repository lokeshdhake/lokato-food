import mongoose from "mongoose";

export const connectDb = async() => {
    await mongoose.connect('Enter ypur mongo db cluster url').then(()=>console.log("DB connected"));
}
