const URL = require("../models/url.js");

async function handleRenderingHomePage(req, res) {
  console.log("i am running handleRenderingHomePage");
  return res.render("home");
}

module.exports = {
  handleRenderingHomePage,
};
