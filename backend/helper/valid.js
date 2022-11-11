const { check } = require("express-validator");

exports.validRole = [
	check("role_name", "Role name is required")
		.notEmpty()
		.isLength({ min: 2, max: 15 })
		.withMessage(
			"Role name must be between 3 to 15 characters"
		),
];

exports.validUserDetails = [
	check("name", "Name is required")
		.notEmpty()
		.isLength({
			min: 3,
			max: 32,
		})
		.withMessage(
			"Name must be between 3 to 32 characters"
		),
	check("email")
		.isEmail()
		.withMessage("Must be a valid email address"),
	check("role")
		.notEmpty()
		.withMessage(
			"Please mention a role for user"
		),
	check("job_preference")
		.notEmpty()
		.withMessage(
			"Please mention atleast one city for job location."
		),
];
