"use client";

import { useEffect, useRef, useState } from "react";

const PILLARS = [
  {
    stat:     "200%",
    statLabel:"Traffic Growth",
    title:    "Marketing Maven",
    desc:     "4+ years driving measurable growth through SEO, SEM, Google Ads and Meta Ads across India and the UAE.",
  },
  {
    stat:     "10+",
    statLabel:"Projects Built",
    title:    "Full-Stack Developer",
    desc:     "Building modern, high-performance web apps with Next.js, React, TypeScript, and Supabase.",
  },
  {
    stat:     "10K+",
    statLabel:"Data Points",
    title:    "Python Automation",
    desc:     "Creating intelligent scraping bots, automation pipelines, and data collection tools.",
  },
  {
    stat:     "99+",
    statLabel:"PageSpeed Score",
    title:    "Performance Focused",
    desc:     "Every website built is optimized for speed, SEO, and exceptional user experience.",
  },
];

const SKILLS = [
  { label: "Digital Marketing & SEO",     pct: 95 },
  { label: "Next.js & React Development", pct: 90 },
  { label: "Python & Automation",         pct: 88 },
  { label: "UI/UX Design",                pct: 85 },
];

/* ── Animated skill bar ── */
function AnimatedBar({ pct }: { pct: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), 200);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div
      ref={ref}
      style={{
        height:       "3px",
        borderRadius: "99px",
        background:   "rgba(255,255,255,0.08)",
        overflow:     "hidden",
      }}
    >
      <div
        style={{
          height:     "100%",
          width:      `${width}%`,
          borderRadius:"99px",
          background: "linear-gradient(90deg, var(--text-primary), var(--text-secondary))",
          transition: "width 1100ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  );
}

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

/* ── Single pillar card ── */
function PillarCard({
  pillar,
  delay,
}: {
  pillar: typeof PILLARS[0];
  delay: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        padding:        "clamp(1.75rem, 3vw, 2.25rem)",
        borderRadius:   "24px",
        border:         "1px solid rgba(255,255,255,0.08)",
        background:     "var(--bg-glass)",
        backdropFilter: "blur(32px) saturate(180%)",
        WebkitBackdropFilter: "blur(32px) saturate(180%)",
        boxShadow:      "0 8px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.06) inset",
        display:        "flex",
        flexDirection:  "column",
        gap:            "1.25rem",
        opacity:        visible ? 1 : 0,
        transform:      visible ? "translateY(0)" : "translateY(32px)",
        transition:     `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        position:       "relative",
        overflow:       "hidden",
      }}
    >
      {/* Subtle inner glow top-left */}
      <div
        aria-hidden
        style={{
          position:     "absolute",
          top:          -40,
          left:         -40,
          width:        120,
          height:       120,
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          pointerEvents:"none",
        }}
      />

      {/* Stat */}
      <div>
        <div
          style={{
            fontSize:      "clamp(2.25rem, 1.5rem + 3vw, 3.75rem)",
            fontWeight:    700,
            letterSpacing: "-0.05em",
            lineHeight:    1,
            color:         "var(--text-primary)",
          }}
        >
          {pillar.stat}
        </div>
        <div
          style={{
            fontSize:      "0.6875rem",
            fontWeight:    600,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            color:         "var(--text-quaternary)",
            marginTop:     "5px",
          }}
        >
          {pillar.statLabel}
        </div>
      </div>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

      <div>
        <div
          style={{
            fontSize:      "1rem",
            fontWeight:    650,
            letterSpacing: "-0.015em",
            color:         "var(--text-primary)",
            marginBottom:  "6px",
          }}
        >
          {pillar.title}
        </div>
        <p
          style={{
            fontSize:   "0.875rem",
            color:      "var(--text-tertiary)",
            lineHeight: 1.7,
          }}
        >
          {pillar.desc}
        </p>
      </div>
    </div>
  );
}

export function WhoIAm() {
  const bioReveal    = useReveal();
  const skillsReveal = useReveal();

  return (
    <section id="who-i-am" className="section-wrap">
      <div className="inner">
        <p className="eyebrow">Who I Am</p>
        <h2 className="section-title">
          One person.<br />Two skill sets.
        </h2>

        {/* ── Pillar cards ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))",
            gap:                 "clamp(0.75rem, 1.5vw, 1rem)",
            marginBottom:        "clamp(4rem, 7vw, 6rem)",
          }}
        >
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} pillar={p} delay={i * 80} />
          ))}
        </div>

        {/* ── Bio + skill bars ── */}
        <div className="whoiam-bottom-grid">

          {/* Bio card */}
          <div
            ref={bioReveal.ref}
            style={{
              padding:        "clamp(2rem, 3.5vw, 2.75rem)",
              borderRadius:   "24px",
              border:         "1px solid rgba(255,255,255,0.08)",
              background:     "var(--bg-glass)",
              backdropFilter: "blur(32px) saturate(180%)",
              WebkitBackdropFilter: "blur(32px) saturate(180%)",
              boxShadow:      "0 8px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.06) inset",
              display:        "flex",
              flexDirection:  "column",
              gap:            "1.25rem",
              opacity:        bioReveal.visible ? 1 : 0,
              transform:      bioReveal.visible ? "translateY(0)" : "translateY(28px)",
              transition:     "opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div
              style={{
                fontSize:      "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)",
                fontWeight:    650,
                letterSpacing: "-0.025em",
                lineHeight:    1.3,
                color:         "var(--text-primary)",
              }}
            >
              Marketing strategy meets technical execution.
            </div>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

            {[
              "With over 4 years of experience, I specialize in creating data-driven marketing campaigns and building scalable web applications that drive real business results.",
              "My unique blend of marketing expertise and technical skills allows me to bridge the gap between business goals and technical implementation, delivering solutions that truly make an impact.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize:   "clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)",
                  color:      "var(--text-tertiary)",
                  lineHeight: 1.85,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Skills card */}
          <div
            ref={skillsReveal.ref}
            style={{
              padding:        "clamp(2rem, 3.5vw, 2.75rem)",
              borderRadius:   "24px",
              border:         "1px solid rgba(255,255,255,0.08)",
              background:     "var(--bg-glass)",
              backdropFilter: "blur(32px) saturate(180%)",
              WebkitBackdropFilter: "blur(32px) saturate(180%)",
              boxShadow:      "0 8px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.06) inset",
              display:        "flex",
              flexDirection:  "column",
              gap:            "0",
              opacity:        skillsReveal.visible ? 1 : 0,
              transform:      skillsReveal.visible ? "translateY(0)" : "translateY(28px)",
              transition:     "opacity 700ms ease 120ms, transform 700ms cubic-bezier(0.16,1,0.3,1) 120ms",
            }}
          >
            <div
              style={{
                fontSize:      "0.6875rem",
                fontWeight:    600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         "var(--text-quaternary)",
                marginBottom:  "1.75rem",
              }}
            >
              Proficiency
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {SKILLS.map((s, i) => (
                <div key={s.label}>
                  <div
                    style={{
                      display:        "flex",
                      justifyContent: "space-between",
                      alignItems:     "baseline",
                      marginBottom:   "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize:  "0.9375rem",
                        fontWeight: 500,
                        color:     "var(--text-secondary)",
                      }}
                    >
                      {s.label}
                    </span>
                    <span
                      style={{
                        fontSize:      "0.75rem",
                        fontWeight:    600,
                        color:         "var(--text-quaternary)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {s.pct}%
                    </span>
                  </div>
                  <AnimatedBar pct={s.pct} />
                </div>
              ))}
            </div>

            {/* Always learning note */}
            <div
              style={{
                marginTop:    "2rem",
                paddingTop:   "1.5rem",
                borderTop:    "1px solid rgba(255,255,255,0.07)",
                fontSize:     "0.8125rem",
                color:        "var(--text-quaternary)",
                lineHeight:   1.65,
                fontStyle:    "italic",
              }}
            >
              Technology evolves rapidly — I dedicate time daily to staying ahead of the curve.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .whoiam-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(0.75rem, 1.5vw, 1rem);
          align-items: start;
        }
        @media (max-width: 700px) {
          .whoiam-bottom-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}