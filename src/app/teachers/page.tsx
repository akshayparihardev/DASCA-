"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";

import { teachers } from "@/data/teachers";
import { TeachersGrid } from "@/components/teachers/TeachersGrid";

export default function TeachersPage() {
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div
            className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300"
            data-testid="teachers-page"
        >

            {/* Hero Section - Optimized */}
            <motion.section
                ref={heroRef}
                style={{ opacity }}
                className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
                data-testid="teachers-hero"
            >
                {/* Simplified Background - CSS Only */}
                <div className="absolute inset-0 opacity-30">
                    {/* Static gradient orbs - no animation */}
                    <div
                        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                        }}
                    />
                    <div
                        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
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
                        {/* Icon - Static */}
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-200 dark:bg-blue-500/20 blur-3xl rounded-full opacity-50" />
                                <GraduationCap className="relative w-14 h-14 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Title */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Our Mentors
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            The guiding force behind{" "}
                            <span className="text-blue-600 dark:text-blue-400 font-bold">DASCA</span>'s success
                        </motion.p>
                    </motion.div>
                </div>

                {/* Bottom Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
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

            {/* Teachers Gallery Section */}
            <section className="bg-gray-50 dark:bg-slate-900 pb-40 pt-10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6">
                    <TeachersGrid teachers={teachers} />
                </div>
            </section>
        </div>
    );
}
