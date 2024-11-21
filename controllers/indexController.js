const db = require("../db/queries");

// async function getAllBooks(req, res) {
//   const allbooks = await db.getAllBooks();
//   console.log(allbooks);
//   res.render("booklist", { title: "Book List", books: allbooks });
// }

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

function postAddBook(req, res) {
  const { title, author } = req.body;
  console.log(title, author);
  console.log("...Adding to DB");
  res.redirect("/");
}

module.exports = {
  getAllBookDetails,
  getAddBookForm,
  postAddBook,
};
