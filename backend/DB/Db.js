const mongoose=require("mongoose")
const uri="mongodb+srv://syedsaameer:Sameer123@cluster0.y0kvcnw.mongodb.net/syed?retryWrites=true&w=majority"
const connectDB=()=>{


    return mongoose.connect(uri,{

      
      useNewUrlParser: true,
      useUnifiedTopology: true,
     

    }).then(()=>{console.log("yes")}).catch(()=>{console.log("nooooo")})

    
}
module.exports=connectDB