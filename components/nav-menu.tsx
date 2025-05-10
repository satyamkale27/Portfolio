"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function NavMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-black text-white rounded-full lg:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center lg:hidden">
          <nav className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-medium transition-colors hover:text-white/80",
                  pathname === link.href ? "text-white" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-[170px] bg-black text-white hidden lg:flex flex-col items-center py-8">
        <Link href="/" className="text-2xl font-bold mb-16">
          SK
        </Link>
        <div className="flex flex-col gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium px-4 py-2 transition-colors hover:text-white/80",
                pathname === link.href ? "text-white" : "text-white/60"
              )}
            >
              {pathname === link.href && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 bg-white/10 rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
