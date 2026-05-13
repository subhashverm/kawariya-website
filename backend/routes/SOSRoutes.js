const express = require("express");
const router = express.Router();
const SOS = require("../models/Sos");

router.post("/send", async (req, res) => {
  const sos = new SOS(req.body);
  await sos.save();
  res.json({ message: "SOS Sent" });
});

router.get("/", async (req, res) => {
  const alerts = await SOS.find();
  res.json(alerts);
});

router.put("/:id", async (req, res) => {
  await SOS.findByIdAndUpdate(req.params.id, { status: "RESOLVED" });
  res.json({ message: "Resolved" });
});

module.exports = router;
