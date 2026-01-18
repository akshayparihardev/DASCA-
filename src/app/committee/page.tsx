"use client";

import { CommitteeMembersCarousel } from "@/components/CommitteeMembersCarousel";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

import { members } from "@/data/committee-members";



export default function CommitteePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const filteredBySearch = searchQuery.trim()
    ? members.filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : members;


  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
              y,
              scale
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
              y,
              scale
            }}
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon with Glow Effect */}
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 dark:bg-blue-500/20 blur-3xl rounded-full opacity-50" />
                <Sparkles className="relative w-14 h-14 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Committee
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Meet the passionate individuals driving{" "}
              <span className="text-blue-600 dark:text-blue-400 font-bold">DASCA</span> forward
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500" />

                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 z-10" />
                  <input
                    type="text"
                    placeholder="Search by name or role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-14 py-4 rounded-2xl bg-white dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-300 dark:focus:border-blue-500/50 focus:ring-4 focus:ring-blue-50 dark:focus:ring-blue-500/10 transition-all text-base font-medium shadow-xl backdrop-blur-md"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {searchQuery && (
                <motion.p
                  className="mt-4 text-sm text-slate-500 dark:text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Found <span className="text-blue-600 dark:text-blue-400 font-bold">{filteredBySearch.length}</span> member
                  {filteredBySearch.length !== 1 ? 's' : ''}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* fill-current uses text color from class, allowing us to switch based on mode */}
          <svg
            className="w-full h-24 text-gray-50 dark:text-slate-900 fill-current transition-colors duration-300"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </motion.section>

      {/* Committee Carousel Section */}
      <section className="bg-gray-50 dark:bg-slate-900 pb-40 pt-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <CommitteeMembersCarousel members={filteredBySearch} loop={true} />
        </div>
      </section>
    </div>
  );
}