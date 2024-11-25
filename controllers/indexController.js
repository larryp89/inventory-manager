const db = require("../db/queries");

async function getAllBookDetails(req, res) {
  const allBookDetails = await db.getAllBookDetails();
  console.log(allBookDetails);
  res.render("booklist", {
    title: "All Books",
    details: allBookDetails,
  });
}

function getAddBookForm(req, res) {
  res.render("addBookForm");
}

async function getUpdateBookForm(req, res) {
  const bookID = req.params.bookID;
  const bookDetails = await db.getBook(bookID);
  const book = bookDetails[0];
  console.log(book);
  res.render("updateBookForm", { book: book });
}

async function addBook(req, res) {
  const {
    title,
    forename,
    surname,
    genre,
    category,
    condition,
    availability,
    cover_image_url,
  } = req.body;
  console.log("...Adding to DB");

  await db.addBook(
    title,
    forename,
    surname,
    genre,
    category,
    condition,
    availability,
    cover_image_url
  );
  res.redirect("/");
}

async function deleteBook(req, res) {
  const { id } = req.body;
  await db.deleteBook(id);
  console.log("deleteing", id);
  res.redirect("/");
}

module.exports = {
  getAllBookDetails,
  getAddBookForm,
  addBook,
  deleteBook,
  getUpdateBookForm,
};
