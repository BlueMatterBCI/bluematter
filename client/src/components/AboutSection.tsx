/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * About: Problem statement + vision, asymmetric layout
 * Subtle grid background, section numbering, blue accent lines
 * Content enriched from Chartering Document and Change the World presentation
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Eye, Target, DollarSign, Zap, Shield } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180721525/c36gcWDG2APCBbHtCdjDSS/about-pattern-TkZezfXv93sFZi2hGxDfRx.webp";

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

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Clinical BCIs",
    desc: "High signal fidelity but invasive, expensive ($10k\u2013$30k), bulky, and tethered by wires \u2014 limiting them to laboratory settings and specialized medical facilities.",
    stat: "$10k\u2013$30k",
    statLabel: "per device",
  },
  {
    icon: Eye,
    title: "Commercial BCIs",
    desc: "Wireless and more affordable (~$3k) but severely limited in accuracy, electrode count (4\u20138), and form factor \u2014 failing to achieve mainstream consumer adoption.",
    stat: "4\u20138",
    statLabel: "electrodes only",
  },
  {
    icon: Target,
    title: "The Gap",
    desc: "No existing product combines clinical-grade accuracy with consumer-friendly design, wireless operation, full head coverage, and an accessible price point under $1,000.",
    stat: "0",
    statLabel: "viable options",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <img src={ABOUT_BG} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative container">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-20">
          <FadeIn>
            <span
              className="text-6xl md:text-8xl font-bold text-electric/10 leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              01
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-3 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                The Problem
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Clinical-grade performance still is not 
                <br />
                <span className="text-electric">consumer-grade</span>
              </h2>
            </div>
          </FadeIn>
        </div>

        {/* Problem statement */}
        <FadeIn delay={0.15}>
          <div className="max-w-3xl mb-16">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Consumer-grade, non-invasive brain-computer interfaces (BCIs) aren't yet capable of advanced robotic control.
              Development in this area has largely stagnated due to the difficulties of processing brain signals and the high cost of production,
              thus restricting control applications to clinics and laboratories.
              
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              While the global BCI market has grown to $2.75 billion, the vast majority of that
              value remains locked in research institutions and hospitals. Consumer-facing products
              sacrifice too much accuracy to be useful, and clinical devices sacrifice too much
              usability to be practical outside controlled settings.
            </p>
          </div>
        </FadeIn>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-28">
          {painPoints.map((point, i) => (
            <FadeIn key={point.title} delay={0.2 + i * 0.1}>
              <div className="group relative p-8 rounded-lg border border-border bg-card/50 hover:border-electric/30 hover:bg-card/80 transition-all duration-500">
                <div className="absolute top-0 left-8 w-12 h-px bg-gradient-to-r from-electric/60 to-transparent" />
                <div className="w-10 h-10 rounded-md bg-electric/10 border border-electric/20 flex items-center justify-center mb-5 group-hover:glow-blue-sm transition-all duration-500">
                  <point.icon size={18} className="text-electric" />
                </div>
                <h3
                  className="text-lg font-semibold mb-3 text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  {point.desc}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <span className="text-xl font-bold text-electric" style={{ fontFamily: "var(--font-display)" }}>
                    {point.stat}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2" style={{ fontFamily: "var(--font-mono)" }}>
                    {point.statLabel}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Vision */}
        <div className="flex items-start gap-6 mb-16">
          <FadeIn>
            <span
              className="text-6xl md:text-8xl font-bold text-electric/10 leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              02
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-3 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Our Vision
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                BCI for{" "}
                <span className="text-electric text-glow">Everyone</span>
              </h2>
            </div>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          <FadeIn delay={0.15} className="lg:col-span-3">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                We envision a world where consumer-grade BCIs are affordable and unobtrusive
                while maintaining the accuracy of research-grade devices. Our EEG device is
                designed to be discreet, completely wireless, and user-friendly and precise enough
                for both medical and casual use-cases.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                From precise prosthetic control to monitoring mental health conditions and
                controlling personal smart devices, we believe BCIs can finally become more than
                lab equipment and enter daily life, bridging the gap between human intention
                and digital action.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="lg:col-span-2">
            <div className="relative p-6 rounded-lg border border-electric/20 bg-electric/5">
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent" />
              <h4
                className="text-sm font-semibold text-electric mb-4 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Key Objectives
              </h4>
              <ul className="space-y-3">
                {[
                  "AI-powered signal processing and interpretation",
                  "Compact design hidden inside a baseball cap",
                  "High electrode-count with full head coverage",
                  "Wireless Bluetooth connectivity to IoT devices",
                  "Affordable consumer pricing (<$1000 vs $10k+)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                    <span className="w-1 h-1 rounded-full bg-electric mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Cost advantage highlight */}
        <FadeIn delay={0.3}>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="p-6 rounded-lg border border-border bg-card/30 text-center">
              <DollarSign size={20} className="text-electric mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                ~$200
              </div>
              <div className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                R&D cost per unit
              </div>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card/30 text-center">
              <Zap size={20} className="text-electric mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                ~$90
              </div>
              <div className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                Manufacturing cost
              </div>
            </div>
            <div className="p-6 rounded-lg border border-electric/30 bg-electric/5 text-center">
              <Shield size={20} className="text-electric mx-auto mb-3" />
              <div className="text-2xl font-bold text-electric mb-1" style={{ fontFamily: "var(--font-display)" }}>
                ~$400
              </div>
              <div className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                Target market price
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
