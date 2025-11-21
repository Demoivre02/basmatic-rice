import { ArrowUpRight, Globe, ShieldAlert, Zap, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TrendingNews() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-card/50 border-border hover:bg-card/80 transition-colors cursor-pointer group">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-orange-400">Global Threat Intel</CardTitle>
          <Globe className="h-4 w-4 text-muted-foreground group-hover:text-orange-400 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold leading-tight mb-2">Ransomware Group "DarkSide" Resurfaces</div>
          <p className="text-xs text-muted-foreground">
            New variants targeting healthcare sector detected in 3 regions.
          </p>
          <div className="mt-3 flex items-center text-xs text-orange-400 font-medium">
            Read Analysis <ArrowUpRight className="ml-1 h-3 w-3" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border hover:bg-card/80 transition-colors cursor-pointer group">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-orange-400">Zero-Day Alert</CardTitle>
          <ShieldAlert className="h-4 w-4 text-muted-foreground group-hover:text-orange-400 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold leading-tight mb-2">Critical API Vulnerability Patched</div>
          <p className="text-xs text-muted-foreground">Major cloud provider releases emergency fix for auth bypass.</p>
          <div className="mt-3 flex items-center text-xs text-orange-400 font-medium">
            View Advisory <ArrowUpRight className="ml-1 h-3 w-3" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border hover:bg-card/80 transition-colors cursor-pointer group">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-purple-400">Industry News</CardTitle>
          <Zap className="h-4 w-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold leading-tight mb-2">AI Security Framework Released</div>
          <p className="text-xs text-muted-foreground">
            NIST publishes new guidelines for securing generative AI models.
          </p>
          <div className="mt-3 flex items-center text-xs text-purple-400 font-medium">
            Download PDF <ArrowUpRight className="ml-1 h-3 w-3" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-border hover:bg-card/80 transition-colors cursor-pointer group">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-400">Compliance</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground group-hover:text-green-400 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold leading-tight mb-2">EU AI Act Enters Force</div>
          <p className="text-xs text-muted-foreground">What CISOs need to know about the new regulatory landscape.</p>
          <div className="mt-3 flex items-center text-xs text-green-400 font-medium">
            Read Summary <ArrowUpRight className="ml-1 h-3 w-3" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
