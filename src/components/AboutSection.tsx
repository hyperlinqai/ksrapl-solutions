import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Package, Award, Zap, Users } from "lucide-react";
import aboutImage from "@/assets/about-manufacturing.jpg";

const coreProducts = [
  "Tubular products for diesel tanks and hydraulic tanks",
  "Oil pump and throttle assemblies",
  "Fabricated metal products",
  "Machined components",
];

const whyChooseUs = [
  {
    icon: Package,
    title: "Wide Range",
    description:
      "High-precision assemblies for tractors, earthmovers, heavy-duty vehicles, and four-wheelers.",
  },
  {
    icon: Award,
    title: "No. 1 Supplier",
    description:
      "Highly rated by customers and often a single-source supplier due to robust quality practices.",
  },
  {
    icon: Zap,
    title: "Quick Delivery",
    description:
      "JIT and direct-on-line readiness with a focus on zero premium freight.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Customer-centric operations with a culture built around zero complaints.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Nuvoautotech Manufacturing Facility"
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
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">About Nuvoautotech</h2>
              <p className="text-xl text-muted-foreground">
                Specialists in tubular assemblies and fabricated components for critical
                industrial applications.
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h3 className="text-2xl font-bold mb-3">What We Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in high-precision tubular assemblies and fabricated parts used
                in earth movers, tractors, hydraulic pumps, home appliances, and a wide
                range of industrial applications.
              </p>
            </div>

            {/* Core Product Lines */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Core Product Lines</h3>
              <div className="grid gap-3">
                {coreProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-background/50 p-3 rounded-lg border border-border/50"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{product}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why OEMs Choose Us */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Why OEMs Choose Us</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-5 bg-background/50 border-border/50 hover:border-primary/40 transition-all h-full">
                        <Icon className="w-8 h-8 text-primary mb-3" />
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
