// src/app/(components)/layout/app-footer.tsx
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Luminary Canvas. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Crafted by an Immersive Storyteller.
        </p>
      </div>
    </footer>
  );
}
