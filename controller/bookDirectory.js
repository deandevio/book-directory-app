const Book = require("../model/Book");
const { format } = require("date-fns");

exports.getIndex = async (req, res) => {
  await Book.find().then((books) => res.render("index", { books }));
};

exports.getBooks = async (req, res) => {
  await Book.find().then((books) => res.status(200).json(books));
};

exports.createBook = (req, res) => {
  res.status(200).render("createBook");
};

exports.postBook = async (req, res) => {
  const { author, title, date } = req.body;
  try {
    const book = await Book.create({ author, title, date });
    res.status(201).json({ success: true, book });
  } catch (err) {
    console.log(err);
  }
};

exports.getBook = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);
    const { author, title } = book;
    const date = format(book.date, "MM/dd/yyyy");
    res.status(200).json({ book: { author, title, date } });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteAllBooks = async (req, res) => {
  await Book.deleteMany({})
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => console.log(err));
};
