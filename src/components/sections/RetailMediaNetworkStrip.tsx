import { motion } from "framer-motion";

const networks = [
  { name: "Amazon Ads", logo: "/logos/amazon.svg" },
  { name: "Amazon DSP", logo: "/logos/amazon.svg" },
  { name: "Walmart Connect", logo: "/logos/walmart.svg" },
  { name: "Walmart DSP", logo: "/logos/walmart.svg" },
  { name: "Target Roundel", logo: "/logos/target.svg" },
];

const RetailMediaNetworkStrip = () => {
  return (
    <section className="py-10 border-b border-border/50 bg-background">
      <div className="mx-auto max-w-site px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-body-sm text-muted-foreground text-center mb-6"
        >
          We manage retail media across the networks that matter
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {networks.map((network, i) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="h-16 w-28 flex items-center justify-center">
                <img src={network.logo} alt={network.name} className="h-14 w-auto object-contain" />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {network.name}
              </span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: networks.length * 0.08, duration: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="h-10 w-16 flex items-center justify-center text-muted-foreground/40">
              <span className="text-lg font-semibold">+ More</span>
            </div>
            <span className="text-xs text-muted-foreground">RMNs</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RetailMediaNetworkStrip;
