import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PageActions } from "@/components/page-actions";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { MailProvider, useMailContext } from "@/contexts/mail-context";
import { MeetingProvider, useMeetingContext } from "@/contexts/meeting-context";

function DashboardContent() {
  const { selectedMail } = useMailContext();
  const { selectedMeeting } = useMeetingContext();

  return (
    <SidebarProvider>
        <div className="box-border overflow-hidden flex fixed inset-[var(--grid-spacing)]">
          {/* Sidebar component - this will push/pull the main content */}
          <AppSidebar />
          
          {/* Main content area - will be pushed/pulled by the sidebar */}
          <div className="flex flex-col h-full w-[70vw] min-w-0">
            <header className="flex h-[5%] shrink-0 items-center mb-[var(--grid-spacing)] backdrop-blur-xl justify-between gap-2 rounded-lg  p-2" style={{ background: 'var(--color-gradient-blue-reverse-full)' }}>
              <div className="flex items-center gap-2">
                {/* <SidebarTrigger className="-ml-1" /> */}
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Project Management & Task Tracking</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <PageActions />
            </header>
            <div className="flex flex-1 flex-col gap-4 backdrop-blur-xl rounded-lg p-6 overflow-auto flex-1 [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:border-[1px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding" style={{ background: 'var(--color-gradient-blue-reverse-full)' }}>
              {selectedMeeting ? (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">{selectedMeeting.title}</h2>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <span>{selectedMeeting.date || 'No date specified'}</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium" 
                              style={{
                                backgroundColor: selectedMeeting.status.includes('✅') ? 'rgba(16, 185, 129, 0.1)' : 
                                              selectedMeeting.status.includes('⚠️') ? 'rgba(245, 158, 11, 0.1)' : 
                                              'rgba(59, 130, 246, 0.1)',
                                color: selectedMeeting.status.includes('✅') ? 'rgb(16, 185, 129)' : 
                                       selectedMeeting.status.includes('⚠️') ? 'rgb(245, 158, 11)' : 
                                       'rgb(59, 130, 246)'
                              }}>
                          {selectedMeeting.status}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  {selectedMeeting.description && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Description</h3>
                      <p className="text-sm text-gray-600">{selectedMeeting.description}</p>
                    </div>
                  )}
                  
                  {selectedMeeting.attendees && selectedMeeting.attendees.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Attendees</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMeeting.attendees.map((attendee, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {attendee}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedMeeting.agenda && selectedMeeting.agenda.length > 0 && (
                    <div className="border-t pt-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Agenda</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedMeeting.agenda.map((item, index) => (
                          <li key={index} className="text-sm text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedMail ? (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">{selectedMail.subject}</h2>
                      <p className="text-sm text-gray-600">From: {selectedMail.name} ({selectedMail.email})</p>
                    </div>
                    <span className="text-sm text-gray-500">{selectedMail.date}</span>
                  </div>
                  <div className="border-t pt-4">
                    <p className="whitespace-pre-line">{selectedMail.teaser}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <p className="text-lg">Select an item from the sidebar to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarProvider>
  );
}

export default function Dashboard() {
  return (
    <MeetingProvider>
      <MailProvider>
        <DashboardContent />
      </MailProvider>
    </MeetingProvider>
  );
}
