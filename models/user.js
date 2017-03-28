const mongoose = require("mongoose");

const User = mongoose.model("User", {
    username:String,
    password:String,
    name:[{firstname:String,
        lastname:String,
        middlename:String
    }],
    phone:String,
    email:String,
    admin:Boolean
})