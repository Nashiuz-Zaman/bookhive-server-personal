// imports
const Book = require("./../../../models/Book/Book");

const getBooks = async (req, res) => {
  const reqQuery = req.body;
  const { limit, skip } = req.query;

  try {
    // if categories array is empty send all the books
    if (reqQuery.categories.length === 0) {
      const query = Book.find().skip(parseInt(skip)).limit(parseInt(limit));
      const queryCount = Book.countDocuments();

      const [books, count] = await Promise.all([
        query.exec(),
        queryCount.exec(),
      ]);

      return res.send({ success: true, books, count });
    }

    // if there are specific queries then
    let filter = {};

    if (reqQuery.categories && reqQuery.categories.length > 0) {
      filter.bookCharacteristics = { $in: reqQuery.categories };
    }

    const query = Book.find(filter).skip(parseInt(skip)).limit(parseInt(limit));
    const queryCount = Book.countDocuments(filter);

    const [books, count] = await Promise.all([query.exec(), queryCount.exec()]);

    return res.json({ success: true, books, count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = getBooks;
