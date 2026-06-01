"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         200,
          height:         "64px",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          paddingInline:  "clamp(1.25rem, 5vw, 2.5rem)",
          background:     scrolled ? "var(--bg-glass)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom:   scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition:     "background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        {/* ── Logo ── */}
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <div
            style={{
              width:          34,
              height:         34,
              borderRadius:   "10px",
              background:     "var(--text-primary)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              flexShrink:     0,
            }}
          >
            <span
              style={{
                color:         "var(--bg)",
                fontWeight:    800,
                fontSize:      "12px",
                letterSpacing: "-0.02em",
              }}
            >
              SN
            </span>
          </div>
          <span
            style={{
              fontWeight:    600,
              fontSize:      "15px",
              letterSpacing: "-0.02em",
              color:         "var(--text-primary)",
            }}
          >
            Swaraj N S
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize:   "14px",
                fontWeight: 450,
                color:      "var(--text-tertiary)",
                transition: "color 160ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Actions ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            style={{
              width:          36,
              height:         36,
              borderRadius:   "50%",
              border:         "1px solid var(--border)",
              background:     "var(--bg-glass)",
              backdropFilter: "blur(10px)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              color:          "var(--text-tertiary)",
              transition:     "color 160ms, background 160ms",
              fontSize:       "16px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-elevated)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-tertiary)";
              (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-glass)";
            }}
          >
            {theme === "dark" ? "☀︎" : "☽"}
          </button>

          {/* Hire me — desktop only */}
          <a
            href="mailto:swarajns79@gmail.com"
            className="desktop-nav"
            style={{
              padding:       "8px 20px",
              borderRadius:  "99px",
              background:    "var(--text-primary)",
              color:         "var(--bg)",
              fontSize:      "13px",
              fontWeight:    600,
              letterSpacing: "-0.01em",
              transition:    "opacity 160ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Hire me
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              display:        "none",
              width:          36,
              height:         36,
              borderRadius:   "50%",
              border:         "1px solid var(--border)",
              background:     "var(--bg-glass)",
              alignItems:     "center",
              justifyContent: "center",
              color:          "var(--text-primary)",
              fontSize:       "18px",
              lineHeight:     1,
            }}
          >
            {menuOpen ? "✕" : "≡"}
          </button>
        </div>
      </header>

      {/* ── Mobile fullscreen menu ── */}
      {menuOpen && (
        <div
          style={{
            position:       "fixed",
            inset:          0,
            zIndex:         199,
            background:     "var(--bg-glass-heavy)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            justifyContent: "center",
            gap:            "2.5rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize:      "clamp(2rem, 7vw, 3rem)",
                fontWeight:    700,
                letterSpacing: "-0.04em",
                color:         "var(--text-primary)",
                transition:    "opacity 160ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {link.label}
            </a>
          ))}

          <a
            href="mailto:swarajns79@gmail.com"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop:     "1rem",
              padding:       "13px 36px",
              borderRadius:  "99px",
              background:    "var(--text-primary)",
              color:         "var(--bg)",
              fontSize:      "16px",
              fontWeight:    600,
              letterSpacing: "-0.01em",
            }}
          >
            Get in Touch
          </a>
        </div>
      )}

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}