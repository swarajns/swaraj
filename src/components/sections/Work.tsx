"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  category:  string;
  title:     string;
  desc:      string;
  role:      string;
  stats:     { value: string; label: string }[];
  tags:      string[];
  href:      string;
  featured?: boolean;
};

const WEB_PROJECTS: Project[] = [
  {
    featured:  true,
    category:  "Web Development",
    title:     "Smart Auto UAE",
    role:      "Next.js Developer & Performance Marketing",
    desc:      "Built and manage two high-performance websites for Dubai's most trusted car protection centre — window tinting, PPF, ceramic coating and detailing across 4 branches.",
    stats:     [{ value: "4", label: "Branches" }, { value: "50K+", label: "Clients" }, { value: "95+", label: "PageSpeed" }],
    tags:      ["Next.js", "SEO", "Google Ads", "Meta Ads"],
    href:      "https://smartautouae.com",
  },
  {
    featured:  true,
    category:  "Web Development",
    title:     "Chauffeur Dubai",
    role:      "Next.js Developer & SEO",
    desc:      "Premium luxury chauffeur service website for Dubai's most trusted private driver company. SEO-optimised with high-converting landing pages for airport transfers and VIP transport.",
    stats:     [{ value: "24/7", label: "Availability" }, { value: "UAE", label: "Coverage" }, { value: "Top 3", label: "Google Rank" }],
    tags:      ["Next.js", "SEO", "Performance Marketing"],
    href:      "https://chauffeurdubai.ae",
  },
  {
    featured:  true,
    category:  "Web Development",
    title:     "Privilege Limo",
    role:      "Next.js Developer & Performance Marketing",
    desc:      "Full website build for a luxury limousine and chauffeur service in Dubai. Covers corporate travel, airport transfers, and VIP fleet booking with conversion-focused design.",
    stats:     [{ value: "AED 300+", label: "Bookings" }, { value: "UAE", label: "Coverage" }, { value: "High", label: "Conversion" }],
    tags:      ["Next.js", "SEO", "Google Ads", "Meta Ads"],
    href:      "https://privilegelimo.com",
  },
  {
    category:  "Web Development",
    title:     "Eterno Hair Transplant",
    role:      "Next.js Developer",
    desc:      "Modern medical clinic website for a hair transplant centre. Clean, trust-focused design with service pages, consultation booking, and SEO-optimised structure.",
    stats:     [{ value: "Fast", label: "Load Time" }, { value: "SEO", label: "Optimised" }, { value: "Mobile", label: "First" }],
    tags:      ["Next.js", "TypeScript", "Vercel"],
    href:      "https://hairtransplant-kohl.vercel.app",
  },
  {
    category:  "Web Development",
    title:     "Totalgard & Alreem Fibre",
    role:      "Next.js Developer",
    desc:      "Built performance-optimised Next.js websites for Totalgard UAE and Alreem Fibre — replacing legacy WordPress sites with faster, SEO-ready solutions.",
    stats:     [{ value: "2x", label: "Faster Load" }, { value: "SSR", label: "Architecture" }, { value: "SEO", label: "Optimised" }],
    tags:      ["Next.js", "SSR", "SEO", "Vercel"],
    href:      "https://totalgard.ae",
  },
  {
    category:  "Web Development",
    title:     "Al Falasi Limo",
    role:      "Next.js Developer",
    desc:      "Luxury limousine service website for the UAE market. Built with Next.js for maximum speed and SEO performance, targeting high-intent travellers across Dubai.",
    stats:     [{ value: "UAE", label: "Market" }, { value: "Fast", label: "Performance" }, { value: "SEO", label: "Ready" }],
    tags:      ["Next.js", "SEO", "Tailwind CSS"],
    href:      "https://alfalasilimo.com",
  },
];

const MARKETING_PROJECTS: Project[] = [
  {
    featured:  true,
    category:  "Performance Marketing",
    title:     "Smart Auto UAE — Full Funnel",
    role:      "Google Ads · Meta Ads · GA4 · GTM",
    desc:      "End-to-end performance marketing for Smart Auto UAE — Google Search & Display, Meta Ads targeting UAE drivers, GA4 analytics, Meta Pixel, and ongoing A/B testing.",
    stats:     [{ value: "4+", label: "Campaigns" }, { value: "UAE", label: "Targeted" }, { value: "ROI", label: "Focused" }],
    tags:      ["Google Ads", "Meta Ads", "GA4", "GTM", "A/B Testing"],
    href:      "https://smartautouae.com",
  },
  {
    featured:  true,
    category:  "SEO",
    title:     "Farmherbs Botanicals",
    role:      "SEO Executive · Social Media · Email Marketing",
    desc:      "Keyword research, on-page and off-page SEO, social media management, and email and WhatsApp marketing for an e-commerce Ayurvedic brand.",
    stats:     [{ value: "Top 5", label: "Keywords" }, { value: "E-Comm", label: "SEO" }, { value: "Multi", label: "Channel" }],
    tags:      ["SEO", "Social Media", "Email Marketing", "WhatsApp"],
    href:      "https://farmherbs.in",
  },
  {
    featured:  true,
    category:  "SEO & Performance Marketing",
    title:     "Paywize Technologies",
    role:      "Digital Marketing Specialist",
    desc:      "Grew organic traffic by 200% in 4 months through strategic SEO. Managed Google Ads, Meta Ads, LinkedIn campaigns, and social media for a fintech brand.",
    stats:     [{ value: "+200%", label: "Organic Traffic" }, { value: "4 Months", label: "Timeline" }, { value: "Multi", label: "Channel" }],
    tags:      ["SEO", "Google Ads", "Meta Ads", "LinkedIn Ads"],
    href:      "https://paywize.in",
  },
  {
    category:  "SEO",
    title:     "Chauffeur Dubai & Privilege Limo",
    role:      "SEO Specialist",
    desc:      "Local and international SEO for two luxury chauffeur brands in Dubai — keyword strategy, technical SEO, on-page optimisation, and link building to rank for high-intent travel searches.",
    stats:     [{ value: "Local", label: "SEO" }, { value: "Dubai", label: "Market" }, { value: "High", label: "Intent Traffic" }],
    tags:      ["SEO", "Technical SEO", "Link Building", "Local SEO"],
    href:      "https://chauffeurdubai.ae",
  },
  {
    category:  "SEO",
    title:     "Growth.cx — Multiple Clients",
    role:      "SEO Analyst",
    desc:      "Managed SEO strategy across multiple client accounts — on-page, off-page, technical audits, GTM conversion tracking, and monthly performance reporting.",
    stats:     [{ value: "10+", label: "Clients" }, { value: "Full", label: "SEO Stack" }, { value: "GA + GTM", label: "Tracking" }],
    tags:      ["SEO", "GTM", "Technical SEO", "Reporting"],
    href:      "https://growth.cx",
  },
  {
    category:  "Social Media",
    title:     "Paywize · Creative Wired · Farmherbs",
    role:      "Social Media Manager",
    desc:      "Managed social media presence for three brands across Instagram, Facebook, and LinkedIn — content creation, scheduling, community management, and paid campaign support.",
    stats:     [{ value: "3", label: "Brands" }, { value: "Multi", label: "Platform" }, { value: "Organic", label: "Growth" }],
    tags:      ["Social Media", "Content Creation", "Instagram", "LinkedIn"],
    href:      "https://paywize.in",
  },
];

/* ── Scroll reveal hook ── */
function useReveal(delay = 0) {
  const ref     = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return {
    ref,
    style: {
      opacity:    vis ? 1 : 0,
      transform:  vis ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 650ms ease ${delay}ms, transform 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    },
  };
}

/* ── Project card ── */
function ProjectCard({ p, delay }: { p: Project; delay: number }) {
  const reveal = useReveal(delay);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={reveal.ref}
      style={{
        ...reveal.style,
        padding:        "clamp(1.75rem, 3vw, 2.25rem)",
        borderRadius:   "24px",
        border:         `1px solid ${hovered ? "var(--border-strong)" : "var(--border)"}`,
        background:     "var(--bg-glass)",
        backdropFilter: "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        boxShadow:      hovered
          ? "0 20px 60px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.06) inset"
          : "0 4px 20px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.04) inset",
        display:        "flex",
        flexDirection:  "column",
        gap:            "1.25rem",
        transition:     "border-color 250ms, box-shadow 350ms cubic-bezier(0.16,1,0.3,1), transform 350ms cubic-bezier(0.16,1,0.3,1)",
        transform:      `translateY(${hovered ? "-4px" : "0"}) ${reveal.style.transform}`,
        position:       "relative",
        overflow:       "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Inner glow */}
      <div
        aria-hidden
        style={{
          position:     "absolute",
          top:          -60,
          right:        -60,
          width:        160,
          height:       160,
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents:"none",
          transition:   "opacity 300ms",
          opacity:      hovered ? 1 : 0,
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span
            style={{
              fontSize:      "0.6875rem",
              fontWeight:    600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color:         "var(--text-quaternary)",
            }}
          >
            {p.category}
          </span>
          <h3
            style={{
              fontSize:      "clamp(1rem, 0.9rem + 0.4vw, 1.25rem)",
              fontWeight:    700,
              letterSpacing: "-0.025em",
              color:         "var(--text-primary)",
              lineHeight:    1.2,
            }}
          >
            {p.title}
          </h3>
          <span style={{ fontSize: "0.8125rem", color: "var(--text-quaternary)", fontWeight: 400 }}>
            {p.role}
          </span>
        </div>

        {p.featured && (
          <span
            style={{
              flexShrink:    0,
              padding:       "4px 12px",
              borderRadius:  "99px",
              fontSize:      "0.6875rem",
              fontWeight:    600,
              border:        "1px solid var(--border)",
              color:         "var(--text-quaternary)",
              background:    "var(--bg-elevated)",
              letterSpacing: "0.04em",
              whiteSpace:    "nowrap",
            }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", lineHeight: 1.75, flexGrow: 1 }}>
        {p.desc}
      </p>

      {/* Stats */}
      <div
        style={{
          display:    "flex",
          gap:        "1.75rem",
          paddingTop: "1.25rem",
          borderTop:  "1px solid var(--border)",
          flexWrap:   "wrap",
        }}
      >
        {p.stats.map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontSize:      "clamp(1.125rem, 1rem + 0.5vw, 1.5rem)",
                fontWeight:    700,
                letterSpacing: "-0.035em",
                color:         "var(--text-primary)",
                lineHeight:    1,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize:      "0.6875rem",
                fontWeight:    500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color:         "var(--text-quaternary)",
                marginTop:     "5px",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tags + link */}
      <div
        style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          flexWrap:       "wrap",
          gap:            "0.75rem",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>

        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:    "inline-flex",
            alignItems: "center",
            gap:        "5px",
            fontSize:   "0.8125rem",
            fontWeight: 500,
            color:      "var(--text-quaternary)",
            transition: "color 160ms",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-quaternary)")}
        >
          Visit Site
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ── Tab button ── */
function Tab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding:       "8px 20px",
        borderRadius:  "99px",
        border:        `1px solid ${active ? "var(--border-strong)" : "var(--border)"}`,
        background:    active ? "var(--bg-elevated)" : "transparent",
        color:         active ? "var(--text-primary)" : "var(--text-quaternary)",
        fontSize:      "0.875rem",
        fontWeight:    active ? 600 : 400,
        letterSpacing: "-0.01em",
        transition:    "all 200ms ease",
        cursor:        "pointer",
      }}
    >
      {label}
    </button>
  );
}

export function Work() {
  const [tab, setTab] = useState<"web" | "marketing">("web");
  const projects = tab === "web" ? WEB_PROJECTS : MARKETING_PROJECTS;

  return (
    <section id="work" className="section-wrap">
      <div className="inner">
        <p className="eyebrow">Real Work</p>
        <h2 className="section-title">
          Websites built.<br />
          Campaigns run.
        </h2>

        {/* Tabs */}
        <div
          style={{
            display:      "flex",
            gap:          "8px",
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            flexWrap:     "wrap",
          }}
        >
          <Tab label="Web Development"      active={tab === "web"}       onClick={() => setTab("web")}       />
          <Tab label="Digital Marketing"    active={tab === "marketing"} onClick={() => setTab("marketing")} />
        </div>

        {/* Cards */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(380px, 100%), 1fr))",
            gap:                 "clamp(0.75rem, 1.5vw, 1rem)",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={i * 60} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
          <a
            href="#contact"
            style={{
              display:    "inline-flex",
              alignItems: "center",
              gap:        "6px",
              fontSize:   "0.875rem",
              fontWeight: 500,
              color:      "var(--text-tertiary)",
              transition: "color 160ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
          >
            Interested in working together?
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}