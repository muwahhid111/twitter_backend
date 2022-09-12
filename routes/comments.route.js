const {Router} = require("express");
const { commentsController } = require("../controllers/comments.controller");
const route = Router();

route.post("/comments", commentsController.addComment);
route.delete("/comments/:id", commentsController.deleteComment);
route.patch("/comments/:id", commentsController.patchComment);
route.get("/comments/:id", commentsController.getCommentsByPost);

module.exports = route;
