import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calculator, Zap, Shield, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import GradientText from "@/components/ui/GradientText";
import FloatingElements from "@/components/ui/FloatingElements";
import CTABlock from "@/components/sections/CTABlock";
import heroPricingBg from "@/assets/hero-pricing-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const plans = [
  {
    name: "Self-Serve",
    icon: Zap,
    description: "Platform access with expert guidance when you need it.",
    price: "1,500",
    period: "/mo",
    features: [
      "Self-Serve access to Skai tech stack",
      "Monthly strategy reviews",
      "Unlimited channel connections",
      "Unlimited end-users",
      "Dedicated Account Manager / Performance Strategist",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Full-Service",
    icon: Shield,
    description: "Hands-on campaign management across all your channels.",
    price: "2,500",
    period: "/mo",
    features: [
      "Everything in Self-Serve",
      "End-to-end campaign management",
      "Full-funnel media strategy",
      "Integrated cross-channel activation",
      "Creative flighting",
      "Precision budget & bid optimization",
      "Insight-driven reporting",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Enterprise",
    icon: Users,
    description: "Custom solutions for large-scale, multi-channel operations.",
    price: "Custom",
    period: "",
    features: [
      "Everything in Full-Service",
      "Custom channel mix",
      "Executive strategy sessions",
      "Custom integrations",
      "Priority support & SLA",
      "Unlimited channels",
      "Dedicated analytics team",
      "Quarterly business reviews",
    ],
    cta: "Get Started",
    highlight: false,
  },
];

const channelOptions = [
  { label: "Amazon Ads", value: "amazon" },
  { label: "Walmart Connect", value: "walmart" },
  { label: "Google Ads", value: "google" },
  { label: "YouTube Ads", value: "youtube" },
  { label: "Microsoft Ads", value: "microsoft" },
  { label: "Meta (Facebook/Instagram)", value: "meta" },
  { label: "TikTok Ads", value: "tiktok" },
  { label: "Instacart Ads", value: "instacart" },
  { label: "Criteo", value: "criteo" },
];

const selfServeSpendRanges = [
  { label: "$0 – $50k", min: 0, max: 50000 },
  { label: "$50k – $100k", min: 50000, max: 100000 },
  { label: "$100k – $250k", min: 100000, max: 250000 },
  { label: "$250k – $500k", min: 250000, max: 500000 },
  { label: "$500k+", min: 500000, max: 1000000 },
];

const fullServeSpendRanges = [
  { label: "$0 – $25k", min: 0, max: 25000 },
  { label: "$25k – $50k", min: 25000, max: 50000 },
  { label: "$50k – $75k", min: 50000, max: 75000 },
  { label: "$75k – $100k", min: 75000, max: 100000 },
  { label: "$100k+", min: 100000, max: 200000 },
];

const SELF_SERVE_RATE = 0.02;
const SELF_SERVE_MIN = 1500;
const FULL_SERVE_RATE = 0.10;
const FULL_SERVE_MIN = 2500;

const Pricing = () => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [spendIndex, setSpendIndex] = useState(1);
  const [managementLevel, setManagementLevel] = useState<"self" | "full">("full");

  const spendRanges = managementLevel === "self" ? selfServeSpendRanges : fullServeSpendRanges;

  const toggleChannel = (value: string) => {
    setSelectedChannels((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleManagementChange = (level: "self" | "full") => {
    setManagementLevel(level);
    setSpendIndex(1);
  };

  const estimate = useMemo(() => {
    const ranges = managementLevel === "self" ? selfServeSpendRanges : fullServeSpendRanges;
    const spend = ranges[spendIndex];
    const channelCount = Math.max(selectedChannels.length, 1);

    if (managementLevel === "self") {
      const lowFee = Math.max(Math.round(spend.min * SELF_SERVE_RATE / 100) * 100, SELF_SERVE_MIN);
      const highFee = Math.max(Math.round(spend.max * SELF_SERVE_RATE / 100) * 100, SELF_SERVE_MIN);
      const isLastBucket = spendIndex === selfServeSpendRanges.length - 1;

      return {
        monthlyLow: lowFee,
        monthlyHigh: isLastBucket ? null : highFee,
        monthly: null,
        channels: channelCount,
        spend: spend.label,
      };
    } else {
      const lowFee = Math.max(Math.round(spend.min * FULL_SERVE_RATE / 100) * 100, FULL_SERVE_MIN);
      const highFee = Math.max(Math.round(spend.max * FULL_SERVE_RATE / 100) * 100, FULL_SERVE_MIN);
      const isLastBucket = spendIndex === fullServeSpendRanges.length - 1;

      return {
        monthlyLow: lowFee,
        monthlyHigh: isLastBucket ? null : highFee,
        monthly: null,
        channels: channelCount,
        spend: spend.label,
      };
    }
  }, [selectedChannels, spendIndex, managementLevel]);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPricingBg})` }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <FloatingElements variant="hero" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />

        <div className="mx-auto max-w-site px-6 relative text-center">
          <motion.h1
            {...fadeInUp}
            className="text-h1 md:text-display max-w-3xl mx-auto text-primary-foreground"
          >
            Transparent pricing, <GradientText>real results.</GradientText>
          </motion.h1>
          <motion.p {...fadeInUp} className="mt-6 text-body-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Choose the engagement model that fits your growth stage. All plans include access to Skai's enterprise platform.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="relative py-4 pb-24 overflow-hidden">
        <div className="mx-auto max-w-site px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-mesh-cta text-secondary-foreground ring-2 ring-accent/30 scale-[1.02]"
                    : "glass-card"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <plan.icon className={`w-8 h-8 mb-4 ${plan.highlight ? "text-accent" : "text-primary"}`} />
                  <h3 className="text-h3">{plan.name}</h3>
                  <p className={`mt-2 text-body-sm ${plan.highlight ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price === "Custom" ? "" : "$"}{plan.price}</span>
                  <span className={`text-body-sm ${plan.highlight ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                  {plan.price !== "Custom" && (
                    <p className={`text-xs mt-1 ${plan.highlight ? "text-secondary-foreground/50" : "text-muted-foreground/70"}`}>
                      Pricing starts at ${plan.price}{plan.period} — contact us for actual quote
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-accent" : "text-primary"}`} />
                      <span className={`text-body-sm ${plan.highlight ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.name === "Enterprise" ? "/contact" : "/strategy-call"}>
                  <Button
                    className={`w-full h-14 text-base font-semibold ${
                      plan.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary !text-primary-foreground hover:bg-primary/90"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="relative py-24 md:py-32 bg-surface-elevated overflow-hidden">
        <FloatingElements variant="section" />
        <div className="mx-auto max-w-site px-6 relative">
          <div className="text-center mb-14">
            <motion.div {...fadeInUp} className="inline-flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-accent" />
              <p className="text-body-sm font-medium text-accent tracking-wide uppercase">
                Investment Calculator
              </p>
            </motion.div>
            <motion.h2 {...fadeInUp} className="text-h2 text-foreground">
              Estimate your <GradientText>monthly investment</GradientText>
            </motion.h2>
            <motion.p {...fadeInUp} className="mt-4 text-body-lg text-muted-foreground max-w-xl mx-auto">
              Get a ballpark estimate based on your ad spend and channel mix. Final pricing is customized to your needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Controls */}
            <motion.div {...fadeInUp} className="lg:col-span-3 space-y-8">
              {/* Channels */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Which channels do you advertise on?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {channelOptions.map((ch) => (
                    <button
                      key={ch.value}
                      onClick={() => toggleChannel(ch.value)}
                      className={`px-4 py-3 rounded-lg text-body-sm font-medium transition-all border ${
                        selectedChannels.includes(ch.value)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {ch.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Spend */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Monthly ad spend</h3>
                <p className="text-body-sm text-muted-foreground mb-6">Total across all channels</p>
                <input
                  type="range"
                  min={0}
                  max={spendRanges.length - 1}
                  value={spendIndex}
                  onChange={(e) => setSpendIndex(Number(e.target.value))}
                  className="w-full accent-primary h-2 rounded-full appearance-none bg-border cursor-pointer"
                />
                <div className="flex justify-between mt-3">
                  {spendRanges.map((r, i) => (
                    <span
                      key={r.label}
                      className={`text-xs ${i === spendIndex ? "text-primary font-semibold" : "text-muted-foreground/60"}`}
                    >
                      {r.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Management Level */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Management level</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: "self" as const, label: "Self-Serve", desc: "You manage, we support" },
                    { key: "full" as const, label: "Full-Service", desc: "We manage everything" },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => handleManagementChange(opt.key)}
                      className={`p-4 rounded-lg text-left transition-all border ${
                        managementLevel === opt.key
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      <span className="text-body-sm font-semibold block">{opt.label}</span>
                      <span className={`text-xs ${managementLevel === opt.key ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Estimate Result */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-xl p-8 sticky top-24">
                <p className="text-body-sm font-medium text-accent tracking-wide uppercase mb-6">
                  Your Estimated Investment
                </p>

                <div className="mb-8">
                  <motion.span
                    key={`${estimate.monthlyLow}-${estimate.monthlyHigh}-${estimate.monthly}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-foreground block"
                  >
                    {estimate.monthly !== null
                      ? `$${estimate.monthly.toLocaleString()}`
                      : estimate.monthlyHigh !== null
                        ? `$${estimate.monthlyLow!.toLocaleString()} – $${estimate.monthlyHigh.toLocaleString()}`
                        : `$${estimate.monthlyLow!.toLocaleString()}+`}
                  </motion.span>
                  <span className="text-muted-foreground text-body-sm">/month</span>
                </div>

                <div className="space-y-4 border-t border-border pt-6 mb-8">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">Channels</span>
                    <span className="text-foreground font-medium">{estimate.channels}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">Ad spend range</span>
                    <span className="text-foreground font-medium">{estimate.spend}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">Management</span>
                    <span className="text-foreground font-medium capitalize">{managementLevel === "full" ? "Full-Service" : "Self-Serve"}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground/70 mb-6">
                  This is a rough estimate for illustration purposes. Actual pricing is customized based on your specific needs and goals.
                </p>

                <Link to="/strategy-call">
                  <Button className="w-full h-14 text-base font-semibold bg-primary !text-primary-foreground hover:bg-primary/90 btn-glow" size="lg">
                    Get Your Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock />
    </PageLayout>
  );
};

export default Pricing;
