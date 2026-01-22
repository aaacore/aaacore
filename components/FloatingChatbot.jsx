"use client"

import { useState, useEffect, useRef } from "react"
import { Bot } from "lucide-react"

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hello, I’m CoreMind. How can I assist you?" },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef(null)


  // ✅ JS-safe ref
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (!open || isTyping) return

    // Let scroll + paint finish
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    })
  }, [isTyping, open, messages])

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return

    const userText = input

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: userText }])
    setInput("")
    setIsTyping(true)

    try {
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
            { role: "user", content: userText },
          ],
        }),
      })

      const data = await res.json()

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Something went wrong. Please try again." },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-100 h-150 rounded-2xl
                        border border-white/10 bg-black/40 backdrop-blur-xl
                        shadow-[0_0_40px_rgba(0,255,255,0.15)]
                        flex flex-col animate-in fade-in zoom-in duration-200">

          {/* Header */}
          <div className="px-4 py-3 rounded-t-2xl
                          bg-linear-to-r from-cyan-500/20 to-purple-500/20
                          border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-semibold tracking-wide text-cyan-300">
                CoreMind AI
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-xl shadow-md ${
                  m.role === "user"
                    ? "ml-auto bg-linear-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-white/10 text-white backdrop-blur-md"
                }`}
              >
                {m.text}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-3 max-w-[75%] px-4 py-3
                              rounded-2xl bg-linear-to-r from-cyan-500/10 to-purple-500/10
                              backdrop-blur-xl border border-white/10
                              shadow-[0_0_30px_rgba(0,255,255,0.15)]
                              animate-[fadeIn_0.3s_ease-out]">

                {/* Neural Pulse */}
                <div className="relative h-6 w-6">
                  <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
                  <span className="absolute inset-1 rounded-full bg-cyan-400" />
                </div>

                {/* Thinking text */}
                <span className="text-cyan-300 tracking-wide text-sm animate-pulse">
                  CoreMind is thinking
                </span>

                {/* Wave dots */}
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce [animation-delay:240ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2
                          bg-black/30 rounded-b-2xl">
           <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={isTyping}
              placeholder="Ask CoreMind…"
              className="flex-1 rounded-lg px-3 py-2 text-sm
                        bg-white/10 text-white placeholder:text-white/40
                        outline-none focus:ring-1 focus:ring-cyan-400
                        disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={isTyping}
              className="px-4 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500
                         text-white font-medium
                         shadow-[0_0_15px_rgba(0,255,255,0.5)]
                         hover:scale-105 transition disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Button + Hint */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div
          className={`hidden sm:block px-3 py-1.5 rounded-lg
                      bg-gray-900 text-white text-sm shadow-lg
                      transition-all duration-300
                      ${open ? "opacity-0 translate-x-2 pointer-events-none" : "opacity-100"}`}
        >
          Chat with me 👋
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`h-14 w-14 rounded-full
                      bg-linear-to-br from-cyan-400 to-purple-600
                      shadow-[0_0_25px_rgba(0,255,255,0.6)]
                      flex items-center justify-center
                      hover:scale-110 transition
                      ${open ? "" : "animate-pulse"}`}
        >
          <Bot className="h-7 w-7 text-white" />
        </button>
      </div>
    </>
  )
}
