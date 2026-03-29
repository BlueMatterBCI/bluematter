/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Footer: Contact CTA + minimal footer with links
 * Electric blue accent, grid pattern background
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Instagram, ArrowUpRight, Brain } from "lucide-react";
import { toast } from "sonner";
import NeuralBackground from "./NeuralBackground";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Market", href: "#market" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
];

export default function FooterSection() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Contact CTA */}
      <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <NeuralBackground className="opacity-40" />

        <div className="relative container">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-6 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Get Involved
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Interested in the{" "}
                <span className="text-electric text-glow">Future of BCI</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
                Whether you're a researcher, investor, potential partner, or simply curious
                about brain-computer interfaces, we'd love to connect. Follow our journey
                and reach out to learn more about BlueMatter.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.linkedin.com/company/the-bluematter-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-electric text-white rounded-md hover:bg-electric-bright transition-all duration-300 glow-blue-sm hover:glow-blue"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.instagram.com/bluematterproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold border border-border text-foreground rounded-md hover:border-electric/40 hover:bg-electric/5 transition-all duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Instagram size={16} />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border bg-card/30">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Logo + tagline */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-7 h-7">
                  <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="oklch(0.65 0.2 255)" strokeWidth="1.5" opacity="0.6" />
                    <path
                      d="M12 18c0-4 2.5-8 6-8s6 4 6 8-2.5 8-6 8-6-4-6-8z"
                      stroke="oklch(0.65 0.2 255)"
                      strokeWidth="1.5"
                      fill="oklch(0.65 0.2 255 / 0.15)"
                    />
                    <circle cx="18" cy="14" r="2" fill="oklch(0.75 0.2 255)" />
                  </svg>
                </div>
                <span
                  className="text-base font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Blue<span className="text-electric">Matter</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs" style={{ fontFamily: "var(--font-body)" }}>
                Pioneering practical, non-invasive brain-computer interfaces for consumer applications.
              </p>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
              &copy; {new Date().getFullYear()} The BlueMatter Project. ASU Luminosity Lab.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                NEXUS Summit 2026
              </span>
              <span className="w-1 h-1 rounded-full bg-electric/40" />
              <span className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                Health Track
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
