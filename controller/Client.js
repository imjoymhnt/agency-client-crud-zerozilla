const Clients = require("../models/Clients");

// ############################ Update Client Details ################################
exports.updateClientDetails = (req, res) => {
  try {
    const { _id } = req.body;
    Clients.findByIdAndUpdate(
      _id,
      { $set: { ...req.body } },
      { upsert: true },
      (err, client) => {
        if (err || !client) {
          return res.status(404).json({
            success: false,
            msg: err.message,
          });
        }
        return res.status(204).json({
          success: true,
          data: client,
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

// ############################## Get Max bill #################################
exports.getMaxBill = (req, res) => {
  const pipeline = [
    {
      $group: {
        _id: "$agencyId",
        totalBill: { $sum: "$bill" },
        clients: { $push: "$name" },
      },
    },
    {
      $lookup: {
        from: "agencies",
        localField: "_id",
        foreignField: "_id",
        as: "agency",
      },
    },
  ];
  Clients.aggregate(pipeline)
    .sort({ totalBill: -1 })
    .limit(1)

    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          success: false,
          msg: "Can't get max bill",
        });
      }
      return res.status(200).json({
        success: true,
        data,
      });
    });
};
