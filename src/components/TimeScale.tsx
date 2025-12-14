import type { ZoomLevel } from "@/types/zoom";

import { getDaysInMonth, getMonthName } from "@/utils/date";

import { TimeMarker } from "./TimeMarker";

type Props = {
  zoomLevel: ZoomLevel;
  selectedMonth: number;
  onMonthClick: (month: number) => void;
};

export const TimeScale = ({
  zoomLevel,
  selectedMonth,
  onMonthClick,
}: Props) => {
  if (zoomLevel === "year") {
    // 1년 보기: 12개월 마커
    return (
      <div className="flex justify-between relative h-[60px]">
        {Array.from({ length: 12 }, (_, i) => (
          <TimeMarker
            key={i}
            label={getMonthName(i)}
            onClick={() => onMonthClick(i)}
            clickable
          />
        ))}
      </div>
    );
  }

  // 1개월 보기: 7일 간격 마커
  const daysInMonth = getDaysInMonth(2025, selectedMonth);
  const markers = [];

  for (let i = 1; i <= daysInMonth; i += 7) {
    markers.push(
      <TimeMarker
        key={i}
        label={`${i}일`}
        sublabel={getMonthName(selectedMonth)}
      />
    );
  }

  return (
    <div className="flex justify-between relative h-[60px]">{markers}</div>
  );
};
