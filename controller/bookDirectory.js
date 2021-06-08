const Book = require("../model/Book");

exports.getIndex = (req, res) => {
  res.status(200).render("index");
};
