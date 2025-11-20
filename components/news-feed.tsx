import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldAlert, Globe, FileText, AlertTriangle, Lock, Server, Wifi } from "lucide-react"

const newsItems = [
  {
    title: "Phishing Campaign Targets Financial Sector",
    description: "Sophisticated spear-phishing attacks impersonating major banks detected across multiple regions.",
    severity: "High",
    type: "Threat",
    icon: ShieldAlert,
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    time: "2h ago",
  },
  {
    title: "Critical CVE-2024-22016 in Windows OS",
    description: "Remote code execution vulnerability found in Windows Kernel. Immediate patching recommended.",
    severity: "Critical",
    type: "Vulnerability",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    time: "4h ago",
  },
  {
    title: "Zero-Day Vulnerability in Chrome Browser",
    description: "Google releases emergency update to fix actively exploited zero-day in V8 engine.",
    severity: "High",
    type: "Zero-Day",
    icon: Globe,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    time: "6h ago",
  },
  {
    title: "New Data Protection Regulation in EU",
    description: "European Commission proposes stricter guidelines for AI data processing and privacy.",
    severity: "Info",
    type: "Regulation",
    icon: FileText,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    time: "12h ago",
  },
  {
    title: "Ransomware Group 'DarkSide' Resurfaces",
    description: "New variant of DarkSide ransomware targeting healthcare institutions with double extortion tactics.",
    severity: "Critical",
    type: "Threat",
    icon: Lock,
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    time: "1d ago",
  },
  {
    title: "Cloud Storage Misconfiguration Leak",
    description: "Major retailer exposes 1.5M customer records due to public S3 bucket permissions.",
    severity: "Medium",
    type: "Incident",
    icon: Server,
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    time: "1d ago",
  },
  {
    title: "IoT Botnet 'Mirai' Variant Detected",
    description: "New botnet targeting smart home devices for large-scale DDoS attacks.",
    severity: "High",
    type: "Threat",
    icon: Wifi,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    time: "2d ago",
  },
]

export function NewsFeed() {
  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold tracking-tight">Threat Intel & Security News</CardTitle>
          <Badge variant="outline" className="font-normal">
            Live Feed
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group dark:shadow-none shadow-md shadow-slate-200/30 hover:shadow-lg hover:shadow-slate-200/40"
          >
            <div className={`p-2 rounded-lg ${item.color} shrink-0`}>
              <item.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium leading-snug truncate group-hover:text-primary transition-colors text-slate-900 dark:text-slate-100">
                  {item.title}
                </p>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 whitespace-nowrap font-normal">{item.time}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">{item.description}</p>
              <div className="flex items-center gap-2 mt-2">
                {item.severity === "Critical" && (
                  <Badge variant="destructive" className="text-[10px] h-5 px-1.5">
                    Critical
                  </Badge>
                )}
                {item.severity === "High" && (
                  <Badge
                    variant="secondary"
                    className="text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 text-[10px] h-5 px-1.5"
                  >
                    High
                  </Badge>
                )}
                {item.severity === "Medium" && (
                  <Badge
                    variant="secondary"
                    className="text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 text-[10px] h-5 px-1.5"
                  >
                    Medium
                  </Badge>
                )}
                {item.severity === "Info" && (
                  <Badge
                    variant="secondary"
                    className="text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] h-5 px-1.5"
                  >
                    Info
                  </Badge>
                )}
                <span className="text-[10px] text-muted-foreground font-medium px-1.5 py-0.5 rounded-md bg-secondary">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
