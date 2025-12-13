import { motion } from "framer-motion";
import { Eye, Flag, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const visionData = [
  {
    label: "Vision",
    icon: Eye,
    text: "Growth through industry-leading innovation, quality, and strong customer service.",
  },
  {
    label: "Mission",
    icon: Flag,
    list: [
      "Provide innovative manufacturing solutions for exhaust systems, diesel tanks, hydraulic tanks, tubular products, and fabricated metal products.",
      "Serve primarily OEMs with reliable, scalable, and cost-effective production.",
    ],
  },
  {
    label: "Values",
    icon: Sparkles,
    list: [
      "Strive for excellence",
      "Be committed and responsive",
      "Build relationships based on integrity and respect",
    ],
  },
];

export const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vision, Mission & Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover-lift">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{item.label}</h3>
                  </div>

                  {item.text && (
                    <p className="text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  )}

                  {item.list && (
                    <ul className="space-y-3">
                      {item.list.map((listItem, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                          <span className="text-muted-foreground">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
