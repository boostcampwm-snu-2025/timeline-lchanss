import { TIMELINE_CONFIG } from "@/constants/timeline";

/**
 * 날짜를 타임라인 상의 픽셀 위치로 변환
 * 2025-01-01 = 0px, 2025-12-31 = 3000px
 */
export const dateToPixel = (dateStr: string): number => {
  const date = new Date(dateStr);
  const yearStart = new Date("2025-01-01");
  const yearEnd = new Date("2025-12-31");

  const totalDays = Math.floor(
    (yearEnd.getTime() - yearStart.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysFromStart = Math.floor(
    (date.getTime() - yearStart.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (daysFromStart / totalDays) * TIMELINE_CONFIG.TIMELINE_WIDTH;
};

/**
 * 이벤트의 기간(일)을 픽셀 너비로 변환
 */
export const durationToPixel = (
  startDate: string,
  endDate: string | null
): number => {
  if (!endDate) return 60; // point 이벤트는 고정 너비

  const start = new Date(startDate);
  const end = new Date(endDate);
  const days =
    Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1; // 시작일 포함

  const yearStart = new Date("2025-01-01");
  const yearEnd = new Date("2025-12-31");
  const totalDays = Math.floor(
    (yearEnd.getTime() - yearStart.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (days / totalDays) * TIMELINE_CONFIG.TIMELINE_WIDTH;
};

/**
 * 2025년 각 월의 시작일 배열 반환
 */
export const getMonthTicks = (): Date[] => {
  return Array.from({ length: 12 }, (_, i) => new Date(2025, i, 1));
};

/**
 * 월 이름 포맷 (예: "1월", "2월")
 */
export const formatMonth = (date: Date): string => {
  return date.toLocaleDateString("ko-KR", { month: "long" });
};
