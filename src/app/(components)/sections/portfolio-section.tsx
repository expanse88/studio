// src/app/(components)/sections/portfolio-section.tsx
"use client";

import { useState } from 'react';
import { ProjectCard } from '@/app/(components)/common/project-card';
import { portfolioProjects, type Project } from '@/lib/data';
import { ProjectDetailModal } from './project-detail-modal';
import { HoverFadeText } from '@/app/(components)/common/hover-fade-text';

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HoverFadeText 
            as="h2" 
            text="Dynamic Portfolio" 
            className="text-4xl font-bold tracking-tight text-primary sm:text-5xl" 
          />
          <HoverFadeText 
            as="p" 
            text="An interactive journey through my creative endeavors. Step into the work." 
            className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80" 
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewProject={handleViewProject} />
          ))}
        </div>
      </div>
      <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
