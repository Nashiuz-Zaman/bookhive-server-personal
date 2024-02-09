// model
const UserModel = require("./../../../models/User/User");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send({ status: "success", users });
  } catch (err) {
    res.send({ status: "error", customErrMessage: err.message });
  }
};

module.exports = getUsers;
