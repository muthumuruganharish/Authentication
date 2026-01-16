const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

require("dotenv").config()

const app=express()

app.use(cors());
app.use(express.json())

//routes...
const AuthRoute=require("./Routes/Auth")
app.use("./api",AuthRoute) // now the link becomes POST http://localhost:5000/api/signup


app.get("/",(req,res)=>{
    res.send("server is running.....")
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log(err));



  
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});