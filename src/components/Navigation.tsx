import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nuvo-logo.webp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", target: "#home", type: "section" as const },
  { label: "About", target: "/about", type: "route" as const },
  { label: "Products", target: "/products", type: "route" as const },
  { label: "Quality", target: "/quality", type: "route" as const },
  { label: "Annual Returns", target: "/annual-returns", type: "route" as const },
  { label: "Careers", target: "/careers", type: "route" as const },
  { label: "Contact", target: "/contact", type: "route" as const },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (target: string, type: "section" | "route") => {
    if (type === "route") {
      navigate(target);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      // allow route change before scrolling
      setTimeout(() => scrollToSection(target), 50);
      return;
    }

    scrollToSection(target);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 dark-section ${scrolled ? "shadow-lg" : ""
        }`}
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="cursor-pointer"
            onClick={() => handleNavClick("#home", "section")}
          >
            <img
              src={logo}
              alt="NUVO Auto Technologies Pvt Ltd - Do. Win. Grow."
              className="h-20 w-auto"
            />
          </motion.div>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              if (item.label === "Products") {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="text-base font-medium text-white/80 hover:text-white transition-colors relative group flex items-center gap-1 focus:outline-none"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                      </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-md border-border/40 p-2" align="start">
                      {[
                        "Steering Columns with Brake & Clutch Components",
                        "Fuel & Hydraulic Tanks",
                        "Fabricated & Machined Components",
                        "Linkages Assemblies",
                        "Fanguard for Harvester",
                        "Banjo Body Assemblies"
                      ].map((category) => (
                        <DropdownMenuItem
                          key={category}
                          className="cursor-pointer text-sm font-medium text-muted-foreground focus:text-primary focus:bg-primary/10 rounded-md py-2"
                          onClick={() => {
                            const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                            navigate(`/products#${slug}`);
                            setTimeout(() => {
                              const el = document.getElementById(slug);
                              if (el) {
                                const offset = 100;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = el.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                              }
                            }, 100);
                          }}
                        >
                          {category}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleNavClick(item.target, item.type)}
                  className="text-base font-medium text-white/80 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </motion.button>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={() => handleNavClick("/contact", "route")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover-lift"
            >
              Request Proposal
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
