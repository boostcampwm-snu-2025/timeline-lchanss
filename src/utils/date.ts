import type { Event } from "@/types/event";

export const parseDate = (dateStr: string): Date => {
  return new Date(dateStr);
};

export const getMonthName = (month: number): string => {
  const names = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return names[month];
};

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const isEventInRange = (
  event: Event,
  startRange: Date,
  endRange: Date
): boolean => {
  const eventStart = parseDate(event.startDate);
  const eventEnd = event.endDate ? parseDate(event.endDate) : eventStart;

  return eventStart <= endRange && eventEnd >= startRange;
};

export const formatCurrentDate = (): string => {
  const now = new Date();
  return `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
};
