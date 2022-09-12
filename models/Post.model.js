const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  text: String,
  likes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],

  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
