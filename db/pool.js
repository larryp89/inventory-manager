// This file setes up a connection to the postgres db using the pg library

// The Pool class is used to manage multiple database connections (useful for managing multiple simultaneous requests)
const { Pool } = require("pg");

// Load the .env variables from the file into the process.env object
require("dotenv").config();

// Create new isntance of pool and configure using environment variables
const pool = new Pool({
  host: process.env.DEV_HOST,
  user: process.env.DEV_USER,
  database: process.env.DEV_DB,
  password: process.env.DATABASE_PASSWORD || process.env.DEV_PASSWORD,
  port: process.env.DEV_PORT,
});

module.exports = pool;
