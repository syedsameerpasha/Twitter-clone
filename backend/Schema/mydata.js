const mongoose=require("mongoose")
const mydata=new mongoose.Schema({
    name:{type:String},
    age:{type:Number}

})
const sanaz=mongoose.model("reemas",mydata)
module.exports=sanaz
