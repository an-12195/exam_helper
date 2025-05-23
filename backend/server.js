const express = require("express");
const cors = require("cors");
const path = require("path");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Serve API routes
app.use("/api", protectedRoutes);

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, "frontend", "build")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
