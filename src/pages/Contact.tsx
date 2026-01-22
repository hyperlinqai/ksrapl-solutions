import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FooterCTA } from "@/components/FooterCTA";

const contactDetails = [
  { label: "Phone", value: "+91-976-655-2733" },
  { label: "Email", value: "admin@ksrapl.in | ksrapl@gmail.com" },
];

const address = [
  "Nuvoautotech Pvt. Ltd.",
  "Weikfield Industrial Area",
  "Off Pune-Nagar Road",
  "Sanaswadi- Po, Shirur-Tal, Pune",
  "412208",
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 md:pt-36 px-6 pb-16">
        <section className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Contact Nuvoautotech
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Let’s discuss your manufacturing requirements
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Share your part prints, annual volumes, and timelines. We’ll respond with a manufacturability perspective and a clear engagement plan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Reach out</h2>
              <div className="space-y-2 text-foreground/90">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-base font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                  Address
                </h3>
                <div className="text-base text-foreground/90 space-y-1">
                  {address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Send us a note</h2>
              <p className="text-sm text-muted-foreground">
                Share your requirements and we’ll respond with feasibility and next steps.
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
                  <label className="text-sm text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your part, volumes, and timelines"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary/90 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Contact;

