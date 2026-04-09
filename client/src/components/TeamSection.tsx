/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Team: Member cards with roles, affiliation badges
 * Content enriched from Chartering Document with specific responsibilities
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Instagram } from "lucide-react";
import erikHeadshot from "./assets/erik-headshot.png";
import tylerHeadshot from "./assets/tyler-headshot.png";
import luccaHeadshot from "./assets/lucca-headshot.jpg";
import taylorHeadshot from "./assets/taylor-foster-headshot.png";
import saeeHeadshot from "./assets/saee-headshot.jpg";

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

const team = [
  {
    name: "Erik O'Bryant",
    role: "Project and SoftWare Development Lead",
    dept: "Biomedical Engineering",
    photo: erikHeadshot,
    focus: "Overall project direction, system design, and signal processing architecture",
  },
  {
    name: "Tyler Santos",
    role: "Electrical Systems Lead",
    dept: "Electrical Engineering",
    photo: tylerHeadshot,
    focus: "Custom PCB design, amplification circuitry, and power management systems",
  },
  {
    name: "Lucca Saraceno",
    role: "Mechanical Systems & Fabrication Lead",
    dept: "Biomedical Engineering",
    photo: luccaHeadshot,
    focus: "Software development, data collection and mechanical systems integration",
  },
  {
    name: "Taylor Foster",
    role: "Human Systems and Algorithms Research Lead",
    dept: "Human Systems Engineering",
    photo: taylorHeadshot,
    focus: "Machine learning research, market analysis, and technical documentation",
  },
  {
    name: "Saee Pangarkar",
    role: "Technical Research and Implementation Lead",
    dept: "Biomedical Engineering",
    photo: saeeHeadshot,
    focus: "AI model development, electrode research, and signal preprocessing",
  },
];

const affiliations = [
  "ASU Luminosity",
  "The Luminosity Lab",
  "NEXUS",
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="relative container">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-8">
          <FadeIn>
            <span
              className="text-6xl md:text-8xl font-bold text-electric/10 leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              08
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-3 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                The Team
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The Minds{" "}
                <span className="text-electric text-glow">Behind It</span>
              </h2>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-16" style={{ fontFamily: "var(--font-body)" }}>
            A multidisciplinary team of engineers from Arizona State University, working
            at the intersection of electrical engineering, biomedical engineering, and
            human systems engineering through The Luminosity Lab.
          </p>
        </FadeIn>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={0.2 + i * 0.08}>
              <div className="group p-6 rounded-lg border border-border bg-card/30 hover:border-electric/30 hover:bg-card/60 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-electric/10 border border-electric/20 overflow-hidden group-hover:glow-blue-sm transition-all duration-500 shrink-0">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-sm text-electric"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1" style={{ fontFamily: "var(--font-body)" }}>
                  {member.focus}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-xs text-muted-foreground bg-muted/50 rounded-md border border-border/50" style={{ fontFamily: "var(--font-mono)" }}>
                    {member.dept}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Affiliations */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-lg border border-border bg-card/30">
            <span
              className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground shrink-0"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Affiliated With
            </span>
            <div className="flex flex-wrap gap-3">
              {affiliations.map((aff) => (
                <span
                  key={aff}
                  className="px-4 py-2 text-sm font-medium text-foreground bg-muted/30 rounded-md border border-border hover:border-electric/30 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {aff}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={0.55}>
          <div className="flex items-center gap-4 mt-8">
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
              CONNECT //
            </span>
            <a
              href="https://www.linkedin.com/company/the-bluematter-project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-electric hover:border-electric/30 transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/bluematterproject"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-electric hover:border-electric/30 transition-all duration-300"
            >
              <Instagram size={16} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
