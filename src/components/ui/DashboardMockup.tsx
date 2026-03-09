import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const DashboardMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-3xl mt-16"
    >
      {/* Glow behind */}
      <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-3xl -z-10" />

      {/* Main card */}
      <div className="glass-card rounded-2xl p-6 md:p-8">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
          </div>
          <div className="text-body-sm text-muted-foreground">Performance Dashboard</div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "ROAS", value: "4.2x", change: "+18%", up: true },
            { label: "Ad Spend Efficiency", value: "87%", change: "+12%", up: true },
            { label: "Revenue Growth", value: "$2.4M", change: "+24%", up: true },
          ].map((metric) => (
            <div key={metric.label} className="p-4 rounded-xl bg-muted/30 border border-border/50">
              <p className="text-body-sm text-muted-foreground mb-1">{metric.label}</p>
              <div className="flex items-end gap-2">
                <span className="text-h3 font-bold text-foreground">{metric.value}</span>
                <span className="text-body-sm text-accent flex items-center gap-0.5 mb-1">
                  <ArrowUpRight className="w-3 h-3" />
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fake chart area */}
        <div className="h-32 md:h-40 rounded-xl bg-muted/20 border border-border/30 flex items-end p-4 gap-1.5 overflow-hidden">
          {Array.from({ length: 24 }).map((_, i) => {
            const height = 20 + Math.sin(i * 0.5) * 30 + Math.random() * 25;
            return (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.03 }}
                className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary/20 min-w-[4px]"
              />
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="mt-4 flex items-center gap-2 text-body-sm text-muted-foreground">
          <TrendingUp className="w-4 h-4 text-accent" />
          <span>Cross-channel performance trending upward</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardMockup;
