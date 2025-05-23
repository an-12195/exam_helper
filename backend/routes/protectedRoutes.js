import express from "express";
import { authenticateToken } from "../middleware/authenticateToken.js";

const router = express.Router();

router.get("/profile", authenticateToken, (req, res) => {
  res.send({ message: `Welcome ${req.user.email}`, user: req.user });
});

export default router;
