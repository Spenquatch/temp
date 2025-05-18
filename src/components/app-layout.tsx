import { Outlet } from 'react-router'
import { SidebarProvider } from '@/components/ui/sidebar'

export function AppLayout() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "350px",
                } as React.CSSProperties
            }
        >
            <div className="min-h-screen flex flex-col w-full gradient-dash-bg">

                    <Outlet />

            </div>
        </SidebarProvider>
    )
}