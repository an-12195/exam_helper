// routes/protectedRoutes.js
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken"); // path to your middleware

// Example protected route
router.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Add more protected routes here, all using authenticateToken middleware

module.exports = router;
