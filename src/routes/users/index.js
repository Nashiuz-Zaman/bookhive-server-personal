// imports
const express = require("express");
const createUser = require("../../api/users/controllers/createUser");
const updateUser = require("../../api/users/controllers/updateUser");
const checkUser = require("../../api/users/controllers/checkUser");
const getMembers = require("../../api/users/controllers/getMembers");

// create router
const router = express.Router();

// routes
router.post("/users", createUser);
router.post("/users/check", checkUser);
router.patch("/users/:email", updateUser);
router.get("/users/members", getMembers);

module.exports = router;
