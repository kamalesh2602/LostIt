const express = require("express");

const router = express.Router();

const {
  getItems,
  createItem,
  claimItem,
  deleteItem,
  getMatches, getMatchCount, testNotification
} = require(
  "../controllers/itemController"
);

router.get("/", getItems);

router.post("/", createItem);
router.get("/:id/matches",getMatches);
router.patch("/:id/claim",claimItem);
router.delete("/:id",deleteItem);
router.get("/:id/match-count",getMatchCount);

// Debug endpoint - used for notification testing
router.post("/test-notification",  testNotification);  //for test

module.exports = router;