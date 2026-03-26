import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Platform {
  name: string;
  subtitle: string;
  brandColor: string;
  logo: string | null;
  isMulti?: boolean;
}

const platforms: Platform[] = [
  {
    name: "Amazon",
    subtitle: "Search & DSP",
    brandColor: "39 100% 50%",
    logo: "/logos/amazon.svg",
  },
  {
    name: "Walmart",
    subtitle: "Search & DSP",
    brandColor: "210 100% 40%",
    logo: "/logos/walmart.svg",
  },
  {
    name: "Google",
    subtitle: "Ads Platform",
    brandColor: "217 89% 61%",
    logo: "/logos/google.svg",
  },
  {
    name: "TikTok",
    subtitle: "Ads Manager",
    brandColor: "349 89% 53%",
    logo: "/logos/tiktok.svg",
  },
  {
    name: "YouTube",
    subtitle: "Video Ads",
    brandColor: "0 100% 50%",
    logo: "/logos/youtube.svg",
  },
  {
    name: "Microsoft",
    subtitle: "Ads Platform",
    brandColor: "0 0% 45%",
    logo: "/logos/microsoft.svg",
  },
  {
    name: "The Trade Desk",
    subtitle: "Programmatic DSP",
    brandColor: "155 80% 35%",
    logo: "/logos/tradedesk.svg",
  },
  {
    name: "Target",
    subtitle: "Roundel",
    brandColor: "0 100% 40%",
    logo: "/logos/target.svg",
  },
  {
    name: "Instacart",
    subtitle: "Retail Media",
    brandColor: "145 70% 42%",
    logo: null,
  },
  {
    name: "Criteo",
    subtitle: "Commerce Media",
    brandColor: "16 100% 50%",
    logo: null,
  },
  {
    name: "More Networks",
    subtitle: "Kroger & more",
    brandColor: "var(--accent)",
    logo: null,
    isMulti: true,
  },
];

const PlatformLogoGrid = () => {
  return (
    <div>
      <h3 className="text-h3 text-foreground mb-6">We manage</h3>
      <div className="grid grid-cols-3 gap-3">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group relative p-5 rounded-lg bg-background/40 border border-border/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: platform.isMulti
                  ? undefined
                  : `0 0 20px -4px hsl(${platform.brandColor} / 0.3), inset 0 0 16px -8px hsl(${platform.brandColor} / 0.15)`,
              }}
            />

            <div className="relative flex flex-col items-center text-center gap-2 min-h-[72px] justify-center">
              {platform.isMulti ? (
                <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <Plus className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-tight">{platform.name}</span>
                </div>
              ) : platform.logo ? (
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="h-12 w-auto max-w-[140px] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : null}
              <span className="text-[10px] text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors duration-300 leading-tight">
                {platform.subtitle}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlatformLogoGrid;
