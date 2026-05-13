const express = require("express");
const router = express.Router();
const Facility = require("../models/Facility");
const SOS = require("../models/Sos");
const Darshan = require("../models/Darshan");

router.get("/analytics", async (req, res) => {
  try {
    const totalFacilities = await Facility.countDocuments();
    const restCount = await Facility.countDocuments({ type: "Rest" });
    const medicalCount = await Facility.countDocuments({ type: "Medical" });
    const activeFacilities = await Facility.countDocuments({ status: "Active" });

    const totalSOS = await SOS.countDocuments();
    const totalBookings = await Darshan.countDocuments();

    res.json({
      totalFacilities,
      restCount,
      medicalCount,
      activeFacilities,
      totalSOS,
      totalBookings,
    });
  } catch (err) {
    res.status(500).json({ error: "Analytics error" });
  }
});

module.exports = router;
