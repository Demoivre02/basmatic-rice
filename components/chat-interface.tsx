"use client"

import * as React from "react"
import { Send, Paperclip, X, Bot, User, Sparkles, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: string
}

export function ChatInterface({ onClose }: { onClose: () => void }) {
  const [input, setInput] = React.useState("")
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Good morning, Apurva. I'm ready to provide insights from CrowdStrike, Tenable, JIRA, and other security tools. I can help you analyze threats, vulnerabilities, cloud security findings, SOC metrics, and more. What would you like to explore today?",
      timestamp: "09:00 AM",
    },
  ])

  const suggestedPrompts = [
    "CrowdStrike EDR threats prevented by categories",
    "Vulnerability Management risk reduction over time",
    "Cloud Security QoQ MTTR trends by environment",
    "SOC detections received vs resolved",
    "Network Pentest exploitable vulnerabilities",
    "Application Security QoQ risk reduction by product",
    "Security Scorecard scores by domains",
    "Dark Web Monitoring findings",
  ]

  const handleSend = (messageText?: string) => {
    const textToSend = messageText || input
    if (!textToSend.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setInput("")

    // Auto-scroll to bottom
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm processing that request. I'll cross-reference with our threat intelligence database and provide you with a comprehensive analysis...",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiResponse])
      // Auto-scroll after AI response
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-6 flex items-center justify-between bg-gradient-to-r from-orange-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 dark:shadow-none shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-green-500 absolute -right-0.5 -bottom-0.5 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-base tracking-tight text-slate-900 dark:text-white">CISO AI Agent</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mt-0.5 font-normal">
              <Sparkles className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
              <span>Online & Monitoring Threats</span>
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-slate-200/50 dark:hover:bg-slate-700/50 rounded-lg"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1">
        <div className="p-6 space-y-6">
          {messages.length === 1 && (
            <div className="space-y-3 mb-4">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Suggested Questions
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105 dark:shadow-none shadow-sm border border-slate-200 dark:border-slate-700"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <Avatar
                className={`h-9 w-9 shrink-0 ${
                  msg.role === "assistant"
                    ? "bg-gradient-to-br from-orange-500 to-orange-600"
                    : "bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700"
                }`}
              >
                <AvatarFallback className="border-0">
                  {msg.role === "assistant" ? (
                    <Shield className="h-5 w-5 text-white" />
                  ) : (
                    <User className="h-5 w-5 text-white" />
                  )}
                </AvatarFallback>
              </Avatar>
              <div className={`flex flex-col max-w-[75%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white dark:shadow-none shadow-md shadow-orange-500/20"
                      : "bg-slate-100 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 dark:shadow-none shadow-sm"
                  }`}
                >
                  <p className="font-normal">{msg.content}</p>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 px-1 font-normal">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="relative">
          <Input
            placeholder="Ask about CrowdStrike, Tenable, vulnerabilities, cloud security, SOC metrics, or any security domain..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            className="pr-24 h-12 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-orange-500 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm font-normal"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="h-9 w-9 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg shadow-md shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-500/40 transition-all"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Zap className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
            <span className="font-normal">Powered by AI</span>
          </div>
          <div className="h-3 w-px bg-slate-300 dark:bg-slate-700"></div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
            AI can make mistakes. Verify critical security alerts.
          </p>
        </div>
      </div>
    </div>
  )
}
