import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VisionSection } from "@/components/VisionSection";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { PromotersSection } from "@/components/PromotersSection";
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
      <VisionSection />
      <AboutSection />
      <CapabilitiesSection />
      <ProductsSection />
      <PromotersSection />
      <StatsSection />
      <GlobalPresenceSection />
      <ClientsSection />
      <TestimonialsSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
