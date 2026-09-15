import Image from "next/image";
import styles from "./MarineHero.module.css";

export default function MarineHero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/arrowmarine-banner.jpg"
        alt="Two tankers moored at a marine loading jetty, viewed from above"
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <p className={styles.leadIn}>Welcome to</p>
        <h1 className={styles.heading}>Arrow Marine Limited</h1>
        <div className={styles.rule} />
        <p className={styles.subhead}>
          We deliver the best range of marine shipping and agency services.
        </p>
        <p className={styles.bodyText}>
          <strong>Efficient and smooth port operations</strong> <br /> supply
          base management, freight forwarding and customs clearance services,
          and so much more.
        </p>
        <a className={styles.cta} href="#contact">
          Contact us
        </a>
      </div>
    </section>
  );
}
