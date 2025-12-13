import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  { image: heroSlide1, animation: "animate-zoom-in" },
  { image: heroSlide2, animation: "animate-zoom-out" },
  { image: heroSlide3, animation: "animate-zoom-in" },
];

const badges = [
  { label: "20+ Years Experience" },
  { label: "Trusted OEM Supplier" },
  { label: "JIT & Direct-on-Line Ready" },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className={`absolute inset-0 ${slides[currentSlide].animation}`}>
            <img
              src={slides[currentSlide].image}
              alt="Manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Precision Tubular & Fabrication Solutions
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Manufacturing Partners for{" "}
              <span className="text-gradient">OEMs Worldwide</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              KSRAPL delivers high-precision tubular assemblies, diesel and hydraulic tanks,
              and fabricated components that power tractors, earthmovers, pumps, and industrial
              applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("#products")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover-lift"
              >
                Explore Products
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#about")}
                className="border-primary/30 hover:bg-primary/10 hover:border-primary shadow-xl"
              >
                Download Company Profile
              </Button> */}
            </div>

            {/* Floating Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20"
                >
                  <span className="text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("#vision")}
      >
        <p className="text-sm text-muted-foreground">Scroll to discover our capabilities</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-primary w-8" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
