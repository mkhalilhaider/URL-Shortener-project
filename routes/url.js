const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortUrl,
  handleGetIdAndRedirect,
  handleGetAnalyticsById,
} = require("../controllers/url.js");

router.post("/", handleGenerateNewShortUrl);
router.get("/:id", handleGetIdAndRedirect);
router.get("/analytics/:id", handleGetAnalyticsById);

module.exports = router;