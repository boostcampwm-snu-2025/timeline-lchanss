import { getRequest, postRequest, deleteRequest } from "@/shared/api/common";
import type { Event } from "@/types/event";
import type { Track } from "@/types/track";

// GET /api/tracks
export const fetchTracks = async (): Promise<Track[]> => {
  return getRequest<Track[]>("/api/tracks");
};

// GET /api/events
export const fetchEvents = async (): Promise<Event[]> => {
  return getRequest<Event[]>("/api/events");
};

// POST /api/events
export const createEvent = async (event: Omit<Event, "id">): Promise<Event> => {
  return postRequest<Event, Omit<Event, "id">>("/api/events", event);
};

// DELETE /api/events/:id
export const deleteEvent = async (id: string): Promise<void> => {
  return deleteRequest<void>(`/api/events/${id}`);
};
