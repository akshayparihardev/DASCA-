"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Filter, ChevronDown } from "lucide-react";
import React, { useEffect, useState, useMemo } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/committee-ui/carousel";

export type PositionType = "head" | "co-head";
export type YearType = "2025-26" | "2024-25" | "2023-24" | "2022-23";
export type DomainType = 
  | "all-domains"
  | "leadership"
  | "executive-members"
  | "events"
  | "cultural"
  | "technical"
  | "creativity"
  | "publicity"
  | "social-media"
  | "photography"
  | "design"
  | "sports"
  | "resource"
  | "venue"
  | "content";

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  image: string;
  position: PositionType;
  domain: DomainType;
  year: YearType;
  committee?: string;
}

export interface CommitteeMembersCarouselProps {
  members: CommitteeMember[];
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
}

const CommitteeMembersCarousel = ({
  members,
  className,
  autoplay = false,
  loop = true,
}: CommitteeMembersCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [activeYear, setActiveYear] = useState<YearType>("2025-26");
  const [activeDomain, setActiveDomain] = useState<DomainType>("all-domains");
  const [activePosition, setActivePosition] = useState<PositionType | "all">("head");
  const [showDomainDropdown, setShowDomainDropdown] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  // Filter members based on all criteria
  const filteredMembers = useMemo(() => {
    let filtered = members;

    // Year filter
    filtered = filtered.filter((member) => member.year === activeYear);

    // Domain filter
    if (activeDomain !== "all-domains") {
      filtered = filtered.filter((member) => member.domain === activeDomain);
    }

    // Position filter
    if (activePosition !== "all") {
      filtered = filtered.filter((member) => member.position === activePosition);
    }

    // Sort: Heads first, then Co-heads
    return filtered.sort((a, b) => {
      if (a.position === "head" && b.position === "co-head") return -1;
      if (a.position === "co-head" && b.position === "head") return 1;
      return 0;
    });
  }, [members, activeYear, activeDomain, activePosition]);

  // Calculate counts
  const counts = useMemo(() => {
    const yearFiltered = members.filter(m => m.year === activeYear);
    
    const domainFiltered = activeDomain === "all-domains"
      ? yearFiltered
      : yearFiltered.filter(m => m.domain === activeDomain);

    return {
      all: domainFiltered.length,
      heads: domainFiltered.filter((m) => m.position === "head").length,
      coHeads: domainFiltered.filter((m) => m.position === "co-head").length,
    };
  }, [members, activeYear, activeDomain]);

  // Domain list with readable names
  const domains: { value: DomainType; label: string }[] = [
    { value: "all-domains", label: "All Domains" },
    { value: "leadership", label: "Leadership" },
    { value: "executive-members", label: "Executive Members" },
    { value: "events", label: "Events" },
    { value: "cultural", label: "Cultural" },
    { value: "technical", label: "Technical" },
    { value: "creativity", label: "Creativity" },
    { value: "publicity", label: "Publicity" },
    { value: "social-media", label: "Social Media" },
    { value: "photography", label: "Photography" },
    { value: "design", label: "Design" },
    { value: "sports", label: "Sports" },
    { value: "resource", label: "Resource" },
    { value: "venue", label: "Venue Management" },
    { value: "content", label: "Content & Outreach" },
  ];

  const years: { value: YearType; label: string }[] = [
    { value: "2025-26", label: "2025-26" },
    { value: "2024-25", label: "2024-25" },
  ];

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleYearChange = (year: YearType) => {
    if (activeYear === year && activeYear !== "2025-26") {
      setActiveYear("2025-26");
    } else {
      setActiveYear(year);
    }
    api?.scrollTo(0);
  };

  const handleDomainChange = (domain: DomainType) => {
    setActiveDomain(domain);
    setShowDomainDropdown(false);
    api?.scrollTo(0);
  };

  const handlePositionChange = (position: PositionType | "all") => {
    if (activePosition === position) {
      setActivePosition("all");
    } else {
      setActivePosition(position);
    }
    api?.scrollTo(0);
  };

  const handleImageLoad = (memberId: string) => {
    setImageLoaded(prev => ({ ...prev, [memberId]: true }));
  };

  return (
    <div className="relative w-full">
      {/* Background Extension */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 -z-10" />
      
      <div className="space-y-8 pb-20 pt-8">
        {/* Filters Row - Year + Domain */}
        <div className="flex flex-wrap items-center justify-center gap-4 px-4">
          {/* Year Filter */}
          <div className="inline-flex rounded-full bg-gradient-to-r from-gray-800 to-gray-900 p-1.5 shadow-xl">
            {years.map((year) => (
              <button
                key={year.value}
                onClick={() => handleYearChange(year.value)}
                className={cn(
                  "px-6 py-3 text-sm font-bold transition-all rounded-full whitespace-nowrap",
                  activeYear === year.value
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
              >
                {year.label}
              </button>
            ))}
          </div>

          {/* Domain Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDomainDropdown(!showDomainDropdown)}
              className={cn(
                "inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg border-2 whitespace-nowrap",
                activeDomain === "all-domains"
                  ? "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  : "bg-gray-900 text-white border-gray-900"
              )}
            >
              <span>
                {domains.find(d => d.value === activeDomain)?.label}
              </span>
              <ChevronDown 
                className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  showDomainDropdown && "rotate-180"
                )} 
              />
            </button>

            {/* Dropdown Menu */}
            {showDomainDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden z-50"
              >
                <div className="max-h-[400px] overflow-y-auto">
                  {domains.map((domain) => (
                    <button
                      key={domain.value}
                      onClick={() => handleDomainChange(domain.value)}
                      className={cn(
                        "w-full px-5 py-3 text-left text-sm font-semibold transition-colors",
                        activeDomain === domain.value
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {domain.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Position Filter */}
        <div className="flex justify-center px-4">
          <div className="inline-flex rounded-full bg-white p-1.5 shadow-md border-2 border-gray-200">
            <button
              onClick={() => handlePositionChange("head")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all",
                activePosition === "head"
                  ? "bg-black text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              Heads
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-xs font-bold",
                  activePosition === "head"
                    ? "bg-white/20 text-white"
                    : "bg-gradient-to-r from-yellow-400 to-orange-400 text-white"
                )}
              >
                {counts.heads}
              </span>
            </button>

            <button
              onClick={() => handlePositionChange("co-head")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all",
                activePosition === "co-head"
                  ? "bg-black text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              Co-Heads
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-xs font-bold",
                  activePosition === "co-head"
                    ? "bg-white/20 text-white"
                    : "bg-gradient-to-r from-blue-400 to-cyan-400 text-white"
                )}
              >
                {counts.coHeads}
              </span>
            </button>

            <button
              onClick={() => setActivePosition("all")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all",
                activePosition === "all"
                  ? "bg-black text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              All Members
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-xs font-bold",
                  activePosition === "all"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-700"
                )}
              >
                {counts.all}
              </span>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          key={`${activeYear}-${activeDomain}-${activePosition}`}
          setApi={setApi}
          className={cn("w-full pt-6", className)}
          opts={{ loop, slidesToScroll: 1 }}
          plugins={
            autoplay
              ? [
                  Autoplay({
                    delay: 2000,
                    stopOnInteraction: true,
                  }),
                ]
              : []
          }
        >
          <CarouselContent className="-ml-6">
            {filteredMembers.map((member, index) => (
              <CarouselItem
                key={member.id}
                className="pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div className="relative mx-auto h-[520px] w-[340px] overflow-hidden rounded-3xl bg-white shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      {/* Skeleton Loader */}
                      {!imageLoaded[member.id] && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                      )}
                      
                      <img
                        src={member.image}
                        alt={member.name}
                        className={cn(
                          "h-full w-full object-cover transition-opacity duration-300",
                          imageLoaded[member.id] ? "opacity-100" : "opacity-0"
                        )}
                        loading={index < 3 ? "eager" : "lazy"}
                        decoding="async"
                        onLoad={() => handleImageLoad(member.id)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                    </div>

                    {/* DASCA Strip */}
                    <div className="absolute left-0 top-0 flex h-full w-16 items-center justify-center bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg">
                      <div
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        <span className="text-4xl font-black tracking-[0.2em] text-[#0f2626]">
                          DASCA
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative ml-16 flex h-full flex-col justify-end pb-8 px-6">
                      <div className="mb-3">
                        <h2 className="text-3xl font-black uppercase leading-none tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                          {member.name}
                        </h2>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-[#f0e6d2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                          {member.role}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-white/30"></div>
                        <span className="text-xs font-semibold tracking-widest text-white/70">
                          {member.year}
                        </span>
                        <div className="h-px flex-1 bg-white/30"></div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className={cn(
                      "absolute right-4 top-4 rounded-full backdrop-blur-sm px-4 py-2 border shadow-lg",
                      member.position === "head"
                        ? "bg-gradient-to-r from-yellow-400/90 to-orange-400/90 border-yellow-300"
                        : "bg-gradient-to-r from-blue-400/90 to-cyan-400/90 border-blue-300"
                    )}>
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {member.position === "head" ? "Head" : "Co-Head"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-between px-6">
            <button
              aria-label="Previous slide"
              onClick={() => api?.scrollPrev()}
              className="rounded-full bg-black p-3 text-white shadow-lg hover:scale-105 transition disabled:opacity-50"
              disabled={!loop && current === 0}
            >
              <ChevronLeft />
            </button>

            <span className="text-sm font-medium text-gray-600">
              {current + 1} / {filteredMembers.length}
            </span>

            <button
              aria-label="Next slide"
              onClick={() => api?.scrollNext()}
              className="rounded-full bg-black p-3 text-white shadow-lg hover:scale-105 transition disabled:opacity-50"
              disabled={!loop && current === filteredMembers.length - 1}
            >
              <ChevronRight />
            </button>
          </div>
        </Carousel>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="flex h-64 items-center justify-center">
            <div className="text-center">
              <Filter className="mx-auto mb-2 h-12 w-12 text-gray-400" />
              <p className="text-lg font-medium text-gray-600">
                No members found
              </p>
              <p className="text-sm text-gray-500">
                Try adjusting your filters
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { CommitteeMembersCarousel };