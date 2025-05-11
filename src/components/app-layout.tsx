import { Outlet } from 'react-router'
import { AppHeader } from './app-header'
import { AppFooter } from './app-footer'
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
            <div className="min-h-screen flex flex-col w-full">
                <AppHeader />
                <div className="flex-1 flex">
                    <Outlet />
                </div>
                <AppFooter />
            </div>
        </SidebarProvider>
    )
}