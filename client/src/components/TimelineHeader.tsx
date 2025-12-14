import { useState } from "react";

import type { Track } from "@/types/track";
import type { ZoomLevel } from "@/types/zoom";

import { CreateEventModal } from "./CreateEventModal";
import { ZoomControl } from "./ZoomControl";
import { ZoomInfo } from "./ZoomInfo";

type Props = {
  zoomLevel: ZoomLevel;
  selectedMonth: number;
  onZoomChange: (level: ZoomLevel) => void;
  tracks: Track[];
};

export const TimelineHeader = ({
  zoomLevel,
  selectedMonth,
  onZoomChange,
  tracks,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">타임라인 시각화 도구</h1>

          {/* 새 이벤트 버튼 */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            새 이벤트
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <ZoomInfo zoomLevel={zoomLevel} selectedMonth={selectedMonth} />
          <ZoomControl zoomLevel={zoomLevel} onZoomChange={onZoomChange} />
        </div>
      </div>

      <CreateEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tracks={tracks}
      />
    </>
  );
};
