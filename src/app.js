// import necessary packages
const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddlewares");

// import routes
const userRouter = require("./routes/users/index");
const authRouter = require("./routes/auth/index");

// app setup
const app = express();

// basic common middleware for express.json, cors
applyMiddlewares(app);

// all the routes handling is here below
app.use(userRouter);
app.use(authRouter);

// health test
app.get("/health", (req, res) => {
  res.send("Working properly");
});

// for all routes
app.all("*", (req, res, next) => {
  const error = new Error(`${req.url} is an invalid url`);
  error.status = 404;
  next(error);
});

// global error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

module.exports = app;
