import type { Event } from "@/types/event";
import type { Track } from "@/types/track";

export const TRACKS: Track[] = [
  { id: "t-1", name: "일상", color: "#3b82f6", order: 0 },
  { id: "t-2", name: "프로젝트", color: "#8b5cf6", order: 1 },
  { id: "t-3", name: "학습", color: "#10b981", order: 2 },
];

export const EVENTS: Event[] = [
  {
    id: "evt-1",
    title: "호주 여행",
    startDate: "2025-07-11T00:00:00.000Z",
    endDate: "2025-07-21T00:00:00.000Z",
    track: "t-1",
    color: "#3b82f6",
  },
  {
    id: "evt-2",
    title: "일본 출장",
    startDate: "2025-09-05T00:00:00.000Z",
    endDate: "2025-09-10T00:00:00.000Z",
    track: "t-1",
    color: "#3b82f6",
  },
  {
    id: "evt-3",
    title: "타임라인 프로젝트",
    startDate: "2025-11-26T00:00:00.000Z",
    endDate: "2025-12-16T00:00:00.000Z",
    track: "t-2",
    color: "#8b5cf6",
  },
  {
    id: "evt-4",
    title: "AI 챗봇 개발",
    startDate: "2025-03-01T00:00:00.000Z",
    endDate: "2025-05-31T00:00:00.000Z",
    track: "t-2",
    color: "#8b5cf6",
  },
  {
    id: "evt-5",
    title: "웹사이트 리뉴얼",
    startDate: "2025-08-15T00:00:00.000Z",
    endDate: "2025-10-15T00:00:00.000Z",
    track: "t-2",
    color: "#8b5cf6",
  },
  {
    id: "evt-6",
    title: "React 마스터",
    startDate: "2025-01-05T00:00:00.000Z",
    endDate: "2025-03-20T00:00:00.000Z",
    track: "t-3",
    color: "#10b981",
  },
  {
    id: "evt-7",
    title: "TypeScript 심화",
    startDate: "2025-06-01T00:00:00.000Z",
    endDate: "2025-07-31T00:00:00.000Z",
    track: "t-3",
    color: "#10b981",
  },
];
