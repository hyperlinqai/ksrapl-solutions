import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FooterCTA } from "@/components/FooterCTA";
import { ShieldCheck, Microscope, ClipboardCheck, FileCheck, Award, Medal } from "lucide-react";

const pillars = [
  { text: "Highest level of quality assurance with customer-specific requirements.", icon: ShieldCheck },
  { text: "Zero defects mindset driving teams toward “Achieve Zero PPM.”", icon: Medal },
  { text: "Infrastructure planned for quality: profile gauges & capability equipment.", icon: Microscope },
  { text: "Extensive RM testing with trusted laboratories.", icon: FileCheck },
  { text: "Error-proofing (Poka-Yoke) across manufacturing before launch.", icon: ClipboardCheck },
];

const qms = [
  "Certified to ISO 9001:2015",
  "Layered process audits",
  "Traceability built into production",
  "Packaging aligned to OEM needs"
];

const Quality = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 md:pt-36 px-6 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto max-w-6xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-10 md:p-16 text-center space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm shadow-sm border border-primary/20 text-primary text-sm font-semibold relative z-10">
              <Award className="w-4 h-4" />
              Quality Assurance
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground relative z-10">
              Built for <span className="text-primary">Zero Defects</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed relative z-10">
              KSRAPL practices the highest level of quality assurance, driving precise outcomes through training, error-proofing, and disciplined processes.
            </p>

            <div className="flex justify-center gap-4 relative z-10 pt-4">
              <Button size="lg" className="shadow-lg hover:shadow-primary/25" onClick={() => (window.location.href = "/contact")}>
                Talk to Quality Team
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Quality Framework Grid */}
        <section className="container mx-auto max-w-6xl mb-16">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Quality Framework</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="font-medium text-foreground leading-relaxed">{item.text}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* QMS Sidebar */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">QMS Highlights</h2>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 h-full shadow-sm">
                <ul className="space-y-4">
                  {qms.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border">
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Certification</div>
                    <div className="text-lg font-bold text-foreground mb-3">ISO 9001:2015</div>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => (window.location.href = "/KSR%20auto.pdf")}>
                      View Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Process */}
        <section className="container mx-auto max-w-6xl mb-12">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Validation Process</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { title: "Incoming", desc: "RM testing at accredited labs with retained records." },
                { title: "Pre-Launch", desc: "Capability studies and gauge R&R validation." },
                { title: "Production", desc: "Poka-Yoke, Control Plans, & FMEA linkage." },
                { title: "Final Check", desc: "Inspection with receiving & profile gauges." }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-4 rounded-xl bg-muted/30 border border-border flex flex-col items-center justify-center text-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">Certificate No: IND/QMS/NAB-C3206/3100</span>
                <span className="text-sm text-muted-foreground">ISO 9001:2015 | Valid until 2024</span>
              </div>
              <Button variant="link" className="text-primary" onClick={() => (window.location.href = "/KSR%20auto.pdf")}>
                Download Full PDF
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Quality;

