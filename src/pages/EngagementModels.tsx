import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import GradientText from "@/components/ui/GradientText";
import FloatingElements from "@/components/ui/FloatingElements";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const features = [
  { name: "Enterprise platform access", fullService: true, selfServe: true },
  { name: "Dedicated strategy team", fullService: true, selfServe: false },
  { name: "Campaign execution", fullService: true, selfServe: false },
  { name: "Ongoing optimization", fullService: true, selfServe: false },
  { name: "Performance reporting", fullService: true, selfServe: true },
  { name: "Strategic guidance", fullService: true, selfServe: true },
  { name: "Onboarding & training", fullService: true, selfServe: true },
  { name: "Dedicated support", fullService: true, selfServe: true },
  { name: "Cross-channel strategy", fullService: true, selfServe: false },
  { name: "You run campaigns", fullService: false, selfServe: true },
];

const EngagementModels = () => {
  return (
    <PageLayout>
      <HeroSection
        headline="Two ways to access enterprise performance."
        subheadline="Whether you want a fully managed solution or prefer to run campaigns yourself with expert support—we have a model built for your team."
        centered
      />

      {/* Model Cards */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-site px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="p-8 md:p-10 rounded-2xl glass-card border-2 border-primary/30 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-[60px]" />
              <span className="inline-block text-body-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">Recommended</span>
              <h3 className="text-h3 text-foreground">Full-Service Performance Management</h3>
              <p className="mt-4 text-body text-muted-foreground">We run everything. Strategy, execution, optimization, and reporting across all channels.</p>
              <p className="mt-6 text-body-sm text-muted-foreground">Best for:</p>
              <ul className="mt-2 space-y-2">
                {["Growth-stage brands scaling paid media", "Lean teams without in-house expertise", "Companies transitioning from legacy agencies"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-sm text-foreground">
                     <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-10 rounded-2xl glass-card gradient-border-hover"
            >
              <h3 className="text-h3 text-foreground mt-2">Supported Self-Serve Model</h3>
              <p className="mt-4 text-body text-muted-foreground">You run campaigns. We provide the enterprise platform, onboarding, and ongoing strategic support.</p>
              <p className="mt-6 text-body-sm text-muted-foreground">Best for:</p>
              <ul className="mt-2 space-y-2">
                {["Agencies managing client campaigns", "In-house teams with execution capability", "Teams that want platform access without full management"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-sm text-foreground">
                     <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table — Dark */}
      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <FloatingElements variant="section" />
        <div className="mx-auto max-w-site px-6 relative">
          <motion.h2 {...fadeInUp} className="text-h2 text-secondary-foreground text-center mb-12">
            Feature <GradientText>comparison</GradientText>
          </motion.h2>
          <motion.div {...fadeInUp} className="rounded-xl glass-card-dark overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="text-left px-6 py-4 text-body-sm font-medium text-secondary-foreground/60">Feature</th>
                    <th className="text-center px-6 py-4 text-body-sm font-medium text-secondary-foreground">Full-Service</th>
                    <th className="text-center px-6 py-4 text-body-sm font-medium text-secondary-foreground">Self-Serve</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((f, i) => (
                    <tr key={f.name} className={i < features.length - 1 ? "border-b border-primary/5" : ""}>
                      <td className="px-6 py-4 text-body-sm text-secondary-foreground/80">{f.name}</td>
                      <td className="px-6 py-4 text-center">
                        {f.fullService ? (
                          <Check className="w-4 h-4 text-accent mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-secondary-foreground/20 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {f.selfServe ? (
                          <Check className="w-4 h-4 text-accent mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-secondary-foreground/20 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABlock />
    </PageLayout>
  );
};

export default EngagementModels;
