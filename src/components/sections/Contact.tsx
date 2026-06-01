"use client";

const ROWS = [
  { label: "Email",    value: "swarajns79@gmail.com",      href: "mailto:swarajns79@gmail.com" },
  { label: "Phone",    value: "+971 555 207 899",           href: "tel:+971555207899"           },
  { label: "Website",  value: "swarajns.online",            href: "https://swarajns.online"     },
  { label: "Location", value: "Dubai, United Arab Emirates"                                     },
];

export function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <div className="inner">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let's work together</h2>

        <div className="contact-grid">
          {/* Left */}
          <div>
            <p style={{
              fontSize: "clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)",
              color: "var(--text-tertiary)", lineHeight: 1.85,
              maxWidth: "40ch", marginBottom: "2.5rem",
            }}>
              Looking for an SEO expert, paid ads specialist, or a Next.js
              developer who understands marketing? I'd love to hear about your project.
            </p>
            <a
              href="mailto:swarajns79@gmail.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 28px", borderRadius: "99px",
                background: "var(--text-primary)", color: "var(--bg)",
                fontSize: "14px", fontWeight: 600, letterSpacing: "-0.01em",
                transition: "opacity 180ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Send an Email
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="glass"
                style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", padding: "1.25rem 1.5rem",
                  borderRadius: "16px", gap: "1rem",
                }}
              >
                <span style={{
                  fontSize: "0.6875rem", fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  color: "var(--text-quaternary)", flexShrink: 0,
                }}>
                  {row.label}
                </span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.875rem", fontWeight: 500,
                      color: "var(--text-secondary)", textAlign: "right", transition: "color 160ms",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {row.value}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", textAlign: "right" }}>
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2.5rem, 6vw, 6rem);
          align-items: start;
        }
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}