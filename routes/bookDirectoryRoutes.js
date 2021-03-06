const express = require("express");
const router = express.Router();
const { getIndex, postBook, getBook, createBook, deleteAllBooks, getBooks } = require("../controller/bookDirectory");

router.route("/").get(getIndex);
router.route("/books").get(getBooks);
router.route("/createbook").get(createBook).post(postBook);
router.route("/book/:id").get(getBook);
router.route("/books/deletebooks").delete(deleteAllBooks);

module.exports = router;
