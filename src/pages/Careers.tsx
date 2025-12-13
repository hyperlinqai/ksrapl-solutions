import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FooterCTA } from "@/components/FooterCTA";

const openings = [
  { title: "Production Engineer", type: "Full-time", location: "Pune (On-site)" },
  { title: "Quality Engineer", type: "Full-time", location: "Pune (On-site)" },
  { title: "Supply Chain Executive", type: "Full-time", location: "Pune (On-site)" },
];

const Careers = () => {
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
              Careers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Build with a team that ships for OEMs worldwide
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              If you care about process discipline, quality, and delivery excellence, we’d love to hear from you.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Open roles</h2>
            <div className="space-y-3">
              {openings.map((role) => (
                <div
                  key={role.title}
                  className="flex items-start justify-between gap-3 rounded-xl border border-border/70 bg-background/60 p-4"
                >
                  <div>
                    <div className="text-lg font-semibold text-foreground">{role.title}</div>
                    <div className="text-sm text-muted-foreground">{role.type} · {role.location}</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => (window.location.href = "/contact")}>
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Share your resume</h2>
            <p className="text-sm text-muted-foreground">
              Upload your CV and a short note. We’ll get back with a fitment assessment and next steps.
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Phone</label>
                <input
                  type="tel"
                  placeholder="+91-XXXX-XXX-XXX"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Role of interest</label>
                <input
                  type="text"
                  placeholder="e.g., Production Engineer"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your experience and notice period"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Upload Resume (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 file:mr-3 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:px-3 file:py-2 file:cursor-pointer"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-lg bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary/90 transition-colors"
                onClick={() => (window.location.href = "/contact")}
              >
                Submit
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted for current or future opportunities.
              </p>
            </form>
          </div>
        </section>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Careers;


