const express= require("express")
const userRouter = express.Router()
userRouter.get('/',(request,response)=>{
    response.send("This is About Data")})

module.exports = userRouter