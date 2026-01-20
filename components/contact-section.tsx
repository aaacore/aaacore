"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Globe, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+91 7510740578", href: "tel:+917510740578" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 9188711791", href: "https://wa.me/919188711791" },
  { icon: Globe, label: "Website", value: "aaacore.in", href: "https://aaacore.in" },
  { icon: Mail, label: "Email", value: "aaacore.in@gmail.com", href: "mailto:aaacore.in@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kannur, Kerala, India", href: "#" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

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
            {"Let's Build Something "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your digital transformation? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info - Glass cards with hover glow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactDetails.map((detail, index) => (
              <motion.a
                key={detail.label}
                href={detail.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-primary/50 transition-all duration-300 group block"
              >
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:glow-primary transition-all duration-300">
                  <detail.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{detail.label}</p>
                  <p className="font-semibold text-foreground">{detail.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/aaa-core-it-solutions-b979b03a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:border-primary/50 hover:bg-primary/10 hover:glow-primary transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/aaacore.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:border-primary/50 hover:bg-primary/10 hover:glow-primary transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Card - Futuristic gradient card with glow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-primary via-primary/90 to-accent/80 border-0 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center h-full relative">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-primary-foreground">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-primary-foreground/90 mb-8 text-lg">
                  {
                    "Whether you need a stunning website, a powerful mobile app, or a complete digital strategy, we're here to help you succeed."
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto bg-background/90 hover:bg-background text-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:+917510740578">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="https://wa.me/919188711791" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
