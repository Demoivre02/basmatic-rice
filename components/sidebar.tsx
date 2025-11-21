"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ShieldAlert, Bot, LogOut, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "pb-12 w-64 bg-sidebar flex flex-col transition-colors duration-300 dark:shadow-none shadow-lg shadow-slate-200/50",
        className,
      )}
    >
      <div className="space-y-4 py-4 flex flex-col h-full">
        <div className="px-3 py-2 flex-1">
          <div className="flex items-center gap-3 px-4 mb-10 mt-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#fa4616] to-[#fa4616] flex items-center justify-center shadow-lg shadow-[#fa4616]/20">
              <ShieldAlert className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">CyberGuard</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">Enterprise Security</p>
            </div>
          </div>
          <div className="space-y-1">
            <Link href="/">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start h-11 rounded-lg mb-1",
                  pathname === "/"
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
              >
                <LayoutDashboard className="mr-3 h-5 w-5" />
                Dashboard
              </Button>
            </Link>

            <Link href="/chat">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start h-11 rounded-lg mb-1",
                  pathname === "/chat"
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
              >
                <Bot className="mr-3 h-5 w-5" />
                AI Agent
              </Button>
            </Link>

            <Link href="/settings">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start h-11 rounded-lg mb-1",
                  pathname === "/settings"
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Button>
            </Link>
          </div>
        </div>

        <div className="px-3 py-2">
          <div className="bg-sidebar-accent rounded-xl p-4 mb-4 dark:shadow-none shadow-md shadow-slate-200/30">
            {/* <div className="flex items-center gap-3 mb-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">System Operational</span>
            </div> */}
            <div className="text-xs text-slate-600 dark:text-slate-400 font-normal">Last scan: 2 mins ago</div>
          </div>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-sidebar-foreground">
            <LogOut className="mr-3 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}
