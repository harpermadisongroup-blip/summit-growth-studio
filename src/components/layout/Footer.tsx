import { Link } from "react-router-dom";
import alliedLogoDark from "@/assets/allied-logo-dark-bg.png";

const Footer = () => {
  return (
    <footer className="relative bg-mesh-dark text-secondary-foreground overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      
      <div className="mx-auto max-w-site px-6 py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src={alliedLogoDark} alt="Allied Digital Strategies" className="h-14 w-auto" />
            </div>
            <p className="text-body-sm text-secondary-foreground/50 max-w-xs">
              Enterprise ad tech, fully managed. Access the platforms and performance your brand deserves.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-body-sm mb-4 text-accent">Solutions</h4>
            <ul className="space-y-2.5">
              <li><Link to="/solutions/full-service" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Full-Service</Link></li>
              <li><Link to="/solutions/self-serve" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Self-Serve</Link></li>
              <li><Link to="/solutions/retail-media" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Retail Media</Link></li>
              <li><Link to="/solutions/amazon" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Amazon</Link></li>
              <li><Link to="/solutions/walmart" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Walmart</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-body-sm mb-4 text-accent">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/case-studies" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/insights" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-body-sm mb-4 text-accent">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-body-sm text-secondary-foreground/40 hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-secondary-foreground/30">
            © {new Date().getFullYear()} Allied Digital Strategies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
