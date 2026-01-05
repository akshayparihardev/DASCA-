import HeroSection from "@/components/HeroSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import EventsTimeline from "@/components/EventsTimeline";

const Events = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <UpcomingEvents />
      <EventsTimeline />
      
      {/* Footer CTA */}
      <section className="py-16 px-6 text-center">
        <p className="text-muted-foreground mb-2">Have an event idea?</p>
        <a
          href="#contact"
          className="gradient-text font-heading font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          Get in touch with the DASCA team →
        </a>
      </section>
    </main>
  );
};

export default Events;
