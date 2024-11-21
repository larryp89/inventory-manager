// Manage the connections rather than open/close each time
// Each pool.query is used to query the database
const pool = require("./pool");

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

async function postMessage(username, message, date) {
  await pool.query(
    "INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)",
    [username, message, date]
  );
}

async function findMessage(messageID) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageID,
  ]);
  return rows[0];
}

async function deleteMessage(messageID) {
  await pool.query("DELETE FROM messages WHERE ID = $1", [messageID]);
}

module.exports = {
  getAllBooks,
  getAllAuthors,
  getAllBookDetails,
};
