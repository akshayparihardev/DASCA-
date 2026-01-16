import { Calendar, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] w-full flex items-center justify-center hero-pattern overflow-hidden bg-background">
      
      {/* --- Decorative Floating Elements --- */}
      {/* Top Left Teal Dot */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-brand-teal animate-float opacity-60" />
      {/* Top Right Cyan Dot */}
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-brand-cyan animate-float opacity-40" style={{ animationDelay: '1s' }} />
      {/* Bottom Left Teal Dot */}
      <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-brand-teal animate-float opacity-50" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* --- Badge --- */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm transition-transform hover:scale-105">
            <Calendar className="w-4 h-4 text-brand-teal" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">DASCA Events</span>
          </div>
        </div>
        
        {/* --- Main Heading --- */}
        {/* Note: 'font-[Outfit]' applies the specific font from the image manually if not in config */}
        <h1 className="font-['Outfit',sans-serif] text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight animate-fade-in-up text-foreground" style={{ animationDelay: '0.1s' }}>
          Where <span className="gradient-text font-bold">Data Science</span>
          <br />
          Comes to Life
        </h1>
        
        {/* --- Subtext --- */}
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Explore workshops, hackathons, and networking events that shape the future of data science at our college.
        </p>
        
        {/* --- Scroll Trigger --- */}
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-brand-teal animate-fade-in-up cursor-pointer hover:text-brand-cyan transition-colors" style={{ animationDelay: '0.3s' }}>
          <Sparkles className="w-4 h-4" />
          <span className="uppercase tracking-wide text-xs">Scroll to explore our events</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;