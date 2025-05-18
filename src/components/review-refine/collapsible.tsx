import { ReactNode, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface CollapsibleProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function Collapsible({ label, children, className = "" }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${className}`}>
      <button
        className="flex items-center justify-between w-full p-2 text-sm font-medium text-left text-gray-700 hover:bg-gray-100 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 pl-2 space-y-2 border-l-2 border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}
