// imports
const express = require("express");
const sendEmail = require("../../api/email/controllers/sendEmail");

// create router
const router = express.Router();

// routes
router.post("/email", sendEmail);

module.exports = router;
