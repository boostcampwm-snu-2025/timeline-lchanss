import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { TIMELINE_CONFIG } from "@/constants/timeline";

import { mockTracks } from "@/data/mockTracks";

import TrackRow from "./TrackRow";

export default function TimelineView() {
  return (
    <div className="w-full h-full bg-gray-50">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        limitToBounds={true}
        centerOnInit={true}
        wheel={{ step: 0.1 }}
      >
        <TransformComponent
          wrapperClass="!w-full !h-full"
          contentClass="!w-full !h-full"
        >
          <div
            className="timeline-container bg-white relative border border-gray-300"
            style={{
              width: `${TIMELINE_CONFIG.TIMELINE_WIDTH}px`,
              height: "400px",
            }}
          >
            {mockTracks.map((track) => (
              <TrackRow key={track.id} track={track} />
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
