import type { ZoomLevel } from "@/types/zoom";

import { ZoomControl } from "./ZoomControl";
import { ZoomInfo } from "./ZoomInfo";

type Props = {
  zoomLevel: ZoomLevel;
  selectedMonth: number;
  onZoomChange: (level: ZoomLevel) => void;
};

export const TimelineHeader = ({
  zoomLevel,
  selectedMonth,
  onZoomChange,
}: Props) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-semibold">타임라인 시각화 도구</h1>

      <div className="flex gap-3 items-center">
        <ZoomInfo zoomLevel={zoomLevel} selectedMonth={selectedMonth} />
        <ZoomControl zoomLevel={zoomLevel} onZoomChange={onZoomChange} />
      </div>
    </div>
  );
};
