"use client";

import { Calendar, History } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

/* =========================
   EVENTS PAGE (MERGED)
   ========================= */

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-pattern overflow-hidden">
        {/* floating dots */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-primary opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-primary opacity-50" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              DASCA Events
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Where <span className="gradient-text">Data Science</span> Meets
            Innovation
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our journey of workshops, talks, competitions and
            collaborations that shape the future of data science.
          </p>
        </div>
      </section>

      {/* ================= UPCOMING EVENTS ================= */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="font-heading text-3xl font-semibold mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Alumni Talk",
              date: "March 2026",
            },
            {
              title: "Industry Interview Session",
              date: "April 2026",
            },
            {
              title: "Sports & Tech Meetup",
              date: "May 2026",
            },
          ].map((event, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PAST EVENTS (TIMELINE) ================= */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12 flex items-center gap-3">
          <History className="w-6 h-6 text-primary" />
          <h2 className="font-heading text-3xl font-semibold">
            Past Events
          </h2>
        </div>

        <Timeline
          data={[
            {
              title: "2026",
              content: (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Alumni Interaction & Career Guidance</li>
                  <li>• Advanced AI Workshops</li>
                  <li>• Industry Collaboration Events</li>
                </ul>
              ),
            },
            {
              title: "2025",
              content: (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Machine Learning Bootcamp</li>
                  <li>• Case Study Competitions</li>
                  <li>• Guest Lecture Series</li>
                </ul>
              ),
            },
            {
              title: "2024",
              content: (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• DASCA Installation Ceremony</li>
                  <li>• Python for Data Science</li>
                  <li>• Introductory Tech Talks</li>
                </ul>
              ),
            },
          ]}
        />
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center">
        <p className="text-muted-foreground mb-2">
          Have an event idea?
        </p>
        <a
          href="#contact"
          className="gradient-text font-heading font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          Get in touch with the DASCA team →
        </a>
      </section>

    </main>
  );
}
