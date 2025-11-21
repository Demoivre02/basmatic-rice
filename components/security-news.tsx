import { AlertTriangle, ExternalLink, ShieldCheck, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const newsItems = [
  {
    id: 1,
    title: "Critical Vulnerability in OpenSSL",
    source: "CVE-2024-1234",
    time: "2h ago",
    severity: "Critical",
    type: "alert",
  },
  {
    id: 2,
    title: "Phishing Campaign Targeting Financial Sector",
    source: "Threat Intel",
    time: "4h ago",
    severity: "High",
    type: "warning",
  },
  {
    id: 3,
    title: "New Compliance Standards Released",
    source: "NIST",
    time: "6h ago",
    severity: "Info",
    type: "info",
  },
  {
    id: 4,
    title: "Zero-Day Exploit in Popular Browser",
    source: "Security Weekly",
    time: "12h ago",
    severity: "Critical",
    type: "alert",
  },
  {
    id: 5,
    title: "Patch Tuesday Summary",
    source: "Microsoft",
    time: "1d ago",
    severity: "Medium",
    type: "info",
  },
]

export function SecurityNews() {
  return (
    <Card className="h-full bg-card/50 border-border flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Intelligence Feed</CardTitle>
          <Badge variant="outline" className="text-xs font-normal">
            Live
          </Badge>
        </div>
        <CardDescription>Latest security advisories and news</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-[350px] px-6 pb-6">
          <div className="space-y-4">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-start p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border cursor-pointer group"
              >
                <div className="mt-1">
                  {item.type === "alert" && <AlertTriangle className="h-4 w-4 text-destructive" />}
                  {item.type === "warning" && <ShieldCheck className="h-4 w-4 text-orange-400" />}
                  {item.type === "info" && <Info className="h-4 w-4 text-orange-400" />}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{item.source}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                    <Badge
                      variant="secondary"
                      className={`h-5 px-1.5 text-[10px] ${
                        item.severity === "Critical"
                          ? "bg-destructive/20 text-destructive hover:bg-destructive/30"
                          : item.severity === "High"
                            ? "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30"
                            : ""
                      }`}
                    >
                      {item.severity}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
