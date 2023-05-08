const express = require('express')
const userRouter = express.Router()
userRouter.get('/',(request,response)=>{
    response.send("Welcome to Home page")})

    module.exports=userRouter