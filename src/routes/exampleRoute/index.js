// imports
const express = require("express");
const exampleController = require("../../api/exampleAPI/controllers/exampleController");

// create router
const router = express.Router();

// routes
router.post("/example-api", exampleController);

module.exports = router;
