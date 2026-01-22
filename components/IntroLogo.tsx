"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function IntroLogo() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const seen = sessionStorage.getItem("intro_seen")
    if (seen) {
      setShow(false)
      return
    }

    const timer = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem("intro_seen", "true")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Image
              src="/logo_transparent.png"
              alt="AAA Core Logo"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
