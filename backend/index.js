const express = require("express")
const cors =  require("cors")
const mongoose =  require("mongoose")

const app = express()

app.use(express.json())
app.use(cors())






app.listen(5000,()=>{
    console.log("server is started at port 5000")
})