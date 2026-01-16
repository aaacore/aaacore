"use client"

import { motion } from "framer-motion"
import {
  Film,
  Monitor,
  Cpu,
  Network,
  Server,
  Pen,
  Smartphone,
  Megaphone,
  Layers,
  Share2,
  Palette,
  Globe,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { icon: Globe, title: "Web Development" },
  { icon: Palette, title: "Graphic Design" },
  { icon: Share2, title: "Social Media Branding" },
  { icon: Layers, title: "UI & UX Design" },
  { icon: Megaphone, title: "Digital Marketing" },
  { icon: Smartphone, title: "Android App Development" },
  { icon: Pen, title: "Logo Design" },
  { icon: Server, title: "Web Hosting" },
  { icon: Network, title: "Computer Networking" },
  { icon: Cpu, title: "PC Building" },
  { icon: Monitor, title: "Software Installation" },
  { icon: Film, title: "Video Editing" },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px]" />

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
            Comprehensive IT Solutions for{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent">Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From web development to cybersecurity, we offer end-to-end services to help your business grow.
          </p>
        </motion.div>

        {/* Services Grid - Glass cards with gradient icons and hover glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Card className="glass hover:border-primary/50 transition-all duration-300 group h-full">
                <CardHeader className="pb-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl w-fit mb-4 group-hover:glow-primary transition-all duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Pro</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
