import express from "express";
import { nanoid } from "nanoid";
import Url from "../models/url.js";

const router = express.Router();

// Shorten URL
router.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) return res.status(400).json({ error: "URL is required" });

  const shortId = nanoid(6);
  const newUrl = await Url.create({ shortId, originalUrl });

  res.json({ shortUrl: `${process.env.BASE_URL}/${shortId}`, shortId });
});

// Redirect to original URL
router.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const urlDoc = await Url.findOne({ shortId });

  if (!urlDoc) return res.status(404).json({ error: "Not found" });

  urlDoc.clicks++;
  await urlDoc.save();

  res.redirect(urlDoc.originalUrl);
});

export default router;
