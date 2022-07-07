const mongoose = require("mongoose");


const userSchema = {
    name: String,
    dob: String,
    email: String,
    number: String
};

const User = mongoose.model("User", userSchema);

module.exports = User;