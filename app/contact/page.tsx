"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";
import { sendMessage } from "@/actions/sendMessage"; // Import sendMessage function

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors: typeof errors = {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    // Full Name validation (only letters and spaces, 2-50 characters)
    if (!/^[a-zA-Z\s]{2,50}$/.test(formData.fullName)) {
      newErrors.fullName =
        "Full name must be 2-50 characters and contain only letters and spaces.";
      isValid = false;
    }

    // Email validation (basic email regex)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Subject validation (non-empty, max 100 characters)
    if (formData.subject.trim() === "" || formData.subject.length > 100) {
      newErrors.subject =
        "Subject cannot be empty and must be less than 100 characters.";
      isValid = false;
    }

    // Message validation (non-empty, max 500 characters)
    if (formData.message.trim() === "" || formData.message.length > 500) {
      newErrors.message =
        "Message cannot be empty and must be less than 500 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Call sendMessage with form data
      await sendMessage(formData);

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
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

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    className="min-h-[200px]"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <Button className="w-full group" type="submit">
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
