import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureGrid from "@/components/sections/FeatureGrid";
import GradientText from "@/components/ui/GradientText";
import IconBadge from "@/components/ui/IconBadge";
import FloatingElements from "@/components/ui/FloatingElements";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, TrendingUp, Target, BarChart3, Users, Zap, Shield,
  Building2, Layers, ArrowLeftRight, CheckCircle2, AlertTriangle,
  Rocket, Cpu, Globe
} from "lucide-react";

const segmentData: Record<string, {
  title: string;
  subtitle: string;
  painPoints: string[];
  outcomes: string[];
  features: { icon: any; title: string; description: string }[];
}> = {
  "growth-brands": {
    title: "Growth-Stage Brands",
    subtitle: "You've found product-market fit. Now it's time to scale advertising without losing efficiency.",
    painPoints: [
      "Ad spend is growing but margins are shrinking",
      "You're managing too many platforms with a lean team",
      "You need enterprise-level tools but can't justify enterprise contracts",
      "Performance has plateaued and you need a new approach",
    ],
    outcomes: [
      "Enterprise-grade technology without the overhead",
      "A full performance team without the hiring process",
      "Cross-channel strategy that scales with your growth",
      "Clear visibility into what's driving results",
    ],
    features: [
      { icon: Shield, title: "Enterprise Access", description: "Get the platforms and technology that enterprise brands use." },
      { icon: Users, title: "Dedicated Team", description: "A performance team focused on your growth." },
      { icon: TrendingUp, title: "Scalable Performance", description: "Systems that grow with your ad spend and complexity." },
    ],
  },
  "agencies": {
    title: "Performance Agencies",
    subtitle: "Expand your service offering with enterprise technology and specialized retail media expertise.",
    painPoints: [
      "Clients are asking for retail media capabilities you don't have",
      "You need better technology to compete with larger agencies",
      "Managing multiple platforms is stretching your team thin",
      "You want to offer more without increasing headcount",
    ],
    outcomes: [
      "White-label enterprise platform access for your clients",
      "Retail media expertise you can offer immediately",
      "Better tools for campaign management and optimization",
      "A strategic partner, not a competitor",
    ],
    features: [
      { icon: Layers, title: "Platform Access", description: "Offer enterprise tools to your clients through Allied." },
      { icon: Target, title: "Retail Media Expertise", description: "Add Amazon, Walmart, and retail media to your offering." },
      { icon: Zap, title: "Strategic Partnership", description: "We support your team, not replace them." },
    ],
  },
  "enterprise-teams": {
    title: "Enterprise Teams in Transition",
    subtitle: "Your team is changing. Your performance doesn't have to.",
    painPoints: [
      "Key team members have left and performance is slipping",
      "You're between agencies and need continuity",
      "Your current tools and processes aren't scaling",
      "You need support now, not after a 6-month search",
    ],
    outcomes: [
      "Immediate performance continuity",
      "Enterprise-level management without rebuilding your team",
      "Flexible engagement that adapts to your timeline",
      "Seamless transition with minimal disruption",
    ],
    features: [
      { icon: Building2, title: "Immediate Support", description: "Start in days, not months. We bridge the gap." },
      { icon: BarChart3, title: "Performance Continuity", description: "No drop-off while you're in transition." },
      { icon: Shield, title: "Flexible Terms", description: "Engagement models that fit your situation." },
    ],
  },
};

const whyAlliedPoints = [
  {
    icon: Cpu,
    title: "Enterprise Technology, No Enterprise Contract",
    description: "Access the same AI-driven platforms that power the world's largest advertisers—through our exclusive Skai partnership—without long-term commitments or six-figure minimums.",
  },
  {
    icon: ArrowLeftRight,
    title: "Engagement That Flexes With You",
    description: "Start full-service, move to self-serve, or blend both. Scale up for peak seasons and back down when you don't need us. One partner, one platform, infinite configurations.",
  },
  {
    icon: Globe,
    title: "Every Channel, One Team",
    description: "Amazon, Walmart, Google, Meta, TikTok, Target Roundel, and 100+ retail media networks—managed and optimized from a single, unified platform.",
  },
];

const audienceCards = [
  {
    title: "Growth-Stage Brands",
    desc: "Scale advertising with enterprise tools and expert management.",
    href: "/who-we-help/growth-brands",
    icon: TrendingUp,
    bullets: [
      "Access enterprise platforms without enterprise budgets",
      "Get a full performance team without the hiring process",
      "Scale from $50K to $5M+ in monthly ad spend with one partner",
    ],
  },
  {
    title: "Performance Agencies",
    desc: "Expand your offering with enterprise platforms and retail media expertise.",
    href: "/who-we-help/agencies",
    icon: Users,
    bullets: [
      "Add retail media to your service offering immediately",
      "White-label enterprise technology for your clients",
      "A strategic partner that supports you, not competes with you",
    ],
  },
  {
    title: "Enterprise Teams in Transition",
    desc: "Maintain performance continuity during team changes.",
    href: "/who-we-help/enterprise-teams",
    icon: Building2,
    bullets: [
      "Start in days, not months—immediate performance continuity",
      "Bridge the gap between agencies or during team rebuilds",
      "Flexible terms that fit your timeline, not ours",
    ],
  },
];

const scenarios = [
  {
    icon: AlertTriangle,
    trigger: "Your Amazon ROAS has been declining for three months",
    solution: "We audit your program, restructure campaigns, and deploy AI-driven bidding to recover performance—usually within 30 days.",
    link: "/solutions/retail-media",
  },
  {
    icon: Users,
    trigger: "Your media buyer just left and campaigns are running on autopilot",
    solution: "We step in immediately with full campaign management so nothing drops while you figure out your next hire—or decide you don't need one.",
    link: "/solutions/full-service",
  },
  {
    icon: Layers,
    trigger: "Your agency can't do retail media and you're losing share of voice",
    solution: "We add Amazon, Walmart, and other RMN capabilities to your program—either managing directly or partnering with your existing agency.",
    link: "/solutions/retail-media",
  },
  {
    icon: Rocket,
    trigger: "You're launching on a new platform and need to move fast",
    solution: "We get you live on Walmart Connect, TikTok, or any new channel in days—with the enterprise infrastructure to scale from day one.",
    link: "/solutions/full-service",
  },
  {
    icon: BarChart3,
    trigger: "You're spending $500K/month but can't tell what's actually working",
    solution: "We unify your data across every channel into a single reporting view with clear attribution, so every dollar has a story.",
    link: "/strategy-call",
  },
  {
    icon: Target,
    trigger: "Your team is strong but needs better technology",
    solution: "We give your team access to Skai's enterprise platform with hands-on onboarding and strategic support—so they can do more with what they have.",
    link: "/solutions/self-serve",
  },
];

const stats = [
  { value: "$8B+", label: "Ad Spend on Platform" },
  { value: "8,200+", label: "Brands Powered" },
  { value: "100+", label: "Retail Media Networks" },
  { value: "300+", label: "Publisher Integrations" },
];

const WhoWeHelpHub = () => {
  return (
    <PageLayout>
      <HeroSection
        headline="Built for teams that need enterprise performance."
        subheadline="Whether you're a startup, growth-stage brand, performance agency, or enterprise team in transition—Allied has a model built for you."
        primaryCta={{ label: "Schedule a Strategy Call", href: "/strategy-call" }}
      />

      <section className="py-12 border-b border-border/50 bg-background">
        <div className="mx-auto max-w-site px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-body-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-site px-6">
          <SectionHeader
            label="Why Allied"
            title="What makes us different"
            description="We're not a traditional agency. We're a performance partner with enterprise technology, flexible engagement models, and the cross-channel expertise to drive results at any scale."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyAlliedPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group p-8 rounded-xl glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{point.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <FloatingElements variant="section" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="mx-auto max-w-site px-6 relative">
          <SectionHeader
            label="Who We Work With"
            title="Find your fit"
            description="We work with brands, agencies, and teams at every stage. Here's how we help each."
            dark
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {audienceCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className="block p-8 rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 hover:border-primary/30 hover:bg-secondary-foreground/[0.08] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
                >
                  <IconBadge icon={item.icon} size="lg" variant="primary" className="mb-4" />
                  <h3 className="text-h3 text-secondary-foreground group-hover:text-primary transition-colors mb-3">{item.title}</h3>
                  <p className="text-body text-secondary-foreground/60 mb-5">{item.desc}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-body-sm text-secondary-foreground/70">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-body-sm text-accent font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-site px-6">
          <SectionHeader
            label="How We Work With You"
            title="One partner, two models—your choice"
            description="Every engagement starts with a conversation, not a contract. Choose the model that fits, and change it whenever your needs do."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/solutions/full-service"
                className="block p-8 rounded-xl glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Full-Service Management</h3>
                </div>
                <p className="text-body-sm text-muted-foreground mb-4">
                  We run your campaigns end-to-end—strategy, execution, optimization, and reporting. You focus on your business.
                </p>
                <ul className="space-y-2 mb-5">
                  {["Best for teams that need a full performance partner", "Flex to self-serve on specific channels anytime", "Scale up or down based on seasonality"].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-body-sm text-accent font-medium group-hover:gap-2 transition-all">
                  Explore full-service <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/solutions/self-serve"
                className="block p-8 rounded-xl glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Supported Self-Serve</h3>
                </div>
                <p className="text-body-sm text-muted-foreground mb-4">
                  You run the campaigns on our enterprise platform. We provide onboarding, training, and strategic support.
                </p>
                <ul className="space-y-2 mb-5">
                  {["Best for teams with in-house capability", "Enterprise tools without enterprise contracts", "Escalate to full-service whenever you need to"].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-body-sm text-accent font-medium group-hover:gap-2 transition-all">
                  Explore self-serve <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-body-sm text-muted-foreground">
              <ArrowLeftRight className="w-4 h-4 inline-block mr-1.5 text-primary" />
              Move between models anytime—no new contracts, no new platforms, no disruption.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="mx-auto max-w-site px-6 relative">
          <SectionHeader
            label="Common Scenarios"
            title="Sound familiar?"
            description="These are the situations that bring teams to Allied. If any of these resonate, we should talk."
            dark
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, i) => {
              const Icon = scenario.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    to={scenario.link}
                    className="block p-6 rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 hover:border-primary/30 hover:bg-secondary-foreground/[0.08] transition-all duration-300 group h-full"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-destructive group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-sm font-semibold text-secondary-foreground leading-snug">"{scenario.trigger}"</p>
                    </div>
                    <p className="text-body-sm text-secondary-foreground/60 mb-4">{scenario.solution}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-accent font-medium group-hover:gap-2 transition-all">
                      See how we solve this <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABlock />
    </PageLayout>
  );
};

const WhoWeHelpDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = segmentData[slug || ""];

  if (!data) return <WhoWeHelpHub />;

  return (
    <PageLayout>
      <HeroSection
        headline={data.title}
        subheadline={data.subtitle}
        primaryCta={{ label: "Schedule a Strategy Call", href: "/strategy-call" }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-site px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader label="Pain Points" title="Challenges you're facing" />
              <ul className="mt-8 space-y-4">
                {data.painPoints.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                    <span className="text-body text-muted-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader label="Outcomes" title="What changes with Allied" />
              <ul className="mt-8 space-y-4">
                {data.outcomes.map((outcome, i) => (
                  <motion.li
                    key={outcome}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-body text-muted-foreground">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <FloatingElements variant="section" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="mx-auto max-w-site px-6 relative">
          <SectionHeader label="How We Help" title="What we bring to the table" dark />
          <div className="mt-12">
            <FeatureGrid features={data.features} columns={3} variant="dark" />
          </div>
        </div>
      </section>

      <CTABlock />
    </PageLayout>
  );
};

export { WhoWeHelpHub, WhoWeHelpDetail };
