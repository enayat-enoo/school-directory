
const express = require("express");
const cors = require("cors");
const path = require("path");
const schoolRoutes = require("./routes/schoolRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/api/schools", schoolRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
