"use client";

const JOBS = [
  {
    date: "Feb 2026 — Present", company: "Smart Auto LLC",
    role: "Performance Marketing & Growth Specialist",
    location: "Dubai, UAE", current: true,
    bullets: [
      "Built & managed high-performance websites using Next.js — speed, SEO & UX",
      "Planned and executed Google Ads (Search & Display) for lead generation and ROI",
      "Managed Meta Ads (Facebook & Instagram) targeting the UAE market",
      "Designed high-converting ad creatives, posters and marketing visuals",
      "Implemented GA4, Meta Pixel and GTM for conversion tracking",
      "A/B testing and landing page optimization for conversion efficiency",
    ],
  },
  {
    date: "Nov 2024 — Jul 2025", company: "Paywize Technologies Pvt. Ltd.",
    role: "Digital Marketing Specialist", location: "Bangalore, India",
    highlight: "↑ 200% organic traffic in 4 months",
    bullets: [
      "Google Ads & Meta Ads campaign management",
      "Social Media Management across key platforms",
      "Website Development — WordPress & Shopify",
      "LinkedIn Advertising",
      "Script and Content Creation",
      "Email & WhatsApp Marketing",
    ],
  },
  {
    date: "Dec 2023 — Oct 2024", company: "Piqstor",
    role: "Founder & Dropshipping Manager", location: "Kerala, India",
    bullets: [
      "Established and managed a full dropshipping business from scratch",
      "Product research & market analysis",
      "Budgeting, profit analysis, and expense management",
      "Meta Ads creation and optimization",
    ],
  },
  {
    date: "May 2023 — Dec 2023", company: "Growth.CX",
    role: "SEO Analyst", location: "Kerala, India",
    bullets: [
      "On-Page, Off-Page & Technical SEO across multiple clients",
      "Conversion tracking with Google Analytics & GTM",
      "Local & International SEO optimization",
      "Link building outreach and performance reporting",
    ],
  },
  {
    date: "Apr 2022 — May 2023", company: "Sreedhareeyam Farmherbs India Pvt. Ltd.",
    role: "SEO Executive (E-Commerce)", location: "Kerala, India",
    bullets: [
      "Keyword research, On-Page, Off-Page and Local SEO",
      "Website admin and social media account management",
      "Content writing, email and WhatsApp marketing",
    ],
  },
  {
    date: "Apr 2021 — Apr 2022", company: "Ancheril Agencies",
    role: "Documentation Executive", location: "Kerala, India",
    bullets: [
      "Import & export documentation and operations",
      "Shipping bill filing and phytosanitary clearing",
      "Bunkering documentation and operations",
    ],
  },
];

const FREELANCE = [
  {
    title: "Next.js Web Development", period: "Oct 2025 — Present",
    bullets: [
      "Custom-coded websites with Next.js SSR & SSG",
      "SEO-optimized fast-loading pages replacing WordPress sites",
      "API routes, form handling, responsive UI, Vercel deployment",
    ],
  },
  {
    title: "Python Automation", period: "Oct 2025 — Present",
    bullets: [
      "Google Maps & website data scraping",
      "Automated data collection, reporting, CSV/Excel processing",
      "Libraries: pandas, playwright, selenium",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <div className="inner">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Career Timeline</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {JOBS.map((job, i) => (
            <div
              key={i}
              style={{
                padding:      "clamp(1.75rem, 3vw, 2.5rem)",
                borderRadius: "20px",
                border:       "1px solid var(--border)",
                background:   job.current ? "var(--bg-elevated)" : "transparent",
                marginBottom: "0",
                transition:   "background 200ms ease",
              }}
            >
              {/* Header row */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", flexWrap: "wrap",
                gap: "0.75rem", marginBottom: "1.5rem",
              }}>
                <div>
                  <div style={{
                    fontSize: "0.75rem", color: "var(--text-quaternary)",
                    fontWeight: 500, letterSpacing: "0.02em", marginBottom: "6px",
                  }}>
                    {job.date} · {job.location}
                  </div>
                  <div style={{
                    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)",
                    fontWeight: 700, letterSpacing: "-0.025em", marginBottom: "4px",
                  }}>
                    {job.company}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", fontWeight: 400 }}>
                    {job.role}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
                  {job.current && (
                    <span style={{
                      padding: "4px 12px", borderRadius: "99px",
                      fontSize: "0.6875rem", fontWeight: 600,
                      border: "1px solid var(--border)", color: "var(--text-tertiary)",
                      background: "var(--bg-glass)", letterSpacing: "0.03em",
                    }}>
                      Current
                    </span>
                  )}
                  {"highlight" in job && (
                    <span style={{
                      padding: "4px 12px", borderRadius: "99px",
                      fontSize: "0.6875rem", fontWeight: 600,
                      background: "rgba(52,199,89,0.1)", color: "#34c759",
                      border: "1px solid rgba(52,199,89,0.2)",
                    }}>
                      {job.highlight}
                    </span>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {job.bullets.map((b, j) => (
                  <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--text-quaternary)", fontSize: "10px", paddingTop: "5px", flexShrink: 0 }}>◆</span>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", lineHeight: 1.7, maxWidth: "none" }}>
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Freelance */}
        <div style={{ marginTop: "4rem" }}>
          <p style={{
            fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--text-quaternary)", marginBottom: "1.5rem",
          }}>
            Independent Work
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(380px, 100%), 1fr))",
            gap: "0.5rem",
          }}>
            {FREELANCE.map((f) => (
              <div key={f.title} style={{
                padding: "clamp(1.5rem, 2.5vw, 2rem)",
                borderRadius: "20px", border: "1px solid var(--border)",
                background: "var(--bg-elevated)",
              }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.015em", marginBottom: "4px" }}>
                  {f.title}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-quaternary)", marginBottom: "1.25rem", fontWeight: 500 }}>
                  {f.period} · Remote
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  {f.bullets.map((b) => (
                    <div key={b} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--text-quaternary)", fontSize: "10px", paddingTop: "5px", flexShrink: 0 }}>◆</span>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", lineHeight: 1.65, maxWidth: "none" }}>{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}