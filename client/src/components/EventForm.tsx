import type { FormEvent } from "react";

import { useState } from "react";

import type { Event } from "@/types/event";
import type { Track } from "@/types/track";

type EventFormData = Omit<Event, "id">;

type Props = {
  initialData?: Event;
  tracks: Track[];
  onSubmit: (data: EventFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
};

export const EventForm = ({
  initialData,
  tracks,
  onSubmit,
  onCancel,
  isLoading,
}: Props) => {
  const [formData, setFormData] = useState<EventFormData>({
    title: initialData?.title || "",
    track: initialData?.track || tracks[0]?.id || "",
    startDate: initialData?.startDate || "",
    endDate: initialData?.endDate || "",
    description: initialData?.description || "",
    color: initialData?.color || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "제목을 입력해주세요.";
    }

    if (!formData.track) {
      newErrors.track = "트랙을 선택해주세요.";
    }

    if (!formData.startDate) {
      newErrors.startDate = "시작일을 선택해주세요.";
    }

    if (
      formData.endDate &&
      formData.startDate &&
      formData.endDate < formData.startDate
    ) {
      newErrors.endDate = "종료일은 시작일보다 이후여야 합니다.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(formData);
  };

  const handleChange = (field: keyof EventFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 에러 초기화
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 제목 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          제목 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="이벤트 제목을 입력하세요"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title}</p>
        )}
      </div>

      {/* 트랙 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          트랙 <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.track}
          onChange={(e) => handleChange("track", e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.track ? "border-red-500" : "border-gray-300"
          }`}
        >
          {tracks.map((track) => (
            <option key={track.id} value={track.id}>
              {track.name}
            </option>
          ))}
        </select>
        {errors.track && (
          <p className="mt-1 text-sm text-red-500">{errors.track}</p>
        )}
      </div>

      {/* 시작일 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          시작일 <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          value={formData.startDate}
          onChange={(e) => handleChange("startDate", e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.startDate ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.startDate && (
          <p className="mt-1 text-sm text-red-500">{errors.startDate}</p>
        )}
      </div>

      {/* 종료일 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          종료일
        </label>
        <input
          type="date"
          value={formData.endDate || ""}
          onChange={(e) => handleChange("endDate", e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.endDate ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.endDate && (
          <p className="mt-1 text-sm text-red-500">{errors.endDate}</p>
        )}
      </div>

      {/* 설명 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          설명
        </label>
        <textarea
          value={formData.description || ""}
          onChange={(e) => handleChange("description", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="이벤트에 대한 설명을 입력하세요 (선택사항)"
        />
      </div>

      {/* 색상 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          색상
        </label>
        <input
          type="color"
          value={formData.color || "#3b82f6"}
          onChange={(e) => handleChange("color", e.target.value)}
          className="w-20 h-10 border border-gray-300 rounded cursor-pointer"
        />
      </div>

      {/* 버튼 */}
      <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          취소
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading && (
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {isLoading ? "저장 중..." : "저장"}
        </button>
      </div>
    </form>
  );
};
