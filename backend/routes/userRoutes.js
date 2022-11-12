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

router
	.route("/:id")
	.get(getUserById)
	.put(validUserDetails, updateUser)
	.delete(deleteUser);

router.get("/role/:role_name", getUserByRole);
router.get("/date", getUserByDate);
router.get("/date_range", getUserByDateRange);

module.exports = router;
