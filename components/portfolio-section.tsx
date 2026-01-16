"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/modern-ecommerce-dashboard-with-products-and-analy.jpg",
  },
  {
    title: "Healthcare Management System",
    technologies: ["Python", "Django", "PostgreSQL", "AWS"],
    image: "/healthcare-management-system-dashboard-with-patien.jpg",
  },
  {
    title: "Mobile Banking App",
    technologies: ["React Native", "Firebase", "Security", "UX"],
    image: "/mobile-banking-app-interface-on-smartphone.jpg",
  },
]

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "40+", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute inset-0 grid-bg opacity-30" />

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
            Projects That Make an <span className="text-gradient bg-gradient-to-r from-primary to-accent">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of successful projects that have transformed businesses.
          </p>
        </motion.div>

        {/* Projects Grid - Dark glass cards with neon tech tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="glass overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-muted/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats - Futuristic gradient numbers with glow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="text-center p-8 glass rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <p className="text-4xl lg:text-5xl font-bold text-gradient bg-gradient-to-r from-primary to-accent mb-2 group-hover:glow-primary transition-all duration-300">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
