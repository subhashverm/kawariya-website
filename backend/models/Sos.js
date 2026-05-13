const mongoose = require("mongoose");

const sosSchema = new mongoose.Schema({
  name: String,
  phone: String,
  location: String,
  message: String,
}, { timestamps: true });

module.exports =
  mongoose.models.SOS ||
  mongoose.model("SOS", sosSchema);
