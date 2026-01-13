import { Timeline } from "@/components/ui/timeline";
import EventCard from "./EventCard";
import { History } from "lucide-react";

interface TimelineEvent {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  date?: string;
  type?: string;
}

const eventsData: Record<string, TimelineEvent[]> = {
  "2026": [
    {
      title: "DSPL",
      description:
        "Exciting new initiatives are being planned for 2026. Stay tuned for updates!",
      fullDescription:
        "DASCA is planning exciting new initiatives and events for 2026. More details will be announced soon. Stay connected with us to be the first to know about upcoming workshops, fests, and learning opportunities.",
      image: "/events/Sports.jpeg",
      type: "Coming Soon",
    },
  ],
  "2025": [
    {
      title: "Aakruti'25 – Annual Student Fest",
      description:
        "DASCA's flagship three-day student fest blending technical learning, creativity, and cultural engagement.",
      fullDescription:
        "Aakruti'25 was DASCA's flagship three-day student fest blending technical learning, creativity, and cultural engagement. The event included industry sessions, resume workshops, e-sports tournaments, cultural nights, and inter-section competitions. With high participation across departments, Aakruti'25 fostered collaboration, talent showcase, and an engaging campus experience.",
      image: "/events/Interview.jpeg",
      type: "Technical, Cultural & Creative Fest",
    },
    {
      title: "DASCA Installation Ceremony 2025",
      description:
        "The formal induction of the new committee and the launch of initiatives for the academic year.",
      fullDescription:
        "The DASCA Installation Ceremony 2025 marked the formal induction of the new committee and the launch of initiatives for the academic year. The event featured addresses by faculty members and student leaders, highlighting DASCA's journey, vision, and future roadmap. Insightful discussions on technology trends and leadership set the tone for a year focused on learning, innovation, and collaboration.",
      image: "/events/Installation3.jpeg",
      type: "Committee Induction & Vision Launch",
    },
    {
      title: "Alumni Interaction Session",
      description:
        "Insightful alumni interaction with former club president and industry professional Aadi Amit Ringay.",
      fullDescription:
        "DASCA hosted an insightful alumni interaction with former club president and industry professional Aadi Amit Ringay (SDE, Amadeus). The session focused on placement preparation, core technical subjects, internships, and interview strategies. Students actively engaged in discussions, gaining practical guidance and motivation for their career journeys.",
      image: "/events/Alumni talk.jpeg",
      type: "Career Guidance & Mentorship",
    },
    {
      title: "Technical Training: Python & SQL",
      description:
        "Hands-on training session focused on strengthening Python and SQL fundamentals for placement readiness.",
      fullDescription:
        "This hands-on training session focused on strengthening Python and SQL fundamentals for placement readiness. The session included concept coverage, live problem-solving, assessments, and a mini project (Expense Tracker Platform). High engagement, practical exposure, and positive feedback highlighted the session's strong impact on student learning.",
      image: "/events/Tech session1.jpeg",
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
      image: "/events/Installation1.jpeg",
      type: "Formal Induction & Academic Roadmap",
    },
    {
      title: "Aakruti'24 – Student Fest",
      description:
        "A vibrant student-led fest featuring a mix of technical activities, competitions, and cultural events.",
      fullDescription:
        "Aakruti'24 was a vibrant student-led fest featuring a mix of technical activities, competitions, and cultural events. The event encouraged creativity, teamwork, and student engagement across batches and departments, strengthening DASCA's role in fostering both technical growth and campus culture.",
      image: "/events/Interview.jpeg",
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
      image: "/events/Installation2.jpeg",
      type: "Committee Induction & Vision Setting",
    },
    {
      title: "DSPL",
      description:
        "Hands-on training session focused on strengthening Python and SQL fundamentals for placement readiness.",
      fullDescription:
        "This hands-on training session focused on strengthening Python and SQL fundamentals for placement readiness. The session included concept coverage, live problem-solving, assessments, and a mini project (Expense Tracker Platform). High engagement, practical exposure, and positive feedback highlighted the session's strong impact on student learning.",
      image: "/events/Sports.jpeg",
      type: "Skill Development & Placement Training",
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
