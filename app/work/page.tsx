"use client";

import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  type: string;
  image: string;
  github: string; // Added GitHub link property
}

const projects: Project[] = [
  {
    title: "Go-social",
    type: "Backend, Rest api",
    image: "/projectMedia/goSocial.png",
    github: "https://github.com/satyamkale27/Go-social",
  },
  {
    title: "Video player client",
    type: "HLS, AWS, video player",
    image: "/projectMedia/videoPlayer.png",
    github: "https://github.com/satyamkale27/video-js",
  },
  {
    title: "Anime Streaming microservice",
    type: "express, Restapi, AWS-S3Bucket",
    image: "/projectMedia/aniStreaming.png",
    github: "https://github.com/satyamkale27/Ani-streaming",
  },
];

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
              <motion.a
                key={index}
                href={project.github} // Link to GitHub repository
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <p className="text-sm text-muted-foreground mb-2">
                  {project.type}
                </p>
                <h2 className="text-xl font-bold mb-4">{project.title}</h2>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <ArrowUpRight className="absolute bottom-4 right-4 h-6 w-6 text-white opacity-0 transform translate-x-2 -translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="group">
              Load more
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
