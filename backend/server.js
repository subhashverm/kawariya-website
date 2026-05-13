const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRoutes = require("./routes/admin");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/kanwariya")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/admin", adminRoutes);


app.use("/api/pilgrims", require("./routes/pilgrimRoutes"));
app.use("/api/darshan", require("./routes/darshanRoutes"));
app.use("/api/facilities", require("./routes/facilityRoutes"));
const newLocal = "./routes/SOSRoutes";
app.use("/api/sos", require(newLocal));
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
