"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Teacher } from "@/data/teachers";

interface TeacherCardProps {
    teacher: Teacher;
    index: number;
}

export const TeacherCard = ({ teacher, index }: TeacherCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            <div className="relative mx-auto h-[520px] w-[340px] overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                </div>

                {/* DASCA Strip */}
                <div className="absolute left-0 top-0 flex h-full w-16 items-center justify-center bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-r border-gray-200 dark:border-slate-700 shadow-lg">
                    <div
                        style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                        }}
                    >
                        <span className="text-4xl font-black tracking-[0.2em] text-[#0f2626] dark:text-white">
                            DASCA
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="relative ml-16 flex h-full flex-col justify-end pb-8 px-6">
                    <div className="mb-3">
                        <h2 className="text-3xl font-black uppercase leading-none tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            {teacher.name}
                        </h2>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-[#f0e6d2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                            {teacher.designation}
                        </h3>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-white/30"></div>
                        <span className="text-xs font-semibold tracking-widest text-white/70">
                            FACULTY
                        </span>
                        <div className="h-px flex-1 bg-white/30"></div>
                    </div>
                </div>

                {/* Badge */}
                <div className="absolute right-4 top-4 rounded-full backdrop-blur-sm px-4 py-2 border shadow-lg bg-gradient-to-r from-purple-500/90 to-blue-500/90 border-purple-300">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Mentor
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default TeacherCard;