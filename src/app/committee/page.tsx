"use client";

import { CommitteeMembersCarousel } from "@/components/CommitteeMembersCarousel";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

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
    // LEADERSHIP (President, Secretary, Treasurer)
    { id: "h1", name: "Harsh Saoji", position: "head" as const, role: "President", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", domain: "leadership" as const, year: "2025-26" as const },
    { id: "h2", name: "Aditya Gugnani", position: "head" as const, role: "Secretary", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", domain: "leadership" as const, year: "2025-26" as const },
    { id: "h3", name: "Mehansh Masih", position: "head" as const, role: "Treasurer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", domain: "leadership" as const, year: "2025-26" as const },
    
    // Events
    { id: "h4", name: "Alina Anjum", position: "head" as const, role: "Event Head", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", domain: "events" as const, year: "2025-26" as const },
    { id: "h5", name: "Ishan Kashikar", position: "head" as const, role: "Event Head", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop", domain: "events" as const, year: "2025-26" as const },
    
    // Cultural
    { id: "h6", name: "Palak Bang", position: "head" as const, role: "Cultural Head", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", domain: "cultural" as const, year: "2025-26" as const },
    
    // Creativity
    { id: "h7", name: "Niharika Nashine", position: "head" as const, role: "Creativity Head", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", domain: "creativity" as const, year: "2025-26" as const },
    
    // Publicity
    { id: "h8", name: "Pranay Rokade", position: "head" as const, role: "Publicity Head", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", domain: "publicity" as const, year: "2025-26" as const },
    
    // Technical
    { id: "h9", name: "Kunal Choure", position: "head" as const, role: "Technical Head", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop", domain: "technical" as const, year: "2025-26" as const },
    
    // Sports
    { id: "h10", name: "Prajjwal Mohan", position: "head" as const, role: "Sports Head", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop", domain: "sports" as const, year: "2025-26" as const },
    { id: "h11", name: "Akshat Sharma", position: "head" as const, role: "Sports Head", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop", domain: "sports" as const, year: "2025-26" as const },
    
    // Social Media
    { id: "h12", name: "Ayush Dhote", position: "head" as const, role: "Social Media Head", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop", domain: "social-media" as const, year: "2025-26" as const },
    
    // Photography
    { id: "h13", name: "Anshu Bagne", position: "head" as const, role: "Photography Head", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop", domain: "photography" as const, year: "2025-26" as const },
    { id: "h14", name: "Ayush Ambule", position: "head" as const, role: "Photography Head", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", domain: "photography" as const, year: "2025-26" as const },
    
    // Design
    { id: "h15", name: "Durva Deshpande", position: "head" as const, role: "Design Head", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop", domain: "design" as const, year: "2025-26" as const },
    
    // Resource
    { id: "h16", name: "Jay Trivedi", position: "head" as const, role: "Resource Head", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", domain: "resource" as const, year: "2025-26" as const },

    // ==================== CO-HEADS (29 Members) ====================
    // LEADERSHIP (Joint Secretaries + Joint Treasurer moved here)
    { id: "ch1", name: "Kavya Chopade", position: "co-head" as const, role: "Joint Secretary", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop", domain: "leadership" as const, year: "2025-26" as const },
    { id: "ch2", name: "Janhavi Welekar", position: "co-head" as const, role: "Joint Secretary", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop", domain: "leadership" as const, year: "2025-26" as const },
    { id: "ch3", name: "Swapnil Patil", position: "co-head" as const, role: "Joint Treasurer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", domain: "leadership" as const, year: "2025-26" as const },
    
    // EXECUTIVE MEMBERS (Only Vedansh Gupta and Parth Thakur)
    { id: "ch28", name: "Vedansh Gupta", position: "co-head" as const, role: "Executive Member", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", domain: "executive-members" as const, year: "2025-26" as const },
    { id: "ch29", name: "Parth Thakur", position: "co-head" as const, role: "Executive Member", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop", domain: "executive-members" as const, year: "2025-26" as const },
    
    // Events
    { id: "ch4", name: "Khush Agrawal", position: "co-head" as const, role: "Event Co-Head", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", domain: "events" as const, year: "2025-26" as const },
    { id: "ch5", name: "Manya Mokhalgaya", position: "co-head" as const, role: "Event Co-Head", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop", domain: "events" as const, year: "2025-26" as const },
    
    // Cultural
    { id: "ch6", name: "Gouri Rajkarne", position: "co-head" as const, role: "Cultural Co-Head", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", domain: "cultural" as const, year: "2025-26" as const },
    { id: "ch7", name: "Krishna Chandak", position: "co-head" as const, role: "Cultural Co-Head", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", domain: "cultural" as const, year: "2025-26" as const },
    
    // Publicity
    { id: "ch8", name: "Ansh Chopda", position: "co-head" as const, role: "Publicity Co-Head", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop", domain: "publicity" as const, year: "2025-26" as const },
    { id: "ch9", name: "Rashi Pawar", position: "co-head" as const, role: "Publicity Co-Head", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop", domain: "publicity" as const, year: "2025-26" as const },
    
    // Technical
    { id: "ch10", name: "Kanak Agrawal", position: "co-head" as const, role: "Technical Co-Head", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop", domain: "technical" as const, year: "2025-26" as const },
    { id: "ch11", name: "Akshay Parihar", position: "co-head" as const, role: "Technical Co-Head", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop", domain: "technical" as const, year: "2025-26" as const },
    
    // Creativity
    { id: "ch12", name: "Palak Ganwani", position: "co-head" as const, role: "Creativity Co-Head", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", domain: "creativity" as const, year: "2025-26" as const },
    { id: "ch13", name: "Kshitij Chilate", position: "co-head" as const, role: "Creativity Co-Head", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", domain: "creativity" as const, year: "2025-26" as const },
    
    // Social Media
    { id: "ch14", name: "Aryaman Verma", position: "co-head" as const, role: "Social Media Co-Head", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", domain: "social-media" as const, year: "2025-26" as const },
    { id: "ch15", name: "Prathamesh Rathod", position: "co-head" as const, role: "Social Media Co-Head", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop", domain: "social-media" as const, year: "2025-26" as const },
    
    // Design
    { id: "ch16", name: "Rishil Pawar", position: "co-head" as const, role: "Design Co-Head", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop", domain: "design" as const, year: "2025-26" as const },
    { id: "ch17", name: "Prajakta Tiwari", position: "co-head" as const, role: "Design Co-Head", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", domain: "design" as const, year: "2025-26" as const },
    
    // Photography
    { id: "ch18", name: "Bhargav Lende", position: "co-head" as const, role: "Photography Co-Head", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop", domain: "photography" as const, year: "2025-26" as const },
    { id: "ch19", name: "Uday Chandak", position: "co-head" as const, role: "Photography Co-Head", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", domain: "photography" as const, year: "2025-26" as const },
    
    // Sports
    { id: "ch20", name: "Anushka Chavan", position: "co-head" as const, role: "Sports Co-Head", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop", domain: "sports" as const, year: "2025-26" as const },
    { id: "ch21", name: "Tanmay Gaikwad", position: "co-head" as const, role: "Sports Co-Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", domain: "sports" as const, year: "2025-26" as const },
    
    // Resource
    { id: "ch22", name: "Samarth Zawar", position: "co-head" as const, role: "Resource Co-Head", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop", domain: "resource" as const, year: "2025-26" as const },
    { id: "ch23", name: "Pranav Tapdiya", position: "co-head" as const, role: "Resource Co-Head", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop", domain: "resource" as const, year: "2025-26" as const },
    
    // Venue
    { id: "ch24", name: "Piyush Chhagani", position: "co-head" as const, role: "Venue Incharge", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", domain: "venue" as const, year: "2025-26" as const },
    { id: "ch25", name: "Aditya Pandey", position: "co-head" as const, role: "Venue Incharge", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop", domain: "venue" as const, year: "2025-26" as const },
    
    // Content & Outreach
    { id: "ch26", name: "Priyal Khandelwal", position: "co-head" as const, role: "Content & Outreach Incharge", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", domain: "content" as const, year: "2025-26" as const },
    { id: "ch27", name: "Anagha Bhattad", position: "co-head" as const, role: "Content & Outreach Incharge", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop", domain: "content" as const, year: "2025-26" as const },
  ];

  const filteredBySearch = searchQuery.trim()
    ? members.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : members;

  return (
    <div className="min-h-screen">
      
      {/* Stunning Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity }}
        className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div 
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
            style={{ 
              background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
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
              background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
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
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{ 
              background: "radial-gradient(circle, rgba(234,179,8,0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
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
              className="inline-flex items-center justify-center mb-8"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full" />
                <Sparkles className="relative w-16 h-16 text-blue-400" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Title with Gradient Text */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Our Committee
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Meet the passionate individuals driving{" "}
              <span className="text-blue-400 font-semibold">DASCA</span> forward
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative group">
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500" />
                
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                  <input
                    type="text"
                    placeholder="Search by name or role (e.g., Harsh Saoji, President, Technical Head)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-14 py-5 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:bg-white/15 transition-all text-base font-medium shadow-2xl"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Search Results Count */}
              {searchQuery && (
                <motion.p 
                  className="mt-4 text-sm text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Found <span className="text-blue-400 font-semibold">{filteredBySearch.length}</span> member
                  {filteredBySearch.length !== 1 ? 's' : ''}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                  fill="rgb(249 250 251)" 
                  className="transition-colors duration-300"
            />
          </svg>
        </div>
      </motion.section>

      {/* Committee Carousel Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <CommitteeMembersCarousel members={filteredBySearch} loop={true} />
        </div>
      </section>
    </div>
  );
}