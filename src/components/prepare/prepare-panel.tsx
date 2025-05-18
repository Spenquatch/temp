import { FileText, Plus, Settings, StickyNote } from "lucide-react";
import { useMeetingContext, MeetingItem as MeetingItemType } from "@/contexts/meeting-context";
import { PanelHeader } from "./panel-header";
import { ToolItem } from "./tool-item";
import { MeetingItem } from "./meeting-item";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// Sample meeting data
const meetingsData: MeetingItemType[] = [
  {
    title: "Next Monday – Standup",
    status: "Prepped ✅",
    date: "May 19, 2025",
    description: "Weekly team standup meeting to discuss progress and blockers.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis"],
    agenda: [
      "Team updates (15 min)",
      "Blockers discussion (10 min)",
      "Goals for the week (5 min)"
    ]
  },
  {
    title: "Design Sprint Planning",
    status: "Needs Agenda ⚠️",
    date: "May 21, 2025",
    description: "Planning session for the upcoming design sprint focused on the new feature set.",
    attendees: ["Alex Wong", "Jessica Miller", "David Lee", "Rachel Green"]
  },
  {
    title: "UX Review",
    status: "Draft in Progress 🕒",
    date: "May 22, 2025",
    description: "Review of the latest UX designs for the mobile application.",
    attendees: ["Jessica Miller", "Chris Taylor", "Amanda White"],
    agenda: [
      "Review of design changes (20 min)",
      "User testing results (15 min)",
      "Next steps (10 min)"
    ]
  },
  {
    title: "Product Roadmap Discussion",
    status: "Needs Agenda ⚠️",
    date: "May 24, 2025",
    description: "Strategic discussion about the product roadmap for Q3 and Q4.",
    attendees: ["John Smith", "Lisa Johnson", "Mark Williams", "Emily Davis"]
  },
  {
    title: "Team Retrospective",
    status: "Draft in Progress 🕒",
    date: "May 26, 2025",
    description: "Monthly team retrospective to discuss what went well and what could be improved.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis", "David Lee"]
  },
  {
    title: "Quarterly Planning",
    status: "Prepped ✅",
    date: "May 30, 2025",
    description: "Quarterly planning session to align on goals and priorities for the next quarter.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis", "Alex Wong", "Jessica Miller"],
    agenda: [
      "Review of Q2 goals (30 min)",
      "Q3 planning (45 min)",
      "Resource allocation (15 min)",
      "Action items (15 min)"
    ]
  }
];

export function PreparePanel() {
  const { setSelectedMeeting } = useMeetingContext();
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-3 border-b p-4 w-full">
        <PanelHeader 
          title="Prepare" 
          actions={
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <Plus className="h-3.5 w-3.5" />
              <span className="text-xs">New Agenda</span>
            </Button>
          }
        />
        
        <div className="space-y-2">
          <ToolItem icon={StickyNote} label="Smart Agendas" />
          <ToolItem icon={FileText} label="Meeting Templates" />
          <ToolItem icon={Settings} label="Scheduling Preferences" />
        </div>
        
        <Separator className="my-2" />
      </div>
      
      <div className="flex-1 overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:border-[1px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding">
        <div className="p-4 space-y-3">
          {meetingsData.map((meeting, index) => (
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
