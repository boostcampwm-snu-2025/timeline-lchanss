export interface Event {
  id: string;
  title: string;
  startDate: string; // ISO 8601 형식
  endDate: string | null;
  track: string; // track id
  description?: string;
  color?: string; // hex code
}
