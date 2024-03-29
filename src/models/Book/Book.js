const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  imageSource: {
    type: String,
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  edition: {
    type: String,
    required: true,
  },
  bookCharacteristics: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
