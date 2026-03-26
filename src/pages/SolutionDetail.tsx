import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FloatingElements from "@/components/ui/FloatingElements";
import SkaiLogo from "@/components/ui/SkaiLogo";
import RetailMediaNetworkStrip from "@/components/sections/RetailMediaNetworkStrip";
import ChannelLogoStrip from "@/components/sections/ChannelLogoStrip";
import NetworksWeManageGrid from "@/components/sections/NetworksWeManageGrid";
import SelfServeSections from "@/components/sections/SelfServeSections";
import FullServiceSections from "@/components/sections/FullServiceSections";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, BarChart3, TrendingUp, Eye, Target, Users, Zap, Shield, LineChart, Monitor, Layers, Globe, Cpu, Clock, Search, ShoppingCart, Brain } from "lucide-react";

const solutionData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: { icon: any; title: string; description: string }[];
  skaiCapabilities?: { icon: any; title: string; description: string }[];
  showNetworkStrip?: boolean;
  logoStrip?: { label: string; logos: { name: string; logo: string }[] };
  showNetworksGrid?: boolean;
  showSelfServeSections?: boolean;
  showFullServiceSections?: boolean;
  dspSection?: {
    label: string;
    title: string;
    description: string;
    capabilities: { icon: any; title: string; description: string }[];
  };
}> = {
  "full-service": {
    title: "Full-Service Performance Management",
    subtitle: "We run your paid media across every major channel—so you can focus on growing your brand. Start here, stay here, or flex as your needs evolve.",
    description: "Our team handles strategy, execution, optimization, and reporting across Amazon, Walmart, Google, Meta, and other RMNs. You get enterprise-level performance without building an in-house team—and the flexibility to shift between full-service and self-serve as your business changes.",
    features: [
      { icon: Target, title: "Strategic Planning", description: "Custom media strategy aligned with your business goals, competitive landscape, and growth targets—updated as your needs evolve." },
      { icon: Settings, title: "Campaign Execution", description: "End-to-end campaign setup, management, and optimization across all channels. We handle the daily work so your team doesn't have to." },
      { icon: TrendingUp, title: "Performance Optimization", description: "Continuous bid, budget, and creative optimization driven by data and AI—not guesswork." },
      { icon: BarChart3, title: "Reporting & Insights", description: "Clear, actionable reporting that shows what's working, what's next, and how every dollar is performing." },
      { icon: Shield, title: "Flexible Engagement", description: "Start full-service, move channels to self-serve, or scale back up during peak periods. One partner, no new contracts." },
      { icon: Cpu, title: "Powered by Skai", description: "Enterprise-grade AI optimization, automation, and cross-channel intelligence via our exclusive Skai partnership." },
    ],
    showFullServiceSections: true,
  },
  "self-serve": {
    title: "Supported Self-Serve Model",
    subtitle: "You run the campaigns. We provide the enterprise platform, expert onboarding, and strategic support—at every stage of growth.",
    description: "Whether you're a startup launching your first campaign or an established brand with an in-house team, our supported self-serve model gives you access to enterprise-grade technology with the flexibility to scale support up or down based on your needs.",
    features: [
      { icon: Monitor, title: "Enterprise Platform Access", description: "Use the same AI-driven tools that power the world's largest advertisers—without enterprise contracts or long-term commitments." },
      { icon: Users, title: "Hands-On Onboarding & Training", description: "Dedicated setup, platform certification, and best-practice training so your team is running optimized campaigns from day one." },
      { icon: Zap, title: "Strategic Guidance", description: "Ongoing strategic input from experienced practitioners—not just a help desk. We help you make better decisions, faster." },
      { icon: Eye, title: "Performance Reviews", description: "Scheduled check-ins to review performance, identify opportunities, and ensure your campaigns are continuously improving." },
      { icon: Shield, title: "On-Demand Escalation", description: "Need extra hands during peak seasons or product launches? Escalate to tactical support or full-service management anytime." },
      { icon: Cpu, title: "Powered by Skai", description: "Run campaigns on Skai's enterprise platform—AI-driven bidding, cross-channel data, and 300+ publisher integrations." },
    ],
    showSelfServeSections: true,
  },
  "enterprise-platform": {
    title: "Enterprise Platform Access",
    subtitle: "Access world-class advertising technology without enterprise contracts.",
    description: "Growth-stage brands shouldn't be locked out of the best tools. We provide access to enterprise platforms like Skai, giving you technology that levels the playing field.",
    features: [
      { icon: Layers, title: "Skai Platform", description: "Industry-leading cross-channel optimization and automation." },
      { icon: BarChart3, title: "Advanced Analytics", description: "Deeper insights into performance across every channel." },
      { icon: Zap, title: "Automation Tools", description: "Bid management and optimization at enterprise scale." },
      { icon: Shield, title: "No Long-Term Contracts", description: "Flexible access without the usual enterprise commitments." },
    ],
  },
  "retail-media": {
    title: "Retail Media Management",
    subtitle: "Manage Amazon Ads, Amazon DSP, Walmart Connect, Walmart DSP, Walmart Onsite Display, Target Roundel, and other RMNs—all from one unified platform built for real growth.",
    showNetworkStrip: true,
    showNetworksGrid: true,
    dspSection: {
      label: "DSP & Programmatic Display",
      title: "Full-funnel DSP across every major retailer",
      description: "Demand-side platform advertising is the key to reaching shoppers beyond the search results page. We manage DSP campaigns across Amazon, Walmart, and emerging retail networks—combining onsite display, offsite programmatic, video, and CTV into a unified strategy.",
      capabilities: [
        { icon: Monitor, title: "Amazon DSP", description: "Programmatic display and video powered by Amazon's exclusive first-party audience data. Retarget shoppers, build lookalike audiences, and drive full-funnel awareness-to-purchase campaigns on and off Amazon." },
        { icon: ShoppingCart, title: "Walmart DSP", description: "Leverage Walmart's massive first-party shopper data for programmatic display across Walmart.com and the open web. Target by purchase behavior, category affinity, and in-store signals." },
        { icon: Layers, title: "Walmart Onsite Display", description: "Premium display placements directly on Walmart.com—homepage, search, browse, and item pages. Drive visibility and consideration at the digital shelf with high-impact creative formats." },
        { icon: Globe, title: "Cross-Retailer DSP Strategy", description: "Unify your DSP campaigns across Amazon, Walmart, and other retail networks in one platform. Eliminate silos, reduce overlap, and allocate budgets based on real-time performance signals." },
        { icon: Eye, title: "Audience Management & Retargeting", description: "Build and manage audiences across retailers—purchase-based targeting, lookalike modeling, competitor conquesting, and sequential retargeting to move shoppers through the funnel." },
        { icon: BarChart3, title: "DSP Measurement & Incrementality", description: "Go beyond impressions and clicks. Measure true incremental sales lift, new-to-brand acquisition, and cross-channel attribution to prove DSP's impact on your bottom line." },
      ],
    },
    description: "Retail media is the fastest-growing ad channel—but fragmented tools, multiple logins, and siloed data slow teams down. We centralize your entire retail media ecosystem so you can scale faster, optimize smarter, and turn every ad dollar into measurable revenue across Amazon, Walmart, and emerging networks.",
    features: [
      { icon: Globe, title: "Unified Multi-Retailer Management", description: "No more fragmented workflows or siloed data. Manage Amazon, Walmart, and 100+ retail networks from a single platform with centralized campaigns and reporting." },
      { icon: Target, title: "Demand Capture at Point of Purchase", description: "Reach high-intent shoppers with Sponsored Products, Sponsored Brands, and DSP campaigns optimized for conversion at the digital shelf." },
      { icon: Layers, title: "Full-Funnel Onsite & Offsite", description: "Go beyond search ads. Orchestrate onsite sponsored placements alongside offsite display, video, and CTV to drive awareness, consideration, and conversion." },
      { icon: TrendingUp, title: "Incrementality & Attribution", description: "Measure true incremental sales lift with cross-channel attribution that shows how onsite and offsite campaigns work together." },
      { icon: BarChart3, title: "Unified Reporting & Custom Metrics", description: "See performance across all retail channels in one view with business-specific KPIs beyond standard publisher metrics." },
      { icon: Cpu, title: "Powered by Skai", description: "Enterprise-grade AI optimization, cross-channel intelligence, and 100+ retailer integrations via our exclusive Skai partnership." },
    ],
    skaiCapabilities: [
      { icon: Brain, title: "AI-Powered Bid & Budget Optimization", description: "Skai's machine-learning algorithms continuously adjust bids and budgets in real time based on performance signals and forecasted outcomes—more revenue, less manual work." },
      { icon: Clock, title: "AI Dayparting", description: "Translate Amazon's hourly Stream data and Walmart signals into automated intraday bid adjustments, capturing peak conversion windows and eliminating wasted spend." },
      { icon: Search, title: "Search Term Analysis & Keyword Harvesting", description: "Automated negative keyword management and continuous keyword discovery—scaling coverage and eliminating inefficient targeting without manual effort." },
      { icon: ShoppingCart, title: "Digital Shelf Intelligence", description: "Monitor competitive pricing, share of voice shifts, and product placement across retailers. Connect digital shelf insights directly to campaign optimizations." },
      { icon: Monitor, title: "Unified Onsite & Offsite Orchestration", description: "Full-funnel retail media from a single platform—onsite sponsored ads plus offsite display, video, and premium CTV partners with holistic audience management." },
      { icon: BarChart3, title: "Full-Funnel Attribution & Insights", description: "Break down channel silos with cross-channel measurement that shows how onsite search, offsite display, and CTV work together to drive conversions." },
    ],
  },
  "amazon": {
    title: "Amazon Advertising",
    subtitle: "Search, DSP, and full-funnel Amazon advertising, managed for performance.",
    description: "Amazon is the largest product search engine in the world. We manage Sponsored Products, Sponsored Brands, and Amazon DSP to drive full-funnel performance.",
    features: [
      { icon: Target, title: "Sponsored Products & Brands", description: "Keyword-driven campaigns with automated keyword harvesting and bid optimization to maximize conversion at the lowest cost." },
      { icon: Layers, title: "Amazon DSP", description: "Programmatic display and video with audience-level targeting, retargeting, and lookalike modeling to build awareness and drive purchase." },
      { icon: TrendingUp, title: "Full-Funnel Strategy", description: "From awareness to purchase, a unified approach with AI dayparting to reach shoppers at peak conversion hours." },
      { icon: BarChart3, title: "AMC & Analytics", description: "Amazon Marketing Cloud insights for path-to-purchase analysis, audience overlap, and cross-campaign attribution." },
      { icon: Eye, title: "Reporting & Performance Reviews", description: "Regular performance reviews, custom dashboards, and transparent reporting so you always know what's working." },
      { icon: Cpu, title: "Powered by Skai", description: "Automate bidding, unify Amazon data, and unlock AI-driven optimization through our Skai partnership." },
    ],
    skaiCapabilities: [
      { icon: Clock, title: "AI Dayparting", description: "Automatically adjust bids by time of day and day of week to capture peak conversion windows and reduce wasted spend." },
      { icon: Search, title: "Automated Keyword Harvesting", description: "Continuously discover high-performing search terms and automatically add them as keywords—scaling coverage without manual effort." },
      { icon: ShoppingCart, title: "Digital Shelf Intelligence", description: "Monitor competitive pricing, share of voice, and product placement across the digital shelf to stay ahead of the competition." },
      { icon: Brain, title: "Budget Navigator", description: "Algorithmic budget allocation that shifts spend in real time across campaigns based on performance signals and forecasted outcomes." },
      { icon: Layers, title: "100+ Retailer Integrations", description: "Manage Amazon alongside 100+ retail media networks from a single platform—unified data, unified optimization." },
      { icon: BarChart3, title: "Full-Funnel Measurement", description: "Connect upper-funnel awareness to lower-funnel conversions with cross-channel attribution and incrementality testing." },
    ],
  },
  "walmart": {
    title: "Walmart Advertising",
    subtitle: "Walmart Search and DSP, managed for maximum performance.",
    description: "Walmart Connect is a rapidly growing advertising platform. We help brands capture demand with Sponsored Search and Walmart DSP campaigns.",
    features: [
      { icon: Target, title: "Walmart Sponsored Search", description: "Product-level campaigns with automated keyword harvesting and bid optimization to maximize conversion at the digital shelf." },
      { icon: Layers, title: "Walmart DSP", description: "Programmatic display powered by Walmart's first-party shopper data, with audience-level targeting, retargeting, and lookalike modeling." },
      { icon: Eye, title: "Omnichannel Measurement", description: "Track the impact of digital ads on both online and in-store sales with cross-channel attribution and incrementality testing." },
      { icon: TrendingUp, title: "Growth Optimization", description: "Continuous testing and scaling with AI dayparting to reach shoppers at peak conversion hours and maximize ROAS." },
      { icon: BarChart3, title: "Reporting & Performance Reviews", description: "Regular performance reviews, custom dashboards, and transparent reporting so you always know what's working." },
      { icon: Cpu, title: "Powered by Skai", description: "Manage Walmart campaigns alongside all channels with Skai's enterprise automation, AI-driven bidding, and real-time optimization." },
    ],
    skaiCapabilities: [
      { icon: Clock, title: "AI Dayparting", description: "Automatically adjust bids by time of day and day of week to capture peak conversion windows and reduce wasted spend on Walmart." },
      { icon: Search, title: "Automated Keyword Harvesting", description: "Continuously discover high-performing Walmart search terms and automatically add them as keywords—scaling coverage without manual effort." },
      { icon: ShoppingCart, title: "Digital Shelf Intelligence", description: "Monitor competitive pricing, share of voice, and product placement across Walmart's digital shelf to stay ahead of the competition." },
      { icon: Brain, title: "Budget Navigator", description: "Algorithmic budget allocation that shifts spend in real time across Walmart campaigns based on performance signals and forecasted outcomes." },
      { icon: Layers, title: "100+ Retailer Integrations", description: "Manage Walmart alongside Amazon and 100+ other retail media networks from a single platform—unified data, unified optimization." },
      { icon: BarChart3, title: "Full-Funnel Measurement", description: "Connect upper-funnel awareness to lower-funnel conversions with cross-channel attribution and omnichannel sales lift measurement." },
    ],
  },
  "paid-search": {
    title: "Paid Search Advertising",
    subtitle: "Google Ads and Microsoft Advertising, managed with enterprise-grade transparency and control.",
    logoStrip: {
      label: "We manage paid media across",
      logos: [
        { name: "Google Ads", logo: "/logos/google.svg" },
        { name: "YouTube", logo: "/logos/youtube.svg" },
        { name: "Microsoft Advertising", logo: "/logos/microsoft.svg" },
      ],
    },
    description: "Paid search remains the highest-intent digital channel. We manage Google Search, Shopping, Performance Max, YouTube, Display, and Microsoft Ads with deep visibility into black-box campaign types—putting you back in control of your advertising strategy.",
    features: [
      { icon: Search, title: "Google Search & Shopping", description: "High-intent campaigns with automated keyword harvesting, bid optimization, and search term analysis to capture demand at the moment of intent." },
      { icon: Monitor, title: "Performance Max & RSA Insights", description: "Gain transparency into black-box campaign types like PMax and Responsive Search Ads—see which asset types drive success and take back control." },
      { icon: Globe, title: "Microsoft Advertising", description: "Extend your search strategy across Bing, Yahoo, and the Microsoft Audience Network with unified management and optimization." },
      { icon: Layers, title: "YouTube & Display", description: "Awareness and retargeting across Google's display and video network with audience-level targeting and lookalike modeling." },
      { icon: Eye, title: "Reporting & Performance Reviews", description: "Scheduled reports, instant presentations, and customizable dashboards so you always know what's working across your search program." },
      { icon: Cpu, title: "Powered by Skai", description: "Manage Google and Microsoft search campaigns on Skai's enterprise platform—AI-driven bidding, cross-channel data, and complete PMax transparency." },
    ],
    skaiCapabilities: [
      { icon: Search, title: "Customer Journey Intelligence", description: "View and optimize the full customer journey—from real search intent to creative engagement, generative AI headline recommendations, and landing page optimization." },
      { icon: Eye, title: "Black Box Transparency", description: "Unlock actionable insights into Performance Max and RSA campaigns with asset-level performance analysis, customizable audits, and automated actions." },
      { icon: Clock, title: "AI Dayparting", description: "Automatically adjust bids by time of day and day of week across Google and Microsoft to capture peak conversion windows." },
      { icon: Brain, title: "Budget Navigator", description: "Algorithmic budget allocation that shifts spend in real time across search campaigns based on performance signals and forecasted outcomes." },
      { icon: Target, title: "Build Your Own Algorithm", description: "Teach Skai to make the optimizations you would—create custom optimization algorithms using advanced automated actions and your own business rules." },
      { icon: BarChart3, title: "Cross-Channel Attribution", description: "Connect upper-funnel awareness on YouTube and Display to lower-funnel conversions on Search with unified reporting and incrementality testing." },
    ],
  },
  "social": {
    title: "Paid Social Advertising",
    subtitle: "Facebook, Instagram, TikTok, Snap, Pinterest, and LinkedIn—managed from one platform.",
    logoStrip: {
      label: "We manage paid media across",
      logos: [
        { name: "Facebook", logo: "/logos/facebook.png" },
        { name: "Instagram", logo: "/logos/instagram.svg" },
        { name: "TikTok", logo: "/logos/tiktok.svg" },
        { name: "Snapchat", logo: "/logos/snapchat.svg" },
        { name: "LinkedIn", logo: "/logos/linkedin.svg" },
      ],
    },
    description: "With consumers spread across an ever-growing list of social platforms, we help you reach your audience wherever they are. We manage omnichannel social campaigns with AI-driven creative optimization, audience management, and social commerce capabilities.",
    features: [
      { icon: Users, title: "Meta (Facebook & Instagram)", description: "Prospecting and retargeting campaigns powered by AI-driven audience optimization, creative testing, and Dynamic Commerce Ads that link directly to retailer purchase pages." },
      { icon: Monitor, title: "TikTok & Snap", description: "Industry-leading TikTok and Snap management—from bulk ad creation and editing to algorithmic bid and budget optimization across campaigns and portfolios." },
      { icon: Globe, title: "Pinterest & LinkedIn", description: "Extend your social strategy across Pinterest and LinkedIn with centralized management, audience targeting, and unified reporting." },
      { icon: Layers, title: "Social Commerce", description: "Connect social ads to retail sales with Amazon Attribution, Dynamic Commerce Ads, and omnichannel visibility across social and retail media." },
      { icon: Eye, title: "Reporting & Performance Reviews", description: "Scheduled reports, instant presentations, and customizable dashboards for full visibility into cross-publisher social performance." },
      { icon: Cpu, title: "Powered by Skai", description: "Manage all social publishers from Skai's enterprise platform—AI-powered creative intelligence, audience management, and algorithmic optimization at scale." },
    ],
    skaiCapabilities: [
      { icon: Layers, title: "Creative Center & Creative AI", description: "Consolidate cross-channel creative assets into one grid for briefing, review, and analysis. AI automatically classifies Meta videos and images to surface performance by attribute." },
      { icon: ShoppingCart, title: "Social Commerce Suite", description: "Amazon Attribution for measuring Meta-to-Amazon impact, Dynamic Commerce Ads with real-time pricing, and omnichannel visibility connecting social to retail media data." },
      { icon: Brain, title: "Algorithmic Optimization", description: "Group campaigns into portfolios with shared budget or ROAS goals. Skai adjusts bids and budgets across campaigns to meet your targets automatically." },
      { icon: Users, title: "Audience Management", description: "Holistic view of TikTok, Snap, and Meta audiences with centralized audience creation, management, and cross-publisher insights." },
      { icon: Target, title: "Build Your Own Algorithm", description: "Train Skai to make the optimizations you would—leverage advanced automated actions to create custom optimization algorithms for your social campaigns." },
      { icon: BarChart3, title: "Cross-Channel Measurement", description: "View social performance alongside retail media and search data to understand the full consumer purchase journey and optimize across your entire media mix." },
    ],
  },
};

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = solutionData[slug || ""];

  if (!data) {
    return (
      <PageLayout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-h2 text-foreground">Solution not found</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <HeroSection
        headline={data.title}
        subheadline={data.subtitle}
        primaryCta={{ label: "Schedule a Strategy Call", href: "/strategy-call" }}
        secondaryCta={{ label: "View all solutions", href: "/solutions" }}
      />

      {data.showNetworkStrip && <RetailMediaNetworkStrip />}
      {data.logoStrip && <ChannelLogoStrip label={data.logoStrip.label} logos={data.logoStrip.logos} />}

      <section className="relative py-24 md:py-32 section-dark overflow-hidden">
        <FloatingElements variant="section" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="mx-auto max-w-site px-6 relative">
          <SectionHeader
            label="What's Included"
            title="How we deliver results"
            description={data.description}
            dark
          />
          <div className="mt-12">
            <FeatureGrid features={data.features} columns={data.features.length > 4 ? 3 : 2} variant="dark" />
          </div>
        </div>
      </section>

      {data.showFullServiceSections && <FullServiceSections />}
      {data.showSelfServeSections && <SelfServeSections />}

      {data.showNetworksGrid && <NetworksWeManageGrid />}

      {data.skaiCapabilities && (
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-site px-6 relative">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-body-sm font-medium tracking-wide uppercase text-primary mb-4"
            >
              Enterprise Technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex items-center gap-4 mb-6"
            >
              <h2 className="text-h2 text-foreground">Powered by</h2>
              <SkaiLogo alt="Skai" className="h-9 mt-1" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl text-body-lg text-muted-foreground mb-12"
            >
              As an exclusive Skai partner, we give you access to enterprise-grade retail media technology—AI-powered bidding, real-time automation, and cross-channel intelligence that the world's largest brands rely on.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.skaiCapabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="group p-6 rounded-xl glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{cap.title}</h3>
                    <p className="mt-2 text-body-sm text-muted-foreground">{cap.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 text-center"
            >
              <Link
                to="/platforms/skai"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-all"
              >
                Learn more about our Skai partnership →
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <CTABlock />
    </PageLayout>
  );
};

export default SolutionDetail;