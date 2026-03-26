import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Building2, TrendingUp, ArrowLeftRight, CheckCircle2, ArrowRight } from "lucide-react";

const brandProfiles = [
  {
    icon: Rocket,
    label: "Startup & Emerging Brands",
    description: "You're moving fast and can't afford to build an in-house media team. We become your performance marketing department—strategy, execution, and optimization from day one.",
    flexibility: "Start full-service, transition to self-serve as your team grows",
  },
  {
    icon: TrendingUp,
    label: "Growth-Stage Brands",
    description: "You've found product-market fit and need to scale advertising across multiple channels. We bring the expertise, technology, and bandwidth to accelerate growth without slowing you down.",
    flexibility: "Full management now, flex to hybrid as needs evolve",
  },
  {
    icon: Building2,
    label: "Established Brands",
    description: "You have internal capabilities but need a partner for peak seasons, new channel launches, or when your team is stretched thin. We plug in where you need us—and step back when you don't.",
    flexibility: "Weave in and out of full-service based on demand",
  },
];

const flexPoints = [
  { text: "Start with full-service management across all channels", included: true },
  { text: "Transition specific channels to self-serve as your team builds capability", included: true },
  { text: "Scale back up to full-service during peak seasons or product launches", included: true },
  { text: "Run some channels in-house while we manage others", included: true },
  { text: "Move entirely to supported self-serve when you're ready—same platform, same partner", transition: true },
];

const useCases = [
  {
    quote: "We started with Allied managing everything—Amazon, Walmart, and paid search. As we hired internally, we moved paid search to self-serve but kept retail media fully managed. That flexibility is why we've stayed for three years.",
    role: "CMO",
    type: "Growth-Stage CPG Brand",
  },
  {
    quote: "As a startup, we needed someone to own our entire ad program. Allied didn't just run campaigns—they built our strategy from scratch. Now that we have a team, we're transitioning channels to self-serve at our own pace.",
    role: "Founder & CEO",
    type: "DTC Startup",
  },
  {
    quote: "We bring Allied in for Q4 every year. Our team handles the baseline, but when holiday volume spikes, we need enterprise-level management. No other partner lets us flex like that without a new contract every time.",
    role: "VP of Performance Marketing",
    type: "Established Retail Brand",
  },
];

const FullServiceSections = () => {
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
            Your stage changes. Your partner doesn't.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-body-lg text-muted-foreground mb-12"
          >
            Full-service doesn't mean locked in. Whether you need us to run everything today or just specific channels during peak periods, we flex to match your business—not the other way around.
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
                    <div className="flex items-center gap-2">
                      <ArrowLeftRight className="w-4 h-4 text-primary/80" />
                      <p className="text-xs font-medium text-primary/80">{profile.flexibility}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flexible Engagement */}
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
            Flexible Engagement
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-h2 text-secondary-foreground mb-4"
          >
            One partner, many configurations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-body-lg text-secondary-foreground/70 mb-12"
          >
            Full-service today doesn't mean full-service forever. Move between engagement models as your team, budget, and strategy evolve—without switching platforms or partners.
          </motion.p>

          <div className="space-y-4">
            {flexPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 ${
                  point.transition
                    ? "border-accent/30 bg-accent/10"
                    : "border-secondary-foreground/15 bg-secondary-foreground/[0.07] hover:border-secondary-foreground/25"
                }`}
              >
                {point.transition ? (
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                )}
                <p className={`text-body-sm ${point.transition ? "text-accent font-medium" : "text-secondary-foreground/90"}`}>
                  {point.text}
                </p>
                {point.transition && (
                  <Link
                    to="/solutions/self-serve"
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

      {/* Use Cases */}
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
            Flexibility in action
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

export default FullServiceSections;
