"use client"

import { motion } from "framer-motion"
import { Shield, Key, BarChart3, Users, Heart, Award, Clock, IndianRupee, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Shield,
    title: "Authentication",
    description: "Verifying identity and ensuring only the right people access your digital assets.",
    color: "primary",
  },
  {
    icon: Key,
    title: "Authorization",
    description: "Managing permissions and access control with precision.",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Accounting",
    description: "Tracking, monitoring, and analyzing every interaction.",
    color: "primary",
  },
]

const whyChooseUs = [
  { icon: Users, label: "Expert Team" },
  { icon: Heart, label: "Client-Centric" },
  { icon: Award, label: "Quality Assured" },
  { icon: Clock, label: "Timely Delivery" },
  { icon: IndianRupee, label: "Affordable Pricing" },
  { icon: Headphones, label: "24/7 Support" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Built on the Foundation of{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent">AAA Principles</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            AAA Core IT Solutions is a leading technology partner based in Kannur, Kerala, specializing in comprehensive
            IT solutions that empower businesses to thrive in the digital age. Our name embodies our core principles:
            Authentication, Authorization, and Accounting.
          </p>
        </motion.div>

        {/* AAA Pillars - Floating glass cards with neon accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="glass hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                      pillar.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary/20 group-hover:glow-primary"
                        : "bg-accent/10 group-hover:bg-accent/20 group-hover:glow-accent"
                    }`}
                  >
                    <pillar.icon className={`h-8 w-8 ${pillar.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision - Gradient cards with glass effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative">
                <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Our Mission</h3>
                <p className="text-primary-foreground/90 text-lg">
                  To deliver innovative, secure, and scalable IT solutions that empower businesses to achieve their
                  digital transformation goals.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass gradient-border overflow-hidden group hover:bg-primary/5 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To become the most trusted IT solutions provider in Kerala and beyond.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Why Choose Us - Neon accent icons with hover glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">Why Choose AAA Core?</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-6 glass rounded-2xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:glow-primary transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
