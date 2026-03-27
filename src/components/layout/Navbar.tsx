import { useState, useEffect } from "react";
import alliedLogo from "@/assets/allied-logo.png";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  { label: "Full-Service Performance Management", href: "/solutions/full-service" },
  { label: "Supported Self-Serve Model", href: "/solutions/self-serve" },
  { label: "Enterprise Platform Access (Skai)", href: "/platforms/skai" },
];

const mediaServices = [
  { label: "Retail Media (Amazon & Walmart)", href: "/solutions/retail-media" },
  { label: "DSP & Programmatic Display", href: "/solutions/dsp-display" },
  { label: "Paid Search (Google & Microsoft)", href: "/solutions/paid-search" },
  { label: "Paid Social (Meta & More)", href: "/solutions/social" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-white backdrop-blur-md border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-site px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={alliedLogo} alt="Allied Digital Strategies" className="h-11 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("solutions")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors">
              Solutions <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", openDropdown === "solutions" && "rotate-180")} />
            </button>
            <AnimatePresence>
              {openDropdown === "solutions" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-2"
                >
                  <div className="bg-background border border-border rounded-xl p-2 min-w-[280px] shadow-lg">
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-3 py-2.5 text-body-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Platforms Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("platforms")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors">
              Media Services <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", openDropdown === "platforms" && "rotate-180")} />
            </button>
            <AnimatePresence>
              {openDropdown === "platforms" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-2"
                >
                  <div className="bg-background border border-border rounded-xl p-2 min-w-[200px] shadow-lg">
                    {mediaServices.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-3 py-2.5 text-body-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/who-we-help" className="px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors">
            Who We Help
          </Link>
          <Link to="/case-studies" className="px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors">
            Case Studies
          </Link>
          <Link to="/about" className="px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/pricing" className="px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/insights" className="px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Contact
            </Button>
          </Link>
          <Link to="/strategy-call">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow">
              Schedule a Strategy Call
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              <p className="text-body-sm font-medium text-foreground px-3 py-2">Solutions</p>
              {solutions.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 pl-6 text-body-sm text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              ))}
              <p className="text-body-sm font-medium text-foreground px-3 py-2 pt-3">Media Services</p>
              {mediaServices.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 pl-6 text-body-sm text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              ))}
              <Link to="/who-we-help" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground">Who We Help</Link>
              <Link to="/case-studies" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground">Case Studies</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground">About</Link>
              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground">Pricing</Link>
              <Link to="/insights" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-body-sm text-muted-foreground hover:text-foreground">Blog</Link>
              <div className="pt-4 space-y-2">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">Contact</Button>
                </Link>
                <Link to="/strategy-call" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground btn-glow">Schedule a Strategy Call</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
