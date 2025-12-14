import type { Event } from "@/types/event";
import type { Track } from "@/types/track";

import { Modal } from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  tracks: Track[];
};

export const EventDetailModal = ({ isOpen, onClose, event, tracks }: Props) => {
  if (!event) return null;

  const track = tracks.find((t) => t.id === event.track);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="이벤트 상세">
      <div className="space-y-4">
        {/* 제목 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            제목
          </label>
          <div className="text-base text-gray-900">{event.title}</div>
        </div>

        {/* 트랙 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            트랙
          </label>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: track?.color }}
            />
            <span className="text-base text-gray-900">{track?.name}</span>
          </div>
        </div>

        {/* 시작일 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            시작일
          </label>
          <div className="text-base text-gray-900">{event.startDate}</div>
        </div>

        {/* 종료일 */}
        {event.endDate && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              종료일
            </label>
            <div className="text-base text-gray-900">{event.endDate}</div>
          </div>
        )}

        {/* 설명 */}
        {event.description && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              설명
            </label>
            <div className="text-base text-gray-900 whitespace-pre-wrap">
              {event.description}
            </div>
          </div>
        )}

        {/* 색상 */}
        {event.color && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              색상
            </label>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded border border-gray-300"
                style={{ backgroundColor: event.color }}
              />
              <span className="text-sm text-gray-600">{event.color}</span>
            </div>
          </div>
        )}

        {/* 닫기 버튼 */}
        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            닫기
          </button>
        </div>
      </div>
    </Modal>
  );
};
