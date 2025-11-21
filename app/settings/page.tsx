"use client"

import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Shield, User, Key, Globe, Mail, ShieldAlert, Settings as SettingsIcon, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AppShell>
      <div className="p-6 max-w-5xl mx-auto space-y-8 pb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#fa4616] to-[#fa4616] flex items-center justify-center shadow-lg shadow-[#fa4616]/20">
              <SettingsIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">Settings</h1>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">Manage your account settings, security preferences, and notification preferences.</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-slate-100 dark:bg-slate-800/50 p-1.5 h-auto rounded-xl dark:shadow-none shadow-sm">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white px-5 py-2.5 rounded-lg font-medium transition-all"
            >
              <User className="h-4 w-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white px-5 py-2.5 rounded-lg font-medium transition-all"
            >
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white px-5 py-2.5 rounded-lg font-medium transition-all"
            >
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="api"
              className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white px-5 py-2.5 rounded-lg font-medium transition-all"
            >
              <Key className="h-4 w-4 mr-2" />
              API Keys
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg tracking-tight">Profile Information</CardTitle>
                <CardDescription className="text-sm font-normal">Update your personal information and email address.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">First name</Label>
                    <Input id="first-name" defaultValue="Apurva" className="h-11 rounded-lg border-slate-200 dark:border-slate-700 focus:border-[#fa4616] dark:focus:border-[#fa4616]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last name</Label>
                    <Input id="last-name" defaultValue="Carter" className="h-11 rounded-lg border-slate-200 dark:border-slate-700 focus:border-[#fa4616] dark:focus:border-[#fa4616]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</Label>
                  <Input id="email" type="email" defaultValue="joshua.carter@cyberguard.com" className="h-11 rounded-lg border-slate-200 dark:border-slate-700 focus:border-[#fa4616] dark:focus:border-[#fa4616]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium text-slate-700 dark:text-slate-300">Role</Label>
                  <Input id="role" defaultValue="VP of Security" disabled className="h-11 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400" />
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">Role is managed by your organization administrator.</p>
                </div>
                <div className="pt-2">
                  <Button className="bg-gradient-to-br from-[#fa4616] to-[#fa4616] hover:from-[#fa4616] hover:to-[#fa4616]/90 text-white font-medium rounded-lg px-6 h-10 shadow-md shadow-[#fa4616]/30 hover:shadow-lg hover:shadow-[#fa4616]/40 transition-all">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg tracking-tight">Security Preferences</CardTitle>
                <CardDescription className="text-sm font-normal">Manage your password and security settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-[#fa4616] dark:text-[#fa4616]" />
                      <Label className="text-base font-semibold text-slate-900 dark:text-white">Two-factor Authentication</Label>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">Add an extra layer of security to your account.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-[#fa4616] dark:text-[#fa4616]" />
                      <Label className="text-base font-semibold text-slate-900 dark:text-white">Session Timeout</Label>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">Automatically log out after 30 minutes of inactivity.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-4 pt-4">
                  <div className="space-y-1">
                    <Label className="text-base font-semibold text-slate-900 dark:text-white">Change Password</Label>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">Update your password to keep your account secure.</p>
                  </div>
                  <div className="grid gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="current-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">Current password</Label>
                      <Input id="current-password" type="password" placeholder="Enter current password" className="h-11 rounded-lg border-slate-200 dark:border-slate-700 focus:border-[#fa4616] dark:focus:border-[#fa4616]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">New password</Label>
                      <Input id="new-password" type="password" placeholder="Enter new password" className="h-11 rounded-lg border-slate-200 dark:border-slate-700 focus:border-[#fa4616] dark:focus:border-[#fa4616]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm new password</Label>
                      <Input id="confirm-password" type="password" placeholder="Confirm new password" className="h-11 rounded-lg border-slate-200 dark:border-slate-700 focus:border-[#fa4616] dark:focus:border-[#fa4616]" />
                    </div>
                  </div>
                  <Button className="bg-gradient-to-br from-[#fa4616] to-[#fa4616] hover:from-[#fa4616] hover:to-[#fa4616]/90 text-white font-medium rounded-lg px-6 h-10 shadow-md shadow-[#fa4616]/30 hover:shadow-lg hover:shadow-[#fa4616]/40 transition-all">
                    Update Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg tracking-tight">Notification Preferences</CardTitle>
                <CardDescription className="text-sm font-normal">Choose what you want to be notified about.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                      <ShieldAlert className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-base font-semibold text-slate-900 dark:text-white">Critical Alerts</Label>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                        Receive immediate notifications for high-severity security incidents.
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#fa4616]/10 dark:bg-[#fa4616]/20 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-[#fa4616] dark:text-[#fa4616]" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-base font-semibold text-slate-900 dark:text-white">Threat Intelligence</Label>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">Daily summaries of global security threats and vulnerabilities.</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-base font-semibold text-slate-900 dark:text-white">Weekly Reports</Label>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                        Receive comprehensive weekly security posture reports via email every Monday.
                      </p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg tracking-tight">API Access</CardTitle>
                <CardDescription className="text-sm font-normal">Manage your API keys and access tokens for programmatic access.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-semibold text-slate-900 dark:text-white">Production API Key</Label>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md">Active</span>
                  </div>
                  <div className="flex gap-2">
                    <Input value="sk_live_51Mz...92xP" readOnly className="h-11 font-mono text-sm bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg" />
                    <Button
                      variant="outline"
                      onClick={handleCopy}
                      className="h-11 px-4 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                    <span className="font-normal">Last used: <span className="font-medium">2 hours ago</span></span>
                    <span className="h-3 w-px bg-slate-300 dark:bg-slate-700"></span>
                    <span className="font-normal">Created: <span className="font-medium">Jan 15, 2024</span></span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Danger Zone</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">Revoking this key will immediately disable all applications using it.</p>
                    <Button variant="destructive" className="mt-2 rounded-lg font-medium">
                      Revoke Key
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  )
}
