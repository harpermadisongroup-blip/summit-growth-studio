import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Building2, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const brandProfiles = [
  {
    icon: Rocket,
    label: "Startup & Emerging Brands",
    description: "New to paid media or scaling your first campaigns. You need access to enterprise tools without enterprise budgets—and guidance to avoid costly mistakes early.",
    supportLevel: "High-touch onboarding + strategic setup",
  },
  {
    icon: TrendingUp,
    label: "Growth-Stage Brands",
    description: "You have traction but need better technology and sharper optimization to break through to the next level. Your team runs the day-to-day; we provide the platform and strategic input.",
    supportLevel: "Platform access + periodic strategy reviews",
  },
  {
    icon: Building2,
    label: "Established Brands & Agencies",
    description: "You have an experienced in-house team but need enterprise-grade technology, advanced automation, and a partner who can flex when you need extra support.",
    supportLevel: "Platform access + on-demand escalation",
  },
];

const supportTiers = [
  { level: "Platform Access", desc: "Enterprise tools, AI bidding, cross-channel data", included: true },
  { level: "Onboarding & Training", desc: "Hands-on setup, platform certification, best practices", included: true },
  { level: "Strategic Reviews", desc: "Scheduled performance reviews and optimization guidance", included: true },
  { level: "On-Demand Escalation", desc: "Tactical support when you need an extra set of hands", included: true },
  { level: "Full Campaign Management", desc: "Need us to take the wheel? Upgrade to full-service anytime", upgrade: true },
];

const useCases = [
  {
    quote: "We were spending six figures a month on Amazon but had zero visibility into what was working. The self-serve model gave us Skai's enterprise tools with enough strategic support to transform our program—without handing over control.",
    role: "Director of E-Commerce",
    type: "Growth-Stage CPG Brand",
  },
  {
    quote: "As a startup, we couldn't justify a full-service agency. The supported self-serve model let us run our own campaigns on a platform we'd never have accessed otherwise—and the onboarding team made sure we didn't waste a dollar learning the ropes.",
    role: "Head of Marketing",
    type: "DTC Startup",
  },
  {
    quote: "Our in-house team is strong, but we needed better technology. The flexibility to escalate to full-service during peak seasons—without switching partners—was the deciding factor.",
    role: "VP of Digital",
    type: "Established Retail Brand",
  },
];

const SelfServeSections = () => {
  return (
    <>
      {/* Who This Is For */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="mx-auto max-w-site px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-body-sm font-medium tracking-wide uppercase text-primary mb-4"
          >
            Who This Is For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-h2 text-foreground mb-4"
          >
            Built for brands at every stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-body-lg text-muted-foreground mb-12"
          >
            Whether you're launching your first campaign or managing millions in ad spend, our support flexes to match where you are—and where you're going.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandProfiles.map((profile, i) => {
              const Icon = profile.icon;
              return (
                <motion.div
                  key={profile.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group p-8 rounded-xl glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{profile.label}</h3>
                  <p className="text-body-sm text-muted-foreground mb-4">{profile.description}</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs font-medium uppercase tracking-wide text-primary/80">Support level</p>
                    <p className="text-body-sm text-foreground mt-1">{profile.supportLevel}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tiered Support Spectrum */}
      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="mx-auto max-w-site px-6 relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-body-sm font-medium tracking-wide uppercase text-accent mb-4"
          >
            Flexible Support
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-h2 text-secondary-foreground mb-4"
          >
            Support that scales with you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-body-lg text-secondary-foreground/70 mb-12"
          >
            Start with what you need. Add more as you grow. Every tier is included in the self-serve model—with a clear path to full-service when you're ready.
          </motion.p>

          <div className="space-y-4">
            {supportTiers.map((tier, i) => (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 ${
                  tier.upgrade
                    ? "border-accent/30 bg-accent/10"
                    : "border-secondary-foreground/15 bg-secondary-foreground/[0.07] hover:border-secondary-foreground/25"
                }`}
              >
                <div className="mt-0.5">
                  {tier.upgrade ? (
                    <ArrowRight className="w-5 h-5 text-accent" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  )}
                </div>
                <div>
                  <h3 className={`font-semibold ${tier.upgrade ? "text-accent" : "text-secondary-foreground"}`}>
                    {tier.level}
                  </h3>
                  <p className="text-body-sm text-secondary-foreground/70 mt-1">{tier.desc}</p>
                </div>
                {tier.included && (
                  <span className="ml-auto text-xs font-medium uppercase tracking-wide text-accent bg-accent/15 px-3 py-1 rounded-full whitespace-nowrap">
                    Included
                  </span>
                )}
                {tier.upgrade && (
                  <Link
                    to="/solutions/full-service"
                    className="ml-auto text-xs font-medium text-accent hover:underline whitespace-nowrap"
                  >
                    Learn more →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Social Proof */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="mx-auto max-w-site px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-body-sm font-medium tracking-wide uppercase text-primary mb-4"
          >
            How Brands Use It
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-h2 text-foreground mb-12"
          >
            Different brands, same enterprise platform
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-xl glass-card border border-border/50 flex flex-col"
              >
                <p className="text-body-sm text-muted-foreground italic leading-relaxed flex-1">
                  "{uc.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-foreground">{uc.role}</p>
                  <p className="text-xs text-muted-foreground">{uc.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SelfServeSections;
