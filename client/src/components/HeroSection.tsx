/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Hero: Full viewport, split layout, generated neural visualization bg
 * Electric blue accent, grid overlay, animated entrance
 */
import { motion } from "framer-motion";
import { ArrowDown, Zap, Brain, Wifi } from "lucide-react";

//const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180721525/c36gcWDG2APCBbHtCdjDSS/hero-bg-kwprqrsPwkewQKVBZqcCnF.webp";
import HERO_BG from "./assets/HeroBG.png"; //Bruh

const stats = [
  { value: "$2.75B", label: "Global BCI Market", icon: Zap },
  { value: "61.7%", label: "Non-Invasive Share", icon: Brain },
  { value: "10x", label: "Cost Reduction", icon: Wifi },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.025_260)] via-[oklch(0.13_0.025_260_/_0.85)] to-[oklch(0.13_0.025_260_/_0.4)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.025_260)] via-transparent to-[oklch(0.13_0.025_260_/_0.3)]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Content */}
      <div className="relative container pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-electric/30 rounded-full bg-electric/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            <span
              className="text-xs font-medium tracking-widest uppercase text-electric"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Pioneering Consumer BCI
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bridging{" "}
            <span className="text-electric text-glow">Human Intention</span>
            <br />
            and Digital Action
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We are designing a discrete, affordable, non-invasive brain-computer
            interface that wirelessly extends human control over IoT devices —
            hidden inside an everyday baseball cap.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={() =>
                document.querySelector("#technology")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 text-sm font-semibold bg-electric text-white rounded-md hover:bg-electric-bright transition-all duration-300 glow-blue-sm hover:glow-blue"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore Our Technology
            </button>
            <button
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 text-sm font-semibold border border-border text-foreground rounded-md hover:border-electric/40 hover:bg-electric/5 transition-all duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Learn More
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center">
                  <stat.icon size={18} className="text-electric" />
                </div>
                <div>
                  <div
                    className="text-xl md:text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-muted-foreground tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-electric/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
