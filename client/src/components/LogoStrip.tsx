/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * LogoStrip: Affiliation/partner logos for credibility
 * Subtle, muted logos that brighten on hover
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Updated to include 'logo' paths instead of 'abbr'
const affiliations = [
  { name: "Arizona State University", id: "ASU", logo: "/logos/asu-logo.jpg" },
  { name: "The Luminosity Lab", id: "LUMINOSITY", logo: "/logos/lum-logo.png" },
  { name: "NEXUS Summit", id: "NEXUS", logo: "/logos/nexus-logo.png" },
];

export default function LogoStrip() {
  return (
    <section className="relative py-16 border-t border-b border-border/50">
      <div className="container">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Backed By
            </span>
            <div className="flex items-center gap-8 md:gap-14">
              {affiliations.map((aff) => (
                <div
                  key={aff.id}
                  className="group flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-500"
                >
                  {/* Container updated with overflow-hidden */}
                  <div className="w-8 h-8 rounded-md border border-border bg-card/50 flex items-center justify-center overflow-hidden group-hover:border-electric/30 transition-colors">
                    {/* Replaced text abbreviation with an img tag */}
                    <img 
                      src={aff.logo} 
                      alt={`${aff.name} logo`} 
                      className="w-full h-full object-contain p-1 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span
                    className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors hidden md:block"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {aff.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
