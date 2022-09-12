const {Router} = require("express");
const { usersController } = require("../controllers/users.controller");
const route = Router();

route.post("/users", usersController.addUser);
route.delete("/users/:id", usersController.deleteUser);
route.patch("/users/save/:id", usersController.savePost);
route.get("/users/saved/:id", usersController.getSaves);

module.exports = route