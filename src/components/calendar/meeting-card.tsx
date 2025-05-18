// MeetingCard component for displaying meeting items in the calendar panel

interface MeetingCardProps {
  title: string;
  time: string;
  withPrim?: boolean;
  isLive?: boolean;
  onClick?: () => void;
}

export function MeetingCard({ title, time, withPrim = false, isLive = false, onClick }: MeetingCardProps) {
  return (
    <button
      className="flex items-center w-full p-3 text-left rounded-md hover:bg-sidebar-accent/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition-colors"
      onClick={onClick}
      aria-label={`Meeting: ${title} at ${time}`}
    >
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{title}</span>
          {withPrim && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              With Prim
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
            {isLive && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            )}
            <span>{time}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
