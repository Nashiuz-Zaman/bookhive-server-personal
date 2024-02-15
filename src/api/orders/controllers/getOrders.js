// model
const OrderModel = require("./../../../models/Order/Order");

const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.send({ status: "success", orders });
  } catch (err) {
    res.send({ status: "error", customErrMessage: err.message });
  }
};

module.exports = getOrders;
