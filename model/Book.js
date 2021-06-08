const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  datePublished: {
    type: Date,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
