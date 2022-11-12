const express = require("express");
const {
	createUser,
	getAllUsers,
	updateUser,
	deleteUser,
	getUserByRole,
	getUserByDateRange,
	getUserByDate,
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
router.get("/date", getUserByDate);
router.get("/date_range", getUserByDateRange);

module.exports = router;
