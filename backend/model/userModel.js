const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    contact: Number,
    img: { filename: String, path: String },
    address: {
        city: String,
        state: String,
        pincode: String
    },
    forgot_password_otp: String,
    forgot_password_token: String,
    refresh_token: String
})

let userModel = mongoose.model("user", userSchema);
module.exports = userModel;