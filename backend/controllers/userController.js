const {
	validationResult,
} = require("express-validator");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const Role = require("../models/RoleModel");

// @desc    Create User
// @route   POST /api/user
// @access  Public

const createUser = asyncHandler(
	async (req, res) => {
		const { name, email, role, job_preference } =
			req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			const err = errors
				.array()
				.map((error) => error.msg)[0];

			return res.status(422).json({
				error: err,
			});
		}

		const existingEmail = await User.findOne({
			email,
		});

		if (existingEmail) {
			res.status(400);
			throw new Error("User already exists");
		}

		const newUser = await User.create({
			name,
			email,
			role,
			job_preference,
		});

		if (newUser) {
			res.status(201).json({
				_id: newUser._id,
				name: newUser.name,
				email: newUser.email,
				role: newUser.role,
				job_preference: newUser.job_preference,
			});
		} else {
			res.status(400);
			throw new Error("Failed to create user");
		}
	}
);

// @desc    Get all users
// @route   GET /api/user
// @access  Public

const getAllUsers = asyncHandler(
	async (req, res) => {
		const pageSize = 10;
		const page =
			Number(req.query.pageNumber) || 1;

		const count = await User.countDocuments();
		const users = await User.find()
			.limit(pageSize)
			.skip(pageSize * (page - 1));

		res.json({
			users,
			page,
			pages: Math.ceil(count / pageSize),
		});
	}
);

// @desc    Update users
// @route   PUT /api/user/:id
// @access  Public

const updateUser = asyncHandler(
	async (req, res) => {
		const { name, email, role, job_preference } =
			req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			const err = errors
				.array()
				.map((error) => error.msg)[0];

			return res.status(422).json({
				error: err,
			});
		}

		const user = await User.findById(
			req.params.id
		);

		if (user) {
			user.name = name;
			user.email = email;
			user.role = role;
			user.job_preference = job_preference;

			const updatedUser = await user.save();
			res.json(updatedUser);
		} else {
			res.status(404);
			throw new Error("User not found");
		}
	}
);

// @desc    Delete users
// @route   DELETE /api/user/:id
// @access  Public

const deleteUser = asyncHandler(
	async (req, res) => {
		const user = await User.findById(
			req.params.id
		);

		if (user) {
			await user.remove();
			res.json({ message: "User removed" });
		} else {
			res.status(404);
			throw new Error("User not found");
		}
	}
);

// @desc    Find users based on role
// @route   GET /api/user/role/:role_name
// @access  Public

const getUserByRole = asyncHandler(
	async (req, res) => {
		const roleData = await Role.findOne({
			role_name: req.params.role_name,
		});

		const pageSize = 10;
		const page =
			Number(req.query.pageNumber) || 1;

		const count = await User.find({
			role: roleData._id,
		}).countDocuments();

		const users = await User.find({
			role: roleData._id,
		})
			.find()
			.limit(pageSize)
			.skip(pageSize * (page - 1));

		res.json({
			users,
			page,
			pages: Math.ceil(count / pageSize),
		});
	}
);

// @desc    Find users based on time period
// @route   GET /api/user/date
// @access  Public

const getUserByDate = asyncHandler(
	async (req, res) => {
		try {
			//get date from req.query
			let { qDate } = req.query;
			let hour = 23,
				minute = 59,
				seconds = 59;

			// check that date is not empty
			if (qDate === "") {
				return res.status(400);
				throw new Error("Invalid Data");
			}

			//Query database using Mongoose
			const users = await User.find({
				created_at: {
					$gte: new Date(qDate),
					$lte: new Date(
						new Date(qDate).setHours(
							hour,
							minute,
							seconds
						)
					),
				},
			}).sort({ created_at: "asc" });

			//Handeling response
			if (!users) {
				res.status(404);
				throw new Error("Error on request");
			}

			res.status(200).json(users);
		} catch (error) {
			console.error(`Error: ${error.msg}`);
		}
	}
);

// @desc    Find users based on time period
// @route   GET /api/user/date_range
// @access  Public

const getUserByDateRange = asyncHandler(
	async (req, res) => {
		try {
			//get dates from req.query
			let { startDate, endDate } = req.query;

			// check that date is not empty
			if (startDate === "" || endDate === "") {
				return res.status(400);
				throw new Error("Invalid Data");
			}

			//Query database using Mongoose
			const users = await User.find({
				created_at: {
					$gte: new Date(startDate),
					$lte: new Date(
						new Date(endDate).setHours(23, 59, 59)
					),
				},
			}).sort({ created_at: "asc" });

			//Handeling response
			if (!users) {
				res.status(404);
				throw new Error("Error on request");
			}

			res.status(200).json(users);
		} catch (error) {
			console.error(`Error: ${error.msg}`);
		}
	}
);

module.exports = {
	createUser,
	getAllUsers,
	updateUser,
	deleteUser,
	getUserByRole,
	getUserByDate,
	getUserByDateRange,
};
