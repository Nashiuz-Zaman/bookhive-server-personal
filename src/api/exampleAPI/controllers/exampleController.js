// example api controller file

const exampleController = async (req, res) => {
  const requestBody = req.body;
  res.send("controller working");
};

module.exports = exampleController;
