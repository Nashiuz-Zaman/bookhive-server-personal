const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kvzqs8l.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    console.log("database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = connectDB;
