// src/app/(components)/sections/about-me-section.tsx
"use client";

import { InteractiveTimeline } from '@/app/(components)/common/interactive-timeline';
import { timelineEvents, currentProfession } from '@/lib/data';
import { HoverFadeText } from '@/app/(components)/common/hover-fade-text';

export function AboutMeSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HoverFadeText 
            as="h2" 
            text="About Me" 
            className="text-4xl font-bold tracking-tight text-primary sm:text-5xl" 
          />
          <HoverFadeText 
            as="p" 
            text={`My journey as an ${currentProfession.toLowerCase()}, key milestones, and inspirations.`}
            className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80" 
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <InteractiveTimeline events={timelineEvents} />
        </div>
      </div>
    </section>
  );
}
