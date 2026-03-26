import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingElements from "@/components/ui/FloatingElements";
import SkaiPartnerBadge from "@/components/sections/SkaiPartnerBadge";
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";

interface HeroSectionProps {
  headline: React.ReactNode;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  centered?: boolean;
  dark?: boolean;
  showSkaiPartner?: boolean;
  children?: React.ReactNode;
}

const HeroSection = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  centered = true,
  dark = false,
  showSkaiPartner = false,
  children,
}: HeroSectionProps) => {
  return (
    <section className={`relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden ${dark ? "section-dark" : ""}`}>
      {/* Background layers */}
      <FloatingElements variant="hero" />
      <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className={`mx-auto max-w-site px-6 relative ${centered ? "text-center" : ""}`}>
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-h1 md:text-display max-w-4xl mx-auto text-foreground"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-body-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {subheadline}
        </motion.p>

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCta && (
              <Link to={primaryCta.href}>
                <Button size="lg" className="bg-primary !text-primary-foreground hover:bg-primary/90 btn-glow transition-all gap-2 text-[0.875rem] leading-[1.6] px-8 h-12">
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.href}>
                <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted text-body-sm px-8 h-12">
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </motion.div>
        )}

        {showSkaiPartner && <SkaiPartnerBadge />}

        {showSkaiPartner && (
          <div className="-mx-6 mt-10">
            <ClientLogoStrip />
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default HeroSection;
