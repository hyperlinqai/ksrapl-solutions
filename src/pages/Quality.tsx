import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FooterCTA } from "@/components/FooterCTA";

const pillars = [
  "Highest level of quality assurance with customer-specific requirements communicated at all times.",
  "Zero defects mindset; core principle is to educate and drive teams toward “Achieve Zero PPM.”",
  "Infrastructure planned for quality: profile gauges, product-specific receiving gauges, and capability-focused equipment.",
  "Extensive RM testing with trusted laboratories to validate incoming material quality.",
  "Error-proofing across manufacturing; new development includes gauges and fixtures before launch.",
];

const qms = [
  "Certified to ISO 9001:2015; customer-focused systems across all processes.",
  "Layered process audits, control plans, and traceability built into production.",
  "Packaging and logistics standards aligned to OEM and export needs.",
];

const Quality = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-28 px-6 pb-16">
        <section className="container mx-auto max-w-6xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Quality Assurance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Built for zero defects and customer-first quality
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              KSRAPL practices the highest level of quality assurance, driving Zero PPM through training, error-proofing, and disciplined processes for every lot.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => (window.location.href = "/contact")}>Talk to quality</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/KSR%20auto.pdf")}>
                View ISO 9001:2015 certificate
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-6xl grid lg:grid-cols-[1fr_1fr] gap-10 mb-12">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Quality Assurance Framework</h2>
            <div className="space-y-3">
              {pillars.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  <p className="text-sm md:text-base text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Quality Management System</h2>
            <div className="space-y-3">
              {qms.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-sm md:text-base text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-border/70 bg-muted/40 p-4 mt-2">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-sm text-muted-foreground">Certification</p>
                  <p className="text-base font-semibold text-foreground">ISO 9001:2015</p>
                  <p className="text-sm text-muted-foreground">Scope: Fabricated & machined components, subassemblies & assemblies</p>
                </div>
                <Button variant="secondary" className="text-primary font-semibold" onClick={() => (window.location.href = "/KSR%20auto.pdf")}>
                  Download Certificate
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">How we validate</h3>
              <ul className="space-y-2 text-sm md:text-base text-foreground leading-relaxed">
                <li>• Incoming RM testing at accredited labs with retained records.</li>
                <li>• Capability studies and gauge R&R before launch.</li>
                <li>• Error-proofing (Poka-Yoke) at critical stations.</li>
                <li>• Control plans, FMEA linkage, and layered process audits.</li>
                <li>• Final inspection with receiving gauges and profile gauges per product.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/70 bg-muted/40 p-4 flex flex-col gap-4">
              <div className="text-sm text-muted-foreground">
                Certificate reference
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold text-foreground">Certificate No: IND/QMS/NAB-C3206/3100</span>
                <span className="text-sm text-muted-foreground">Current issue: 06.08.2021 | Expiry: 05.08.2024</span>
                <span className="text-sm text-muted-foreground">Standard: ISO 9001:2015</span>
              </div>
              <Button variant="outline" onClick={() => (window.location.href = "/KSR auto.pdf")}>
                View Certificate (PDF)
              </Button>
              <div className="overflow-hidden rounded-lg border border-border/70 bg-background">
                <object
                  data="/KSR auto.pdf"
                  type="application/pdf"
                  className="w-full h-64"
                  aria-label="ISO 9001:2015 Certificate"
                >
                  <div className="p-4 text-sm text-muted-foreground">
                    PDF preview not available. <a href="/KSR auto.pdf" className="text-primary underline">Download certificate</a>.
                  </div>
                </object>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Quality;

