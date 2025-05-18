import { createContext, useContext, useState, ReactNode } from "react";

// Define the mail item type
export interface MailItem {
  name: string;
  email: string;
  subject: string;
  date: string;
  teaser: string;
}

// Define the context type
interface MailContextType {
  selectedMail: MailItem | null;
  setSelectedMail: (mail: MailItem | null) => void;
}

// Create the context with default values
const MailContext = createContext<MailContextType>({
  selectedMail: null,
  setSelectedMail: () => {},
});

// Create a provider component
export function MailProvider({ children }: { children: ReactNode }) {
  const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);

  return (
    <MailContext.Provider value={{ selectedMail, setSelectedMail }}>
      {children}
    </MailContext.Provider>
  );
}

// Create a hook to use the context
export function useMailContext() {
  return useContext(MailContext);
}
