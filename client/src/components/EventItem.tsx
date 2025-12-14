import type { Event } from "@/types/event";
import { parseDate } from "@/utils/date";

type Props = {
  event: Event;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  trackColor: string;
  onClick?: (event: Event) => void;
};

export const EventItem = ({
  event,
  startDate,
  endDate,
  totalDays,
  trackColor,
  onClick,
}: Props) => {
  const eventStart = parseDate(event.startDate);
  const eventEnd = event.endDate ? parseDate(event.endDate) : eventStart;

  // 위치 계산
  const startOffset = Math.max(
    0,
    (eventStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const duration = Math.max(
    1,
    (eventEnd.getTime() - eventStart.getTime()) / (1000 * 60 * 60 * 24) + 1
  );

  const left = (startOffset / totalDays) * 100;
  const width = (duration / totalDays) * 100;

  return (
    <div
      onClick={() => onClick?.(event)}
      className="absolute h-9 rounded-md px-3 flex items-center text-sm font-medium text-white cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg overflow-hidden whitespace-nowrap shadow-md"
      style={{
        left: `${left}%`,
        width: `${Math.min(width, 100 - left)}%`,
        backgroundColor: event.color || trackColor,
      }}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {event.title}
      </span>
    </div>
  );
};
