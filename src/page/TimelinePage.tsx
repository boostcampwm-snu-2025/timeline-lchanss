import { StatusBar } from "@/components/StatusBar";
import { TimelineCanvas } from "@/components/TimelineCanvas";
import { TimelineHeader } from "@/components/TimelineHeader";
import { TRACKS, EVENTS } from "@/constants/sampleData";
import { useZoom } from "@/hooks/useZoom";

export const TimelinePage = () => {
  const { zoomLevel, selectedMonth, setZoomLevel, setSelectedMonth } =
    useZoom();

  return (
    <div className="flex flex-col h-screen">
      <TimelineHeader
        zoomLevel={zoomLevel}
        selectedMonth={selectedMonth}
        onZoomChange={setZoomLevel}
      />
      <TimelineCanvas
        zoomLevel={zoomLevel}
        selectedMonth={selectedMonth}
        tracks={TRACKS}
        events={EVENTS}
        onMonthClick={setSelectedMonth}
      />
      <StatusBar eventCount={EVENTS.length} />
    </div>
  );
};
