import styles from "./page.module.css";

const VESSELS = [
  {
    name: "ARROW I",
    type: "Work Boat",
    specs: [
      { label: "Length", value: "10 M" },
      { label: "Model", value: "Yamaha Engines 250HP Four Stroke Double" },
      { label: "Accommodation", value: "6 persons" },
    ],
  },
  {
    name: "ARROW II",
    type: "Speed Boat",
    specs: [
      { label: "LOA", value: "11.58 M" },
      { label: "Model", value: "Yamaha Engines: 2 x F350 HP Yamaha" },
      { label: "Accommodation", value: "3 persons" },
    ],
  },
];

export default function SpeedboatWorkboatPage() {
  return (
    <main className={styles.page}>
      {/* Hero / intro */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Services</p>
          <h1 className={styles.heading}>Speed Boat &amp; Work Boat</h1>
          <p className={styles.intro}>
            We are owners and managers of two vessels, providing fast, reliable
            crew transfer and work support across our marine and offshore
            operations.
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className={styles.fleet}>
        <div className={styles.container}>
          <div className={styles.fleetGrid}>
            {VESSELS.map((vessel) => (
              <div key={vessel.name} className={styles.vesselCard}>
                <div className={styles.vesselHeader}>
                  <span className={styles.vesselTag}>{vessel.type}</span>
                  <h2 className={styles.vesselName}>{vessel.name}</h2>
                </div>

                <dl className={styles.specList}>
                  {vessel.specs.map((spec) => (
                    <div key={spec.label} className={styles.specRow}>
                      <dt className={styles.specLabel}>{spec.label}</dt>
                      <dd className={styles.specValue}>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>
              Need speed boat or work boat support?
            </h2>
            <p className={styles.ctaText}>
              Get in touch to check vessel availability and scheduling.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
