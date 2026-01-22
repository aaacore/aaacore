"use client"

import { useState } from "react"

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 How can we help you?" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }

    setMessages((prev) => [...prev, { role: "user", text: input }])
    setInput("")

    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        messages: [
            { role: "system", content: "You are CoreMind, AAA Core's AI assistant." },
            ...messages.map((m) => ({
            role: m.role,
            content: m.text,
            })),
            userMessage,
        ],
        }),
    })

    const data = await res.json()

    setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply },
    ])
    }


  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-background border rounded-xl shadow-xl flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="font-semibold">CoreMind</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message…"
              className="flex-1 rounded-md border px-2 py-1 text-sm bg-background"
            />
            <button
              onClick={sendMessage}
              className="px-3 rounded-md bg-primary text-primary-foreground"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-xl"
      >
        💬
      </button>
    </>
  )
}
