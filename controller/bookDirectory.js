const Book = require("../model/Book");

exports.getIndex = (req, res) => {
  res.status(200).render("index");
};

exports.createBook = (req, res) => {
  res.status(200).render("createBook");
};

exports.postBook = async (req, res) => {
  const { author, title, date } = req.body;
  try {
    const book = await Book.create({ author, title, date });
    console.log(book);
    res.status(201).json({ success: true, book });
  } catch (err) {
    console.log(err);
  }
};

exports.getBook = async (req, res) => {
  const id = req.params.id;

  await Book.findById(id)
    .then((book) => res.status(200).json({ book }))
    .catch((err) => console.log(err));
};

exports.getBooks = async (req, res) => {
  try {
    const { ...books } = await Book.find();
    const newBooks = JSON.stringify({ books });
    const result = Object.entries(newBooks).reduce((acc, [key, value]) => {
      const { _id, __v, ...rest } = value;
      acc[key] = rest;
      return acc;
    }, {});

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteAllBooks = async (req, res) => {
  await Book.deleteMany({})
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => console.log(err));
};
