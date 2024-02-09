// import
const User = require("../../../models/User/User");

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const filter = { _id: id };

  const info = await User.deleteOne(filter);
  if (info.deletedCount === 1) {
    res.send({ status: "success" });
  }
};

module.exports = deleteUser;
