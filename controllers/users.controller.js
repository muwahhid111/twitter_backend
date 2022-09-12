// const mongoose = require("mongoose");
const User = require("../models/User.model");

module.exports.usersController = {
  // добавить пользователя
  addUser: async (req, res) => {
    const { name, saved, liked, description, age } = req.body;
    try {
      const addedUser = await User.create({
        name,
        saved,
        liked,
        description,
        age,
      });
      res.json(addedUser);
    } catch (error) {
      res.json(error.message);
    }
  },

  // удалить пользователя
  deleteUser: async (req, res) => {
    try {
      await User.findOneAndRemove(req.params.id);
      res.json("пользователь удален");
    } catch (error) {
      res.json(error.message);
    }
  },

  // сохранить пост
  savePost: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user.saved.includes(req.body.post)) {
        await user.updateOne({ $push: { saved: req.body.post } });
        res.json("Пост сохранен");
      } else {
        await user.updateOne({ $pull: { saved: req.body.post } });
        res.json("сохранение удалено");
      }
    } catch (error) {
      res.json(error.message);
    }
  },

  //   просмотреть все сохры
  getSaves: async (req, res) => {
    try {
      const saves = await User.findById(req.params.id, { saved: 1 });
      res.json(saves);
    } catch (error) {
      res.json(error.message);
    }
  },
};
