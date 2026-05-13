const express = require("express");
const router = express.Router();
const Pilgrim = require("../models/Pilgrim");

router.post("/register", async (req, res) => {
  try {
    const newPilgrim = new Pilgrim(req.body);
    await newPilgrim.save();
    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LOGIN BY MOBILE
router.post("/login", async (req, res) => {
  try {
    const { mobile } = req.body;

    const pilgrim = await Pilgrim.findOne({ mobile });

    if (!pilgrim) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Login successful",
      user: pilgrim,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
