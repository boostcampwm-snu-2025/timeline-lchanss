import { formatCurrentDate } from "@/utils/date";

type Props = {
  eventCount: number;
};

export const StatusBar = ({ eventCount }: Props) => {
  return (
    <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-between text-sm text-gray-600">
      <div>
        <span className="font-medium">{eventCount}개</span>의 이벤트
      </div>
      <div>{formatCurrentDate()}</div>
    </div>
  );
};
