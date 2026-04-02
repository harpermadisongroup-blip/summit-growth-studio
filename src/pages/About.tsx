import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import GradientText from "@/components/ui/GradientText";
import IconBadge from "@/components/ui/IconBadge";
import FloatingElements from "@/components/ui/FloatingElements";
import { motion } from "framer-motion";
import { Target, Zap, Users, Shield } from "lucide-react";
import heroAboutBg from "@/assets/hero-about-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const differentiators = [
  { icon: Shield, title: "Enterprise platforms, accessible", desc: "We give growth-stage brands the same technology that powers the world's largest advertisers." },
  { icon: Zap, title: "Performance-first approach", desc: "Every decision is tied to measurable outcomes—not vanity metrics or activity reports." },
  { icon: Users, title: "Senior-level execution", desc: "No junior handoffs. Your campaigns are managed by experienced practitioners." },
  { icon: Target, title: "Cross-channel clarity", desc: "Unified strategy and reporting across Amazon, Walmart, Google, Meta, and retail media." },
];

const About = () => {
  return (
    <PageLayout>
      <HeroSection
        headline="Enterprise performance without enterprise barriers."
        subheadline="Allied Digital Strategies was built to close the gap between the advertising technology available to the largest brands and the growing companies that need it most."
        centered
        showSkaiPartner
      />

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-site px-6 max-w-3xl">
          <motion.div {...fadeInUp}>
            <p className="text-body-sm font-medium text-accent tracking-wide uppercase mb-4">Our Mission</p>
            <h2 className="text-h2 text-foreground">Give every growth-stage brand access to <GradientText>enterprise-level</GradientText> advertising performance.</h2>
            <p className="mt-6 text-body-lg text-muted-foreground leading-relaxed">
              The advertising landscape is increasingly dominated by platforms, data, and technology that only the biggest brands can access. Allied exists to change that. We combine enterprise-grade platforms with hands-on performance management so growth-stage brands can compete at the highest level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different — Dark */}
      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <FloatingElements variant="section" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="mx-auto max-w-site px-6 relative">
          <motion.h2 {...fadeInUp} className="text-h2 text-secondary-foreground text-center mb-16">
            What makes us <GradientText>different</GradientText>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-xl glass-card-dark gradient-border-hover hover:-translate-y-1 transition-all duration-300"
              >
                <IconBadge icon={d.icon} size="lg" variant="accent" className="mb-4" />
                <h3 className="text-lg font-semibold text-secondary-foreground">{d.title}</h3>
                <p className="mt-3 text-body text-secondary-foreground/60">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-site px-6">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <p className="text-body-sm font-medium text-accent tracking-wide uppercase mb-4">Our Approach</p>
            <h2 className="text-h2 text-foreground">Technology + talent, <GradientText>aligned.</GradientText></h2>
            <p className="mt-6 text-body-lg text-muted-foreground leading-relaxed">
              We don't just give you access to better tools. We pair enterprise platforms with experienced practitioners who know how to extract maximum performance from every channel.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            {[
              { step: "01", title: "Audit & strategy", desc: "We assess your current performance and build a cross-channel plan aligned with your goals." },
              { step: "02", title: "Platform deployment", desc: "We migrate your campaigns to enterprise platforms and restructure for scale." },
              { step: "03", title: "Ongoing optimization", desc: "Continuous performance management with transparent reporting and strategic guidance." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="p-6 rounded-xl glass-card relative"
              >
                <span className="text-display text-gradient opacity-30">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-body-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </PageLayout>
  );
};

export default About;
