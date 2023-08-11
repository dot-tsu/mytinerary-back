import mongoose from "mongoose";

mongoose.connect(process.env.MONGO)
.then(()=>console.info("Database Connected 😺"))
.catch((err)=>console.error(err))