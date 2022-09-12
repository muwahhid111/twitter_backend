const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  saved: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
    },
  ],

  liked: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
