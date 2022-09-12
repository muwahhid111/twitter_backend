const {Router} = require("express");
const { postsController } = require("../controllers/posts.controller");
const route = Router();

route.post("/posts", postsController.addPost);
route.patch("/posts/like/:id", postsController.likePost);

module.exports = route