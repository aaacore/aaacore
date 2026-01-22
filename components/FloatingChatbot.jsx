"use client"

import { useState } from "react"

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hello, I’m CoreMind. How can I assist you?" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = async () => {
    if (!input.trim()) return

    const userText = input
    setMessages((prev) => [...prev, { role: "user", text: userText }])
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
          { role: "user", content: userText },
        ],
      }),
    })

    const data = await res.json()
    setMessages((prev) => [...prev, { role: "bot", text: data.reply }])
  }

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-[420px] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.15)] flex flex-col animate-in fade-in zoom-in duration-200">

          {/* Header */}
          <div className="px-4 py-3 rounded-t-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10 flex items-center justify-between">
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
                    ? "ml-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-white/10 text-white backdrop-blur-md"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2 bg-black/30 rounded-b-2xl">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask CoreMind…"
              className="flex-1 rounded-lg px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-cyan-400"
            />
            <button
              onClick={sendMessage}
              className="px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 text-white shadow-[0_0_25px_rgba(0,255,255,0.6)] flex items-center justify-center text-xl hover:scale-110 transition animate-pulse"
      >
        💬
      </button>
    </>
  )
}



// "use client"

// import { useState } from "react"

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false)
//   const [messages, setMessages] = useState([
//     { role: "bot", text: "Hi 👋 How can we help you?" },
//   ])
//   const [input, setInput] = useState("")

//   const sendMessage = async () => {
//     if (!input.trim()) return

//     const userMessage = { role: "user", content: input }

//     setMessages((prev) => [...prev, { role: "user", text: input }])
//     setInput("")

//     const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//         messages: [
//             { role: "system", content: "You are CoreMind, AAA Core's AI assistant." },
//             ...messages.map((m) => ({
//             role: m.role,
//             content: m.text,
//             })),
//             userMessage,
//         ],
//         }),
//     })

//     const data = await res.json()

//     setMessages((prev) => [
//         ...prev,
//         { role: "bot", text: data.reply },
//     ])
//     }


//   return (
//     <>
//       {/* Chat Window */}
//       {open && (
//         <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-background border rounded-xl shadow-xl flex flex-col">
//           <div className="flex items-center justify-between px-4 py-3 border-b">
//             <span className="font-semibold">CoreMind</span>
//             <button onClick={() => setOpen(false)}>✕</button>
//           </div>

//           <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
//             {messages.map((m, i) => (
//               <div
//                 key={i}
//                 className={`px-3 py-2 rounded-lg max-w-[80%] ${
//                   m.role === "user"
//                     ? "ml-auto bg-primary text-primary-foreground"
//                     : "bg-muted"
//                 }`}
//               >
//                 {m.text}
//               </div>
//             ))}
//           </div>

//           <div className="p-2 border-t flex gap-2">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               placeholder="Type a message…"
//               className="flex-1 rounded-md border px-2 py-1 text-sm bg-background"
//             />
//             <button
//               onClick={sendMessage}
//               className="px-3 rounded-md bg-primary text-primary-foreground"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-xl"
//       >
//         💬
//       </button>
//     </>
//   )
// }