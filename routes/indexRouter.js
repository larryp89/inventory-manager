// Imports the Router function from the Express module (via destructuring)
const { Router } = require("express");

const indexController = require("../controllers/indexController.js");

// Create instance of the Express router
const indexRouter = Router();

// Main GET index route
indexRouter.get("/", indexController.getAllBookDetails);

// Show addItem form
indexRouter.get("/add", indexController.getAddBookForm);

// Show updateBook form
indexRouter.get("/update/:bookID", indexController.getUpdateBookForm);

// Post a new item
indexRouter.post("/add", indexController.addBook);

// Delete a book
indexRouter.post("/delete", indexController.deleteBook);

module.exports = indexRouter;
