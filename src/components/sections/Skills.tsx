"use client";

const SKILL_GROUPS = [
  { title: "SEO & SEM",           chips: ["Technical SEO","On-Page SEO","Off-Page SEO","Local SEO","Link Building","Keyword Research","Ahrefs","SEMrush","Screaming Frog","Google Search Console"] },
  { title: "Paid Advertising",    chips: ["Google Ads","Meta Ads","Facebook Ads","Instagram Ads","LinkedIn Ads","A/B Testing","ROI Optimization","Lead Generation"] },
  { title: "Analytics",           chips: ["Google Analytics 4","Google Tag Manager","Meta Pixel","Conversion Tracking","Microsoft Clarity","Reporting"] },
  { title: "Web Development",     chips: ["Next.js","TypeScript","React","Tailwind CSS","Vercel","SSR / SSG","API Routes"] },
  { title: "Automation",          chips: ["Python","Pandas","Playwright","Selenium","Zapier","Data Scraping"] },
  { title: "Content & Creative",  chips: ["Graphic Design","Ad Creatives","Canva","Photoshop","Copywriting","Content Creation","Email Marketing"] },
];

const CMS   = ["WordPress","Shopify","Strapi","Webflow","Ghost"];
const TOOLS = ["Google Search Console","Google Analytics","GTM","Ahrefs","SEMrush","Screaming Frog","Ubersuggest","Hootsuite","Brevo","Interakt","Leadpages","Apollo","Zapier","Microsoft Clarity","Photoshop","Canva"];

export function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <div className="inner">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">Capabilities</h2>

        {/* Skill grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(280px,100%), 1fr))",
          border: "1px solid var(--border)",
          borderRadius: "20px", overflow: "hidden",
        }}>
          {SKILL_GROUPS.map((g, i) => (
            <div key={g.title} style={{
              padding:     "clamp(1.5rem, 2.5vw, 2rem)",
              background:  "var(--bg-elevated)",
              borderRight: "1px solid var(--border)",
              borderBottom:"1px solid var(--border)",
            }}>
              <div style={{ fontSize: "0.875rem", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "1rem" }}>
                {g.title}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {g.chips.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* CMS + Tools */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(380px, 100%), 1fr))",
          gap: "3rem", marginTop: "4rem",
        }}>
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-quaternary)", marginBottom: "1.25rem" }}>
              CMS Platforms
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {CMS.map((c) => (
                <span key={c} style={{
                  padding: "8px 18px", borderRadius: "12px",
                  border: "1px solid var(--border)", background: "var(--bg-elevated)",
                  fontSize: "0.875rem", fontWeight: 600, letterSpacing: "-0.01em",
                  color: "var(--text-secondary)",
                }}>{c}</span>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-quaternary)", marginBottom: "1.25rem" }}>
              Tools & Software
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {TOOLS.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}