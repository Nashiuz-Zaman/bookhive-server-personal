// imports
const express = require("express");

// api controllers
const createUser = require("../../api/users/controllers/createUser");
const updateUser = require("../../api/users/controllers/updateUser");
const checkUser = require("../../api/users/controllers/checkUser");
const getMembers = require("../../api/users/controllers/getMembers");
const getUsers = require("../../api/users/controllers/getUsers");
const deleteUser = require("../../api/users/controllers/deleteUser");

// create router
const router = express.Router();

// routes
router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/users/check", checkUser);
router.patch("/users/:email", updateUser);
router.get("/users/members", getMembers);
router.delete("/users/:id", deleteUser);

module.exports = router;
