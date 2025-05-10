"use client";

import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
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
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-12"
          >
            GET IN TOUCH
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-6">
                Let's talk about everything!
              </h2>
              <p className="text-muted-foreground mb-8">
                Don't like forms? Send me an email. 👋
              </p>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Input type="text" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email address" />
                </div>
                <div className="space-y-2">
                  <Input type="text" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Your message"
                    className="min-h-[200px]"
                  />
                </div>
                <Button className="w-full group">
                  Send message
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-muted-foreground">India</p>
              </div>

              {/* <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+20 11 43 63 73 41</p>
              </div> */}

              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">kalesatyam669@gmail.com</p>
              </div>

              <div className="pt-8">
                <h3 className="font-bold mb-4">Follow me</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://x.com/satyamkale27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://github.com/satyamkale27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Github
                  </a>
                  <a
                    href="https://hashnode.com/@satyam27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    hashnode
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
