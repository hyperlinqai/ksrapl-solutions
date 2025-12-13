import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FooterCTA } from "@/components/FooterCTA";

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
    desc: "Dual tooling, alternate suppliers, and safety-stock strategies for zero line-stops.",
  },
];

const quality = [
  "ISO-aligned QMS with layered audits and SPC at critical stations.",
  "In-house CMM, spectro, and pressure testing for tubular and hydraulic assemblies.",
  "JIT / direct-on-line readiness with dock-to-stock packaging standards.",
];

const capacities = [
  { label: "Presses & Benders", value: "40+" },
  { label: "Welding Lines", value: "22" },
  { label: "CNC & VMC Centers", value: "18" },
  { label: "Annual Tubular Output", value: "3.4k+ containers" },
];

const leadership = [
  {
    name: "Operations",
    detail: "30+ years in precision fabrication with a focus on takt-time stability.",
  },
  {
    name: "Quality",
    detail: "Automotive-grade QMS leaders driving PPAP, FMEA, and mistake-proofing.",
  },
  {
    name: "Supply Chain",
    detail: "Global logistics experience across sea, air, and multimodal lanes.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="px-6 pb-12">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                About KSRAPL
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Precision tubular & fabrication partners for OEMs who cannot compromise on uptime.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We build diesel and hydraulic tanks, tubular assemblies, and fabricated components with the discipline of an automotive-grade supplier—so your production lines stay predictable.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-secondary/15 text-secondary text-sm font-semibold">
                  JIT & DOL ready
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  Export compliant
                </span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-semibold">
                  Zero premium freight culture
                </span>
              </div>
              <div className="flex gap-4 pt-2">
                <Button onClick={() => (window.location.href = "/contact")}>Talk to manufacturing</Button>
                <Button variant="outline" onClick={() => (window.location.href = "/")}>
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
                  <div className="text-3xl font-bold text-secondary mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* Leadership highlights */}
        <section className="px-6 py-12 bg-muted/40">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Leadership that ships</h2>
              <p className="text-muted-foreground leading-relaxed">
                A veteran team that has lived through audits, line-stops, and successful PPAPs—focused on prevention, not reaction.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {leadership.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-lg font-semibold text-foreground mb-2">{item.name}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="px-6 py-12">
          <div className="container mx-auto max-w-6xl rounded-3xl bg-primary text-primary-foreground p-10 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready for a capability walkthrough?</h3>
                <p className="text-primary-foreground/90">
                  Share your part print, annual volumes, and target lead time. We’ll respond with a manufacturability POV and a clear launch plan.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Button
                  variant="secondary"
                  className="text-primary font-semibold"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Start a project
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </div>
  );
};

export default About;

