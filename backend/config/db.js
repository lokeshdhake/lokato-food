import mongoose from "mongoose";

export const connectDb = async() => {
    await mongoose.connect('mongodb+srv://prydator:Prydator8983@lokato.wbccv.mongodb.net/lokato').then(()=>console.log("DB connected"));
}