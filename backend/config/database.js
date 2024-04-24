import mongoose from "mongoose";

export const connectDatabase = () =>{
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("Database is Connected")
    })
    .catch(()=>{
    console.log("Database is disConnected");
    })
}
