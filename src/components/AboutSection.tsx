import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Package, Award, Zap, Users, Leaf, HardHat, Factory, Car, CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-manufacturing.webp";

const coreProducts = [
  "Fuel & Hydraulic Tanks",
  "Steering Columns with Brake & Clutch Components",
  "Fabricated & Machined Components",
  "Linkages Assemblies",
  "Fanguard for Harvester",
];

const industriesServed = [
  { icon: Leaf, label: "Agriculture Equipment" },
  { icon: HardHat, label: "Construction & Earthmoving" },
  { icon: Factory, label: "Industrial Machinery" },
  { icon: Car, label: "Automotive & Commercial Vehicles" },
];

const whyChooseUs = [
  {
    icon: Package,
    title: "Application Expertise",
    description:
      "Manufacturing experience across tractors, earthmovers, hydraulic systems, and off-highway vehicles.",
  },
  {
    icon: Award,
    title: "Quality-Driven Manufacturing",
    description:
      "Robust incoming inspection, in-process controls, and final inspection to ensure consistent OEM compliance.",
  },
  {
    icon: Zap,
    title: "JIT & Direct-on-Line Ready",
    description:
      "Supply models aligned to Just-In-Time and line-side supply requirements.",
  },
  {
    icon: Users,
    title: "Customer-Focused Execution",
    description:
      "Engineering support, responsive communication, and a strong commitment to zero-defect supply.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="NUVO Auto Technologies Pvt Ltd Manufacturing Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl"
            >
              <div className="text-4xl font-bold">20+</div>
              <div className="text-sm">Years Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About NUVO Auto Technologies Pvt Ltd</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NUVO Auto Technologies Pvt Ltd is a manufacturing partner specializing in precision tubular assemblies, brake & clutch assemblies, Hydraulic tanks, and Fabricated welded assemblies for automotive, agricultural, construction, and off-highway OEMs.
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h3 className="text-2xl font-bold mb-3">What We Do</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 20 years of manufacturing experience, NUVO delivers consistent, safety-critical, and production-ready components aligned with OEM quality, delivery, and cost expectations.
                </p>
                <p>
                  We manufacture high-precision tubular and fabricated components using CDS/ERW / CEW tubes, precision tube bending, and MIG/TIG welding processes.
                </p>
              </div>
            </div>

            {/* Core Product Lines */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Core Product Lines</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {coreProducts.map((product, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{product}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Industries We Serve */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {industriesServed.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                    >
                      <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Why OEMs Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Why OEMs Choose Us</h3>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6 bg-background/50 border-border/50 hover:border-primary/40 transition-all hover:shadow-lg h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
