import { TIMELINE_CONFIG } from "@/constants/timeline";
import type { Track } from "@/types/track";

interface TrackRowProps {
  track: Track;
}

export default function TrackRow({ track }: TrackRowProps) {
  return (
    <div
      className="relative border-b border-gray-200"
      style={{
        height: `${TIMELINE_CONFIG.TRACK_HEIGHT}px`,
        backgroundColor: track.color,
      }}
    >
      {/* 트랙 이름 */}
      <div className="absolute left-4 top-4 z-10">
        <span className="font-medium text-gray-700 text-sm">{track.name}</span>
      </div>
    </div>
  );
}
