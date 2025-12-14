import type { Event } from "@/types/event";
import type { Track } from "@/types/track";
import type { ZoomLevel } from "@/types/zoom";

import { TimeScale } from "./TimeScale";
import { TrackList } from "./TrackList";

type Props = {
  zoomLevel: ZoomLevel;
  selectedMonth: number;
  tracks: Track[];
  events: Event[];
  onMonthClick: (month: number) => void;
  onEventClick?: (event: Event) => void;
};

export const TimelineCanvas = ({
  zoomLevel,
  selectedMonth,
  tracks,
  events,
  onMonthClick,
  onEventClick,
}: Props) => {
  return (
    <div className="flex-1 overflow-hidden relative bg-white">
      <div className="w-full h-full overflow-auto py-5">
        <div className="min-w-full px-10">
          <div className="sticky top-0 bg-white z-10 pb-4 border-b-2 border-gray-200 mb-5">
            <TimeScale
              zoomLevel={zoomLevel}
              selectedMonth={selectedMonth}
              onMonthClick={onMonthClick}
            />
          </div>

          {/* 트랙들 */}
          <TrackList
            tracks={tracks}
            events={events}
            zoomLevel={zoomLevel}
            selectedMonth={selectedMonth}
            onEventClick={onEventClick}
          />
        </div>
      </div>
    </div>
  );
};
