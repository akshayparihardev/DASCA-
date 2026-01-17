import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events - Tech Workshops & Festivals | DASCA RBU',
  description: 'Explore 50+ annual events by DASCA including tech workshops, cultural festivals, sports championships, and skill development programs at Ramdeobaba University, Nagpur.',
  openGraph: {
    title: 'DASCA Events - Workshops, Festivals & Championships',
    description: '50+ annual events for 2000+ students at RBU Nagpur',
    url: 'https://dasca.in/events',
  },
}

"use client";

import React from 'react';
import UpcomingEvents from "@/components/events/UpcomingEvents";
import EventsTimeline from "@/components/events/EventsTimeline";
import HeroSection from '@/components/events/Herosection';

const EventsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
       {/* Hero / Header Section for Events */}
       {/* <div className="container mx-auto px-6 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our journey through past milestones and see what exciting events are coming up next.
          </p>
       </div> */}

       {/* Components */}
         <HeroSection />
       <UpcomingEvents />
       <EventsTimeline />
    </div>
  );
};

export default EventsPage;