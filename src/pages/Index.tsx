import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VisionSection } from "@/components/VisionSection";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { PromotersSection } from "@/components/PromotersSection";
import { StatsSection } from "@/components/StatsSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { ClientsSection } from "@/components/ClientsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FooterCTA } from "@/components/FooterCTA";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <VisionSection />
      <AboutSection />
      <CapabilitiesSection />
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Product Catalog
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Explore our Product Families
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Browse banjo body assemblies, fabricated structures, linkages, safety components, and precision tubing built for OEM programs.
            </p>
            <div className="flex justify-center">
              <Button size="lg" onClick={() => (window.location.href = "/products")}>
                View Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
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
