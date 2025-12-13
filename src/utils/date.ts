import { TIMELINE_CONFIG } from "@/constants/timeline";

/**
 * 2025년 시작/종료 상수
 */
const YEAR_START = new Date("2025-01-01");
const YEAR_END = new Date("2025-12-31");
const TOTAL_DAYS = Math.floor(
  (YEAR_END.getTime() - YEAR_START.getTime()) / (1000 * 60 * 60 * 24)
);

/**
 * 날짜 문자열을 타임라인 픽셀 위치로 변환
 * @param dateStr - ISO 형식 날짜 ("2025-07-11")
 * @returns 픽셀 위치 (0 ~ TIMELINE_WIDTH)
 */
export const dateToPixel = (dateStr: string): number => {
  const date = new Date(dateStr);
  const daysFromStart = Math.floor(
    (date.getTime() - YEAR_START.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (daysFromStart / TOTAL_DAYS) * TIMELINE_CONFIG.TIMELINE_WIDTH;
};

/**
 * 이벤트 기간을 픽셀 너비로 변환
 * @param startDate - 시작 날짜
 * @param endDate - 종료 날짜 (null이면 point 이벤트)
 * @returns 픽셀 너비
 */
export const durationToPixel = (
  startDate: string,
  endDate: string | null
): number => {
  if (!endDate) return 60; // point 이벤트는 고정 60px

  const start = new Date(startDate);
  const end = new Date(endDate);
  const days =
    Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1; // 시작일 포함

  return (days / TOTAL_DAYS) * TIMELINE_CONFIG.TIMELINE_WIDTH;
};

/**
 * 2025년 각 월의 시작일 배열 반환
 * @returns 1월 1일 ~ 12월 1일 배열
 */
export const getMonthTicks = (): Date[] => {
  return Array.from({ length: 12 }, (_, i) => new Date(2025, i, 1));
};

/**
 * 월 이름 포맷
 * @param date - Date 객체
 * @returns "1월", "2월" 등
 */
export const formatMonth = (date: Date): string => {
  return date.toLocaleDateString("ko-KR", { month: "long" });
};
