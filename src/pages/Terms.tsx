import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";

const Terms = () => (
  <PageLayout>
    <SEO title="Terms of Service" description="Read the terms of service for Allied Digital Strategies website and services." />
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="mx-auto max-w-site px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-h1 text-foreground">Terms of Service</h1>
          <p className="mt-4 text-body-sm text-muted-foreground">Last updated: February 2025</p>

          <div className="mt-12 space-y-8">
            {[
              { title: "Agreement to Terms", body: "By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service." },
              { title: "Use of Service", body: "Our services are intended for business use. You agree to use our services only for lawful purposes and in accordance with these terms." },
              { title: "Intellectual Property", body: "The content, features, and functionality of our website are owned by Allied Digital Strategies and are protected by international copyright, trademark, and other intellectual property laws." },
              { title: "Limitation of Liability", body: "Allied Digital Strategies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services." },
              { title: "Changes to Terms", body: "We reserve the right to modify these terms at any time. We will notify you of significant changes by posting the new Terms of Service on this page." },
              { title: "Contact", body: "For questions about these Terms of Service, contact us at hello@allieddigitalstrategies.com." },
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

export default Terms;
