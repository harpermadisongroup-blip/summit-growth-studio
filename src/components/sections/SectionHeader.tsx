import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
}

const SectionHeader = ({ label, title, description, dark = false }: SectionHeaderProps) => {
  return (
    <div className="max-w-3xl">
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-body-sm font-medium tracking-wide uppercase mb-4 text-accent"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`text-h2 ${dark ? "text-secondary-foreground" : "text-foreground"}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-6 text-body-lg ${dark ? "text-secondary-foreground/60" : "text-muted-foreground"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
