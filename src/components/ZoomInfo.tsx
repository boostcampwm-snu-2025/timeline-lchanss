import type { ZoomLevel } from "@/types/zoom";
import { getMonthName } from "@/utils/date";

type Props = {
  zoomLevel: ZoomLevel;
  selectedMonth: number;
};

export const ZoomInfo = ({ zoomLevel, selectedMonth }: Props) => {
  const text =
    zoomLevel === "year" ? "2025년" : `2025년 ${getMonthName(selectedMonth)}`;

  return (
    <div className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">
      {text}
    </div>
  );
};
