import type { Event } from "@/types/event";
import type { Track } from "@/types/track";

import type { ZoomLevel } from "@/types/zoom";

import { TrackItem } from "./TrackItem";

type Props = {
  tracks: Track[];
  events: Event[];
  zoomLevel: ZoomLevel;
  selectedMonth: number;
  onEventClick?: (event: Event) => void;
};

export const TrackList = ({
  tracks,
  events,
  zoomLevel,
  selectedMonth,
  onEventClick,
}: Props) => {
  // order 순으로 정렬
  const sortedTracks = [...tracks].sort((a, b) => a.order - b.order);

  return (
    <div>
      {sortedTracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          events={events.filter((e) => e.track === track.id)}
          zoomLevel={zoomLevel}
          selectedMonth={selectedMonth}
          onEventClick={onEventClick}
        />
      ))}
    </div>
  );
};
