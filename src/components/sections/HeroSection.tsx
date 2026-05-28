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
  backgroundImage?: string;
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
  backgroundImage,
  children,
}: HeroSectionProps) => {
  return (
    <section className={`relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden ${dark ? "section-dark" : "bg-primary"}`}>
      {/* Background image with dark overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-primary/85" />
        </>
      )}
      {/* Background layers */}
      <FloatingElements variant="hero" />
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />

      <div className={`mx-auto max-w-site px-6 relative ${centered ? "text-center" : ""}`}>
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-h1 md:text-display max-w-4xl mx-auto text-primary-foreground"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-body-lg text-primary-foreground/70 max-w-2xl mx-auto"
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
                <Button size="lg" className="bg-primary-foreground !text-primary hover:bg-primary-foreground/90 transition-all gap-2 text-base px-10 h-14 font-semibold">
                  {primaryCta.label}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.href}>
                <Button size="lg" className="bg-destructive !text-destructive-foreground hover:bg-destructive/90 text-base px-10 h-14 font-semibold">

                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </motion.div>
        )}

        {showSkaiPartner && <SkaiPartnerBadge />}

        {children}
      </div>
    </section>
  );
};

export default HeroSection;
