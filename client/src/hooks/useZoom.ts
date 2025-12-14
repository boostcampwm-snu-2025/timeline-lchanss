import { useState } from "react";

import type { ZoomLevel } from "@/types/zoom";

export const useZoom = () => {
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>("year");
  const [selectedMonth, setSelectedMonth] = useState<number>(0);

  return {
    zoomLevel,
    selectedMonth,
    setZoomLevel,
    setSelectedMonth,
  };
};
