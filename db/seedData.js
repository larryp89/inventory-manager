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
  { name: "Bildungsroman", category_name: "Fiction" },
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
  {
    forename: "Agatha",
    surname: "Christie",
  },
  {
    forename: "Isaac",
    surname: "Asimov",
  },
  {
    forename: "Walter",
    surname: "Isaacson",
  },
  {
    forename: "Doris",
    surname: "Kearns Goodwin",
  },
  {
    forename: "Harper",
    surname: "Lee",
  },
  {
    forename: "George",
    surname: "Orwell",
  },
  {
    forename: "J.R.R.",
    surname: "Tolkien",
  },
  {
    forename: "Jane",
    surname: "Austen",
  },
  {
    forename: "Aldous",
    surname: "Huxley",
  },
  {
    forename: "J.D.",
    surname: "Salinger",
  },
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
  {
    title: "To Kill a Mockingbird",
    cover_image:
      "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF894,1000_QL80_.jpg",
    author_name: { forename: "Harper", surname: "Lee" },
    genre_name: "Thriller",
    condition: "New",
    is_available: true,
  },
  {
    title: "1984",
    cover_image:
      "https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF894,1000_QL80_.jpg",
    author_name: { forename: "George", surname: "Orwell" },
    genre_name: "Dystopian",
    condition: "Used - Good",
    is_available: true,
  },
  {
    title: "The Hobbit",
    cover_image: "https://m.media-amazon.com/images/I/81lE2dteA0L.jpg",
    author_name: { forename: "J.R.R.", surname: "Tolkien" },
    genre_name: "Fantasy",
    condition: "New",
    is_available: true,
  },
  {
    title: "Pride and Prejudice",
    cover_image:
      "https://m.media-amazon.com/images/I/812wzoJvRLL._AC_UF894,1000_QL80_.jpg",
    author_name: { forename: "Jane", surname: "Austen" },
    genre_name: "Romance",
    condition: "Used - Acceptable",
    is_available: false,
  },
  {
    title: "Brave New World",
    cover_image:
      "https://m.media-amazon.com/images/I/917t3Joq2WL._AC_UF894,1000_QL80_.jpg",
    author_name: { forename: "Aldous", surname: "Huxley" },
    genre_name: "Sci-Fi",
    condition: "Used - Good",
    is_available: true,
  },
  {
    title: "The Catcher in the Rye",
    cover_image:
      "https://m.media-amazon.com/images/I/91fQEUwFMyL._AC_UF894,1000_QL80_.jpg",
    author_name: { forename: "J.D.", surname: "Salinger" },
    genre_name: "Bildungsroman",
    condition: "New",
    is_available: true,
  },
];

module.exports = {
  categories,
  genres,
  authors,
  books,
};
