const {
	validationResult,
} = require("express-validator");
const asyncHandler = require("express-async-handler");
const Role = require("../models/RoleModel");

// @desc    Create Role
// @route   POST /api/role
// @access  Private/Admin

const createRole = asyncHandler(
	async (req, res) => {
		const { role_name } = req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			const err = errors
				.array()
				.map((error) => error.msg)[0];

			return res.status(422).json({
				error: err,
			});
		}

		const existingRole = await Role.findOne({
			role_name,
		});

		if (existingRole) {
			res.status(400);
			throw new Error(
				`${role_name} is already created`
			);
		}

		const newRole = await Role.create({
			role_name,
		});

		if (newRole) {
			return res.status(200).json(newRole);
		}
	}
);

// @desc    GET All Roles
// @route   GET /api/role
// @access  Private/Admin

const getRole = asyncHandler(async (req, res) => {
	try {
		const roles = await Role.find();
		res.status(200).json(roles);
	} catch (error) {
		console.error(`Error: ${error}`);
	}
});

// @desc    Get Role by Id
// @route   GET /api/role/:id
// @access  Private/Admin

const getRoleById = asyncHandler(
	async (req, res) => {
		try {
			const roles = await Role.findById(
				req.params.id
			);
			res.status(200).json(roles);
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	}
);

module.exports = {
	createRole,
	getRole,
	getRoleById,
};
