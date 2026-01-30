import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Banjo Body",
    category: "Hydraulic Solutions",
    description: "Precision Banjo bodies for hydraulic and fuel applications.",
    image: "/products-home/10.png",
    homeImage: "/products-home/custom/abstract_machining.png",
  },
  {
    name: "Connecting Rods",
    category: "Tubular Assemblies",
    description: "Durable connecting rods engineered for high-load environments.",
    image: "/products-home/11.png",
    homeImage: "/products-home/custom/abstract_steel.png",
  },
  {
    name: "Hydraulic Assembly",
    category: "Hydraulic Solutions",
    description: "Complete hydraulic assemblies ready for OEM integration.",
    image: "/products-home/12.png",
    homeImage: "/products-home/custom/abstract_hydraulics.png",
  },
  {
    name: "Machined Components",
    category: "Fabricated Components",
    description: "Custom machined parts for diverse industrial applications.",
    image: "/products-home/13.png",
  },
  {
    name: "Seat Frame Tubes",
    category: "Tubular Assemblies",
    description: "Seat frame tubes designed for automotive and off-road vehicles.",
    image: "/products-home/14.png",
  },
  {
    name: "Stainless Steel Tubes",
    category: "Tubular Assemblies",
    description: "Corrosion-resistant stainless steel tubing for critical systems.",
    image: "/products-home/15.png",
  },
  {
    name: "Fender Assembly",
    category: "Fabricated Components",
    description: "Robust fender assemblies built to OEM specifications.",
    image: "/products-home/16.png",
  },
  {
    name: "Tractor Tubes",
    category: "Tubular Assemblies",
    description: "High-strength tubes for tractors and heavy-duty vehicles.",
    image: "/products-home/17.png",
  },
];

const filters = ["All", "Tubular Assemblies", "Hydraulic Solutions", "Fabricated Components"];

interface ProductsSectionProps {
  limit?: number;
}

export const ProductsSection = ({ limit }: ProductsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  // If a limit is set, we ignore filters and just take the first N items
  // Otherwise we apply the active filter
  const displayedProducts = limit
    ? products.slice(0, limit)
    : activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section id="products" className="py-24 px-6 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Product Families
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A focused catalog of tubular assemblies, hydraulic solutions, and fabricated components.
          </p>
        </motion.div>

        {/* Show filters only if NO limit is set (i.e., full view) */}
        {!limit && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </motion.div>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${limit ? 'justify-items-center' : ''}`}>
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full max-w-md"
            >
              <Card className="h-full group hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 bg-card border-border hover:-translate-y-2 overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-muted relative">
                  {/* Placeholder for custom image - currently using what was there, or a generic placeholder if missing */}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/600x400/eee/999?text=${encodeURIComponent(product.name)}`;
                    }}
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full mt-auto"
                    onClick={() => navigate("/products")}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show 'See More' button only if limit IS set */}
        {limit && (
          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={() => navigate("/products")}
              className="shadow-lg hover:shadow-primary/25 px-8"
            >
              See All Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
