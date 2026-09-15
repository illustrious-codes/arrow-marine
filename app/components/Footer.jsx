import Link from "next/link";
import styles from "./Footer.module.css";

const PHONES = ["(+234)-1-2900947", "+234-8023242529"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2 className={styles.heading}>We&rsquo;d love to hear from you.</h2>

          <dl className={styles.details}>
            <div className={styles.row}>
              <dt>Address</dt>
              <dd>
                1, Admiralty Road (Admiralty House) off Fatai Idowu Arobieke
                Street, Lekki Phase 1, Lagos.
              </dd>
            </div>

            <div className={styles.row}>
              <dt>Email</dt>
              <dd>
                <a href="mailto:ops@arrowmarinelimited.com">
                  ops@arrowmarinelimited.com
                </a>
              </dd>
            </div>

            <div className={styles.row}>
              <dt>Phone</dt>
              <dd className={styles.phones}>
                {PHONES.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                    {phone}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year}{" "}
            <b className={styles.copyrightLink}>Arrow Marine Limited Nigeria</b>
          </p>
        </div>
      </div>
    </footer>
  );
}
