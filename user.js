const express= require("express")
const userRouter = express.Router()
userRouter.get('/',(request,response)=>{
    response.send("This is User Data")})

module.exports = userRouter