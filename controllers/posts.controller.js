const Post = require("../models/Post.model");
const User = require("../models/User.model");

module.exports.postsController = {
  // добавление пост
  addPost: async (req, res) => {
    const { title, text, likes, user } = req.body;
    try {
      const addedPost = await Post.create({ title, text, likes, user });
      res.json(addedPost);
    } catch (error) {
      res.json(error.message);
    }
  },

  // лайкнуть пост
  likePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const user = await User.findById(req.body.user);
      if (!post.likes.includes(req.body.user)) {
        await post.updateOne({ $push: { likes: req.body.user } });
        await user.updateOne({ $push: { liked: post._id } });
        res.json("Пост лайкнут");
      } else {
        await post.updateOne({ $pull: { likes: req.body.user } });
        await user.updateOne({ $pull: { liked: post._id } });
        res.json("лайк снят");
      }
    } catch (error) {
      res.json(error.message);
    }
  },
};
