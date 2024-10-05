const express=require("express");
const app=express();
const database=require("./config/database");
require("dotenv").config();
const userRoutes=require("./routes/user")
const PORT=process.env.PORT||4000;
app.use(express.json());
database.connect();

app.use("api/v1/auth", userRoutes);
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});