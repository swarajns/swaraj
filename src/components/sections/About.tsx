"use client";

const CONTACT_ITEMS = [
  { icon: "✉", label: "swarajns79@gmail.com", href: "mailto:swarajns79@gmail.com" },
  { icon: "✆", label: "+971 555 207 899",      href: "tel:+971555207899"           },
  { icon: "◎", label: "swarajns.online",        href: "https://swarajns.online"    },
  { icon: "⌖", label: "Dubai, United Arab Emirates"                                },
];

const LANGUAGES = ["English", "Hindi", "Malayalam", "Tamil"];

export function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="inner">
        <p className="eyebrow">About</p>
        <h2 className="section-title">
          Marketer who codes.<br />
          Developer who markets.
        </h2>

        <div className="about-grid">
          {/* ── Left card ── */}
          <div
            className="glass"
            style={{
              borderRadius: "20px",
              padding:      "clamp(1.75rem, 3vw, 2.5rem)",
              alignSelf:    "start",
            }}
          >
            {/* Monogram */}
            <div
              style={{
                width:          60,
                height:         60,
                borderRadius:   "16px",
                background:     "var(--text-primary)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                marginBottom:   "1.5rem",
              }}
            >
              <span style={{ color: "var(--bg)", fontWeight: 800, fontSize: "18px", letterSpacing: "-0.02em" }}>
                SN
              </span>
            </div>

            <div style={{ fontWeight: 650, fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "4px" }}>
              Swaraj N S
            </div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", marginBottom: "1.75rem", lineHeight: 1.4 }}>
              Performance Marketing & Growth Specialist
            </div>

            <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CONTACT_ITEMS.map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: 16, flexShrink: 0, fontSize: "13px", color: "var(--text-quaternary)", textAlign: "center" }}>
                    {c.icon}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", transition: "color 160ms" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>{c.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ height: "1px", background: "var(--border)", margin: "1.5rem 0" }} />

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {LANGUAGES.map((l) => (
                <span key={l} className="chip">{l}</span>
              ))}
            </div>
          </div>

          {/* ── Right — bio ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              "Performance-focused Digital Marketing & Growth Specialist with 4+ years of experience spanning SEO, paid advertising, and lead generation across India and the UAE.",
              "I bridge the gap between marketing strategy and technical execution — managing Google Ads and Meta Ads campaigns while building the high-performance Next.js websites that power them. My Python automation skills let me go further than most marketers.",
              "Currently driving growth at Smart Auto LLC in Dubai, implementing full-funnel tracking with GA4, Meta Pixel, and GTM. I measure everything, optimize constantly, and build the systems that make growth repeatable.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize:   "clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)",
                  color:      "var(--text-tertiary)",
                  lineHeight: 1.85,
                  maxWidth:   "54ch",
                }}
              >
                {para}
              </p>
            ))}

            {/* Education */}
            <div style={{ marginTop: "1rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <p style={{
                fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--text-quaternary)", marginBottom: "1.5rem",
              }}>
                Education
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { year: "2019–2020", title: "Professional Diploma in Shipping & Logistics", org: "Govt. of Kerala" },
                  { year: "2018–2019", title: "Diploma in Computer Application (Software)",  org: "LBS Institute for Science & Technology" },
                ].map((edu) => (
                  <div key={edu.title} style={{ display: "flex", gap: "1.25rem" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-quaternary)", fontWeight: 500, whiteSpace: "nowrap", paddingTop: "2px", minWidth: "76px" }}>
                      {edu.year}
                    </span>
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "3px" }}>
                        {edu.title}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-quaternary)" }}>
                        {edu.org}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: clamp(2.5rem, 5vw, 5rem);
          align-items: start;
        }
        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}