const express = require("express");
const router = express.Router();
const Facility = require("../models/Facility");

// ADD FACILITY (Admin)
router.post("/add", async (req, res) => {
  try {
    const facility = new Facility(req.body);
    await facility.save();
    res.json({ message: "Facility added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET ALL FACILITIES (User Map)
router.get("/", async (req, res) => {
  const facilities = await Facility.find();
  res.json(facilities);
});


module.exports = router;
