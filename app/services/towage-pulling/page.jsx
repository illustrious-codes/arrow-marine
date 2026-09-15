import styles from "./page.module.css";

const TUGBOATS = [
  {
    name: "T/B PLATA",
    specs: [
      { label: "Flag", value: "Nigerian" },
      { label: "GT", value: "321 T" },
      { label: "Bollard Pull", value: "40 T" },
      { label: "Speed", value: "12 knots" },
      { label: "Accommodation", value: "10 persons" },
    ],
  },
  {
    name: "T/B AFRICAN LEADER",
    specs: [
      { label: "Flag", value: "Nigerian" },
      { label: "GT", value: "174 T" },
      { label: "Bollard Pull", value: "30 T" },
      { label: "Speed", value: "12 knots" },
      { label: "Accommodation", value: "10 persons" },
    ],
  },
];

export default function TowagePullingPage() {
  return (
    <main className={styles.page}>
      {/* Hero / intro */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Services</p>
          <h1 className={styles.heading}>Towage &amp; Pulling Operation</h1>
          <p className={styles.intro}>
            We are owners and managers of two tugboats, providing reliable
            towage and pulling support for vessels operating within Nigerian
            waters.
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className={styles.fleet}>
        <div className={styles.container}>
          <div className={styles.fleetGrid}>
            {TUGBOATS.map((tug) => (
              <div key={tug.name} className={styles.vesselCard}>
                <div className={styles.vesselHeader}>
                  <span className={styles.vesselTag}>Tugboat</span>
                  <h2 className={styles.vesselName}>{tug.name}</h2>
                </div>

                <dl className={styles.specList}>
                  {tug.specs.map((spec) => (
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
              Need towage or pulling support for your vessel?
            </h2>
            <p className={styles.ctaText}>
              Get in touch to check tug availability and scheduling.
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
