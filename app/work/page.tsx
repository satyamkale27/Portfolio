"use client";

import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  type: string;
  image: string;
  github: string;
  description: string; // Added description property
}

const projects: Project[] = [
  {
    title: "Go-social",
    type: "Backend, Rest api",
    image: "/projectMedia/goSocial.png",
    github: "https://github.com/satyamkale27/Go-social",
    description:
      "Go-social is a backend REST API project designed to power social media platforms. It includes user authentication, post management, and real-time notifications.",
  },
  {
    title: "Video player client",
    type: "HLS, AWS, video player",
    image: "/projectMedia/videoPlayer.png",
    github: "https://github.com/satyamkale27/video-js",
    description:
      "A video player client built with HLS streaming and AWS integration, offering seamless video playback and adaptive streaming.",
  },
  {
    title: "Anime Streaming microservice",
    type: "express, Restapi, AWS-S3Bucket",
    image: "/projectMedia/aniStreaming.png",
    github: "https://github.com/satyamkale27/Ani-streaming",
    description:
      "A microservice for anime streaming, featuring REST APIs for content delivery and AWS S3 for storage.",
  },
];

export default function WorkPage() {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3); // Load 3 more projects
  };

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
            RECENT PROJECTS
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-lg shadow-lg border border-border bg-card hover:shadow-xl transition-shadow"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View details about ${project.title}`}
                  className="block"
                >
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={`Preview of ${project.title}`}
                      width={640} // Set appropriate width
                      height={192} // Set appropriate height
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <ArrowUpRight className="absolute bottom-4 right-4 h-6 w-6 text-white opacity-0 transform translate-x-2 -translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.type}
                    </p>
                    <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Explore the repository to learn more about this project.
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {visibleProjects < projects.length && ( // Show button only if there are more projects to load
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="group"
                onClick={handleLoadMore}
              >
                Load more
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
