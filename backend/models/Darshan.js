const mongoose = require("mongoose");

const darshanSchema = new mongoose.Schema({
  pilgrimId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pilgrim",
  },
  slotTime: String,
  crowdStatus: String,
  bookedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Darshan", darshanSchema);
