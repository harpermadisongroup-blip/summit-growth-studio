import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";

const Privacy = () => (
  <PageLayout>
    <SEO title="Privacy Policy" description="Learn how Allied Digital Strategies collects, uses, and protects your personal information." />
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="mx-auto max-w-site px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-h1 text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-body-sm text-muted-foreground">Last updated: February 2025</p>

          <div className="mt-12 prose prose-neutral max-w-none space-y-8">
            {[
              { title: "Information We Collect", body: "We collect information you provide directly to us, such as when you fill out a form, request a strategy call, or contact us. This may include your name, email address, company name, and any other information you choose to provide." },
              { title: "How We Use Your Information", body: "We use the information we collect to respond to your inquiries, provide our services, send you marketing communications (with your consent), and improve our website and services." },
              { title: "Information Sharing", body: "We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential." },
              { title: "Data Security", body: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
              { title: "Cookies", body: "Our website may use cookies to enhance your experience. You can choose to set your browser to refuse cookies, but some features of the site may not function properly." },
              { title: "Contact Us", body: "If you have any questions about this Privacy Policy, please contact us at hello@allieddigitalstrategies.com." },
            ].map((s) => (
              <div key={s.title}>
                <h2 className="text-h3 text-foreground">{s.title}</h2>
                <p className="mt-3 text-body text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Privacy;
