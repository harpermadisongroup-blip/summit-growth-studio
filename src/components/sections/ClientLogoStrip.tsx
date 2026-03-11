import { motion } from "framer-motion";

const clientLogos = [
  { name: "Moen", src: "/logos/clients/moen.png" },
  { name: "Gimme Seaweed", src: "/logos/clients/gimme-seaweed.png" },
  { name: "Lens.com", src: "/logos/clients/lens-com.png" },
  { name: "Wahoo Fitness", src: "/logos/clients/wahoo-fitness.png" },
  { name: "The Knot", src: "/logos/clients/the-knot.png" },
  { name: "JD Power", src: "/logos/clients/jd-power.png" },
];

const ClientLogoStrip = () => {
  return (
    <section className="py-12 md:py-16 border-b border-border">
      <div className="mx-auto max-w-site px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-body-sm text-muted-foreground text-center mb-8 tracking-wide uppercase font-medium"
        >
          Trusted by brands we're proud to partner with
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
          {clientLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex items-center justify-center h-16 md:h-20 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoStrip;
