import { motion } from "framer-motion";
import {
  Activity,
  Settings,
  Cpu,
  Sliders,
  Hash,
  Flame,
  Target,
  Wand2,
  Layers
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    title: "CNC Tube Bending",
    description: "High-accuracy tube bending with 5 axis capability to achieve complex geometries",
    icon: Activity,
  },

  {
    title: "CNC & VMC Machines",
    description: "Multi-axis machining for critical parts with tight tolerances.",
    icon: Cpu,
  },
  {
    title: "Centerless & Surface Grinding",
    description: "Fine surface finishing and dimensional accuracy.",
    icon: Sliders,
  },
  {
    title: "Thread Rolling",
    description: "Consistent threading and serrations with both in-feed and through-feed capabilities.",
    icon: Hash,
  },
  {
    title: "Metal Joining Processes (Co2, Tig and Brazing)",
    description: "Robust joining for tubular and fabricated assemblies.",
    icon: Flame,
  },
  {
    title: "Drilling & Tapping",
    description: "High volume drilling and tapping setup for production efficiency",
    icon: Target,
  },
  {
    title: "Polishing and Finishing",
    description: "Rotary and linear buffing capabilities to achieve high level of aesthetics needed for pre painting and coating process.",
    icon: Wand2,
  },
  {
    title: "Rod Bending Capabilities",
    description: "3 Dimensional rod bending capabilities to deliver precise connecting rods and shift levers",
    icon: Layers,
  },
];

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Manufacturing Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Integrated, end-to-end capabilities designed for OEM reliability and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-card border-border hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {capability.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground max-w-4xl mx-auto"
        >
          These capabilities are integrated with quality systems to meet the demanding standards of global OEMs.
        </motion.p>
      </div>
    </section>
  );
};
