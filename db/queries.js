// Manage the connections rather than open/close each time
// Each pool.query is used to query the database
const pool = require("./pool");

async function getAllMessages() {
  // query returns a result object on which rows is a property
  const { rows } = await pool.query("SELECT * FROM messages");
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
  getAllMessages,
  postMessage,
  findMessage,
  deleteMessage,
};
