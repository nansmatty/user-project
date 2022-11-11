const express = require("express");
const {
	createRole,
	getRole,
	deleteRole,
} = require("../controllers/roleController");
const { validRole } = require("../helper/valid");
const router = express.Router();

router
	.route("/")
	.post(validRole, createRole)
	.get(getRole);

module.exports = router;
