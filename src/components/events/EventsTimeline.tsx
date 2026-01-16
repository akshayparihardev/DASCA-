"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import EventCard from "./EventCard"; // Ensure this import is correct

interface TimelineEvent {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  date?: string;
  type?: string;
}

// Data (Keep your existing data object here)
const eventsData: Record<string, TimelineEvent[]> = {
  "2026": [
    {
      title: "DSPL",
      description:
        "Returning with greater enthusiasm, DSPL continued to strengthen student engagement through competitive cricket and collaborative team spirit.",
      fullDescription:
        "Building on the success of its inaugural edition, the Data Science Premier League (DSPL) returned as a vibrant cricket tournament organized by DASCA. With student-led teams and a structured league format, the event emphasized leadership, coordination, and inclusivity. DSPL further reinforced community bonding by blending sportsmanship with excitement, making it a memorable experience for participants and spectators alike.",
      image: "DSPL2.jpeg",
      type: "Data Science Premier League",
    },
  ],
  "2025": [
    {
      title: "Aakruti'25 – Annual Student Fest",
      description:
        "DASCA's flagship three-day student fest blending technical learning, creativity, and cultural engagement.",
      fullDescription:
        "Aakruti'25 was DASCA's flagship three-day student fest blending technical learning, creativity, and cultural engagement. The event included industry sessions, resume workshops, e-sports tournaments, cultural nights, and inter-section competitions. With high participation across departments, Aakruti'25 fostered collaboration, talent showcase, and an engaging campus experience.",
      image: "/Aakruti25.JPG",
      type: "Technical, Cultural & Creative Fest",
    },
    {
      title: "DASCA Installation Ceremony 2025",
      description:
        "The formal induction of the new committee and the launch of initiatives for the academic year.",
      fullDescription:
        "The DASCA Installation Ceremony 2025 marked the formal induction of the new committee and the launch of initiatives for the academic year. The event featured addresses by faculty members and student leaders, highlighting DASCA's journey, vision, and future roadmap. Insightful discussions on technology trends and leadership set the tone for a year focused on learning, innovation, and collaboration.",
      image: "Installation25.JPG",
      type: "Committee Induction & Vision Launch",
    },
    {
      title: "Alumni Interaction Session",
      description:
        "Insightful alumni interaction with former club president and industry professional Aadi Amit Ringay.",
      fullDescription:
        "DASCA hosted an insightful alumni interaction with former club president and industry professional Aadi Amit Ringay (SDE, Amadeus). The session focused on placement preparation, core technical subjects, internships, and interview strategies. Students actively engaged in discussions, gaining practical guidance and motivation for their career journeys.",
      image: "Alumni talk.JPG",
      type: "Career Guidance & Mentorship",
    },
    {
      title: "Technical Training: Python & SQL",
      description:
        "Hands-on training session focused on strengthening Python and SQL fundamentals for placement readiness.",
      fullDescription:
        "This hands-on training session focused on strengthening Python and SQL fundamentals for placement readiness. The session included concept coverage, live problem-solving, assessments, and a mini project (Expense Tracker Platform). High engagement, practical exposure, and positive feedback highlighted the session's strong impact on student learning.",
      image: "Tech session.jpeg",
      type: "Skill Development & Placement Training",
    },
  ],
  "2024": [
    {
      title: "DASCA Installation Ceremony 2024",
      description:
        "The formal induction of the new committee and the beginning of the academic year.",
      fullDescription:
        "The DASCA Installation Ceremony 2024 marked the formal induction of the new committee and the beginning of the academic year. The event featured inspiring addresses by faculty and industry experts, discussions on emerging trends in Data Science, and the announcement of key collaborations. It laid a strong foundation for leadership, innovation, and collaborative learning within the data science community.",
      image: "Installation24.JPG",
      type: "Formal Induction & Academic Roadmap",
    },
    {
      title: "Aakruti'24 – Student Fest",
      description:
        "A vibrant student-led fest featuring a mix of technical activities, competitions, and cultural events.",
      fullDescription:
        "Aakruti'24 was a vibrant student-led fest featuring a mix of technical activities, competitions, and cultural events. The event encouraged creativity, teamwork, and student engagement across batches and departments, strengthening DASCA's role in fostering both technical growth and campus culture.",
      image: "Aakruti24.jpeg",
      type: "Technical & Cultural Fest",
    },
  ],
  "2023": [
    {
      title: "DASCA Installation Ceremony 2023",
      description:
        "The formal establishment of the committee for the academic year with vision setting.",
      fullDescription:
        "The DASCA Installation Ceremony 2023 marked the formal establishment of the committee for the academic year. The event introduced the club's vision, objectives, and upcoming initiatives while emphasizing the importance of data science in modern technology. Faculty guidance and student participation set a collaborative tone for the year ahead.",
      image: "Installation23.JPG",
      type: "Committee Induction & Vision Setting",
    },
    {
      title: "DSPL",
      description:
        "DSPL is DASCA’s inter-batch cricket tournament that brings data science students together through sportsmanship, teamwork, and healthy competition.",
      fullDescription:
        "The Data Science Premier League (DSPL) is a sports initiative by DASCA, designed to foster unity and collaboration among data science students. Inspired by professional cricket leagues, the event introduced a league-style format that encouraged leadership, strategic thinking, and active participation. DSPL successfully created an energetic platform where students connected beyond academics through the shared spirit of cricket.",
      image: "DSPL1.jpeg",
      type: "Data Science Premier League",
    },
  ],
};

const EventsTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Calculate the total height of the timeline content
  useEffect(() => {
    if (rectRef.current) {
      const rect = rectRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [rectRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // Transform scroll progress into height (0 to full height)
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#F9FAFB] dark:bg-zinc-950 font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        {/* Header */}
        <div className="mb-16 md:pl-8">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Past Events
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            A journey through our milestones.
          </p>
        </div>

        <div ref={rectRef} className="relative pb-20">
          {/* --- CONTENT MAPPING --- */}
          {Object.entries(eventsData).map(([year, events], index) => (
            <div
              key={year}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* Left Column: Sticky Year & Dot */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                {/* The Dot */}
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#F9FAFB] dark:bg-zinc-950 flex items-center justify-center z-50">
                  <div className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>

                {/* The Year */}
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-slate-300 dark:text-slate-700">
                  {year}
                </h3>
              </div>

              {/* Right Column: Event Cards */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-500">
                  {year}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {events.map((event, idx) => (
                    <EventCard key={idx} {...event} />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* --- THE TIMELINE LINES --- */}

          {/* 1. Static Gray Line (Background Track) */}
          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 dark:via-slate-800 to-transparent to-[99%]"
          >
            {/* 2. Moving Colored Beam (Foreground) */}
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-teal-500 via-cyan-400 to-transparent rounded-full z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsTimeline;
