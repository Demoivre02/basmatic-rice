import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldAlert, Globe, FileText, AlertTriangle, Lock, Server, Wifi, Activity } from "lucide-react"

const newsItems = [
  {
    title: "Zero-Day Exploit Targeting Enterprise Cloud Infrastructure",
    description: "Active exploitation detected in cloud container orchestration platforms. Immediate patching required for Kubernetes and Docker environments.",
    severity: "Critical",
    type: "Zero-Day",
    icon: ShieldAlert,
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    time: "1h ago",
  },
  {
    title: "CrowdStrike EDR: Advanced Persistent Threat Detected",
    description: "Multi-stage APT campaign targeting financial services sector. Indicators of compromise shared across threat intelligence feeds.",
    severity: "Critical",
    type: "Threat Intel",
    icon: ShieldAlert,
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    time: "3h ago",
  },
  {
    title: "Tenable: Critical Vulnerability in Network Infrastructure",
    description: "CVE-2024-XXXXX affects multiple network devices. Risk reduction trends show 23% increase in exploitable vulnerabilities over past week.",
    severity: "High",
    type: "Vulnerability",
    icon: AlertTriangle,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    time: "5h ago",
  },
  {
    title: "Dark Web Monitoring: Credential Leak Detected",
    description: "Corporate credentials found in underground forums. Immediate password rotation and MFA enforcement recommended.",
    severity: "High",
    type: "Threat Intel",
    icon: Globe,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    time: "8h ago",
  },
  {
    title: "SOC Metrics: MTTR Improvement Trend",
    description: "Mean Time to Remediate decreased by 18% month-over-month. Detection resolution rates up across all security domains.",
    severity: "Info",
    type: "SOC",
    icon: Activity,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    time: "12h ago",
  },
  {
    title: "Cloud Security: AWS S3 Misconfiguration Alert",
    description: "Multiple public S3 buckets detected across cloud environments. Automated remediation scripts deployed.",
    severity: "Medium",
    type: "Cloud Security",
    icon: Server,
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    time: "1d ago",
  },
  {
    title: "Application Security: SAST Findings Trend",
    description: "Quarter-over-quarter risk reduction of 12% in application security. Container security improvements noted.",
    severity: "Info",
    type: "AppSec",
    icon: Lock,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    time: "1d ago",
  },
  {
    title: "Network Pentest: External Attack Surface Findings",
    description: "External penetration testing reveals exploitable vulnerabilities in perimeter defenses. Prioritized remediation plan available.",
    severity: "High",
    type: "Pentest",
    icon: ShieldAlert,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    time: "2d ago",
  },
  {
    title: "Security Scorecard: Domain Risk Assessment",
    description: "Quarterly security scorecard shows improvement in infrastructure security domain. High-risk findings summary available.",
    severity: "Info",
    type: "Scorecard",
    icon: FileText,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    time: "3d ago",
  },
]

export function NewsFeed() {
  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold tracking-tight">Threat Intelligence & Security Landscape</CardTitle>
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
                    className="text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 text-[10px] h-5 px-1.5"
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
