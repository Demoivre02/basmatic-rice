"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from "recharts"

const data = [
  { name: "Mon", value: 4 },
  { name: "Tue", value: 3 },
  { name: "Wed", value: 7 },
  { name: "Thu", value: 5 },
  { name: "Fri", value: 8 },
  { name: "Sat", value: 5 },
  { name: "Sun", value: 6 },
]

export function SecurityLandscape() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Company Security Landscape</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-4">Risk Overview</h4>
            <div className="h-[100px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" hide />
                  <Tooltip
                    contentStyle={{ background: "var(--background)", border: "1px solid var(--border)" }}
                    itemStyle={{ color: "var(--foreground)" }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>High</span>
              <span>Critical</span>
              <span>Last 30 days</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground">Top Risk Assets</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-xs">CVE-2024-21212</span>
                <span className="text-red-500 text-xs font-medium">Critical</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-xs">CVE-2024-20031</span>
                <span className="text-orange-500 text-xs font-medium">High</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-xs">CVE-2024-18825</span>
                <span className="text-yellow-500 text-xs font-medium">Medium</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Cloud Posture</h4>
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Misconfigurations</span>
                  <span>2</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[20%]" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>High</span>
                  <span>5</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-[50%]" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Medium</span>
                  <span>6</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[60%]" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Detection & Response</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Recent events</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active investigations</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">MTTD</span>
                <span className="font-medium">1 hr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">MTTR</span>
                <span className="font-medium">4 hr</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
