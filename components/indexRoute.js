const express = require("express");

const router = express.Router();

router.get("/health-check", (req, res) => {
  res
    .status(500)
    .json({ message: "Welcome to the API Monitoring Tool!", success: true });
});

module.exports = router;
