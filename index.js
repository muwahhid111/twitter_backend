const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use(require("./routes/posts.route"));
app.use(require("./routes/users.route"));
app.use(require("./routes/comments.route"));

mongoose.connect(
  "mongodb+srv://khas:5632@cluster0.3wz3oli.mongodb.net/twitter",
  (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("server connected");

    app.listen(3030, () => {
      console.log("port 3030");
    });
  }
);
