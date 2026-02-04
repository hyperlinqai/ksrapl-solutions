import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const GlobalPresenceSection = () => {
  return (
    <section id="global-presence" className="py-24 px-6 dark-section relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Globe className="w-4 h-4" />
            OEM Presence
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Delivering reliably to OEMs across the country
          </h2>

          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            From precision tubular assemblies to complex fabricated components, we support OEM supply chains with consistent quality, predictable lead times, and export-ready packaging standards.
          </p>


        </motion.div>
      </div>
    </section>
  );
};
