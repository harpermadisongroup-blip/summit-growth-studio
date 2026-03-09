import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FloatingElements from "@/components/ui/FloatingElements";

interface CTABlockProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const CTABlock = ({
  headline = "Ready to scale your performance?",
  subheadline = "See if your brand qualifies for enterprise-level ad tech and management.",
  ctaLabel = "Schedule a Strategy Call",
  ctaHref = "/strategy-call",
}: CTABlockProps) => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-site px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-mesh-cta rounded-2xl p-12 md:p-16 text-center overflow-hidden"
        >
          <FloatingElements variant="cta" />
          <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none rounded-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-h2 text-secondary-foreground">{headline}</h2>
            <p className="mt-4 text-body-lg text-secondary-foreground/60 max-w-xl mx-auto">
              {subheadline}
            </p>
            <Link to={ctaHref} className="inline-block mt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow gap-2 px-8 h-12">
                {ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABlock;
