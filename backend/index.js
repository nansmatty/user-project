const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const roleRoutes = require("./routes/roleRoutes");
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

//routes
app.use("/api/role", roleRoutes);

//error-middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running on PORT ${PORT} 🔥`)
);
