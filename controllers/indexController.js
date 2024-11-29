const db = require("../db/queries");
const { validationResult } = require("express-validator");

async function getAllBookDetails(req, res) {
  const allBookDetails = await db.getAllBookDetails();
  res.render("booklist", {
    title: "All Books",
    details: allBookDetails,
  });
}

async function getAddBookForm(req, res) {
  const genres = await db.getAllGenres();
  const authors = await db.getAllAuthors();

  const uniqueAuthors = authors.filter(
    (author, index, self) =>
      index ===
      self.findIndex(
        (a) => a.forename === author.forename && a.surname === author.surname
      )
  );

  res.render("addBookForm", {
    genres: genres,
    authors: uniqueAuthors,
    errors: [],
  });
}

function getAddAuthorForm(req, res) {
  res.render("addAuthor");
}

function getAddGenreForm(req, res) {
  res.render("addGenreForm");
}

async function addGenre(req, res) {
  const genre = req.body.genre;
  const category = req.body.category;
  await db.addGenre(genre, category);
  console.log("...genre added successfully");
  res.redirect("/");
}

async function addAuthor(req, res) {
  const forename = req.body.forename;
  const surname = req.body.surname;
  await db.addAuthor(forename, surname);
  console.log("...author added successfully");
  res.redirect("/");
}
async function getUpdateBookForm(req, res) {
  // Get the bookID from the route path
  const bookID = req.params.bookID;
  // Get the book details for the book ID from the db
  const bookDetails = await db.getBook(bookID);
  const book = bookDetails[0];
  res.render("updateBookForm", { book: book, errors: [] });
}

async function updateBook(req, res) {
  // Check validation errors
  const errors = validationResult(req);
  // If there are validation errors
  if (!errors.isEmpty()) {
    const bookID = req.body.id;
    // Get the book details for the book ID from the db
    const bookDetails = await db.getBook(bookID);
    const book = bookDetails[0];
    return res
      .status(400)
      .render("updateBookForm", { book: book, errors: errors.array() });
  }
  const {
    id,
    author_id,
    title,
    forename,
    surname,
    genre,
    condition,
    availability,
    cover_image_url,
  } = req.body;
  console.log("...Updating DB");
  await db.updateBook(
    id,
    author_id,
    title,
    forename,
    surname,
    genre,
    condition,
    availability,
    cover_image_url
  );
  console.log("...Update complete");
  res.redirect("/");
}
async function addBook(req, res) {
  // Check validation errors
  const errors = validationResult(req);

  // If there are validation errors
  if (!errors.isEmpty()) {
    const genres = await db.getAllGenres();
    const authors = await db.getAllAuthors();

    // Send back errors and form data
    return res.status(400).render("addBookForm", {
      genres: genres,
      authors: authors,
      errors: errors.array(),
    });
  }

  // If validation passes, proceed with adding the book to DB
  const {
    title,
    forename,
    surname,
    genre,
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
    condition,
    availability,
    cover_image_url
  );

  // After successful submission, redirect to the main page
  res.redirect("/");
}

async function deleteBook(req, res) {
  const { id } = req.body;
  await db.deleteBook(id);
  console.log("deleting", id);
  res.redirect("/");
}

module.exports = {
  getAllBookDetails,
  getAddBookForm,
  addBook,
  deleteBook,
  getUpdateBookForm,
  updateBook,
  getAddAuthorForm,
  addAuthor,
  getAddGenreForm,
  addGenre,
};
