import { Timeline } from "@/components/ui/timeline";
import EventCard from "./EventCard";
import { History } from "lucide-react";

interface TimelineEvent {
  title: string;
  description: string;
  image: string;
  date: string;
}

const eventsData: Record<string, TimelineEvent[]> = {
  "2024": [
    {
      title: "Invite",
      description:
        "dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text.",
      image: "/events/Installation4.jpeg",
      date: "Nov 2024",
    },
    {
      title: "Python for Data Science Workshop",
      description:
        "Hands-on workshop covering pandas, numpy, and data visualization fundamentals.",
      image: "/events/Tech session1.jpeg",
      date: "Sep 2024",
    },
    {
      title: "DASCA Sports Branch Cup",
      description:
        "Annual sports event fostering team spirit and healthy competition among members.",
      image: "/events/Sports.jpeg",
      date: "Aug 2024",
    },
  ],
  "2023": [
    {
      title: "SQL session",
      description:
        "dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text.",
      image: "/events/Tech session2.jpeg",
      date: "Oct 2023",
    },
    {
      title: "Alumni Talk",
      description:
        "dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text.",
      image: "/events/Alumni talk.jpeg",
      date: "Jul 2023",
    },
  ],
  "2022": [
    {
      title: "Interviews",
      description:
        "dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text.",
      image: "/events/Interview.jpeg",
      date: "Mar 2022",
    },
  ],
};

const EventsTimeline = () => {
  const timelineData = Object.entries(eventsData).map(([year, events]) => ({
    title: year,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    ),
  }));

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <History className="w-5 h-5 text-primary" />
          </div>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Journey
          </span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Past Events
        </h2>
        <p className="text-muted-foreground max-w-xl mb-8">
          A look back at the memorable moments and impactful events that have
          shaped our community.
        </p>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default EventsTimeline;
