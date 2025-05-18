interface ArchivedMeetingItemProps {
  title: string;
  onClick?: () => void;
}

export function ArchivedMeetingItem({ title, onClick }: ArchivedMeetingItemProps) {
  return (
    <button
      className="flex items-center w-full p-2 text-left rounded-md hover:bg-sidebar-accent/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition-colors"
      onClick={onClick}
    >
      <span className="text-xs text-gray-600">{title}</span>
    </button>
  );
}
