import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { TIMELINE_CONFIG } from "@/constants/timeline";

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
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400">타임라인 컨텐츠 영역</p>
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
