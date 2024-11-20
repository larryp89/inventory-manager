const { post } = require("../routes/indexRouter");

function getAllBooks(req, res) {
  res.render("index");
}

function getAddBookForm(req, res) {
  res.render("addBookForm");
}

function postAddBook(req, res) {
  const { title, author } = req.body;
  console.log(title, author);
  console.log("...Adding to DB");
  res.redirect("/");
}

module.exports = {
  getAllBooks,
  getAddBookForm,
  postAddBook,
};
