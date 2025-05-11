"use client";

import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavMenu />

      <div className="max-w-screen-lg mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-16 lg:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-muted-foreground mb-4 text-center lg:text-left"
          >
            Nice to meet you!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-12 text-center lg:text-left"
          >
            WELCOME TO...
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <img
                src="/satyam.png"
                alt="Profile"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-cover rounded-full mx-auto lg:mx-0 mb-8"
              />
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="text-purple-500">SATYAM</span>
                <span className="text-orange-500">KALE</span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-6">
                Full stack developer
              </p>
              <Button
                variant="outline"
                className="group w-full sm:w-auto mx-auto lg:mx-0"
              >
                <a
                  href="https://drive.google.com/file/d/15N0YZ7Fy21dl8lHHDIg1tYFdWAYmB9E-/view?usp=drive_link"
                  target="_blank"
                >
                  Download CV
                </a>
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>{/* Placeholder for stats */}</div>
                <div>{/* Placeholder for stats */}</div>
              </div>

              <div>
                <p className="text-base lg:text-lg mb-4">
                  Hello there! My name is Satyam Kale. I am a web developer with
                  a strong passion for creating clean, functional, and
                  user-focused applications.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground">
                  With hands-on experience in modern web technologies like
                  React, Node.js, and Express, I’ve built several full-stack
                  projects and continue to grow through real-world development.
                  I’ve also been working with Go (Golang), building efficient
                  and performant backend services that enhance my understanding
                  of system design.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-24"
          >
            <h2 className="text-sm text-muted-foreground mb-4 text-center lg:text-left">
              Experience
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold mb-12 text-center lg:text-left">
              MY EXPERIENCE
            </h3>

            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-l-2xl" />
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-r-2xl" />

              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 lg:p-12 text-white">
                <div className="text-center lg:text-left">
                  <p className="text-sm opacity-80">2025 - Present</p>
                  <h4 className="text-xl font-bold mt-2 mb-1">
                    Backend Developer (Go)
                  </h4>
                  <p className="text-sm opacity-80">
                    Building backend services with Golang and SQL databases
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-sm opacity-80">2024 - 2025</p>
                  <h4 className="text-xl font-bold mt-2 mb-1">
                    Open Source Contributor
                  </h4>
                  <p className="text-sm opacity-80">
                    Actively contributing to open source projects
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-sm opacity-80">2024</p>
                  <h4 className="text-xl font-bold mt-2 mb-1">
                    Backend Developer (Node.js & TS)
                  </h4>
                  <p className="text-sm opacity-80">
                    Building REST APIs using Express.js and TypeScript
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-sm opacity-80">2023</p>
                  <h4 className="text-xl font-bold mt-2 mb-1">
                    Frontend Developer (React)
                  </h4>
                  <p className="text-sm opacity-80">
                    Learning React and its ecosystem of libraries
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
