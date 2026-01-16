const mongoose= require("mongoose");

const userData=new mongoose.Schema({

username:{
    type:String,
    required:true,

},

email:{

    type:String,
    required:true,
    unique:true,
},

password:{
    type:String,
    required:true
}





})

module.export= mongoose.model("User",userData)