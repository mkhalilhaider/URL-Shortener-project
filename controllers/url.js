const URL = require("../models/url.js");
const { nanoid } = require("nanoid");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  // console.log(body)
  console.log(body.url)
  if (!body.url) {
    return res.status(400).json({ msg: "URL is required!" });
  }

  const shortId = nanoid(8);
console.log(shortId)
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  res.json({ id: shortId });
}

async function handleGetIdAndRedirect(req, res) {
  const shortId = req.params.id;
  console.log(("redirect func clg", shortId));
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
    }
  );
  // console.log(entry)
  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

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
