import { motion } from "framer-motion";

interface NetworkLogo {
  name: string;
  logo: string;
}

interface ChannelLogoStripProps {
  label?: string;
  logos: NetworkLogo[];
}

const ChannelLogoStrip = ({ label = "We manage campaigns across", logos }: ChannelLogoStripProps) => {
  return (
    <section className="py-10 border-b border-border/50 bg-background">
      <div className="mx-auto max-w-site px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-body-sm text-muted-foreground text-center mb-6"
        >
          {label}
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((network, i) => (
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
        </div>
      </div>
    </section>
  );
};

export default ChannelLogoStrip;
