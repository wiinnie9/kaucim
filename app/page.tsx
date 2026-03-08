"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  const [stage, setStage] = useState<"start" | "shake" | "fortune">("start")
  const [fortune, setFortune] = useState("")

  const fortunes = ["大吉 🌸", "中吉 🍂", "小吉 🌿", "凶 ☁️"]

  const handleShake = () => {
    const index = Math.floor(Math.random() * fortunes.length)
    setFortune(fortunes[index])
    setStage("fortune")
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#FFF9E5] font-sans">
      {stage === "start" && (
        <div className="text-center">
          <h1 className="text-4xl mb-6 text-red-600 font-bold">🪷 求签仪式</h1>
          <button
            onClick={() => setStage("shake")}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            开始仪式
          </button>
        </div>
      )}

      {stage === "shake" && (
        <div className="text-center">
          <motion.div
            animate={{ rotate: [-10, 10, -10, 10, 0] }}
            transition={{ duration: 2 }}
            className="text-6xl mb-6 text-red-600"
          >
            🎋
          </motion.div>
          <button
            onClick={handleShake}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            摇动签筒
          </button>
        </div>
      )}

      {stage === "fortune" && (
        <div className="text-center">
          <Sparkles size={48} className="mx-auto mb-4 text-red-500" />
          <h2 className="text-3xl mb-4 text-red-600 font-semibold">{fortune}</h2>
          <button
            onClick={() => setStage("start")}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            再抽一次
          </button>
        </div>
      )}
    </main>
  )
}