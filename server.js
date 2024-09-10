// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle JSON requests
app.use(express.json());

// Basic route to handle GET requests
app.get("/", (req, res) => {
  res.send("Hello, There!!!");
});

// Sample route to demonstrate handling a POST request
app.post("/data", (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
