import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FloatingElements from "@/components/ui/FloatingElements";
import MetricCounter from "@/components/ui/MetricCounter";

import CelesteAISection from "@/components/sections/CelesteAISection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { useParams } from "react-router-dom";
import SkaiLogo from "@/components/ui/SkaiLogo";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Target, Zap, Shield, Layers, Globe, Monitor, Eye, LineChart, CheckCircle2, Database, Share2 } from "lucide-react";

const platformData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: { icon: any; title: string; description: string }[];
}> = {
  skai: {
    title: "Skai",
    subtitle: "Skai is the enterprise platform behind the world's largest advertisers—centralizing media data, activating campaigns across every major channel, and using AI to measure what's working. As Skai's exclusive North American reselling partner, Allied makes this same technology accessible to advertisers spending under $4M annually, at a price that aligns with their media budgets.",
    description: "Skai is an industry-leading omnichannel platform that centralizes media data, activates across channels, and measures what works—so brands can make smarter decisions and achieve better outcomes.",
    features: [
      { icon: Database, title: "Data Centralization", description: "Media data, first-party data, commerce data—everything in one place with a single login." },
      { icon: Layers, title: "Omnichannel Activation", description: "Manage retail media, search, and social from one platform across every channel." },
      { icon: Zap, title: "AI-Powered Optimization", description: "Automated bidding and budget allocation driven by Celeste AI and machine learning." },
      { icon: Share2, title: "Revenue Recovery", description: "Keep your commerce engine running with ticketing automation, revenue recovery, and retail readiness." },
      { icon: BarChart3, title: "Advanced Analytics", description: "Deep performance insights across all channels, campaigns, and publishers." },
      { icon: Shield, title: "Enterprise-Grade Controls", description: "Robust governance, permissions, and audit capabilities for teams of any size." },
    ],
  },
  amazon: {
    title: "Amazon Ads",
    subtitle: "Reach shoppers with high purchase intent on the world's largest marketplace.",
    description: "Amazon Advertising offers Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP. Allied manages the full spectrum to drive performance at every stage of the funnel.",
    features: [
      { icon: Target, title: "Sponsored Ads", description: "Keyword and product-targeted campaigns for maximum visibility." },
      { icon: Layers, title: "Amazon DSP", description: "Programmatic display and video across Amazon's ecosystem." },
      { icon: TrendingUp, title: "AMC Analytics", description: "Amazon Marketing Cloud for audience and attribution insights." },
      { icon: Globe, title: "Full-Funnel Coverage", description: "From awareness to conversion, a complete Amazon strategy." },
    ],
  },
  walmart: {
    title: "Walmart Connect",
    subtitle: "Tap into Walmart's massive shopper base with precision advertising.",
    description: "Walmart Connect gives brands access to Walmart's first-party data for search and display advertising. Allied helps you maximize performance across both channels.",
    features: [
      { icon: Target, title: "Sponsored Search", description: "Drive visibility and sales at the Walmart digital shelf." },
      { icon: Monitor, title: "Display Advertising", description: "Walmart DSP powered by first-party shopper data." },
      { icon: Eye, title: "Omnichannel Insights", description: "Measure impact across online and in-store purchases." },
      { icon: TrendingUp, title: "Performance Management", description: "Continuous optimization for growth and efficiency." },
    ],
  },
  google: {
    title: "Google Ads",
    subtitle: "Capture demand across Search, Shopping, Display, and YouTube.",
    description: "Google remains the most important demand-capture channel for most brands. Allied manages campaigns across Search, Shopping, Display, and YouTube to maximize performance.",
    features: [
      { icon: Globe, title: "Search & Shopping", description: "High-intent campaigns that convert when shoppers are ready to buy." },
      { icon: Monitor, title: "YouTube Advertising", description: "Video campaigns for brand awareness and consideration." },
      { icon: Layers, title: "Performance Max", description: "Google's AI-driven campaigns across all Google surfaces." },
      { icon: LineChart, title: "Measurement & Attribution", description: "Clear understanding of what's driving results." },
    ],
  },
  meta: {
    title: "Meta Ads",
    subtitle: "Reach and convert audiences across Facebook and Instagram.",
    description: "Meta's advertising platform offers powerful targeting and creative formats. Allied manages Facebook and Instagram campaigns as part of a cross-channel strategy.",
    features: [
      { icon: Target, title: "Prospecting", description: "Find new customers with lookalike and interest-based audiences." },
      { icon: Eye, title: "Retargeting", description: "Re-engage shoppers who've shown interest in your products." },
      { icon: Zap, title: "Creative Optimization", description: "Test and iterate on ad creative for maximum performance." },
      { icon: BarChart3, title: "Cross-Channel Integration", description: "Meta as part of a unified media strategy, not a silo." },
    ],
  },
};

const skaiMetrics = [
  { value: 8, prefix: "$", suffix: "B+", label: "Ad spend managed on Skai" },
  { value: 8200, suffix: "+", label: "Brands powered globally" },
  { value: 300, suffix: "+", label: "Publisher integrations" },
  { value: 30, suffix: "%", label: "Avg. efficiency improvement" },
];

const whyAlliedBenefits = [
  "Full Skai platform access without enterprise minimums or long-term contracts",
  "Pricing aligned to your media budget—not enterprise rate cards",
  "Hands-on campaign management from certified Skai specialists",
  "Cross-channel strategy across Amazon, Walmart, Google, Meta & other RMNs",
  "Transparent reporting with actionable, data-driven insights",
  "Flexible engagement—scale up, scale down, or move to self-serve anytime",
];

const PlatformDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = platformData[slug || ""];

  if (!data) {
    return (
      <PageLayout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-h2 text-foreground">Platform not found</h1>
        </div>
      </PageLayout>
    );
  }

  const isSkai = slug === "skai";

  return (
    <PageLayout>
      <HeroSection
        headline={
          isSkai ? (
            <SkaiLogo
              alt="Skai"
              className="h-24 md:h-28 mx-auto"
            />
          ) : (
            data.title
          )
        }
        subheadline={data.subtitle}
        primaryCta={{ label: "Schedule a Strategy Call", href: "/strategy-call" }}
        showSkaiPartner={isSkai}
      >
      </HeroSection>

      {/* Metrics strip — Skai only */}
      {isSkai && (
        <section className="relative py-16 md:py-20 border-b border-border/40">
          <div className="mx-auto max-w-site px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {skaiMetrics.map((metric) => (
                <MetricCounter
                  key={metric.label}
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  label={metric.label}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Allied + Skai */}
      {isSkai && (
        <section className="relative py-24 md:py-32">
          <div className="mx-auto max-w-site px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-body-sm font-semibold text-accent uppercase tracking-wider">
                  Why Allied + Skai
                </span>
                <h2 className="mt-3 text-h2 text-foreground">
                  Enterprise-grade ad tech, priced for your media budget
                </h2>
                <p className="mt-4 text-body-lg text-muted-foreground">
                  Skai's platform powers $8B+ in annual ad spend for the world's largest brands—but
                  direct access typically requires enterprise-scale budgets. As Skai's exclusive North American
                  reselling partner, Allied bridges that gap. We give advertisers spending under $4M annually
                  full access to the same technology, paired with decades of performance media expertise,
                  at a cost that makes sense for your business.
                </p>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5"
              >
                {whyAlliedBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-body text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>
      )}

      {/* Celeste AI — Skai only */}
      {isSkai && <CelesteAISection />}

      {/* Platform Capabilities */}
      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <FloatingElements variant="section" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="mx-auto max-w-site px-6 relative">
          <SectionHeader
            label="Platform Capabilities"
            title={isSkai ? "One platform. Every channel. Total control." : "How Allied enhances your results"}
            description={data.description}
            dark
          />
          <div className="mt-12">
            <FeatureGrid features={data.features} columns={isSkai ? 3 : 2} variant="dark" />
          </div>
        </div>
      </section>

      {/* Testimonials — Skai only */}
      {isSkai && <TestimonialSection />}

      <CTABlock />
    </PageLayout>
  );
};

export default PlatformDetail;
