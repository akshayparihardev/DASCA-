"use client";

import React from "react";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

export function Timeline({ data }: { data: TimelineItem[] }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* CENTER LINE */}
      <div className="absolute left-4 top-0 h-full w-px bg-neutral-800 md:left-1/2" />

      <div className="space-y-24">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* DOT */}
            <div className="absolute left-4 top-2 md:left-1/2">
              <span className="block h-3 w-3 -translate-x-1/2 rounded-full bg-white" />
            </div>

            {/* YEAR */}
            <div className="w-full pl-12 md:w-1/2 md:px-12">
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>
            </div>

            {/* CONTENT CARD */}
            <div className="mt-6 w-full pl-12 md:mt-0 md:w-1/2 md:px-12">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 shadow-[0_0_24px_rgba(0,0,0,0.6)]">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
