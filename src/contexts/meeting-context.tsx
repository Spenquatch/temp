import { createContext, useContext, useState, ReactNode } from "react";

// Define the meeting item type
export interface MeetingItem {
  title: string;
  status: string;
  date?: string;
  time?: string;
  description?: string;
  attendees?: string[];
  agenda?: string[];
  withPrim?: boolean;
  isLive?: boolean;
}

// Define the context type
interface MeetingContextType {
  selectedMeeting: MeetingItem | null;
  setSelectedMeeting: (meeting: MeetingItem | null) => void;
}

// Create the context with default values
const MeetingContext = createContext<MeetingContextType>({
  selectedMeeting: null,
  setSelectedMeeting: () => {},
});

// Create a provider component
export function MeetingProvider({ children }: { children: ReactNode }) {
  const [selectedMeeting, setSelectedMeeting] = useState<MeetingItem | null>(null);

  return (
    <MeetingContext.Provider value={{ selectedMeeting, setSelectedMeeting }}>
      {children}
    </MeetingContext.Provider>
  );
}

// Create a hook to use the context
export function useMeetingContext() {
  return useContext(MeetingContext);
}
