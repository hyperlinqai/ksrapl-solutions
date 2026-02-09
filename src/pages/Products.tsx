import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FooterCTA } from "@/components/FooterCTA";

type ProductGroup = {
  title: string;
  description: string;
  images: string[];
};

const productGroups: ProductGroup[] = [
  {
    title: "Steering Columns with Brake & Clutch Components",
    description: "Precision steering columns, brake pedals, and clutch assemblies engineered for safety and performance.",
    images: [
      "/products/Safety/DSC_1455%20copy.webp",
      "/products/Safety/DSC_1457%20copy.webp",
      "/products/Safety/DSC_1471%20copy.webp",
      "/products/Safety/DSC_1689%20copy.webp",
    ],
  },
  {
    title: "Fuel & Hydraulic Tanks",
    description: "Precision-formed tubing and assemblies for fuel systems and hydraulic tank applications.",
    images: [
      "/products/Tubing/DSC_1426%20copy.webp",
      "/products/Tubing/DSC_1493%20copy.webp",
      "/products/Tubing/DSC_1559%20copy.webp",
      "/products/Tubing/DSC_1575%20copy.webp",
      "/products/Tubing/DSC_1611%20copy.webp",
      "/products/fuel-hydraulic-tanks/fuel-hydraulic-tanks.webp",
    ],
  },
  {
    title: "Fabricated & Machined Components",
    description: "Custom fabricated and precision machined parts for diverse industrial and automotive applications.",
    images: [
      "/products/fabricated-machined-components/DSC_1417%20copy.webp",
      "/products/fabricated-machined-components/DSC_1585%20copy.webp",
      "/products/fabricated-machined-components/DSC_1595%20copy.webp",
      "/products/fabricated-machined-components/DSC_1617%20copy.webp",
      "/products/fabricated-machined-components/DSC_1670%20copy.webp",
    ],
  },
  {
    title: "Linkages Assemblies",
    description: "Precision-engineered linkage assemblies for automotive and industrial applications.",
    images: [
      "/products/linkages-assemblies/DSC_1396%20copy.webp",
      "/products/linkages-assemblies/DSC_1400%20copy.webp",
      "/products/linkages-assemblies/DSC_1428%20copy.webp",
      "/products/linkages-assemblies/DSC_1476%20copy.webp",
    ],
  },
  {
    title: "Fanguard for Harvester",
    description: "Precision-welded fan guards ensuring safety and airflow efficiency for harvesters.",
    images: [
      "/products/fanguard-harvester/DSC_1648%20copy.webp",
      "/products/fanguard-harvester/DSC_1653%20copy.webp",
    ],
  },

  {
    title: "Banjo Body Assemblies",
    description: "Precision-machined banjo body assemblies for hydraulic and fuel systems.",
    images: [
      "/products/Banjo%20Body%20Assemblies/22.webp",
      "/products/Banjo%20Body%20Assemblies/23.webp",
      "/products/Banjo%20Body%20Assemblies/24.webp",
      "/products/Banjo%20Body%20Assemblies/25.webp",
      "/products/Banjo%20Body%20Assemblies/26.webp",
    ],
  },
];

const ImageTile = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted flex items-center justify-center px-4">
    <img
      src={src}
      alt={alt}
      className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-[1.03]"
      loading="lazy"
    />
  </div>
);

const ProductCard = ({ group }: { group: ProductGroup }) => (
  <Card className="h-full border-border bg-card hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
    <CardContent className="p-6 space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            {group.title}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{group.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {group.images.map((img) => (
          <ImageTile key={img} src={img} alt={group.title} />
        ))}
      </div>
    </CardContent>
  </Card>
);

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";

// Helper function to generate IDs
const getGroupId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const Products = () => {
  const location = useLocation();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 md:pt-36 pb-16 px-6">
        <section className="container mx-auto max-w-6xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Product Catalog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Specialized assemblies and components for OEM supply chains
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              From banjo body assemblies to complex fabricated structures, our catalog covers critical tubular, linkage, safety, and structural needs with export-ready quality.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => setIsQuoteModalOpen(true)}>Request a quote</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                View home
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-6xl space-y-16">
          {productGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              id={getGroupId(group.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="scroll-mt-32"
            >
              <ProductCard group={group} />
            </motion.div>
          ))}
        </section>
      </main>
      <FooterCTA />

      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onOpenChange={setIsQuoteModalOpen}
      />
    </div>
  );
};

export default Products;

