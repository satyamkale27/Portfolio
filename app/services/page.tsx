"use client"

import { motion } from "framer-motion"
import { NavMenu } from "@/components/nav-menu"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface Service {
  title: string
  description: string
  image?: string
}

const services: Service[] = [
  {
    title: "WEB DESIGN",
    description: "You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template"
  },
  {
    title: "UI/UX DESIGN",
    description: "You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template"
  },
  {
    title: "MOBILE APPLICATION",
    description: "You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "USER RESEARCH",
    description: "You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template"
  }
]

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>("MOBILE APPLICATION")

  return (
    <main className="min-h-screen bg-background">
      <NavMenu />
      
      <div className="lg:ml-[100px] p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl mx-auto pt-16 lg:pt-0"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-muted-foreground mb-4"
          >
            Service
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-12"
          >
            MY SPECIALTIES
          </motion.h1>

          <div className="space-y-4">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-b border-border last:border-0"
              >
                <button
                  onClick={() => setExpandedService(expandedService === service.title ? null : service.title)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <h2 className="text-lg lg:text-xl font-bold">{service.title}</h2>
                  {expandedService === service.title ? (
                    <Minus className="h-6 w-6 flex-shrink-0" />
                  ) : (
                    <Plus className="h-6 w-6 flex-shrink-0" />
                  )}
                </button>
                
                <div
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden transition-all duration-300",
                    expandedService === service.title ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="min-h-0">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  {service.image && (
                    <div className="min-h-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}