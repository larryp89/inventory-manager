const categories = [{ name: "Fiction" }, { name: "Non-Fiction" }];

const genres = [
  { name: "Mystery", category_name: "Fiction" },
  { name: "Sci-Fi", category_name: "Fiction" },
  { name: "Biography", category_name: "Non-Fiction" },
  { name: "History", category_name: "Non-Fiction" },
];

const authors = [
  { forename: "Agatha", surname: "Christie" },
  { forename: "Isaac", surname: "Asimov" },
  { forename: "Walter", surname: "Isaacson" },
  { forename: "Doris", surname: "Kearns Goodwin" },
];

const borrowers = [
  { name: "Alice Johnson", contact_info: 123456789 },
  { name: "Bob Smith", contact_info: 987654321 },
];

const books = [
  {
    title: "Murder on the Orient Express",
    cover_image: "",
    author_name: { forename: "Agatha", surname: "Christie" },
    genre_name: "Mystery",
    condition: "New",
    is_available: true,
  },
  {
    title: "Foundation",
    cover_image: "",
    author_name: { forename: "Isaac", surname: "Asimov" },
    genre_name: "Sci-Fi",
    condition: "Used - Good",
    is_available: true,
  },
  {
    title: "Steve Jobs",
    cover_image: "",
    author_name: { forename: "Walter", surname: "Isaacson" },
    genre_name: "Biography",
    condition: "New",
    is_available: true,
  },
  {
    title: "Team of Rivals",
    cover_image: "",
    author_name: { forename: "Doris", surname: "Kearns Goodwin" },
    genre_name: "History",
    condition: "Used - Acceptable",
    is_available: false,
  },
];

module.exports = {
  categories,
  genres,
  authors,
  borrowers,
  books,
};
