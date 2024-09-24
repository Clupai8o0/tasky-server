const fs = require("fs");
const path = require("path");

// server.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple GET route
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// getting all tasks and users
app.get("/get-data", (req, res) => {
	const resp = fs.readFileSync(path.join(__dirname, "data.json"), "utf8");
	const data = JSON.parse(resp);
	res.json(data);
});

// updating tasks and users
app.post("/save-data", (req, res) => {
	if (!req.body) 
		return res.status(400).send("Request body is missing");
	const data = {
		...req.body
	}
	fs.writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(data, null, 2));
	res.send("Successfully saved data");
})

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;