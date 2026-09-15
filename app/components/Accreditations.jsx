import Image from "next/image";
import styles from "./Accreditations.module.css";

// Rename the uploaded logo files to match these paths under
// public/images/accreditations/, or edit the src values below.
const ACCREDITATIONS = [
  { src: "/images/accreditations/npa.jpg", name: "Nigerian Ports Authority" },
  {
    src: "/images/accreditations/nimasa.jpg",
    name: "Nigerian Maritime Administration and Safety Agency",
  },
  {
    src: "/images/accreditations/customs.jpg",
    name: "Nigeria Customs Service",
  },
  {
    src: "/images/accreditations/immigration.png",
    name: "Nigeria Immigration Service",
  },
  {
    src: "/images/accreditations/dpr.png",
    name: "Department of Petroleum Resources",
  },
];

export default function Accreditations() {
  return (
    <section
      className={styles.section}
      aria-labelledby="accreditations-heading"
    >
      <div className={styles.inner}>
        <h2 id="accreditations-heading" className={styles.heading}>
          Accreditations
        </h2>

        <ul className={styles.grid}>
          {ACCREDITATIONS.map(({ src, name }) => (
            <li key={name} className={styles.item}>
              <div className={styles.badge}>
                <Image
                  src={src}
                  alt={name}
                  width={96}
                  height={96}
                  className={styles.logo}
                />
              </div>
              <p className={styles.name}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
