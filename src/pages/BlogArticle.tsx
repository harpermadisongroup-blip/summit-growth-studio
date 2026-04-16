import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import CTABlock from "@/components/sections/CTABlock";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const articles: Record<string, { title: string; category: string; date: string; excerpt: string }> = {
  "retail-media-2025": {
    title: "The State of Retail Media in 2025",
    category: "Retail Media",
    date: "Feb 2025",
    excerpt: "How brands should be thinking about retail media investment as the landscape matures—and what the smartest advertisers are doing differently.",
  },
  "amazon-dsp-guide": {
    title: "A Practical Guide to Amazon DSP",
    category: "Amazon",
    date: "Jan 2025",
    excerpt: "When to use DSP, how to structure campaigns, and what performance to expect.",
  },
  "enterprise-vs-self-serve": {
    title: "Enterprise vs. Self-Serve: Choosing the Right Model",
    category: "Strategy",
    date: "Dec 2024",
    excerpt: "How to decide between full-service management and a supported self-serve approach.",
  },
  "cross-channel-attribution": {
    title: "Cross-Channel Attribution That Actually Works",
    category: "Analytics",
    date: "Nov 2024",
    excerpt: "Moving beyond last-click to understand true advertising impact across channels.",
  },
  "walmart-advertising-growth": {
    title: "Why Walmart Advertising Deserves Your Attention",
    category: "Walmart",
    date: "Oct 2024",
    excerpt: "The growing opportunity in Walmart Connect and how to capitalize on it.",
  },
  "scaling-ad-spend": {
    title: "Scaling Ad Spend Without Scaling Waste",
    category: "Performance",
    date: "Sep 2024",
    excerpt: "How to grow your advertising investment while maintaining or improving efficiency.",
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles[slug || ""];

  if (!article) {
    return (
      <PageLayout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-h2 text-foreground">Article not found</h1>
          <Link to="/insights" className="text-primary font-medium mt-4 inline-block hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SEO title={article.title} description={article.excerpt} />
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 text-body-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                <Tag className="w-3.5 h-3.5" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-body-sm text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>

            <h1 className="text-h1 text-foreground mb-6">{article.title}</h1>
            <p className="text-body-lg text-muted-foreground mb-12">{article.excerpt}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="prose prose-lg max-w-none"
          >
            <div className="glass-card rounded-2xl p-10 md:p-14 text-center">
              <p className="text-h3 text-foreground mb-4">Full article coming soon.</p>
              <p className="text-body text-muted-foreground max-w-lg mx-auto">
                We're currently drafting this article. Check back soon for the full piece, or schedule a call to discuss this topic directly with our team.
              </p>
              <Link
                to="/strategy-call"
                className="inline-block mt-8 text-primary font-semibold hover:underline"
              >
                Schedule a Strategy Call →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABlock />
    </PageLayout>
  );
};

export default BlogArticle;
