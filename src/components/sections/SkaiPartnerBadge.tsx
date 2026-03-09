import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SkaiLogo from "@/components/ui/SkaiLogo";

const SkaiPartnerBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10 flex flex-col items-center gap-2"
    >
      <div className="flex items-center gap-2 text-body-sm text-muted-foreground tracking-wide uppercase">
        <span className="w-8 h-px bg-border" />
        Powered by
        <span className="w-8 h-px bg-border" />
      </div>
      <Link to="/platforms/skai" className="group flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-300 hover:bg-primary/[0.04]">
        <SkaiLogo
          alt="Skai logo"
          className="h-8 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="h-6 w-px bg-border" />
        <span className="text-body-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
          Exclusive North American Partner
        </span>
      </Link>
    </motion.div>
  );
};

export default SkaiPartnerBadge;
