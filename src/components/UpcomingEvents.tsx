import EventCard from "./EventCard";
import { Zap } from "lucide-react";

const upcomingEvents = [
  {
    title: "Aakruti – Upcoming Edition",
    description:
      "DASCA is gearing up for the next edition of Aakruti, our annual flagship student fest.",
    fullDescription:
      "DASCA is gearing up for the next edition of Aakruti, our annual flagship student fest. The event promises an exciting blend of technical learning, creativity, competitions, and cultural experiences. More details will be revealed soon — stay tuned for what's coming next!",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    type: "Flagship Student Fest",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Coming Soon
          </span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Upcoming Events
        </h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Don't miss out on these exciting opportunities to learn, connect, and
          grow with the DASCA community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.title}
              className="animate-fade-in"
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
