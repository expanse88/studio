// src/app/(components)/sections/hero-section.tsx
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { currentProfession, heroTexts } from '@/lib/data';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const { title, subtitle } = heroTexts[currentProfession];
  return (
    <section id="hero" className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
      {/* Placeholder for video background. Replace with <video> or next/video if available */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="River water background"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        className="opacity-30"
        data-ai-hint="river water"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-text-flow">
            {title}
          </span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-foreground/80 sm:text-xl md:mt-8 md:max-w-2xl">
          {subtitle}
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
            <Link href="#portfolio">
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes text-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-flow {
          background-size: 200% 200%;
          animation: text-flow 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
