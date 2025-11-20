import { ArrowUpRight, AlertTriangle, Shield, Users, Globe, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MetricCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="hover:scale-[1.02] transition-transform duration-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-3">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide">Security Posture Score</p>
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">78</div>
            <span className="text-sm text-muted-foreground">/ 100</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">+3 from last week</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mb-4">
            <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '78%' }}></div>
          </div>
          <Button variant="link" className="px-0 text-blue-600 dark:text-blue-400 h-auto mt-2 text-sm font-medium">
            View improvements <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:scale-[1.02] transition-transform duration-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-3">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide">Open High/Critical Issues</p>
            <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-6 mt-2 mb-3">
            <div>
              <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">7</span>
              <span className="text-xs text-muted-foreground ml-1 block mt-1">High</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-red-600 dark:text-red-400">3</span>
              <span className="text-xs text-muted-foreground ml-1 block mt-1">Critical</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
            <span>5 resolved in last 24h</span>
          </div>
          <Button variant="link" className="px-0 text-blue-600 dark:text-blue-400 h-auto mt-2 text-sm font-medium">
            Show findings <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:scale-[1.02] transition-transform duration-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-3">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide">Attack Surface Summary</p>
            <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div className="mt-2 mb-3">
            <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">External exposure has</p>
            <p className="text-sm text-red-600 dark:text-red-400 font-semibold flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              increased past 7 days
            </p>
          </div>
          <div className="flex items-center gap-4 mb-4 text-xs">
            <div>
              <span className="text-slate-500 dark:text-slate-400">Assets:</span>
              <span className="text-slate-900 dark:text-white font-semibold ml-1">1,247</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400">Exposed:</span>
              <span className="text-red-600 dark:text-red-400 font-semibold ml-1">23</span>
            </div>
          </div>
          <Button variant="link" className="px-0 text-blue-600 dark:text-blue-400 h-auto mt-2 text-sm font-medium">
            Run new scan <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:scale-[1.02] transition-transform duration-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-3">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide">Identity Risks</p>
            <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="mt-2 mb-3">
            <p className="text-3xl font-bold text-slate-900 dark:text-white">8</p>
            <p className="text-sm text-muted-foreground mt-1">High risk roles</p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-2 font-semibold flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              Overprivileged
            </p>
          </div>
          <div className="flex items-center gap-4 mb-4 text-xs">
            <div>
              <span className="text-slate-500 dark:text-slate-400">Total roles:</span>
              <span className="text-slate-900 dark:text-white font-semibold ml-1">142</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400">Risk %:</span>
              <span className="text-red-600 dark:text-red-400 font-semibold ml-1">5.6%</span>
            </div>
          </div>
          <Button variant="link" className="px-0 text-blue-600 dark:text-blue-400 h-auto mt-2 text-sm font-medium">
            Review roles <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
