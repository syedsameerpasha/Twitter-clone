const express=require("express")
const connectDB = require("./DB/Db")
const sanaz = require("./Schema/mydata")
const app=express()
let cors = require("cors");
app.use(express.json())
app.use(
    cors({
        origin:"http://localhost:3000"
    })
)
const PORT=5000
app.delete("/:id", async function(req,res){
    //console.log(req.body)
    const a=await sanaz.deleteOne({_id:{$eq:req.params.id}})
    return res.send(a)
})
app.post("/p", async function(req,res){
    
    const a=await sanaz.create(req.body)
    return res.send(a)
})
app.listen(PORT,async function(){
    await connectDB()
    console.log("server is running on Port 5000")
})