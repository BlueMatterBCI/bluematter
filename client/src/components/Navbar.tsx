/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Navbar: Fixed top, glass-morphism on scroll, minimal links
 * Font: Space Grotesk for brand, Work Sans for links
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Market", href: "#market" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.13_0.025_260_/_0.85)] backdrop-blur-xl border-b border-[oklch(0.25_0.03_260_/_0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8 md:w-9 md:h-9">
            <div className="absolute inset-0 rounded-full bg-electric/20 group-hover:bg-electric/30 transition-colors" />
            <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
              <circle cx="18" cy="18" r="16" stroke="oklch(0.65 0.2 255)" strokeWidth="1.5" opacity="0.6" />
              <path
                d="M12 18c0-4 2.5-8 6-8s6 4 6 8-2.5 8-6 8-6-4-6-8z"
                stroke="oklch(0.65 0.2 255)"
                strokeWidth="1.5"
                fill="oklch(0.65 0.2 255 / 0.15)"
              />
              <circle cx="18" cy="14" r="2" fill="oklch(0.75 0.2 255)" />
              <path d="M15 18h6M16 21h4" stroke="oklch(0.65 0.2 255)" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          <span
            className="text-lg md:text-xl font-semibold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Blue<span className="text-electric">Matter</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-electric group-hover:w-3/4 transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="ml-4 px-5 py-2 text-sm font-medium bg-electric/10 text-electric border border-electric/30 rounded-md hover:bg-electric/20 hover:border-electric/50 transition-all duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[oklch(0.14_0.025_260_/_0.98)] backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="py-3 px-4 text-left text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contact")}
                className="mt-3 py-3 px-4 text-base font-medium text-electric bg-electric/10 border border-electric/30 rounded-md text-center"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
