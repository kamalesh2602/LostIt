const express = require("express");

const router = express.Router();

router.get("/info", (req, res) => {
  res.json({
    latestVersion: "1.2.0",
    apkUrl:
      "https://github.com/kamalesh2602/LostIt/releases",
    releaseNotes: [
      "Push Notifications",
      "Match Notifications",
      "Dark Mode",
      "Theme Persistence",
      "Version Update Checker",
      "UI Improvements",
    ],
  });
});

module.exports = router;