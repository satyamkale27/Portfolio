"use client";

import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.a
                key={index}
                href={post.link} // Link to the blog post
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative mb-6">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-lg" />
                </div>
                <p className="text-sm text-purple-500 mb-2">{post.category}</p>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {post.description}
                </p>
                <p className="text-sm text-muted-foreground">{post.date}</p>
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
