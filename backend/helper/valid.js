const { check } = require("express-validator");

exports.validRole = [
	check("role_name", "Role name is required")
		.notEmpty()
		.isLength({ min: 2, max: 15 })
		.withMessage(
			"Role name must be between 3 to 15 characters"
		),
];
