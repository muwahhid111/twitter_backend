const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  // добавить комментарий
  addComment: async (req, res) => {
    const { text, post, user } = req.body;
    try {
      await Comment.create({ text, post, user });
      res.json("комментарий добавлен");
    } catch (error) {
      res.json(error.message);
    }
  },

  // удалить комментарий
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.id);
      res.json("комментарий удален");
    } catch (error) {
      res.json(error.message);
    }
  },
  //   изменить комментарий
  patchComment: async (req, res) => {
    const { text } = req.body;
    try {
      await Comment.findByIdAndUpdate(req.params.id, { $set: { text } });
      res.json("комментарий изменен");
    } catch (error) {
      res.json(error.message);
    }
  },

  //   вывод комментариев к определенному посту
  getCommentsByPost: async (req, res) => {
    try {
      const comments = await Comment.find({ post: req.params.id });
      res.json(comments);
    } catch (error) {
      res.json(error.message);
    }
  },
};
