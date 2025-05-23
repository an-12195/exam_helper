const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const protectedRoutes = require("./routes/protectedRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// API
app.use("/api", protectedRoutes);

// Serve static files (Vite's build)
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("/(.*)/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
