import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { PanelHeader } from "@/components/prepare/panel-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DashboardPanel() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-3 border-b p-4 w-full">
        <PanelHeader title="Dashboard" />
      </div>
      
      <div className="flex-1 overflow-auto p-4 [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:border-[1px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding">
        <div className="space-y-4">
          {/* 🔥 Focus Zone */}
          <Card className="bg-muted/50 p-4 mb-4 border-l-4 border-primary">
            <div className="text-sm font-semibold text-muted-foreground">
              Prep: Finalize Smart Agenda for "Client Kickoff" – starts in 40 min
            </div>
            <Button variant="outline" size="sm" className="mt-2">Open Agenda</Button>
          </Card>

          <Separator />

          {/* 📅 Today at a Glance */}
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Today at a Glance</h3>
            <ul className="space-y-1 text-sm">
              <li>🟦 9:00 AM — "Marketing Sync" <Badge variant="outline">Prep</Badge></li>
              <li>🟢 11:00 AM — "UX Review" <Badge variant="default">Live</Badge></li>
              <li>🟣 4:00 PM — "Client Debrief" <Badge variant="secondary">Refine</Badge></li>
            </ul>
          </div>

          <Separator className="my-4" />

          {/* 🎯 Quick Actions */}
          <div>
            <h3 className="text-sm font-medium mb-2">Quick Actions</h3>
            <div className="flex flex-col space-y-2">
              <Button variant="secondary" size="sm">+ Schedule New Meeting</Button>
              <Button variant="secondary" size="sm">+ Create Smart Agenda</Button>
              <Button variant="ghost" size="sm" className="justify-start text-left">Ask Prim for help</Button>
            </div>
          </div>

          <Separator className="my-4" />

          {/* 📈 Impact Stats */}
          <div>
            <h3 className="text-sm font-medium mb-2">Prim Insights</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">12</strong> Meetings This Week</li>
              <li><strong className="text-foreground">92%</strong> Agenda Completion</li>
              <li><strong className="text-foreground">28h</strong> Saved via AI Cues</li>
              <li><strong className="text-foreground">5</strong> Reports Finalized</li>
            </ul>
          </div>

          {/* 📝 Activity Feed (collapsible) */}
          <Separator className="my-4" />
          <Accordion type="single" collapsible>
            <AccordionItem value="activity">
              <AccordionTrigger>Recent Activity</AccordionTrigger>
              <AccordionContent>
                <ul className="text-sm space-y-1">
                  <li>"UX Sync" edited by Krystal – May 10</li>
                  <li>"Sprint Planning" completed – May 9</li>
                  <li>2 new Action Items assigned</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
