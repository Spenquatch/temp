interface MeetingItemProps {
  title: string;
  status: string;
  onClick?: () => void;
}

export function MeetingItem({ title, status, onClick }: MeetingItemProps) {
  // Determine status color based on the status text
  const getStatusColor = () => {
    if (status.includes("✅")) return "text-green-600";
    if (status.includes("⚠️")) return "text-amber-600";
    if (status.includes("🕒")) return "text-blue-600";
    return "text-gray-600";
  };

  return (
    <button
      className="flex flex-col items-start w-full p-3 text-left rounded-md hover:bg-sidebar-accent/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
      onClick={onClick}
    >
      <span className="font-medium text-sm text-foreground">{title}</span>
      <span className={`text-xs mt-1 ${getStatusColor()}`}>{status}</span>
    </button>
  );
}
