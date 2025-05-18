import { Bot, NotebookPen, SlidersHorizontal } from "lucide-react";
import { PanelHeader } from "@/components/prepare/panel-header";
import { ToolItem } from "@/components/prepare/tool-item";
import { MeetingItem } from "@/components/prepare/meeting-item";
import { Separator } from "@/components/ui/separator";
import { useMeetingContext, MeetingItem as MeetingItemType } from "@/contexts/meeting-context";

// Sample active meetings data
const activeMeetingsData: MeetingItemType[] = [
  {
    title: "Engineering Sync",
    status: "Live Now 🔴",
    date: "May 12, 2025",
    description: "Weekly engineering sync to discuss progress, blockers, and upcoming work.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis", "David Lee"],
    agenda: [
      "Team updates (15 min)",
      "Architecture discussion (20 min)",
      "Sprint planning (25 min)"
    ]
  },
  {
    title: "Marketing Kickoff",
    status: "Starting in 12 min ⏱",
    date: "May 12, 2025",
    description: "Kickoff meeting for the new marketing campaign.",
    attendees: ["Lisa Johnson", "Mark Williams", "Rachel Green", "Alex Wong"],
    agenda: [
      "Campaign overview (10 min)",
      "Target audience discussion (15 min)",
      "Timeline and deliverables (20 min)"
    ]
  },
  {
    title: "Product Demo",
    status: "Processing... ⚙️",
    date: "May 12, 2025",
    description: "Demo of the latest product features to the stakeholders.",
    attendees: ["John Smith", "Lisa Johnson", "Mark Williams", "Emily Davis", "Chris Taylor"],
    agenda: [
      "Feature showcase (30 min)",
      "Feedback session (20 min)",
      "Next steps (10 min)"
    ]
  }
];

export function ActiveNotesPanel() {
  const { setSelectedMeeting } = useMeetingContext();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-3 border-b p-4 w-full">
        <PanelHeader title="Active Notes" />
        
        {/* Pinned Tools */}
        <div className="space-y-2">
          <ToolItem icon={NotebookPen} label="Live Notes" />
          <ToolItem icon={Bot} label="AI Agents" />
          <ToolItem icon={SlidersHorizontal} label="Cue Console" />
        </div>
        
        <Separator className="my-3" />
      </div>
      
      {/* Live & Soon */}
      <div className="flex-1 overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:border-[1px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding">
        <div className="p-4 space-y-3">
          {activeMeetingsData.map((meeting, index) => (
            <MeetingItem 
              key={index}
              title={meeting.title} 
              status={meeting.status}
              onClick={() => setSelectedMeeting(meeting)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
