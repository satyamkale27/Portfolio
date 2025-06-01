"use client";

import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface BlogPost {
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  link: string; // Added link property for each blog post
}

const blogPosts: BlogPost[] = [
  {
    category: "Go Programming",
    title: "Complete Beginner's Guide to Go: Understanding Arrays and Slices",
    description:
      "Learn the fundamental differences between arrays and slices in Go, how to use them, and when to choose one over the other in real-world applications.",
    image: "/blogMedia/gob.png",
    date: "April 13, 2025",
    link: "https://satyamkale.hashnode.dev/complete-beginners-guide-to-go-understanding-arrays-and-slices",
  },
  {
    category: "React",
    title: "Beginner's Guide to Using Props in React",
    description:
      "Understand the core concepts of props in React, including passing data, elements, and the special children prop to build reusable, dynamic components.",
    image: "/blogMedia/propb.png",
    date: "July 30, 2024",
    link: "https://satyamkale.hashnode.dev/beginners-guide-to-using-props-in-react",
  },
  {
    category: "React",
    title: "Beginner's Guide to Using Props in React",
    description:
      "Understand the core concepts of props in React, including passing data, elements, and the special children prop to build reusable, dynamic components.",
    image: "/blogMedia/propb.png",
    date: "July 30, 2024",
    link: "https://satyamkale.hashnode.dev/beginners-guide-to-using-props-in-react",
  },
];

// image size height 320, width:320

export default function BlogPage() {
  const [visiblePosts, setVisiblePosts] = useState(3); // Initially show 3 blog posts

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 3); // Load 3 more blog posts
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
            Blog
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mb-12"
          >
            LATEST ARTICLES
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <motion.a
                key={index}
                href={post.link} // Link to the blog post
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                {/* Blog Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <p className="text-sm text-purple-500 mb-2">
                    {post.category}
                  </p>
                  <h3 className="text-lg font-bold mb-4 group-hover:text-purple-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {visiblePosts < blogPosts.length && ( // Show button only if there are more posts to load
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
