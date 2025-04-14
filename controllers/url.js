const { nanoid } = require("nanoid");
const URL = require("../models/url.js");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ msg: "URL is required!" });
  }

  const shortId = nanoid(8);
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.render("home", {
    shortUrl: `http://localhost:${process.env.PORT}/${shortId}`,
  });
}

async function handleGetIdAndRedirect(req, res) {
  const shortId = req.params.id;
  console.log("Redirect function triggered with shortId:", shortId);
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    },
    { new: true }
  );
  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  console.log("Found entry:", entry);
  console.log("Redirecting to:", entry.redirectUrl);

  res.redirect(entry.redirectUrl);
}

async function handleGetAnalyticsById(req, res) {
  const shortId = req.params.id;
  const result = await URL.findOne({ shortId });
  res.json({
    Clicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleGetIdAndRedirect,
  handleGetAnalyticsById,
};
