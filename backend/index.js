const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const roleRoutes = require("./routes/roleRoutes");
const userRoutes = require("./routes/userRoutes");
const {
	notFound,
	errorHandler,
} = require("./middleware/errorMiddleware");

const app = express();

dotenv.config();

//Database Connection
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/role", roleRoutes);
app.use("/api/user", userRoutes);

//error-middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running on PORT ${PORT} 🔥`)
);
