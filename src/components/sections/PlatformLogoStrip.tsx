import { motion } from "framer-motion";

const logos = [
  { name: "Amazon", icon: "amazon" },
  { name: "Walmart", icon: "walmart" },
  { name: "Google", icon: "google" },
  { name: "Meta", icon: "meta" },
  { name: "Skai", icon: "skai" },
];

const LogoIcon = ({ icon }: { icon: string }) => {
  const svgMap: Record<string, React.ReactNode> = {
    amazon: (
      <svg viewBox="0 0 120 36" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="28" letterSpacing="-1">amazon</text>
      </svg>
    ),
    walmart: (
      <svg viewBox="0 0 120 36" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="28" letterSpacing="-1">walmart</text>
      </svg>
    ),
    google: (
      <svg viewBox="0 0 100 36" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="28" letterSpacing="-1">google</text>
      </svg>
    ),
    meta: (
      <svg viewBox="0 0 72 36" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="28" letterSpacing="-1">meta</text>
      </svg>
    ),
    skai: (
      <svg viewBox="0 0 60 36" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="28" letterSpacing="-1">skai</text>
      </svg>
    ),
  };
  return <>{svgMap[icon]}</>;
};

const PlatformLogoStrip = () => {
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="py-14 md:py-18 border-y border-border/50 overflow-hidden bg-surface-elevated">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-body-sm text-muted-foreground text-center mb-8"
      >
        We manage campaigns across the platforms that matter
      </motion.p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-elevated to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-elevated to-transparent z-10" />
        
        {/* Marquee */}
        <div className="flex animate-marquee w-max">
          {doubledLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center mx-8 md:mx-12 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300"
            >
              <LogoIcon icon={logo.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformLogoStrip;
