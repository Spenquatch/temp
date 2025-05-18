import { ReactNode } from "react";

interface PanelHeaderProps {
  title: string;
  actions?: ReactNode;
}

export function PanelHeader({ title, actions }: PanelHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-base font-medium text-foreground">{title}</h2>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
