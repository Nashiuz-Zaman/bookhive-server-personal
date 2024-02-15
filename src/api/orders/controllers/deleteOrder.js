// import
const OrderModel = require("../../../models/Order/Order");

const deleteOrder = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };

  const info = await OrderModel.deleteOne(filter);
  if (info.deletedCount === 1) {
    res.send({ status: "success" });
  }
};

module.exports = deleteOrder;
