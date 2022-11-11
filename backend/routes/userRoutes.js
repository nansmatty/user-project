const express = require("express");
const {
	createUser,
	getAllUsers,
	updateUser,
	deleteUser,
	getUserByRole,
} = require("../controllers/userController");
const {
	validUserDetails,
} = require("../helper/valid");
const router = express.Router();

router
	.route("/")
	.post(validUserDetails, createUser)
	.get(getAllUsers);

router
	.route("/:id")
	.put(validUserDetails, updateUser)
	.delete(deleteUser);

router.get("/role/:role_name", getUserByRole);

module.exports = router;
