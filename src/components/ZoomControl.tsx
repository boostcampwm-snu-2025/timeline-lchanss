import type { ZoomLevel } from "@/types/zoom";

type Props = {
  zoomLevel: ZoomLevel;
  onZoomChange: (level: ZoomLevel) => void;
};

export const ZoomControl = ({ zoomLevel, onZoomChange }: Props) => {
  const handleYearView = () => {
    onZoomChange("year");
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleYearView}
        className={`
          px-4 py-2 border rounded-md text-sm transition-all
          ${
            zoomLevel === "year"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }
        `}
      >
        1년 보기
      </button>

      <button
        onClick={() => onZoomChange("month")}
        className={`
          px-4 py-2 border rounded-md text-sm transition-all
          ${
            zoomLevel === "month"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }
        `}
      >
        1개월 보기
      </button>
    </div>
  );
};
