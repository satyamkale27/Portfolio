"use client";

import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen bg-background overflow-hidden p-28">
      <NavMenu />

      <div className="lg:ml-[100px] p-6 lg:p-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col lg:flex-row items-center justify-between relative pt-8 lg:pt-0"
        >
          {/* Text Section */}
          <div className="max-w-2xl text-center lg:text-left z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl lg:text-6xl font-bold mb-4"
            >
              MY NAME IS
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                SATYAM KALE
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg lg:text-xl text-muted-foreground mb-8"
            >
              Full stack developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="https://twitter.com/messages/compose?recipient_id=1418223205395755011"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="group">
                  Let's talk
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px] mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl" />
            <img
              src="/satyam.png"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
