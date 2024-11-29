// Imports the Router function from the Express module (via destructuring)
const { Router } = require("express");
const indexController = require("../controllers/indexController.js");
const validateUser = require("../middleware/validateUser.js");

// Create instance of the Express router
const indexRouter = Router();

// Main GET index route
indexRouter.get("/", indexController.getAllBookDetails);

// Show addItem form
indexRouter.get("/add", indexController.getAddBookForm);

// Post a new item
indexRouter.post("/add", validateUser, indexController.addBook);

// Show updateBook form
indexRouter.get("/update/:bookID", indexController.getUpdateBookForm);

// Delete a book
indexRouter.post("/delete", indexController.deleteBook);

// Update a book
// NB cannot use /update as this is part of the other route
indexRouter.post("/update-book", validateUser, indexController.updateBook);

// Add a new author
indexRouter.get("/add-author", indexController.getAddAuthorForm);
indexRouter.post("/add-author", indexController.addAuthor);

// Add a new genre
indexRouter.get("/add-genre", indexController.getAddGenreForm);
indexRouter.post("/add-genre", indexController.addGenre);

module.exports = indexRouter;
