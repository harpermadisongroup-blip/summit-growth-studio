import { motion } from "framer-motion";
import { Brain, Lightbulb, Compass, Sparkles } from "lucide-react";
import MetricCounter from "@/components/ui/MetricCounter";

const celesteMetrics = [
  { value: 53, suffix: "%", label: "Less time on manual tasks" },
  { value: 26, suffix: "%", label: "Performance lift across campaigns" },
  { value: 10, suffix: "x", label: "Faster time to insights" },
];

const celesteCapabilities = [
  {
    icon: Brain,
    title: "Analysis",
    description: "Celeste evaluates performance across publishers, delivering data-driven insights in under a minute.",
  },
  {
    icon: Lightbulb,
    title: "Insights",
    description: "Identifies performance disruptors and hidden opportunities in 90% of use cases.",
  },
  {
    icon: Compass,
    title: "Recommendations",
    description: "Provides clear, actionable guidance with intelligent recommendations in 95% of responses.",
  },
  {
    icon: Sparkles,
    title: "Always Learning",
    description: "Celeste evolves with every action and decision, delivering sharper insights and better outcomes over time.",
  },
];

const CelesteAISection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-site px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-body-sm font-semibold text-primary uppercase tracking-wider">
            Powered by Celeste AI
          </span>
          <h2 className="mt-3 text-h2 text-foreground">
            The Future of Marketing, Working Beside You
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Skai's GenAI-powered marketing agent transforms hours of manual work into minutes,
            guiding you to make smart decisions that deliver strong results.
          </p>
        </motion.div>

        {/* Celeste metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-8 md:gap-12 mb-20"
        >
          {celesteMetrics.map((metric) => (
            <MetricCounter
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {celesteCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-6 md:p-8 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-1.5 text-body text-muted-foreground">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-body-sm text-muted-foreground italic">
          *Based on averages across Skai Beta clients
        </p>
      </div>
    </section>
  );
};

export default CelesteAISection;
