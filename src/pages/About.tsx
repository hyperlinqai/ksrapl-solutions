import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FooterCTA } from "@/components/FooterCTA";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";

const pillars = [
  {
    title: "Engineering-first",
    desc: "Design-for-manufacturing support, fixture design, and PPAP-ready documentation.",
  },
  {
    title: "Process Discipline",
    desc: "Layered process audits, control plans, and traceability baked into every lot.",
  },
  {
    title: "Supply Assurance",
    desc: "Dual tooling, alternate suppliers, and Kanban strategies for zero line-stops.",
  },
];

const quality = [
  "ISO-aligned QMS with layered audits and SPC at critical stations.",
  "In-house weld lab, millipore testing, leak testing facilities.",
  "JIT / direct-on-line readiness with dock-to-stock packaging standards.",
];

const capacities = [
  { label: "Tonnes Presses", value: "20 to 300+" },
  { label: "Robotic Welding Capabilities", value: "22" },
  { label: "5 Axis Bending Capabilities", value: "18 CNC & VMC Centers " },
  { label: "CNC and VMC High Precision Machining", value: "3.4k+ containers" },
];



import { VisionSection } from "@/components/VisionSection";
import { PromotersSection } from "@/components/PromotersSection";

import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 md:pt-36">
        {/* Hero */}
        <section className="px-6 pb-12">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                About NUVO Auto Technologies Pvt Ltd
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Manufacturing Partners for OEMs with complete focus on Quality, Cost and on-time Delivery
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We make tubular assemblies and fabricated parts with highest possible automotive standards so that your production lines stay smooth.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-semibold">
                  JIT & DOL ready
                </span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-semibold">
                  Export compliant
                </span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-semibold">
                  Zero premium freight culture
                </span>
              </div>
              <div className="flex gap-4 pt-2">
                <Button onClick={() => navigate("/contact")}>Talk to manufacturing</Button>
                <Button variant="outline" onClick={() => navigate("/products")}>
                  View product families
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {capacities.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values */}
        <VisionSection />

        {/* Pillars */}
        <section className="px-6 py-12 bg-muted/40">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How we operate</h2>
              <p className="text-muted-foreground leading-relaxed">
                Built by practitioners who have shipped millions of assemblies to OEMs, our systems favor repeatability: stable takt times, mistake-proofing, and layered audits that keep escapes at zero.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Compliance */}
        <section className="px-6 py-12">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Quality without shortcuts</h2>
              <p className="text-muted-foreground leading-relaxed">
                We treat every lot like a launch: control plans, gauge R&R discipline, and data-backed release criteria.
              </p>
            </div>
            <div className="grid gap-3">
              {quality.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Promoters */}
        <PromotersSection />

        {/* Global Presence */}
        <GlobalPresenceSection />


      </main>
      <FooterCTA />
    </div>
  );
};

export default About;

