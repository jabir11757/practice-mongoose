const mongoose = require("mongoose");




//user schema

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     mobile: Number
// })
const userSchema = new mongoose.Schema({
    name: String,
    email: String
})


//user model

const User = mongoose.model(User, userSchema)

exports.User = User