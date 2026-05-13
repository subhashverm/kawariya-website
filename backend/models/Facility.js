const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
  name: String,
  type: String,
  location: String,   // 🔥 ye add karo
  latitude: Number,
  longitude: Number,
  status: {
    type: String,
    default: "Active"
  }
});
module.exports =
  mongoose.models.Facility ||
  mongoose.model("Facility", facilitySchema);
