const mongoose = require("mongoose");

const pilgrimSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  mobile: String,
  emergency: String,
  bloodGroup: String,
});

module.exports = mongoose.model("Pilgrim", pilgrimSchema);
