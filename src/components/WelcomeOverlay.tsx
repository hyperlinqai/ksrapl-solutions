import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import logo from "../assets/nuvo-logo.png";

export const WelcomeOverlay = () => {
    // Default to true for development/verification so it always shows
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Check if user has already seen the welcome screen in this session
        // Commented out to ensure it shows for the user now
        // const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
        // if (!hasSeenWelcome) {
        //     setShow(true);
        // Disable scrolling when overlay is active
        document.body.style.overflow = "hidden";
        // }
    }, []);

    const handleEnter = () => {
        setShow(false);
        sessionStorage.setItem("hasSeenWelcome", "true");
        // Re-enable scrolling
        document.body.style.overflow = "auto";
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    // Semi-transparent backdrop
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        // Card container
                        className="bg-black text-white rounded-3xl shadow-2xl border border-white/10 p-8 md:p-12 max-w-2xl w-full text-center relative overflow-hidden"
                    >
                        {/* Decorative glows inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="relative z-10"
                        >
                            <img src={logo} alt="Nuvoautotech Logo" className="h-36 mx-auto mb-6" />
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Welcome to Nuvoautotech
                            </h1>
                            <p className="text-lg text-white/80 mb-6">
                                Precision Tubular & Fabrication Solutions
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-white/80 relative z-10"
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                <Star className="w-4 h-4 text-primary fill-primary" />
                                <span className="font-medium text-sm text-white">20+ Years Excellence</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                <span className="font-medium text-sm text-white">Trusted OEM Supplier</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="relative z-10"
                        >
                            <Button
                                size="lg"
                                onClick={handleEnter}
                                className="w-full sm:w-auto px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-primary/20 transition-all hover:scale-105"
                            >
                                Enter Website <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
