const express= require("express")
const userRouter = express.Router()
userRouter.get('/',(request,response)=>{
    response.send("Sumbit for feedback")})

module.exports = userRouter