import { Search, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

export function TopBar() {
  return (
    <div className="h-16 bg-background/50 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-10 transition-colors duration-300 dark:shadow-none shadow-md shadow-slate-200/50">
      <div className="flex-1 max-w-2xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Ask the CISO Agent anything..."
            className="pl-10 bg-secondary/50 border-transparent focus:border-primary/50 focus:bg-background w-full transition-all duration-300 rounded-full"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-background px-2 py-0.5 rounded-md text-[10px] text-muted-foreground border border-border font-medium shadow-sm">
            ⌘ K
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-3 pl-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold leading-tight text-slate-900 dark:text-slate-100 tracking-tight">Apurva</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-normal">VP of Security</p>
          </div>
          <Avatar className="h-9 w-9 border-2 border-background shadow-sm">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-primary text-primary-foreground">JC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
