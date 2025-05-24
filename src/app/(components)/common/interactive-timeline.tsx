// src/app/(components)/common/interactive-timeline.tsx
"use client";

import type { TimelineEvent } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverFadeText } from '@/app/(components)/common/hover-fade-text';

interface InteractiveTimelineProps {
  events: TimelineEvent[];
}

export function InteractiveTimeline({ events }: InteractiveTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full" aria-hidden="true"></div>

      {events.map((event, index) => (
        <div key={event.id} className="mb-12 flex items-start group">
          {/* Dot and Year - Desktop: alternating, Mobile: always on left */}
          <div className={`relative flex-shrink-0 w-12 sm:w-auto sm:order-${index % 2 === 0 ? 1 : 2} flex flex-col items-center sm:items-start sm:mr-${index % 2 === 0 ? 8 : 0} sm:ml-${index % 2 !== 0 ? 8 : 0}`}>
            <div className="absolute left-6 sm:left-auto sm:right-auto top-1.5 -translate-x-1/2 sm:translate-x-0 z-10">
               <div className={`w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-accent transition-all duration-300`}>
                <event.Icon className={`w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300`} />
              </div>
            </div>
            <div className={`hidden sm:block mt-14 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} w-24`}>
              {event.year}
            </div>
          </div>
          
          {/* Card Content - Desktop: alternating, Mobile: to the right of dot */}
          <div className={`ml-10 sm:ml-0 sm:order-${index % 2 === 0 ? 2 : 1} flex-grow ${index % 2 === 0 ? 'sm:pl-4' : 'sm:pr-4 sm:text-right'}`}>
            <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 transform hover:-translate-y-1 group-hover:border-accent border-transparent border">
              <CardHeader className={index % 2 !== 0 ? 'sm:text-right' : ''}>
                <div className="sm:hidden text-sm font-semibold text-muted-foreground mb-1">{event.year}</div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                  <HoverFadeText text={event.title} />
                </CardTitle>
              </CardHeader>
              <CardContent className={index % 2 !== 0 ? 'sm:text-right' : ''}>
                <p className="text-foreground/80">{event.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
