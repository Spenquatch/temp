import {
  Bell,
  Copy,
  FileEdit,
  History,
  Link2,
  MoreVertical,
  MoveRight,
  Pencil,
  Star,
  Trash2,
  Undo2,
  Upload,
  Download,
  Settings2,
  FileText,
  LineChart,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function PageActions() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Star className="h-4 w-4" />
          <span className="sr-only">Star</span>
        </Button>
        <Button variant="ghost" size="sm" className="text-xs">
          Edit Oct 08
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuItem>
            <Settings2 className="mr-2 h-4 w-4" />
            Customize Page
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            Turn into wiki
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link2 className="mr-2 h-4 w-4" />
            Copy Link
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MoveRight className="mr-2 h-4 w-4" />
            Move to
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            Move to Trash
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Undo2 className="mr-2 h-4 w-4" />
            Undo
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LineChart className="mr-2 h-4 w-4" />
            View analytics
          </DropdownMenuItem>
          <DropdownMenuItem>
            <History className="mr-2 h-4 w-4" />
            Version History
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            Show delete pages
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Upload className="mr-2 h-4 w-4" />
            Import
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Download className="mr-2 h-4 w-4" />
            Export
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 