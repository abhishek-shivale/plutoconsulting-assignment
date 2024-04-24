import express from "express"
import { Login, Register } from "../controller/auth.js"

const userRouter = express.Router()

userRouter.get("/",async( req,res)=>{
    return res.json({
        status:true
    })
})
 userRouter.post("/register", Register)
 userRouter.post("/login", Login)


export default userRouter