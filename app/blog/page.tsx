"use client"

import { motion } from "framer-motion"
import { NavMenu } from "@/components/nav-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface BlogPost {
  category: string
  title: string
  description: string
  image: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    category: "UI Design",
    title: "The Evolution of User Interface Design",
    description: "Exploring the journey of UI design from skeuomorphism to modern minimalism and what lies ahead.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    date: "March 15, 2024"
  },
  {
    category: "UX Research",
    title: "Effective User Research Methods",
    description: "A comprehensive guide to conducting user research that delivers actionable insights.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000",
    date: "March 10, 2024"
  },
  {
    category: "Product Design",
    title: "Designing for Accessibility",
    description: "Best practices for creating inclusive digital products that work for everyone.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2000",
    date: "March 5, 2024"
  }
]

const featuredPost = {
  category: "Design Systems",
  title: "Building Scalable Design Systems",
  description: "Learn how to create and maintain a design system that grows with your product.",
  image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2000",
  date: "March 20, 2024"
}

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="order-2 lg:order-1">
                <p className="text-sm text-purple-500 mb-2">{featuredPost.category}</p>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.description}</p>
                <p className="text-sm text-muted-foreground mb-8">{featuredPost.date}</p>
                <Button variant="outline" className="group">
                  Read more
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-lg" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
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
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-500 transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{post.description}</p>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </motion.div>
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
  )
}