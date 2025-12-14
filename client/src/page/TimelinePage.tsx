import { useQuery } from "@tanstack/react-query";

import { fetchEvents, fetchTracks } from "@/api/timeline";
import { StatusBar } from "@/components/StatusBar";
import { TimelineCanvas } from "@/components/TimelineCanvas";
import { TimelineHeader } from "@/components/TimelineHeader";
import { useZoom } from "@/hooks/useZoom";

export const TimelinePage = () => {
  const { zoomLevel, selectedMonth, setZoomLevel, setSelectedMonth } =
    useZoom();

  // 트랙 데이터 fetching
  const {
    data: tracks = [],
    isLoading: isLoadingTracks,
    error: tracksError,
  } = useQuery({
    queryKey: ["tracks"],
    queryFn: fetchTracks,
  });

  // 이벤트 데이터 fetching
  const {
    data: events = [],
    isLoading: isLoadingEvents,
    error: eventsError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  // 로딩 상태
  if (isLoadingTracks || isLoadingEvents) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-600">로딩 중...</div>
      </div>
    );
  }

  // 에러 상태
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
      />
      <StatusBar eventCount={events.length} />
    </div>
  );
};
