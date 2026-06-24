const express = require("express");

const router = express.Router();

router.get("/info", (req, res) => {
  res.json({
    latestVersion: "1.1.0",
    apkUrl:
      "https://github.com/kamalesh2602/LostIt/releases",
    releaseNotes: [
      "Dark Mode",
      "Theme Persistence",
      "UI Improvements",
    ],
  });
});

module.exports = router;