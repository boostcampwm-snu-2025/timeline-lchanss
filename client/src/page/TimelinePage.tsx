import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchTracks, fetchEvents } from "@/api/timeline";
import { EventDetailModal } from "@/components/EventDetailModal";
import { StatusBar } from "@/components/StatusBar";
import { TimelineCanvas } from "@/components/TimelineCanvas";
import { TimelineHeader } from "@/components/TimelineHeader";
import { useZoom } from "@/hooks/useZoom";
import type { Event } from "@/types/event";

export const TimelinePage = () => {
  const { zoomLevel, selectedMonth, setZoomLevel, setSelectedMonth } =
    useZoom();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const {
    data: tracks = [],
    isLoading: isLoadingTracks,
    error: tracksError,
  } = useQuery({
    queryKey: ["tracks"],
    queryFn: fetchTracks,
  });

  const {
    data: events = [],
    isLoading: isLoadingEvents,
    error: eventsError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoadingTracks || isLoadingEvents) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-600">로딩 중...</div>
      </div>
    );
  }

  if (tracksError || eventsError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-600">
          데이터를 불러오는 중 오류가 발생했습니다.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <TimelineHeader
          zoomLevel={zoomLevel}
          selectedMonth={selectedMonth}
          onZoomChange={setZoomLevel}
          tracks={tracks}
        />

        <TimelineCanvas
          zoomLevel={zoomLevel}
          selectedMonth={selectedMonth}
          tracks={tracks}
          events={events}
          onMonthClick={setSelectedMonth}
          onEventClick={setSelectedEvent}
        />

        <StatusBar eventCount={events.length} />
      </div>

      <EventDetailModal
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent}
        tracks={tracks}
      />
    </>
  );
};
