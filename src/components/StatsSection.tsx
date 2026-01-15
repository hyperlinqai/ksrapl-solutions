import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BriefcaseBusiness, Factory, CheckCircle2 } from "lucide-react";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const Counter = ({ value, label, suffix = "" }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div className="text-5xl md:text-6xl font-bold text-primary mb-3 flex justify-center items-center">
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </motion.div>
      <div className="text-lg text-white/70 font-medium">{label}</div>
    </motion.div>
  );
};

const stats = [
  { label: "Total Staff", value: 100, icon: Users, suffix: "+" },
  { label: "Total Projects", value: 2000, icon: BriefcaseBusiness },
  { label: "Completed Projects", value: 125, icon: CheckCircle2 },
];

export const StatsSection = () => {
  return (
    <section id="stats" className="py-24 px-6 dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            KSRAPL in Numbers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Impact that scales with trust
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Consistent delivery across people, projects, and customers with measurable outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm uppercase tracking-wide text-white/60">
                    {stat.label}
                  </span>
                </div>
                <Counter value={stat.value} label="" suffix={stat.suffix} />
              </div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/70 max-w-3xl mx-auto mt-12"
        >
          Trusted across industries for dependable throughput, quality, and on-time delivery.
        </motion.p>
      </div>
    </section>
  );
};
