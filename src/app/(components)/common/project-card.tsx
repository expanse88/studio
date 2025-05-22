// src/app/(components)/common/project-card.tsx
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/data';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project) => void;
}

export function ProjectCard({ project, onViewProject }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.mediaUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.placeholderHint || "project image"}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
        <CardDescription className="text-foreground/70 line-clamp-3">{project.shortDescription}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={() => onViewProject(project)} className="w-full" variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
