import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const FooterCTA = () => {
  return (
    <footer className="dark-section">
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Partner with a Reliable Manufacturing Specialist?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Share your requirements and we'll align our capabilities to your production and quality goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base bg-primary hover:bg-primary/90"
                onClick={() => (window.location.href = "/contact")}
              >
                Request a Consultation
              </Button>
              {/* <Button size="lg" variant="outline" className="text-base border-white/20 text-white hover:bg-white/10">
                Sign Up for Updates
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="bg-white/10" />

      {/* Footer */}
      <div className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/60">
                KSRAPL © 2021 – All Rights Reserved
              </p>
            </div>

            <nav className="flex gap-6">
              <a
                href="/"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <p className="text-center text-xs text-white/50 mt-6">
            Sign up for our newsletter to stay updated on new capabilities and product developments.
          </p>
        </div>
      </div>
    </footer>
  );
};
