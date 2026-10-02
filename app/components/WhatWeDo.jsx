import Image from "next/image";
import styles from "./WhatWeDo.module.css";

// Rename the uploaded files wh1.jpg ... wh16.jpg to match these paths
// under public/images/services/, or edit the src values below.
const SERVICES = [
  {
    src: "/images/services/wh1.jpg",
    alt: "Marine Logistics",
    name: "Marine Logistics",
  },
  {
    src: "/images/services/wh2.jpg",
    alt: "Supply Base Management",
    name: "Supply Base Management",
  },
  {
    src: "/images/services/wh3.jpg",
    alt: "Towage & Pulling Operation",
    name: "Towage & Pulling Operation",
  },
  {
    src: "/images/services/wh4.jpg",
    alt: "Speedboat",
    name: "Speedboat",
  },
  {
    src: "/images/services/wh5.jpg",
    alt: "Customs Clearance Services",
    name: "Customs Clearance Services",
  },
  {
    src: "/images/services/wh6.jpg",
    alt: "Owner's Protective Agency",
    name: "Owner's Protective Agency",
  },
  {
    src: "/images/services/wh7.jpg",
    alt: "Sea Freight",
    name: "Sea Freight",
  },
  {
    src: "/images/services/wh8.jpg",
    alt: "Meet and Greet Services",
    name: "Meet and Greet Services",
  },
  {
    src: "/images/services/wh9.jpg",
    alt: "Visa Arrangements",
    name: "Visa Arrangements",
  },
  {
    src: "/images/services/wh10.jpg",
    alt: "Crew Welfare",
    name: "Crew Welfare",
  },
  {
    src: "/images/services/wh11.jpg",
    alt: "Security Escort",
    name: "Security Escort",
  },
  {
    src: "/images/services/wh12.jpg",
    alt: "Documentations",
    name: "Documentations",
  },
  {
    src: "/images/services/wh13.jpg",
    alt: "Immigration Assistance",
    name: "Immigration Assistance",
  },
  {
    src: "/images/services/wh14.jpg",
    alt: "Medical Care",
    name: "Medical Care",
  },
  {
    src: "/images/services/wh15.jpg",
    alt: "Emergency Services",
    name: "Emergency Services",
  },
  {
    src: "/images/services/wh16.jpg",
    alt: "Private Jetty",
    name: "Private Jetty",
  },
];

export default function WhatWeDo() {
  return (
    <section className={styles.section} aria-labelledby="what-we-do-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2 id="what-we-do-heading" className={styles.heading}>
            All best services from us
          </h2>
        </div>

        <ul className={styles.grid}>
          {SERVICES.map(({ src, name }) => (
            <li key={name} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.image}
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
