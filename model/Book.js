const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isDate } = require("validator");

const bookSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
    validate: [isDate, "Please enter a correct date"],
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
