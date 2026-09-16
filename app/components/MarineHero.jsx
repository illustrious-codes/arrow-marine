"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MarineHero.module.css";

const SLIDES = [
  {
    image: "/images/arrowmarine-banner.jpg",
    alt: "Two tankers moored at a marine loading jetty, viewed from above",
    leadIn: "Welcome to",
    heading: "Arrow Marine Limited",
    text: "We deliver the best range of marine shipping and agency services.",
    cta: "Contact us",
  },
  {
    image: "/images/arrow-banner1.jpg",
    alt: "An offshore platform and supply vessel at sea",
    leadIn: null,
    heading: "Efficient and Smooth Port Operations",
    text: "Supply base management, freight forwarding and customs clearance services, and so much more.",
    cta: "Contact us",
    headingCompact: true, // slightly smaller heading font so it fits on 1 line on desktop
  },
];

const AUTOPLAY_MS = 3000;

export default function MarineCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timerRef.current);
  }, [active]);

  return (
    <section className={styles.carousel} aria-roledescription="carousel">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`${styles.slide} ${
            index === active ? styles.slideActive : ""
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={styles.slideImage}
          />
          <div className={styles.slideOverlay} />

          <div
            className={`${styles.slideContent} ${
              slide.headingCompact ? styles.slideContentWide : ""
            }`}
          >
            {slide.leadIn && <p className={styles.leadIn}>{slide.leadIn}</p>}
            <h1
              className={`${styles.heading} ${styles.headingNoWrap} ${
                slide.headingCompact ? styles.headingCompact : ""
              }`}
            >
              {slide.heading}
            </h1>
            <div className={styles.rule} />
            <p className={styles.bodyText}>{slide.text}</p>
            <Link className={styles.cta} href="/contact">
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      <button
        type="button"
        className={`${styles.navButton} ${styles.navPrev}`}
        onClick={goPrev}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M15 5 L8 12 L15 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className={`${styles.navButton} ${styles.navNext}`}
        onClick={goNext}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M9 5 L16 12 L9 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.dots}>
        {SLIDES.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={`${styles.dot} ${
              index === active ? styles.dotActive : ""
            }`}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
          />
        ))}
      </div>
    </section>
  );
}
