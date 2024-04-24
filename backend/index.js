import express from "express"
import cors from "cors"
import { config } from "dotenv"
import cookieparser from "cookie-parser"
import { connectDatabase } from "./config/database.js"
import userRouter from "./routes/userRoutes.js"

config()
connectDatabase()
const app = express()
app.use(cookieparser());
app.use(express.json())

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/api/v1",userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is started at ${PORT}`)
})