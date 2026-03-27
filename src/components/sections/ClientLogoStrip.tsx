import { motion } from "framer-motion";

const clientLogos = [
  { name: "Moen", src: "/logos/clients/moen.png" },
  { name: "Gimme Seaweed", src: "/logos/clients/gimme-seaweed.png" },
  { name: "Lens.com", src: "/logos/clients/lens-com.png" },
  { name: "Wahoo Fitness", src: "/logos/clients/wahoo-fitness.png" },
  { name: "The Knot", src: "/logos/clients/the-knot.png" },
  { name: "JD Power", src: "/logos/clients/jd-power.png" },
  { name: "Brighton Collectibles", src: "/logos/clients/brighton-collectibles.png" },
  { name: "Star Tribune", src: "/logos/clients/star-tribune.png" },
  { name: "Amwell", src: "/logos/clients/amwell.png" },
  { name: "Todd Snyder", src: "/logos/clients/todd-snyder.png" },
  { name: "Universal Companies", src: "/logos/clients/universal-companies.png" },
];

const ClientLogoStrip = () => {
  // Double the logos for seamless loop
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="pt-14 pb-20 md:pt-18 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-site px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-body-sm text-primary-foreground/60 text-center mb-8 tracking-wide uppercase font-medium"
        >
          Trusted by brands we're proud to partner with
        </motion.p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max gap-12 md:gap-16">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center h-16 md:h-20 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoStrip;
