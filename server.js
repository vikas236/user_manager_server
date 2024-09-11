// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { Pool } = require("pg");
require("dotenv").config();

// Middleware to handle JSON requests
app.use(express.json());

// Create a new Pool instance
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Basic route to handle GET requests
app.get("/", async (req, res) => {
  const client = await pool.connect();

  // Run a simple query
  const result = await client.query("SELECT * FROM user_management");
  res.send(result.rows);

  // Release the client back to the pool
  client.release();
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
