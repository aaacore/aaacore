"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Key, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 noise-bg" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge - Glass badge with glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 border-primary/30"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse glow-accent" />
            <span className="text-sm font-medium text-foreground">Trusted IT Partner in Kerala</span>
          </motion.div>

          {/* Headline - Gradient animated text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            <span className="text-foreground">The Core of Trust </span>
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              &
            </span>
            <span className="text-foreground"> Innovation</span>
          </motion.h1>

          {/* Subheading - Gradient subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-gradient bg-gradient-to-r from-primary to-accent mb-4"
          >
            Building digital excellence through Authentication, Authorization & Accounting
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Transforming businesses with cutting-edge IT solutions, innovative web & app development, and strategic
            digital marketing
          </motion.p>

          {/* CTAs - Glowing gradient buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-xl glow-primary transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("services")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="
                w-full sm:w-auto text-base px-8
                bg-transparent
                border-border
                text-white hover:text-white
                rounded-xl
                backdrop-blur-sm

                transition-transform transition-shadow duration-300 ease-out
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]

                active:scale-95
              "
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </motion.div>

          {/* AAA Pillars Preview - Floating glass cards with glow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 lg:mt-24"
          >
            {[
              { icon: Shield, title: "Authentication", desc: "Verify Identity", color: "primary" },
              { icon: Key, title: "Authorization", desc: "Manage Access", color: "accent" },
              { icon: BarChart3, title: "Accounting", desc: "Track & Analyze", color: "primary" },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                  "flex items-center gap-3 p-4 glass rounded-2xl group cursor-pointer transition-all duration-300",
                  "hover:border-primary/50 hover:bg-primary/5",
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-xl transition-all duration-300",
                    pillar.color === "primary"
                      ? "bg-primary/10 group-hover:bg-primary/20 group-hover:glow-primary"
                      : "bg-accent/10 group-hover:bg-accent/20 group-hover:glow-accent",
                  )}
                >
                  <pillar.icon className={cn("h-5 w-5", pillar.color === "primary" ? "text-primary" : "text-accent")} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{pillar.title}</p>
                  <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
