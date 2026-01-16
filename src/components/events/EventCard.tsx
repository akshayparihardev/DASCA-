"use client";

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
    <div className="group h-full flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Upcoming Badge */}
        {isUpcoming && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-teal text-white text-xs font-bold shadow-md tracking-wide uppercase">
            Upcoming
          </div>
        )}
        {/* Date Badge (if provided) */}
        {date && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-zinc-800 text-xs font-semibold shadow-sm">
            {date}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-tight">
          {title}
        </h3>
        
        {/* Type / Category (Teal Text) */}
        {type && (
          <span className="text-brand-teal text-sm font-semibold mb-3 block">
            {type}
          </span>
        )}
        
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {description}
        </p>

        {/* Learn More Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-fit border-brand-teal/30 text-brand-teal hover:bg-brand-teal hover:text-white transition-colors rounded-full px-6 group/btn"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-0 overflow-hidden">
            <div className="relative h-64 w-full">
               <img src={image} alt={title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <DialogHeader className="absolute bottom-4 left-6 right-6 text-white">
                 <DialogTitle className="font-heading text-2xl md:text-3xl font-bold">{title}</DialogTitle>
                 {type && <p className="text-brand-cyan font-medium mt-1">{type}</p>}
               </DialogHeader>
            </div>
            
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base md:text-lg">
                {fullDescription || description}
              </p>
              {date && (
                 <div className="inline-flex items-center px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
                   Event Date: {date}
                 </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EventCard;