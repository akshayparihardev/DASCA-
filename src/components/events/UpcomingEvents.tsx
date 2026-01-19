"use client";

import EventCard from "./EventCard";
import { Zap } from "lucide-react";

const upcomingEvents = [
  {
    title: "Aakruti – Upcoming Edition",
    description:
      "DASCA is gearing up for the next edition of Aakruti, our annual flagship student fest.",
    fullDescription:
      "DASCA is gearing up for the next edition of Aakruti, our annual flagship student fest. The event promises an exciting blend of technical learning, creativity, competitions, and cultural experiences. More details will be revealed soon — stay tuned for what's coming next!",
    image: "/Aakruti26.jpeg",
    type: "Flagship Student Fest",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-24 px-6 bg-[#F9FAFB] dark:bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-md bg-brand-teal/10">
                <Zap className="w-4 h-4 text-brand-teal" />
              </div>
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest">
                Coming Soon
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
              Upcoming Events
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl text-lg">
              Don't miss out on these exciting opportunities to learn, connect,
              and grow with the DASCA community.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EventCard {...event} isUpcoming />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
