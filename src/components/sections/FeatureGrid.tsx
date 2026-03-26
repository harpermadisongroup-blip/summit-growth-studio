import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import IconBadge from "@/components/ui/IconBadge";
import SkaiLogo from "@/components/ui/SkaiLogo";

interface FeatureGridProps {
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  columns?: 2 | 3 | 4;
  variant?: "light" | "dark";
}

const FeatureGrid = ({ features, columns = 3, variant = "light" }: FeatureGridProps) => {
  const colClass = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-6`}>
      {features.map((feature, i) => {
        const isSkai = feature.title === "Powered by Skai";
        const card = (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`group p-6 rounded-xl transition-all duration-300 gradient-border-hover ${
              isSkai
                ? variant === "dark"
                  ? "glass-card-dark border border-primary/20 hover:border-primary/40 hover:bg-navy-light/80"
                  : "glass-card border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
                : variant === "dark"
                  ? "glass-card-dark hover:bg-navy-light/80"
                  : "glass-card hover:shadow-lg hover:-translate-y-0.5"
            }`}
          >
            {isSkai ? (
              <SkaiLogo alt="Skai" className="h-7 mb-4 invert brightness-200 opacity-80 group-hover:opacity-100 transition-opacity" />
            ) : (
              <IconBadge icon={feature.icon} size="lg" variant={variant === "dark" ? "accent" : "primary"} className="mb-4" />
            )}
            <h3 className={`text-lg font-semibold ${variant === "dark" ? "text-secondary-foreground" : "text-foreground"}`}>
              {feature.title}
            </h3>
            <p className={`mt-2 text-body-sm ${variant === "dark" ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
              {feature.description}
            </p>
            {isSkai && (
              <span className={`inline-flex items-center gap-1 mt-3 text-xs font-medium ${variant === "dark" ? "text-accent" : "text-primary"} group-hover:underline`}>
                Learn more about Skai →
              </span>
            )}
          </motion.div>
        );

        if (isSkai) {
          return (
            <Link key={feature.title} to="/platforms/skai" className="contents">
              {card}
            </Link>
          );
        }

        return card;
      })}
    </div>
  );
};

export default FeatureGrid;
