import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CTABlock from "@/components/sections/CTABlock";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import heroCaseStudiesBg from "@/assets/hero-casestudies-bg.jpg";

const articles = [
  {
    slug: "retail-media-2025",
    title: "The State of Retail Media in 2025",
    category: "Retail Media",
    excerpt: "How brands should be thinking about retail media investment as the landscape matures—and what the smartest advertisers are doing differently.",
    date: "Feb 2025",
    featured: true,
  },
  {
    slug: "amazon-dsp-guide",
    title: "A Practical Guide to Amazon DSP",
    category: "Amazon",
    excerpt: "When to use DSP, how to structure campaigns, and what performance to expect.",
    date: "Jan 2025",
  },
  {
    slug: "enterprise-vs-self-serve",
    title: "Enterprise vs. Self-Serve: Choosing the Right Model",
    category: "Strategy",
    excerpt: "How to decide between full-service management and a supported self-serve approach.",
    date: "Dec 2024",
  },
  {
    slug: "cross-channel-attribution",
    title: "Cross-Channel Attribution That Actually Works",
    category: "Analytics",
    excerpt: "Moving beyond last-click to understand true advertising impact across channels.",
    date: "Nov 2024",
  },
  {
    slug: "walmart-advertising-growth",
    title: "Why Walmart Advertising Deserves Your Attention",
    category: "Walmart",
    excerpt: "The growing opportunity in Walmart Connect and how to capitalize on it.",
    date: "Oct 2024",
  },
  {
    slug: "scaling-ad-spend",
    title: "Scaling Ad Spend Without Scaling Waste",
    category: "Performance",
    excerpt: "How to grow your advertising investment while maintaining or improving efficiency.",
    date: "Sep 2024",
  },
];

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredArticle = articles.find((a) => a.featured);
  const filteredArticles = articles.filter(
    (a) =>
      !a.featured &&
      (activeCategory === "All" || a.category === activeCategory)
  );

  return (
    <PageLayout>
      <HeroSection
        headline="Thinking that drives performance."
        subheadline="Practitioner perspectives on retail media, paid search, paid social, and the enterprise technology shaping modern advertising. From the team behind $8B+ in managed ad spend."
        centered
        backgroundImage={heroCaseStudiesBg}
        primaryCta={{ label: "Schedule a Strategy Call", href: "/strategy-call" }}
      />

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 md:py-20 bg-background">
          <div className="mx-auto max-w-site px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={`/insights/${featuredArticle.slug}`}
                className="block rounded-2xl glass-card gradient-border-hover hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Featured
                      </span>
                      <span className="text-body-sm text-primary font-medium bg-primary/10 px-2.5 py-0.5 rounded-full">
                        {featuredArticle.category}
                      </span>
                      <span className="text-body-sm text-muted-foreground">{featuredArticle.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-body text-muted-foreground max-w-2xl mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read the full article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filters + Subscribe */}
      <section className="pb-8 bg-background">
        <div className="mx-auto max-w-site px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Subscribe CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-3 pl-5 rounded-xl border border-border/50 bg-muted/30"
            >
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-body-sm text-muted-foreground whitespace-nowrap">Get insights delivered</span>
              <Link
                to="/strategy-call"
                className="text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group"
            >
              <Link
                to={`/insights/${a.slug}`}
                className="block rounded-xl glass-card gradient-border-hover hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-body-sm text-primary font-medium bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {a.category}
                    </span>
                    <span className="text-body-sm text-muted-foreground">{a.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-muted-foreground">{a.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-body-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="mx-auto max-w-site px-6 text-center py-16">
            <p className="text-muted-foreground">No articles in this category yet. Check back soon.</p>
          </div>
        )}
      </section>

      <CTABlock />
    </PageLayout>
  );
};

export default Insights;
