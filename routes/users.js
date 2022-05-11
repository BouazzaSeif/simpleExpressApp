var express = require("express");
var router = express.Router();
var userController = require("../controllers/users.controller");

/* GET users listing. */
/* router.get("/", function (req, res, next) {
  res.send("respond with a resource");
}); */

router.route("/").post(userController.addNewUser);

router.route("/").get(userController.getAllUsers);

router.route("/:id").get(userController.findUserById);

router.route("/:id").delete(userController.deleteUser);

router.route("/:id").put(userController.updateUser);
module.exports = router;
