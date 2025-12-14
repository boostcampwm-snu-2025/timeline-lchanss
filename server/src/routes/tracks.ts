import { Router } from "express";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();
const TRACKS_FILE = join(__dirname, "../data/tracks.json");

// GET /api/tracks
router.get("/", (req, res) => {
  try {
    const data = JSON.parse(readFileSync(TRACKS_FILE, "utf-8"));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read tracks" });
  }
});

export default router;
