import type { Event } from "@/types/event";
import type { Track } from "@/types/track";
import type { ZoomLevel } from "@/types/zoom";
import { getDaysInMonth, isEventInRange } from "@/utils/date";

import { EventItem } from "./EventItem";
import { TodayIndicator } from "./TodayIndicator";

type Props = {
  track: Track;
  events: Event[];
  zoomLevel: ZoomLevel;
  selectedMonth: number;
  onEventClick?: (event: Event) => void;
};

export const TrackItem = ({
  track,
  events,
  zoomLevel,
  selectedMonth,
  onEventClick,
}: Props) => {
  // 날짜 범위 계산
  let startDate: Date, endDate: Date;
  if (zoomLevel === "year") {
    startDate = new Date(2025, 0, 1);
    endDate = new Date(2025, 11, 31);
  } else {
    startDate = new Date(2025, selectedMonth, 1);
    endDate = new Date(
      2025,
      selectedMonth,
      getDaysInMonth(2025, selectedMonth)
    );
  }

  const totalDays =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

  // 현재 범위 내 이벤트만 필터링
  const visibleEvents = events.filter((event) =>
    isEventInRange(event, startDate, endDate)
  );

  return (
    <div className="mb-6 relative">
      {/* 트랙 헤더 */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-1 h-6 rounded-sm"
          style={{ backgroundColor: track.color }}
        />
        <div className="text-sm font-semibold text-gray-700">{track.name}</div>
      </div>

      {/* 트랙 컨텐츠 */}
      <div className="relative min-h-[60px] bg-gray-50 rounded-lg py-3">
        {visibleEvents.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            startDate={startDate}
            endDate={endDate}
            totalDays={totalDays}
            trackColor={track.color}
            onClick={onEventClick}
          />
        ))}

        <TodayIndicator
          startDate={startDate}
          endDate={endDate}
          totalDays={totalDays}
        />
      </div>
    </div>
  );
};
