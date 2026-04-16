import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import GradientText from "@/components/ui/GradientText";
import IconBadge from "@/components/ui/IconBadge";
import FloatingElements from "@/components/ui/FloatingElements";
import MetricCounter from "@/components/ui/MetricCounter";
import { motion } from "framer-motion";
import heroCaseStudiesBg from "@/assets/hero-casestudies-bg.jpg";
import { ArrowRight, TrendingUp, Target, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    slug: "ecommerce-brand-roas",
    title: "42% increase in ROAS across Amazon and Google",
    client: "National DTC Brand",
    category: "Full-Service Management",
    heroMetric: "42%",
    heroLabel: "ROAS improvement",
    challenge: "A rapidly growing DTC brand was managing Amazon and Google campaigns in-house with limited tooling. Rising CPCs and fragmented reporting made it impossible to identify what was driving profitable growth versus wasted spend.",
    approach: "We migrated their campaigns to enterprise-grade platforms, unified reporting across channels, rebuilt their keyword and audience architecture, and implemented automated bidding strategies aligned with margin targets.",
    results: "Within 90 days, the brand saw a 42% improvement in blended ROAS, a 28% reduction in wasted ad spend, and clear cross-channel attribution for the first time.",
    metrics: [
      { value: "42%", label: "ROAS improvement", num: 42 },
      { value: "28%", label: "Reduction in wasted spend", num: 28 },
      { value: "3x", label: "Faster optimization cycles", num: 3 },
    ],
  },
  {
    slug: "retail-media-scale",
    title: "Scaled retail media spend 4x while maintaining efficiency",
    client: "CPG Brand",
    category: "Retail Media Management",
    heroMetric: "4x",
    heroLabel: "Spend scaled",
    challenge: "A mid-market CPG brand wanted to aggressively scale retail media across Amazon and Walmart but lacked the technology and expertise to do so without eroding margins.",
    approach: "Allied deployed enterprise DSP and search tools across both retailers, built custom audiences from first-party retail data, and implemented dayparting and bid automation to maintain efficiency at scale.",
    results: "The brand successfully scaled retail media investment 4x over six months while keeping ACOS within 2 points of their original target.",
    metrics: [
      { value: "4x", label: "Spend scaled", num: 4 },
      { value: "<2pt", label: "ACOS variance", num: 2 },
      { value: "6 mo", label: "Time to scale", num: 6 },
    ],
  },
  {
    slug: "agency-platform-access",
    title: "Agency reduced client onboarding time by 60%",
    client: "Performance Agency",
    category: "Supported Self-Serve",
    heroMetric: "60%",
    heroLabel: "Faster onboarding",
    challenge: "A growing performance agency needed enterprise-level platform access for their clients but couldn't justify the cost or complexity of direct platform contracts for each account.",
    approach: "Through Allied's Supported Self-Serve model, the agency gained immediate access to enterprise platforms with centralized billing, shared learnings, and dedicated support for complex campaign setups.",
    results: "Client onboarding dropped from weeks to days, the agency expanded its service offering, and client retention improved as a result of better performance tooling.",
    metrics: [
      { value: "60%", label: "Faster onboarding", num: 60 },
      { value: "35%", label: "Client retention improvement", num: 35 },
      { value: "12", label: "New clients in first quarter", num: 12 },
    ],
  },
  {
    slug: "dtc-walmart-launch",
    title: "DTC brand launched on Walmart and hit $1M in 90 days",
    client: "Emerging DTC Brand",
    category: "Retail Media Management",
    heroMetric: "$1M",
    heroLabel: "Revenue in 90 days",
    challenge: "An Amazon-native DTC brand wanted to diversify onto Walmart but had no experience with Walmart Connect, no existing product listings optimized for the platform, and a tight timeline to prove ROI.",
    approach: "Allied set up the brand's Walmart presence from scratch—product listing optimization, Sponsored Search campaigns, and DSP retargeting—all managed through Skai's enterprise platform for unified optimization.",
    results: "The brand hit $1M in Walmart revenue within 90 days, with a 3.2x ROAS and a clear playbook for continued scaling.",
    metrics: [
      { value: "$1M", label: "Revenue in 90 days", num: 1 },
      { value: "3.2x", label: "ROAS", num: 3.2 },
      { value: "90", label: "Days to launch", num: 90 },
    ],
  },
  {
    slug: "cross-channel-efficiency",
    title: "Unified cross-channel strategy cut CPA by 31%",
    client: "Health & Wellness Brand",
    category: "Full-Service Management",
    heroMetric: "31%",
    heroLabel: "CPA reduction",
    challenge: "A health and wellness brand was running paid search, social, and retail media with three different vendors. Fragmented data made it impossible to understand true customer acquisition cost or optimize across channels.",
    approach: "Allied consolidated all channels onto a single platform, built unified attribution models, and reallocated budget based on true incremental performance rather than last-click metrics.",
    results: "Within four months, the brand reduced blended CPA by 31% and gained full visibility into the customer journey across search, social, and retail media.",
    metrics: [
      { value: "31%", label: "CPA reduction", num: 31 },
      { value: "4 mo", label: "Time to results", num: 4 },
      { value: "100%", label: "Cross-channel visibility", num: 100 },
    ],
  },
  {
    slug: "enterprise-transition",
    title: "Enterprise brand maintained performance through full team transition",
    client: "Fortune 500 CPG",
    category: "Full-Service Management",
    heroMetric: "0%",
    heroLabel: "Performance drop",
    challenge: "A Fortune 500 CPG brand lost its entire digital media team within a two-month period. Campaigns across Amazon, Google, and Meta were running on autopilot with no one monitoring performance or making optimizations.",
    approach: "Allied stepped in within 72 hours with full campaign management across all channels, stabilized performance, and provided strategic continuity while the brand rebuilt its internal team over the following six months.",
    results: "Zero performance degradation during the transition period. The brand maintained ROAS targets across all channels and used the time to hire a stronger team with Allied's support.",
    metrics: [
      { value: "0%", label: "Performance drop", num: 0 },
      { value: "72hr", label: "Time to activate", num: 72 },
      { value: "6 mo", label: "Transition support", num: 6 },
    ],
  },
];

const categories = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.category)))];

const aggregateStats = [
  { value: "42%", label: "ROAS Improvement" },
  { value: "4x", label: "Spend Scaled" },
  { value: "60%", label: "Faster Onboarding" },
  { value: "28%", label: "Wasted Spend Reduced" },
];

/* ── Hub Page ── */
export const CaseStudiesHub = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;

  const filteredStudies = caseStudies.filter(
    (cs) => activeCategory === "All" || cs.category === activeCategory
  );

  const visibleStudies = showAll ? filteredStudies : filteredStudies.slice(0, INITIAL_COUNT);
  const hasMore = filteredStudies.length > INITIAL_COUNT && !showAll;

  return (
    <PageLayout>
      <HeroSection
        headline="Real results. Real brands."
        subheadline="From 42% ROAS improvement to 4x scaled spend to 60% faster onboarding—see how growth-stage brands and agencies use Allied's enterprise technology and flexible engagement models to unlock measurable performance gains."
        centered
        backgroundImage={heroCaseStudiesBg}
        primaryCta={{ label: "Schedule a Strategy Call", href: "/strategy-call" }}
      />

      {/* Aggregate Metrics Bar */}
      <section className="py-16 md:py-20 border-b border-border/50 bg-background">
        <div className="mx-auto max-w-site px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {aggregateStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pt-16 pb-8 bg-background">
        <div className="mx-auto max-w-site px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/case-studies/${cs.slug}`}
                className="block p-8 rounded-xl glass-card gradient-border-hover hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group h-full relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="inline-block text-body-sm text-primary font-medium bg-primary/10 px-2.5 py-0.5 rounded-full">{cs.category}</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-display text-gradient">{cs.heroMetric}</span>
                  <span className="text-body-sm text-muted-foreground">{cs.heroLabel}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{cs.title}</h3>
                <p className="mt-2 text-body-sm text-muted-foreground">{cs.client}</p>
                <div className="mt-6 flex items-center gap-1 text-body-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Read case study <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See more */}
        {hasMore && (
          <div className="mx-auto max-w-site px-6 text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
            >
              See more case studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Empty state */}
        {visibleStudies.length === 0 && (
          <div className="mx-auto max-w-site px-6 text-center py-16">
            <p className="text-muted-foreground">No case studies in this category yet. Check back soon.</p>
          </div>
        )}
      </section>

      <CTABlock />
    </PageLayout>
  );
};

/* ── Detail Page ── */
export const CaseStudyDetail = () => {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <PageLayout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-h2 text-foreground">Case study not found</h1>
          <Link to="/case-studies" className="mt-4 text-primary hover:underline inline-block">
            Back to case studies
          </Link>
        </div>
      </PageLayout>
    );
  }

  const icons = [TrendingUp, Target, BarChart3];

  return (
    <PageLayout>
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <FloatingElements variant="hero" />
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="mx-auto max-w-site px-6 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-body-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{cs.category}</span>
            <h1 className="mt-4 text-h1 text-foreground max-w-3xl">{cs.title}</h1>
            <p className="mt-4 text-body-lg text-muted-foreground">{cs.client}</p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cs.metrics.map((m, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl glass-card"
                >
                  <IconBadge icon={Icon} size="md" variant="primary" className="mb-3" />
                  <div className="text-display text-gradient">{m.value}</div>
                  <p className="text-body-sm text-muted-foreground mt-1">{m.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Content Sections */}
          <div className="mt-16 max-w-3xl space-y-12">
            {[
              { title: "The Challenge", content: cs.challenge },
              { title: "The Approach", content: cs.approach },
              { title: "The Results", content: cs.results },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h2 className="text-h3 text-foreground">{section.title}</h2>
                <p className="mt-4 text-body text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </PageLayout>
  );
};
