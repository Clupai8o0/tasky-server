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

// A POST route that echoes the request body
app.post("/echo", (req, res) => {
	res.json({
		message: "Received data:",
		data: req.body,
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;