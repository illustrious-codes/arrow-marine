import styles from "./WhoWeAre.module.css";

export default function WhoWeAre() {
  return (
    <section className={styles.section} aria-labelledby="who-we-are-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>About us</p>
        <h1 id="who-we-are-heading" className={styles.heading}>
          Who we are
        </h1>

        <div className={styles.body}>
          <p>
            We are a marine shipping services company founded in 2017 by Thanos
            Theocharis. We began operations as a marine shipping agent,
            providing services such as manning and other shipping operations,
            and have since expanded to provide other related, in-demand
            services.
          </p>
          <p>
            Our company works with both local and international clients, be it
            shipowners, charterers or traders, and aims to improve the business
            relationship between local charterers and owners and international
            fleets.
          </p>
          <p>
            We handle general cargo, bulkers, tankers, gas carriers, chemical
            tankers, containers, specialized heavy-lift carriers and more.
          </p>
          <p>
            We arrange all formalities required for vessels in our care,
            including port dues, river and dock pilots, mooring, discharging and
            loading, ship&rsquo;s matters, customs clearance, embarkation and
            disembarkation, and delivery of spare parts and provisions.
          </p>
          <p>
            We know the local, state and federal regulations, as well as port
            information, restrictions and suppliers. We are NIMASA (the Nigerian
            Maritime Administration and Safety Agency) compliant and abide by
            local regulations. Our company is duly registered with all
            government agencies whose activities impact on shipping operations.
          </p>
        </div>
      </div>
    </section>
  );
}
