"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Users, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from event planning to execution."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and new ideas, constantly pushing boundaries to create unique experiences."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong relationships across all domains."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are driven by genuine enthusiasm and dedication to making a positive impact on campus life."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      {/* HERO SECTION */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        <div className="relative z-10 text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter">
              ABOUT US
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent" />
              <p className="text-xl md:text-2xl text-gray-300 font-light tracking-[0.3em]">
                DASCA
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The heartbeat of campus culture and creativity
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* WHAT IS DASCA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              What is DASCA?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p className="text-xl text-gray-900 font-semibold">
              DASCA (Department/Division of Arts, Sports and Cultural Activities) is the student-run 
              committee responsible for organizing and managing all cultural, sports, and 
              extracurricular activities at [Your Institution Name].
            </p>
            
            <p>
              We are the beating heart of campus life, bringing together students from diverse 
              backgrounds to create unforgettable experiences through events, competitions, 
              festivals, and initiatives that enrich the academic journey.
            </p>

            <p>
              Our diverse team works across specialized departments—from organizing spectacular 
              cultural festivals and technical symposiums to intimate workshops and competitive 
              sports tournaments. Every event we create is designed to celebrate talent, foster 
              community, and build lasting memories.
            </p>

            <p>
              DASCA is more than an event committee; it's a platform for leadership, creativity, 
              teamwork, and personal growth. We believe in creating an inclusive space where 
              every student can discover their potential, showcase their talents, and contribute 
              to a vibrant campus culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl opacity-10" />
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the catalyst for a vibrant, inclusive, and inspiring campus culture 
                  where every student discovers their potential, celebrates diversity, and 
                  creates memories that last a lifetime.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-10" />
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To organize exceptional events and activities that:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Foster creativity, innovation, and excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Build a strong sense of community and belonging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Provide platforms for skill development and leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Celebrate diverse talents and perspectives</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every event we organize
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Join the DASCA Family
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Applications for the next committee open annually. Be part of creating 
              unforgettable experiences and making a lasting impact on campus life.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform">
              Get Notified for Recruitment
            </button>
          </motion.div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}