import { LucideIcon } from "lucide-react";

interface ToolItemProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export function ToolItem({ icon: Icon, label, onClick }: ToolItemProps) {
  return (
    <button 
      className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent/20 w-full text-left"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-8 h-8">
        <Icon className="size-5 text-[#62748E]" />
      </div>
      <span className="text-sm font-medium text-[#62748E]">{label}</span>
    </button>
  );
}
