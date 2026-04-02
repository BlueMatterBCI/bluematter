/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Market: BCI market data visualization, comparison table
 * Animated counters, data cards
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Globe, DollarSign, Users } from "lucide-react";
import VISION_IMG from "./assets/Mascot.png"; //Bruh

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

function AnimatedCounter({ target, prefix = "", suffix = "", decimals = 0 }: { target: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}

const marketStats = [
  {
    icon: DollarSign,
    value: 2.75,
    prefix: "$",
    suffix: "B",
    decimals: 2,
    label: "Global BCI Market Size",
    sublabel: "2026 valuation",
  },
  {
    icon: TrendingUp,
    value: 61.7,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "Non-Invasive Devices",
    sublabel: "Market share",
  },
  {
    icon: Globe,
    value: 40.8,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "North America",
    sublabel: "Regional market share",
  },
  {
    icon: Users,
    value: 15,
    prefix: "",
    suffix: "%+",
    decimals: 0,
    label: "Annual Growth",
    sublabel: "CAGR projected",
  },
];

const comparison = [
  { category: "Price", clinical: "$10,000–$30,000", commercial: "~$3,000", bluematter: "~$400" },
  { category: "Wireless", clinical: "No (wired)", commercial: "Yes", bluematter: "Yes (Bluetooth)" },
  { category: "Invasive", clinical: "Often yes", commercial: "No", bluematter: "No" },
  { category: "Signal Fidelity", clinical: "Very high", commercial: "Low–Medium", bluematter: "High (AI-enhanced)" },
  { category: "Form Factor", clinical: "Bulky headset", commercial: "Headband", bluematter: "Baseball cap" },
  { category: "Electrode Count", clinical: "64–256", commercial: "4–8", bluematter: "10+ (expandable)" },
];

export default function MarketSection() {
  //const VISION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180721525/c36gcWDG2APCBbHtCdjDSS/vision-section-Rj4HrvSzvpAUWsdW5zZY8v.webp";

  return (
    <section id="market" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="relative container">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-8">
          <FadeIn>
            <span
              className="text-6xl md:text-8xl font-bold text-electric/10 leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              05
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-3 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Market Opportunity
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Growing{" "}
                <span className="text-electric text-glow">$2.75B</span>{" "}
                Market
              </h2>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-16" style={{ fontFamily: "var(--font-body)" }}>
            The global BCI market is expanding rapidly, driven by advances in neuroscience,
            AI, and consumer demand for seamless human-machine interaction. Non-invasive
            devices dominate the market, and North America leads adoption — positioning
            BlueMatter at the center of this growth.
          </p>
        </FadeIn>

        {/* Market stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {marketStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.2 + i * 0.08}>
              <div className="group p-6 rounded-lg border border-border bg-card/30 hover:border-electric/30 hover:bg-card/60 transition-all duration-500">
                <div className="w-10 h-10 rounded-md bg-electric/10 border border-electric/20 flex items-center justify-center mb-4 group-hover:glow-blue-sm transition-all duration-500">
                  <stat.icon size={18} className="text-electric" />
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold text-foreground mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-sm font-medium text-foreground mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                  {stat.sublabel}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Vision image + comparison */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <FadeIn delay={0.25} className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden border border-border">
              <img
                src={VISION_IMG}
                alt="Person using BlueMatter BCI to control smart home devices"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 px-3 py-2 rounded-md bg-card/90 backdrop-blur-sm border border-border">
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                  VISION // SEAMLESS_CONTROL
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="lg:col-span-3">
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="px-6 py-4 bg-card/50 border-b border-border">
                <h3
                  className="text-sm font-semibold text-electric tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Competitive Comparison
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                        Feature
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                        Clinical
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                        Commercial
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-electric tracking-wider uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                        BlueMatter
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, i) => (
                      <tr key={row.category} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card/20" : ""}`}>
                        <td className="px-6 py-3 text-sm font-medium text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                          {row.category}
                        </td>
                        <td className="px-6 py-3 text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                          {row.clinical}
                        </td>
                        <td className="px-6 py-3 text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                          {row.commercial}
                        </td>
                        <td className="px-6 py-3 text-sm font-medium text-electric" style={{ fontFamily: "var(--font-body)" }}>
                          {row.bluematter}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
