import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo_Golden_bloom_bakers-removebg-preview.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location.pathname === "/") {
        // Already on home, just scroll
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home first, then scroll after navigation
        window.location.href = href;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-elegant ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mt-[2rem] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-header text-primary hover:text-warm-gold transition-smooth">
            <img src={logo} className="w-[120px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href === "/" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-subheader text-foreground hover:text-accent transition-smooth relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-warm-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="font-subheader text-foreground hover:text-accent transition-smooth relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-warm-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </button>
              )
            ))}
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              link.href === "/" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-3 font-subheader text-foreground hover:text-accent transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left py-3 font-subheader text-foreground hover:text-accent transition-smooth"
                >
                  {link.name}
                </button>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
