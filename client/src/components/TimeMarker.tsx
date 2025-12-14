type Props = {
  label: string;
  sublabel?: string;
  onClick?: () => void;
  clickable?: boolean;
  isSelected?: boolean; // 추가
};

export const TimeMarker = ({
  label,
  sublabel,
  onClick,
  clickable,
  isSelected,
}: Props) => {
  return (
    <div
      className={`
        flex-1 text-center relative pt-2 
        ${clickable ? "cursor-pointer hover:bg-gray-50" : ""}
        ${isSelected ? "bg-blue-50 rounded" : ""}
        transition-colors
      `}
      onClick={onClick}
    >
      <div
        className={`
        absolute top-0 left-0 w-px h-2 
        ${isSelected ? "bg-blue-500" : "bg-gray-400"}
      `}
      />
      <div
        className={`
        text-sm font-medium
        ${isSelected ? "text-blue-600" : "text-gray-600"}
      `}
      >
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-gray-400 mt-0.5">{sublabel}</div>
      )}
    </div>
  );
};
