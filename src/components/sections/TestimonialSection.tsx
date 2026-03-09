import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I see a lot of the benefit that Celeste brings to the team by reducing manual work and helping them get to strategic output faster.",
    name: "Stephanie Nelson",
    title: "Vice President, Commerce & Performance Media",
    company: "Acosta Group",
  },
  {
    quote: "Skai provides greater visibility and control than any service we've used before.",
    name: "Jamie Roller",
    title: "Director, Growth Channels",
    company: "Dr. Squatch",
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-site px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-body-sm font-semibold text-primary uppercase tracking-wider">
            Trusted by Industry Leaders
          </span>
          <h2 className="mt-3 text-h2 text-foreground">
            8,200+ brands are winning with Skai
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-body-lg text-foreground leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-body font-semibold text-foreground">{t.name}</p>
                <p className="text-body-sm text-muted-foreground">{t.title}</p>
                <p className="text-body-sm text-primary font-medium mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
