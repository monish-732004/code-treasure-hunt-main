import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";
import acmLogo from "@/assets/acm_circular.png";

const navLinks = [
  { label: "Journey", href: "#journey" },
  { label: "Details", href: "#details" },
  { label: "Rules", href: "#rules" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (!isHome) return;
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-500/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-blue-500"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Compass className="w-6 h-6 text-accent transition-transform duration-500 group-hover:rotate-90" />
          <img src={acmLogo} alt="ACM Logo" className="w-8 h-8 rounded-full" />
          <span className="font-display font-bold text-lg text-yellow-500 tracking-wide">
            CODEATHON
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) =>
            isHome ? (
              <button
                key={l.label}
                onClick={() => handleNavClick(l.href)}
                className="text-sm font-medium text-yellow-300 hover:text-yellow-100 transition-colors"
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.label}
                to={`/${l.href}`}
                className="text-sm font-medium text-yellow-300 hover:text-yellow-100 transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
          <Link to="/register" className="btn-adventure text-xs py-2 px-5">
            Register
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-b border-border animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNavClick(l.href)}
                className="text-sm font-medium text-yellow-300 hover:text-yellow-100 text-left py-2"
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/register"
              className="btn-adventure text-xs py-2 px-5 text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
