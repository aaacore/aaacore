"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1))

    const initObserver = () => {
      const sectionElements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)

      if (sectionElements.length === 0) return

      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      }, observerOptions)

      sectionElements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }

    // Small delay to ensure sections are rendered
    const timeoutId = setTimeout(initObserver, 100)
    return () => clearTimeout(timeoutId)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => scrollToSection("#home")} className="flex items-center gap-3 group">
            {/* <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:glow-primary transition-all duration-300"> */}
              {/* <span className="text-primary-foreground font-bold text-xl leading-none">
                A<sup className="text-[0.6em] font-bold">3</sup>
              </span> */}
              <Image
                // src="/new_logo.jpeg"   // or .png – must be inside /public
                src= "/intro_logo.png"
                alt="AAA Core IT Solutions Logo"
                width={50}
                height={60}
                className="object-contain rounded-lg"
              />
            {/* </div> */}
            <div className="hidden sm:block">
              <span className="font-bold text-foreground text-lg tracking-tight">AAA Core</span>
              <span className="text-muted-foreground text-sm block -mt-1">IT Solutions</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full glow-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-linear-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-6 rounded-xl glow-primary transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden glass border-t border-border"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300",
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10 border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full mt-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl"
              onClick={() => scrollToSection("#contact")}
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
