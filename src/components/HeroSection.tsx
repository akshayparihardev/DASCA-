import { Calendar, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center hero-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-accent animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-primary animate-float opacity-50" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 animate-fade-in">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">DASCA Events</span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Where <span className="gradient-text">Data Science</span>
          <br />
          Comes to Life
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Explore workshops, hackathons, and networking events that shape the future of data science at our college.
        </p>
        
        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Scroll to explore our events</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
