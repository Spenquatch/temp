import { BarChart3, BookMarked, CheckSquare } from "lucide-react";
import { PanelHeader } from "@/components/prepare/panel-header";
import { ToolItem } from "@/components/prepare/tool-item";
import { MeetingItem } from "@/components/prepare/meeting-item";
import { Separator } from "@/components/ui/separator";
import { Collapsible } from "./collapsible";
import { ArchivedMeetingItem } from "./archived-meeting-item";
import { useMeetingContext, MeetingItem as MeetingItemType } from "@/contexts/meeting-context";

// Sample review meetings data
const reviewMeetingsData: MeetingItemType[] = [
  {
    title: "Weekly Sync",
    status: "3 action items ⬜",
    date: "May 11, 2025",
    description: "Weekly team sync meeting to discuss progress and next steps.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis"],
    agenda: [
      "Team updates (15 min)",
      "Project status (10 min)",
      "Action items review (5 min)"
    ]
  },
  {
    title: "Demo Review",
    status: "1 unresolved cue ⚠️",
    date: "May 10, 2025",
    description: "Review of the latest product demo with stakeholders.",
    attendees: ["Alex Wong", "Jessica Miller", "David Lee", "Rachel Green"],
    agenda: [
      "Demo feedback (20 min)",
      "Issue discussion (15 min)",
      "Next steps (10 min)"
    ]
  },
  {
    title: "Client Call",
    status: "Reviewed ✅",
    date: "May 9, 2025",
    description: "Monthly call with the client to discuss project progress.",
    attendees: ["John Smith", "Lisa Johnson", "Mark Williams", "Client Team"],
    agenda: [
      "Project updates (15 min)",
      "Client feedback (10 min)",
      "Timeline review (5 min)"
    ]
  }
];

// Sample archived meetings
const archivedMeetingsData: MeetingItemType[] = [
  {
    title: "Sprint Retro – April 1",
    status: "Archived",
    date: "April 1, 2025",
    description: "Sprint retrospective meeting to discuss what went well and what could be improved."
  },
  {
    title: "Partner Meeting",
    status: "Archived",
    date: "March 28, 2025",
    description: "Meeting with partners to discuss collaboration opportunities."
  }
];

export function ReviewRefinePanel() {
  const { setSelectedMeeting } = useMeetingContext();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-3 border-b p-4 w-full">
        <PanelHeader title="Review & Refine" />
        
        {/* Pinned Tools */}
        <div className="space-y-2">
          <ToolItem icon={BarChart3} label="Reports" />
          <ToolItem icon={CheckSquare} label="Action Items" />
          <ToolItem icon={BookMarked} label="Summary History" />
        </div>
        
        <Separator className="my-3" />
      </div>
      
      {/* Meetings Needing Review */}
      <div className="flex-1 overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:border-[1px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding">
        <div className="p-4 space-y-3">
          {reviewMeetingsData.map((meeting, index) => (
            <MeetingItem 
              key={index}
              title={meeting.title} 
              status={meeting.status}
              onClick={() => setSelectedMeeting(meeting)}
            />
          ))}
          
          {/* Archive section */}
          <Collapsible label="Archive" className="mt-4">
            {archivedMeetingsData.map((meeting, index) => (
              <ArchivedMeetingItem 
                key={index}
                title={meeting.title} 
                onClick={() => setSelectedMeeting(meeting)}
              />
            ))}
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
