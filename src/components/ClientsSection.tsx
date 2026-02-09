import { motion } from "framer-motion";

const logos = [
  { src: "/partner%20brands/1.Captain%20Tractor.png", alt: "Captain Tractor" },
  { src: "/partner%20brands/2.Cooper%20Corp.png", alt: "Cooper Corp" },
  { src: "/partner%20brands/3.Chromewell%20engineering.png", alt: "Chromewell Engineering" },
  { src: "/partner%20brands/4.Kubota%20Logo.png", alt: "Kubota" },
  { src: "/partner%20brands/5.ZF%20India.png", alt: "ZF India" },
  { src: "/partner%20brands/6.Duroshox.png", alt: "Duroshox" },
  { src: "/partner%20brands/7.active%20chromewell.png", alt: "Active Chromewell" },
  { src: "/partner%20brands/8.ADM.png", alt: "ADM" },
  { src: "/partner%20brands/9.JK.png", alt: "JK" },
  { src: "/partner%20brands/10.Kinetic.png", alt: "Kinetic" },
  { src: "/partner%20brands/11.SKH.png", alt: "SKH" },
];

export const ClientsSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Trusted Global Clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Clients of Our Manufacturing Excellence
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Partnering with OEMs and industrial leaders who rely on our precision, quality, and delivery discipline.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center rounded-lg bg-card border border-border/70 px-3 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-24 md:max-h-28 w-full object-contain opacity-95 grayscale hover:grayscale-0 transition duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

