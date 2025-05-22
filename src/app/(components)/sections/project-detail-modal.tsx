// src/app/(components)/sections/project-detail-modal.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Project } from '@/lib/data';
import { generateProjectSummary, type GenerateProjectSummaryInput } from '@/ai/flows/generate-project-summary';
import { useToast } from '@/hooks/use-toast';
import { ThumbsUp, Brain, XCircle, Loader2, Lightbulb } from 'lucide-react';
import { visitorInterestsOptions } from '@/lib/data';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [personalizedSummary, setPersonalizedSummary] = useState<string | null>(null);
  const [currentVisitorInterest, setCurrentVisitorInterest] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    // Reset summary when project changes or modal closes
    if (!isOpen || !project) {
      setPersonalizedSummary(null);
      setCurrentVisitorInterest('');
    }
  }, [project, isOpen]);

  const handleGenerateSummary = async () => {
    if (!project) return;

    setIsLoadingSummary(true);
    setPersonalizedSummary(null);

    // Simulate inferring visitor interest (randomly pick one for demo)
    const randomInterest = visitorInterestsOptions[Math.floor(Math.random() * visitorInterestsOptions.length)];
    setCurrentVisitorInterest(randomInterest);
    
    const input: GenerateProjectSummaryInput = {
      projectDescription: project.longDescription,
      visitorInterests: randomInterest,
    };

    try {
      const result = await generateProjectSummary(input);
      setPersonalizedSummary(result.personalizedSummary);
      toast({
        title: "Personalized Summary Generated!",
        description: `Tailored for someone interested in: ${randomInterest}.`,
        variant: "default",
        action: <ThumbsUp className="h-5 w-5 text-green-500" />,
      });
    } catch (error) {
      console.error("Error generating summary:", error);
      toast({
        title: "Error Generating Summary",
        description: "Could not generate a personalized summary at this time.",
        variant: "destructive",
        action: <XCircle className="h-5 w-5" />,
      });
    } finally {
      setIsLoadingSummary(false);
    }
  };

  if (!project) return null;

  const renderProjectMedia = () => {
    switch (project.type) {
      case 'video':
        return project.details?.embedUrl ? (
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-border shadow-md">
            <iframe
              src={project.details.embedUrl}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="text-muted-foreground">Video content not available.</p>
        );
      case '3d':
        return (
          <div className="aspect-video w-full bg-muted/50 rounded-lg border border-border shadow-md flex items-center justify-center p-4">
            <div className="text-center">
              <Layers className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="font-semibold">Interactive 3D Model</p>
              <p className="text-sm text-muted-foreground">{project.details?.modelViewerHint || "Explore the 3D model."}</p>
              <p className="text-xs text-muted-foreground mt-2">(Placeholder for 3D viewer integration)</p>
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border shadow-md">
            <Image
              src={project.mediaUrl}
              alt={project.title}
              layout="fill"
              objectFit="contain"
              data-ai-hint={project.placeholderHint || "project detail image"}
            />
            {project.details?.hotspots?.map((hotspot, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-accent rounded-full cursor-pointer animate-pulse group"
                style={{ left: hotspot.x, top: hotspot.y }}
                title={hotspot.text}
              >
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-max max-w-xs bg-popover text-popover-foreground text-xs rounded-md px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {hotspot.text}
                </span>
              </div>
            ))}
          </div>
        );
       case 'interactive_graphic':
         return (
          <div className="aspect-video w-full bg-muted/50 rounded-lg border border-border shadow-md flex items-center justify-center p-4">
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="font-semibold">Interactive Graphic</p>
              <p className="text-sm text-muted-foreground">{project.details?.interactiveHint || "Interactive element."}</p>
              <p className="text-xs text-muted-foreground mt-2">(Placeholder for interactive component)</p>
            </div>
          </div>
        );
      default:
        return (
          <Image
            src={project.mediaUrl}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-video border border-border shadow-md"
            data-ai-hint={project.placeholderHint || "project detail image"}
          />
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-3xl font-bold text-primary">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">{project.shortDescription}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-grow overflow-y-auto px-6">
          <div className="space-y-6 py-6">
            {renderProjectMedia()}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Project Overview</h3>
              <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed">{project.longDescription}</p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Enhanced Summary</h3>
              <Button onClick={handleGenerateSummary} disabled={isLoadingSummary} className="w-full sm:w-auto">
                {isLoadingSummary ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Brain className="mr-2 h-4 w-4" />
                )}
                Generate Personalized Summary
              </Button>
              {currentVisitorInterest && !personalizedSummary && !isLoadingSummary && (
                 <p className="text-sm text-muted-foreground mt-2">Click above to generate a summary tailored for interests in: <span className="font-medium text-accent">{currentVisitorInterest}</span>.</p>
              )}
              {personalizedSummary && (
                <Alert className="mt-4 bg-background/70 backdrop-blur-sm">
                  <AlertTitle className="flex items-center gap-2 font-semibold text-accent">
                    <Brain className="h-5 w-5" />
                    Summary for your interest in: {currentVisitorInterest}
                  </AlertTitle>
                  <AlertDescription className="text-foreground/90 whitespace-pre-wrap leading-relaxed">
                    {personalizedSummary}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </ScrollArea>
        <DialogFooter className="p-6 pt-0 border-t border-border sticky bottom-0 bg-background/90 backdrop-blur-sm">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
