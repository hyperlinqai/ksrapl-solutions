import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const promoters = [
  {
    name: "Suresh Rao",
    role: "Director",
    bio: "With over 20 years of experience in manufacturing, Suresh brings deep expertise in quality management systems and best manufacturing practices.",
    highlights: [
      "Inclusive, customer-focused leadership",
      "Experience across major industries and product development",
      "Drives teams and infrastructure towards world-class standards",
    ],
  },
  {
    name: "Dhruv Aggarwal",
    role: "Director",
    bio: "Dhruv focuses on building scalable, robust systems and tools that support long-term OEM partnerships.",
    highlights: [
      "Strong grounding in robust systems and tools",
      "Committed to taking KSRAPL to the highest possible level",
      "Aligns strategy, operations, and customer expectations",
    ],
  },
];

export const PromotersSection = () => {
  return (
    <section id="promoters" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Promoters
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Led by manufacturing veterans with a passion for quality and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promoters.map((promoter, index) => (
            <motion.div
              key={promoter.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {promoter.name}
                    </h3>
                    <p className="text-primary font-medium">{promoter.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {promoter.bio}
                  </p>
                  
                  <div className="space-y-3">
                    {promoter.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
