"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Minimal chat types aligned with our API
type Role = "system" | "user" | "assistant"
interface Message {
  role: Role
  content: string
}

export default function ChatPage() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const chatScrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Only auto-scroll after we actually have messages; otherwise initial navigation
    // to /chat may cause the whole page to jump to the bottom.
    if (messages.length === 0) return

    const el = chatScrollRef.current
    if (!el) return

    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [messages, loading])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return
    setError(null)

    const nextMessages: Message[] = [...messages, { role: "user", content: text }]
    setMessages(nextMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(typeof data?.error === "string" ? data.error : "Request failed")
      }

      const assistant = data?.message as Message | undefined
      if (assistant?.content) {
        setMessages((prev: Message[]) => [...prev, { role: "assistant", content: assistant.content }])
      } else if (Array.isArray(data?.choices) && data.choices[0]?.message?.content) {
        setMessages((prev: Message[]) => [...prev, { role: "assistant", content: data.choices[0].message.content }])
      } else {
        setMessages((prev: Message[]) => [...prev, { role: "assistant", content: "(no response)" }])
      }
    } catch (err: any) {
      setError(err?.message || "Unexpected error")
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      void sendMessage()
    }
  }

  const clearChat = () => {
    setMessages([])
    setError(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto max-w-4xl px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t("nav.chat") || "Chat"}
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="rounded-lg border bg-background">
          <div ref={chatScrollRef} className="h-[420px] overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-sm text-muted-foreground py-16">
                Start chatting by typing a message below.
              </div>
            )}

            {messages.map((m, idx) => (
              <div key={idx} className="flex gap-3">
                <div className={`mt-1 h-6 w-6 shrink-0 rounded-full ${m.role === "user" ? "bg-blue-500" : "bg-zinc-500"}`} />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">
                    {m.role === "user" ? "You" : m.role === "assistant" ? "Assistant" : "System"}
                  </div>
                  <div className="whitespace-pre-wrap leading-relaxed text-[15px]">{m.content}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-sm text-muted-foreground">Thinking…</div>
            )}
          </div>

          {error && (
            <div className="border-t p-3 text-sm text-red-600 bg-red-50/40">
              {error}
            </div>
          )}

          <div className="border-t p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
                placeholder="Type a message…"
                className="min-h-[44px] w-full resize-none rounded-md border bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={sendMessage}
                disabled={loading || input.trim().length === 0}
                className="inline-flex h-[44px] items-center justify-center whitespace-nowrap rounded-md bg-foreground px-4 text-sm font-medium text-background shadow transition-colors hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send"}
              </button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Press Enter to send, Shift+Enter for a new line.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
