const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true,
		},
		role: {
			type: String,
			required: true,
		},
		job_preference: [
			{
				type: String,
				required: true,
			},
		],
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "modified_at",
		},
	}
);

module.exports = mongoose.model(
	"User",
	userSchema
);
