import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import trailController from "../controllers/trails.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", trailController.getTrails);

router.get("/:trailId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/trail.html"));
});

export default router;
