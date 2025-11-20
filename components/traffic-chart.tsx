"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { time: "00:00", inbound: 400, outbound: 240, threats: 20 },
  { time: "04:00", inbound: 300, outbound: 139, threats: 15 },
  { time: "08:00", inbound: 550, outbound: 380, threats: 35 },
  { time: "12:00", inbound: 800, outbound: 600, threats: 80 },
  { time: "16:00", inbound: 700, outbound: 550, threats: 65 },
  { time: "20:00", inbound: 500, outbound: 400, threats: 40 },
  { time: "23:59", inbound: 450, outbound: 300, threats: 25 },
]

export function TrafficChart() {
  return (
    <Card className="h-full bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Network Traffic Analysis</CardTitle>
        <CardDescription>Real-time inbound/outbound traffic vs detected threats</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorInbound" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-destructive)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-destructive)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis
                dataKey="time"
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}MB`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                  borderRadius: "var(--radius)",
                  color: "var(--color-foreground)",
                }}
              />
              <Area
                type="monotone"
                dataKey="inbound"
                stroke="var(--color-primary)"
                fillOpacity={1}
                fill="url(#colorInbound)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="threats"
                stroke="var(--color-destructive)"
                fillOpacity={1}
                fill="url(#colorThreats)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
