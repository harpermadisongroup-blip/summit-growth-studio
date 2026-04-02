import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import IconBadge from "@/components/ui/IconBadge";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PublisherMultiSelect from "@/components/ui/PublisherMultiSelect";
import { Mail, MapPin } from "lucide-react";
import strategyMeetingImg from "@/assets/strategy-meeting.jpg";

const Contact = () => {
  return (
    <PageLayout>
      <HeroSection
        headline="Get in touch."
        subheadline="Whether you have a question about our services, want to explore a partnership, or just want to learn more—we'd love to hear from you."
        centered
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-site px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-xl glass-card">
                <div className="flex items-center gap-3 text-foreground font-medium mb-2">
                  <IconBadge icon={Mail} size="sm" variant="primary" />
                  Email
                </div>
                <p className="text-body text-muted-foreground">hello@allieddigitalstrategies.com</p>
              </div>
              <div className="p-6 rounded-xl glass-card">
                <div className="flex items-center gap-3 text-foreground font-medium mb-2">
                  <IconBadge icon={MapPin} size="sm" variant="primary" />
                  Location
                </div>
                <p className="text-body text-muted-foreground">United States</p>
              </div>

              {/* Team Photo */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={strategyMeetingImg}
                  alt="Allied Digital Strategies team in a collaborative strategy session"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                  width={1024}
                  height={1360}
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-2 p-8 md:p-10 rounded-2xl glass-card"
            >
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
                <Button type="submit" className="w-full btn-glow" size="lg">Schedule a Strategy Call</Button>
                <p className="text-body-sm text-muted-foreground text-center">No obligation. We'll reach out within one business day.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
