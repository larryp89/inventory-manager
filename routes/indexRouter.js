// Imports the Router function from the Express module (via destructuring)
const { Router } = require("express");

const indexController = require("../controllers/indexController.js");

// Create instance of the Express router
const indexRouter = Router();

// Main GET index route
indexRouter.get("/", indexController.getAllBooks);

// Show addItem form
indexRouter.get("/add", indexController.getAddBookForm);

// Post a new item
indexRouter.post("/add", indexController.postAddBook);

module.exports = indexRouter;
