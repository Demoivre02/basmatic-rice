"use client"

import { AppShell } from "@/components/app-shell"
import { MetricCards } from "@/components/metric-cards"
import { NewsFeed } from "@/components/news-feed"
import { Sparkles, ArrowRight, Shield, Activity, Lock, TrendingUp, Clock, AlertCircle, BarChart3, Network, Cloud, Code, Eye, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  return (
    <AppShell>
      <div className="p-6 space-y-8 max-w-[1600px] mx-auto pb-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">Good morning, Apurva</h1>
            </div>
            {/* <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed mb-3">
              Your security overview and threat intelligence dashboard. Real-time insights across all security domains.
            </p> */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">All Systems Operational</span>
              </div>
              <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Last updated: <span className="font-medium text-slate-800 dark:text-slate-300">Just now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Intelligence Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-10 text-white dark:shadow-none shadow-xl shadow-orange-200/50">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-orange-100">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium text-sm uppercase tracking-wide">Quick Intelligence</span>
            </div>
            <h2 className="text-3xl font-semibold mb-2 tracking-tight leading-tight">What would you like to know today, Apurva?</h2>
            <p className="text-orange-100/90 mb-6 text-sm font-normal leading-relaxed">Get instant insights from CrowdStrike, Tenable, JIRA, and other security tools across all domains.</p>

            <div className="relative mb-6">
              <Input
                className="h-14 pl-6 pr-32 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-orange-100/70 backdrop-blur-md focus-visible:ring-0 focus-visible:border-white/40 transition-all"
                placeholder="Ask about vulnerabilities, threat actors, or compliance status..."
              />
              <Button 
                onClick={() => router.push('/chat')}
                className="absolute right-2 top-2 h-10 bg-white text-orange-600 hover:bg-orange-50 font-medium rounded-lg transition-all hover:scale-105"
              >
                Ask AI Agent
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => router.push('/chat')}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105"
              >
                <Shield className="h-4 w-4" />
                CrowdStrike EDR Threats
              </button>
              <button 
                onClick={() => router.push('/chat')}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105"
              >
                <Activity className="h-4 w-4" />
                Vulnerability MTTR Trends
              </button>
              <button 
                onClick={() => router.push('/chat')}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105"
              >
                <Lock className="h-4 w-4" />
                Cloud Security QoQ Trends
              </button>
              <button 
                onClick={() => router.push('/chat')}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105"
              >
                <Activity className="h-4 w-4" />
                SOC Detections vs Resolved
              </button>
              <button 
                onClick={() => router.push('/chat')}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105"
              >
                <Shield className="h-4 w-4" />
                Network Pentest Findings
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <MetricCards />

        {/* Security Domains Overview */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">Security Programs Overview</h3>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              View All Programs <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vulnerability Management */}
            <Card className="hover:scale-[1.02] transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Vulnerability Management</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Tenable</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Risk Reduction</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">-12% QoQ</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Avg Vulnerability Age</span>
                    <span className="font-semibold text-slate-900 dark:text-white">23 days</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">MTTR</span>
                    <span className="font-semibold text-slate-900 dark:text-white">4.2 days</span>
                  </div>
                </div>
                <Button variant="link" className="px-0 text-orange-600 dark:text-orange-400 h-auto mt-4 text-xs font-medium w-full justify-center">
                  View Trends & Insights <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            {/* CrowdStrike EDR */}
            <Card className="hover:scale-[1.02] transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">EDR - CrowdStrike</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Endpoint Detection</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Threats Prevented</span>
                    <span className="font-semibold text-slate-900 dark:text-white">1,247</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">By Category</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Malware: 68%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">MoM Trend</span>
                    <span className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +5%
                    </span>
                  </div>
                </div>
                <Button variant="link" className="px-0 text-orange-600 dark:text-orange-400 h-auto mt-4 text-xs font-medium w-full justify-center">
                  View Categories <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            {/* SOC Metrics */}
            <Card className="hover:scale-[1.02] transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">SOC Metrics</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Hunters</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Detections Received</span>
                    <span className="font-semibold text-slate-900 dark:text-white">342</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Detections Resolved</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">298 (87%)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">MTTA</span>
                    <span className="font-semibold text-slate-900 dark:text-white">12 min</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">MTTR</span>
                    <span className="font-semibold text-slate-900 dark:text-white">2.4 hours</span>
                  </div>
                </div>
                <Button variant="link" className="px-0 text-orange-600 dark:text-orange-400 h-auto mt-4 text-xs font-medium w-full justify-center">
                  View Details <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            {/* Cloud Security */}
            <Card className="hover:scale-[1.02] transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Cloud className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Cloud Security</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">JIRA / CNAPP</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Findings by Provider</span>
                    <span className="font-semibold text-slate-900 dark:text-white">AWS: 45%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Risk Reduction QoQ</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">-18%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">MTTR Trends QoQ</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">-15%</span>
                  </div>
                </div>
                <Button variant="link" className="px-0 text-orange-600 dark:text-orange-400 h-auto mt-4 text-xs font-medium w-full justify-center">
                  View by Environment <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            {/* Network Pentest */}
            <Card className="hover:scale-[1.02] transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Network className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Network Pentest</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">JIRA / Reports</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">External Findings</span>
                    <span className="font-semibold text-slate-900 dark:text-white">12 High</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Internal Findings</span>
                    <span className="font-semibold text-slate-900 dark:text-white">8 High</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Exploitable Vulns</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">5 Critical</span>
                  </div>
                </div>
                <Button variant="link" className="px-0 text-orange-600 dark:text-orange-400 h-auto mt-4 text-xs font-medium w-full justify-center">
                  View Reports <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            {/* Application Security */}
            <Card className="hover:scale-[1.02] transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Code className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Application Security</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">SAST / SCA / DAST</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Risk Reduction QoQ</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">-12%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">SAST Findings</span>
                    <span className="font-semibold text-slate-900 dark:text-white">234</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Container Security</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Active</span>
                  </div>
                </div>
                <Button variant="link" className="px-0 text-orange-600 dark:text-orange-400 h-auto mt-4 text-xs font-medium w-full justify-center">
                  View by Product <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* News Feed Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">Threat Intelligence & Security Landscape</h3>
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

            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 p-6 dark:shadow-none shadow-lg shadow-slate-200/50">
              <h3 className="font-semibold mb-4 text-lg tracking-tight text-slate-900 dark:text-white">Security Programs & Domains</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Infrastructure Security</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">External Network Pentest</span>
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Internal Network Pentest</span>
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Attack Surface Monitoring</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Vulnerability & Risk</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Vulnerability Management</span>
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Security Scorecard</span>
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Zero Day Monitoring</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Cloud & Application</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Cloud Security</span>
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Application Security</span>
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Secrets Management</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Threat Detection</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">CrowdStrike EDR</span>
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">SOC Metrics</span>
                    <span className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">Dark Web Monitoring</span>
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
