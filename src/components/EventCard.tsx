import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
  isUpcoming?: boolean;
}

const EventCard = ({ title, description, image, date, isUpcoming = false }: EventCardProps) => {
  return (
    <div className="group card-glow rounded-lg overflow-hidden bg-card border border-border">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isUpcoming && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            Upcoming
          </div>
        )}
        {date && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium">
            {date}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="group/btn border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
