import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Committee Members - Meet the DASCA Team | RBU',
  description: 'Meet the 100+ committee members of DASCA who organize events, workshops, and festivals at Ramdeobaba University. Join our passionate team driving innovation.',
  openGraph: {
    title: 'DASCA Committee - The Team Behind Innovation',
    description: 'Meet 100+ passionate committee members at DASCA RBU',
    url: 'https://dasca.in/committee',
  },
}

"use client";

import { CommitteeMembersCarousel } from "@/components/CommitteeMembersCarousel";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

// Helper function for LOCAL images
const getImageUrl = (fileName: string) => {
  return `/images/members/${fileName}.png`;
};

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

  const members = [
    // ==================== HEADS (16 Members) ====================
    // LEADERSHIP
    { 
      id: "h1", 
      name: "Harsh Saoji", 
      position: "head" as const, 
      role: "President", 
      image: getImageUrl("Harsh Saoji"),
      domain: "leadership" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "h2", 
      name: "Aditya Gugnani", 
      position: "head" as const, 
      role: "Secretary", 
      image: getImageUrl("Aditya Gugnani"),
      domain: "leadership" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "h3", 
      name: "Mehansh Masih", 
      position: "head" as const, 
      role: "Treasurer", 
      image: getImageUrl("Mehansh Masih"),
      domain: "leadership" as const, 
      year: "2025-26" as const 
    },
    
    // Events
    { 
      id: "h4", 
      name: "Alina Anjum", 
      position: "head" as const, 
      role: "Event Head", 
      image: getImageUrl("Alina Anjum"),
      domain: "events" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "h5", 
      name: "Ishan Kashikar", 
      position: "head" as const, 
      role: "Event Head", 
      image: getImageUrl("Ishan Kashikar"),
      domain: "events" as const, 
      year: "2025-26" as const 
    },
    
    // Cultural
    { 
      id: "h6", 
      name: "Palak Bang", 
      position: "head" as const, 
      role: "Cultural Head", 
      image: getImageUrl("Palak Bang"),
      domain: "cultural" as const, 
      year: "2025-26" as const 
    },
    
    // Creativity
    { 
      id: "h7", 
      name: "Niharika Nashine", 
      position: "head" as const, 
      role: "Creativity Head", 
      image: getImageUrl("Niharika Nashine"),
      domain: "creativity" as const, 
      year: "2025-26" as const 
    },
    
    // Publicity
    { 
      id: "h8", 
      name: "Pranay Rokade", 
      position: "head" as const, 
      role: "Publicity Head", 
      image: getImageUrl("Pranay Rokade"),
      domain: "publicity" as const, 
      year: "2025-26" as const 
    },
    
    // Technical
    { 
      id: "h9", 
      name: "Kunal Choure", 
      position: "head" as const, 
      role: "Technical Head", 
      image: getImageUrl("Kunal Choure"),
      domain: "technical" as const, 
      year: "2025-26" as const 
    },
    
    // Sports
    { 
      id: "h10", 
      name: "Prajjwal Mohan", 
      position: "head" as const, 
      role: "Sports Head", 
      image: getImageUrl("Prajjwal Mohan"),
      domain: "sports" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "h11", 
      name: "Akshat Sharma", 
      position: "head" as const, 
      role: "Sports Head", 
      image: getImageUrl("Akshat Sharma"),
      domain: "sports" as const, 
      year: "2025-26" as const 
    },
    
    // Social Media
    { 
      id: "h12", 
      name: "Ayush Dhote", 
      position: "head" as const, 
      role: "Social Media Head", 
      image: getImageUrl("Ayush Dhote"),
      domain: "social-media" as const, 
      year: "2025-26" as const 
    },
    
    // Photography
    { 
      id: "h13", 
      name: "Anshu Bagne", 
      position: "head" as const, 
      role: "Photography Head", 
      image: getImageUrl("Anshu Bagne"),
      domain: "photography" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "h14", 
      name: "Ayush Ambule", 
      position: "head" as const, 
      role: "Photography Head", 
      image: getImageUrl("Ayush Ambule"),
      domain: "photography" as const, 
      year: "2025-26" as const 
    },
    
    // Design
    { 
      id: "h15", 
      name: "Durva Deshpande", 
      position: "head" as const, 
      role: "Design Head", 
      image: getImageUrl("Durva Deshpande"),
      domain: "design" as const, 
      year: "2025-26" as const 
    },
    
    // Resource
    { 
      id: "h16", 
      name: "Jay Trivedi", 
      position: "head" as const, 
      role: "Resource Head", 
      image: getImageUrl("Jay Trivedi"),
      domain: "resource" as const, 
      year: "2025-26" as const 
    },

    // ==================== CO-HEADS (29 Members) ====================
    // LEADERSHIP
    { 
      id: "ch1", 
      name: "Kavya Chopade", 
      position: "co-head" as const, 
      role: "Joint Secretary", 
      image: getImageUrl("Kavya Chopade"),
      domain: "leadership" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch2", 
      name: "Janhavi Welekar", 
      position: "co-head" as const, 
      role: "Joint Secretary", 
      image: getImageUrl("Janhavi Welekar"),
      domain: "leadership" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch3", 
      name: "Swapnil Patil", 
      position: "co-head" as const, 
      role: "Joint Treasurer", 
      image: getImageUrl("Swapnil Patil"),
      domain: "leadership" as const, 
      year: "2025-26" as const 
    },
    
    // EXECUTIVE MEMBERS
    { 
      id: "ch28", 
      name: "Vedansh Gupta", 
      position: "co-head" as const, 
      role: "Executive Member", 
      image: getImageUrl("Vedansh Gupta"),
      domain: "executive-members" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch29", 
      name: "Parth Thakur", 
      position: "co-head" as const, 
      role: "Executive Member", 
      image: getImageUrl("Parth Thakur"),
      domain: "executive-members" as const, 
      year: "2025-26" as const 
    },
    
    // Events
    { 
      id: "ch4", 
      name: "Khush Agrawal", 
      position: "co-head" as const, 
      role: "Event Co-Head", 
      image: getImageUrl("khush Agrawal"),
      domain: "events" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch5", 
      name: "Manya Mokhalgaya", 
      position: "co-head" as const, 
      role: "Event Co-Head", 
      image: getImageUrl("Manya Mokhalgaya"),
      domain: "events" as const, 
      year: "2025-26" as const 
    },
    
    // Cultural
    { 
      id: "ch6", 
      name: "Gouri Rajkarne", 
      position: "co-head" as const, 
      role: "Cultural Co-Head", 
      image: getImageUrl("Gouri Rajkarne"),
      domain: "cultural" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch7", 
      name: "Krishna Chandak", 
      position: "co-head" as const, 
      role: "Cultural Co-Head", 
      image: getImageUrl("Krishna Chandak"),
      domain: "cultural" as const, 
      year: "2025-26" as const 
    },
    
    // Publicity
    { 
      id: "ch8", 
      name: "Ansh Chopda", 
      position: "co-head" as const, 
      role: "Publicity Co-Head", 
      image: getImageUrl("Ansh Chopda"),
      domain: "publicity" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch9", 
      name: "Rashi Pawar", 
      position: "co-head" as const, 
      role: "Publicity Co-Head", 
      image: getImageUrl("Rashi Pawar"),
      domain: "publicity" as const, 
      year: "2025-26" as const 
    },
    
    // Technical
    { 
      id: "ch10", 
      name: "Kanak Agrawal", 
      position: "co-head" as const, 
      role: "Technical Co-Head", 
      image: getImageUrl("Kanak Agrawal"),
      domain: "technical" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch11", 
      name: "Akshay Parihar", 
      position: "co-head" as const, 
      role: "Technical Co-Head", 
      image: getImageUrl("Akshay Parihar"),
      domain: "technical" as const, 
      year: "2025-26" as const 
    },
    
    // Creativity
    { 
      id: "ch12", 
      name: "Palak Ganwani", 
      position: "co-head" as const, 
      role: "Creativity Co-Head", 
      image: getImageUrl("Palak Ganwani"),
      domain: "creativity" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch13", 
      name: "Kshitij Chilate", 
      position: "co-head" as const, 
      role: "Creativity Co-Head", 
      image: getImageUrl("kshitij Chilate"),
      domain: "creativity" as const, 
      year: "2025-26" as const 
    },
    
    // Social Media
    { 
      id: "ch14", 
      name: "Aryaman Verma", 
      position: "co-head" as const, 
      role: "Social Media Co-Head", 
      image: getImageUrl("Aryaman Verma"),
      domain: "social-media" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch15", 
      name: "Prathamesh Rathod", 
      position: "co-head" as const, 
      role: "Social Media Co-Head", 
      image: getImageUrl("Prathamesh Rathod"),
      domain: "social-media" as const, 
      year: "2025-26" as const 
    },
    
    // Design
    { 
      id: "ch16", 
      name: "Rishil Pawar", 
      position: "co-head" as const, 
      role: "Design Co-Head", 
      image: getImageUrl("Rishil Pawar"),
      domain: "design" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch17", 
      name: "Prajakta Tiwari", 
      position: "co-head" as const, 
      role: "Design Co-Head", 
      image: getImageUrl("Prajakta Tiwari"),
      domain: "design" as const, 
      year: "2025-26" as const 
    },
    
    // Photography
    { 
      id: "ch18", 
      name: "Bhargav Lende", 
      position: "co-head" as const, 
      role: "Photography Co-Head", 
      image: getImageUrl("Bhargav Lende"),
      domain: "photography" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch19", 
      name: "Uday Chandak", 
      position: "co-head" as const, 
      role: "Photography Co-Head", 
      image: getImageUrl("Uday Chandak"),
      domain: "photography" as const, 
      year: "2025-26" as const 
    },
    
    // Sports
    { 
      id: "ch20", 
      name: "Anushka Chavan", 
      position: "co-head" as const, 
      role: "Sports Co-Head", 
      image: getImageUrl("Anushka Chavan"),
      domain: "sports" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch21", 
      name: "Tanmay Gaikwad", 
      position: "co-head" as const, 
      role: "Sports Co-Head", 
      image: getImageUrl("Tanmay Gaikwad"),
      domain: "sports" as const, 
      year: "2025-26" as const 
    },
    
    // Resource
    { 
      id: "ch22", 
      name: "Samarth Zawar", 
      position: "co-head" as const, 
      role: "Resource Co-Head", 
      image: getImageUrl("Samarth Zawar"),
      domain: "resource" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch23", 
      name: "Pranav Tapdiya", 
      position: "co-head" as const, 
      role: "Resource Co-Head", 
      image: getImageUrl("Pranav Tapdiya"),
      domain: "resource" as const, 
      year: "2025-26" as const 
    },
    
    // Venue
    { 
      id: "ch24", 
      name: "Piyush Chhagani", 
      position: "co-head" as const, 
      role: "Venue Incharge", 
      image: getImageUrl("Piyush Chhagani"),
      domain: "venue" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch25", 
      name: "Aditya Pandey", 
      position: "co-head" as const, 
      role: "Venue Incharge", 
      image: getImageUrl("Aditya Pandey"),
      domain: "venue" as const, 
      year: "2025-26" as const 
    },
    
    // Content & Outreach
    { 
      id: "ch26", 
      name: "Priyal Khandelwal", 
      position: "co-head" as const, 
      role: "Content & Outreach Incharge", 
      image: getImageUrl("Priyal Khandelwal"),
      domain: "content" as const, 
      year: "2025-26" as const 
    },
    { 
      id: "ch27", 
      name: "Anagha Bhattad", 
      position: "co-head" as const, 
      role: "Content & Outreach Incharge", 
      image: getImageUrl("Anagha Bhattad"),
      domain: "content" as const, 
      year: "2025-26" as const 
    }
  ];

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