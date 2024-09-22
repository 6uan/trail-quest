import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import trailData from "../data/trails.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(trailData);
});

router.get("/:trailId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/trail.html"));
});

export default router;
