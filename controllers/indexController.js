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

async function postAddBook(req, res) {
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
  await db.postAddBook(
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

module.exports = {
  getAllBookDetails,
  getAddBookForm,
  postAddBook,
};
