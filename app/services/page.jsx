import styles from "./page.module.css";

const CORE_SERVICES = [
  {
    title: "Supply Base Management",
    desc: "Coordinated logistics support for offshore and onshore supply operations, keeping cargo, equipment and materials moving efficiently between base and vessel.",
  },
  {
    title: "Freight Forwarding",
    desc: "End-to-end freight coordination across local and international routes, matched to the pace and demands of Oil & Gas and marine logistics.",
  },
  {
    title: "Customs Clearance Services",
    desc: "Full clearance handling that keeps shipments compliant and moving, backed by close liaison with local authorities.",
  },
];

const PROTECTIVE_SERVICES = [
  "Owner's Protective Agency both on and off shore",
  "Meet and greet services and attendance for vessel arrival",
  "Boat services, embark & disembarkation",
  "Car hire services / drop off and pick up from airport",
  "Immigration assistant, arrivals / departures",
  "Visa arrangements",
  "Crew handling: airport pickup, meet & greet",
  "Hotel bookings, arrangement & accommodations",
  "Shore passes, travel arrangements and local transport",
  "Crew welfare: mail and prepaid telephone calling card",
  "Delivery of spare parts to vessels in port / offshore",
  "Local purchase supply of provisions and fresh water",
  "Cabotage registration",
  "Liaison with local authorities and communications assistance",
  "Documentations",
  "Vessels clearance inward / outward",
  "Cash to Master",
  "Security escort services",
  "Bunkering and fuel supplies",
  "Medical care",
  "Emergency services to vessels and shore",
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* Hero / intro */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>What we do</p>
          <h1 className={styles.heading}>Our Services</h1>
          <p className={styles.intro}>
            We carry out a wide range of Marine Shipping and Agency services,
            including Supply Base Management, Freight Forwarding and Customs
            Clearance. These services are integral to our portfolio of Oil &amp;
            Gas and marine logistics solutions, and our commitment to excellence
            is constantly reinforced to fully and promptly serve the needs of
            every client in this segment.
          </p>
        </div>
      </section>

      {/* Core service pillars */}
      <section className={styles.pillars}>
        <div className={styles.container}>
          <div className={styles.pillarGrid}>
            {CORE_SERVICES.map((service) => (
              <div key={service.title} className={styles.pillarCard}>
                <span className={styles.pillarMark} aria-hidden="true" />
                <h3 className={styles.pillarTitle}>{service.title}</h3>
                <p className={styles.pillarDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency services */}
      <section className={styles.agency}>
        <div className={styles.container}>
          <div className={styles.agencyGrid}>
            <div className={styles.agencyIntro}>
              <p className={styles.eyebrow}>Agency Services</p>
              <h2 className={styles.subheading}>
                Every detail of the port call, handled
              </h2>
              <p className={styles.agencyText}>
                Our agency services span inward and outward vessel clearance,
                supervision and coordination of all aspects of the port call —
                from booking berth allocations and services ahead of the
                vessel&apos;s arrival, to documentation after the vessel has
                sailed.
              </p>
              <p className={styles.agencyText}>
                We ensure the following services are carried out to protect your
                ship and crew:
              </p>
            </div>

            <ul className={styles.serviceList}>
              {PROTECTIVE_SERVICES.map((item) => (
                <li key={item} className={styles.serviceItem}>
                  <svg
                    className={styles.checkIcon}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10.5l3.5 3.5L16 5.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>
              Need agency support for your next port call?
            </h2>
            <p className={styles.ctaText}>
              Talk to our team about vessel clearance, crew handling or supply
              base coordination.
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
