import PageLayout from "@/components/layout/PageLayout";
import FloatingElements from "@/components/ui/FloatingElements";
import IconBadge from "@/components/ui/IconBadge";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PublisherMultiSelect from "@/components/ui/PublisherMultiSelect";
import { Check, Shield, Users, Zap } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const StrategyCall = () => {
  return (
    <PageLayout>
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <FloatingElements variant="hero" />
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
        
        <div className="mx-auto max-w-site px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Copy */}
            <motion.div {...fadeInUp}>
              <p className="text-body-sm font-medium text-primary tracking-wide uppercase mb-4">Strategy Call</p>
              <h1 className="text-h1 text-foreground">See if you qualify for enterprise performance.</h1>
              <p className="mt-6 text-body-lg text-muted-foreground">
                This isn't a generic sales call. We'll review your current advertising setup, identify gaps, and determine whether Allied is the right fit for your growth goals.
              </p>

              <div className="mt-10 space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Who this is for:</h3>
                <ul className="space-y-3">
                  {[
                    "Brands spending $25K+/month on digital advertising",
                    "Teams managing 2+ advertising channels",
                    "Companies ready to scale but hitting performance ceilings",
                    "Agencies seeking enterprise platform access for clients",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 space-y-6">
                <h3 className="text-lg font-semibold text-foreground">What you'll get:</h3>
                <ul className="space-y-3">
                  {[
                    "A review of your current advertising performance",
                    "Identification of efficiency and growth opportunities",
                    "GenAI-powered marketing agent",
                    "A clear recommendation on next steps",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Signals */}
              <div className="mt-12 flex flex-wrap gap-6">
                {[
                  { icon: Shield, label: "No obligation" },
                  { icon: Users, label: "Senior strategists only" },
                  { icon: Zap, label: "30-minute call" },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-3 text-body-sm text-muted-foreground">
                    <IconBadge icon={t.icon} size="sm" variant="primary" />
                    {t.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-8 md:p-10 rounded-2xl glass-card"
            >
              <h2 className="text-h3 text-foreground mb-8">Schedule your call</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name <span className="text-destructive">*</span></Label>
                    <Input id="firstName" placeholder="Jane" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name <span className="text-destructive">*</span></Label>
                    <Input id="lastName" placeholder="Smith" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email <span className="text-destructive">*</span></Label>
                  <Input id="email" type="email" placeholder="jane@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company name <span className="text-destructive">*</span></Label>
                  <Input id="company" placeholder="Company name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="spend">Monthly ad spend <span className="text-destructive">*</span></Label>
                  <Input id="spend" placeholder="e.g., $100K/month" required />
                </div>
                <PublisherMultiSelect />
                <div className="space-y-2">
                  <Label htmlFor="message">What are your biggest challenges?</Label>
                  <Textarea id="message" rows={4} placeholder="Tell us about your goals and current setup..." />
                </div>
                <Button type="submit" className="w-full btn-glow" size="lg">
                  Schedule a Strategy Call
                </Button>
                <p className="text-body-sm text-muted-foreground text-center">No obligation. We'll reach out within one business day.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StrategyCall;
