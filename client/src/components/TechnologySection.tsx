/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Technology: Product showcase with generated cap image, feature cards
 * Asymmetric layout, glowing accent lines
 * Content enriched from Chartering Document and Change the World presentation
 * Five vision pillars: Discrete Design, Wireless Connectivity, Software Refinement,
 * Circuitry Innovation, Seamless Robotic Control
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Bluetooth, BrainCircuit, CircuitBoard, Battery, Smartphone, Glasses, Wifi, Code, Cog, Bot } from "lucide-react";

import TECH_IMG from "./assets/Hand.png";

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

const visionPillars = [
  { icon: Glasses, label: "Discreet Design", desc: "Hidden inside a baseball cap" },
  { icon: Wifi, label: "Wireless Connectivity", desc: "Bluetooth-powered, no wires" },
  { icon: Code, label: "Software Refinement", desc: "AI-powered signal processing" },
  { icon: Cog, label: "Circuitry Innovation", desc: "Custom modular PCB design" },
  { icon: Bot, label: "Seamless Control", desc: "Robotic & IoT integration" },
];

const features = [
  {
    icon: CircuitBoard,
    title: "Custom Electronics",
    desc: "Custom-built modular PCB and amplification circuitry, easy to replace and repair. Compact enough to fit beneath a standard baseball cap brim.",
  },
  {
    icon: Bluetooth,
    title: "Wireless Connectivity",
    desc: "Completely wireless operation via Bluetooth, using battery power \u2014 unlike clinical BCIs that require direct wiring for power and signal transmission.",
  },
  {
    icon: BrainCircuit,
    title: "Novel Signal Processing",
    desc: "AI-powered signal processing pipeline with a novel self-organizing brain map and spiking graph neural network to classify brain signals as intended actions.",
  },
  {
    icon: Cpu,
    title: "High Electrode Count",
    desc: "20+ electrodes with full head coverage far more than most commercial BCIs (4\u20138), making it comparable to clinical EEGs in scope of signal acquisition.",
  },
  {
    icon: Battery,
    title: "Rechargeable Design",
    desc: "Battery-powered with integrated charging circuit. Designed for all-day wear with rechargeable button-cell LiPo or smartwatch batteries.",
  },
  {
    icon: Smartphone,
    title: "App Integration",
    desc: "Mobile and desktop applications for user-friendly interaction, customization, and seamless control over device connections and signal interpretation.",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative py-28 md:py-36 overflow-hidden">
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="relative container">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-8">
          <FadeIn>
            <span
              className="text-6xl md:text-8xl font-bold text-electric/10 leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              03
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-3 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                The Product
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Everyday Technology,{" "}
                <span className="text-electric text-glow">Extraordinary Control</span>
              </h2>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-12" style={{ fontFamily: "var(--font-body)" }}>
            A discreet wireless EEG system integrated into a baseball cap combining
            clinical-grade signal acquisition with consumer-friendly design. Completely
            wireless, easy to wear, and seamlessly connected to your world.
          </p>
        </FadeIn>

        {/* Vision Pillars - from Change the World presentation */}
        <FadeIn delay={0.18}>
          <div className="flex flex-wrap gap-3 mb-16">
            {visionPillars.map((pillar, i) => (
              <div
                key={pillar.label}
                className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-card/30 hover:border-electric/30 hover:bg-card/60 transition-all duration-500"
              >
                <div className="w-8 h-8 rounded-md bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:glow-blue-sm transition-all duration-500">
                  <pillar.icon size={14} className="text-electric" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                    {pillar.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                    {pillar.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Product showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-electric/20 via-transparent to-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              <div className="relative rounded-xl overflow-hidden border border-border">
                <img
                  src={TECH_IMG}
                  alt="BlueMatter BCI integrated into a baseball cap"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {features.slice(0, 3).map((feat, i) => (
              <FadeIn key={feat.title} delay={0.25 + i * 0.1}>
                <div className="group flex gap-5 p-5 rounded-lg border border-border bg-card/30 hover:border-electric/30 hover:bg-card/60 transition-all duration-500">
                  <div className="w-11 h-11 shrink-0 rounded-md bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:glow-blue-sm transition-all duration-500">
                    <feat.icon size={20} className="text-electric" />
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold mb-1.5 text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(3).map((feat, i) => (
            <FadeIn key={feat.title} delay={0.3 + i * 0.1}>
              <div className="group p-7 rounded-lg border border-border bg-card/30 hover:border-electric/30 hover:bg-card/60 transition-all duration-500">
                <div className="w-11 h-11 rounded-md bg-electric/10 border border-electric/20 flex items-center justify-center mb-5 group-hover:glow-blue-sm transition-all duration-500">
                  <feat.icon size={20} className="text-electric" />
                </div>
                <h3
                  className="text-base font-semibold mb-2 text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {feat.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
