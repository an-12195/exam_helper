const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken");

router.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});

module.exports = router;
