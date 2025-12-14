import { Router } from "express";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();
const EVENTS_FILE = join(__dirname, "../data/events.json");

// GET /api/events
router.get("/", (req, res) => {
  try {
    const data = JSON.parse(readFileSync(EVENTS_FILE, "utf-8"));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read events" });
  }
});

// POST /api/events
router.post("/", (req, res) => {
  try {
    const events = JSON.parse(readFileSync(EVENTS_FILE, "utf-8"));
    const newEvent = {
      id: `evt-${Date.now()}`,
      ...req.body,
    };
    events.push(newEvent);
    writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2));
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Failed to create event" });
  }
});

// DELETE /api/events/:id
router.delete("/:id", (req, res) => {
  try {
    const events = JSON.parse(readFileSync(EVENTS_FILE, "utf-8"));
    const filtered = events.filter((e: any) => e.id !== req.params.id);
    writeFileSync(EVENTS_FILE, JSON.stringify(filtered, null, 2));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete event" });
  }
});

export default router;
