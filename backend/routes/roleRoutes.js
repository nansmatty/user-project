const express = require("express");
const {
	createRole,
	getRole,
	deleteRole,
	getRoleById,
} = require("../controllers/roleController");
const { validRole } = require("../helper/valid");
const router = express.Router();

router
	.route("/")
	.post(validRole, createRole)
	.get(getRole);

router.get("/:id", getRoleById);

module.exports = router;
