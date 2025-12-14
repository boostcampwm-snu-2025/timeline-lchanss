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
      <div>타임라인</div>
      <StatusBar eventCount={EVENTS.length} />
    </div>
  );
};
