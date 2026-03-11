import { motion } from "framer-motion";

const clientLogos = [
  { name: "Client 1", placeholder: true },
  { name: "Client 2", placeholder: true },
  { name: "Client 3", placeholder: true },
  { name: "Client 4", placeholder: true },
  { name: "Client 5", placeholder: true },
  { name: "Client 6", placeholder: true },
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
              className="flex items-center justify-center h-10 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              {/* Replace these placeholders with actual <img> tags */}
              <div className="h-8 w-24 rounded bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium">
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoStrip;
