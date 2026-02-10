import { Compass } from "lucide-react";
import acmLogo from "@/assets/acm_circular.png";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-accent" />
            <img src={acmLogo} alt="ACM Logo" className="w-6 h-6 rounded-full" />
            <span className="font-display font-bold text-foreground">CODEATHON 2026</span>
          </div>
          <p className="text-xs text-muted-foreground font-body text-center">
            Organized by ACM Student Chapter · © 2026 All rights reserved
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
