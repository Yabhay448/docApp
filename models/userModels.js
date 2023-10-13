const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  confirmPassword: {
    type: String,
    required: [true, "confirm password is require"],
  },
});

userSchema.pre("save", function () {
  this.confirmPassword = undefined;
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
