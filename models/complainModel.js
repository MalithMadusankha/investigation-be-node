const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema({
  complain: { type: String, required: true },
  description: { type: String, required: true },
  investigation_status: { type: String, required: true },
  location: { type: String, required: true },
  complainer: {
    name: String,
    nic: String,
    address: String,
    mobile: String,
  },
  complain_on: { type: Boolean },
  investigator: { name: String, id: String },
  investigations: [
    {
      investigation_on: String,
      avidance: String,
      description: String,
      location: String,
      investigator: { name: String, id: String },
    },
  ],
});

const Complain = mongoose.model("Complain", complainSchema);

module.exports = Complain;
