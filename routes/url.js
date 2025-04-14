const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortUrl,
  handleGetIdAndRedirect,
  handleGetAnalyticsById,
} = require("../controllers/url.js");

router.post("/", handleGenerateNewShortUrl);
router.get("/analytics/:id", handleGetAnalyticsById);
router.get("/:id", handleGetIdAndRedirect);

module.exports = router;
