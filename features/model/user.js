const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type: String,
        // meaning that it can not be null and must be provided
        require: true,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    }
});

// model takes in two things one is the description and the other function 
const User = mongoose.model("User", userSchema);


module.exports = User;
