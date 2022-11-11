const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleSchema = new Schema(
	{
		role_name: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model(
	"Roles",
	roleSchema
);
