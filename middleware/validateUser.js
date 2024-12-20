// Add validations
const { body } = require("express-validator");

const validateBook = [
  body("title").notEmpty().withMessage("Title is required").trim().escape(),
  body("forename")
    .notEmpty()
    .withMessage("Author forename is required")
    .trim()
    .escape(),
  body("surname")
    .notEmpty()
    .withMessage("Author surname is required")
    .trim()
    .escape(),
  body("genre").notEmpty().withMessage("Genre is required").trim().escape(),
  body("condition")
    .notEmpty()
    .withMessage("Condition is required")
    .trim()
    .escape(),
  body("availability")
    .isBoolean()
    .withMessage("Availability must be true or false"),
  body("cover_image_url")
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("Must be a valid URL")
    .trim()
];

const validateAuthor = [
  body("forename")
    .notEmpty()
    .withMessage("Author forename is required")
    .trim()
    .escape(),
  body("surname")
    .notEmpty()
    .withMessage("Author surname is required")
    .trim()
    .escape(),
];

const validateGenre = [
  body("genre").notEmpty().withMessage("Genre is required").trim().escape(),
];

module.exports = { validateBook, validateAuthor, validateGenre };
