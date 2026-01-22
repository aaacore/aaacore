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
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

type Service = {
  icon: any
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development and Hosting",
    description:
      "We build fast, responsive, and user-friendly websites tailored to your business, with secure hosting, smooth deployment, and scalable ongoing support.",
  },
  {
    icon: Monitor,
    title: "Software Development",
    description:
      "We build reliable, scalable, and custom software solutions focused on performance, security, and long-term business growth.",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "We develop high-performance Android applications with smooth UI/UX, security, and scalability across devices.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Result-driven digital marketing including SEO, social media marketing, paid ads, and content strategies to maximize ROI.",
  },
  {
    icon: Layers,
    title: "E-commerce Product Listing",
    description:
      "Optimized product titles, descriptions, keywords, pricing, and images to increase visibility and sales across platforms.",
  },
  {
    icon: Layers,
    title: "UI & UX Design",
    description:
      "Clean, intuitive, and user-centric UI/UX designs that improve usability, engagement, and user satisfaction.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Professional designs including banners, posts, and marketing materials that strengthen brand identity.",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    description:
      "Consistent brand presence across social platforms through visual identity, content style, and messaging.",
  },
  {
    icon: Film,
    title: "Video Editing",
    description:
      "High-quality video editing for reels, promotions, and corporate content with smooth transitions and storytelling.",
  },
  {
    icon: Pen,
    title: "Logo Design",
    description:
      "Unique, scalable, and memorable logos that reflect your brand values and identity.",
  },
  {
    icon: Server,
    title: "Web Hosting",
    description:
      "Secure, fast, and reliable hosting with uptime monitoring, performance optimization, and technical support.",
  },
  {
    icon: Monitor,
    title: "Software Installation",
    description:
      "Professional software installation with configuration, updates, and compatibility checks.",
  },
  {
    icon: Network,
    title: "Computer Networking",
    description:
      "Network setup, security, optimization, and troubleshooting for seamless connectivity.",
  },
  {
    icon: Cpu,
    title: "PC Building",
    description:
      "Custom-built PCs for gaming, work, or multimedia with optimized performance and reliability.",
  },
  {
    icon: Server,
    title: "Data Backup and Recovery",
    description:
      "Secure backup and fast recovery solutions to protect critical data from loss or failure.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-visible">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive IT Solutions for{" "}
            <span className="text-gradient bg-linear-to-r from-primary to-accent">
              Every Need
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From web development to cybersecurity, we offer end-to-end services to help your business grow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================
   SERVICE CARD WITH POPUP
   ========================= */

function ServiceCard({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Base Card */}
      <Card className="glass hover:border-primary/50 transition-all duration-300 h-full">
        <CardHeader>
          <div className="p-3 bg-linear-to-br from-primary/20 to-accent/10 rounded-xl w-fit mb-4">
            <service.icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-lg font-bold">
            {service.title}
          </CardTitle>
        </CardHeader>
      </Card>

      {/* POPUP */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        animate={
          open
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 12, scale: 0.95 }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-4 w-[320px] max-w-[90vw]"
        style={{ pointerEvents: "none" }}
      >
        <div className="rounded-xl border bg-background shadow-xl p-5">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {service.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
 
