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
    title: "Banjo Body Assemblies",
    description: "Precision-machined banjo body assemblies for hydraulic and fuel systems.",
    images: [
      "/products/Banjo%20Body%20Assemblies/22.png",
      "/products/Banjo%20Body%20Assemblies/23.png",
      "/products/Banjo%20Body%20Assemblies/24.png",
      "/products/Banjo%20Body%20Assemblies/25.png",
      "/products/Banjo%20Body%20Assemblies/26.png",
    ],
  },
  {
    title: "Fabricated Assemblies",
    description: "Heavy-duty fabricated structures built for OEM specs and repeatability.",
    images: [
      "/products/Fabricated%20assemblies/DSC_1417%20copy.png",
      "/products/Fabricated%20assemblies/DSC_1445%20copy.png",
      "/products/Fabricated%20assemblies/DSC_1529%20copy.png",
      "/products/Fabricated%20assemblies/DSC_1585%20copy.png",
      "/products/Fabricated%20assembly/DSC_1417%20copy.png",
      "/products/Fabricated%20assembly/DSC_1420%20copy.png",
      "/products/Fabricated%20assembly/DSC_1440%20copy.png",
      "/products/Fabricated%20assembly/DSC_1445%20copy.png",
      "/products/Fabricated%20assembly/DSC_1462%20copy.png",
      "/products/Fabricated%20assembly/DSC_1469%20copy.png",
      "/products/Fabricated%20assembly/DSC_1510%20copy.png",
      "/products/Fabricated%20assembly/DSC_1511%20copy.png",
      "/products/Fabricated%20assembly/DSC_1529%20copy.png",
      "/products/Fabricated%20assembly/DSC_1534%20copy.png",
      "/products/Fabricated%20assembly/DSC_1535%20copy.png",
      "/products/Fabricated%20assembly/DSC_1541%20copy.png",
      "/products/Fabricated%20assembly/DSC_1585%20copy.png",
      "/products/Fabricated%20assembly/DSC_1589%20copy.png",
      "/products/Fabricated%20assembly/DSC_1595%20copy.png",
      "/products/Fabricated%20assembly/DSC_1617%20copy.png",
      "/products/Fabricated%20assembly/DSC_1624%20copy.png",
      "/products/Fabricated%20assembly/DSC_1640%20copy.png",
      "/products/Fabricated%20assembly/DSC_1642%20copy.png",
      "/products/Fabricated%20assembly/DSC_1662%20copy.png",
      "/products/Fabricated%20assembly/DSC_1670%20copy.png",
    ],
  },
  {
    title: "Linkages & Pedals",
    description: "High-strength linkages and pedal assemblies for precise motion control.",
    images: [
      "/products/Linakges/DSC_1396%20copy.png",
      "/products/Linakges/DSC_1400%20copy.png",
      "/products/Linakges/DSC_1404%20copy.png",
      "/products/Linakges/DSC_1428%20copy.png",
      "/products/Linakges/DSC_1476%20copy.png",
      "/products/Linakges/DSC_1489%20copy.png",
      "/products/Linakges/DSC_1515%20copy.png",
      "/products/Linakges/DSC_1521%20copy.png",
      "/products/Linkages/DSC_1535%20copy.png",
      "/products/Linkages/DSC_1617%20copy.png",
      "/products/Linkages/DSC_1642%20copy.png",
      "/products/Linkages/DSC_1670%20copy.png",
      "/products/Shift%20Levers%20and%20Pedals/DSC_1396%20copy.png",
      "/products/Shift%20Levers%20and%20Pedals/DSC_1404%20copy.png",
      "/products/Shift%20Levers%20and%20Pedals/DSC_1476%20copy.png",
      "/products/Shift%20Levers%20and%20Pedals/DSC_1541%20copy.png",
      "/products/Shift%20Levers%20and%20Pedals/DSC_1595%20copy.png",
    ],
  },
  {
    title: "Safety Components",
    description: "Safety-critical brackets and guards built for durability and compliance.",
    images: [
      "/products/Safety/DSC_1455%20copy.png",
      "/products/Safety/DSC_1457%20copy.png",
      "/products/Safety/DSC_1471%20copy.png",
      "/products/Safety/DSC_1648%20copy.png",
      "/products/Safety/DSC_1653%20copy.png",
      "/products/Safety/DSC_1689%20copy.png",
    ],
  },
  {
    title: "Tubing",
    description: "Precision-formed tubing for fluid transfer and structural applications.",
    images: [
      "/products/Tubing/DSC_1426%20copy.png",
      "/products/Tubing/DSC_1493%20copy.png",
      "/products/Tubing/DSC_1559%20copy.png",
      "/products/Tubing/DSC_1575%20copy.png",
      "/products/Tubing/DSC_1611%20copy.png",
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

const Products = () => {
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
              <Button onClick={() => (window.location.href = "/contact")}>Request a quote</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                View home
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-6xl space-y-10">
          {productGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <ProductCard group={group} />
            </motion.div>
          ))}
        </section>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Products;

