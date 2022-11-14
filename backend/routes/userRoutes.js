const express = require("express");
const {
	createUser,
	getAllUsers,
	updateUser,
	deleteUser,
	getUserByRole,
	getUserByDateRange,
	getUserByDate,
	getUserById,
} = require("../controllers/userController");
const {
	validUserDetails,
} = require("../helper/valid");
const router = express.Router();

router
	.route("/")
	.post(validUserDetails, createUser)
	.get(getAllUsers);

router.get("/role/:role_name", getUserByRole);
router.get("/date", getUserByDate);
router.get("/date_range", getUserByDateRange);

router
	.route("/:id")
	.put(validUserDetails, updateUser)
	.delete(deleteUser)
	.get(getUserById);

module.exports = router;
