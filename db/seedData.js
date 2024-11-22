const categories = [{ name: "Fiction" }, { name: "Non-Fiction" }];

const genres = [
  // Fiction
  { name: "Mystery", category_name: "Fiction" },
  { name: "Sci-Fi", category_name: "Fiction" },
  { name: "Fantasy", category_name: "Fiction" },
  { name: "Romance", category_name: "Fiction" },
  { name: "Thriller", category_name: "Fiction" },
  { name: "Horror", category_name: "Fiction" },
  { name: "Historical Fiction", category_name: "Fiction" },
  { name: "Young Adult", category_name: "Fiction" },
  { name: "Adventure", category_name: "Fiction" },
  { name: "Dystopian", category_name: "Fiction" },
  { name: "Graphic Novel", category_name: "Fiction" },
  { name: "Literary Fiction", category_name: "Fiction" },
  { name: "Magical Realism", category_name: "Fiction" },
  { name: "Satire", category_name: "Fiction" },
  { name: "Western", category_name: "Fiction" },
  { name: "Short Stories", category_name: "Fiction" },

  // Non-Fiction
  { name: "Biography", category_name: "Non-Fiction" },
  { name: "History", category_name: "Non-Fiction" },
  { name: "Memoir", category_name: "Non-Fiction" },
  { name: "Self-Help", category_name: "Non-Fiction" },
  { name: "Health & Wellness", category_name: "Non-Fiction" },
  { name: "True Crime", category_name: "Non-Fiction" },
  { name: "Travel", category_name: "Non-Fiction" },
  { name: "Science", category_name: "Non-Fiction" },
  { name: "Technology", category_name: "Non-Fiction" },
  { name: "Philosophy", category_name: "Non-Fiction" },
  { name: "Politics", category_name: "Non-Fiction" },
  { name: "Economics", category_name: "Non-Fiction" },
  { name: "Education", category_name: "Non-Fiction" },
  { name: "Parenting", category_name: "Non-Fiction" },
  { name: "Spirituality", category_name: "Non-Fiction" },
  { name: "Business", category_name: "Non-Fiction" },
  { name: "Essays", category_name: "Non-Fiction" },
  { name: "Cookbook", category_name: "Non-Fiction" },
  { name: "Art & Photography", category_name: "Non-Fiction" },
  { name: "Music", category_name: "Non-Fiction" },
];

const authors = [
  { forename: "Agatha", surname: "Christie" },
  { forename: "Isaac", surname: "Asimov" },
  { forename: "Walter", surname: "Isaacson" },
  { forename: "Doris", surname: "Kearns Goodwin" },
];

const books = [
  {
    title: "Murder on the Orient Express",
    cover_image:
      "https://m.media-amazon.com/images/I/71ihbKf67RL._AC_UF894,1000_QL80_.jpg",
    author_name: { forename: "Agatha", surname: "Christie" },
    genre_name: "Mystery",
    condition: "New",
    is_available: true,
  },
  {
    title: "Foundation",
    cover_image:
      "https://m.media-amazon.com/images/I/81LT+V9G4IL._AC_UF894,1000_QL80_.jpg",
    author_name: { forename: "Isaac", surname: "Asimov" },
    genre_name: "Sci-Fi",
    condition: "Used - Good",
    is_available: true,
  },
  {
    title: "Steve Jobs",
    cover_image: "https://m.media-amazon.com/images/I/81yP+dpbmeL.jpg",
    author_name: { forename: "Walter", surname: "Isaacson" },
    genre_name: "Biography",
    condition: "New",
    is_available: true,
  },
  {
    title: "Team of Rivals",
    cover_image:
      "https://m.media-amazon.com/images/I/81GuQSEj44L._AC_UF894,1000_QL80_.jpg",
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
  books,
};
