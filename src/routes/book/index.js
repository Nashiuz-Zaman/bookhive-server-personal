// import
const express = require("express");
const getBooks = require("./../../api/book/controllers/getBooks");

// create router
const router = express.Router();

// routes
router.post("/books", getBooks);

module.exports = router;
