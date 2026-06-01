"use client";

import { useState, useRef, useEffect } from "react";

export function Hero() {
  const [playing, setPlaying]       = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef                    = useRef<HTMLVideoElement>(null);
  const heroRef                     = useRef<HTMLElement>(null);

 const handlePlay = () => {
  const v = videoRef.current;
  if (!v) return;
  v.currentTime = 0;
  v.muted = false;
  v.volume = 1;
  v.play()
    .then(() => setPlaying(true))
    .catch(() => {
      v.muted = true;
      v.play().then(() => {
        v.muted = false;
        setPlaying(true);
      });
    });
};

  const handleClose = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  return (
    <section
      ref={heroRef}
      style={{
        position:       "relative",
        minHeight:      "100dvh",
        overflow:       "hidden",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        background:     "#000",
      }}
    >
      {/* ── VIDEO always mounted, covers full screen ── */}
      <video
  ref={videoRef}
  src="/intro.mp4"
  playsInline
  muted
  autoPlay
  poster="/intro-poster.jpg"
  onCanPlay={() => setVideoReady(true)}
  onEnded={handleClose}
  style={{
    position:  "absolute",
    inset:     0,
    width:     "100%",
    height:    "100%",
    objectFit: "cover",
    opacity:   videoReady ? 1 : 0,
    transition:"opacity 600ms ease",
  }}
/>

      {/* ── Dark overlay — lighter when playing so video is clear ── */}
      <div
        style={{
          position:   "absolute",
          inset:      0,
          background: playing
            ? "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.3) 100%)",
          transition: "background 600ms ease",
          zIndex:     1,
        }}
      />

      {/* ── Shimmer while loading ── */}
      {!videoReady && (
        <div
          style={{
            position:       "absolute",
            inset:          0,
            zIndex:         0,
            background:     "linear-gradient(135deg, #0a0a0a 0%, #1c1c1e 50%, #0a0a0a 100%)",
            backgroundSize: "200% 200%",
            animation:      "shimmer 2s ease infinite",
          }}
        />
      )}

      {/* ── CENTER — Play button (hide when playing) ── */}
      {!playing && (
        <div
          style={{
            position:       "relative",
            zIndex:         2,
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            gap:            "2rem",
            animation:      "fadeIn 700ms ease forwards",
          }}
        >
          {/* Name above play */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize:      "clamp(0.6875rem, 0.65rem + 0.15vw, 0.75rem)",
                fontWeight:    600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:         "rgba(255,255,255,0.45)",
                marginBottom:  "0.75rem",
              }}
            >
              Performance Marketing & Growth Specialist
            </p>
            <h1
              style={{
                fontSize:      "clamp(2.5rem, 1rem + 6vw, 6.5rem)",
                fontWeight:    700,
                letterSpacing: "-0.05em",
                lineHeight:    0.95,
                color:         "#ffffff",
                textAlign:     "center",
              }}
            >
              Swaraj N S
            </h1>
          </div>

          {/* Big play button */}
          <button
            onClick={handlePlay}
            aria-label="Play intro video"
            style={{
              width:          88,
              height:         88,
              borderRadius:   "50%",
              background:     "rgba(255,255,255,0.15)",
              backdropFilter: "blur(20px)",
              border:         "1.5px solid rgba(255,255,255,0.3)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              transition:     "transform 200ms ease, background 200ms ease",
              cursor:         "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform  = "scale(1.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform  = "scale(1)";
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            }}
          >
            <svg
              width="28" height="32"
              viewBox="0 0 28 32"
              fill="white"
              style={{ marginLeft: "4px" }}
            >
              <path d="M0 0L28 16L0 32V0Z"/>
            </svg>
          </button>
        </div>
      )}

      {/* ── Close button when playing ── */}
      {playing && (
        <button
          onClick={handleClose}
          style={{
            position:       "absolute",
            top:            "clamp(5rem, 8vw, 6.5rem)",
            right:          "clamp(1.5rem, 4vw, 2.5rem)",
            zIndex:         3,
            display:        "flex",
            alignItems:     "center",
            gap:            "7px",
            padding:        "9px 20px",
            borderRadius:   "99px",
            background:     "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            border:         "1px solid rgba(255,255,255,0.2)",
            color:          "#fff",
            fontSize:       "13px",
            fontWeight:     500,
            transition:     "background 180ms",
            animation:      "fadeIn 400ms ease forwards",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
          Close
        </button>
      )}

      {/* ── BOTTOM — Read Profile button (always visible) ── */}
      <div
        style={{
          position:  "absolute",
          bottom:    "clamp(2.5rem, 5vw, 4rem)",
          left:      0,
          right:     0,
          zIndex:    3,
          display:   "flex",
          justifyContent: "center",
          animation: "fadeIn 900ms ease forwards",
        }}
      >
        <a
          href="#about"
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            "8px",
            padding:        "13px 32px",
            borderRadius:   "99px",
            background:     "rgba(255,255,255,0.10)",
            backdropFilter: "blur(20px)",
            border:         "1px solid rgba(255,255,255,0.22)",
            color:          "rgba(255,255,255,0.85)",
            fontSize:       "14px",
            fontWeight:     500,
            letterSpacing:  "-0.01em",
            transition:     "background 200ms, color 200ms, transform 200ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.18)";
            e.currentTarget.style.color      = "#fff";
            e.currentTarget.style.transform  = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.10)";
            e.currentTarget.style.color      = "rgba(255,255,255,0.85)";
            e.currentTarget.style.transform  = "translateY(0)";
          }}
        >
          Read Profile
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50%;   }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%;   }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
    </section>
  );
}