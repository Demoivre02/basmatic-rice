"use client"

import { AppShell } from "@/components/app-shell"
import { MetricCards } from "@/components/metric-cards"
import { NewsFeed } from "@/components/news-feed"
import { Sparkles, ArrowRight, Shield, Activity, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  return (
    <AppShell>
      <div className="p-6 space-y-8 max-w-[1600px] mx-auto pb-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">Security Overview</h1>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">Real-time threat intelligence and system status.</p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">System Secure</span>
              </div>
              <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Last updated: <span className="font-medium text-slate-800 dark:text-slate-300">2 minutes ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Intelligence Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-10 text-white dark:shadow-none shadow-xl shadow-blue-200/50">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-blue-100">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium text-sm uppercase tracking-wide">Quick Intelligence</span>
            </div>
            <h2 className="text-3xl font-semibold mb-2 tracking-tight leading-tight">What would you like to know today, Joshua?</h2>
            <p className="text-blue-100/90 mb-6 text-sm font-normal leading-relaxed">Get instant insights about your security posture, threats, and compliance status.</p>

            <div className="relative mb-6">
              <Input
                className="h-14 pl-6 pr-32 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-blue-100/70 backdrop-blur-md focus-visible:ring-0 focus-visible:border-white/40 transition-all"
                placeholder="Ask about vulnerabilities, threat actors, or compliance status..."
              />
              <Button 
                onClick={() => router.push('/chat')}
                className="absolute right-2 top-2 h-10 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all hover:scale-105"
              >
                Ask AI Agent
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105">
                <Shield className="h-4 w-4" />
                Summarize critical risks
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105">
                <Activity className="h-4 w-4" />
                Show active incidents
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105">
                <Lock className="h-4 w-4" />
                Compliance report
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <MetricCards />

        {/* News Feed Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">Threat Intelligence Feed</h3>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <NewsFeed />
          </div>

          <div className="space-y-6">
            <div className="rounded-xl bg-white dark:bg-slate-900/50 p-6 dark:shadow-none shadow-lg shadow-slate-200/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-6 text-lg tracking-tight">System Status</h3>
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Network Monitor</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">All systems operational</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Firewall Rules</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">1,247 active rules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Identity Provider</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sync in progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                    <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">Syncing</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Cloud Agents</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">12 agents deployed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white dark:shadow-none shadow-lg shadow-slate-200/50">
              <h3 className="font-semibold mb-2 text-lg tracking-tight">Priority Action</h3>
              <p className="text-sm text-slate-200 mb-4 leading-relaxed font-normal">
                3 new high-severity vulnerabilities detected in the last hour. Immediate review recommended.
              </p>
              <div className="flex items-center gap-2 mb-4 text-xs text-slate-400">
                <Activity className="h-3 w-3" />
                <span>Last updated: 5 minutes ago</span>
              </div>
              <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-medium transition-all hover:scale-[1.02]">Review Findings</Button>
            </div>

            <div className="rounded-xl bg-white dark:bg-slate-900/50 p-6 dark:shadow-none shadow-lg shadow-slate-200/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg tracking-tight">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Security scan completed</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Firewall rules updated</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">New threat detected</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
