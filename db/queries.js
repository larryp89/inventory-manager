// Manage the connections rather than open/close each time
// Each pool.query is used to query the database
const pool = require("./pool");
const { Client } = require("pg"); // Use for transactions, i.e. multiple concurrent all or nothing queries
const { authors } = require("./seedData");

const connectionString =
  //   If no commandline arguments provided, it updates the dev DB
  process.argv[2] ||
  `postgresql://${process.env.DEV_USER}:${process.env.DEV_PASSWORD}@${process.env.DEV_HOST}:${process.env.DEV_PORT}/${process.env.DEV_DB}`;

async function getAllBooks() {
  // query returns a result object on which rows is a property
  const { rows } = await pool.query("SELECT * FROM books");
  console.log(rows);
  return rows;
}

async function getAllAuthors() {
  const { rows } = await pool.query("SELECT * FROM authors");
  console.log(rows);
  return rows;
}

async function getAllBookDetails() {
  const { rows } = await pool.query(`SELECT
  books.id, 
  books.title,
  authors.forename,
  authors.surname,
  genres.name AS genre_name,
  categories.name AS category_name, books.condition, books.is_available, books.cover_image
FROM books
LEFT JOIN authors ON books.author_id = authors.id
LEFT JOIN genres ON books.genre_id = genres.id
LEFT JOIN categories ON genres.category_id = categories.id;
`);
  return rows;
}

async function addBook(
  title,
  authorForename,
  authorSurname,
  genre,
  condition,
  availability,
  cover_image
) {
  const client = new Client(connectionString);
  await client.connect();
  try {
    // Begin transaction
    await client.query("BEGIN");

    // Select genre ID based on genre
    const genreQuery = "SELECT id FROM genres WHERE name = $1";
    const genreValue = [genre];
    const genreID = (await client.query(genreQuery, genreValue)).rows[0].id;

    // Insert into authors and obtain ID
    const insertAuthorQuery =
      "INSERT INTO authors (forename, surname) VALUES ($1, $2) RETURNING id";
    const authorValues = [authorForename, authorSurname];
    const authID = (await client.query(insertAuthorQuery, authorValues)).rows[0]
      .id;

    // Insert into books
    const insertBookQuery =
      "INSERT INTO books (title, cover_image, author_id, genre_id, condition, is_available) VALUES ($1, $2, $3, $4, $5, $6)";
    const bookValues = [
      title,
      cover_image,
      authID,
      genreID,
      condition,
      availability,
    ];
    const res = await client.query(insertBookQuery, bookValues);

    // Commit transaction
    await client.query("COMMIT");
    console.log("Data inserted successfully!");
  } catch (err) {
    await client.query("ROLLBACK"); // Rollback on error
    console.error("Error inserting data:", err);
  }
}

async function addAuthor(forename, surname) {
  const client = new Client(connectionString);
  await client.connect();
  try {
    // Begin transaction
    await client.query("BEGIN");

    // Insert new Author
    const authQuery = "INSERT INTO authors (forename, surname) VALUES ($1, $2)";
    const authValues = [forename, surname];
    await client.query(authQuery, authValues);
    // Commit transaction
    await client.query("COMMIT");
    console.log("Data inserted successfully!");
  } catch (err) {
    await client.query("ROLLBACK"); // Rollback on error
    console.error("Error inserting data:", err);
  } finally {
    await client.end(); // Ensure the client connection is closed
  }
}

async function deleteBook(bookID) {
  await pool.query("DELETE FROM books WHERE id = $1", [bookID]);
}

async function getBook(bookID) {
  const { rows } = await pool.query(
    `SELECT
    books.id,
    books.title,
    books.author_id,
    authors.forename,
    authors.surname,
    genres.name AS genre_name, 
    books.genre_id,
    categories.name AS category_name,
    categories.id AS category_id, 
    books.condition, 
    books.is_available, 
    books.cover_image
  FROM books
  LEFT JOIN authors ON books.author_id = authors.id
  LEFT JOIN genres ON books.genre_id = genres.id
  LEFT JOIN categories ON genres.category_id = categories.id
  WHERE books.id = $1
  `,
    [bookID]
  );
  return rows;
}

async function updateBook(
  bookID,
  author_id,
  title,
  forename,
  surname,
  genre,
  condition,
  availability,
  cover_image_url
) {
  const client = new Client(connectionString);
  await client.connect();
  try {
    // Begin transaction
    await client.query("BEGIN");

    // Update the book details
    const bookQuery =
      "UPDATE books SET title = $1, condition = $2, is_available = $3, cover_image = $4 WHERE id = $5";
    const bookValues = [
      title,
      condition,
      availability,
      cover_image_url,
      bookID,
    ];
    await client.query(bookQuery, bookValues);

    // Update authors table with name change
    const authorQuery =
      "UPDATE authors SET forename = $1, surname = $2 WHERE id = $3";
    const authorValues = [forename, surname, author_id];
    await client.query(authorQuery, authorValues);

    // Update genre ID in books table based on genre name
    // First get the correct ID from genres
    const genreIDQuery = "SELECT id FROM genres WHERE genres.name = $1";
    const genreIDResult = await client.query(genreIDQuery, [genre]);
    const newGenreID = genreIDResult.rows[0].id;

    // Then update the book table
    const updateGenreIDQuery = "UPDATE books SET genre_id = $1 WHERE id = $2";
    const updateGenreValues = [newGenreID, bookID];
    await client.query(updateGenreIDQuery, updateGenreValues);

    // Commit transaction
    await client.query("COMMIT");
    console.log("Data inserted successfully!");
  } catch (err) {
    await client.query("ROLLBACK"); // Rollback on error
    console.error("Error inserting data:", err);
  } finally {
    await client.end(); // Ensure the client connection is closed
  }
}

module.exports = {
  getAllBooks,
  getAllAuthors,
  getAllBookDetails,
  addBook,
  deleteBook,
  getBook,
  updateBook,
  addAuthor,
};
