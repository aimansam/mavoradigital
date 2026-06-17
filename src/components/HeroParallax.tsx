/**
 * HeroParallax — Single-image hero layout (Rounds 1–5 improvements applied)
 *
 * Round 1: serif italic accent on last headline word, larger clamp, bigger proof stats, mobile CTA hierarchy
 * Round 2: scale fix, right-edge rounding, viewport-safe badge, dual micro-stats badge
 * Round 3: image entrance animation, scroll indicator safe position
 * Round 4: full-bleed mobile background, truncated mobile proof stats, reduced mobile padding
 * Round 5: image width/height, fetchpriority, backdrop-filter implicit fallback
 */

import React from "react";
import { motion } from "framer-motion";

// Lazy-load the WebGL beams canvas (client-side only — avoids SSR crash)
const HeroBeamsCanvas = React.lazy(() => import("./HeroBeamsCanvas"));

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

interface HeroParallaxProps {
  products: Product[];
  heading: string;
  subheading?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
  kicker?: string;
  proofLine?: string;
}

// ─── prefers-reduced-motion hook ────────────────────────────────────────────

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

// ─── Root component ──────────────────────────────────────────────────────────

export const HeroParallax: React.FC<HeroParallaxProps> = ({
  products,
  heading,
  ctaHref,
  ctaLabel,
  ctaSecondaryHref,
  ctaSecondaryLabel,
  proofLine,
}) => {
  const ref = React.useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  // Gate beams canvas to client-side only (avoids SSR WebGL crash)
  const [beamsMounted, setBeamsMounted] = React.useState(false);
  React.useEffect(() => {
    if (!reducedMotion) setBeamsMounted(true);
  }, [reducedMotion]);
  const featuredImage = products[0] ?? null;
  const words = heading.split(" ");

  return (
    <section
      ref={ref}
      className="hero-section relative min-h-svh w-full overflow-hidden bg-ink"
      aria-labelledby="hero-heading"
    >
      {/* ── Ambient background glow ───────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(ellipse 56% 52% at 14% 58%, rgba(23,107,77,0.26), transparent)",
            "radial-gradient(ellipse 38% 44% at 88% 12%, rgba(159,245,143,0.10), transparent)",
            "radial-gradient(ellipse 30% 34% at 72% 82%, rgba(23,107,77,0.10), transparent)",
          ].join(","),
        }}
      />

      {/* ── 3D animated beams (desktop background, client-side only) ── */}
      {beamsMounted && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden="true"
          style={{ opacity: 0.36 }}
        >
          <React.Suspense fallback={null}>
            <HeroBeamsCanvas />
          </React.Suspense>
        </div>
      )}

      {/* ── Mobile full-bleed background image (Round 4, item 14) ── */}
      {featuredImage && (
        <div
          className="pointer-events-none absolute inset-0 z-[2] lg:hidden"
          aria-hidden="true"
        >
          <img
            src={featuredImage.thumbnail}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="800"
            height="600"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
          {/* Dark overlay — heavier at bottom for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(6,17,12,0.72) 0%, rgba(6,17,12,0.78) 60%, rgba(6,17,12,0.92) 100%)",
            }}
          />
        </div>
      )}

      {/* ── Main grid ─────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-[860px] flex-col items-center justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24 lg:pt-44">

        {/* ═══════════ CENTERED CONTENT ═══════════ */}
        <div className="hero-content flex w-full flex-col items-center gap-8 text-center">

          {/* Headline */}
          <h1
            id="hero-heading"
            className="hero-title text-[clamp(2.75rem,6vw,6rem)] leading-[1.04] tracking-tight text-white"
          >
            {words.map((word, i) => {
              const isLast = i === words.length - 1;
              // Strip trailing punctuation from the last word for styling, then re-add
              const punctMatch = isLast ? word.match(/([^a-zA-Z0-9]*)$/) : null;
              const punct = punctMatch ? punctMatch[0] : "";
              const base = isLast ? word.slice(0, word.length - punct.length) : word;

              return (
                <span key={i} className="hero-word">
                  {isLast ? (
                    <>
                      <em
                        style={{
                          fontFamily: "'Cormorant Infant', serif",
                          fontStyle: "italic",
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {base}
                      </em>
                      {punct && <span style={{ fontStyle: "normal" }}>{punct}</span>}
                    </>
                  ) : word}
                </span>
              );
            })}
          </h1>

          {/* Proof stats — Round 1 item 3, Round 4 item 15 */}
          {proofLine && (
            <div
              className="hero-proof-line flex flex-wrap items-center gap-x-3 gap-y-2"
              aria-label="Social proof"
            >
              {proofLine.split(" · ").map((stat, i, arr) => (
                <React.Fragment key={i}>
                  {/* On mobile show only first 2 stats (i < 2) */}
                  <span
                    className={`whitespace-nowrap font-semibold ${i >= 2 ? "hidden sm:inline" : ""}`}
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(159,245,143,0.78)",
                    }}
                  >
                    {stat}
                  </span>
                  {i < arr.length - 1 && (
                    <span
                      className={`h-3.5 w-px flex-shrink-0 ${i >= 1 ? "hidden sm:block" : ""}`}
                      style={{ background: "rgba(159,245,143,0.22)" }}
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* CTA buttons — Round 1 item 4: primary full-width on mobile, secondary text-link */}
          {(ctaHref || ctaSecondaryHref) && (
            <div className="hero-actions flex flex-col gap-3 sm:flex-row sm:items-center">
              {ctaHref && ctaLabel && (
                <a
                  href={ctaHref}
                  className="hero-primary-cta ui-button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ember px-7 text-base font-semibold text-white transition sm:w-auto"
                  style={{
                    boxShadow:
                      "0 12px 32px rgba(10,59,43,0.42), inset 0 1px 0 rgba(255,255,255,0.14)",
                  }}
                >
                  {ctaLabel}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M2.5 7.5h10m-4-4 4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
              {ctaSecondaryHref && ctaSecondaryLabel && (
                // Mobile: plain text link; sm+: ghost pill button
                <a
                  href={ctaSecondaryHref}
                  className="ui-button inline-flex min-h-12 items-center justify-center gap-1.5 px-2 text-base font-semibold text-white/80 transition hover:text-white sm:rounded-full sm:border sm:px-7"
                  style={{
                    borderColor: "rgba(255,255,255,0.45)",
                    background: "transparent",
                  }}
                  // Override sm+ background inline
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "transparent";
                  }}
                >
                  {ctaSecondaryLabel}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className="sm:hidden"
                  >
                    <path
                      d="M2 6h8m-3-3 3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>


      </div>

      {/* ── Scroll indicator — Round 3 item 13: safe bottom offset ── */}
      <ScrollIndicator reduced={reducedMotion} />
    </section>
  );
};

// ─── Scroll indicator ────────────────────────────────────────────────────────

const ScrollIndicator: React.FC<{ reduced: boolean }> = ({ reduced }) => (
  <div
    className="absolute left-1/2 z-20 -translate-x-1/2"
    style={{ bottom: "max(1.5rem, 2.5vh)" }}
    aria-hidden="true"
  >
    <motion.div
      animate={reduced ? {} : { y: [0, 6, 0] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.4,
      }}
      className="flex flex-col items-center gap-1.5"
    >
      <span
        className="text-[0.62rem] font-semibold uppercase"
        style={{ color: "rgba(159,245,143,0.35)", letterSpacing: "0.16em" }}
      >
        Scroll
      </span>
      <svg
        width="18"
        height="10"
        viewBox="0 0 18 10"
        fill="none"
        aria-hidden="true"
        style={{ color: "rgba(159,245,143,0.28)" }}
      >
        <path
          d="M1 1l8 8 8-8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  </div>
);

export default HeroParallax;
