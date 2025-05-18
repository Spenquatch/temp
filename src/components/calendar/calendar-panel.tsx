import { useState, useMemo } from "react";
import { format, isToday, addDays } from "date-fns";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { DatePicker } from "@/components/ui/date-picker";
import { useMeetingContext } from "@/contexts/meeting-context";
import { cn } from "@/lib/utils";

// Sample meetings data
const sampleMeetings = [
  {
    title: "Marketing Sync",
    status: "prep",
    date: "2025-05-12",
    time: "10:00 AM",
    description: "Weekly marketing team sync to discuss ongoing campaigns and upcoming initiatives.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Brown"],
    withPrim: true,
  },
  {
    title: "Product Review",
    status: "prep",
    date: "2025-05-12",
    time: "2:00 PM",
    description: "Review the latest product features and gather feedback.",
    attendees: ["Alex Wong", "Emily Davis", "Robert Chen"],
    withPrim: false,
  },
  {
    title: "Client Kickoff",
    status: "live",
    date: "2025-05-12",
    time: "3:30 PM",
    description: "Initial meeting with the new client to discuss project scope and timeline.",
    attendees: ["Lisa Park", "David Miller", "Jennifer Lee"],
    isLive: true,
    withPrim: true,
  },
  {
    title: "Team Retrospective",
    status: "review",
    date: "2025-05-13",
    time: "11:00 AM",
    description: "Monthly team retrospective to discuss what went well and areas for improvement.",
    attendees: ["Chris Taylor", "Amanda White", "Kevin Jones"],
    withPrim: true,
  },
  {
    title: "Flight to Indianapolis (WN 1728)",
    status: "prep",
    date: "2025-05-13",
    time: "10:30 AM - 1:25 PM",
    description: "Flight to Indianapolis for the conference.",
    withPrim: false,
  },
  {
    title: "Prim AI Weekly Standup",
    status: "prep",
    date: "2025-05-14",
    time: "9:30 AM",
    description: "Weekly team standup to discuss progress and blockers.",
    withPrim: true,
  },
  {
    title: "LifeStance Appointment",
    status: "prep",
    date: "2025-05-17",
    time: "1:00 PM - 2:00 PM",
    description: "Virtual appointment with LifeStance.",
    withPrim: true,
  },
  {
    title: "Monster Jam",
    status: "prep",
    date: "2025-05-18",
    time: "1:00 PM - 4:00 PM",
    description: "Monster Jam event at the stadium.",
    withPrim: true,
  },
  {
    title: "Newport Aquarium",
    status: "prep",
    date: "2025-05-20",
    time: "9:30 AM - 10:30 AM",
    description: "Visit to Newport Aquarium.",
    withPrim: true,
  },
];

// Meeting card component
function MeetingCard({ meeting, onClick }: { meeting: any; onClick: () => void }) {
  const timeDisplay = meeting.time || "";
  
  return (
    <div 
      onClick={onClick}
      className="p-3 rounded-md bg-card hover:bg-accent/30 cursor-pointer border border-border/60 mb-2 transition-colors duration-150"
      aria-label={`Meeting: ${meeting.title}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="font-medium text-sm">{meeting.title}</h4>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            {timeDisplay}
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {meeting.withPrim && (
            <Badge variant="outline" className="ml-2 bg-primary/10 text-primary text-xs border-primary/20">
              <span className="mr-0.5">●</span> Prim
            </Badge>
          )}
          {meeting.isLive && (
            <div className="relative ml-2">
              <div className="h-2 w-2 rounded-full bg-destructive animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Day header component
function DayHeader({ date, isCurrentDay }: { date: Date; isCurrentDay: boolean }) {
  const dayNumber = date.getDate();
  const dayName = format(date, 'EEEE');
  
  return (
    <div className={cn(
      "sticky top-0 bg-background py-2 mb-2",
      isCurrentDay ? "border-l-4 border-primary pl-2" : ""
    )}>
      <div className="text-2xl font-bold">{dayNumber}</div>
      <div className="text-sm text-muted-foreground">{dayName}</div>
    </div>
  );
}

export function CalendarPanel() {
  // We don't need to track selectedDate since we're showing all dates
  // Just need it for the Today button functionality
  const [_, setScrollToToday] = useState<boolean>(false);
  const { setSelectedMeeting } = useMeetingContext();

  // Group meetings by date
  const meetingsByDate = useMemo(() => {
    const grouped: Record<string, any[]> = {};
    
    // Get the current week dates (starting from today)
    const today = new Date();
    const weekDates = Array.from({ length: 14 }, (_, i) => {
      const date = addDays(today, i);
      return format(date, 'yyyy-MM-dd');
    });
    
    // Initialize empty arrays for each date
    weekDates.forEach(dateStr => {
      grouped[dateStr] = [];
    });
    
    // Add meetings to their respective dates
    sampleMeetings.forEach(meeting => {
      if (meeting.date && grouped[meeting.date]) {
        grouped[meeting.date].push(meeting);
      }
    });
    
    return grouped;
  }, []);

  // Handle meeting click
  const handleMeetingClick = (meeting: any) => {
    setSelectedMeeting(meeting);
  };

  // Reset to today
  const handleTodayClick = () => {
    // Trigger a re-render to scroll to today
    setScrollToToday(prev => !prev);
    // Scroll to today's section
    setTimeout(() => {
      const todayElement = document.getElementById('today-section');
      if (todayElement) {
        todayElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col h-full" role="navigation" aria-label="Calendar Navigation">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Calendar</h2>
      </div>
      <Separator />
      
      {/* Date selector header */}
      <div className="px-4 py-3 flex items-center justify-between bg-background">
        <DatePicker date={new Date()} setDate={(date) => {
          if (date) {
            // Find the section for this date and scroll to it
            const dateStr = format(date, 'yyyy-MM-dd');
            const dateElement = document.getElementById(`date-${dateStr}`);
            if (dateElement) {
              dateElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }} />
        <Button variant="outline" size="sm" onClick={handleTodayClick} className="h-8 text-xs">
          Today
        </Button>
      </div>
      
      {/* Meetings list */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          {Object.entries(meetingsByDate).map(([dateStr, meetings]) => {
            const date = new Date(dateStr);
            const isCurrentDay = isToday(date);
            // We don't need to format the date for display since we're using the DayHeader component
            
            return (
              <div 
                key={dateStr} 
                id={isCurrentDay ? 'today-section' : `date-${dateStr}`}
                className="mb-6"
              >
                <DayHeader date={date} isCurrentDay={isCurrentDay} />
                
                {meetings.length > 0 ? (
                  <div className="space-y-1">
                    {meetings.map((meeting, index) => (
                      <MeetingCard 
                        key={`${dateStr}-${index}`}
                        meeting={meeting}
                        onClick={() => handleMeetingClick(meeting)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-2 text-sm text-muted-foreground/70 italic">
                    No meetings scheduled
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
