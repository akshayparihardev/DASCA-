import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface EventCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  date?: string;
  type?: string;
  isUpcoming?: boolean;
}

const EventCard = ({
  title,
  description,
  fullDescription,
  image,
  date,
  type,
  isUpcoming = false,
}: EventCardProps) => {
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
        <h3 className="font-heading text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {title}
        </h3>
        {type && (
          <span className="text-primary text-xs font-medium">{type}</span>
        )}
        <p className="text-muted-foreground text-sm mb-4 mt-2 line-clamp-2">
          {description}
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="group/btn border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">
                {title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex flex-wrap gap-2">
                {date && (
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    {date}
                  </span>
                )}
                {type && (
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {type}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {fullDescription || description}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EventCard;
