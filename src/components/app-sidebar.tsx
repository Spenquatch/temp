"use client"

import * as React from "react"
import { 
  Calendar,
  Cast, 
  LayoutPanelLeft, 
  ListTodo, 
  SquareUserRound, 
  TextSearch 
} from "lucide-react"

import { NavUser } from "@/components/nav-user"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutPanelLeft,
      isActive: true,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
      isActive: false,
    },
    // Horizontal separator should be here
    {
      title: "Prepare",
      url: "#",
      icon: ListTodo,
      isActive: false,
    },
    {
      title: "Active\nNotes",
      url: "#",
      icon: Cast,
      isActive: false,
    },
    {
      title: "Review\n& Refine",
      url: "#",
      icon: TextSearch,
      isActive: false,
    },
    // Horizontal separator should be here
    {
      title: "Prim",
      url: "#",
      icon: SquareUserRound,
      isActive: false,
    },
  ],
  mails: [
    {
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      date: "09:34 AM",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Project Update",
      date: "Yesterday",
      teaser:
        "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Weekend Plans",
      date: "2 days ago",
      teaser:
        "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      subject: "Re: Question about Budget",
      date: "2 days ago",
      teaser:
        "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
    },
    {
      name: "David Lee",
      email: "davidlee@example.com",
      subject: "New Project Idea",
      date: "1 week ago",
      teaser:
        "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
    },
    {
      name: "Sophia White",
      email: "sophiawhite@example.com",
      subject: "Team Dinner",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
  ],
}

export function AppSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: Using state to show active item
  const [activeItem, setActiveItem] = React.useState(data.navMain[0])
  const [mails, setMails] = React.useState(data.mails)
  const { setOpen, state } = useSidebar()

  // Custom style to override the truncate behavior
  React.useEffect(() => {
    // Add a style to override the truncate in SidebarMenuButton
    const style = document.createElement('style');
    style.textContent = `
      .nav-text-wrap > span:last-child {
        white-space: pre-line !important;
        overflow: visible !important;
        text-overflow: clip !important;
      }
      
      [data-active=true] .sidebar-icon,
      [data-active=true] .sidebar-text {
        color: #404e67 !important;
        font-weight: 600 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col w-[28%] h-full justify-between">
      <div className="flex w-full h-[6%]"> 
        <header className="flex w-full shrink-0 items-center justify-between gap-2 rounded-lg  p-2" style={{ background: 'var(--color-gradient-blue)' }}>
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header> 
      </div>
      <div className={`flex h-[90.5%] justify-between ${className}`}>
        {/* First sidebar - icons - directly using plain divs for more control */}
        <div className="w-[20%] ml-[2%] flex-shrink-0 flex flex-col h-full rounded-lg" style={{ background: 'var(--color-gradient-blue)' }}>
          <div className="flex items-center flex-1">
            <SidebarGroup>
              <SidebarGroupContent className="px-0">
                <SidebarMenu>
                  {data.navMain.slice(0, 2).map((item) => (
                    <SidebarMenuItem key={item.title} className="flex flex-col items-center">
                      <SidebarMenuButton
                        tooltip={{
                          children: item.title,
                          hidden: true,
                        }}
                        onClick={() => {
                          setActiveItem(item)
                          const mail = data.mails.sort(() => Math.random() - 0.5)
                          setMails(
                            mail.slice(
                              0,
                              Math.max(5, Math.floor(Math.random() * 10) + 1)
                            )
                          )
                          setOpen(true)
                        }}
                        isActive={activeItem?.title === item.title}
                        className="nav-text-wrap flex flex-col items-center justify-center gap-0 px-2 py-2 h-auto w-full hover:bg-sidebar-accent/20 rounded-lg data-[active=true]:bg-white/30"
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg">
                          <item.icon className="sidebar-icon size-6 text-[#62748E]" />
                        </div>
                        <span className="sidebar-text text-xs text-center font-medium text-[#62748E]">{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  
                  
                  {data.navMain.slice(2, 5).map((item) => (
                    <SidebarMenuItem key={item.title} className="flex flex-col items-center">
                      <SidebarMenuButton
                        tooltip={{
                          children: item.title,
                          hidden: true,
                        }}
                        onClick={() => {
                          setActiveItem(item)
                          const mail = data.mails.sort(() => Math.random() - 0.5)
                          setMails(
                            mail.slice(
                              0,
                              Math.max(5, Math.floor(Math.random() * 10) + 1)
                            )
                          )
                          setOpen(true)
                        }}
                        isActive={activeItem?.title === item.title}
                        className="nav-text-wrap flex flex-col items-center justify-center gap-0 p-2 h-auto w-full hover:bg-sidebar-accent/20 rounded-lg data-[active=true]:bg-white/30"
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg">
                          <item.icon className="sidebar-icon size-6 text-[#62748E]" />
                        </div>
                        <span className="sidebar-text text-xs text-center font-medium text-[#62748E]">{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  
                  {data.navMain.slice(5).map((item) => (
                    <SidebarMenuItem key={item.title} className="flex flex-col items-center">
                      <SidebarMenuButton
                        tooltip={{
                          children: item.title,
                          hidden: true,
                        }}
                        onClick={() => {
                          setActiveItem(item)
                          const mail = data.mails.sort(() => Math.random() - 0.5)
                          setMails(
                            mail.slice(
                              0,
                              Math.max(5, Math.floor(Math.random() * 10) + 1)
                            )
                          )
                          setOpen(true)
                        }}
                        isActive={activeItem?.title === item.title}
                        className="nav-text-wrap flex flex-col items-center justify-center gap-0 p-2 h-auto w-full hover:bg-sidebar-accent/20 rounded-lg data-[active=true]:bg-white/30"
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg">
                          <item.icon className="sidebar-icon size-6 text-[#62748E]" />
                        </div>
                        <span className="sidebar-text text-xs text-center font-medium text-[#62748E]">{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
          {/* <div className="p-2 flex justify-center w-full">
            <NavUser user={data.user} />
          </div> */}
        </div>

        {/* Second sidebar - email list - directly adjacent to the first sidebar */}
        <div className={`w-[76%] h-full rounded-lg ${state === "collapsed" ? "hidden" : "block"}`} style={{ background: 'var(--color-gradient-blue)' }}>
          <div className="w-full flex flex-col h-full">
            <div className="flex flex-col gap-3.5 border-b p-4 w-full">
              <div className="flex w-full items-center justify-between">
                <div className="text-base font-medium text-foreground">
                  {activeItem?.title}
                </div>
                <Label className="flex items-center gap-2 text-sm">
                  <span>Unreads</span>
                  <Switch className="shadow-none" />
                </Label>
              </div>
              <SidebarInput placeholder="Type to search..." />
            </div>
            <div className="flex-1 overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:border-[1px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding">
              <div className="px-0">
                <div>
                  {mails.map((mail) => (
                    <a
                      href="#"
                      key={mail.email}
                      className="flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <div className="flex w-full items-center gap-2">
                        <span className="truncate">{mail.name}</span>{" "}
                        <span className="ml-auto flex-shrink-0 text-xs">{mail.date}</span>
                      </div>
                      <span className="font-medium truncate w-full">{mail.subject}</span>
                      <span className="line-clamp-2 w-full text-xs">
                        {mail.teaser}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
