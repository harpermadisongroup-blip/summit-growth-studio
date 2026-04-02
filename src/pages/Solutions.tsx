import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import GradientText from "@/components/ui/GradientText";
import IconBadge from "@/components/ui/IconBadge";
import FloatingElements from "@/components/ui/FloatingElements";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Users } from "lucide-react";
import heroSolutionsBg from "@/assets/hero-solutions-bg.jpg";
import { Button } from "@/components/ui/button";

const models = [
  {
    title: "Full-Service Performance Management",
    desc: "We run your paid media across all major channels. Strategy, execution, optimization, and reporting—handled entirely by our team.",
    features: ["Strategy", "Execution", "Optimization", "Reporting"],
    href: "/solutions/full-service",
    icon: Settings,
    primary: true,
  },
  {
    title: "Supported Self-Serve Model",
    desc: "You run campaigns. We provide the enterprise platform and expert support to help you perform at a higher level.",
    features: ["Enterprise platform access", "Onboarding", "Strategic guidance", "Ongoing support"],
    href: "/solutions/self-serve",
    icon: Users,
    primary: false,
  },
];

const Solutions = () => {
  return (
    <PageLayout>
      <HeroSection
        headline="Enterprise ad tech with performance options built around your team."
        subheadline="Choose full-service management or a supported self-serve model. Either way, you get enterprise-grade technology and expert-level performance."
        primaryCta={{ label: "Schedule a Strategy Call", href: "/strategy-call" }}
        backgroundImage={heroSolutionsBg}
        showSkaiPartner
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-site px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {models.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-8 md:p-10 rounded-2xl transition-all duration-300 ${
                  model.primary
                    ? "bg-mesh-cta text-secondary-foreground relative overflow-hidden"
                    : "glass-card gradient-border-hover"
                }`}
              >
                {model.primary && <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />}
                <div className="relative">
                  <IconBadge icon={model.icon} size="lg" variant={model.primary ? "accent" : "primary"} className="mb-6" />
                  <h3 className="text-h3 mb-3">{model.title}</h3>
                  <p className={`text-body mb-6 ${model.primary ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>{model.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {model.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${model.primary ? "bg-accent" : "bg-primary"}`} />
                        <span className={`text-body-sm ${model.primary ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={model.href}>
                    <Button variant={model.primary ? "default" : "outline"} className={`gap-2 ${model.primary ? "btn-glow" : ""}`}>
                      Explore {model.primary ? "Full-Service" : "Supported Model"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <FloatingElements variant="section" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="mx-auto max-w-site px-6 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-h2 text-secondary-foreground mb-6"
          >
            Additional <GradientText>Solutions</GradientText>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Enterprise Platform Access", href: "/solutions/enterprise-platform", desc: "Access world-class ad platforms without enterprise contracts." },
              { title: "Retail Media Management", href: "/solutions/retail-media", desc: "Navigate retail media networks with expert management." },
              { title: "Amazon Advertising", href: "/solutions/amazon", desc: "Search, DSP, and full-funnel Amazon strategy." },
              { title: "Walmart Advertising", href: "/solutions/walmart", desc: "Walmart Search and DSP, managed for performance." },
              { title: "Paid Search (Google & Microsoft)", href: "/solutions/paid-search", desc: "Google Ads and Microsoft Advertising with enterprise transparency." },
              { title: "Paid Social (Meta & More)", href: "/solutions/social", desc: "Facebook, Instagram, TikTok, Snap, Pinterest, and LinkedIn." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className="block p-6 rounded-xl glass-card-dark gradient-border-hover hover:-translate-y-1 transition-all duration-300 text-left group h-full"
                >
                  <h3 className="text-lg font-semibold text-secondary-foreground group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="mt-2 text-body-sm text-secondary-foreground/50">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-body-sm text-accent font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </PageLayout>
  );
};

export default Solutions;
