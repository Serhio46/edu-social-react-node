const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

const userRouters = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', userRouters);

const startServer = async () => {
	const PORT = process.env.PORT || 5000;
	console.log(process.env.PORT)
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlPArser: true,
			useUnifiedTopology: true
		});
		app.listen(PORT, () => {
			console.log('Server has started on port', PORT);
		})
	} catch (error) {
		console.log(error)
	}
}

startServer();