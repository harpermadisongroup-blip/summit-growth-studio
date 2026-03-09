import { motion } from "framer-motion";

const networks = [
  {
    name: "Amazon Ads",
    subtitle: "Sponsored Products, Brands & Video",
    logo: "/logos/amazon.svg",
    brandColor: "hover:border-[hsl(30,100%,50%)]/30",
  },
  {
    name: "Amazon DSP",
    subtitle: "Programmatic Display, Video & CTV",
    logo: "/logos/amazon.svg",
    brandColor: "hover:border-[hsl(30,100%,50%)]/30",
  },
  {
    name: "Walmart Connect",
    subtitle: "Sponsored Search & Display",
    logo: "/logos/walmart.svg",
    brandColor: "hover:border-[hsl(210,100%,39%)]/30",
  },
  {
    name: "Walmart DSP",
    subtitle: "First-Party Data Programmatic",
    logo: "/logos/walmart.svg",
    brandColor: "hover:border-[hsl(210,100%,39%)]/30",
  },
  {
    name: "Target Roundel",
    subtitle: "On-Site & Off-Site Display",
    logo: "/logos/target.svg",
    brandColor: "hover:border-[hsl(0,100%,40%)]/30",
  },
  {
    name: "+ Other RMNs",
    subtitle: "100+ Retail Media Networks",
    isMore: true,
  },
];

const NetworksWeManageGrid = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-site px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-body-sm font-medium tracking-wide uppercase text-primary mb-4"
        >
          Networks We Manage
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-h2 text-foreground mb-4"
        >
          Amazon, Walmart, Target Roundel & Other RMNs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl text-body-lg text-muted-foreground mb-12"
        >
          We manage onsite search, DSP, and display campaigns across every major retail media network—giving you unified control, reporting, and optimization from a single platform.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {networks.map((network, i) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group p-6 rounded-xl glass-card border border-border/50 ${network.brandColor || ""} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center`}
            >
              {network.isMore ? (
                <div className="w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-muted-foreground">+</span>
                </div>
              ) : (
                <div className="w-14 h-14 rounded-xl bg-muted/30 flex items-center justify-center mb-4 group-hover:bg-muted/50 transition-colors">
                  <img
                    src={network.logo}
                    alt={network.name}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              )}
              <h3 className="text-base font-semibold text-foreground">{network.name}</h3>
              <p className="mt-1 text-body-sm text-muted-foreground">{network.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworksWeManageGrid;
