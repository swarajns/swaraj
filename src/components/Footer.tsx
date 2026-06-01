"use client";
export function Footer() {
  return (
    <footer
      style={{
        padding:        "1.5rem clamp(1.25rem, 5vw, 2.5rem)",
        borderTop:      "1px solid var(--border)",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        flexWrap:       "wrap",
        gap:            "1rem",
      }}
    >
      <span
        style={{
          fontSize:  "var(--text-xs)",
          color:     "var(--text-quaternary)",
          fontWeight: 400,
        }}
      >
        © 2026 Swaraj N S · Dubai, UAE
      </span>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          ["Email",   "mailto:swarajns79@gmail.com"],
          ["Website", "https://swarajns.online"    ],
          ["Phone",   "tel:+971555207899"           ],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              fontSize:   "var(--text-xs)",
              color:      "var(--text-quaternary)",
              fontWeight: 400,
              transition: "color 160ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-quaternary)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}