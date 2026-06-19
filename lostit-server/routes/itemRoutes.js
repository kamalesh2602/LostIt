const express = require("express");

const router = express.Router();

const {
  getItems,
  createItem,
  claimItem,
  deleteItem,
  getMatches, getMatchCount
} = require(
  "../controllers/itemController"
);

router.get("/", getItems);

router.post("/", createItem);
router.get("/:id/matches",getMatches);
router.patch("/:id/claim",claimItem);
router.delete("/:id",deleteItem);
router.get("/:id/match-count",getMatchCount);

module.exports = router;