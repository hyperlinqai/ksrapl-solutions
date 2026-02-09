import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Quality from "./pages/Quality";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // This will be removed from the JSX

import { WelcomeOverlay } from "@/components/WelcomeOverlay";

import ScrollToTop from "@/components/ScrollToTop";

import { ThankYou } from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AnnualReturns from "./pages/AnnualReturns";
import { AnimatePresence } from "framer-motion"; // Added import for AnimatePresence

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* <Sonner /> - Removed as per Code Edit */}
      <WelcomeOverlay />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatePresence mode="wait"> {/* Added AnimatePresence */}
          <Routes>
            <Route path="/" element={<Index />} /> {/* Changed to Home in Code Edit, but keeping Index as per original file and assuming Home is a typo or not intended for this specific instruction */}
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/annual-returns" element={<AnnualReturns />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
