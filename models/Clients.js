const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  agencyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agency",
  },
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  phone: {
    type: "String",
    required: true,
  },
  bill: {
    type: "Number",
    required: true,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
