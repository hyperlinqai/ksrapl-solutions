import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { VideoSection } from "@/components/VideoSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { StatsSection } from "@/components/StatsSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { ClientsSection } from "@/components/ClientsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FooterCTA } from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutSection />
      <VideoSection />
      <CapabilitiesSection />
      <ProductsSection limit={3} />
      <StatsSection />
      <GlobalPresenceSection />
      <ClientsSection />
      <TestimonialsSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
