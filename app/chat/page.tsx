"use client"

import { AppShell } from "@/components/app-shell"
import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
  return (
    <AppShell>
      <div className="h-full p-6 pb-12">
        <div className="h-full max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:shadow-none shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col">
          <ChatInterface onClose={() => {}} />
        </div>
      </div>
    </AppShell>
  )
}
