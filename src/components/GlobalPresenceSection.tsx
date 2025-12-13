import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";

interface MetricProps {
  value: string;
  label: string;
  subLabel?: string;
}

const Metric = ({ value, label, subLabel }: MetricProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
    >
      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-base md:text-lg text-white font-semibold mb-1">
        {label}
      </div>
      {subLabel && <div className="text-sm text-white/60">{subLabel}</div>}
    </motion.div>
  );
};

const metrics = [
  { label: "Countries", value: "27+", subLabel: "Active export destinations" },
  { label: "Containers per annum", value: "3400+", subLabel: "Global shipments handled" },
];

export const GlobalPresenceSection = () => {
  return (
    <section id="global-presence" className="py-24 px-6 dark-section">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Global Presence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Delivering reliably to OEMs across the world
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              From precision tubular assemblies to complex fabricated components, we support OEM supply chains with consistent quality, predictable lead times, and export-ready packaging standards.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Export-compliant documentation", "Multi-modal logistics partners", "On-time shipping SLAs", "Regional support coverage"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-white/80 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {metrics.map((metric) => (
              <Metric
                key={metric.label}
                value={metric.value}
                label={metric.label}
                subLabel={metric.subLabel}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
