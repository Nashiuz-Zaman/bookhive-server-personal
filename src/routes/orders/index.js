// imports
const express = require("express");

// api controllers
const getOrders = require("../../api/orders/controllers/getOrders");
const deleteOrder = require("../../api/orders/controllers/deleteOrder");

// create router
const router = express.Router();

// routes
router.get("/orders", getOrders);
router.delete("/orders/:id", deleteOrder);

module.exports = router;
