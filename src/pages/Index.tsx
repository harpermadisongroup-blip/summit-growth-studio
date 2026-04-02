import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import PlatformLogoStrip from "@/components/sections/PlatformLogoStrip";
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";

import PlatformLogoGrid from "@/components/ui/PlatformLogoGrid";
import DashboardMockup from "@/components/ui/DashboardMockup";
import IconBadge from "@/components/ui/IconBadge";
import GradientText from "@/components/ui/GradientText";
import FloatingElements from "@/components/ui/FloatingElements";
import MetricCounter from "@/components/ui/MetricCounter";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3, Users, Zap, Shield, LineChart, Eye } from "lucide-react";
import heroTeamBg from "@/assets/hero-team-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <HeroSection
        headline="Enterprise ad tech, without the enterprise barriers."
        subheadline="Powered by Skai's AI-driven commerce media platform—the same technology behind the world's largest advertisers. Combined with hands-on media management across Amazon, Walmart, Google, Meta, and other RMNs."
        primaryCta={{ label: "Schedule a Strategy Call", href: "/strategy-call" }}
        secondaryCta={{ label: "Book a Demo", href: "/contact" }}
        showSkaiPartner
        backgroundImage={heroTeamBg}
      >
        
      </HeroSection>

      {/* Client Logos */}
      <ClientLogoStrip />

      {/* Content block between tickers */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-site px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-h2 text-foreground max-w-3xl mx-auto">
            One team. One platform. <GradientText>Every channel covered.</GradientText>
          </motion.h2>
          <motion.p {...fadeInUp} className="mt-4 text-body-lg text-muted-foreground max-w-2xl mx-auto">
            We unify your advertising strategy across search, social, retail media, and programmatic—so you can stop juggling tools and start scaling results.
          </motion.p>
        </div>
      </section>

      {/* Platform Logos */}
      <PlatformLogoStrip />

      {/* The Real Problem — Dark Section */}
      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <FloatingElements variant="section" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        
        <div className="mx-auto max-w-site px-6 relative">
          <div className="max-w-3xl">
            <motion.p {...fadeInUp} className="text-body-sm font-medium text-accent tracking-wide uppercase mb-4">
              The Real Problem
            </motion.p>
            <motion.h2 {...fadeInUp} className="text-h2 text-secondary-foreground">
              Growth gets harder, <GradientText>not easier.</GradientText>
            </motion.h2>
            <motion.p {...fadeInUp} className="mt-6 text-body-lg text-secondary-foreground/60">
              At a certain point, most brands hit the same wall. You're working harder, spending more, and managing more platforms—but the results don't scale the way they should.
            </motion.p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Ad costs keep rising", desc: "CPCs and CPMs climb while margins shrink.", num: "01" },
              { icon: Target, title: "Performance plateaus", desc: "You've optimized what you can with the tools you have.", num: "02" },
              { icon: BarChart3, title: "Channels multiply", desc: "Every new platform adds complexity without adding clarity.", num: "03" },
              { icon: Users, title: "Teams get stretched thin", desc: "There's never enough bandwidth to do it all well.", num: "04" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative p-6 rounded-xl glass-card-dark group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Watermark number */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-primary/[0.06]">{item.num}</span>
                <IconBadge icon={item.icon} size="lg" variant="accent" className="mb-4" />
                <h3 className="text-lg font-semibold text-secondary-foreground">{item.title}</h3>
                <p className="mt-2 text-body-sm text-secondary-foreground/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeInUp} className="mt-14 text-body-lg text-secondary-foreground max-w-2xl font-medium">
            You know there's another level of performance.
            <span className="text-secondary-foreground/50"> You just don't have the same technology and resources the enterprise players do.</span>
          </motion.p>
        </div>
      </section>

      {/* The Solution */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <FloatingElements variant="section" />
        <div className="mx-auto max-w-site px-6 relative">
          <div className="max-w-3xl">
            <motion.p {...fadeInUp} className="text-body-sm font-medium text-accent tracking-wide uppercase mb-4">
              The Solution
            </motion.p>
            <motion.h2 {...fadeInUp} className="text-h2 text-foreground">
              Enterprise tools.<br /><GradientText>A performance team to run them.</GradientText>
            </motion.h2>
            <motion.p {...fadeInUp} className="mt-6 text-body-lg text-muted-foreground">
              Allied gives growth-stage brands access to enterprise-grade advertising platforms—combined with full-service, performance-driven media management.
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* We Manage */}
            <motion.div {...fadeInUp} className="p-8 rounded-xl glass-card">
              <PlatformLogoGrid />
            </motion.div>

            {/* You Get */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="p-8 rounded-xl bg-mesh-cta text-secondary-foreground relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
              <div className="relative">
                <h3 className="text-h3 mb-6">You get</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Shield, label: "Enterprise-level ad technology" },
                    { icon: Zap, label: "Cross-channel strategy" },
                    { icon: LineChart, label: "Hands-on optimization" },
                    { icon: Eye, label: "Ongoing performance management" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                      <span className="text-body text-secondary-foreground/80">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Outcomes — Subtle gradient bg */}
      <section className="relative py-24 md:py-32 bg-surface-elevated overflow-hidden">
        <FloatingElements variant="section" />
        <div className="mx-auto max-w-site px-6 relative">
          <div className="max-w-3xl">
            <motion.p {...fadeInUp} className="text-body-sm font-medium text-accent tracking-wide uppercase mb-4">
              The Outcomes
            </motion.p>
            <motion.h2 {...fadeInUp} className="text-h2 text-foreground">
              What this <GradientText>actually changes.</GradientText>
            </motion.h2>
          </div>

          {/* Metric counters */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCounter value={40} suffix="%" label="Average improvement in ROAS" />
            <MetricCounter value={3} suffix="x" label="Faster optimization cycles" />
            <MetricCounter value={60} suffix="%" label="Reduction in wasted spend" />
            <MetricCounter value={5} suffix="+" label="Channels unified" />
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "More efficient ad spend", desc: "Every dollar works harder across all channels." },
              { title: "Faster optimization cycles", desc: "Enterprise tools enable faster, data-driven decisions." },
              { title: "Stronger cross-channel performance", desc: "Unified strategy across Amazon, Google, Meta, and more." },
              { title: "Clearer visibility", desc: "Know exactly what's working and where to invest." },
              { title: "A team that scales with you", desc: "As your growth accelerates, so does your support." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 rounded-xl glass-card gradient-border-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-body-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CTABlock />
    </PageLayout>
  );
};

export default Index;
