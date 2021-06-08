const express = require("express");
const router = express.Router();
const { getIndex } = require("../controller/bookDirectory");

router.route("/").get(getIndex);

module.exports = router;
