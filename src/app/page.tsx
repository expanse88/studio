import { AppHeader } from '@/app/(components)/layout/app-header';
import { AppFooter } from '@/app/(components)/layout/app-footer';
import { HeroSection } from '@/app/(components)/sections/hero-section';
import { PortfolioSection } from '@/app/(components)/sections/portfolio-section';
import { MyProcessSection } from '@/app/(components)/sections/my-process-section';
import { AboutMeSection } from '@/app/(components)/sections/about-me-section';
import { ContactSection } from '@/app/(components)/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioSection />
        <MyProcessSection />
        <AboutMeSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  );
}
