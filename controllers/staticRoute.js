const URL = require("../models/url.js");

async function handleRenderingHomePage(req, res) {
  console.log("i am running handleRenderingHomePage");
  res.send("hellow from server home page");
}

module.exports = handleRenderingHomePage;
