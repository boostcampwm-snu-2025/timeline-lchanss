type Props = {
  startDate: Date;
  endDate: Date;
  totalDays: number;
};

export const TodayIndicator = ({ startDate, endDate, totalDays }: Props) => {
  const today = new Date();

  // 오늘이 현재 보기 범위 내에 있는지 확인
  if (today < startDate || today > endDate) {
    return null;
  }

  const offset =
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
  const left = (offset / totalDays) * 100;

  return (
    <div
      className="absolute top-0 bottom-0 w-0.5 bg-red-500 opacity-60 z-10"
      style={{ left: `${left}%` }}
    >
      <div className="absolute -top-6 -left-5 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
        오늘
      </div>
    </div>
  );
};
