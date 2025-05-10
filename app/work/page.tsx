"use client"

import { motion } from "framer-motion"
import { NavMenu } from "@/components/nav-menu"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  type: string
  image: string
}

const projects: Project[] = [
  {
    title: "Bally Website Research",
    type: "UX case study",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bally Website Research",
    type: "UX case study",
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bally Website Research",
    type: "UX case study",
    image: "https://images.unsplash.com/photo-1587614297696-d150ef162d88?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bally Website Research",
    type: "UX case study",
    image: "https://images.unsplash.com/photo-1595446472721-87f042b9f280?auto=format&fit=crop&q=80&w=800"
  }
]

const testimonial = {
  quote: "File storage made easy – including powerful features you won't find anywhere else. Whether you're.",
  author: "Larry Diamond",
  role: "Chief Executive Officer, Besnik",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
}

const brands = [
  { name: "Square", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Square_Logo.svg/2048px-Square_Logo.svg.png" },
  { name: "Paperz", logo: "https://example.com/paperz-logo.png" },
  { name: "Cubiq", logo: "https://example.com/cubiq-logo.png" },
  { name: "Martino", logo: "https://example.com/martino-logo.png" }
]

export default function WorkPage() {
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
            Work
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-12"
          >
            RECENT PROJECT
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <p className="text-sm text-muted-foreground mb-2">{project.type}</p>
                <h2 className="text-xl font-bold mb-4">{project.title}</h2>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <ArrowUpRight className="absolute bottom-4 right-4 h-6 w-6 text-white opacity-0 transform translate-x-2 -translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="group">
              Load more
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-24 relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
            
            <div className="relative p-8 lg:p-12">
              <p className="text-sm text-white/80 mb-8">Testimonial</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-12">WHAT THEY SAYS</h2>
              
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-full"
                />
                <div className="text-center lg:text-left">
                  <blockquote className="text-xl lg:text-2xl text-white mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-white/80">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 mt-12">
                {brands.map((brand, index) => (
                  <img
                    key={index}
                    src={brand.logo}
                    alt={brand.name}
                    className="h-6 lg:h-8 object-contain"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}