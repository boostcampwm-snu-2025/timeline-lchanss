export type Event = {
  id: string;
  title: string;
  startDate: string;
  endDate: string | null;
  track: string;
  description?: string;
  color?: string;
};
