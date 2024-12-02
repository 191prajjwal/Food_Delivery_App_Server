const express = require("express")
const app = express()
const dotenv= require("dotenv")
const cors= require("cors")

dotenv.config()

const mongoose= require("mongoose")
mongoose.connect(`${process.env.MONGODB_URL}`).then(()=>{
    console.log("Database connected")
})

const userRouter= require("./Routes/userRoutes")

app.use(cors())
app.use(express.json())
app.use("/api/v1/user",userRouter)



app.get("/",(req,res)=>{
    res.send("hello prajjwal")
})

app.listen(4000,()=>{
    console.log("server is live at port 4000")
})



