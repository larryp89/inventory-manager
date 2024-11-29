#! /usr/bin/env node

// This file is a script for seeding (populating) the db with initial data
// Client class from the pg library runs SQL commands (ideal for scripts that perform a series of database operations and then exit, e.g. initial setup or seeding scripts.)
// Process is a global object that provides info/data about current node process, including argv
// argv contains the command-line arguments passed when launching the node.js process

// Initial data

const { categories, genres, authors, books } = require("./seedData");
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,  
name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS genres (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(255) NOT NULL,
category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
CONSTRAINT unique_genre_name UNIQUE (name)

);

CREATE TABLE IF NOT EXISTS authors (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
forename VARCHAR(255) NOT NULL,
surname VARCHAR(255) NOT NULL,
CONSTRAINT unique_author_name UNIQUE (forename, surname)
);

CREATE TABLE IF NOT EXISTS books (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title text NOT NULL,
cover_image TEXT,
author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE,
genre_id INTEGER REFERENCES genres(id) ON DELETE CASCADE,
condition VARCHAR(255) NOT NULL,
is_available BOOL NOT NULL DEFAULT true
);
`;

async function insertData(client) {
  await client.query("BEGIN"); // Start transaction

  try {
    // Insert categories
    for (const category of categories) {
      const catQuery = "INSERT INTO categories (name) VALUES ($1) RETURNING id"; // Return ID of the new row in the query result
      const catValues = [category.name];
      const res = await client.query(catQuery, catValues); // Rows property returned to res
      category.id = res.rows[0].id; // Add the id property to the category object
    }

    // Insert genres
    for (const genre of genres) {
      // Find category ID by name
      const category = categories.find(
        (cat) => cat.name === genre.category_name
      );
      if (!category) {
        throw new Error(`Category not found for genre: ${genre.name}`);
      }
      const genQuery =
        "INSERT INTO genres (name, category_id) VALUES ($1, $2) RETURNING id";
      const genValues = [genre.name, category.id];
      const res = await client.query(genQuery, genValues);
      genre.id = res.rows[0].id;
    }

    // Insert authors
    for (const author of authors) {
      const authQuery =
        "INSERT INTO authors (forename, surname) VALUES ($1, $2) RETURNING id";
      const authValues = [author.forename, author.surname];
      const res = await client.query(authQuery, authValues);
      author.id = res.rows[0].id;
    }

    // Insert books
    for (const book of books) {
      // Find the author ID
      const author = authors.find(
        (auth) =>
          auth.forename === book.author_name.forename &&
          auth.surname === book.author_name.surname
      );

      if (!author) {
        throw new Error(`Author not found for book: ${book.title}`);
      }

      const genre = genres.find((gen) => gen.name === book.genre_name);
      if (!genre) {
        throw new Error(`Genre not found for book: ${book.title}`);
      }

      const bookQuery =
        "INSERT INTO books (title, cover_image, author_id, genre_id, condition, is_available) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
      const bookValues = [
        book.title,
        book.cover_image,
        author.id,
        genre.id,
        book.condition,
        book.is_available,
      ];
      const res = await client.query(bookQuery, bookValues);
      book.id = res.rows[0].id;
    }

    // Commit transaction
    await client.query("COMMIT");
    console.log("Data inserted successfully!");
  } catch (err) {
    await client.query("ROLLBACK"); // Rollback on error
    console.error("Error inserting data:", err);
  }
}

async function main() {
  console.log("seeding...");
  // Specifies the necessary details for a programme to connect to a database
  const connectionString =
    //   If no commandline arguments provided, it updates the dev DB
    process.argv[2] ||
    `postgresql://${process.env.DEV_USER}:${process.env.DEV_PASSWORD}@${process.env.DEV_HOST}:${process.env.DEV_PORT}/${process.env.DEV_DB}?sslmode=require`;
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  await client.query(SQL); // Create the tables if one doesn't exist
  await insertData(client);
  await client.end();
  console.log("done");
}

main();

// NOTE: running the following will execute this script: node db/populatedb.js
