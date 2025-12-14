type Props = {
  label: string;
  sublabel?: string;
  onClick?: () => void;
  clickable?: boolean;
};

export const TimeMarker = ({ label, sublabel, onClick, clickable }: Props) => {
  return (
    <div
      className={`flex-1 text-center relative pt-2 ${clickable ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 w-px h-2 bg-gray-400" />
      <div className="text-sm text-gray-600 font-medium">{label}</div>
      {sublabel && (
        <div className="text-xs text-gray-400 mt-0.5">{sublabel}</div>
      )}
    </div>
  );
};
