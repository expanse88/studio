// src/app/(components)/sections/my-process-section.tsx
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { processUpdates as initialProcessUpdates, type ProcessUpdate } from '@/lib/data';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export function MyProcessSection() {
  const [updates, setUpdates] = useState<ProcessUpdate[]>(initialProcessUpdates);

  // Simulate real-time updates (remove this in a real Firebase integration)
  useEffect(() => {
    const intervalId = setInterval(() => {
      // This is a mock update. In a real app, this would come from Firestore.
      const newUpdate: ProcessUpdate = {
        id: `update-${Date.now()}`,
        type: 'thought',
        Icon: initialProcessUpdates[3].Icon, // Re-use an icon
        title: 'New Epiphany!',
        content: 'Just had a brilliant idea for the next phase of Project X. It involves more interactive elements and user-driven narrative choices.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setUpdates(prevUpdates => [newUpdate, ...prevUpdates.slice(0, 4)]); // Keep last 5 updates
    }, 30000); // Add a new "thought" every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="process" className="py-16 sm:py-24 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">My Process Revealed</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A glimpse into my creative workflow and current explorations.
          </p>
        </div>
        
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex w-max space-x-6">
            {updates.map((update) => (
              <Card key={update.id} className="w-[300px] sm:w-[350px] flex-shrink-0 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <update.Icon className="h-6 w-6 text-accent" />
                    <CardTitle className="text-xl">{update.title}</CardTitle>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground">{update.timestamp}</CardDescription>
                </CardHeader>
                <CardContent>
                  {update.type === 'code' && (
                    <pre className="bg-muted/50 p-3 rounded-md overflow-x-auto text-sm">
                      <code className="font-mono">{update.content}</code>
                    </pre>
                  )}
                  {update.type === 'art' && update.imageUrl && (
                    <>
                      <Image
                        src={update.imageUrl}
                        alt={update.title}
                        width={300}
                        height={200}
                        className="rounded-md object-cover mb-2 border border-border"
                        data-ai-hint={update.placeholderHint || "concept art"}
                      />
                      <p className="text-sm text-foreground/90">{update.content}</p>
                    </>
                  )}
                  {update.type === 'video_log' && update.videoUrl && (
                    <div className="aspect-video rounded-md overflow-hidden border border-border">
                       <iframe 
                          src={update.videoUrl} 
                          title={update.title} 
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen>
                       </iframe>
                    </div>
                  )}
                  {(update.type === 'thought' || (update.type !== 'code' && !update.imageUrl && !update.videoUrl)) && (
                    <p className="text-sm text-foreground/90">{update.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <p className="text-center mt-8 text-sm text-muted-foreground">
          {/* This section would update in real-time if connected to Firebase Firestore. */}
        </p>
      </div>
    </section>
  );
}
