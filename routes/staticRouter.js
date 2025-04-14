const express = require("express");
const router = express.Router();
const  handleRenderingHomePage  = require("../controllers/staticRoute.js")

router.get("/", handleRenderingHomePage)

module.exports = router;