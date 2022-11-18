const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstname: String,
    email: String,
    password: String
  });

const UserModel = mongoose.model("User", UserSchema, "User")

module.exports = UserModel