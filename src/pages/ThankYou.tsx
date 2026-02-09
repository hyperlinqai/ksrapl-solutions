
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6 max-w-lg"
            >
                <div className="flex justify-center">
                    <CheckCircle className="w-24 h-24 text-primary" strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Thank You!</h1>
                <p className="text-xl text-muted-foreground">
                    Your message has been received. We appreciate you contacting us and will get back to you shortly.
                </p>
                <div className="pt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
