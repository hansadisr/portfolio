import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { cn } from "../../lib/utils";
import resumePdf from "../../assets/Hansadee_Rathnayaka.pdf";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[90vw] 2xl:max-w-[1600px] mx-auto flex items-center justify-between">
        <a href="#" className="text-xl sm:text-2xl font-display font-bold text-gradient tracking-tighter">
          HR.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:text-gradient"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3 lg:gap-4">
            <ThemeToggle />
            <a
              href={resumePdf}
              download="Hansadee_Rathnayaka_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(176,38,255,0.5)] text-xs lg:text-sm"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumePdf}
                download="Hansadee_Rathnayaka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 mt-3 sm:mt-4 rounded-xl bg-primary text-primary-foreground font-medium shadow-[0_0_15px_rgba(176,38,255,0.5)] text-sm sm:text-base"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
