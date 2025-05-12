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
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Dashboard() {
    return (
      <SidebarProvider>
        <div className="flex w-full h-svh">
          {/* Sidebar component - this will push/pull the main content */}
          <AppSidebar />
          
          {/* Main content area - will be pushed/pulled by the sidebar */}
          <div className="flex flex-col h-full w-[72%] min-w-0">
            <header className="flex h-[6%] mt-[1.5%] shrink-0 items-center justify-between gap-2 rounded-lg  p-2" style={{ background: 'var(--color-gradient-blue-reverse-full)' }}>
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
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
            <div className="flex flex-1 flex-col gap-4 p-4 overflow-auto h-[92%]">
              {Array.from({ length: 24 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-video h-12 w-full rounded-lg bg-muted/50"
                />
              ))}
            </div>
          </div>
        </div>
      </SidebarProvider>
    );
}
