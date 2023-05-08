const express = require('express')
const userRouter = express.Router()
userRouter.get('/',(request,response)=>{
    response.send("Contact us 852xx236xx")})

    module.exports=userRouter