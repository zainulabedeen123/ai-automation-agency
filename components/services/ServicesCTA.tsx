"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your AI Transformation Starts Today
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Let us help you build smarter, faster, and more efficient business processes. 
            Partner with us to automate success.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="#demo"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-200"
            >
              Schedule a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 