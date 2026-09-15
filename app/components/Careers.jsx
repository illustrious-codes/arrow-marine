import styles from "./Careers.module.css";

export default function Careers() {
  return (
    <section className={styles.section} aria-labelledby="careers-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Join our team</p>
        <h1 id="careers-heading" className={styles.heading}>
          Careers
        </h1>

        <div className={styles.empty}>
          <span className={styles.mark} aria-hidden="true" />
          <p className={styles.emptyText}>There are currently no openings.</p>
          <p className={styles.emptySub}>
            Check back soon, or reach out to us directly, we&rsquo;re always
            glad to hear from experienced shipping professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
