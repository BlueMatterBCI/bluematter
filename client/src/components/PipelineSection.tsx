/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Pipeline: Signal processing flow visualization
 * Horizontal pipeline with connecting lines, generated signal image
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import SIGNAL_IMG from "./assets/SignalProcessing.png";

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

const pipelineSteps = [
  {
    step: "01",
    title: "Signal Acquisition",
    desc: "Raw EEG signals captured from 20+ electrodes across the scalp, along with accelerometer data for motion tracking.",
  },
  {
    step: "02",
    title: "Artifact Removal",
    desc: "Accelerometer-enhanced motion artifact removal filters environmental noise from the raw brain signals.",
  },
  {
    step: "03",
    title: "Filter & Normalize",
    desc: "Advanced filtering and normalization pipeline with eye artifact detection to produce clean, usable data.",
  },
  {
    step: "04",
    title: "Brain Mapping",
    desc: "A novel self-organizing map generates a spatial brain map using inspired topographic techniques.",
  },
  {
    step: "05",
    title: "Neural Classification",
    desc: "A custom spiking graph convolution neural network learns from the brain map to classify intended actions.",
  },
  {
    step: "06",
    title: "Action Output",
    desc: "Predicted intentions are transmitted wirelessly via Bluetooth to control connected IoT devices in real time.",
  },
];

export default function PipelineSection() {
  return (
    <section id="pipeline" className="relative py-28 md:py-36 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="relative container">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-8">
          <FadeIn>
            <span
              className="text-6xl md:text-8xl font-bold text-electric/10 leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              04
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-3 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Signal Processing
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                From Raw Signals to{" "}
                <span className="text-electric text-glow">Intent</span>
              </h2>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-12" style={{ fontFamily: "var(--font-body)" }}>
            Our pipeline combines a multitude of proven signal processing techniques in a
            never-before-seen way to produce high-quality data from a chaotic and noisy
            environment. Most notably, it uses accelerometer-enhanced motion artifact removal,
            generates a brain map of the user, and employs a spiking graph convolution neural
            network to learn and classify the cleaned data in real time.
          </p>
        </FadeIn>

        {/* Signal visualization image */}
        <FadeIn delay={0.2}>
          <div className="relative rounded-xl overflow-hidden border border-border mb-16">
            <img
              src={SIGNAL_IMG}
              alt="Signal processing visualization showing raw EEG data being filtered and classified"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
            <div className="absolute bottom-4 right-4 px-4 py-2 rounded-md bg-card/90 backdrop-blur-sm border border-border">
              <span className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                SIGNAL_PIPELINE // REAL_TIME_PROCESSING
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Pipeline steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pipelineSteps.map((step, i) => (
            <FadeIn key={step.step} delay={0.25 + i * 0.08}>
              <div className="group relative p-6 rounded-lg border border-border bg-card/30 hover:border-electric/30 hover:bg-card/60 transition-all duration-500">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold text-electric tracking-wider"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    STEP {step.step}
                  </span>
                  {i < pipelineSteps.length - 1 && (
                    <ArrowRight size={14} className="text-electric/40 hidden lg:block" />
                  )}
                </div>
                <h3
                  className="text-base font-semibold mb-2 text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {step.desc}
                </p>
                {/* Accent line */}
                <div className="absolute top-0 left-6 w-8 h-px bg-gradient-to-r from-electric/50 to-transparent" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
