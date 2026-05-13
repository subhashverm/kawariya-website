const express = require("express");
const router = express.Router();
const Darshan = require("../models/Darshan");

// BOOK SLOT
router.post("/book", async (req, res) => {
  try {
    const { pilgrimId, slotTime, crowdStatus } = req.body;

    const booking = new Darshan({
      pilgrimId,
      slotTime,
      crowdStatus,
    });

    await booking.save();

    res.json({ message: "Slot booked successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET ALL BOOKINGS (Admin future use)
router.get("/", async (req, res) => {
  const bookings = await Darshan.find().populate("pilgrimId");
  res.json(bookings);
});

module.exports = router;
