"use client"

import { motion } from "framer-motion"
import { NavMenu } from "@/components/nav-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavMenu />
      
      <div className="lg:ml-[100px] p-6 lg:p-12">
        <div className="max-w-5xl mx-auto pt-16 lg:pt-0">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-muted-foreground mb-4"
          >
            Nice to meet you!
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-12"
          >
            WELCOME TO...
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Profile"
                className="w-48 h-48 lg:w-96 lg:h-96 object-cover rounded-full mx-auto lg:mx-0 mb-8"
              />
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="text-purple-500">FAWZI</span>
                <span className="text-orange-500">SAYED</span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-6">
                Product Designer based in Egypt
              </p>
              <Button variant="outline" className="group">
                Download CV
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-purple-500">10+</p>
                  <p className="text-sm text-muted-foreground">Years experience...</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-orange-500">14</p>
                  <p className="text-sm text-muted-foreground">Clients Worldwide...</p>
                </div>
              </div>

              <div>
                <p className="text-base lg:text-lg mb-4">
                  Hello there! My name is Fawzi Sayed. I am a product designer & developer, and I'm very passionate and dedicated to my work.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground">
                  With 10+ years experience as a professional product designer, I have acquired the skills and knowledge necessary to make your project a success.
                </p>
              </div>

              <blockquote className="bg-black text-white p-6 rounded-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin."
              </blockquote>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-24"
          >
            <h2 className="text-sm text-muted-foreground mb-4">Experience</h2>
            <h3 className="text-2xl lg:text-3xl font-bold mb-12">MY EXPERIENCE</h3>

            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-l-2xl" />
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-r-2xl" />
              
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 lg:p-12 text-white">
                <div className="text-center lg:text-left">
                  <p className="text-sm opacity-80">2018 - Present</p>
                  <h4 className="text-xl font-bold mt-2 mb-1">LEAD UI/UX DESIGNER</h4>
                  <p className="text-sm opacity-80">Rolling Thunder</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-sm opacity-80">2018 - 2010</p>
                  <h4 className="text-xl font-bold mt-2 mb-1">SENIOR UI/UX DESIGNER</h4>
                  <p className="text-sm opacity-80">Locast Accessories</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-sm opacity-80">2008 - 2006</p>
                  <h4 className="text-xl font-bold mt-2 mb-1">JUNIOR UI/UX DESIGNER</h4>
                  <p className="text-sm opacity-80">Sagebrush</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}